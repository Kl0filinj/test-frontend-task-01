import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import AddingForm from './AddingForm';

const EditModal = ({ addFilm }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Film</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddingForm addFilm={addFilm} closeModal={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
