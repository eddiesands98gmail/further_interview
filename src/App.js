import "./App.css";
import Welcome from "./components/welcome";
import IntakeForm from "./components/form";
import ThankYou from "./components/thankyou";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome></Welcome>,
  },
  {
    path: "/form",
    element: <IntakeForm></IntakeForm>,
  },
  {
    path: "/thankyou",
    element: <ThankYou></ThankYou>,
  },
]);

function App() {
  const handleNextScreen = () => {
    return 0;
  };

  return <RouterProvider router={router} />;
}

export default App;
