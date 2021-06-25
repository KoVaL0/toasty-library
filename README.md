[![Node.js Package](https://github.com/KoVaL0/toasty-library/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/KoVaL0/toasty-library/actions/workflows/npm-publish.yml)
# React-Toasty-library [![github](http://disciplinas.tecnico.ulisboa.pt/leic-sod/2019-2020/labs/_img/github.png)](https://github.com/KoVaL0/toasty-library)
[![toasty.gif](https://s6.gifyu.com/images/bandicam-2021-06-16-21-55-41-343_Trim-online-video-cutter.com.gif)](https://github.com/KoVaL0/toasty-library)

Now integrating notifications into your project will be the easiest task. Also, you don't need to write big code to use the library!

#### Installation
```
$ npm i react-toasty-library
```

> Note: Follow the instructions below to view the start page.

```
$ git clone https://github.com/KoVaL0/toasty-library.git
$ cd toasty-library
$ npm i
$ npm run build
$ cd example
$ npm i
$ npm run start
```
### Main functionality:

- Show notifications.
- Ability to set the position of the notification.
- Ability to set the type of notification (notification of success, error, alert, etc.).
- Ability to set the duration of the notification.
- Ability to set the description of the notification.
- Ability to set notification indents.
- Ability to change the color of the notification type.
- Ability to change animation of appearance.
- Show up to 3 notifications at the same time.

### Usage example:
```
 import React from 'react';

  import { ToastContainer, toast } from 'toasty-library';
  import toasty-library/dist/index.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```

### Possible parameter passing:
```
toast.success('This contains the content of the notification!', {
    position: "topRight",
    color: "#000000",
    timeShow: "1500",
    animation: "wave",
});
```
### Possible types of notifications:
```
toast.error('Toasty Error!');
toast.success('Toasty Success!');
toast.warning('Toasty Warning!');
toast.info('Toasty Info!');
```
### You can change the indentation styles as follows (SCSS):

This requires you to override the style classes in your root style file
```
$indents: 3em;

#toastContainer-bottomRight {
    bottom: $indents;
    right: $indents;
}

#toastContainer-bottomLeft {
    bottom: $indents;
    left: $indents;
}

#toastContainer-topRight {
    top: $indents;
    right: $indents;
}

#toastContainer-topLeft {
    top: $indents;
    left: $indents;
}
```
> Note: When using CSS: bottom: `3em`;