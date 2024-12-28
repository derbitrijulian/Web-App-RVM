import { getCookie } from 'cookies-next';
export async function fetchUser() {
  const token = getCookie('firebase_token');
  console.log(token);
  try {
    if (!user) {
      throw new Error('No user is currently logged in.');
    }

    const res = await fetch('/api/users', {
      method: 'GET',
      headers: {
        Authorization: `Beal`,
      },
    });

    console.log(res);
    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(
        errorResponse.message ||
          `failed to fetch user data (status: ${res.status})`
      );
    }

    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw new Error(
      error.message || 'Something went wrong while fetching user data'
    );
  }
}
