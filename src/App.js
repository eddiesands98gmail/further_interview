import "./App.css";
import Welcome from "./components/welcome";
import IntakeForm from "./components/form";
import ThankYou from "./components/thankyou";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/further_interview/",
//     element: <Welcome></Welcome>,
//   },
//   {
//     path: "/further_interview/form/",
//     element: <IntakeForm></IntakeForm>,
//   },
//   {
//     path: "/further_interview/thankyou/",
//     element: <ThankYou></ThankYou>,
//   },
// ]);

function App() {
  const handleNextScreen = () => {
    return 0;
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="*"
          element={<div> Not Found or You do not have permission.</div>}
        />
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/thankyou" element={<ThankYou />} />
        <Route exact path="/form" element={<IntakeForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
