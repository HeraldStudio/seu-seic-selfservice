<template>
  <div class="container">
    <div class="head">
      <img id="head-img" src="~/assets/head-img.png" />
      <img id="head-name" src="~/assets/head-name.png" />
      <div id="head-nic">网络与信息中心</div>
    </div>
    <div id="banner">
      <el-carousel
        :interval="4000"
        height="42vw"
        indicator-position="none"
        arrow="always"
      >
        <el-carousel-item
          class="banner-item"
          v-for="item in bannerAvailable"
          :key="item.key"
        >
          <img class="banner-img" :src="item.src" @click="openUrl(item.url)" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div id="split">
      <div>自助服务</div>
    </div>-->
    <div id="content">
      <div id="left-side">
        <div class="padding"></div>
        <div
          class="left-side-item"
          v-for="item in leftAvailable"
          :key="item.name"
          @click="leftChange(item.name)"
        >
          <img
            class="left-side-item-icon"
            v-if="item.name === leftActive"
            :src="item.activeIcon"
          />
          <img class="left-side-item-icon" v-else :src="item.icon" />
          <div
            class="left-side-item-text"
            :class="{ 'left-side-item-text-active': item.name === leftActive }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div id="right-side">
        <div id="right-inner">
          <div
            class="right-item"
            v-for="item in rightAvailable"
            :key="item.key"
            @click="openUrl(item.url)"
          >
            <img class="right-item-icon" :src="item.icon" />
            <div class="right-item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-dialog :visible.sync="logoutDialogVisible" width="90%" :show-close="false" title="切换用户">
      <div
        style="border:solid 1px #eee; border-radius:5px; flex-basis: 45px; width: 90%; margin-top:10px; padding: 10px; color:#000; font-weight: normal;font-size: 20px;"
      >
        <p>确认切换用户？</p>
        <p style="font-size:16px;color:rgba(0,0,0,0.5)">您将跳转到统一身份认证页面重新认证身份</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeLogoutDialog" type="primary" plain>取消</el-button>
        <el-button @click="logout" type="warning" plain>确认</el-button>
      </span>
    </el-dialog>-->
    <img
      src="../assets/logout_1.svg"
      class="float-logo"
      style="width: 48px; height: 48px"
      @click="logout"
    />
    <!-- 语音早安 -->

    <!--
    <el-dialog :visible.sync="voiceDialogVisible" width="90%" :show-close="false" title="语音留言">
      <div style="display:flex; align-items:flex-start;">
        <div
          style="flex-shrink:0; border:solid 1px #eee; border-radius:5px;width: 45px; height: 45px;"
        >
          <img style="width: 100%" :src="niclogo" />
        </div>
        <div
          style="flex-grow:1; margin-left:10px; display:flex; flex-direction:column; align-items:flex-start;"
        >
          <div
            style="border:solid 1px #eee; border-radius:5px; flex-basis: 45px; width: 120px; display:flex; align-items:center; justify-content:flex-start;"
            @click="playVoice"
          >
            <img :src="voicePlayingIcon" v-if="voicePlaying" style="margin-left:10px; width: 20px;" />
            <img :src="voiceIcon" v-else style="margin-left:10px; width: 20px;" />
            <div style="color:#000; font-weight: normal; margin-left:5px;">8''</div>
          </div>
          <div
            style="border:solid 1px #eee; border-radius:5px; flex-basis: 45px; width: 200px; margin-top:10px; padding: 10px; color:#000; font-weight: normal;"
          >
            Revit2020新功能培训来袭！专业认证讲师带教，还有Autodesk大礼包免费领！还等什么，快来参与吧！
          </div>
          <div
            style="margin-top:10px; border-radius: 20px; background-color:#eee; color:#888; font-size: 10px; padding: 0px 10px;"
          >要调大手机音量才能听到哟</div>
          <el-button style="margin-top:10px;" @click="changeVoice" type="primary" plain>{{voice[currentVoice].nextHint}}</el-button> 
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="disableVoice" type="danger" plain>不再提示</el-button>
        <el-button @click="closeVoiceDialog" type="success" plain>知道啦</el-button>
      </span>
    </el-dialog>
    -->
    <!--
    <div>
      <img class="float-logo" :src="niclogo" @click="showVoiceDialog" />
    </div>
    -->
    <audio ref="voice" :src="voice[currentVoice].voice" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { Carousel, CarouselItem, Dialog, Button } from "element-ui";
