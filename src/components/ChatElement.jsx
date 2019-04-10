import React from 'react';
import amos from '../assets/amos-chatbox.svg'
import styled, { css } from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component';

const Amos = (props) => (
  <img 
    src={amos} 
    alt="amos" 
    height={props.big ? '130px' : '50px'}
  />
)

const ChatBox = styled.p`
  line-height: 1.7;
  margin: 5px 5px;
  padding: 8px 8px;
  border-radius: 20px;
  border-style: solid;
  border-color: black;
  ${props =>
    props.big &&
    css`
      border-width: 2px;
      font-size: 20px;
    ` ||
    css`
      border-width: 1.5px;
      font-size: 16px;
    `};
`
const ChatElement = props => {
  return (
    <Flex style={{margin: '50px 0 10px 0', maxWidth: '550px'}}>
      <Amos big={ props.big } />
      <ChatBox big={ props.big }>{ props.text }</ChatBox>
    </Flex>
  )
}

export default ChatElement