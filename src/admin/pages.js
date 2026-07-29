window.Linggong.admin = {
  render(view) { const u=Linggong.ui;
    if(view==="dashboard") return adminDashboard();
    if(view==="review") return u.list("企业认证审核","审核企业提交的入驻资料",[["杭州星澜科技有限公司","91330100MA2B8X9K6A","待审核","2026-07-21"]],"企业","批量审核","review");
    if(view==="companies") return u.list("企业管理","查看企业账户、合同和状态",[["杭州星澜科技有限公司","CP202607001","已通过","余额 ¥128,600"]],"企业","导出企业","companies");
    if(view==="people") return u.list("零客管理","查看个人认证、任务和收入数据",[["林晓","WK20260702001","已通过","累计 ¥28,600"]],"零客","导出名单","people");
    if(view==="orders") return u.list("全平台订单","监控订单状态、进度及交易数据",[["灵活用工运营支持","DD202607210021","待付款","¥30,000"]],"订单","批量导出","orders");
    if(view==="invoices") return u.list("发票管理","处理企业开票与个人开票进度",[["杭州星澜科技有限公司","INV20260721001","待审核","¥30,000"]],"发票申请","批量开票","invoices");
    return u.detail("杭州星澜科技有限公司","待审核",`<button class="primary" onclick="Linggong.notice('审核已通过，企业端已收到通知');Linggong.go('review')">审核通过</button>`);
  }
};
function adminDashboard(){const u=Linggong.ui;return `<p class="crumb">首页 / 工作台</p>${u.header("平台运营工作台","集中处理审核、订单、交易和开票进度。",`<button class="primary" onclick="Linggong.go('review')">企业认证审核</button>`)}<div class="metrics">${[["入驻企业","2,486","review"],["认证零客","126,839","people"],["本月交易额","¥846万","orders"]].map(x=>`<button class="metric" onclick="Linggong.go('${x[2]}')"><span>${x[0]}</span><strong>${x[1]}</strong><small>点击查看详情</small></button>`).join("")}</div>`}
