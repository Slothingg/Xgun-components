<template>
  <div class="nav-list">
    <div class="logo">Xgun</div>
    <Menu :active-name="1">
      <MenuItem v-for="i,index in list" v-if="!i.is_sub" :key="index" :to="i.herf" :name="index">
        <div class="title">
          {{i.title}}
        </div>
      </MenuItem>
      <Submenu v-else :name='index'>
      <div class="title" slot="title">
        {{i.title}}
      </div>
      <MenuItem v-for="i_child,index_child in i.sub_item" :key="index_child" :to="i_child.herf" :name="index+'-'+index_child">
        <div class="title">
          {{i_child.title}}
        </div>
      </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
  import navList from '@/navList.json';
  export default{
    data(){
      return{
        list:[]
      }
    },
    mounted(){
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
  }
  .logo{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
  }
  .title{
    font-size: 0.1rem !important;
    margin-right: 10px;
  }
  >>>.ivu-menu{
    width: auto !important;
  }
  >>>.ivu-menu-vertical .ivu-menu-item, >>>.ivu-menu-vertical .ivu-menu-submenu-title{
    padding: 10px 15px;
  }
</style>

<style scoped="scoped">
  @media screen and (max-width: 860px){
    .nav-list{
      width: 260px;
    }
    >>>.ivu-menu-vertical .ivu-menu-item, >>>.ivu-menu-vertical .ivu-menu-submenu-title{
      padding: 10px 60px;
    }
  }
</style>
