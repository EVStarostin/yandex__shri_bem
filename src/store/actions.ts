import { Dispatch } from 'redux';
import * as constants from './constants';
import { Event, StoreState } from './types';
import { ThunkAction } from 'redux-thunk';

const BASE_URL = "http://vds.evstar.ru:8000";

export interface FetchEventsSuccess {
  type: constants.FETCH_EVENTS_SUCCESS;
  payload: Event[];
}

export interface FetchEventsFail {
  type: constants.FETCH_EVENTS_FAIL;
  payload: Error;
}

export type FetchEventsAction = FetchEventsSuccess | FetchEventsFail;

export const fetchEvents = (): ThunkAction<void, StoreState, null, FetchEventsAction> => (dispatch: Dispatch<FetchEventsAction>) => {
  fetch(`${BASE_URL}/api/events`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: constants.FETCH_EVENTS_SUCCESS, payload: data.events }))
    .catch((error) => dispatch({ type: constants.FETCH_EVENTS_FAIL, payload: error }));
}
