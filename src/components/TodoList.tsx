import { Table, Input, Segment } from "semantic-ui-react";
import { useState } from "react";
import Checklist from "../Checklist.json";
import { todo } from "../utils/interface";
import AddItem from "./AddItem";

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
    <>
      <Segment>
        <Input placeholder="Search..." onChange={handleChangeToSearchBox} />
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Task</Table.HeaderCell>
              <Table.HeaderCell>Tag</Table.HeaderCell>
              <Table.HeaderCell>Add</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredChecklist.map((item: todo) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>{item.tag}</Table.Cell>
                <Table.Cell>
                  <AddItem todos={item} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </>
  );
}
