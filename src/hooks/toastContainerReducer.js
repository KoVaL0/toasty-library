import { DISPATCH_ADD_TOAST, DISPATCH_REMOVE_TOAST } from '@/constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case DISPATCH_ADD_TOAST:
      return [...state, action.toastId];
    case DISPATCH_REMOVE_TOAST:
      return state.filter((id) => id !== action.toastId);
    default:
      return state;
  }
};
