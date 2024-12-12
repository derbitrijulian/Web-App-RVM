'use client';
import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    ); // Adding the 'verbose' parameter with a value of false

    scanner.render(
      (decodedText, decodedResult) => {
        // Handle the scanned code
        console.log('Decoded Text: ', decodedText);
        setScanResult(decodedText);
        scanner.clear(); // Stop scanning after the first result
      },
      (errorMessage) => {
        // Handle scan errors or unsuccessful attempts
        console.warn('Scan error: ', errorMessage);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>

      <div id="reader" className="w-full max-w-md bg-gray-300 rounded-md"></div>

      {scanResult && (
        <div className="mt-4 p-4 bg-green-100 border border-green-500 rounded">
          <p className="text-green-800 font-medium">Scanned Result:</p>
          <p className="text-sm text-gray-800 break-words">{scanResult}</p>
        </div>
      )}
    </div>
  );
}
