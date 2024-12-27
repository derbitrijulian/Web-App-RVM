import { auth, db } from '@/app/firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { adminAuth } from '@/utils/admin-firebase';

export async function POST(req) {
  try {
    const { fullName, email, password, phone } = await req.json();
    const useRef = collection(db, 'users');
    const emailQuery = query(useRef, where('email', '==', email));
    const phoneQuery = query(useRef, where('phone', '==', phone));

    const emailSnapshot = await getDocs(emailQuery);
    const phoneSnapshot = await getDocs(phoneQuery);

    if (!emailSnapshot.empty) {
      return new Response(
        JSON.stringify({ error: 'Email sudah digunakan oleh pengguna lain' }),
        { status: 400 }
      );
    }
    if (!phoneSnapshot.empty) {
      return new Response(
        JSON.stringify({
          error: 'Nomor telepon sudah digunakan oleh pengguna lain',
        }),
        { status: 400 }
      );
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Tambahkan data pengguna ke Firestore
    await setDoc(doc(db, 'users', user.uid), {
      fullName,
      email,
      phone,
      createdAt: new Date(),
    });

    await adminAuth.setCustomUserClaims(user.uid, {
      fullName,
      email,
      phone,
    });

    await sendEmailVerification(user);

    return new Response(
      JSON.stringify({
        message: 'Registrasi berhasil! Email verifikasi telah dikirim.',
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

export async function updateVerificationStatus(uid) {
  try {
    const user = await adminAuth.getUser(uid);

    if (user.emailVerified) {
      // await setDoc(
      //   doc(db, 'users', uid),
      //   {
      //     isVerified: true,
      //   },
      //   { merge: true }
      // );

      const existingClaims = user.customClaims || {};

      await adminAuth.setCustomUserClaims(uid, {
        ...existingClaims,
        isVerified: true,
      });
    }
  } catch (error) {
    console.error('Error updating verification status:', error);
  }
}
