import AppShell from "./AppShell";
import NotFound from "./pages/404/404";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";
import ThemeProvider from "./theme/ThemeProvider";
import { defaultTheme } from "./theme/utils/defaultTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Record from "./pages/Record";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<ViewTransition />} />
            <Route path="/record" element={<Record />} />
            <Route path="/for-you" element={<ForYou />}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/profiles/:profile_id" element={<NotFound/>} />
            <Route path="/posts/:post_id" element={<ViewTransition/>}/>
          </Routes>
           </AppShell>
        </BrowserRouter>
     
    </ThemeProvider>
  );
}
