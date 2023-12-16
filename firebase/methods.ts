import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { User } from "firebase/auth";

const addUserData = async (
  uid: string,
  name: string,
  position: string
  //   posts: number,
  //   followers: number,
  //   following: number
) => {
  try {
    const docsRef = doc(db, "Users", `${uid}`);
    const data = await setDoc(docsRef, {
      name: name,
      position: position,
      posts: posts,
      //   followers: followers,
      //   following: following,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getUserData = () => {
  const user = auth.currentUser;
  if (user !== null) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    const uid = user.uid;
    const userData = getUser(uid);
    if (userData === undefined) {
      return user;
    } else {
      const finalUserData = {
        ...user,
        ...userData,
      };
      return finalUserData;
    }
  } else {
    return;
    // No user is signed in.
  }
};

export const getUser = async (
  uid: string
): Promise<DocumentData | undefined> => {
  try {
    const docsRef = doc(db, "Users", `${uid}`);
    const docSnap = await getDoc(docsRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return;
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getAllUsers = async () => {
  const users: any[] = [];
  const colRef = collection(db, "Users");
  const querySnapshot = await getDocs(colRef);

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users;
};

export { getUserData, addUserData };
