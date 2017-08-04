# cbp-vue-crop

> Simple and beauty Image Cropper for Vue

### Install

`npm install -s cbp-vue-crop`

### Usage

```bash

<cbp-vue-crop :options="options" :img="img"></cbp-vue-crop>

```

### Development Setup

```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

### Parameters

#### options

*Object*

Option | Description | Type | Default 
--- | --- | --- | ---
`isCirclePicker` | is picker area circle | boolean | *`true`*
`containerSize` | container size *example: `{width:900, height:700}` or `600`* | object/number | *`600`*
`pickerSize` | container size *example: `{width:400, height:200}` or `300`* | object/number | *`300`*
`initialScale` | initial scale of picker | number | *`1`*
`stuck` | if its true you cann't drag or scale image from picker area | boolean | *`true`*
`minScale` | minimal scale of picker, if `stuck` option is `true`, this options won't be used | number | *`0.2`*
`maxScale` | maximal scale of picker | number | *`2`*
`stepScale` | step of scale | number | *`0.0001`*
`scaleStyle` | vue style of scale | object | *`{}`*
`containerStyle` | vue style of container | object | *`{}`*
`pickerStyle` | vue style of picker | object | *`{}`*
`backgroundColor` | background color of container | string | *`'#333333'`*

#### img

*String*

Url to image wich u want to crop