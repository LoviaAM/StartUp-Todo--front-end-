import { useState } from "react";
import { clientTodoProp } from "../utils/interface";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

export default function EditCheckList(prop: clientTodoProp): JSX.Element {
  const [description, setDescription] = useState(
    prop.clientTodo.post_description
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function updateDescription(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      const body = { description };
      const apiBaseURL = process.env.REACT_APP_API_BASE;
      await fetch(apiBaseURL + `/start-up/post/${prop.clientTodo.post_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    prop.getPosts();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              CLOSE
            </Button>
            <Button variant="pink.300" onClick={(e) => updateDescription(e)}>
              DONE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
