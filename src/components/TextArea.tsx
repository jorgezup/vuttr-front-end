import { useField } from "@unform/core"
import { InputHTMLAttributes, useEffect, useRef } from "react"
import { IconBaseProps } from "react-icons/lib"

import {Container} from '../styles/components/TextArea'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function TextArea({name, label, icon: Icon, ...rest}: TextAreaProps) {
  const textAreaRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

    return (
    <Container>
      <label htmlFor={name}>{label}</label>
      {/* {Icon && <Icon size={20} strokeWidth={3}/> } */}
      <div>
        <textarea 
          ref={textAreaRef}
          type="text"
          {...rest}
        />
        { error && <span style={{color: '#f00' }}>{error}</span> }
      </div>
    </Container>
  )

}

// const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = ({name, label, icon: Icon, ...rest}, ref) => {

// }

// export default forwardRef(TextArea)