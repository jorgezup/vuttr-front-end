import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { forwardRef, InputHTMLAttributes, useCallback, useState } from "react"
import { IconBaseProps } from "react-icons/lib"
import api from "../pages/api"

import {Container} from '../styles/components/SearchInput'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const SearchInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, icon: Icon, ...rest}, ref) => {
  // const router = useRouter()
  // const [query, setQuery] = useState('')

  // const onChange = useCallback(async (event) => {
  //   const query = event.target.value

  //   const result = await api.get(`/tools/?q=${query}`)

    
  //   if (result) {
  //     console.log(result)
  //   }
    
  // }, [])
  
  
  return (
    <>
    <Container>
      <label htmlFor={name}>{label}</label>
      {Icon && <Icon size={20} strokeWidth={3}/> }
      <input 
        ref={ref}
        type="text"
        {...rest}
      />
    </Container>
    </>
  )
}

export default forwardRef(SearchInput)

