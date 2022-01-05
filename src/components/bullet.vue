<template>
  <canvas ref="xg-canvas" :style="'z-index: '+ zIndex" @click="click($event)"></canvas>
</template>

<script>
  export default {
    data() {
      return {
        canvas: '',
        canvasContext2d: '',
        map: [], //渲染地图
        interval: 0, //弹幕间隔
        double_click: false, //双击事件
        choice_item: '',
        _scalc_y: 1
      }
    },
    mounted() {
      this.canvas = this.$refs['xg-canvas']
      this.canvas.width = this.canvasWidth
      this.canvas.height = this.canvasHeight
      this.canvasContext2d = this.canvas.getContext('2d')
      for (let i in this.item) {
        this.pushMap(this.item[i])
      }
      this.draw()
    },
    computed: {
      bullet_data() {
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
          this.pushMap(newValue[newValue.length - 1])
        },
        deep: true
      }
    },
    methods: {
      map_occupy(y_index, fontsize, spead) {
        let check = false;
        for (let i in this.map) {
          //在同一Y轴且如果没有完全出栈
          if ((y_index - this.map[i]._y < fontsize && this.map[i]._x + this.map[i].textWdith - this
              .interval > this.screen_width) ||
            ((y_index - this.map[i]._y < fontsize && Math.abs(this.map[i].spead - spead) * (this.duration *
              1000 / 10) > Math.abs(
              this.map[i]._x + this.map[i].textWdith - this.screen_width) && this.map[i].spead <= spead))) {
            //判断在持续期间弹幕是否会追尾（速度差判断）
            check = true;
            return check;
          }
        }
        return check;
      },
      get_lane(spead, fontsize) {
        return new Promise(resolve => {
          let y = fontsize;
          let timer = setInterval(() => {
            for(let i = 0 ; i<this.screen_height ; i+= fontsize){
              y = i + fontsize
              if (!this.map_occupy(y, fontsize, spead)) {
                clearInterval(timer);
                resolve({
                  y: y,
                  spead: spead
                })
                break;
              }
            }
          }, 100)
        })
      },
      pushMap(item) { //添加弹幕
        let fontsize = (item.fontSize || this.fontSize) //为每个弹幕设置fontsize
        let can2d = this.canvas.getContext('2d');
        can2d.font = fontsize + 'px STheiti';
        let textWdith = can2d.measureText(item.text).width
        let x_index = this.screen_width
        let spead = (this.screen_width + textWdith) / this.duration / 100
        this.get_lane(spead, fontsize).then(res => { //异步获得y坐标
          let obj = {
            text: item.text,
            textWdith: textWdith,
            _x: x_index,
            _y: res.y,
            spead: res.spead,
            spead_bk: res.spead,
            _fontsize: fontsize,
            _can2d: can2d
          }
          this.map.push(obj)
        })
      },
      drawText(item) {
        item._can2d.font = item._fontsize + 'px STheiti';
        item._can2d.fillText(item.text, item._x, item._y)
      },
      clrearCanvas() { //刷新画布
        this.canvas.clearRect(0, 0, this.screen_width, this.screen_height)
      },
      draw() {
        setInterval(() => {
          this.canvasContext2d.clearRect(0, 0, this.screen_width, this.screen_height)
          for (let i in this.map) {
            this.drawText(this.map[i])
          }
          for (let i in this.map) {
            this.map[i]._x -= this.map[i].spead
            if (this.map[i]._x <= 0 - this.map[i].textWdith) {
              this.map.splice(i, 1)
            }
          }
        }, 10)
      },
      item_cheackbox(item, x, y) { //检查弹幕位置
        let check = false;
        if (x < item._x + item.textWdith && y < item._y + this.fontSize && x > item._x && y > item._y) {
          check = true;
        }
        return check;
      },
      click(event) {
        if (!this.choice_item) {
          let rect = this.canvas.getBoundingClientRect();
          //点击相对于盒子的坐标
          let x = (event.clientX - rect.left) * (this.canvas.width / rect.width);
          let y = (event.clientY - rect.top) * (this.canvas.height / rect.height) + this.fontSize;
          for (let i of this.map) {
            if (this.item_cheackbox(i, x, y)) {
              i.spead = 0; //捕捉弹幕
              this.choice_item = i;
              this.$emit('clickItem', i)
              break;
            }
          }
        } else if (!this.double_click) {
          this.double_click = true;
          this.choice_item.spead = this.choice_item.spead_bk //释放弹幕
          this.choice_item = null;
          setTimeout(() => {
            this.double_click = false;
          }, 300)
        } else {
          console.log('双击')
          this.$emit('doubleClick');
        }
      }
    },
    props: {
      item: {
        type: Array,
        required: true,
      },
      canvasWidth: {
        type: Number,
        default: 750
      },
      canvasHeight: {
        type: Number,
        default: 300
      },
      zIndex: {
        type: Number,
        default: 10
      },
      fontSize: {
        type: Number,
        default: 15
      },
      duration: {
        type: Number,
        default: 5
      }
    }
  }
</script>

<style scoped>
</style>
