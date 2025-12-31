import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ModComp({ title, content }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="text-tiny pe-0 btn"
        color="primary"
        radius="full"
        size="sm"
        onPress={onOpen}
      >
        Get Info About It
        <div className="flex justify-center items-center size-8 rounded-full bg-white text-blue-600">
          <FaArrowRightLong />
        </div>
      </Button>

      <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl font-bold">{title}</ModalHeader>

              <ModalBody>
                {content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
