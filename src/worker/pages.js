window.Linggong.worker = {
  render(view) {
    const pages = {
      home: workerHome,
      square: talentSquare,
      jobs: taskCenter,
      trade: tradeCenter,
      profile: profile,
      login: login,
      detail: taskDetail,
      accept: acceptTask,
      income: tradeCenter,
      verify: verify,
      bank: bank,
      withdraw: withdraw
    };
    return (pages[view] || workerHome)();
  }
};

function workerHome() {
  return `<section class="m-page home-page">
    <div class="m-hero"><div class="m-brand">灵工云 <span>· 个人服务</span></div><button class="m-icon" aria-label="消息">•••</button>
      <h1>让每一份专业，<br>都有可靠的回报</h1><p>发现可信任务，安心完成服务</p>
      <button class="m-login" onclick="Linggong.go('login')">登录 / 注册　→</button></div>
    <div class="m-shortcuts"><button onclick="Linggong.go('jobs')"><i>▣</i>找任务</button><button onclick="Linggong.go('square')"><i>♧</i>服务者广场</button><button onclick="Linggong.go('verify')"><i>✓</i>实名认证</button></div>
    <div class="m-notice">🔊　新用户完成实名认证，即可报名平台任务</div>
    <section class="m-section"><div class="m-title"><b>推荐任务</b><button onclick="Linggong.go('jobs')">查看全部　›</button></div>${taskCards().slice(0,2).join('')}</section>
    <section class="m-section"><div class="m-title"><b>热门服务领域</b></div><div class="m-grid"><span>内容运营<small>1,286 个机会</small></span><span>活动执行<small>768 个机会</small></span><span>设计创作<small>596 个机会</small></span><span>市场推广<small>438 个机会</small></span></div></section>
  </section>`;
}

function talentSquare() {
  const people = [['林然','生活方式内容创作','小红书 · 12.8万粉丝'],['周予安','品牌活动执行','上海 · 累计服务 46 次'],['陈星禾','视觉设计师','远程 · 作品集已认证']];
  return `<section class="m-page"><div class="m-bluebar"><b>服务者广场</b><span>•••</span></div><div class="m-platforms"><b>全部</b><span>小红书</span><span>抖音</span><span>视频号</span></div><div class="m-filter"><button>内容领域⌄</button><button>服务地区⌄</button><button>综合排序⌄</button></div><div class="m-banner"><strong>专业服务者，正在等你合作</strong><small>完成资料认证，提升服务机会</small><button onclick="Linggong.go('profile')">完善资料</button></div><section class="m-section compact"><div class="m-title"><b>精选服务者</b><button>筛选　⌄</button></div>${people.map((p,i)=>`<article class="person-card"><div class="avatar a${i}">${p[0].slice(0,1)}</div><div><b>${p[0]} <em>已认证</em></b><p>${p[1]}</p><small>${p[2]}</small></div><button onclick="Linggong.notice('已关注该服务者')">关注</button></article>`).join('')}</section></section>`;
}

function taskCenter() {
  return `<section class="m-page"><div class="m-bluebar"><b>任务</b><span>•••</span></div><div class="m-tabs"><button class="active">推荐</button><button>进行中</button><button>已完成</button></div><div class="m-filter"><button>全部类型⌄</button><button>服务地点⌄</button><button>报酬范围⌄</button></div><section class="m-section compact">${taskCards().join('')}</section><button class="m-fab" onclick="Linggong.go('login')">＋</button></section>`;
}

function taskCards() { return [
  `<article class="task-card" onclick="Linggong.go('detail')"><div><b>短视频内容运营</b><em>报名中</em><p>品牌账号日常内容策划、发布与数据复盘</p><small>远程　·　30 天　·　已认证企业</small></div><strong>¥6,000<small>/月</small></strong></article>`,
  `<article class="task-card" onclick="Linggong.go('detail')"><div><b>线下活动协助</b><em>报名中</em><p>协助品牌快闪活动执行与现场秩序维护</p><small>杭州 · 西湖区　·　8 月 8 日</small></div><strong>¥280<small>/天</small></strong></article>`,
  `<article class="task-card" onclick="Linggong.go('detail')"><div><b>展会翻译（英语）</b><em>报名中</em><p>负责展会现场英语接待及产品讲解</p><small>上海 · 浦东　·　3 天</small></div><strong>¥500<small>/天</small></strong></article>`
]; }

