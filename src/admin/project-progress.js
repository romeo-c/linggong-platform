function projectProgress(){
  const filter = Linggong.state.projectProgressFilter || "全部";
  const all = Linggong.ui.sampleRows([
    ["PJ202607300101","夏季品牌达人营销项目","杭州星澜科技有限公司","进行中","18 天"],
    ["PJ202607300102","新品内容种草推广项目","上海远屿品牌管理有限公司","进行中","不足1天"],
    ["PJ202607300103","线下快闪活动传播项目","广州知行营销服务有限公司","未开始","42 天"],
    ["PJ202607300104","秋季穿搭短视频推广项目","深圳星火创意科技有限公司","已关闭","—"]
  ]).filter(row => filter === "全部" || row[3] === filter);
  const rows = Linggong.ui.pageRows("projectProgress", all);
  return `<p class="crumb">项目管理 / 进度管理</p>
    ${Linggong.ui.header("项目进度管理", "跟进项目状态与剩余执行时间。", "")}
    <div class="tabs audit-tabs">${["全部","进行中","未开始","已关闭"].map(item => `<button class="${filter===item?"active":""}" onclick="Linggong.setProjectProgressFilter('${item}')">${item}</button>`).join("")}</div>
    <div class="table audit-table project-progress-table"><table><thead><tr><th>编号</th><th>项目名称</th><th>企业名称</th><th>状态</th><th>剩余时间</th><th>操作</th></tr></thead><tbody>
      ${rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="state state-${row[3]==="进行中"?"processing":row[3]==="未开始"?"warning":"error"}">${row[3]}</span></td><td>${row[4]}</td><td><button class="plain" onclick="Linggong.notice('已查看项目进度详情')">查看</button></td></tr>`).join("")}
    </tbody></table></div>${Linggong.ui.pagination("projectProgress", all.length)}`;
}
