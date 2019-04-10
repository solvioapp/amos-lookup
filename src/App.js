import React, { Component } from 'react';
import styled from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component';
import Input from '@material-ui/core/Input';

import ChatElement from './components/ChatElement';
import Checkboxes from './components/Checkboxes'
import Footer from './components/Footer'
import { 
  welcomeText,
  placeholderTextSearchBar,
  helperTextSearchBar,
  footerText, 
  checkboxesText,
 } from './constants/text'
import { searchEngines as engines} from './constants/searchEngines'
import openWindows from './fns/openWindows'
import './styles/App.scss';
import { searchBarStyles } from './styles/inline'

const initStateChecked = {}

for (let i = 0; i < engines.length; i++) {
  const engine = engines[i]
  if (engine.default) {
    initStateChecked[engine.id] = true
  }
}


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      checked: initStateChecked
    }
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({
      query: e.target.value
    })
  }

  handleCheckboxChange = id => e => {
    let checked = { ...this.state.checked };
    checked[id] = e.target.checked
    this.setState({
      checked
    })
  }

  onPress(e) {
    if (e.key === 'Enter') {
      openWindows(this.state.query, this.state.checked)
    }
  } 

  render() {
    const { query, checked } = this.state

    return (
      <div style={{ height: '100vh' }}>
        <Flex justifyBetween alignCenter full column>
          <ChatElement big text={ welcomeText }/>
          <div>
            <Input
              style={searchBarStyles}
              value={query}
              placeholder={placeholderTextSearchBar}
              helperText={helperTextSearchBar}
              onChange={e => this.handleInputChange(e)}
              onKeyPress={e => this.onPress(e)}
              autoFocus />
            <ChatElement text={ checkboxesText } />
            <Checkboxes 
              checked={ checked }
              handleCheckboxChange={this.handleCheckboxChange} />
          </div>
          <Footer text={ footerText }/>
        </Flex>
      </div>
    );
  }
}

export default App;