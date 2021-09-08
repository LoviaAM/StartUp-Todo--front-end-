import { Box, Heading, HStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import "../stylesheet.css";

export default function HeaderFunction(): JSX.Element {
  //   state = { activeItem: 'home' }

  //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //   render() {
  //     const { activeItem } = this.state

  return (
    <>
      <Box bg="300" divider="column-reverse">
        <HStack spacing="38px">
          <Box>
            <Button size="lg" colorScheme="pink" mt="24px">
              Sign Up
            </Button>
          </Box>
          <Box>
            <Button size="lg" colorScheme="yellow" mt="24px">
              Sign In
            </Button>
          </Box>
        </HStack>
      </Box>
      <Box h="320px" bg="200" borderRadius="lg" w="100%" alignItems="baseline">
        <Heading
          mb={4}
          className="heading"
          colourScheme="white"
          size="3xl"
          fontSize="100px"
          fontFamily=""
        >
          START-UP CHECKLIST
        </Heading>
      </Box>
    </>
  );
}
