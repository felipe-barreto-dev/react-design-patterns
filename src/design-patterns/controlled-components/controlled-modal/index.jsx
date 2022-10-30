import React, { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  width: 50%;
  padding: 20px;
`;

export const Modal = ({ children, shouldShow, handleClose }) => {

  return (
    <>
      {shouldShow &&
        <ModalBackground onClick={() => handleClose()}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => handleClose()}>Fechar Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      }
    </>

  )
}
