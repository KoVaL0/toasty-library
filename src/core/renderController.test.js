import {
  ANIMATION_WAVE_TOAST,
  DEFAULT_CONTENT,
  DISPATCH_SHOW_TOAST,
  ToastMode,
  ToastPositions,
} from '@/constants';
import RenderController from '@/core/renderController';

const props = {
  content: DEFAULT_CONTENT,
  options: {
    position: ToastPositions.BOTTOM_RIGHT,
    mode: ToastMode.INFO,
    timeShow: '5000',
    color: '#ffffff',
    animation: ANIMATION_WAVE_TOAST,
  },
};

describe('RenderController', () => {
  it('should add the event to the eventList', () => {
    const { instance } = RenderController;
    instance.addListener(DISPATCH_SHOW_TOAST, () => {});
    expect(instance.eventsList.size).toBe(1);
  });

  it('should add the toast to the render', () => {
    const { instance } = RenderController;
    instance.appendToast(DISPATCH_SHOW_TOAST, props.content, { ...props.options, toastId: '1' });
    expect(instance.listOfActiveToast.size).toBe(1);
  });

  it('should add the toast to the queue', () => {
    const { instance } = RenderController;
    instance.appendToast(DISPATCH_SHOW_TOAST, props.content, { ...props.options, toastId: '2' });
    instance.appendToast(DISPATCH_SHOW_TOAST, props.content, { ...props.options, toastId: '3' });
    instance.appendToast(DISPATCH_SHOW_TOAST, props.content, { ...props.options, toastId: '4' });
    expect(instance.queueList.size).toBe(1);
  });

  it('should remove the toast from the queue and add toast to the render', () => {
    const { instance } = RenderController;
    instance.removeToast(DISPATCH_SHOW_TOAST, '1');
    expect(instance.queueList.size).toBe(0);
    expect(instance.listOfActiveToast.get('1')).toBe(undefined);
  });
});
