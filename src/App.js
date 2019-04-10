import React, { Component } from 'react';
import styled from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Search from '@material-ui/icons/Search'

import ChatElement from './components/ChatElement';
import Checkboxes from './components/Checkboxes'
import Footer from './components/Footer'
import { 
  welcomeText,
  placeholderTextSearchBar,
  helperTextSearchBar,
  FooterText, 
  checkboxesText,
 } from './constants/text'
import { searchEngines as engines} from './constants/searchEngines'
import openWindows from './fns/openWindows'
import './styles/App.scss';
import { helperTextStyles, searchBarStyles } from './styles/inline'

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

    this.handleSearch = this.handleSearch.bind(this)
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

  handleSearch() {
    openWindows(this.state.query, this.state.checked)
  }

  onPress(e) {
    if (e.key === 'Enter') {
      this.handleSearch()
    }
  } 

  render() {
    const { query, checked } = this.state

    return (
      <Flex justifyBetween alignCenter full column
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        <ChatElement big text={welcomeText} />
        <div>
          <TextField
            InputProps={{
              style: searchBarStyles,
              endAdornment: (
                <InputAdornment position="end">
                  <i class="fas fa-search"
                    id="searchIcon"
                    onClick={this.handleSearch}></i>
                </InputAdornment>
              )
            }}
            FormHelperTextProps={{ style: helperTextStyles }}
            value={query}
            placeholder={placeholderTextSearchBar}
            helperText={helperTextSearchBar}
            onChange={e => this.handleInputChange(e)}
            onKeyPress={e => this.onPress(e)}
            autoFocus />
          <ChatElement text={checkboxesText} />
          <Checkboxes
            checked={checked}
            handleCheckboxChange={this.handleCheckboxChange} />
        </div>
        <Footer>
          <FooterText />
        </Footer>
      </Flex>
    );
  }
}

export default App;