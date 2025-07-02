import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../components/app/auth-provider/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

type AuthMethod = "Login" | "Register";

export default function AuthPage() {
  const [method, setMethod] = useState<AuthMethod>("Login");
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.user) {
    navigate("/for-you");
  }

  return (
    <>
      <GoogleLogin
        onSuccess={
          method === "Login"
            ? auth.options.google.login
            : auth.options.google.login
        }
        onError={() =>
          console.error("An error occurred while authenticating with Google")
        }
        size="medium"
        text={method === "Login" ? "continue_with" : "signup_with"}
      />
      <Button
        variant="secondary"
        className="h-fit"
        onClick={() => {
          if (method == "Login") {
            setMethod("Register");
          } else {
            setMethod("Login");
          }
        }}
      >
        {method}
      </Button>
    </>
  );
}
