import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeaderFunction(): JSX.Element {
  return (
    <Stack maxH={"80"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={2} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              BUSINESS START UP
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Personalised checklist
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This is a simple checker to ensure you are ready to start your
            business.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}></Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3456&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
