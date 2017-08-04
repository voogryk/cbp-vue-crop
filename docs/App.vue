<template lang="pug">
  .docs
    cbp-vue-crop(ref="cbpVueCrop" options={}, img='https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg')
    button(@click="onCrop") CROP
    h4 Crop Result
    div {{cropData}}
    h3 Usage
    pre
      code(v-text="sourcecode")
    h3 Parameters
    h4 options
    ul.options
      li  isCirclePicker: is picker area circle {boolean} (default: true);
      li  containerSize: container size {object/number} example: {width:900, height:700} or 600 (default: 600);
      li  pickerSize: container size {object/number} example: {width:400, height:200} or 300 (default: 300);
      li  initialScale: initial scale of picker {number} (default: 1);
      li  minScale: minimal scale of picker, if stuck option is true, this options unnecessary {number} (default: 0.2);
      li  maxScale: maximal scale of picker {number} (default: 0.2);
      li  stepScale: step of scale {number} (default: 0.0001);
      li  stuck: if its true you can drag or scale image from picker area {boolean} (default: true);
      li  scaleStyle: vue style of scale {object} (default: {});
      li  containerStyle: vue style of container {object} (default: {});
      li  pickerStyle: vue style of picker {object} (default: {});
      li  backgroundColor: color of container background {string} (default: '#333333');
    h4 img
    div url to image
</template>

<script>
  import cbpVueCrop from '../src/cbp-vue-crop.vue'

  export default {
    name: 'App',
    components: { cbpVueCrop },

    data () {
      return { 
        sourcecode: '<cbp-vue-crop :options="options" :img="img"></cbp-vue-crop>',
        cropData: 'Click crop button to get data'
      }
    },

    methods: {
      onCrop() {
        let crop = this.$refs.cbpVueCrop.crop();
        this.cropData = "[{ x: " + crop[0].x + ", y: " + crop[0].y + " }, { x: " + crop[1].x + ", y: " + crop[1].y + " }]"; 
      }
    }
  }
</script>

<style lang="scss">
  .docs {
    width: 600px;
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
