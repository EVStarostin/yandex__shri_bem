This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
___

## ДЗ - «БЭМ»
Страница *"События"* сверстана на *React* с использованием библиотеки `bem-react`.
Страница состоит из независимых блоков, готовых к повторному переиспользованию. Имена всех классов формируются с помощью пакета `@bem-react/cn`. Модификаторы применяются с помощью пакет `@bem-react/core`, а переопределение компонентов с помощью `@bem-react/di`.  
Страница доступна по ссылке: http://vds.evstar.ru:3000/

### Структура
- **Header** состоит из двух блоков:
  - `Logo` - Логотип (возможно использование где-либо помимо блока *Header*)  
  - `NavMenu` - Навигационное меню. Для активной ссылки добавляется модификатор `_active`.  
  На экранах, ширина которых меньше 768px, меню имеет два состояния - свернутое и развернутое. У навигационного меню есть булевый модификатор `_expanded`, при наличии которого меню развернуто. Значение модификатора меняется по клику на *бургеное меню* (компонент `ShowMenuBtn`).  

- **Footer** отображается только на десктопных экранах (так было в макете к самому первому ДЗ). Платформа (touch или desktop) определяется по наличию события *ontouchstart* на глобальном объекте *window*.  

- **Main** основной контект - это список событий. Для отображения события используются компоненты:
  - `EventsList` - компонент получает список событий с сервера и передает данные в дочерний компонент    
  - `Card` - блок-контейнер, который имеет модификаторы:  
    - `_size_s`, `_size_m`, `size_l` - сколько колонок занимает блок.  
    - `_type_critical` - красный фон блока.  
    На десктопах крестики в правом верхнем углу карточки появляются только по наведению, на touch-устройствах отображаются всегда.  
  - `EventData` - компонент, отображающий информацию по событиям в зависимости от типа. Для возможности переиспользования в будущем вынесены в отдельные компоненты:  
    - `Button` - кнопка, у которой есть булевый модификатор `_primary`, влияющий на цвет кнопки.  
    - `MusicPanel` - панель управления музыкой. Ползунки управления громкостью и time-line также вынесены в отдельный компонент `Range`, который может быть стандартным с прямоугольной ручкой и с круглой - модификатор `_thumb_round`.  
    - `Camera` - камера видеонаблюдения. Жесты для зуммирования, скрола и изменения яркости на React пока перенести не успел.  
