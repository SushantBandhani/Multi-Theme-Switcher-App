import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./pages/Main.tsx";
import Cart from "./pages/Cart.tsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "13px",
          },
        }}
      />
    </Provider>
  </StrictMode>,
);
