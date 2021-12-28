<template>
  <flexBox>
    <div class="title-1 col">
      媒体窗口
    </div>
    <titleSub class="col">
      组件地址
    </titleSub>
    <text-sub class="col">
      https://github.com/Slothingg/Xgun-components/uni_components/media.vue
    </text-sub>
    <titleSub class="col">
      适用范围
    </titleSub>
    <text-sub class="col">
      此组件仅适用于uniapp（因为使用了rpx）,此处展示组件经过修改，最终效果请到uniapp上看
    </text-sub>
    <titleSub class="col">
      使用示例
    </titleSub>
    <codemirror :value="code" :options="cmOptions"> </codemirror>
    <phone>
      <media class="media" :item="item" :theme="theme" :backgroundUrl="backgroundUrl">
      </media>
    </phone>
    <div class="title-1 col">
      Api
    </div>
    <apiTable :data="apis"></apiTable>
    <div class="title-1 col">
      Events
    </div>
    <eventTable :data="events"></eventTable>
    <div class="title-1 col">
      Slot
    </div>
    <slotTable :data="slots"></slotTable>
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
          content: `abcdeasdfg<img src="../../static/emoji.gif"><img src="../../static/emoji.gif"><img src="../../static/emoji.gif"><img src="../../static/emoji.gif">asdasdasdasd`,
          already_zan: false, //是否已经点赞
          num_zan: 0,
          already_chat: false,
          num_chat: 0,
          already_share: false,
          num_share: 0,
          comment: {
            username: 'abc',
            content: 'asddasdasasdasdasdsdasdasa'
          }
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
            porps: 'order_tools',
            instruction: '用于显示自定义底栏',
            type: 'Boolean',
            defalut: 'false'
          },
          {
            porps: 'theme',
            instruction: '更改主题颜色，包括名字，关注按钮，底部工具栏',
            type: 'String',
            defalut: ''
          }
        ],
        events: [{
            events: 'toUser',
            instruction: '点击头像，用户名时触发',
            ret: '返回目标item'
          },
          {
            events: 'zan,cancel_zan',
            instruction: '点赞，取消点赞时触发',
            ret: '返回目标item'
          },
          {
            events: 'follow',
            instruction: '关注时触发',
            ret: '返回目标item'
          },
          {
            events: 'share',
            instruction: '分享时触发',
            ret: '返回目标item'
          }
        ],
        slots: [{
            name: 'media',
            instruction: '用于显示图片和视频等内容的插槽',
          },
          {
            name: 'tool',
            instruction: '用于显示自定义底栏的插槽（仅order_tools:true时有效）',
          }
        ],
        code: `
        <media :item="item" :theme="theme" :backgroundUrl="backgroundUrl"></media>

        backgroundUrl:'url("../static/diwen.jpeg")'
        theme:'#2d8cf0',//设置主题颜色
        order_tools:false,//是否自定义底栏，默认禁止
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
          num_share: 0,
          comment: { //用于显示一条评论（可选）
            username: '',
            content: ''
          }
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


  @media screen and (max-width: 750px) {
    .row {
      flex-direction: column;
    }

    .xg-media-box .xg-media-head {
      height: 120px !important;
    }
  }
</style>
