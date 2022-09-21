import React from "react";
import ReactDOM from "react-dom";
import FormExample from "./form-example";
import { Container } from "react-bootstrap";
import "./styles.css";
import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <Container className="App" as="main">
        <FormExample />
      </Container>
    </animated.div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
