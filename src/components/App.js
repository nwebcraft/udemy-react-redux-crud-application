import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, toMale, toFemale } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value:  { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <br />
        <div>sex: { props.sex}</div>
        <button onClick={props.toMale}>男になる</button>
        <button onClick={props.toFemale}>女にする</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value, sex: state.sex.sex })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

// こうも書ける
const mapDispatchToProps = ({ increment, decrement, toMale, toFemale })

export default connect(mapStateToProps, mapDispatchToProps)(App)

