// app/api/users/[id]/route.js

import { db } from '@/app/firebase';
import { adminAuth } from '@/utils/admin-firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req) {
  try {
    const authorization = req.headers.get('Authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      });
    }

    const idToken = authorization.split('Bearer ')[1];
    const decodeToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodeToken.uid;
    const user = await adminAuth.getUser(uid);

    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Failed to fetch user details',
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
