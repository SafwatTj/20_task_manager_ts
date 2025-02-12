import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>

    <BrowserRouter basename="/20_task_manager_ts">
      <App />
    </BrowserRouter>
  </Provider>
);
