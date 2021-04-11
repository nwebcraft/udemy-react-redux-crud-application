import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, toMale, toFemale, readEvents } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <Link to={`/events/${event.id}`}>
          <TableRowColumn>{event.title}</TableRowColumn>
        </Link>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const props = this.props;

    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    };
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <br />
        <div>sex: {props.sex}</div>
        <button onClick={props.toMale}>男になる</button>
        <button onClick={props.toFemale}>女にする</button>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/events/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>id</TableHeaderColumn>
              <TableHeaderColumn>title</TableHeaderColumn>
              <TableHeaderColumn>body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.count.value,
  sex: state.sex.sex,
  events: state.events,
});
const mapDispatchToProps = {
  increment,
  decrement,
  toMale,
  toFemale,
  readEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
