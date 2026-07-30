window.Linggong.enterprise = {
  render(view) {
    const u=Linggong.ui, rows=[["夏季护肤新品种草","RW20260721001","进行中","¥30,000"],["品牌快闪活动传播","RW20260718012","待审核","¥18,000"],["秋季服饰穿搭推广","RW20260716009","已完成","¥42,000"]];
    if(view==="dashboard") return enterpriseDashboard();
    if(["register","auth","publish","payment","invoice"].includes(view)) return u.form({register:"企业开户注册",auth:"企业实名认证",publish:"发布任务",payment:"支付确认",invoice:"申请发票"}[view], view==="register"?"auth":view==="auth"?"dashboard":view==="publish"?"tasks":view==="payment"?"finance":"finance");
    if(view==="projects") return u.list("合作项目","管理品牌项目、成员与合作规则",[["2026 夏季品牌达人营销项目","PJ20260721001","进行中","2026-07-21"]],"项目","创建项目","projects");
    if(view==="tasks") return u.list("合作任务","查看招募状态、候选达人及交付进度",rows,"任务","发布合作需求","publish");
    if(view==="workers") return u.list("合作达人","管理候选达人、合作记录与履约评价",[["林然","WK20260702001","进行中","内容运营"],["张宇","WK20260702002","已完成","活动传播"]],"达人","添加达人","workers");
    if(view==="orders") return u.list("结算订单","创建、确认和追踪达人合作结算",[["夏季护肤新品种草","DD202607210021","待付款","¥30,000"]],"订单","创建结算单","payment");
    if(view==="finance") return u.list("财务与发票","管理合作交易、结算单与发票",[["达人服务费结算","TR202607210021","支付成功","¥30,000"]],"交易","申请发票","invoice");
    return u.detail("夏季护肤新品种草","进行中",`<button class="primary" onclick="Linggong.go('payment')">创建结算订单</button>`);
  }
};
function enterpriseDashboard(){const u=Linggong.ui;return `<p class="crumb">首页 / 机构工作台</p>${u.header("机构合作工作台","从达人筛选、合作任务发布到结算支付，统一管理每一次品牌合作。",`<button class="primary" onclick="Linggong.go('publish')">发布合作需求</button>`)}<div class="metrics">${[["达人库总数","30 万+","workers"],["进行中合作","36","tasks"],["待结算金额","¥128,600","orders"]].map(x=>`<button class="metric" onclick="Linggong.go('${x[2]}')"><span>${x[0]}</span><strong>${x[1]}</strong><small>点击查看详情</small></button>`).join("")}</div><div class="actions">${[["创建营销项目","projects"],["发布合作需求","publish"],["创建结算订单","orders"]].map(x=>`<button class="action" onclick="Linggong.go('${x[1]}')"><small>快捷操作</small><b>${x[0]}</b><small>进入相关流程</small></button>`).join("")}</div>`}
