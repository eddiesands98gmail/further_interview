import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function IntakeForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [timeline, setTimeline] = useState("");
  const [serviceLevel, setServiceLevel] = useState("");
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="form">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "1000px" }}
      >
        {/* name, email, timeline, service level (make some up), budget and phone */}
        <Form
          style={{ width: "500px" }}
          onSubmit={(e) => {
            let payload = {
              email: email,
              name: name,
              timeline: timeline,
              service_level: serviceLevel,
              budget: Number(budget.replaceAll(",", "")),
              phone: phone,
            };
            props.handleFormSubmit(e, payload);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTimeline">
            <Form.Label>Timeline</Form.Label>
            <Form.Select
              placeholder="Select Timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.currentTarget.value)}
            >
              <option className="text-muted">Select timeline</option>
              <option value="2 - 4 Weeks">2 - 4 Weeks</option>
              <option value="4 - 8 Weeks">4 - 8 Weeks</option>
              <option value="8 - 12 Weeks">8 - 12 Weeks</option>
              <option value="12+ Weeks">12+ Weeks</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicServiceLevel">
            <Form.Label>Service Level</Form.Label>
            <Form.Select
              value={serviceLevel}
              onChange={(e) => setServiceLevel(e.currentTarget.value)}
            >
              <option>Select service level</option>
              <option value="Outage">Outage</option>
              <option value="Critical">Critical</option>
              <option value="Urgent">Urgent</option>
              <option value="Monitor">Monitor</option>
              <option value="Informational">Informational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBudget">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="numer"
              placeholder="Budget in dollars, example 10,000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="1112223333"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default IntakeForm;
