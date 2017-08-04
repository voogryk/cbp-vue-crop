<template>
  <div :class="[$style.container, $style.stepFormHolder]">
    <div :class="$style.cropAvatarContainer" :style="Object.assign({width: defaults.containerSize.width + 'px', height: defaults.containerSize.height + 'px', backgroundColor: defaults.backgroundColor}, defaults.containerStyle)">
      <div :class="$style.cropImgContainer" :style="{width: defaults.containerSize.width + 'px', height: defaults.containerSize.height + 'px'}">
        <img :class="$style.cropImg" 
        :style="{
          transform: 'scale(' + scale + ')',
          top: top + 'px',
          left: left + 'px'
        }"
        ref="cropImg" :src="img"/>
        <div :class="[$style.cropViewport, defaults.isCirclePicker?$style.circle:'']" :style="Object.assign({width: defaults.pickerSize.width + 'px', height: defaults.pickerSize.height + 'px'}, defaults.pickerStyle)"></div>
        <div :class="$style.cropMove" 
        :style="{
          top: top + 'px',
          left: left + 'px',
          width: (scale * imgWidth) + 'px',
          height: (scale * imgHeight) + 'px'
        }"
        @mousedown="mouseDown"></div>
      </div>
    </div>
    <div :class="$style.cropScaleContainer" :style="{width: defaults.containerSize.width + 'px'}">
      <input :style="defaults.scaleStyle" :class="$style.cropScale" type="range" @input="changeScale" @change="changeScale" :min="defaults.minScale" :max="defaults.maxScale" :step="defaults.scaleStep" :value="scale" />
    </div>
  </div>
</template>

<script>
    import {default as code} from './cbp-vue-crop.js';
    export default code;
</script>

<style module scoped lang="stylus" src="./cbp-vue-crop.styl"></style>
