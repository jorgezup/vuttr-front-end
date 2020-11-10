import { useField } from "@unform/core"
import { InputHTMLAttributes, useEffect, useRef } from "react"
import { IconBaseProps } from "react-icons/lib"

import {Container} from '../styles/components/Input'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({name, label, icon: Icon, ...rest}: InputProps) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

    return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {Icon && <Icon size={20} strokeWidth={3}/> }
      <div>
        <input 
          ref={inputRef}
          type="text"
          {...rest}
        />
        { error && <span style={{color: '#f00' }}>{error}</span> }
      </div>
    </Container>
  )
}