import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Center, Text, Divider } from '@chakra-ui/react';

const InstructionsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'md', lg: 'lg' }} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader><Center>How to play</Center></ModalHeader>
        <ModalCloseButton />
        <ModalBody mb={4} >
            {/* Intructions for the game */}
            <Text>1. You have a criminal to catch.</Text>
            <Text>2. There are 3 cops who are searching for a criminal on loose.</Text>
            <Text>3. Each cop selects a city with a vehicle to search the criminal in that city.</Text>
            <Text>4. You have to help the cops find the criminal. Two same cops cannot select the same city and same vehicle.</Text>
            <Text>5. There are total five cities where the criminal can be hiding and 4 vehicles which include 2 bikes, one car and an SUV</Text>
            <Text>6. A cop can only catch a criminal if he chooses the city in which criminal is hiding and a vehicle whose range is enough for a round trip.</Text>
            <Divider my="4" borderColor="gray.800" />
            <Text fontSize={'xl'} color={'black'}>Vehicle Range and Count:</Text>
            <Text>EV BIKE - 60KMS - 2</Text>
            <Text>EV CAR - 100KMS - 1</Text>
            <Text>EV SUV - 120KMS - 1</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InstructionsModal;
