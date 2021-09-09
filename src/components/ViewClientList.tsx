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
  VStack,
  Text,
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
      console.log("I was called");
      const apiBaseURL = process.env.REACT_APP_API_BASE;
      const response = await fetch(apiBaseURL + "/start-up/viewpost");
      const jsonData: clientTodo[] = await response.json();
      console.log(jsonData);
      setClientPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  async function deletePost(id: number) {
    try {
      //delete id specified as the parameter
      const apiBaseURL = process.env.REACT_APP_API_BASE;
      await fetch(apiBaseURL + `/start-up/post/${id}`, {
        method: "DELETE",
      });
      console.log(deletePost);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, [setClientPosts]);

  return (
    <Box color="black" borderWidth="6px" fontWeight="semibold">
      <VStack>
        <Text fontSize="lg" color="pink.400">
          {" "}
          YOUR BUSINESS TO-DO LIST
        </Text>
      </VStack>
      <VStack>
        <Table variant="simple" size="lg" colorScheme="twitter">
          <TableCaption>StartUp Business Checker </TableCaption>
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
                    <EditCheckList clientTodo={post} getPosts={getPosts} />
                  </Td>
                  <Td>
                    <Checkbox
                      iconColor="blue.400"
                      iconSize="1rem"
                      colorScheme="green"
                      onChange={(e) => deletePost(post.post_id)}
                    >
                      {" "}
                    </Checkbox>
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
      </VStack>
    </Box>
  );
}
