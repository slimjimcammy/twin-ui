import { Flex } from "../components/layout/Flex";
import { Text } from "../components/ui/Text";
import Button from "../components/ui/Button";
import { useAuth } from "../components/app/auth/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginWithGoogle, isAuthenticated, user, logout, loading } = useAuth();
  const navigate = useNavigate();
    useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/for-you");
    }
  }, [loading, isAuthenticated, navigate]);
  return (
    <Flex
      width="stretch"
      height="stretch"
      align="center"
      justify="center"
      gap="md"
      direction="column"
    >
      <Text variant="h1" font="header">
        Twin
      </Text>
      

      {!isAuthenticated ? (
        <Button onClick={loginWithGoogle} variant="secondary" size="md">
          Login with Google
        </Button>
      ) : (
        <Flex direction="column" gap="sm" align="center">
          <Text variant="p">
            Logged in as: <strong>{user?.id || "Unknown User"}</strong>
          </Text>
          <Button onClick={logout} variant="secondary" size="sm">
            Logout
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
