<template>
  <canvas id="xg-canvas" ref="xg-canvas" :style="'z-index: '+ zIndex"></canvas>
</template>

<script>
  export default {
    data() {
      return {
        canvas: '',
        canvasContext2d: '',
        map: [], //渲染地图
        interval: -10, //弹幕间隔
        topInterval: 5, //弹幕上方间隔
        spead: 1
      }
    },
    mounted() {
      this.canvas = this.$refs['xg-canvas']
      this.canvas.width = this.canvasWidth
      this.canvas.height = this.canvasHeight
      this.canvasContext2d = this.canvas.getContext('2d')
      this.canvasContext2d.font = this.fontSize + 'px STheiti, SimHei';
      for (let i in this.item) {
        this.pushMap(this.item[i].text)
      }
      this.draw()
    },
    computed: {
      bullet_data(){
        return this.item;
      },
      screen_height() {
        return this.canvas.height
      },
      screen_width() {
        return this.canvas.width
      }
    },
    watch: {
      bullet_data: {
        handler(newValue) {
          this.pushMap(newValue[newValue.length-1].text)
        },
        deep: true
      }
    },
    methods: {
      map_occupy(y_index) {
        let check = false;
        for (let i in this.map) {
          if (this.map[i].y == y_index && this.map[i].x >= this.screen_width - this.map[i].textWdith + this
            .interval) { //当当前泳道存在弹幕并且没有完全出道时
            check = true;
          }
        }
        return check;
      },
      get_lane() {
        return new Promise(resolve => {
          let y = 0;
          let lane = 1; //默认为第一道
          let timer = setInterval(() => {
            y = lane * (this.fontSize + this.topInterval)
            lane++;
            lane %= Math.floor(this.screen_height / (this.fontSize + this.topInterval))
            if (!this.map_occupy(y)) {
              clearInterval(timer);
              resolve(y)
            }
          }, 100)
        })
      },
      pushMap(value) { //添加弹幕
        let config = this.canvasContext2d.measureText(value);
        let x_index = this.screen_width
        this.get_lane().then(res => {
          let obj = {
            text: value,
            textWdith: config.width,
            x: x_index,
            y: res
          }
          this.map.push(obj)
        })
      },
      drawText(value, x, y) {
        this.canvasContext2d.fillText(value, x, y)
      },
      clrearCanvas() { //刷新画布
        this.canvas.clearRect(0, 0, this.screen_width, this.screen_height)
      },
      draw() {
        setInterval(() => {
          this.canvasContext2d.clearRect(0, 0, this.screen_width, this.screen_height)
          for (let i in this.map) {
            this.drawText(this.map[i].text, this.map[i].x, this.map[i].y)
          }
          for (let i in this.map) {
            this.map[i].x -= this.spead
            if(this.map[i].x <= 0 - this.map[i].textWdith){
              this.map.splice(i,1)
            }
          }
        }, 10)
      }
    },
    props: {
      item: {
        type: Array,
        required:true
      },
      canvasWidth: {
        type: Number,
        default: 750
      },
      canvasHeight:{
        type: Number,
        default:300
      },
      zIndex:{
        type:Number,
        default:10
      },
      fontSize:{
        type:Number,
        default:15
      }
    }
  }
</script>

<style scoped>
  #xg-canvas {
    min-height: 1rem;
  }
</style>
