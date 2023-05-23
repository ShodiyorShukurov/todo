import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "./Root/index.jsx";
import { Provider as RootProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootProvider>
    <Root />
  </RootProvider>
);
