function invoiceApply(){
  const filter = Linggong.state.invoiceApplyFilter || "全部";
  const all = Linggong.ui.sampleRows([["INV202607310001","杭州星澜科技有限公司","¥30,000.00","待开票"],["INV202607310002","上海远屿品牌管理有限公司","¥18,600.00","已开票"],["INV202607300003","广州知行营销服务有限公司","¥42,000.00","已关闭"],["INV202607300004","深圳星火创意科技有限公司","¥12,800.00","待开票"]]).filter(row=>filter==="全部"||row[3]===filter);
  const rows = Linggong.ui.pageRows("invoiceApply", all);
  const stateType = state => state === "待开票" ? "warning" : state === "已开票" ? "success" : "error";
  return `<p class="crumb">发票管理 / 开票申请</p>${Linggong.ui.header("开票申请", "审核并处理企业提交的开票申请。", "")}<div class="tabs audit-tabs">${["全部","待开票","已开票","已关闭"].map(item=>`<button class="${filter===item?"active":""}" onclick="Linggong.setInvoiceApplyFilter('${item}')">${item}</button>`).join("")}</div><div class="table audit-table invoice-apply-table"><table><thead><tr><th>编号</th><th>开票申请企业</th><th>开票总金额</th><th>状态</th><th>操作</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td><b>${row[2]}</b></td><td><span class="state state-${stateType(row[3])}">${row[3]}</span></td><td><button class="plain" onclick="Linggong.notice('${row[3]==="待开票"?"已进入开票处理详情":"已查看开票记录"}')">${row[3]==="待开票"?"开票处理":"查看"}</button></td></tr>`).join("")}</tbody></table></div>${Linggong.ui.pagination("invoiceApply",all.length)}`;
}
