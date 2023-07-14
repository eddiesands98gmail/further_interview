import Button from "react-bootstrap/Button";

function ThankYou(props) {
  return (
    <div className="App">
      <header className="App-header2">
        <p>Thank you! We will be in touch soon!</p>
        <Button href="/form">Try Again</Button>
      </header>
    </div>
  );
}

export default ThankYou;
