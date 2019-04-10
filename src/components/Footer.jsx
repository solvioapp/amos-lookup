import React from 'react'
import styled from 'styled-components'

const SFooter = styled.footer`
	/* position: absolute; */
	/* left: 0;
	bottom: 0; */
	width: 100%;
	text-align: center;
	/* height: 60px; */
	font-size: 18px;
`

const Footer = props => (
  <SFooter>
    {props.children}
  </SFooter>
)

export default Footer