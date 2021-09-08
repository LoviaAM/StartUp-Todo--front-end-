import { Box, Heading} from "@chakra-ui/layout";
import "../stylesheet.css";

export default function HeaderFunction(): JSX.Element {
  //   state = { activeItem: 'home' }

  //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //   render() {
  //     const { activeItem } = this.state

  return (
    <>
      <Box h="320px" bg="200" borderRadius="lg" w="100%" alignItems="baseline">
        <Heading
          mb={4}
          className="heading"
          colour="pink"
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

// Simple grid 
// align items
//bg: useColorModeValue('gray.200', 'gray.700')
{/* <Stack spacing={8} mt={2}></Stack> */}
//Flex wrap -- uss around  a omo
//Grid 
{/* <SimpleGrid
        columns={3}
        minChildWidth="30%"
        spacing="20px"
        py={6}
        mx={10}
        mb={10}
      ></SimpleGrid> */}