import TodoList from "./components/TodoList";
import Header from "./components/HeaderFunction";
import "semantic-ui-css/semantic.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/style/theme";
import NavBar from "./components/NavBar";
import FooterPage from "./components/FooterPage";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Header />
      <TodoList />
      <FooterPage />
    </ChakraProvider>
  );
}

export default App;
