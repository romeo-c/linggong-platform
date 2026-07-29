window.Linggong.worker = {
  render(view) { const u=Linggong.ui;
    if(["login","verify","bank","withdraw","accept"].includes(view)) return u.form({login:"手机号登录 / 注册",verify:"实名认证",bank:"绑定银行卡",withdraw:"提现",accept:"确认接单"}[view], view==="login"?"verify":view==="verify"?"bank":view==="bank"?"jobs":view==="withdraw"?"income":"jobs");
    if(view==="income") return u.list("我的收入","查看收入明细与可提现余额",[["短视频内容运营","IN20260722001","进行中","¥6,000"],["活动协助结算","IN20260718018","已支付","¥1,680"]],"收入","申请提现","withdraw");
    if(view==="profile") return u.detail("我的","已通过",`<button class="secondary" onclick="Linggong.go('login')">退出登录</button>`);
    if(view==="detail") return u.detail("短视频内容运营","报名中",`<button class="primary" onclick="Linggong.go('accept')">立即报名</button>`);
    return workerHome();
  }
};
function workerHome(){const u=Linggong.ui;return `<p class="crumb">首页 / 任务中心</p>${u.header("零工任务大厅","发现合适任务，完成认证、接单与收入管理。",`<button class="primary" onclick="Linggong.go('login')">登录 / 注册</button>`)}<div class="actions">${[["短视频内容运营","¥6,000 / 月","远程 · 30天"],["线下活动协助","¥280 / 天","杭州 · 西湖区"],["展会翻译（英语）","¥500 / 天","上海 · 8月8日"]].map(x=>`<button class="action" onclick="Linggong.go('detail')"><small>${x[2]}</small><b>${x[0]}</b><small>${x[1]} · 报名中</small></button>`).join("")}</div>`}
