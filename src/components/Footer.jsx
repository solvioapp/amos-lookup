import React from 'react'
import styled from 'styled-components'

const SFooter = styled.footer`
	background-color: #ffb152;
	/* position: fixed; */
	left: 0;
	bottom: 0;
	width: 100%;
	color: white;
	text-align: center;
	height: 25px;
	font-size: 18px;
`

const Footer = props => (
  <SFooter>
    {props.text}
  </SFooter>
)

export default Footer