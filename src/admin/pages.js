window.Linggong.adminMenu = [
  { label: "工作台", view: "dashboard" },
  { label: "企业管理", view: "companies", children: [["新签审核", "review"], ["运营管理", "companyOps"], ["新增企业", "createCompany"]] },
  { label: "零客管理", view: "people", children: [["零客招募", "workerRecruit"], ["运营管理", "workerOps"]] },
  { label: "项目管理", children: [["项目审核", "projectReview"], ["进度管理", "projectProgress"]] },
  { label: "任务管理", children: [["任务审核", "taskReview"], ["执行管理", "taskExecution"]] },
  { label: "结算管理", view: "settlement" },
  { label: "发票管理", children: [["开票申请", "invoiceApply"], ["已开发票", "invoiceIssued"]] },
  { label: "税费管理", view: "tax" },
  { label: "合同管理", view: "contracts" },
  { label: "数据中心", view: "data" },
  { label: "系统管理", view: "system" }
];
window.Linggong.admin = {
  render(view) {
    const u = Linggong.ui;
    const lists = {
      review: ["企业新签审核", "审核企业提交的注册、认证及签约资料", [["杭州星澜科技有限公司", "CP202607001", "待审核", "2026-07-30"]], "企业"],
      companies: ["企业管理", "查看企业账户、认证、合作任务和结算状态", [["杭州星澜科技有限公司", "CP202607001", "已通过", "待结算 ¥128,600"]], "企业"],
      companyOps: ["企业运营管理", "跟进企业活跃、合作履约与风险状态", [["杭州星澜科技有限公司", "CP202607001", "进行中", "合作任务 12 个"]], "企业"],
      people: ["零客管理", "查看个人认证、服务任务、交付与收入数据", [["林然", "WK20260702001", "已通过", "累计收入 ¥28,600"]], "零客"],
      workerRecruit: ["零客招募", "管理零客招募渠道、申请与招募进度", [["内容运营服务者招募", "RC20260730001", "进行中", "已报名 126 人"]], "招募计划"],
      workerOps: ["零客运营管理", "管理个人成长、活跃和服务质量", [["林然", "WK20260702001", "进行中", "服务评分 4.9"]], "零客"],
      projectReview: ["项目审核", "审核企业创建的合作项目与合规资料", [["夏季品牌达人营销项目", "PJ20260721001", "待审核", "杭州星澜科技"]], "项目"],
      projectProgress: ["项目进度管理", "跟进项目任务、交付与结算进度", [["夏季品牌达人营销项目", "PJ20260721001", "进行中", "进度 68%"]], "项目"],
      taskReview: ["任务审核", "审核企业发布的合作任务与招募规则", [["夏季护肤新品种草", "RW20260721001", "待审核", "预算 ¥30,000"]], "任务"],
      taskExecution: ["任务执行管理", "审核个人交付并跟进企业验收与异常", [["林然｜种草图文交付", "DL20260730001", "进行中", "待平台审核"]], "交付物"],
      settlement: ["结算管理", "管理企业付款、个人定价、个人结算和支付记录", [["夏季护肤新品种草", "ST20260730001", "待付款", "企业应付 ¥30,000"], ["林然｜种草图文交付", "ST20260730002", "待审核", "个人应付 ¥2,400"]], "结算单"],
      invoiceApply: ["开票申请", "审核企业开票申请与开票信息", [["杭州星澜科技有限公司", "INV20260721001", "待审核", "¥30,000"]], "开票申请"],
      invoiceIssued: ["已开发票", "查询已开具发票、寄送与签收状态", [["杭州星澜科技有限公司", "INV20260718002", "已完成", "¥18,000"]], "发票"],
      tax: ["税费管理", "计算个人报酬税费并管理代扣代缴记录", [["林然｜2026年7月报酬", "TX20260730001", "待审核", "应扣税 ¥240"]], "税费记录"],
      contracts: ["合同管理", "管理企业合作协议、个人服务协议与签署状态", [["夏季护肤新品种草合作协议", "CT20260730001", "进行中", "待企业签署"]], "合同"],
      data: ["数据中心", "查看企业、零客、项目、任务与结算运营数据", [["2026年7月运营汇总", "DT202607", "已完成", "交易额 ¥846万"]], "数据报表"],
      system: ["系统管理", "管理运营账号、角色权限、消息模板与系统参数", [["运营管理员", "SYS202607001", "已通过", "超级管理员"]], "系统账号"]
    };
    if (view === "dashboard") return adminDashboard();
    if (view === "createCompany") return companyCreateRecords();
    if (view === "createCompanyForm") return createCompany();
    if (view === "companyOps") return companyOps();
    if (view === "review") return companyReview();
    if (lists[view]) { const [title, desc, rows, kind] = lists[view]; return u.list(title, desc, rows, kind, "批量处理", view); }
    return u.detail("运营处理详情", "待审核", `<button class="primary" onclick="Linggong.notice('处理完成，已同步下一环节');Linggong.go('dashboard')">确认处理</button>`);
  }
};
function adminDashboard(){const u=Linggong.ui;return `<p class="crumb">首页 / 工作台</p>${u.header("平台运营工作台","集中处理企业与零客审核、项目任务、结算、发票、税费及运营数据。",`<button class="primary" onclick="Linggong.go('review')">处理新签审核</button>`)}<div class="metrics">${[["待审企业","18","review"],["待审零客","36","workerRecruit"],["待审任务","24","taskReview"],["待结算金额","¥128,600","settlement"],["待开票申请","12","invoiceApply"],["待申报税费","¥86,400","tax"]].map(x=>`<button class="metric" onclick="Linggong.go('${x[2]}')"><span>${x[0]}</span><strong>${x[1]}</strong><small>点击查看详情</small></button>`).join("")}</div>`}
function createCompany(){return `<p class="crumb">企业管理 / 新增企业 / 信息录入</p><div class="heading"><div><h1>新增企业</h1><p>由运营人员代企业录入系统基础信息，保存后返回新增记录。</p></div></div><form class="form company-form" onsubmit="event.preventDefault();Linggong.notice('企业信息已保存');Linggong.go('createCompany')"><h2>企业基本信息</h2><div class="form-grid"><label>企业名称<input placeholder="请输入企业全称"></label><label>统一社会信用代码<input placeholder="请输入18位统一社会信用代码"></label><label>企业类型<select><option>有限责任公司</option><option>股份有限公司</option><option>个体工商户</option></select></label><label>所属行业<select><option>现代服务业</option><option>文化传媒</option><option>信息技术</option></select></label><label>法定代表人<input placeholder="请输入法定代表人姓名"></label><label>注册地址<input placeholder="请输入省、市、区"></label></div><h2>联系人与结算信息</h2><div class="form-grid"><label>联系人姓名<input placeholder="请输入联系人姓名"></label><label>联系人手机号<input placeholder="请输入手机号"></label><label>结算账户名称<input placeholder="请输入企业账户名称"></label><label>开户银行<input placeholder="请输入开户银行"></label><label class="wide">备注<textarea placeholder="可填写运营跟进说明或补充信息"></textarea></label></div><div class="foot"><button class="secondary" type="button" onclick="Linggong.go('createCompany')">取消</button><button class="primary">保存企业信息</button></div></form>`}
function companyCreateRecords(){const rows=[["OP202607300018","杭州星澜科技有限公司","91330100MA2B8X9K6A","有限责任公司","王悦（运营专员）","2026-07-30 11:26:48"],["OP202607300017","上海远屿品牌管理有限公司","91310115MA1K4B8A2C","有限责任公司","陈航（运营主管）","2026-07-30 10:08:16"],["OP202607290016","广州知行数字营销有限公司","91440101MA5C8M3D6P","有限责任公司","王悦（运营专员）","2026-07-29 16:45:32"]];return `<p class="crumb">企业管理 / 新增企业</p>${Linggong.ui.header("新增企业","展示由运营人员代企业录入的企业新增记录。",`<button class="primary" onclick="Linggong.go('createCompanyForm')">新增企业</button>`)}<div class="table audit-table company-record-table"><table><thead><tr><th>编号</th><th>企业名称</th><th>统一社会信用代码</th><th>企业类型</th><th>提交人员</th><th>提交时间</th><th>操作</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td><button class="plain" onclick="Linggong.notice('已查看企业录入记录')">查看</button></td></tr>`).join("")}</tbody></table></div>`}
function companyOps(){const rows=[["CP202607001","杭州星澜科技有限公司","91330100MA2B8X9K6A","2026-07-30 11:26:48","正常"],["CP202607002","上海远屿品牌管理有限公司","91310115MA1K4B8A2C","2026-07-30 10:08:16","正常"],["CP202607003","广州知行数字营销有限公司","91440101MA5C8M3D6P","2026-07-29 16:45:32","已停用"]];return `<p class="crumb">企业管理 / 运营管理</p>${Linggong.ui.header("企业运营管理","管理企业账号、登录状态与基础运营信息。",`<button class="secondary" onclick="Linggong.notice('企业数据已导出')">导出企业</button>`)}<div class="table audit-table company-ops-table"><table><thead><tr><th>编号</th><th>企业名称</th><th>统一社会信用代码</th><th>末次登录时间</th><th>账号状态</th><th>操作</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="state state-${r[4]==="正常"?"success":"error"}">${r[4]}</span></td><td><button class="plain" onclick="Linggong.notice('已查看企业账号详情')">查看</button>　<button class="plain" onclick="Linggong.notice('${r[4]==="正常"?"账号已停用":"账号已启用"}')">${r[4]==="正常"?"停用":"启用"}</button></td></tr>`).join("")}</tbody></table></div>`}
function companyReview(){const f=Linggong.state.companyReviewFilter||"全部",rows=[["XS202607300001","杭州星澜科技有限公司","待审核","2026-07-30 09:18:26","—"],["XS202607300002","上海远屿品牌管理有限公司","已审核","2026-07-30 09:02:11","2026-07-30 10:26:48"],["XS202607290018","广州知行数字营销有限公司","已审核","2026-07-29 16:45:32","2026-07-29 17:08:05"],["XS202607290017","北京启程文化传媒有限公司","待审核","2026-07-29 15:21:09","—"]].filter(x=>f==="全部"||x[2]===f);return `<p class="crumb">企业管理 / 新签审核</p><div class="heading"><div><h1>新签审核</h1><p>审核企业提交的注册、认证及签约资料。</p></div></div><div class="tabs audit-tabs">${["全部","待审核","已审核"].map(x=>`<button class="${f===x?"active":""}" onclick="Linggong.setCompanyReviewFilter('${x}')">${x}</button>`).join("")}</div><div class="table audit-table"><table><thead><tr><th>编号</th><th>企业名称</th><th>审核状态</th><th>提交时间</th><th>审核时间</th><th>操作</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td><span class="state state-${r[2]==="待审核"?"warning":"success"}">${r[2]}</span></td><td>${r[3]}</td><td>${r[4]}</td><td><button class="plain" onclick="Linggong.notice('${r[2]==="待审核"?"已进入审核详情":"已查看审核记录"}')">${r[2]==="待审核"?"审核":"查看"}</button></td></tr>`).join("")}</tbody></table></div>`}
