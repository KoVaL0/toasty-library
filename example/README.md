# Instructions for publishing the start page

> Note: Requires to manually create a structure in root directory (example)

```
static/
    сss/
        index.css
    js/
        index.js
    index.html
```

Next step this 

```
$ npm run build
```
Transfer the finished files to the previously created directory
#### Edit src and href in index.html
```
<link href="/toasty-library/static/css/index.css" rel="stylesheet">
<script src="/toasty-library/static/js/index.js"></script>
```
And publish

```
$ npm run deploy
```
