import Button from "react-bootstrap/Button";

function Welcome(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome!</p>
        <Button href="/further_interview/#/form">Start</Button>
      </header>
    </div>
  );
}

export default Welcome;
