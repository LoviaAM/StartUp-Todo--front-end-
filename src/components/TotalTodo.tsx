import { Button, Progress } from "semantic-ui-react";

export default function TotalTodo(): JSX.Element {
  // function increment (){
  //     setProgress((progress)=>({
  //         progress >= 100 ? 0 : prevState.percent + 20,
  //     }))
  // }
  return (
    <div>
      <Progress />
      <Button>Increment</Button>
    </div>
  );
}
// pass the increment  function as an onClick
