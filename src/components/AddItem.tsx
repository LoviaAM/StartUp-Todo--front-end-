import { Button } from "semantic-ui-react";
import { todoProp } from "../utils/interface";

export default function AddItem (prop : todoProp): JSX.Element{
    const description = prop.todos.description
    const tag = prop.todos.tag
  const submitPost = async() => {
    try {
      const body = {description, tag};
      const response = await fetch("http://localhost:4000/start-up/input",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body), //understand this code- fetching post request
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
    return(
        <>
        <Button class="ui button" color="green" onClick={() => submitPost()}>ADD</Button>
        </>
        
    )
}