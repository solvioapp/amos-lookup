import React from 'react';
import amos from '../assets/amos-chatbox.svg'
import styled from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component';

const Amos = styled.img`
  height: 100px;
`

const ChatBox = styled.p`
  background-color: #d9dce1;
  border-radius: 20px;
  color: #949ea8;
  margin: 5px 5px;
  padding: 7px 15px;
`
const ChatElement = props => {
  return (
    <Flex>
      <Amos src={amos} alt="amos" />
      <ChatBox>{props.text}</ChatBox>
    </Flex>
  )
}

export default ChatElement