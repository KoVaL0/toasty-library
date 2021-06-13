import { SHOW } from '@/constants';

export const renderController = {
  eventsList: new Map(),
  listOfActiveToast: new Map(),
  queueList: new Map(),

  addListener(event, callback) {
    if (!this.eventsList.has(event)) {
      this.eventsList.set(event, []);
    }

    this.eventsList.get(event).push(callback);
    return this;
  },

  appendToast(event, content, options) {
    if (this.eventsList.has(event)) {
      if (this.listOfActiveToast.size < 3) {
        this.listOfActiveToast.set(options.toastId, { content, options });
        this.eventsList.get(event).forEach((callback) => {
          callback(options);
        });
      } else {
        this.queueList.set(options.toastId, { content, options });
      }
    }
  },

  removeToast(event, id) {
    if (this.eventsList.has(event)) {
      this.listOfActiveToast.delete(id);
      this.eventsList.get(event).forEach((callback) => {
        callback(id);
      });
    }
    this.appendToastFromQueue();
  },

  appendToastFromQueue() {
    if (this.queueList.size > 0) {
      const renderToast = {};
      this.queueList.forEach((value, key) => {
        if (this.listOfActiveToast.size < 3 && !renderToast.key) {
          renderToast.key = key;
          renderToast.value = value;
        }
      });
      if (renderToast.key) {
        this.appendToast(SHOW, renderToast.value.content, renderToast.value.options);
        this.queueList.delete(renderToast.key);
      }
    }
  },
};
