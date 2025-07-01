import AppShell from "./AppShell";
import NotFound from "./pages/404/404";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";
import ThemeProvider from "./theme/ThemeProvider";
import { defaultTheme } from "./theme/utils/defaultTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Record from "./pages/Record";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppShell>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewTransition />} />
            {/* <Route path="/" element={<ForYou />} /> */}
            <Route path="/record" element={<Record />} />
            {/* <ForYou /> */}
            <Route path="*" element={<NotFound />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AppShell>
    </ThemeProvider>
  );
}
