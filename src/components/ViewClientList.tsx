import EditCheckList from "./EditCheckList"; // use for the personalised client table- they can edit their posts
import { useEffect, useState} from "react";
import { todo } from "../utils/interface";
import { Checkbox } from "semantic-ui-react";

export default function ViewClientList(): JSX.Element{
    const [clientPosts, setClientPosts] = useState<todo[]>()
    const [checked, setChecked] = useState(false)
// checking the todolist 
function toggle(){
    setChecked((checked)=> ({setChecked: !checked}))
}

// retrieve the post from data base 
    async function getPosts(){
        try {
            const response = await fetch("http://localhost:4000/start-up/viewpost")
            const jsonData:todo[] = await response.json()
            console.log(jsonData)
            setClientPosts(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    useEffect(()=>{
        getPosts()
    },[])

    return(
        <div>
            <Checkbox label='Check this box' className="todo-list"
            onChange ={toggle}
            checked={checked}/>
            <p>Placeholder text here</p>
        </div>
    )
}