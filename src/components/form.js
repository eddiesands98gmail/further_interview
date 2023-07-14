import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function IntakeForm() {
  return (
    <div className="form">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "1000px" }}
      >
        {/* name, email, timeline, service level (make some up), budget and phone */}
        <Form style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="First and last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTimeline">
            <Form.Label>Timeline</Form.Label>
            <Form.Select placeholder="Enter email">
              <option className="text-muted">Select timeline</option>
              <option value="0">2 - 4 Weeks</option>
              <option value="1">4 - 8 Weeks</option>
              <option value="2">8 - 12 Weeks</option>
              <option value="3">12+ Weeks</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicServiceLevel">
            <Form.Label>Service Level</Form.Label>
            <Form.Select>
              <option>Select service level</option>
              <option value="0">Outage</option>
              <option value="1">Critical</option>
              <option value="2">Urgent</option>
              <option value="3">Monitor</option>
              <option value="4">Informational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBudget">
            <Form.Label>Budget</Form.Label>
            <Form.Select>
              <option>Select budget</option>
              <option value="0">$0 - 10,000</option>
              <option value="1">$10,000 - 30,000</option>
              <option value="2">$30,000 - 50,000</option>
              <option value="3">$50,000 - 100,000</option>
              <option value="4">$100,000+</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="111-222-3333" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Subscribe to receive special offers"
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
