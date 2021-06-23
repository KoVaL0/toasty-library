import { DISPATCH_ADD_TOAST, DISPATCH_REMOVE_TOAST } from '@/constants';
import { reducer } from '@/reducers/toastContainerReducer';

describe('toastContainerReducer', () => {
  it('should add the toastId to the state', () => {
    const state = reducer([], { type: DISPATCH_ADD_TOAST, toastId: '1' });
    expect(state).toHaveLength(1);
  });

  it('should remove the toastId from the state', () => {
    const state = reducer(['1', '2'], { type: DISPATCH_REMOVE_TOAST, toastId: '1' });
    expect(state).toEqual(['2']);
  });

  it('should return the state', () => {
    const state = reducer(['1', '2'], { type: undefined, toastId: '3' });
    expect(state).toEqual(['1', '2']);
  });
});
