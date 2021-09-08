// import EditCheckList from "./EditCheckList"; // use for the personalised client table- they can edit their posts
import { useEffect, useState } from "react";
import { clientTodo } from "../utils/interface";
import "../stylesheet.css";
import { Box } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/checkbox";
import EditCheckList from "./EditCheckList";

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
      const apiBaseURL = process.env.REACT_APP_API_BASE;
      const response = await fetch(apiBaseURL + "start-up/viewpost");
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
      {/* <VStack spacing={10} size="lg">
       
      </VStack> */}
      <Table variant="simple" size="lg" colorScheme="twitter">
        <TableCaption>Start Up Business Checker </TableCaption>
        <Thead>
          <Tr>
            <Th>TO-DO</Th>
            <Th>Edit</Th>
            <Th>Done</Th>
          </Tr>
        </Thead>
        <Tbody>
          {clientPosts ? (
            clientPosts.map((post: clientTodo) => (
              <Tr key={post.post_id}>
                <Td>{post.post_description}</Td>
                <Td>
                  <EditCheckList clientTodo={post} />
                </Td>
                <Td>
                  <Checkbox> </Checkbox>
                </Td>
              </Tr>
            ))
          ) : (
            <p></p>
          )}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Task</Th>
            <Th>Tag</Th>
            <Th>Add</Th>
          </Tr>
        </Tfoot>
      </Table>
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
