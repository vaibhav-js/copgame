import React, { useState } from 'react';
import '../styles/MainContainer.css';
import GameplayContainer from './GameplayContainer';
import InstructionsModal from './InstructionsModal';
import { IconButton } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const MainContainer = () => {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  return (
    <>
      <div className="main-container">
          <IconButton
            icon={<InfoOutlineIcon />}
            aria-label="Help"
            onClick={() => setIsInstructionsOpen(true)}
            position="relative"
          />
        
        <GameplayContainer />
      </div>
      <InstructionsModal isOpen={isInstructionsOpen} onClose={() => setIsInstructionsOpen(false)} />
    </>
  );
}

export default MainContainer;
