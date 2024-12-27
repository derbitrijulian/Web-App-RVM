import { auth } from '@/app/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Validasi input
    if (
      !email ||
      !password ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    ) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Login Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();

    // Set cookie
    const isProduction = process.env.NODE_ENV === 'production';
    const cookie = `firebase_token=${idToken}; HttpOnly; ${
      isProduction ? 'Secure;' : ''
    } SameSite=Strict; Max-Age=${30 * 24 * 60 * 60}; Path=/`;

    return new Response(
      JSON.stringify({ message: 'Login successful', token: idToken }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': cookie,
        },
      }
    );
  } catch (error) {
    console.error('Login error:', error.message);

    return new Response(
      JSON.stringify({
        message: 'Login failed',
        error: 'Invalid credentials or server error',
      }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
