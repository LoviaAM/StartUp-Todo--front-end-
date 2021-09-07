import { Box, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import "../stylesheet.css";

export default function HeaderFunction(): JSX.Element {
  //   state = { activeItem: 'home' }

  //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //   render() {
  //     const { activeItem } = this.state

  return (
    <Box maxH="120rem" bg="pink.700" borderRadius="lg" w="100%">
      <Heading mb={4}>Modern online and offline payments for Africa</Heading>
      <Text fontSize="xl">
        Paystack helps businesses in Africa get paid by anyone, anywhere in the
        world
      </Text>
      <Button size="lg" colorScheme="green" mt="24px">
        Create a free account
      </Button>
    </Box>
  );
}
