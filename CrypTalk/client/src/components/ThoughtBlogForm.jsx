import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { ADD_THOUGHT } from "./utils/actions";
import { useState } from "react";

export default function ThoughtBlogForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const thoughtSubmitter = function (e) {
    e.preventDefault();
    console.log("thoughtSubmitted");
    const thoughtInput = {
      thoughtText: text,
      username: "Bob",
    };
    dispatch({
      type: ADD_THOUGHT,
      thought: thoughtInput,
    });
  };
  return (
    <Form onSubmit={thoughtSubmitter}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Give Me Your Thoughts!</Form.Label>
        <Form.Control
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Hello World!"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Post Thought
      </Button>
    </Form>
  );
}
