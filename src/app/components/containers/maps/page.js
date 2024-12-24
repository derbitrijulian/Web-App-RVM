'use client';
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { getRvmLocations } from '@/services/location-service';
import { getLocationName } from '../../../../utils/location';
import Image from 'next/image';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

export default function Map() {
  const [icon, setIcon] = useState(null);
  const [currentLocationIcon, setCurrentLocationIcon] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [rvmLocations, setRvmLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef(null);
  const routeRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);

      const initializeLeaflet = async () => {
        const defaultIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        const currentLocationCustomIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
          iconSize: [48, 48],
          iconAnchor: [24, 48],
        });

        setIcon(defaultIcon);
        setCurrentLocationIcon(currentLocationCustomIcon);

        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setCurrentLocation([latitude, longitude]);
              getLocationName(latitude, longitude).then((name) =>
                setLocationName(name)
              );
            },
            (error) => {
              console.error('Error getting location:', error.message);
            }
          );
        } else {
          console.error('Geolocation not supported by this browser');
        }

        const updatedRvmLocations = await getRvmLocations();

        const updatedMarkers = await Promise.all(
          updatedRvmLocations.map(async (marker) => {
            const position = [
              marker.position.latitude,
              marker.position.longitude,
            ];
            const locationName = await getLocationName(
              marker.position.latitude,
              marker.position.longitude
            );
            return { ...marker, position, locationName };
          })
        );
        setRvmLocations(updatedMarkers);
      };

      initializeLeaflet();
    }
  }, []);

  const handleMarkerClick = (rvm) => {
    if (currentLocation) {
      const currentLatLng = L.latLng(currentLocation);
      const rvmLatLng = L.latLng(rvm.position[0], rvm.position[1]);

      const calculatedDistance = currentLatLng.distanceTo(rvmLatLng);
      setDistance(calculatedDistance);

      if (mapRef.current) {
        if (routeRef.current) {
          mapRef.current.removeControl(routeRef.current);
        }

        const route = L.Routing.control({
          waypoints: [currentLatLng, rvmLatLng],
          routeWhileDragging: true,
          lineOptions: { styles: [{ color: 'blue', weight: 4 }] },
          show: false,
          addWaypoints: false,
        }).addTo(mapRef.current);

        routeRef.current = route;
      }
    } else {
      console.error('Current location is not set yet!');
    }
  };

  const handleSearch = () => {
    const filteredLocations = rvmLocations.filter((rvm) =>
      rvm.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setRvmLocations(filteredLocations);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">RVM Finder</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
          <input
            type="text"
            placeholder="Search RVM..."
            className="w-full p-2 mb-4 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <ul>
            {rvmLocations.map((rvm) => (
              <li
                key={rvm.id}
                className="p-2 mb-2 bg-white shadow rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleMarkerClick(rvm)}
              >
                {rvm.name}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1">
          <MapContainer
            center={currentLocation || [-6.2088, 106.8456]}
            zoom={12}
            className="h-full w-full"
            whenCreated={(map) => {
              mapRef.current = map;
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {currentLocation && (
              <Marker position={currentLocation} icon={currentLocationIcon}>
                <Popup>
                  Your Current Location: {locationName || 'Loading...'}
                </Popup>
              </Marker>
            )}
            {icon &&
              rvmLocations.map((rvm) => (
                <Marker
                  key={rvm.id}
                  position={rvm.position}
                  icon={icon}
                  eventHandlers={{
                    click: () => handleMarkerClick(rvm),
                  }}
                >
                  <Popup>
                    <h3 className="font-bold">{rvm.name}</h3>
                    <p>Location: {rvm.locationName}</p>
                    <p>
                      Capacity: {rvm.capacity}% ({rvm.capacityStatus})
                    </p>
                    {rvm.image && (
                      <Image
                        src={rvm.image}
                        alt={rvm.name}
                        className="w-full h-auto my-2"
                      />
                    )}
                    {distance !== null && (
                      <p>
                        Distance:{' '}
                        {distance >= 1000
                          ? `${(distance / 1000).toFixed(2)} km`
                          : `${distance.toFixed(2)} m`}
                      </p>
                    )}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${rvm.position[0]},${rvm.position[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Open in Google Maps
                    </a>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
          <button
            onClick={() => {
              if (!mapRef.current || !currentLocation) {
                console.error('Map or current location is not ready yet!');
                return;
              }
              mapRef.current.setView(currentLocation, 14);
            }}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
          >
            My Location
          </button>
        </main>
      </div>
    </div>
  );
}
