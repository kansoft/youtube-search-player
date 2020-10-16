import * as Actions from './actions';
import update from 'immutability-helper';
export const initialState = {
  isLoading: false,
  error: null,
  videos: [
    {
      id: '',
      title: '',
      description: '',
      channelTitle: '',
    },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.SEARCH_REQUESTED: {
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null },
      });
    }
    case Actions.SEARCH_SUCCESS: {
      const videos = action.data;
      return update(state, {
        isLoading: { $set: false },
        error: { $set: null },
        videos: { $set: videos },
      });
    }
    case Actions.SEARCH_FAILED: {
      const error = action.data;
      return update(state, {
        isLoading: { $set: false },
        error: { $set: error },
      });
    }
    default: {
      return state;
    }
  }
}
