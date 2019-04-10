import React from 'react'
import styled from 'styled-components'

const SFooter = styled.footer`
	width: 100%;
	text-align: center;
	font-size: 18px;
`

const Footer = props => (
  <SFooter>
    {props.children}
  </SFooter>
)

export default Footer