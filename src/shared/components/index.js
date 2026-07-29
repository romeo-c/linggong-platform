import { statusMeta } from "../mock/status.js";

/** 三端统一状态标签。 */
export function StatusTag(status) {
  const meta = statusMeta[status] || statusMeta.default;
  return `<span class="state state-${meta.tone}">${status}</span>`;
}

/** 列表、详情和表单页面统一标题区。 */
export function PageHeader({ title, description = "", action = "" }) {
  return `<div class="heading"><div><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}

/** 简单的详情行，供项目、任务、订单与审核详情复用。 */
export function DetailRow(label, value) {
  return `<div class="row"><span>${label}</span><b>${value}</b></div>`;
}
