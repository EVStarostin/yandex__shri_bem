import * as React from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';
import './Camera.css';

export const cnCamera = cn('Camera');

export const Camera: React.SFC<IClassNameProps> = ({ className }) => (
  <div className={cnCamera(null, [className])}>
  <div className={cnCamera('Img')} touch-action="none"></div>
  <div className={cnCamera('Info')}>
    <div className={cnCamera('ScrollBarArea')}>
      <div className={cnCamera('ScrollBar')} />
    </div>
    <p className={cnCamera('Zoom')}>Приближение: 200%</p>
    <p className={cnCamera('Brightness')}>Яркость: 50%</p>
    <div className={cnCamera('ResetZoomWrapper')}>
      <button className={cnCamera('ResetZoomBtn')}>1:1</button>
    </div>
  </div>
</div>
);
