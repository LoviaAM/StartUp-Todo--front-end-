// the value of the total completion of check list 
import {useState} from "react"
import { Button, Progress } from 'semantic-ui-react'

export default function TotalTodo(){
    const [progress, setProgress] = useState(0)

    // function increment (){
    //     setProgress((progress)=>({
    //         progress >= 100 ? 0 : prevState.percent + 20,
    //     }))
    // }
    return(
            <div>
              <Progress percent={progress} indicating />
              <Button>Increment</Button>
            </div>
    )
}
// pass the increment  function as an onClick 