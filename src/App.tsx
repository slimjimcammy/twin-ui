import AppShell from "./AppShell";
import NotFound from "./pages/404/404";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";
import ThemeProvider from "./theme/ThemeProvider";
import { defaultTheme } from "./theme/utils/defaultTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppShell>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ViewTransition />} />
            {/* <ForYou /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppShell>
    </ThemeProvider>
  );
}
