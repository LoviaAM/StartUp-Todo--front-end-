// import EditCheckList from "./EditCheckList"; // use for the personalised client table- they can edit their posts
import { useEffect, useState } from "react";
import { todo } from "../utils/interface";
import "../stylesheet.css";
import { VStack } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/checkbox";

export default function ViewClientList(): JSX.Element {
  const [clientPosts, setClientPosts] = useState<todo[]>([]);
  //     const [checked, setChecked] = useState(false)
  // // checking the todolist
  // function toggle(){
  //     setChecked((checked)=> ({setChecked: !checked}))
  // }

  // retrieve the post from data base
  async function getPosts() {
    try {
      const response = await fetch("http://localhost:4000/start-up/viewpost");
      const jsonData: todo[] = await response.json();
      console.log(jsonData);
      setClientPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getPosts();
  }, [setClientPosts]);

  return (
    <VStack >
      <h2 className="subheading"> PERSONALISED BUSINESS TODO LIST</h2>
      <div>
        <VStack spacing={10} size='lg'>
          {clientPosts ? (
            clientPosts.map((post: todo) => (
              <Checkbox key={post.description}> {post.description}</Checkbox>
            ))
          ) : (
            <p></p>
          )}
        </VStack>
      </div>
    </VStack>
  );
}
