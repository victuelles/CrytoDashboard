import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage'
import './App.css'
import styled,{css} from 'styled-components'

const MyButton= styled.button`
color:green
${props => props.primary && css`

  color: palevioletred;
  `}
`

const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMessage/>
        <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
        <TomatoButton> Tomato</TomatoButton>
      </div>
    );
  }
}

export default App;
