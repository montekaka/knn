import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);   
  }

  render () {
    return (
      <div>Hello world</div>
		)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));