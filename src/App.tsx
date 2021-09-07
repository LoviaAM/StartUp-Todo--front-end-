import TodoList from './components/TodoList';
import Header from './components/HeaderFunction';
import TotalTodo from './components/TotalTodo';
import 'semantic-ui-css/semantic.min.css'
import ViewClientList from './components/ViewClientList';
import { ChakraProvider } from "@chakra-ui/react"


function App(): JSX.Element {
  return (
    <ChakraProvider>
    <Header/>
      <TodoList/>
    <ViewClientList/>
    </ChakraProvider>
  )
}

export default App;
