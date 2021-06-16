# Toasty-library [![github](http://disciplinas.tecnico.ulisboa.pt/leic-sod/2019-2020/labs/_img/github.png)](https://github.com/KoVaL0/toasty-library)
[![toasty.gif](https://s6.gifyu.com/images/bandicam-2021-06-16-21-55-41-343_Trim-online-video-cutter.com.gif)](https://github.com/KoVaL0/toasty-library)
Теперь интеграция уведомлений в ваш проект станет простейшей задачей. А так же для использования библиотеки не требуется написание большого кода!

#### Installation
```
$ git clone https://github.com/KoVaL0/toasty-library.git
$ npm run build
```

### Основной функционал:

- Показать уведомление.
- Возможность устанавливать положению уведомления.
- Возможность устанавливать тип уведомления (уведомления об успехе, ошибке, оповещение и т.д.).
- Возможность устанавливать длительность показа уведомления.
- Возможность задавать заголовок и описание уведомления.
- Возможность устанавливать отступы уведомления.
- Возможность изменять цвет типа уведомлений.
- Возможность изменять анимацию появления и исчезновения.
- Показ до 3 уведомлений одновременно.

### Пример использования:
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

### Возможная передача параметров:
```
toast.success('This contains the content of the notification!', {
    position: "topRight",
    color: "#000000",
    timeShow: "1500",
    animation: "wave",
});
```
### Возможные типы уведомлений:
```
toast.error('Toasty Error!');
toast.success('Toasty Success!');
toast.warning('Toasty Warning!');
toast.info('Toasty Info!');
```