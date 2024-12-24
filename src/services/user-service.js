import { parseCookies, setCookie } from 'nookies';

export async function fetchUser() {
  try {
    const cookies = parseCookies();
    let firebaseToken = cookies['firebase_token'];

    if (!firebaseToken) {
      console.warn('Firebase token is missing in cookies, fetching from API');
      const tokenResponse = await fetch('/api/auth/token', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!tokenResponse.ok) {
        throw new Error('Failed to fetch Firebase token');
      }

      const tokenData = await tokenResponse.json();
      firebaseToken = tokenData.token;

      if (!firebaseToken) {
        throw new Error('Firebase token is missing in API response');
      }

      setCookie(null, 'firebase_token', firebaseToken, {
        maxAge: 60 * 60 * 24, 
        path: '/',
      });
    }

    const res = await fetch('/api/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      let errorResponse = {};
      try {
        errorResponse = await res.json();
      } catch (parseError) {
        console.error('Failed to parse error response:', parseError);
      }

      console.error('Failed to fetch user data:', {
        status: res.status,
        message: errorResponse.message || 'Unknown error',
      });

      throw new Error(
        errorResponse.message ||
          `Failed to fetch user data (status: ${res.status})`
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
