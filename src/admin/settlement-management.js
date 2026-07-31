function settlementManagement(){
  const filter = Linggong.state.settlementFilter || "全部";
  const all = Linggong.ui.sampleRows([
    ["ST202607310001","夏季护肤新品种草","夏季品牌达人营销项目","待处理","¥30,000.00","2026-07-31 11:26:48","2026-07-31 11:26:48"],
    ["ST202607310002","新品内容种草推广","新品内容种草推广项目","进行中","¥18,600.00","2026-07-31 10:08:16","2026-07-31 10:42:09"],
    ["ST202607300003","线下快闪活动传播","线下快闪活动传播项目","已处理（全部成功）","¥42,000.00","2026-07-30 16:45:32","2026-07-30 17:18:36"],
    ["ST202607300004","秋季穿搭短视频推广","秋季穿搭短视频推广项目","已处理（全部失败）","¥12,800.00","2026-07-30 14:18:05","2026-07-30 15:06:42"],
    ["ST202607290005","品牌直播专场合作","品牌直播推广项目","已处理（部分成功）","¥26,400.00","2026-07-29 12:35:18","2026-07-29 13:20:55"]
  ]).filter(row => filter === "全部" || row[3] === filter);
  const rows = Linggong.ui.pageRows("settlement", all);
  const stateType = state => state === "待处理" ? "warning" : state === "进行中" ? "processing" : state === "已处理（全部成功）" ? "success" : "error";
  return `<p class="crumb">结算管理</p>${Linggong.ui.header("结算管理", "管理企业付款、个人定价、个人结算和支付处理结果。", "")}<div class="tabs audit-tabs">${["全部","待处理","进行中","已处理（全部成功）","已处理（全部失败）","已处理（部分成功）"].map(item=>`<button class="${filter===item?"active":""}" onclick="Linggong.setSettlementFilter('${item}')">${item}</button>`).join("")}</div><div class="table audit-table settlement-table"><table><thead><tr><th>结算单ID</th><th>所属任务</th><th>所属项目</th><th>状态</th><th>金额</th><th>创建时间</th><th>更新时间</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="state state-${stateType(row[3])}">${row[3]}</span></td><td><b>${row[4]}</b></td><td>${row[5]}</td><td>${row[6]}</td></tr>`).join("")}</tbody></table></div>${Linggong.ui.pagination("settlement",all.length)}`;
}
