<template>
  <div class="nav-list" :class="{'nav-list-on':nav_show}">
    <div class="logo">Xgun</div>
    <Menu :active-name="1" :mode="mode">
      <MenuItem v-for="i,index in list" v-if="!i.is_sub" :key="index" :to="i.herf" :name="index">
      <div class="title">
        {{i.title}}
      </div>
      </MenuItem>
      <Submenu v-else :name='index'>
        <div class="title" slot="title">
          {{i.title}}
        </div>
        <MenuItem v-for="i_child,index_child in i.sub_item" :key="index_child" :to="i_child.herf"
          :name="index+'-'+index_child">
        <div class="child-title">
          {{i_child.title}}
        </div>
        </MenuItem>
      </Submenu>
    </Menu>
    <div class="menu-btn" @click="show">
      <svg fill="currentColor" class="btn" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg>
    </div>
    <div class="mask" @click.stop="hiden" v-show="nav_show"></div>
  </div>
</template>

<script>
  import navList from '@/navList.json';
  export default {
    data() {
      return {
        list: [],
        mode: 'vertical',
        nav_show: false
      }
    },
    methods: {
      show() {
        this.nav_show = !this.nav_show
      },
      hiden(){
        this.nav_show = false;
      }
    },
    mounted() {
      console.log(navList)
      this.list = navList.navList
    }
  }
</script>

<style scoped>
  .nav-list {
    box-shadow: 1px 0px 10px 2px #EEEEEE;
    position: fixed;
    left: 0;
    top: 0;
    width: 120px;
    height: 100vh;
    background-color: white;
    transition: all 0.2s ease-in;
    z-index: 10;
    padding-left: ;
  }


  .nav-list-on {
    height: auto !important;
  }
  .mask{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }

  .logo {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }

  .title {
    font-size: 0.1rem !important;
    margin-right: 10px;
  }
  >>>.ivu-menu-vertical .ivu-menu-item{
    padding-left: 0;
  }
  .child-title{
    padding-left: 15px;
    font-size: 8px;
  }
  .menu-btn {
    position: fixed;
    right: 10px;
    top: 10px;
    width: 48px;
    height: 48px;
    display: none;
  }

  .menu-btn .btn {
    width: 100%;
    height: 100%;
  }

  >>>.ivu-menu {
    width: auto !important;
  }
  >>>.ivu-menu-vertical .ivu-menu-submenu-title-icon{
    right: 0;
  }
  >>>.ivu-menu-vertical .ivu-menu-item,
  >>>.ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 10px 15px;
    padding-right: 0;
  }
</style>

<style scoped="scoped">
  @media screen and (max-width: 1200px) {
    .nav-list {
      top: 0;
      left: 0;
      width: 100vw;
      height: 64px;
      line-height: 64px;
      flex-direction: row;
      z-index: 100;
      overflow: hidden;
      transition: all 0.2s ease-in;
    }

    .logo {
      height: 64px;
    }

    .menu-btn {
      display: block;
    }

    >>>.ivu-menu-vertical .ivu-menu-item,
    >>>.ivu-menu-vertical .ivu-menu-submenu-title {
      padding: 10px 60px;
    }
  }
</style>
