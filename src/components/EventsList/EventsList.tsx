
import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import * as actions from '../../store/actions';
import { StoreState } from '../../store/types';
import './EventsList.css';
import Event from '../Event/Event';

const cnEventsList = cn('EventsList');

interface EventsListProps extends IClassNameProps {
  fetchEvents: () => void;
}

class EventsList extends React.PureComponent<EventsListProps & StoreState> {
  public componentDidMount() {
    this.props.fetchEvents();
  }

  public render() {
    const { className, events, errors } = this.props;
    console.log(events);

    if (errors.length) return (<h2>{errors.join('\n')}</h2>);

    return (
      <ul className={cnEventsList(null, [className])}>
        {events.map((event, idx) => (
          <Event key={idx} event={event}/>
        ))}
      </ul>
    )
  }
};

function mapStateToProps({ events, errors }: StoreState) {
  return {
    events,
    errors,
  }
}

function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, null, actions.FetchEventsAction>) {
  return {
    fetchEvents: () => dispatch(actions.fetchEvents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
