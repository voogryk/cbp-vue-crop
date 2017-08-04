# cbp-vue-crop

> Simple and beauty Image Cropper for Vue

<div style="text-align:center">
  <img src="src/assets/vue.png" alt="vue" title="vue"/>
</div>

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

### Options

Option | Description | Type | Default 
--- | --- | --- | ---
`isCirclePicker` | is picker area circle | boolean | *`true`*
`containerSize` | container size *example: `{width:900, height:700}` or `600`* | object/number | *`600`*
`pickerSize` | container size *example: `{width:400, height:200}` or `300`* | object/number | *`300`*
`initialScale` | initial scale of picker | number | *`1`*
`stuck` | if its true you can drag or scale image from picker area | boolean | *`true`*
`minScale` | minimal scale of picker, if `stuck` option is `true`, this options won't be used | number | *`0.2`*
`maxScale` | maximal scale of picker | number | *`0.2`*
`scaleStyle` | vue style of scale | object | *`{}`*
`containerStyle` | vue style of container | object | *`{}`*
`pickerStyle` | vue style of picker | object | *`{}`*