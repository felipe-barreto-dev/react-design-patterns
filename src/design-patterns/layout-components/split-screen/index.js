import React from 'react'
import { SplitScreen } from './split-screen'

const Left = ({ info }) => {
  return <div style={{ backgroundColor: "red" }}>{info}</div>
}

const Right = ({ info }) => {
  return <p style={{ backgroundColor: "blue" }}>{info}</p>
}

const SplitScreenPage = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <Left info="Esquerda" />
      <Right info="Direita" />
    </SplitScreen>
  )
}

export default SplitScreenPage;

