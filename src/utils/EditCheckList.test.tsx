import EditCheckList from "../components/EditCheckList";
import { render, screen } from "@testing-library/react";

const clientTodo = {
    post_id: 1,
    post_description: "do Swot Analysis",
    post_tag: "operations"}
  
test ("the edit button that renders  input box and buttons  ",  () =>{
   render(<EditCheckList clientTodo={clientTodo} />); 
   const done = screen.getByRole('button', {name: 'DONE'});
   const close = screen.getByRole('button', {name: 'Close'});
   const edit = screen.getByRole('modal', {name: 'Edit'});
   expect(done).toBeInTheDocument();
   expect(close).toBeInTheDocument();
   expect(edit).toBeInTheDocument();

})
// test("greet returns a string, greeting the passed name", () => {
//   expect(greet("World")).toBe("Hello, World!");
//   expect(greet("Richard")).toBe("Hello, Richard!");
//   expect(greet("Academy Scholars")).toBe("Hello, Academy Scholars!");
// });


// test('Link changes the class when hovered', () => {
//     const component = renderer.create(
//       <Link page="http://www.facebook.com">Facebook</Link>,
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
  
//     // manually trigger the callback
//     tree.props.onMouseEnter();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
  
//     // manually trigger the callback
//     tree.props.onMouseLeave();
//     // re-rendering
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });