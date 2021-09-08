import { Input } from "semantic-ui-react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { useState, Fragment } from "react";
import Checklist from "../Checklist.json";
import { todo } from "../utils/interface";
import AddItem from "./AddItem";
import ViewClientList from "./ViewClientList";

export default function TodoList(): JSX.Element {
  const [searchList, setSearchList] = useState("");

  // searchBox
  function handleChangeToSearchBox(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchList(event.target.value);
  }

  // filter function for search through todo list
  function TodoDescriptionMatchesSearchTerm(item: todo) {
    if (item.description.includes(searchList)) {
      return item.description.includes(searchList);
    } else if (item.tag.includes(searchList)) {
      return item.tag.includes(searchList);
    }
  }
  const filteredChecklist = Checklist.filter(TodoDescriptionMatchesSearchTerm); // conducts search on the basis of description  //task assign to not include!

  // add post to the database
  return (
    <Fragment>
      <VStack>
        <FormControl id="searchtodo">
          <FormLabel>Search Checklist</FormLabel>
          <Input
            type="email"
            onChange={handleChangeToSearchBox}
            size="large"
            variant="filled"
          />
          <FormHelperText>Search through checklist.</FormHelperText>
        </FormControl>
      </VStack>

      <HStack>
        <Box
          bg="gray.100"
          color="black"
          borderWidth="6px"
          fontWeight="semibold"
        >
          <Table variant="simple" size="lg" colorScheme="twitter">
            <TableCaption>Start Up Business Checker </TableCaption>
            <Thead>
              <Tr>
                <Th>Task</Th>
                <Th>Tag</Th>
                <Th>ADD</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredChecklist.map((item: todo) => (
                <Tr key={item.id}>
                  <Td>{item.description}</Td>
                  <Td>{item.tag}</Td>
                  <Td>
                    <AddItem todos={item} />
                  </Td>
                </Tr>
              ))}
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
        <ViewClientList />
      </HStack>
    </Fragment>
  );
}
