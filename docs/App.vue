<template lang="pug">
  .docs
    cbp-vue-crop(options={})
    h3 Usage
    pre
      code(v-text="sourcecode")
    h3 Parameters
    h5 options
    ul.options
      li  isCirclePicker: is picker area circle {boolean} (default: true);
      li  containerSize: container size {object/number} example: {width:900, height:700} or 600 (default: 600);
      li  pickerSize: container size {object/number} example: {width:400, height:200} or 300 (default: 300);
      li  initialScale: initial scale of picker {number} (default: 1);
      li  minScale: minimal scale of picker, if stuck option is true, this options unnecessary {number} (default: 0.2);
      li  maxScale: maximal scale of picker {number} (default: 0.2);;
      li  stuck: if its true you can drag or scale image from picker area {boolean} (default: true);
      li  scaleStyle: vue style of scale {object} (default: {});
      li  containerStyle: vue style of container {object} (default: {});
      li  pickerStyle: vue style of picker {object} (default: {});
    h5 img
      div url to image
</template>

<script>
  import cbpVueCrop from '../src/cbp-vue-crop.vue'

  export default {
    name: 'App',
    components: { cbpVueCrop },

    data () {
      return { sourcecode: '<cbp-vue-crop options="options"></cbp-vue-crop>' }
    }
  }
</script>

<style lang="scss">
  .docs {
    width: 50%;
    margin: auto;
    padding: 10px;
  }

  code {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background: #3d3d3d;
    color: #f3f3fe;
  }

  .options {
    text-align: left;
  }
</style>
