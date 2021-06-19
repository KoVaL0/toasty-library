import { DISPATCH_SHOW_TOAST } from '@/constants';
import { DEFAULT_MAX_ACTIVE_TOAST } from '../constants/options';

let instance = null;
class renderController {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.eventsList = new Map();
    this.listOfActiveToast = new Map();
    this.queueList = new Map();

    return instance;
  }

  addListener(event, callback) {
    if (!this.eventsList.has(event)) {
      this.eventsList.set(event, []);
    }

    this.eventsList.get(event).push(callback);
    return this;
  }

  appendToast(event, content, options) {
    if (this.eventsList.has(event)) {
      if (this.listOfActiveToast.size < DEFAULT_MAX_ACTIVE_TOAST) {
        this.listOfActiveToast.set(options.toastId, { content, options });
        this.eventsList.get(event).forEach((callback) => {
          callback(options);
        });
      } else {
        this.queueList.set(options.toastId, { content, options });
      }
    }
  }

  removeToast(event, id) {
    if (this.eventsList.has(event)) {
      this.listOfActiveToast.delete(id);
      this.eventsList.get(event).forEach((callback) => {
        callback(id);
      });
    }
    this.appendToastFromQueue();
  }

  appendToastFromQueue() {
    if (this.queueList.size > 0) {
      const renderToast = {};
      this.queueList.forEach((value, key) => {
        if (this.listOfActiveToast.size < DEFAULT_MAX_ACTIVE_TOAST && !renderToast.key) {
          renderToast.key = key;
          renderToast.value = value;
        }
      });
      if (renderToast.key) {
        this.appendToast(DISPATCH_SHOW_TOAST, renderToast.value.content, renderToast.value.options);
        this.queueList.delete(renderToast.key);
      }
    }
  }
}

export default renderController;
