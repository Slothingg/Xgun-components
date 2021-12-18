<template>
  <flexBox>
    <div class="title-1 col">
      媒体窗口
    </div>
    <titleSub class="col">
      组件地址
    </titleSub>
    <text-sub class="col">
      www.github.com
    </text-sub>
    <titleSub class="col">
      适用范围
    </titleSub>
    <text-sub class="col">
      此组件仅适用于uniapp（因为使用了rpx）,此处展示组件经过修改
    </text-sub>
    <titleSub class="col">
      效果展示
      <titleSub class="col">
        默认模板
      </titleSub>
    </titleSub>
    <div class="row">
      <text-sub>
        <codemirror class="codemirror" :value="code" :options="cmOptions"> </codemirror>
      </text-sub>
      <phone>
        <media :item="item" :theme="theme" :backgroundUrl="backgroundUrl"></media>
      </phone>
    </div>
    <div class="title-1 col">
      API
    </div>
    <apiTable :data="apis"></apiTable>
    <div class="title-1 col">
      EVENTS
    </div>
    <eventTable :data="events"></eventTable>
  </flexBox>
</template>

<script>
  import 'codemirror/mode/vue/vue.js'
  export default {
    data() {
      return {
        item: {
          avatar: '',
          time: '2020-12-12',
          username: 'balabala',
          already_follow: false,
          content: 'abcdefg',
          already_zan: false, //是否已经点赞
          num_zan: 0,
          already_chat: false,
          num_chat: 0,
          already_share: false,
          num_share: 0
        },
        theme: '#2d8cf0',
        backgroundUrl: 'url("../static/diwen.jpeg")',
        cmOptions: {
          mode: "text/javascript",
          theme: "base16-dark",
        },
        apis: [{
            porps: 'item',
            instruction: '接收媒体信息内容，具体参数请看上面代码',
            type: 'Object',
            defalut: '{}'
          },
          {
            porps: 'backgroundUrl',
            instruction: '能更改窗口底部背景,格式URL(...)',
            type: 'String',
            defalut: ''
          },
          {
            porps: 'theme',
            instruction: '更改主题颜色，包括名字，关注按钮，底部工具栏',
            type: 'String',
            defalut: ''
          }
        ],
        events:[{
          events:'toUser',
          instruction:'点击头像，用户名时触发',
          ret:'返回窗口item'
        },
        {
          events:'zan,cancel_zan',
          instruction:'点赞，取消点赞时触发',
          ret:'返回窗口item'
        },
        {
          events:'follow',
          instruction:'关注时触发',
          ret:'返回窗口item'
        },
        {
          events:'share',
          instruction:'分享时触发',
          ret:'返回窗口item'
        }],
        code: `
        <media :item="item" :theme="theme" :backgroundUrl="backgroundUrl"></media>

        backgroundUrl:'url("../static/diwen.jpeg")'
        theme:'#2d8cf0',
        item: {
          avatar: '',
          time: '2020-12-12',
          username: 'balabala',
          already_follow: false,
          content: 'abcdefg',
          already_zan: false,
          num_zan: 0,
          already_chat: false,
          num_chat: 0,
          already_share: false,
          num_share: 0
        }`
      }
    },
    components: {}
  }
</script>

<style scoped="scoped">
  .col {
    margin-top: 10px;
  }

  .row {
    display: flex;
    flex-direction: row;

  }
</style>
