import React from 'react';
import { ContainerMain } from './Container.styled';

const Container = ({children}) => {
  return (
    <ContainerMain>{children}</ContainerMain>
  )
}

export default Container