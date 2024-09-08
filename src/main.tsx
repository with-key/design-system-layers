import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import Theme from "./styles/utils/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <Theme accentColor="blue">
    <App />
  </Theme>
);
