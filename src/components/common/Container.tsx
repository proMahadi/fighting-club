import { ContainerProps } from '@/types'
import React from 'react'

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className={`max-w-container mx-auto`}>{children}</div>
  )
}

export default Container