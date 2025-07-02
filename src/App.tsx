import AppShell from "./AppShell";
import NotFound from "./pages/404/404";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";
import ThemeProvider from "./theme/ThemeProvider";
import { defaultTheme } from "./theme/utils/defaultTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Record from "./pages/Record";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./components/app/auth-provider/PrivateRoute";
import AuthProvider from "./components/app/auth-provider/AuthProvider";
import { Text } from "./components/ui/Text";
import AuthPage from "./pages/auth-page/AuthPage";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<Text>Log in silly!</Text>} />
              <Route path="/auth" element={<AuthPage />} />
              <Route element={<PrivateRoute />}>
                <Route path="/transition/:id" element={<ViewTransition />} />
                <Route path="/for-you" element={<ForYou />} />
                <Route path="/record" element={<Record />} />
                <Route path="/profile/:name" element={<Profile />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
