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
    Input
  } from "@chakra-ui/react"

export default function EditCheckList(prop :clientTodoProp ): JSX.Element {
    const [description, setDescription] = useState(prop.clientTodo.post_description);
  

    const { isOpen, onOpen, onClose } = useDisclosure()

    async function updateDescription(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
          const body = { description };
          await fetch(
            `http://localhost:4000/start-up/post/${prop.clientTodo.post_id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
          //The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page
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
          <Input value={description} onChange={(e) => setDescription(e.target.value)}></Input>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={updateDescription}>Edit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
}
