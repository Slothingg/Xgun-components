<template>
  <flexBox>
    <div class="title-1">
      弹幕
    </div>
    <titleSub>
      组件地址
    </titleSub>
    <text-sub>
      www.github.com
    </text-sub>
    <titleSub>
      适用范围
    </titleSub>
    <text-sub>
      vue2.x组件(PS:后续有需要的话会更新vue3版本)
    </text-sub>
    <titleSub>
      效果展示
    </titleSub>
    <bullet class="bullet col" :item="data"></bullet>
    <Input v-model="modelValue" @on-enter="submit" placeholder="请输入弹幕">
    <button slot="suffix" class="btn" @click="submit">发送</button>
    </Input>
    <codemirror class="codemirror col" :value="code" :options="cmOptions"> </codemirror>
    <div class="title-1 col">
      Api
    </div>
    <apiTable :data="apis"></apiTable>
  </flexBox>
</template>

<script>
  import 'codemirror/mode/vue/vue.js'
  import bullet from '@/components/bullet.vue'
  export default {
    data() {
      return {
        data: [],
        modelValue: '',
        code: `
        <bullet :items="data"></bullet>

        data: []
        `,
        cmOptions: {
          mode: "text/javascript",
          theme: "base16-dark",
          height: 'auto'
        },
        apis: [{
            porps: 'item',
            instruction: '动态接收弹幕数组,子元素需为对象并包含text属性用于显示弹幕，如数组(data:[{...,text:"abc"}])',
            type: 'Array',
            defalut: '{}'
          },
          {
            porps: 'canvasWidth',
            instruction: '定义画布宽度(px)',
            type: 'Number',
            defalut: '750px'
          },
          {
            porps: 'canvasHeight',
            instruction: '定义画布高度(px)',
            type: 'Number',
            defalut: '300'
          },
          {
            porps: 'zIndex',
            instruction: '定义画布图层',
            type: 'Number',
            defalut: '10'
          },
          {
            porps: 'fontSize',
            instruction: '定义弹幕字体大小(px)',
            type: 'Number',
            defalut: '15'
          }
        ]
      }
    },
    components: {
      bullet
    },
    methods: {
      submit() {
        this.data.push({
          text: this.modelValue
        })
        this.modelValue = ''
      }
    }
  }
</script>

<style scoped>
  .col {
    margin-top: 10px;
  }

  .btn {
    font-size: 5px;
    width: 100%;
    height: 100%;
    background-color: #2d8cf0;
    border: none;
    color: white;
    transition: all 0.2s;
  }

  .btn:hover {
    box-shadow: 0px 0px 1px 1px #2d8cf0;
    text-shadow: 0px 0px 1px white;
  }

  .bullet {
    border: solid 1px;
    margin-bottom: 2px;
  }

  >>>.CodeMirror {
    height: 150px !important;
  }
</style>
