import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { fireAuth } from "../../config/firebase";
import { IUser } from "../../interfaces/IUser";

class AuthService {
  static signInWithGoogle = async (redirect: Function, failed: Function) => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    fireAuth.languageCode = "it";
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });
    signInWithPopup(fireAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = JSON.parse(JSON.stringify(result.user)) as IUser;
        redirect(user);
        // ...
      })
      .catch((error) => {
        failed();
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.warning("Operación cancelada");
        // ...
      });
  };
  static signInWithFacebook = async (redirect: Function, failed: Function) => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(fireAuth, provider)
      .then((result) => {
        // The signed-in user info.

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential: any =
          FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = JSON.parse(JSON.stringify(result.user)) as IUser;
        redirect(user);

        // ...
      })
      .catch((error) => {
        failed();

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        toast.warning("Operación cancelada");

        // ...
      });
  };
  static signInWithUserAndPassword = async () => {};
  static signInWithChallenge = async () => {};
  static signOut = async (redirect: Function) => {
    signOut(fireAuth)
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.");
        redirect();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
}
export default AuthService;
