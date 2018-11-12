import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps, compose } from '@bem-react/core';
import RichDataImg from './images/Richdata.svg';
import { MusicPanel } from '../MusicPanel/MusicPanel';
import { Camera } from '../Camera/Camera';
import { Button } from '../Button/Button';
import { ButtonPrimary } from '../Button/_primary/Button_primary';
import { Event as EventType } from '../../store/types';
import './EventData.css';

const cnEvent = cn('EventData');

interface EventProps extends IClassNameProps {
  event: EventType;
}

const ButtonWithMod = compose(ButtonPrimary)(Button);

export const EventData: React.SFC<EventProps> = ({ className, event }) => {
  if (!event.description && !event.data) return null;

  return (
    <div className={cnEvent(null, [className])}>
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
          <ButtonWithMod primary={true}>Да</ButtonWithMod>
          <ButtonWithMod>Нет</ButtonWithMod>
        </div>
      }
      {(event.data && event.data.image) &&
        <Camera />
      }
    </div>
  );
};
