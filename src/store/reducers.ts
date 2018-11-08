import { FetchEventsAction } from './actions';
import { StoreState } from './types';
import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAIL } from './constants';

const initialState = {
  events: [],
  errors: [],
};

export function reducer(state: StoreState = initialState, action: FetchEventsAction): StoreState {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.payload };
    case FETCH_EVENTS_FAIL:
      return { ...state, errors: [...state.errors, action.payload] };
  }
  return state;
}
