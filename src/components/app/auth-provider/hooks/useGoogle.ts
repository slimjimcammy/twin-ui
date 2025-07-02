import type { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import type { User } from "../AuthProvider";

interface GoogleJwtPayload {
  email: string;
  given_name?: string;
  family_name?: string;
}

export default function useGoogle() {
  function registerWithGoogle(
    credentialResponse: CredentialResponse,
    onSuccess: (user: User) => void
  ) {
    if (!credentialResponse || !credentialResponse.credential) return null;

    const googleUser = jwtDecode<GoogleJwtPayload>(
      credentialResponse.credential
    );

    // POST REQUEST: get ID returned and return it here

    onSuccess({
      email: googleUser.email,
      first_name: googleUser.given_name,
      last_name: googleUser.family_name,

      id: "1",
      profile_img_url: "/beyonce.jpg",
      role: "user",
      join_date: new Date().toLocaleDateString(),
    });
  }

  function signInWithGoogle(
    credentialResponse: CredentialResponse,
    onSuccess: (user: User) => void
  ) {
    if (!credentialResponse || !credentialResponse.credential) return null;

    const googleUser = jwtDecode<GoogleJwtPayload>(
      credentialResponse.credential
    );

    // get REQUEST: get entire user returned from DB and return it

    onSuccess({
      email: googleUser.email,
      first_name: googleUser.given_name,
      last_name: googleUser.family_name,

      id: "1",
      profile_img_url: "/beyonce.jpg",
      role: "user",
      join_date: new Date().toLocaleDateString(),
    });
  }

  return {
    registerWithGoogle,
    signInWithGoogle,
  };
}
