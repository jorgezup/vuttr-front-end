import React, { ChangeEvent, useRef, useState } from "react";
import dynamic from 'next/dynamic'
import { FiX, FiPlus, FiSearch, FiCheck } from "react-icons/fi";
import {
  Container,
  Header,
  HeaderMain,
  Title,
  SubTitle,
  Content,
  TopContent,
  TitleContent,
  TextContent,
  TagsContent,
} from '../styles/pages/Home'

import SearchInput from "../components/SearchInput";
// import { AddNewToolModal } from "../components/AddNewToolModal";

import Button from '../components/Button'
import api from "./api";
import { GetServerSideProps } from "next";

export interface ToolProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface Tool {
  tools: ToolProps[]
}

const AddNewToolModal = dynamic(
  () => import ('../components/AddNewToolModal'),
  { loading: () => <p>Loading...</p>, ssr:true}
)

const RemoveToolModal = dynamic(
  () => import ('../components/RemoveToolModal'),
  { loading: () => <p>Loading...</p>, ssr:true}
)

export default function Home({tools}: Tool) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isAddNewToolModalOpen, setAddNewToolModalOpen] = useState(false)
  const [isRemoveToolModalOpen, setRemoveToolModalOpen] = useState(false)
  const [isSearchOnlyTags, setSearchOnlyTags] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')


  const toggleAddNewToolModal = () => setAddNewToolModalOpen(!isAddNewToolModalOpen)
  const toggleRemoveNewToolModal = () => setRemoveToolModalOpen(!isRemoveToolModalOpen)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  if (isSearchOnlyTags) {
    tools = tools.filter(tool => tool.tags.includes(searchTerm))
  }

  if (searchTerm && !isSearchOnlyTags) {
    tools = tools.filter(tool => tool.title.toLowerCase().includes(searchTerm))
  }
   
  
  return (
    <Container>
      <Header>
        <Title>VUUTR</Title>
        <SubTitle>Very Useful Tools to Remember</SubTitle>
      </Header>
      <main>
        <HeaderMain>
            <SearchInput 
              name="search"
              icon={FiSearch}
              placeholder="search"
              ref={searchInputRef}
              value={searchTerm}
              onChange={handleChange}
              />
            <button type="button" id="tags" className={isSearchOnlyTags ? "checked" : "check"} onClick={() => setSearchOnlyTags(!isSearchOnlyTags)}>
              <FiCheck size={25} strokeWidth={2.5}/>
            </button>
            <label>search tags only</label>

          <Button name="Add" icon={FiPlus} onClick={toggleAddNewToolModal}>Add</Button>

          <AddNewToolModal title={"Add New Tool"} isOpen={isAddNewToolModalOpen} onClose={toggleAddNewToolModal} />
        </HeaderMain>
        <div className="main--content">
          {tools.map(tool => (
              <Content key={tool.id}>
              <TopContent>
                <TitleContent>{tool.title}</TitleContent>
                <Button icon={FiX} onClick={toggleRemoveNewToolModal} style={{border: 'none', boxShadow: 'none' }}>remove</Button>
                <RemoveToolModal title={`Remove Tool ${tool.title}`} isOpen={isRemoveToolModalOpen} onClose={toggleRemoveNewToolModal} />
              </TopContent>
              <TextContent>{tool.description}</TextContent>
              <TagsContent>
              {tool.tags.map(tag => (
                `#${tag} `
                ))}
              </TagsContent>
            </Content>
          ))}
        </div>
      </main>
    </Container>
  )
}



export const getServerSideProps: GetServerSideProps<Tool> = async(context) => {
  const { q } = context.query

  if (!q) {
    const response = await api.get('/tools')
  
    const tools = response.data
  
    return {
      props: {
        tools
      }
    }
  }
  
  const response = await api.get(`/tools?q=${q}`)
  const tools = response.data
  return { props : { tools }}
}

