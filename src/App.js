import React, { Component } from 'react';
//import ButtonAppBar from './components/Navbar';
import HomePage from './pages/main/homepage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import styled from 'styled-components';


//in this file, we can add a navigation bar if needed, just import above
const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0px;
  flex-direction: column;
`;

//under homepage, could add nav bar
class App extends Component {
  render() {
    return (
      <div id="app">
        <Wrapper>
          <MuiThemeProvider theme={theme}>
            <HomePage/>
          </MuiThemeProvider>
        </Wrapper>
      </div>
    );
  }
}

export default App;