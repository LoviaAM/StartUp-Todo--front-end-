// import EditCheckList from "./EditCheckList"; // use for the personalised client table- they can edit their posts
import { useEffect, useState } from "react";
import { clientTodo } from "../utils/interface";
import "../stylesheet.css";
import { VStack, Box } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/checkbox";

export default function ViewClientList(): JSX.Element {
  const [clientPosts, setClientPosts] = useState<clientTodo[]>([]);
  //     const [checked, setChecked] = useState(false)
  // // checking the todolist
  // function toggle(){
  //     setChecked((checked)=> ({setChecked: !checked}))
  // }

  // retrieve the post from data base
  async function getPosts() {
    try {
      const response = await fetch("http://localhost:4000/start-up/viewpost");
      const jsonData: clientTodo[] = await response.json();
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
      <Box w="50%" bg="">
        <VStack spacing={10} size="lg">
          {clientPosts ? (
            clientPosts.map((post: clientTodo) => (
              <Checkbox key={post.post_id}> {post.post_description}- ({post.post_tag})</Checkbox>
            ))
          ) : (
            <p></p>
          )}
        </VStack>
    </Box>
  );
}

// // deploy unto heroku and  netlify
// design better wider box 
 
//  add a delete posts (handler)
// add an edit (1hr max

// Go to Neill concerning  the filter
// the automatic refresh


// add company name and 
// set up the connection string
