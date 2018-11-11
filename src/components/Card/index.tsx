import { compose } from '@bem-react/core';
import Base from './Card';
import CardSizeS from './_size/Card_size_s';
import CardSizeM from './_size/Card_size_m';
import CardSizeL from './_size/Card_size_l';
import CardTypeCritical from './_type/Card_type_critical';

export default compose (CardSizeS, CardSizeM, CardSizeL, CardTypeCritical)(Base);
