import React, { Component } from 'react';
import Iframe from 'react-iframe'
import Flex, { FlexItem } from 'styled-flex-component';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

import ChatElement from './components/ChatElement';
import { welcomeText } from './constants'
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      checked: {
        youtube: true,
        youtubePlaylists: false,
        googleLucky: true,
        udemy: true,
        coursera: false,
      }
    }
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({
      query: e.target.value
    })
  }

  handleCheckboxChange = name => e => {
    this.setState({
      checked: { [name]: e.target.checked }
    })
  }

  onPress(e) {
    if (e.key === 'Enter') {
      // const youtubeURL = 
      //   `https://www.youtube.com/results?search_query=
      //   ${this.state.query}
      //   &sp=EgIQAw%253D%253D`
      const youtubeURL = `https://www.google.com/search?hl=en&q=` + this.state.query + '&btnI'
      const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      window.open(youtubeURL, '', `
        width=${w/3},
        height=${h},
        top=0px,
        left=0px,
        location=0,
        menubar=0,
        status=0,
        titlebar=0,
        toolbar=0,
      `);
    }
  } 

  render() {
    const { query } = this.state

    return (
      <div style={{ height: '100vh' }}>
        <Flex center full column>
          <h1>Hi</h1>
          <ChatElement text={welcomeText}/>
          <Input
            style={{ height: '50px', width: '350px', fontSize: '26px' }}
            value={query}
            onChange={e => this.handleInputChange(e)}
            onKeyPress={e => this.onPress(e)}
            autoFocus />
          <Flex center wrap style={{ width: '350px'}}>
            <Flex center>
              <p>Google I'm Feeling Lucky</p>
              <Checkbox
                checked={this.state.checked.googleLucky}
                onChange={e => this.handleCheckboxChange(e)}
                value="googleLucky"
              />
            </Flex>
            <Flex center>
              <p>Youtube</p>
              <Checkbox
                checked={this.state.checked.youtube}
                onChange={e => this.handleCheckboxChange(e)}
                value="youtube"
              />
            </Flex>
            <Flex center>
              <p>Youtube Playlists</p>
              <Checkbox
                checked={this.state.checked.youtubePlaylists}
                onChange={e => this.handleCheckboxChange(e)}
                value="youtubePlaylists"
              />
            </Flex>
            <Flex center>
              <p>Udemy</p>
              <Checkbox
                checked={this.state.checked.udemy}
                onChange={e => this.handleCheckboxChange(e)}
                value="udemy"
              />
            </Flex>
            <Flex center>
              <p>Coursera</p>
              <Checkbox
                checked={this.state.checked.coursera}
                onChange={e => this.handleCheckboxChange(e)}
                value="coursera"
              />
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;