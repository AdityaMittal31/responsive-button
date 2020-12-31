import './App.css';
import React, { Component } from 'react'



class App extends Component{
  state = {
    showMessage: true
  }
  onButtonClickHandler = () => {
   this.setState({
     showMessage:true
   });
  };
  onButtonClickHandler2 = () => {
    this.setState({
      showMessage:false
    });
   };

  render(){ 
    return(
      <>
    <div className="App">
     {this.state.showMessage && <img src="https://mumbaimirror.indiatimes.com/photo/77311889.cms" width="1040px" height="600px"></img>}
     {!this.state.showMessage&&<img src="https://mumbaimirror.indiatimes.com/photo/77311889.cms" width="700px" height="680px"></img>}
     </div>
     <div className="container">
      <button onClick={this.onButtonClickHandler}>Desktop View</button>
      <button onClick={this.onButtonClickHandler2}>Mobile View</button>
      
    </div>
    </>
    );

  }
}
export default App
