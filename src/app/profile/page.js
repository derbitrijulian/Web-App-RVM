'use client';
import { fetchUser } from '@/services/user-service';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [userDetail, setUserDetail] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserActiveDetail = async () => {
      try {
        const data = await fetchUser();
        console.log('Fetched Data:', data); 
        setUserDetail(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch user details.');
      }
    };

    fetchUserActiveDetail();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!userDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Detail Users</h1>
       <div>{userDetail.user.email}</div>
      <pre>{JSON.stringify(userDetail, null, 2)}</pre>
      <li>
        <Link href="/syarat-ketentuan?callback=/profile">Syarat Ketentuan</Link>
      </li>
    </div>
  );
}
