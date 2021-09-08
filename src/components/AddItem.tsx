import { todoProp } from "../utils/interface";
import { Button } from "@chakra-ui/react";

export default function AddItem(prop: todoProp): JSX.Element {
  const description = prop.todos.description;
  const tag = prop.todos.tag;
  const submitPost = async () => {
    try {
      const body = { description, tag };
      const apiBaseURL = process.env.REACT_APP_API_BASE;
      const response = await fetch(apiBaseURL + "start-up/input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body), //understand this code- fetching post request
      });

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={() => submitPost()}>
        ADD
      </Button>
    </>
  );
}
