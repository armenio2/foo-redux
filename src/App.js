import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './action/index';
import './App.css';

class App extends Component {
  //disparando um evento para evoluir a store
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  //fim disparando evento
  render() {
    const {
      clickButton,
      newValue
    } = this.props; //redux

    const { inputValue } = this.state; //disparando evento

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input onChange={this.inputChange}
          type='text'
          value={inputValue} />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
      </button >
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({   //redux
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)/*redux*/(App);
