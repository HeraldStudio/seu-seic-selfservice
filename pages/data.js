module.exports = {
    banner: [{
        key: 'yqfk',
        access: ['1', '2', '3'],
        src: require('~/assets/banner/yqfk.png'),
        url: ''
    }],
    leftItem: [
        {
            name: "疫情防控",
            access: ['2', '1', '3'],
            activeIcon: require("~/assets/left-icon/yqfk-orange.svg"),
            icon: require("~/assets/left-icon/yqfk-white.svg"),
        },
        {
            name: "中心服务",
            access: ['2', '1', '3'],
            activeIcon: require("~/assets/left-icon/fwlc-orange.svg"),
            icon: require("~/assets/left-icon/fwlc-white.svg"),
        },
        {
            name: "工作流程",
            access: ['1', '3'],
            activeIcon: require("~/assets/left-icon/gzlc-orange.svg"),
            icon: require("~/assets/left-icon/gzlc-white.svg"),
        },
        {
            name: "便捷查询",
            access: ['2', '1', '3'],
            activeIcon: require("~/assets/left-icon/bjcx-orange.svg"),
            icon: require("~/assets/left-icon/bjcx-white.svg"),
        },
    ],
    rightItem: {
        "疫情防控": [
            {
                key: "疫情防控教职工",
                name: "疫情防控",
                access: ['1', '3'],
                icon: require("~/assets/right-icon/yqfk.svg"),
                url: 'http://ehall.seu.edu.cn/qljfwapp/sys/lwReportEpidemic/*default/index.do'
            },
            {
                key: "疫情防控本科生",
                name: "疫情防控",
                access: ['21'],
                icon: require("~/assets/right-icon/yqfk.svg"),
                url: 'https://xgbxscwx.seu.edu.cn/'
            },
            {
                key: "疫情防控研究生",
                name: "疫情防控",
                access: ['22', '23'],
                icon: require("~/assets/right-icon/yqfk.svg"),
                url: 'http://ehall.seu.edu.cn/qljfwapp2/sys/lwReportEpidemicSeu/*default/index.do'
            },
            {
                key: "入校申请",
                name: "入校申请审批",
                access: ['1', '3'],
                icon: require("~/assets/right-icon/rxsq.svg"),
            }
        ],
        "中心服务": [
            {
                key: "服务指南",
                name: "服务指南",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/fwzn.svg"),
                url: 'https://nic.seu.edu.cn/wxfwlc/'
            },
            {
                key: "Skype云会议",
                name: "Skype云会议",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/skype.svg"),
                url: 'https://nic.seu.edu.cn/_s21/2020/0130/c27530a316322/pagem.psp'
            },
            {
                key: "移动OA",
                name: "移动OA",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/oa.svg"),
                url: 'https://nic.seu.edu.cn/wxfwlc/'
            },
            {
                key: "上网充值",
                name: "上网充值",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/swcz.svg"),
                url: 'http://10.64.200.121:8080/Self/sso_login'
            },
            {
                key: "电子邮件",
                name: "电子邮件",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/email.svg"),
                url: 'https://mail.seu.edu.cn/coremail/xphone/'
            },
            {
                key: "东大云盘",
                name: "东大云盘",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/yun.svg"),
                url: 'https://pan.seu.edu.cn/'
            },
            {
                key: "综合考评",
                name: "综合考评",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/zhkp.svg"),
                url: 'http://zhkp.seu.edu.cn/mobile/login/login'
            },
            {
                key: "总务服务",
                name: "总务服务",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/zwfw-gray.svg"),
                url: ''
            },
        ],
        "便捷查询": [
            {
                key: "课程表",
                name: "课表查询",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/kcb.svg"),
                url: 'https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/jwapp/sys/bykbseuMobile/*default/index.do'
            },
            {
                key: "校车时刻",
                name: "校车查询",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/xcsk.svg"),
                url: ''
            },
        ],
        "工作流程": [
            {
                key: "二级网站",
                name: "二级网站申请",
                access: ['1', '2', '3'],
                icon: require("~/assets/right-icon/ejwz.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.wzkt.ejwzsq'
            },
            {
                key: "三级网站",
                name: "三级网站申请",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/sjwz.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.wzkt.sjwzsq'
            },
            {
                key: "统一通信平台",
                name: "统一通信平台",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/tytxpt.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.dxjkfw.dxjkfw_tytxpt'
            },
            {
                key: "短信接口",
                name: "短信接口",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/dxjk.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.dxjkfw.dxjkfw_dxjkdy'
            },
            {
                key: "虚拟机申请",
                name: "虚拟机申请",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/xnjsq.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.xjsq.xjsq'
            },
            {
                key: "域名申请",
                name: "域名申请",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/ymsq.svg"),
                url: 'http://work.seu.edu.cn/default/base/workflow/start.jsp?process=com.sudytech.work.jbhf.ymsq.ymsq'
            },
            {
                key: "域名变更",
                name: "域名变更",
                access: ['1', '2'],
                icon: require("~/assets/right-icon/ymbg.svg"),
                url: 'https://seicwxbz.seu.edu.cn/cas-we-can/login?goto=http://ehall.seu.edu.cn/jwapp/sys/bykbseuMobile/*default/index.do'
            },
        ],
    }
}