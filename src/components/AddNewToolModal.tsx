import React, { useCallback, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { ContainerModal, ModalOverlay, ModalTitle } from '../styles/components/Modal'

import Input from './Input'
import TextArea from "./TextArea";
import Button from './Button'
import api from "@/pages/api";
import { useRouter } from "next/router";


export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

interface AddToolFormData {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string;
  tagsArray: string[];
}

interface Errors {
  [key: string]: string;
}

const AddNewToolModal: React.FC<ModalProps> = ({title, isOpen, onClose, children}) => {
  const overlayRef = useRef(null)
  // const toolNameInputRef = useRef<HTMLInputElement>(null)
  // const toolLinkInputRef = useRef<HTMLInputElement>(null)
  // const toolDescriptionTextAreaRef = useRef<HTMLTextAreaElement>(null)
  // const tagsInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<FormHandles>(null);
  const router = useRouter()



  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  const handleSubmit = useCallback(async(data: AddToolFormData, {reset}) => {
      try {
        formRef.current?.setErrors({})
        
        
        const schema = Yup.object().shape({
          title: Yup.string().required('Tool Name is required'),
          link: Yup.string().required('Tool Link is required'),
          description: Yup.string().required('Tool Description is required'),
          tags: Yup.string().required('Tool tags is required'),
        })
        
        
        await schema.validate(data, {
          abortEarly: false,
        })
        
        const tools = await api.get('/tools')

        data.tagsArray = data.tags.split(', ')
        
        const tool = {
          id: Number(tools.data.length + 1),
          title: data.title,
          description: data.description,
          tags: data.tagsArray
        }
               
        
        await api.post('/tools', tool)

        onClose()
        
        router.push('/')
        
        reset()

        formRef.current.setErrors({})

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages: Errors = {}

          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message
          })
  
          formRef.current.setErrors(errorMessages)

        }
      }
    }, []
  )
  

  return isOpen ? (
    <ContainerModal ref={overlayRef} onClick={handleOverlayClick}>
      <ModalOverlay >
        <ModalTitle>
          <FiPlus size={23} strokeWidth={4}/>
          <h2>{title}</h2>

        </ModalTitle>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            name="title"
            label="Tool Name"
          />
          <Input
            name="link"
            label="Tool Link"
          />
          <TextArea
            name="description"
            label="Tool Description"
          />
          <Input
            name="tags"
            label="Tags"
          />
          <Button type="submit" name="Add Tool"/>
        </Form>
      </ModalOverlay>
    </ContainerModal>
  ) : null 
}

export default AddNewToolModal
