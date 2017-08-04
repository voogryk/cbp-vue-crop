<template lang="pug">
  <div>
    test
  </div>
</template>

<script>
  export default {
    name: 'cbpVueCrop',

    props: ['options'],

    data() {
      return {
        defaults: {
          isCirclePicker: true,
          containerSize: 600,
          pickerSize: 300,
          initialScale: 1,
          minScale: 0.2,
          maxScale: 2,
          stuck: true,
          scaleStyle: {},
          containerStyle: {},
          pickerStyle: {},
        }
      }
    }


  }
</script>

<style lang="styl" scoped></style>
