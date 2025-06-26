import AppShell from "./AppShell";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";
import ThemeProvider from "./theme/ThemeProvider";
import { defaultTheme } from "./theme/utils/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppShell>
        <ForYou />
        {/* <ViewTransition /> */}
      </AppShell>
    </ThemeProvider>
  );
}
