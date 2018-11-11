import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './MusicPanel.css';
import { Data } from '../../store/types';
import Range from '../Range';

const cnMusicPanel = cn('MusicPanel');

export interface ShowMenuBtnProps extends IClassNameProps {
  data: Data;
}

const MusicPanel: React.SFC<ShowMenuBtnProps> = ({ className, data }) => {
  const {
    albumcover = '',
    artist = '',
    track = { name: '', length: '' },
    volume = '',
  } = data;

  return (
    <div className={cnMusicPanel(null, [className])}>
      <img className={cnMusicPanel('AlbumCover')} alt="обложка" src={albumcover} />
      <p className={cnMusicPanel('TrackName')}>{`${artist} - ${track.name}`}</p>
      <Range className={cnMusicPanel('TimeLine')} min={0} max={100} />
      <output className={cnMusicPanel('TrackLength')} htmlFor="time" name="time">{track.length}</output>
      <button className={cnMusicPanel('PreviousBtn')}></button>
      <button className={cnMusicPanel('ForwardBtn')}></button>
      <Range className={cnMusicPanel('VolumeControl')} min={0} max={100} thumb="round"/>
      <output className={cnMusicPanel('Volume')} htmlFor="time" name="time">{volume}</output>
    </div>
  );
};

export default MusicPanel;