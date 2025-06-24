import AppShell from "./AppShell";
import ForYou from "./pages/ForYou";
import ViewTransition from "./pages/view-transition/ViewTransition";

export default function App() {
  return (
    <AppShell>
      <ForYou />
      {/* <ViewTransition /> */}
    </AppShell>
  );
}
