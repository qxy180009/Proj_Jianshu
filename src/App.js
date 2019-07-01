import React, {Component, Fragment} from 'react';
import GlobalStyle from './style'

class App extends Component {
  render(){
    return (
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <div className="dell">
          hello world!
        </div>
      </Fragment>
    )
  }
}

export default App;
