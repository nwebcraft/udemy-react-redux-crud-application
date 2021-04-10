import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, toMale, toFemale, readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

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
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value, sex: state.sex.sex, events: state.events })
const mapDispatchToProps = ({ increment, decrement, toMale, toFemale, readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
