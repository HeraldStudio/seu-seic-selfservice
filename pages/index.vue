<template>
  <div class="container">
    <div class="head">
      <img id="head-img" src="~/assets/head-img.png" />
      <img id="head-name" src="~/assets/head-name.png" />
      <div id="head-nic">网络与信息中心</div>
    </div>
    <div id="banner">
      <el-carousel :interval="4000" height="44.9vw" indicator-position="none">
        <el-carousel-item class="banner-item">
          <img class="banner-img" src="~/assets/banner/yqfk.png" />
        </el-carousel-item>
        <el-carousel-item class="banner-item">
          <img class="banner-img" src="~/assets/banner/yqfk.png" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div id="split">
      <div>自助服务</div>
    </div> -->
    <div id="content">
      <div id="left-side">
        <div class="padding"></div>
        <div class="left-side-item" v-for="item in leftItem" :key="item.name" @click="leftChange(item.name)">
          <img class="left-side-item-icon" v-if="item.name === leftActive" :src="item.activeIcon" />
          <img class="left-side-item-icon" v-else :src="item.icon" />
          <div class="left-side-item-text" :class="{'left-side-item-text-active': item.name === leftActive }">{{item.name}}</div>
        </div>
      </div>
      <div id="right-side">

      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { Carousel, CarouselItem } from "element-ui";

export default {
  components: {
    Logo,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem
  },
  data(){
    return { 
      leftActive:'疫情防控',
      leftItem:[
        { 
          name:"疫情防控",
          access:['2', '1', '3'],
          activeIcon: require("~/assets/left-icon/yqfk-orange.svg"),
          icon: require("~/assets/left-icon/yqfk-white.svg"),
        },
        { 
          name:"中心服务",
          access:['2', '1', '3'],
          activeIcon: require("~/assets/left-icon/fwlc-orange.svg"),
          icon: require("~/assets/left-icon/fwlc-white.svg"),
        },
        { 
          name:"便捷查询",
          access:['2', '1', '3'],
          activeIcon: require("~/assets/left-icon/bjcx-orange.svg"),
          icon: require("~/assets/left-icon/bjcx-white.svg"),
        },
        { 
          name:"工作流程",
          access:['1', '3'],
          activeIcon: require("~/assets/left-icon/gzlc-orange.svg"),
          icon: require("~/assets/left-icon/gzlc-white.svg"),
        },
      ]
    }
  },
  methods: {
    leftChange(index){
      this.leftActive = index
    }
  },
  async asyncData({req, res, $axios, query, route, redirect}){
    if (process.server) {
      // 在服务器端
      if(query.ticket){
        // 如果有 ticket 则验证
        console.log(query)
        try {
        let casInfo = await $axios.get(`https://seicwxbz.seu.edu.cn/cas-we-can/serviceValidate?service=${encodeURIComponent('https://seicwxbz.seu.edu.cn/self-service')}&ticket=${query.ticket}&json=1`)
        console.log(casInfo.data)
        return {name:casInfo.data.cas_info.name, cardnum:casInfo.data.cas_info.cardnum}
        } catch (e) {
          redirect(`https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent('https://seicwxbz.seu.edu.cn/self-service')}`)
        }
      } else {
        redirect(`https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent('https://seicwxbz.seu.edu.cn/self-service')}`)
      }
    } else {
      
    }
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.head {
  background-color: #304028;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  border-bottom: #44573a solid 2px;
  position: fixed;
}
#head-img {
  height: 40px;
}
#head-name {
  height: 40px;
  margin-left: 10px;
}
#head-nic {
  font-size: 24px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
}
#banner {
  margin-top: 70px;
  width: 100%;
  z-index: -1;
}
.banner-img{
  width: 100%;
}
.banner-item{
  display: flex;
  align-items: center;
  width:100%;
}
#split{
  height: 60px;
  background: #f0f0f0;
}
#content{
  display: flex;
  flex-grow: 1;
}
#left-side{
  background-color: #304028;
  flex-basis: 65px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.padding{
  flex-basis: 20px;
}
.left-side-item {
  height: 65px; 
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-top: 10px;
}
.left-side-item-active {
  background-color: white;
}
.left-side-item-icon {
  width: 28px;
}
.left-side-item-text {
  font-size: 10px;
  margin-top: 5px;
  color: white;
}
.left-side-item-text-active {
  color: #f08200;
}
</style>
