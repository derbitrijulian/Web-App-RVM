// import { db } from '@/app/firebase';
// import { doc, getDoc } from 'firebase/firestore';

// export const getUserById = async () => {
//   const docRef = doc(db, 'users', id);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return { id: docSnap.id, ...docSnap.data() };
//   } else {
//     throw new Error('user not found');
//   }
// };