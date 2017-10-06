import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         data: 1
      }

      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = 4
      var num = this.state.data;
      var changedNum = num + 1;
      this.setState({data: changedNum})
   };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;
