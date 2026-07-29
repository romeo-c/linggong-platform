window.Linggong.enterprise = {
  render(view) {
    const u=Linggong.ui, rows=[["灵活用工运营支持","RW20260721001","进行中","¥30,000"],["夏季品牌活动执行","RW20260718012","待审核","¥18,000"],["客服外包项目","RW20260716009","已完成","¥42,000"]];
    if(view==="dashboard") return enterpriseDashboard();
    if(["register","auth","publish","payment","invoice"].includes(view)) return u.form({register:"企业开户注册",auth:"企业实名认证",publish:"发布任务",payment:"支付确认",invoice:"申请发票"}[view], view==="register"?"auth":view==="auth"?"dashboard":view==="publish"?"tasks":view==="payment"?"finance":"finance");
    if(view==="projects") return u.list("项目管理","管理业务项目、成员与外包协议",[["2026年灵活用工服务项目","PJ20260721001","进行中","2026-07-21"]],"项目","创建项目","projects");
    if(view==="tasks") return u.list("任务管理","查看任务状态、报名人员及执行进度",rows,"任务","发布任务","publish");
    if(view==="workers") return u.list("零客管理","管理已登记和已合作的自由职业者",[["林晓","WK20260702001","进行中","内容运营"],["张宇","WK20260702002","已完成","活动执行"]],"零客","登记零客","workers");
    if(view==="orders") return u.list("订单中心","创建、确认和追踪结算订单",[["灵活用工运营支持","DD202607210021","待付款","¥30,000"]],"订单","创建订单","payment");
    if(view==="finance") return u.list("财务管理","交易记录、结算单与发票管理",[["订单结算","TR202607210021","支付成功","¥30,000"]],"交易","申请发票","invoice");
    return u.detail("灵活用工运营支持","进行中",`<button class="primary" onclick="Linggong.go('payment')">创建结算订单</button>`);
  }
};
function enterpriseDashboard(){const u=Linggong.ui;return `<p class="crumb">首页 / 工作台</p>${u.header("企业用工工作台","从项目创建、任务发布到结算支付，统一管理每一次灵活用工协作。",`<button class="primary" onclick="Linggong.go('publish')">发布任务</button>`)}<div class="metrics">${[["任务总数","128","tasks"],["进行中任务","36","tasks"],["待付款金额","¥128,600","orders"]].map(x=>`<button class="metric" onclick="Linggong.go('${x[2]}')"><span>${x[0]}</span><strong>${x[1]}</strong><small>点击查看详情</small></button>`).join("")}</div><div class="actions">${[["创建项目","projects"],["发布任务","publish"],["创建订单","orders"]].map(x=>`<button class="action" onclick="Linggong.go('${x[1]}')"><small>快捷操作</small><b>${x[0]}</b><small>进入相关流程</small></button>`).join("")}</div>`}
