/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

interface IProps {
  buttonText: string;
  children: ReactNode;
}

export default function FXModel({ buttonText, children }: IProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="mt-2 bg-transparent hover:bg-transparent p-0 text-sm"
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        className="rounded py-0  relative top-10"
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader> */}
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
