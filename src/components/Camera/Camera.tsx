import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import cameraImg from './images/Bitmap.jpg';
import './Camera.css';

export const cnCamera = cn('Camera');

export const Camera: React.SFC<IClassNameProps> = ({ className }) => (
  <div className={cnCamera(null, [className])}>
    <img src={cameraImg} className={cnCamera('Img')} alt="Изображение с камеры" />
  </div>
);
