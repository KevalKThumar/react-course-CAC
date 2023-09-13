import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Buttons = () => {
  return (
    <>
      <Stack className="p-2 m-3" direction="horizontal" gap={2}>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </Stack>
      <Button variant="outline-primary">outline Primary</Button>{" "}
      <Button variant="outline-secondary">outline Secondary</Button>{" "}
      <Button variant="outline-success">outline Success</Button>{" "}
      <Button variant="outline-warning">outline Warning</Button>{" "}
      <Button variant="outline-danger">outline Danger</Button>{" "}
      <Button variant="outline-info">outline Info</Button>{" "}
      <Button variant="outline-light">outline Light</Button>{" "}
      <Button variant="outline-dark">outline Dark</Button>
    </>
  );
};

export default Buttons;
