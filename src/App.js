import "./App.css";
import Welcome from "./components/welcome";
import IntakeForm from "./components/form";
import ThankYou from "./components/thankyou";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  const submitForm = async (e, payload) => {
    e.preventDefault();
    console.log(payload);
    await fetch("https://hooks.zapier.com/hooks/catch/15807240/3msrn64/", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(JSON.stringify(response));
        e.returnValue = true;
        window.location.href = "/further_interview/#/thankyou";
      })
      .catch((error) => {
        e.returnValue = true;
        window.location.href = "/further_interview/#/error";
      });
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
        <Route
          exact
          path="/form"
          element={<IntakeForm handleFormSubmit={submitForm} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
