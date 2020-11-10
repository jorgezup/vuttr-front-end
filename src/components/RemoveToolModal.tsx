import React, { useCallback, useRef } from "react";
import { FiX } from "react-icons/fi";
import { IconBaseProps } from "react-icons/lib";

import { ContainerModal, ModalOverlay, ModalTitle, ModalButtons } from '../styles/components/Modal'


import Button from './Button'


export interface ModalProps {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  isOpen: boolean;
  onClose: () => void;
}


const RemoveToolModal: React.FC<ModalProps> = ({title, isOpen, onClose}) => {
  const overlayRef = useRef(null)
  // const toolNameInputRef = useRef<HTMLInputElement>(null)
  // const toolLinkInputRef = useRef<HTMLInputElement>(null)
  // const toolDescriptionTextAreaRef = useRef<HTMLTextAreaElement>(null)
  // const tagsInputRef = useRef<HTMLInputElement>(null)

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  const handleRemove = useCallback(async() => {

  }, [])

  return isOpen ? (
    <ContainerModal ref={overlayRef} onClick={handleOverlayClick}>
      <ModalOverlay >
        <ModalTitle>
          <FiX size={20} strokeWidth={4} />
          <h2>{title}</h2>
        </ModalTitle>
        <form onSubmit={handleRemove}>
        <h4>Are you sure want to remove tool ?</h4>
          <ModalButtons>
            <Button type="submit" style={{marginLeft: 'initial', marginRight: '16px'}}>Cancel</Button>
            <Button type="submit" style={{marginLeft: 'initial'}}>Yes, remove</Button>
          </ModalButtons>
        </form>
      </ModalOverlay>
    </ContainerModal>
  ) : null 
}

export default RemoveToolModal
