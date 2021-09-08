import TodoList from "./components/TodoList";
import Header from "./components/HeaderFunction";
import "semantic-ui-css/semantic.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <TodoList />
    </ChakraProvider>
  );
}

export default App;