function tradeCenter() { return `<section class="m-page"><div class="m-bluebar"><b>交易</b><span>•••</span></div><div class="m-balance"><small>可提现收入（元）</small><b>8,760.00</b><button onclick="Linggong.go('withdraw')">提现</button></div><div class="m-stats"><span><b>2</b>进行中</span><span><b>8,760</b>本月收入</span><span><b>12</b>已完成任务</span></div><section class="m-section compact"><div class="m-title"><b>交易记录</b><button>全部　›</button></div>${[['短视频内容运营','服务进行中','+ ¥6,000'],['活动协助结算','已支付','+ ¥1,680'],['提现至银行卡','处理中','- ¥2,000']].map(x=>`<div class="trade-row"><div class="trade-icon">￥</div><div><b>${x[0]}</b><small>${x[1]}　2026-07-28</small></div><strong>${x[2]}</strong></div>`).join('')}</section></section>`; }

function profile() { return `<section class="m-page profile-page"><div class="profile-head"><button class="m-icon" onclick="Linggong.go('login')">⚙</button><div class="profile-user"><div class="avatar a1">林</div><div><b>林然</b><small>已完成实名认证　›</small></div></div><div class="profile-data"><span><b>12</b>服务次数</span><span><b>98%</b>好评率</span><span><b>4.9</b>服务评分</span></div></div><section class="m-section profile-menu"><div class="m-title"><b>我的服务</b></div><button onclick="Linggong.go('jobs')">我的任务 <span>›</span></button><button onclick="Linggong.go('trade')">收入与交易 <span>›</span></button><button onclick="Linggong.go('bank')">银行卡管理 <span>›</span></button><div class="m-title lower"><b>账户与安全</b></div><button onclick="Linggong.go('verify')">实名认证 <span>已认证　›</span></button><button onclick="Linggong.go('login')">账号设置 <span>›</span></button></section></section>`; }

function login() { return `<section class="m-page login-page"><button class="m-back" onclick="Linggong.go('home')">‹</button><div class="login-wordmark">灵工云</div><h1>你好！<br>欢迎来到灵工云</h1><p>连接每一份专业与机会</p><div class="login-actions"><button class="wechat" onclick="Linggong.notice('微信授权登录模拟成功');Linggong.go('home')">●　微信登录</button><button onclick="Linggong.go('verify')">手机号登录</button></div><small>○ 我已阅读并同意平台服务协议</small></section>`; }

function taskDetail() { return `<section class="m-page"><div class="m-detail-top"><button class="m-back" onclick="Linggong.go('jobs')">‹</button><b>任务详情</b><span>•••</span></div><section class="detail-content"><div class="detail-state">报名中</div><h2>短视频内容运营</h2><p>品牌账号日常内容策划、发布与数据复盘</p><div class="detail-money">¥6,000 <small>/ 月</small></div><div class="detail-info"><span>服务方式<b>远程协作</b></span><span>服务周期<b>30 天</b></span><span>报名截止<b>08 月 05 日</b></span></div><h3>服务要求</h3><p>具备短视频内容策划经验，熟悉主流内容平台规则；能够独立完成选题、脚本、发布和数据复盘。</p><h3>企业信息</h3><p>杭州星澜科技有限公司　<span class="verified">企业已认证</span></p></section><div class="m-bottom-action"><button onclick="Linggong.go('accept')">立即报名</button></div></section>`; }
function acceptTask() { return `<section class="m-page"><div class="m-detail-top"><button class="m-back" onclick="Linggong.go('detail')">‹</button><b>确认报名</b><span></span></div><section class="m-section accept"><h3>短视频内容运营</h3><p>服务报酬 ¥6,000 / 月</p><label>服务说明<textarea placeholder="请简要说明你的相关经验与服务计划"></textarea></label><label>联系电话<input value="138 0000 2026"></label><button class="m-main" onclick="Linggong.notice('报名成功，等待企业确认');Linggong.go('jobs')">确认报名</button></section></section>`; }
function verify() { return simpleForm('实名认证','请使用本人真实身份信息完成认证','提交认证','home'); }
function bank() { return simpleForm('银行卡管理','绑定银行卡后，可申请提现','保存银行卡','profile'); }
function withdraw() { return simpleForm('申请提现','可提现余额 ¥8,760.00','确认提现','trade'); }
function simpleForm(title, desc, action, next) { return `<section class="m-page"><div class="m-detail-top"><button class="m-back" onclick="Linggong.go('profile')">‹</button><b>${title}</b><span></span></div><section class="m-section accept"><h3>${title}</h3><p>${desc}</p><label>姓名<input placeholder="请输入"></label><label>证件 / 卡号<input placeholder="请输入"></label><button class="m-main" onclick="Linggong.notice('提交成功');Linggong.go('${next}')">${action}</button></section></section>`; }
