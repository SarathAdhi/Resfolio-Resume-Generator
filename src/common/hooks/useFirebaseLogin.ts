import { auth } from "@backend/db";
import { addDoc, filterDoc } from "@backend/lib";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { where } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const useFirebaseLogin = () => {
  // const { getUserDocuments } = useStore();

  async function handleLogin() {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result?.user;

        const res = await filterDoc("users", where("uid", "==", user?.uid));
        localStorage.setItem("token", user?.uid!);

        if (res.length !== 0) return;

        await addDoc("users", {
          name: user?.displayName,
          uid: user?.uid,
          image: user?.photoURL,
          email: user?.email,
        });
      })
      .catch((error) => {
        console.log({ error });
      });

    // await getUserDocuments();
  }

  return { handleLogin };
};
