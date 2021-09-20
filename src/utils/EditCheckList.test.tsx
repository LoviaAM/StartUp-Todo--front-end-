import EditCheckList from "../components/EditCheckList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const clientTodo = {
  post_id: 1,
  post_description: "do Swot Analysis",
  post_tag: "operations",
};

async function getPosts() {
  try {
    const apiBaseURL = process.env.REACT_APP_API_BASE;
    const response = await fetch(apiBaseURL + "/start-up/viewpost");
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (err) {
    console.error(err.message);
  }
}

test("renders an edit button, edit button triggers modal with input box and two additional buttons", () => {
  render(<EditCheckList clientTodo={clientTodo} getPosts={getPosts} />);
  const edit = screen.getByRole("button", { name: "Edit" });
  expect(screen.queryByRole("input")).toBeNull();
  expect(screen.queryByRole("button", { name: "DONE" })).toBeNull();
  expect(screen.queryByRole("button", { name: "Close" })).toBeNull();
  // triggering the modal opening with edit.click()
  edit.click();
  const input = screen.queryByRole("input");
  const doneButton = screen.getByRole("button", { name: "DONE" });
  const closeButton = screen.getByRole("button", { name: "Close" });
});

// test("done button triggers the updateDescription", () => {
//   const mockUpdateDescriptionFunction = jest.fn();
//   render(<EditCheckList clientTodo={clientTodo} getPosts={getPosts} />);
//   //rendering the done button by clicking edit button
//   const edit = screen.getByRole("button", { name: "Edit" });
//   edit.click();
//   const doneButton = screen.getByRole("button", { name: "DONE" });
//   expect(mockUpdateDescriptionFunction).toBeCalledTimes(0);
//   doneButton.click();
//   expect(mockUpdateDescriptionFunction).toHaveBeenCalledTimes(1);
// });
