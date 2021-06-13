import { ADD, REMOVE } from '@/constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.toastId];
    case REMOVE:
      return state.filter((id) => id !== action.toastId);
    default:
      return state;
  }
};
