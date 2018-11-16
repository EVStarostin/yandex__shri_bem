
import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { cn } from '@bem-react/classname';
import { IClassNameProps, compose } from '@bem-react/core';
import { RegistryConsumer } from '@bem-react/di';
import * as actions from '../../store/actions';
import { StoreState } from '../../store/types';
import { EventData } from '../EventData/EventData';
import { CardSizeS } from '../Card/_size/Card_size_s';
import { CardSizeM } from '../Card/_size/Card_size_m';
import { CardSizeL } from '../Card/_size/Card_size_l';
import { CardTypeCritical } from '../Card/_type/Card_type_critical';
import { cnCard } from '../Card/Card';
import { icons } from './images/icons';
import { Event as EventType } from '../../store/types';
import { cnApp } from '../App/App';
import './EventsList.css';

const cnEventsList = cn('EventsList');

interface EventsListProps extends IClassNameProps {
  fetchEvents: () => void;
}

class EventsListComponent extends React.PureComponent<EventsListProps & StoreState> {
  public componentDidMount() {
    this.props.fetchEvents();
  }

  private cardHeading(event: EventType) {
    const iconName = `${event.icon}${event.type === 'critical' ? '_white' : ''}`;
    const iconSource = icons[iconName];

    return {
      type: event.type,
      icon: iconSource,
      title: event.title,
      source: event.source,
      time: event.time,
    };
  }

  public render() {
    const { className, events, errors } = this.props;
    if (errors.length) return (<h2>{errors.join('\n')}</h2>);

    return (
      <ul className={cnEventsList(null, [className])}>
        {events.map((event, idx) => (
          <RegistryConsumer key={idx}>
            {registries => {
              const registry = registries[cnApp()];
              const Card = registry.get(cnCard());
              const CardWithMod = compose(CardSizeS, CardSizeM, CardSizeL, CardTypeCritical)(Card);
              return (
                <CardWithMod cardInfo={this.cardHeading(event)} size={event.size} type={event.type}>
                  <EventData className={cnCard('Data')} event={event} />
                </CardWithMod>
              );
            }}
          </RegistryConsumer>
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

export const EventsList = connect(mapStateToProps, mapDispatchToProps)(EventsListComponent);
