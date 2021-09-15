import EditCheckList from "../components/EditCheckList";
import { render, screen } from "@testing-library/react";


const clientTodo = {
    post_id: 1,
    post_description: "do Swot Analysis",
    post_tag: "operations"}

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
  
test ("renders an edit button, edit button triggers modal with input box and two additional buttons",  () =>{
   render(<EditCheckList clientTodo={clientTodo} getPosts={getPosts} />); 
   const edit = screen.getByRole("button", {name: 'Edit'});
   expect (screen.queryByRole("input")).toBeNull();
   expect (screen.queryByRole("button",{name:'DONE'})).toBeNull();
   expect (screen.queryByRole("button",{name:'Close'})).toBeNull();
   // triggering the modal opening with edit.click() 
   edit.click()
   const input = screen.queryByRole("input")
   const done = screen.getByRole("button", {name: 'DONE'});
   const close = screen.getByRole("button", {name: 'Close'});
   //expect(input).toHaveTextContent("")
})

