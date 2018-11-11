import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Event.css';
import { Event as EventType } from '../../store/types';
import icons from './images/icons';
import RichDataImg from './images/Richdata.svg';
import MusicPanel from '../MusicPanel/MusicPanel';
import Button from '../Button';
import Card from '../Card';
import Camera from '../Camera/Camera';

const cnEvent = cn('Event');

interface EventProps extends IClassNameProps {
  event: EventType;
}

const Event: React.SFC<EventProps> = ({ className, event }) => {
  const iconName = `${event.icon}${event.type === 'critical' ? '_white' : ''}`;
  const iconSource = icons[iconName];
  const cardInfo = {
    icon: iconSource,
    title: event.title,
    source: event.source,
    time: event.time,
  };

  return (
    <Card className={cnEvent()} cardInfo={cardInfo} size={event.size} type={event.type}>
      {(event.description || event.data) &&
        <div className={cnEvent('Details')}>
          {event.description &&
            <p className={cnEvent('Description')}>{event.description}</p>
          }
          {(event.data && event.data.type === 'graph') &&
            <img className={cnEvent('Graph')} src={RichDataImg} alt="график" />
          }
          {(event.data && event.data.temperature) &&
            <div className={cnEvent('Weather')}>
              <p className={cnEvent('WeatherTemp')}>Температура: <b>{event.data.temperature} C</b></p>
              <p className={cnEvent('WeatherHum')}>Влажность: <b>{event.data.humidity}%</b></p>
            </div>
          }
          {(event.data && event.data.track) &&
            <MusicPanel data={event.data} />
          }
          {(event.data && event.data.buttons) &&
            <div className={cnEvent('BtnGroup')}>
              <Button primary={true}>Да</Button>
              <Button>Нет</Button>
            </div>
          }
          {(event.data && event.data.image) &&
            <Camera />
          }
        </div>
      }
    </Card>
  );
};

export default Event;
