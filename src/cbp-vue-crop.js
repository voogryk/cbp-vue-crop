export default {
    name: 'cbpVueCrop',

    props: ['options', 'img'],

    data() {
        return {
            defaults: {
                isCirclePicker: true,
                containerSize: 600,
                pickerSize: 300,
                initialScale: 1,
                minScale: 0.2,
                maxScale: 2,
                scaleStep: 0.0001,
                stuck: true,
                scaleStyle: {},
                containerStyle: {},
                pickerStyle: {},
                backgroundColor: '#333333',
            },
            imgWidth: 0,
            imgHeight: 0,
            scale: 1,
            top: 0,
            left: 0,
        }
    },

    created() {
        this.defaults = Object.assign(this.defaults, this.options);
        if (typeof this.defaults.containerSize === 'number') {
            this.defaults.containerSize = {
                width: this.defaults.containerSize,
                height: this.defaults.containerSize,
            };
        }
        if (typeof this.defaults.pickerSize === 'number') {
            this.defaults.pickerSize = {
                width: this.defaults.pickerSize,
                height: this.defaults.pickerSize,
            };
        }
    },

    mounted() {
        this.$refs.cropImg.onload = () => {
            this.unbindEvent();
            this.init();
        };
    },

    beforeDestroy() {
        this.unbindEvent();
    },

    methods: {
        init() {

            this.imgWidth = this.$refs.cropImg.naturalWidth;
            this.imgHeight = this.$refs.cropImg.naturalHeight;

            if (this.defaults.stuck) {
                this.scale = Math.max(this.defaults.containerSize.width, this.defaults.containerSize.height) / Math.min(this.imgWidth, this.imgHeight);
                this.defaults.minScale = Math.max(this.defaults.pickerSize.width, this.defaults.pickerSize.height) / Math.min(this.imgWidth, this.imgHeight);
                this.defaults.maxScale = (Math.max(this.defaults.pickerSize.width, this.defaults.pickerSize.height) / Math.min(this.imgWidth, this.imgHeight)) + this.defaults.maxScale;
            }

            this.bindEvent();
        },
        bindEvent() {
            window.addEventListener('mouseup', this.mouseUp, false);
        },
        
        unbindEvent() {
            window.removeEventListener('mouseup', this.mouseUp, false);
        },

        mouseMove(e) {
            let left = this.left;
            let top = this.top;
            left += e.movementX;
            top += e.movementY;
            if (this.defaults.stuck) {
                if (top > (this.defaults.containerSize.height - this.defaults.pickerSize.height) / 2
                || top + (this.imgHeight * this.scale) < (this.defaults.containerSize.height + this.defaults.pickerSize.height) / 2) {
                    top -= e.movementY;
                }
                if (left > (this.defaults.containerSize.width - this.defaults.pickerSize.width) / 2
                || left + (this.imgWidth * this.scale) < (this.defaults.containerSize.width + this.defaults.pickerSize.width) / 2) {
                    left -= e.movementX;
                }
            }
            this.top = top;
            this.left = left;
        },

        mouseUp() {
            window.removeEventListener('mousemove', this.mouseMove);
        },

        mouseDown() {
            window.addEventListener('mousemove', this.mouseMove);
        },

        changeScale(e) {
            if (this.defaults.stuck) {
                let top = this.top;
                let left = this.left;
                if (top + (this.imgHeight * e.target.value) < (this.defaults.containerSize.height + this.defaults.pickerSize.height) / 2) {
                    top += (this.defaults.containerSize.height + this.defaults.pickerSize.height) / 2 - (top + (this.imgHeight * e.target.value));
                }
                if (left + (this.imgWidth * e.target.value) < (this.defaults.containerSize.width + this.defaults.pickerSize.width) / 2) {
                    left += (this.defaults.containerSize.width + this.defaults.pickerSize.width) / 2 - (left + (this.imgWidth * e.target.value));
                }
                this.top = top;
                this.left = left;
            }
            this.scale = e.target.value;
        }
    }
}