const banner = [

  // {
  //   key: "小猴偷米App",
  //   access: ["21"],
  //   src: require("~/assets/banner/小猴偷米App.jpg"),
  //   url: "https://mp.weixin.qq.com/s/ntWJdaCfHddMrWswTK28aQ"
  // },
  {
    key: "自助服务疫情防控",
    access: "all",
    src: require("~/assets/banner/zzfw1.png"),
    url: "",
  },
  {
    key: "科研经费",
    access: "all",
    src: require("~/assets/banner/kyjf.jpg"),
    url: "https://mp.weixin.qq.com/s/Boy45MFy1X2ZfIKJKkxmng"
  },
  {
    key: "启明星辰",
    access: "all",
    src: require("~/assets/banner/qmxc.jpg"),
    url: "https://mp.weixin.qq.com/s/IbWLqJBX2gbA-4YYpFnIMA"
  }
  // {
  //   key: "关于Adobe激活的紧急通知",
  //   access: "all",
  //   src: require("~/assets/banner/关于Adobe激活的紧急通知.png"),
  //   url: "https://mp.weixin.qq.com/s/Vq2bomxQyxQc6GCfR2vxuw",
  // },
  
  // {
  //   key:"网络安全攻防大赛广告",
  //   access:"all",
  //   src: require("~/assets/banner/攻防大赛推文.png"),
  //   url:"https://mp.weixin.qq.com/s/Zbt7TAAiZSNIOi_UQ0wjeg"
  // },
  // {
  //   key:"Matlab教学推广广告",
  //   access:"all",
  //   src: require("~/assets/banner/Matlab讲座.png"),
  //   url:"https://mp.weixin.qq.com/s/VAMB0RL4njNLGv9GLaU-5A"
  // },
  // {
  //   key: "网信协会招新圆满完成",
  //   access: "all",
  //   src: require("~/assets/banner/matlab2020b.png"),
  //   url: "https://mp.weixin.qq.com/s/ux485uGIiWrMYMUs3ct01w",
  // }
];
const leftItem = [
  {
    name: "疫情防控",
    access: "all",
    activeIcon: require("~/assets/left-icon/yqfk-orange.svg"),
    icon: require("~/assets/left-icon/yqfk-white.svg"),
  },
  {
    name: "迎新专栏",
    access: ["1", "2"],
    activeIcon: require("~/assets/left-icon/yxfw-orange.svg"),
    icon: require("~/assets/left-icon/yxfw-white.svg"),
  },
  {
    name: "个人服务",
    access: "all",
    activeIcon: require("~/assets/left-icon/fwlc-orange.svg"),
    icon: require("~/assets/left-icon/fwlc-white.svg"),
  },
  {
    name: "部门服务",
    access: ["1", "3"],
    activeIcon: require("~/assets/left-icon/gzlc-orange.svg"),
    icon: require("~/assets/left-icon/gzlc-white.svg"),
  },
];
const rightItem = {
  疫情防控: [
    {
      key: "疫情防控",
      name: "健康申报",
      access: "all",
      icon: require("~/assets/right-icon/yqfk.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/qljfwapp2/sys/lwReportEpidemicSeu/*default/index.do",
    },
    {
      key: "入校申请",
      name: "入校申请审批",
      access: "all",
      icon: require("~/assets/right-icon/rxsq.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/qljfwapp3/sys/lwWiseduElectronicPass/*default/index.do",
    },
    {
      key: "浴室预约",
      name: "浴室预约",
      access: "all",
      icon: require("~/assets/right-icon/ysyy.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://zwys.seu.edu.cn:8080/ddshower/f/wechat/user/showerIndex",
    },
    {
      key: "外出审批",
      name: "疫情期间外出审批系统",
      access: ["1", "3"],
      icon: require("~/assets/right-icon/wcsp.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/qljfwapp4/sys/lwSeuSpecialPeriodEvection/*default/index.do",
    },
    {
      key: "研究生出校审批",
      name: "研究生出校审批",
      access: ["22", "1", "23", "307"],
      icon: require("~/assets/right-icon/cxsp-master.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/ygfw/sys/swmxsqjappseuyangong/*default/index.do",
    },
    {
      key: "本科生出校审批",
      name: "本科生出校审批",
      access: ["1", "21"],
      icon: require("~/assets/right-icon/cxsp-master.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/xsfw/sys/swmxsqjapp/*default/index.do",
    },
    {
      key: "访客入校申请",
      name: "访客入校申请",
      access: "all",
      icon: require("~/assets/right-icon/rxsq.svg"),
      url: "http://infoplus.seu.edu.cn/txm/todo?membership=Infoplus_Enterprise",
    },
    {
      key: "研究生返校申请",
      name: "研究生返校申请",
      access: ["22", "320002317", "23"],
      icon: require("~/assets/right-icon/rxsq.svg"),
      url:
        "http://infoplus.seu.edu.cn/taskcenter/wechat/todo?appCode=YJSFXSQ&membership=Infoplus_Enterprise",
    },
    {
      key: "本科生返校申请",
      name: "本科生返校申请",
      access: ["21", "320002317"],
      icon: require("~/assets/right-icon/rxsq.svg"),
      url:
        "http://infoplus.seu.edu.cn/taskcenter/wechat/todo?appCode=BKSFXSQ&membership=Infoplus_Enterprise",
    },
    {
      key: "本科生返校审批",
      name: "本科生返校审批",
      access: ["1", "320002317"],
      icon: require("~/assets/right-icon/cxsp-master.svg"),
      // url: "http://nicspd.seu.edu.cn/infodash/",
      url:
        "http://infoplus.seu.edu.cn/taskcenter/wechat/todo?membership=Infoplus_Enterprise",
    },
    {
      key: "研究生返校审批",
      name: "研究生返校审批",
      access: ["1", "320002317", "307"],
      icon: require("~/assets/right-icon/cxsp-master.svg"),
      // url: "http://nicspd.seu.edu.cn/infodash/",
      url:
        "http://infoplus.seu.edu.cn/taskcenter/wechat/todo?membership=Infoplus_Enterprise",
    },
  ],
  个人服务: [
    {
      key: "服务指南",
      name: "服务指南",
      access: "all",
      icon: require("~/assets/right-icon/fwzn.svg"),
      url: "https://nic.seu.edu.cn/bxs/zhxyfwzn.htm",
    },
    {
      key: "ZOOM云会议",
      name: "ZOOM云会议",
      access: "all",
      icon: require("~/assets/right-icon/zoomfixed.svg"),
      url: "http://zoom.seu.edu.cn",
    },
    // {
    //   key: "Skype云会议",
    //   name: "Skype云会议",
    //   access: "all",
    //   icon: require("~/assets/right-icon/skype.svg"),
    //   url: "https://nic.seu.edu.cn/_s21/2020/0130/c27530a316322/pagem.psp",
    // },
    {
      key: "移动OA",
      name: "移动OA",
      access: "all",
      icon: require("~/assets/right-icon/oa.svg"),
      url: "http://mcp.seu.edu.cn/public/download/index.html",
    },
    {
      key: "上网充值",
      name: "上网充值",
      access: "all",
      icon: require("~/assets/right-icon/swcz.svg"),
      url: "http://selfservice.seu.edu.cn/Self",
    },
    {
      key: "电子邮件",
      name: "电子邮件",
      access: "all",
      icon: require("~/assets/right-icon/email.svg"),
      url: "https://mail.seu.edu.cn/coremail/xphone/",
    },
    {
      key: "东大云盘",
      name: "东大云盘",
      access: "all",
      icon: require("~/assets/right-icon/yun.svg"),
      url: "https://pan.seu.edu.cn/",
    },
    {
      key: "综合考评",
      name: "综合考评",
      access: "all",
      icon: require("~/assets/right-icon/zhkp.svg"),
      url: "http://zhkp.seu.edu.cn",
    },
    {
      key: "课程表",
      name: "课表查询",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/kcb.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/jwapp/sys/bykbseuMobile/*default/index.do",
    },
    {
      key: "校车时刻",
      name: "校车查询",
      access: "all",
      icon: require("~/assets/right-icon/xcsk.svg"),
      url: "https://zwc.seu.edu.cn/2020/0413/c4297a323906/page.htm",
    },
    {
      key: "党费缴纳",
      name: "党费缴纳",
      access: "all",
      icon: require("~/assets/right-icon/dfjn.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/publiccrowd_bw/sys/pubmdfglseu/index.do",
    },
    {
      key: "学生公寓",
      name: "学生公寓",
      access: "all",
      icon: require("~/assets/right-icon/xsgy.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/zwfw/sys/swmssdhappseu/*default/index.do",
    },
    {
      key: "本科招生",
      name: "本科招生",
      access: [
        "213162317",
        "213171610",
        "103008527",
        "109000473",
        "109000474",
        "310006421",
        "310006422",
        "312001285",
        "220123456",
        "213180720",
        "213193423",
      ],
      icon: require("~/assets/right-icon/zwfw-gray.svg"),
      url: "http://bkzs.seu.edu.cn/bkzs/sys/yxsyglxsdappseu/index.html",
    },
    {
      key: "网络安全知识竞赛",
      name: "网络安全知识竞赛",
      access: ["320002317"],
      icon: require("~/assets/right-icon/wlaqjs.svg"),
      url: "https://seicwxbz.seu.edu.cn/quiz/",
    },
    {
      key: "访客财务权限申请",
      name: "访客财务权限申请",
      access: ["3"],
      icon: require("~/assets/right-icon/xwrycw.svg"),
      url:
        "http://infoplus.seu.edu.cn/taskcenter/wechat/todo?appCode=XWRYCWQXSP&membership=Infoplus_Enterprise",
    },
    {
      key: "体检自助服务",
      name: "体检自助服务",
      access: ["1", "213183580"],
      icon: require("~/assets/right-icon/sstj.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://yytj.seu.edu.cn",
    },
  ],
  部门服务: [
    {
      key: "二级网站",
      name: "二级网站申请",
      access: ["1", "2", "3"],
      icon: require("~/assets/right-icon/ejwz.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.wzkt.ejwzsq&appload=0",
    },
    {
      key: "三级网站",
      name: "三级网站申请",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/sjwz.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.wzkt.sjwzsq&appload=0",
    },
    {
      key: "统一通信平台",
      name: "统一通信平台",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/tytxpt.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.dxjkfw.dxjkfw_tytxpt&appload=0",
    },
    {
      key: "短信接口",
      name: "短信接口",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/dxjk.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.dxjkfw.dxjkfw_dxjkdy&appload=0",
    },
    {
      key: "虚拟机申请",
      name: "虚拟机申请",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/xnjsq.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.xjsq.xjsq&appload=0",
    },
    {
      key: "域名申请",
      name: "域名申请",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/ymsq.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.ymsq.ymsq&appload=0",
    },
    {
      key: "域名变更",
      name: "域名变更",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/ymbg.svg"),
      url:
        "http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.ymbgsq.ymbgsq&appload=0",
    },
  ],
  迎新专栏: [
    {
      key: "迎新服务",
      name: "迎新服务",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/yxfw.svg"),
      url:
        "https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/xsfw/sys/swmyxapp/*default/index.do",
    },
    {
      key: "迎新网",
      name: "迎新网",
      access: ["1", "2"],
      icon: require("~/assets/right-icon/yxw.svg"),
      url: "https://yingxin.seu.edu.cn",
    },
    // {
    //   key: "小猴偷米APP",
    //   name: "小猴偷米APP",
    //   access: ["1", "2"],
    //   icon: require("~/assets/right-icon/yxw.svg"),
    //   url: "https://yingxin.seu.edu.cn",
    // },
  ],
};
import moment from "moment";
export default {
  components: {
    Logo,
    "el-dialog": Dialog,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem,
    "el-button": Button,
  },
  data() {
    return {
      leftActive: "疫情防控",
      bannerIndex: 0,
      banner,
      leftItem,
      rightItem,
      niclogo: require("~/assets/niclogo.png"),
      voiceIcon: require("~/assets/voice.png"),
      voicePlayingIcon: require("~/assets/voice-playing.gif"),
      voiceDialogVisible: false,
      currentVoice: 0,
      voice: [
        {
          voice: require("~/assets/voice/20200611_Autodesk.mp3"),
          nextHint: "没得换了",
        },
      ],
      voicePlaying: false,
      showVoiceTip: false,
      logoutDialogVisible: false,
    };
  },
  methods: {
    leftChange(index) {
      this.leftActive = index;
    },
    bannerChange(index) {
      this.bannerIndex = index;
      console.log(this.bannerIndex);
    },
    openBannerUrl() {
      let url = this.banner[this.bannerIndex].url;
      if (url) {
        window.location = url;
      }
    },
    openUrl(url) {
      console.log(url);
      if (url) {
        window.location = url;
      }
    },
    playVoice() {
      this.voicePlaying = true;
      setTimeout(() => {
        this.voicePlaying = false;
      }, 8000);
      this.$refs["voice"].load();
      this.$refs["voice"].play();
    },
    showVoiceDialog() {
      this.voiceDialogVisible = true;
    },
    closeVoiceDialog() {
      this.$refs["voice"].pause();
      this.voiceDialogVisible = false;
    },
    disableVoice() {
      window.localStorage.setItem("disable_voice", true);
      this.closeVoiceDialog();
    },
    changeVoice() {
      this.voicePlaying = false;
      this.$refs["voice"].pause();
      this.currentVoice = (this.currentVoice + 1) % this.voice.length;
    },
    closeLogoutDialog() {
      this.logoutDialogVisible = false;
    },
    showLogoutDialog() {
      this.logoutDialogVisible = true;
    },
    logout() {
      window.location = `https://seicwxbz.seu.edu.cn/cas-we-can/logout?goto=https://seicwxbz.seu.edu.cn/self-service`;
    },
  },
  computed: {
    bannerAvailable() {
      return this.banner.filter((k) => {
        if (k.access === "all") return true;
        for (let c of k.access) {
          if (this.cardnum.startsWith(c)) {
            return true;
          }
        }
        return false;
      });
    },
    leftAvailable() {
      return this.leftItem.filter((k) => {
        if (k.access === "all") return true;
        for (let c of k.access) {
          if (this.cardnum.startsWith(c)) {
            return true;
          }
        }
        return false;
      });
    },
    rightAvailable() {
      let res = this.rightItem[this.leftActive].filter((k) => {
        if (k.access === "all") return true;
        for (let c of k.access) {
          if (this.cardnum.startsWith(c)) {
            return true;
          }
        }
        return false;
      });
      return res;
    },
  },
  async asyncData({ req, res, $axios, query, route, redirect }) {
    if (process.server) {
      // 在服务器端
      if (query.ticket) {
        // 如果有 ticket 则验证
        console.log(query.ticket, "请求到达服务器");
        try {
          let casInfo = await $axios.get(
            `https://seicwxbz.seu.edu.cn/cas-we-can/serviceValidate?service=${encodeURIComponent(
              "https://seicwxbz.seu.edu.cn/self-service/"
            )}&ticket=${query.ticket}&json=1`
          );
          console.log(query.ticket, "验证成功");
          console.log(
            `${casInfo.data.cas_info.name}-${casInfo.data.cas_info.cardnum} 访问自助服务`
          );
          return {
            name: casInfo.data.cas_info.name,
            cardnum: casInfo.data.cas_info.cardnum,
          };
        } catch (e) {
          // console.log(e)
          redirect(
            `https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent(
              "https://seicwxbz.seu.edu.cn/self-service/"
            )}&timestamp=${+moment()}`
          );
          // redirect('http://127.0.0.1/')
        }
      } else {
        console.log(req.path);
        redirect(
          `https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=${encodeURIComponent(
            "https://seicwxbz.seu.edu.cn/self-service/"
          )}&timestamp=${+moment()}`
        );
      }
    } else {
    }
  },
  created() {
    if (process.client) {
      console.log("执行客户端逻辑");
      let lastVoicePlayDate = window.localStorage.getItem(
        "last_voice_play_date"
      );
      let disableVoice = !!window.localStorage.getItem("disable_voice");
      let hours = new Date().getHours();
      if (
        !disableVoice &&
        lastVoicePlayDate !== moment().format("YYYY-MM-DD") &&
        hours >= 6 &&
        hours < 12
      ) {
        window.localStorage.setItem(
          "last_voice_play_date",
          moment().format("YYYY-MM-DD")
        );
        setTimeout(() => {
          this.showVoiceDialog();
        }, 10);
      }
    }
    // 检查是否需要播放语音
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
  z-index: 1000;
}
#head-img {
  height: 40px;
}
#head-name {
  height: 30px;
  margin-left: 10px;
}
#head-nic {
  font-size: 20px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
}
#banner {
  margin-top: 70px;
  width: 100%;
  z-index: 100;
}
.banner-img {
  width: 100%;
}
.banner-item {
  display: flex;
  align-items: center;
  width: 100%;
}
#split {
  height: 60px;
  background: #f0f0f0;
}
#content {
  display: flex;
  flex-grow: 1;
}
#left-side {
  background-color: #304028;
  flex-basis: 75px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.padding {
  flex-basis: 20px;
}
.left-side-item {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.left-side-item-active {
  background-color: white;
}
.left-side-item-icon {
  width: 32px;
}
.left-side-item-text {
  font-size: 12px;
  margin-top: 10px;
  color: white;
}
.left-side-item-text-active {
  color: #fdd000;
}
#right-side {
  width: 100%;
}
#right-inner {
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.right-item {
  display: flex;
  flex-basis: 33%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}
.right-item-icon {
  width: 32px;
  height: 32px;
}
.right-item-name {
  font-size: 12px;
  margin-top: 10px;
}
.float-logo {
  position: fixed;
  left: 5px;
  bottom: 10px;
  z-index: 10000;
}
.float-logo-tip {
  position: fixed;
  width: 15px;
  height: 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #ce5a4c;
  bottom: 80px;
  left: 20px;
  z-index: 10001;
}
</style>
