import type { SeoLandingCopy, SeoLandingSlug } from "../types";

export const SEO_LANDING_LOCALES_CN: Record<SeoLandingSlug, SeoLandingCopy> = {
  "cleaning-company-software": {
    seoTitle: "保洁公司软件 | 排班、追踪与薪酬 | TidyFlow",
    seoDescription:
      "TidyFlow 是专为保洁公司打造的软件，支持任务排班、GPS 验证现场作业、照片凭证、基于已验证工时的薪酬结算以及客户报告——在线或离线均可使用。",
    keywords:
      "保洁公司软件, 保洁业务平台, 保洁运营软件, 保洁现场应用, 保洁调度软件, TidyFlow",
    eyebrow: "保洁公司软件",
    h1: "保洁公司的操作系统",
    heroSubtitle:
      "TidyFlow 将业主、经理与保洁员连接在同一平台——安排周期性任务，通过 GPS 和照片在现场验证工作，基于记录工时运行薪酬，并向客户发送作业凭证。",
    navLabel: "保洁公司软件",
    problems: {
      title: "用电子表格和群聊运营保洁公司时会出现的问题",
      items: [
        "周期性合同在一个表格里，保洁员可用性在另一个，客户投诉在 WhatsApp 上。",
        "经理无法判断团队是真正开始作业，还是只是开车经过大楼。",
        "薪酬纠纷往往源于凭记忆填写工时，而非现场验证。",
        "客户要求作业证明，您却在手机相册里翻找照片。",
        "现场团队在地下室、停车场和设备间失去信号——无法在应用中完成作业。",
      ],
    },
    solution: {
      title: "从排班到凭证再到薪酬的一体化平台",
      paragraphs: [
        "TidyFlow 专为保洁公司运营而构建——而非通用现场服务。业主获得收入可见性与订阅控制。经理制定排班、分配保洁员并审核 GPS 验证的完成情况。保洁员获得简洁的移动任务列表，支持离线清单、计时器和照片上传。",
        "任务完成后，工时进入薪酬流程，照片可生成 PDF 客户报告，经理保留审计轨迹，无需在五个应用中追消息。",
      ],
    },
    features: [
      {
        title: "任务排班与周期性合同",
        description: "日历、排班构建器及考虑请假的周期性物业访问分配。",
        benefit: "不必每个周日晚在电子表格里重建一周计划。",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "保洁排班软件",
      },
      {
        title: "GPS 验证现场追踪",
        description: "开始与完成时检查位置；在支持的工作流中，活跃任务期间可实时 GPS。",
        benefit: "清楚哪些站点真正服务过——而非仅声称完成。",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "保洁员工时追踪",
      },
      {
        title: "基于已验证工时的薪酬",
        description: "任务计时器、工时审批及基于记录任务时间的薪酬运行。",
        benefit: "将工时与已完成工作关联，减少纠纷。",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "保洁薪酬软件",
      },
      {
        title: "离线现场运营",
        description: "无网络也可完整完成任务——清单、计时器、照片排队并在联网后同步。",
        benefit: "保洁员在信号弱的楼宇内完成作业，无需致电办公室。",
        linkHref: "/offline-cleaning-software",
        linkLabel: "离线保洁应用",
      },
    ],
    howItWorks: {
      title: "排班 → 分配 → 追踪 → 验证 → 报告",
      steps: [
        { title: "排班", description: "从网页或移动端创建一次性或周期性任务。若团队仍维护主排班表，可与 Google Sheets 同步。" },
        { title: "分配", description: "将保洁员拖入排班。AI 可根据历史、位置和请假推荐最佳人选——经理始终确认。" },
        { title: "追踪", description: "保洁员在现场启动任务计时器。GPS 验证标记远离物业的开始与完成。" },
        { title: "验证", description: "清单、前后对比照片及可选 AI 照片评分，为经理提供质量证据。" },
        { title: "报告", description: "生成 PDF 任务报告或分享客户门户链接。工时进入薪酬与开票流程。" },
      ],
    },
    useCases: {
      title: "使用 TidyFlow 的保洁公司",
      items: [
        { title: "商业与合同保洁", description: "多站点合同、周期性访问、客户凭证及经理 QA 工作流。" },
        { title: "保洁与设施团队", description: "夜班、设备间和信号差的楼宇——离线模式让团队持续运转。" },
        { title: "成长中的本地企业", description: "增加物业和保洁员时，用系统替代电子表格混乱，无需先雇运营管理员。" },
        { title: "多语言团队", description: "平台支持 11 种语言，面向业主、经理和现场员工。" },
      ],
    },
    faqs: [
      { q: "什么是保洁公司软件？", a: "帮助保洁企业排班、管理保洁员、追踪现场工作、验证质量，并在一个系统中运行薪酬或客户账单，替代电子表格和消息应用。" },
      { q: "TidyFlow 只适合大公司吗？", a: "不是。较小团队计划从每月 25 美元起。成长中的团队无需企业级部署即可使用排班、现场追踪和凭证功能。" },
      { q: "TidyFlow 支持离线吗？", a: "支持。保洁员可离线完成清单、运行任务计时器和拍照。恢复连接后数据自动同步。" },
      { q: "我可以继续使用 Google Sheets 吗？", a: "可以。TidyFlow 提供 Google Sheets 双向同步，保留电子表格主列表，由应用处理现场执行。" },
      { q: "如何开始？", a: "从定价页开始 14 天免费试用。业主设置物业、邀请保洁员，并从网页或移动端分配首批任务。" },
    ],
  },

  "cleaning-management-software": {
    seoTitle: "保洁管理软件 | 运营控制 | TidyFlow",
    seoDescription:
      "面向业主和运营经理的保洁管理软件——排班、实时任务状态、团队请假、问题追踪、薪酬审批和客户凭证，尽在一个仪表板。",
    keywords:
      "保洁管理软件, 保洁运营平台, 保洁管理系统, 保洁业务管理, TidyFlow",
    eyebrow: "保洁管理软件",
    h1: "在一个管理仪表板中运营保洁业务",
    heroSubtitle:
      "让经理掌握排班、现场完成、质量检查和薪酬审批——无需在 WhatsApp 上追保洁员或在电子表格里重建排班。",
    navLabel: "保洁管理",
    problems: {
      title: "规模扩大时保洁运营为何会失控",
      items: [
        "只有业主知道周四哪个客户人手不足。",
        "经理每周重复录入相同周期性任务，因为合同访问没有自动化。",
        "质量投诉到达时，还没人审核任务照片或清单结果。",
        "请假申请留在消息里，排班仍带着已知冲突发布。",
        "薪酬审批意味着对照手写工时表和记忆。",
      ],
    },
    solution: {
      title: "与真实现场数据关联的管理工具",
      paragraphs: [
        "TidyFlow 管理软件连接排班、团队 HR 和现场执行。经理实时查看任务状态更新，审核 GPS 验证的完成情况，并在运行薪酬前审批工时。",
        "问题追踪、QA 评分和客户凭证与排班并列——管理决策使用保洁员在现场生成的同一套数据。",
      ],
    },
    features: [
      {
        title: "考虑请假的排班构建器",
        description: "拖放分配，尊重已批准请假和可用性。",
        benefit: "发布排班无需手动检查冲突。",
        linkHref: "/features",
        linkLabel: "团队与排班功能",
      },
      {
        title: "实时任务状态",
        description: "查看各物业任务何时开始、暂停和完成。",
        benefit: "在漏访升级为客户投诉前介入。",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "排班软件",
      },
      {
        title: "QA 与问题工作流",
        description: "经理质量审核、问题日志及已完成任务的照片证据。",
        benefit: "以任务级审计轨迹处理投诉。",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "检查软件",
      },
      {
        title: "业主收入仪表板",
        description: "支持计划中提供财务可见性与 Revenue AI 洞察。",
        benefit: "业主无需导出五份报告即可查看业绩。",
        linkHref: "/pricing",
        linkLabel: "方案与定价",
      },
    ],
    howItWorks: {
      title: "计划 → 分配 → 监控 → 审核 → 批准",
      steps: [
        { title: "计划", description: "在日历或排班视图中构建一周。周期性任务自动生成合同访问。" },
        { title: "分配", description: "将保洁员安排到任务。AI 推荐可选——经理决定最终人选。" },
        { title: "监控", description: "从管理仪表板追踪开始、GPS 标记和清单进度。" },
        { title: "审核", description: "打开已完成任务查看照片、QA 分数和客户报告草稿。" },
        { title: "批准", description: "基于已验证任务时间签批工时并运行薪酬。" },
      ],
    },
    useCases: {
      title: "TidyFlow 支持的管理场景",
      items: [
        { title: "运营经理", description: "多站点日常调度、质量跟进和团队协调。" },
        { title: "企业业主", description: "订阅控制、收入视图及合同服务证明。" },
        { title: "多站点主管", description: "在一处比较各物业完成状态与问题。" },
        { title: "加盟协调员", description: "团队成长时保持一致工作流和基于角色的访问。" },
      ],
    },
    faqs: [
      { q: "保洁管理软件应包含什么？", a: "至少包括：排班、团队分配、现场状态、工时追踪、质量凭证以及薪酬或工时审批。TidyFlow 在一个平台中涵盖这些。" },
      { q: "经理可以在移动端使用 TidyFlow 吗？", a: "可以。经理可从移动或网页端排班、分配和审核任务。" },
      { q: "基于角色的访问如何工作？", a: "业主、经理和保洁员看到不同界面。保洁员获得任务列表和现场工具；经理获得排班、审批和报告。" },
      { q: "TidyFlow 会替代我的会计吗？", a: "不会。TidyFlow 处理运营并可同步发票到 QuickBooks Online。税务和账本策略仍由会计负责。" },
    ],
  },

  "janitorial-software": {
    seoTitle: "保洁员软件 | 夜班与多站点团队 | TidyFlow",
    seoDescription:
      "面向合同保洁员的保洁软件——周期性站点访问、离线现场应用、GPS 打卡、清单及面向设施客户的作业凭证。",
    keywords:
      "保洁员软件, 保洁管理软件, 保洁排班应用, 合同保洁软件, TidyFlow",
    eyebrow: "保洁员软件",
    h1: "为合同站点作业打造的保洁软件",
    heroSubtitle:
      "在办公室、学校和设施间运行周期性保洁路线。保洁员在设备间和地下室离线工作，经理通过 GPS、清单和照片验证每次访问。",
    navLabel: "保洁员软件",
    problems: {
      title: "现场应用失败时合同保洁就会出问题",
      items: [
        "夜班团队在楼梯间进入无信号区，无法记录完成。",
        "替补人员到达时没有站点说明——说明曾在群聊里。",
        "设施经理要求凭证，您却发送没有时间戳的通用邮件。",
        "额外房间的范围扩展直到开票时才被发现。",
        "多栋建筑共用一个主管，无法实地验证每次开始时间。",
      ],
    },
    solution: {
      title: "合同保洁工作流一体化系统",
      paragraphs: [
        "TidyFlow 支持周期性保洁排班、每站点清单和离线任务完成——合同保洁员在每栋建筑访问规则和信号质量各不同时所需组合。",
        "按任务聊天将站点说明留在任务上。GPS 验证和照片凭证为设施客户提供证据，无需额外行政工作。",
      ],
    },
    features: [
      {
        title: "周期性保洁路线",
        description: "按物业自动安排每周和每月访问并分配团队。",
        benefit: "合同排班自动再生，无需手动复制粘贴。",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "排班软件",
      },
      {
        title: "离线保洁应用",
        description: "计时器、清单和照片无连接可用；重连后同步。",
        benefit: "夜班团队在地下完成作业，而非跳过应用。",
        linkHref: "/offline-cleaning-software",
        linkLabel: "离线保洁软件",
      },
      {
        title: "站点清单与照片",
        description: "逐房间任务，完成时提供前后对比证据。",
        benefit: "为 QA 和客户纠纷记录服务范围。",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "检查与 QC",
      },
      {
        title: "SOS 安全按钮",
        description: "一键向经理报警，适用于晚班单独作业人员。",
        benefit: "为夜班保洁员提供任务屏幕上的直接安全通道。",
        linkHref: "/features",
        linkLabel: "现场安全功能",
      },
    ],
    howItWorks: {
      title: "合同 → 排班 → 执行 → 证明 → 开票",
      steps: [
        { title: "合同", description: "设置物业及每站点的访问说明和清单模板。" },
        { title: "排班", description: "创建周期性保洁访问并分配固定团队或轮换人员。" },
        { title: "执行", description: "保洁员在线或离线运行任务——计时器、清单、现场照片。" },
        { title: "证明", description: "经理审核 GPS 验证的完成情况和照片证据。" },
        { title: "开票", description: "基于已完成工作向客户开票；支持计划可同步至 QuickBooks。" },
      ],
    },
    useCases: {
      title: "使用 TidyFlow 的保洁团队",
      items: [
        { title: "办公室与企业保洁", description: "非营业时间清洁及 PDF 客户凭证。" },
        { title: "教育与公共建筑", description: "多层站点室内信号差——含离线模式。" },
        { title: "工业与厂区保洁", description: "受限区域和安全敏感区的清单。" },
        { title: "分包保洁供应商", description: "面向客户的经理和现场员工基于角色的访问。" },
      ],
    },
    faqs: [
      { q: "TidyFlow 是保洁还是家庭清洁软件？", a: "TidyFlow 面向专业保洁运营——商业、保洁和合同作业是主要适用场景。" },
      { q: "保洁员无信号能打卡吗？", a: "可以。现场应用离线排队 GPS 和任务事件，恢复连接后同步。" },
      { q: "能与设施经理分享凭证吗？", a: "可以。PDF 任务报告和安全客户门户链接分享完成证据。" },
      { q: "TidyFlow 支持周期性夜班吗？", a: "支持。周期性任务和排班工具支持固定夜班路线和轮换团队。" },
    ],
  },

  "commercial-cleaning-software": {
    seoTitle: "商业保洁软件 | 多站点合同 | TidyFlow",
    seoDescription:
      "面向办公室、零售和设施合同的商业保洁软件——排班、QC 检查、客户凭证、开票和团队管理。",
    keywords:
      "商业保洁软件, 办公室保洁软件, 合同保洁平台, 设施保洁软件, TidyFlow",
    eyebrow: "商业保洁软件",
    h1: "面向合同运营的商业保洁软件",
    heroSubtitle:
      "以周期性排班、检查清单、客户照片凭证及基于已验证现场工时的薪酬，管理多站点商业合同。",
    navLabel: "商业保洁",
    problems: {
      title: "商业合同需要的不仅是日历应用",
      items: [
        "每个客户站点范围、钥匙和检查标准不同。",
        "客户经理承诺质量，运营却没有集中的 QC 记录。",
        "额外工单在邮件和每周排班之间丢失。",
        "发票发出前无人确认所有计划访问已完成。",
        "一次未记录的大扫除漏做就会导致客户流失。",
      ],
    },
    solution: {
      title: "从投标到凭证的商业工作流",
      paragraphs: [
        "TidyFlow 将商业排班与质量验证和客户报告连接。经理对已完成任务运行 QA 评分，按物业记录问题，并分享品牌 PDF 凭证。",
        "支持计划中的开票和 QuickBooks 同步，让财务与已完成合同工作保持一致。",
      ],
    },
    features: [
      {
        title: "多物业排班",
        description: "跨商业投资组合的日历和周期性任务。",
        benefit: "合同内每个站点一览。",
        linkHref: "/cleaning-scheduling-software",
        linkLabel: "排班",
      },
      {
        title: "客户凭证与 PDF 报告",
        description: "品牌可下载报告和安全门户链接。",
        benefit: "向设施经理提供证据，无需手动发照片邮件。",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "检查与凭证",
      },
      {
        title: "客户开票",
        description: "基于已完成任务及明细行开票。",
        benefit: "按已验证完成开票，而非猜测。",
        linkHref: "/integrations",
        linkLabel: "QuickBooks 集成",
      },
      {
        title: "问题追踪",
        description: "从现场或办公室记录并解决物业问题。",
        benefit: "站点报告问题时闭环处理。",
        linkHref: "/features",
        linkLabel: "质量功能",
      },
    ],
    howItWorks: {
      title: "范围 → 排班 → 服务 → 检查 → 账单",
      steps: [
        { title: "范围", description: "为每个商业客户定义物业、清单和访问说明。" },
        { title: "排班", description: "设置周期性服务频率并分配团队。" },
        { title: "服务", description: "保洁员在移动端以计时器、GPS 和清单完成任务。" },
        { title: "检查", description: "经理通过照片和评分工作流 QA 已完成工作。" },
        { title: "账单", description: "向客户开票并可选择同步至 QuickBooks Online。" },
      ],
    },
    useCases: {
      title: "商业保洁使用场景",
      items: [
        { title: "办公室与联合办公运营商", description: "日常和每周服务及客户可见凭证。" },
        { title: "零售与酒店连锁", description: "多地点一致清单。" },
        { title: "物业管理组合", description: "跨楼宇追踪问题与访问。" },
        { title: "B2B 合同保洁商", description: "向设施经理销售的业主的运营可见性。" },
      ],
    },
    faqs: [
      { q: "什么是商业保洁软件？", a: "帮助 B2B 保洁公司排班合同站点、验证服务交付、管理团队并向客户开票的软件平台。" },
      { q: "客户能看到任务照片吗？", a: "您通过 PDF 报告和门户链接控制面向客户的凭证——而非内部经理聊天。" },
      { q: "TidyFlow 支持多地点合同吗？", a: "支持。物业、周期性任务和排班可扩展至多站点商业组合。" },
      { q: "能收集客户评价吗？", a: "可以。TidyFlow 包含客户评价收集及负面反馈路由。" },
    ],
  },

  "cleaning-scheduling-software": {
    seoTitle: "保洁排班软件 | 周期性任务与排班表 | TidyFlow",
    seoDescription:
      "保洁排班软件，含日历、排班构建器、周期性任务、AI 分配建议、请假管理及 Google Sheets 同步。",
    keywords:
      "保洁排班软件, 保洁调度软件, 家政服务排班, 保洁排班应用, TidyFlow",
    eyebrow: "保洁排班软件",
    h1: "匹配真实排班的保洁排班软件",
    heroSubtitle:
      "构建每周排班、自动化周期性物业访问、考虑请假分配保洁员，并即时向现场应用推送更新。",
    navLabel: "排班",
    problems: {
      title: "工具忽视保洁现实时排班会失效",
      items: [
        "周期性合同每月手动重新录入。",
        "分配替补时看不到谁在请假。",
        "保洁员从群消息而非应用得知排班变更。",
        "路线规划靠猜——站点间通勤时间不可见。",
        "电子表格排班与现场应用永远对不上。",
      ],
    },
    solution: {
      title: "与现场应用连接的排班",
      paragraphs: [
        "TidyFlow 排班不是独立日历——分配实时推送到保洁员移动任务列表。周期性任务自动生成合同访问。排班构建器尊重已批准请假。",
        "Google Sheets 双向同步让团队保留电子表格主档，TidyFlow 执行调度。AI 可建议人选；经理始终做最终决定。",
      ],
    },
    features: [
      {
        title: "日历与排班构建器",
        description: "周视图、拖放分配、考虑请假的规划。",
        benefit: "排班一次构建，发布到现场。",
        linkHref: "/how-it-works",
        linkLabel: "排班如何工作",
      },
      {
        title: "周期性任务",
        description: "每物业每周、每月及自定义重复模式。",
        benefit: "不必每个周期复制相同访问。",
        linkHref: "/features",
        linkLabel: "排班功能",
      },
      {
        title: "AI 保洁员推荐",
        description: "按历史、位置和可用性推荐最佳人选。",
        benefit: "繁忙早晨更快调度——经理确认。",
        linkHref: "/whats-new/ai-setup",
        linkLabel: "AI 分配",
      },
      {
        title: "路线优化",
        description: "在支持的工作流中缩短物业间通勤时间。",
        benefit: "每班次安排更多任务，无需猜测加班。",
        linkHref: "/integrations",
        linkLabel: "地图集成",
      },
    ],
    howItWorks: {
      title: "排班 → 分配 → 通知 → 执行 → 调整",
      steps: [
        { title: "排班", description: "在日历视图创建任务或从 Google Sheets 导入。" },
        { title: "分配", description: "将保洁员拖入班次；排班标记请假冲突。" },
        { title: "通知", description: "分配即时出现在保洁员设备上。" },
        { title: "执行", description: "现场团队以 GPS 验证打卡开始任务。" },
        { title: "调整", description: "有人请病假时从移动端重新分配开放任务。" },
      ],
    },
    useCases: {
      title: "排班场景",
      items: [
        { title: "周期性合同保洁", description: "跨客户站点自动化固定每周路线。" },
        { title: "住宅与家政服务", description: "可变每周排班及快速重新分配。" },
        { title: "多团队调度", description: "多名主管调度重叠区域。" },
        { title: "告别电子表格的成长企业", description: "过渡到应用调度时保持表格同步。" },
      ],
    },
    faqs: [
      { q: "TidyFlow 能管理周期性保洁任务吗？", a: "能。周期性任务按物业自动重复访问并分配团队。" },
      { q: "排班与 Google Sheets 同步吗？", a: "同步。双向同步保持电子表格主档与应用分配一致。" },
      { q: "保洁员只能看自己的排班吗？", a: "是。保洁员看今日任务列表；经理看完整排班。" },
      { q: "有路线优化吗？", a: "有。TidyFlow 含 Google Maps 集成的路线规划工具。" },
    ],
  },

  "cleaning-payroll-software": {
    seoTitle: "保洁薪酬软件 | 已验证工时与考勤表 | TidyFlow",
    seoDescription:
      "基于 GPS 验证任务工时、考勤审批、薪酬规则、薪酬运行及 PDF 工资单的保洁薪酬软件。",
    keywords:
      "保洁薪酬软件, 保洁员薪酬应用, 保洁员薪酬, 保洁考勤软件, TidyFlow",
    eyebrow: "保洁薪酬软件",
    h1: "基于已验证任务工时的保洁薪酬软件",
    heroSubtitle:
      "从任务计时器和已批准工时生成薪酬——而非手写考勤表。GPS 验证减少纠纷并为经理提供审计轨迹。",
    navLabel: "薪酬",
    problems: {
      title: "薪酬纠纷始于未验证工时",
      items: [
        "保洁员四舍五入时间，因为纸质考勤表容易虚报。",
        "经理无法将工资单行与具体已完成任务关联。",
        "加班意外出现，因为额外任务未集中记录。",
        "承包商与员工费率记在不同笔记本里。",
        "运营已批准工时，财务却又把不同数据录入会计系统。",
      ],
    },
    solution: {
      title: "与已完成现场工作关联的薪酬",
      paragraphs: [
        "TidyFlow 从现场任务计时器记录工时。GPS 验证标记远离物业的开始与完成。经理在运行薪酬前审批工时。",
        "支持计划中的员工薪酬规则、薪酬发票和 QuickBooks 薪酬账单同步，让运营与财务一致。",
      ],
    },
    features: [
      {
        title: "任务计时器与考勤表",
        description: "开始、休息、继续、提交——工时绑定每个任务。",
        benefit: "每小时都关联一次物业访问。",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "工时追踪",
      },
      {
        title: "GPS 验证考勤",
        description: "打卡和任务完成时检查位置。",
        benefit: "用位置证据应对纠纷。",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "GPS 验证",
      },
      {
        title: "薪酬规则与薪酬运行",
        description: "每用户费率及基于已批准工时的薪酬生成。",
        benefit: "工资单发出前统一审批流程。",
        linkHref: "/features",
        linkLabel: "薪酬功能",
      },
      {
        title: "QuickBooks 薪酬账单",
        description: "支持计划中将已批准薪酬同步至 QuickBooks。",
        benefit: "会计收到运营批准的总数。",
        linkHref: "/whats-new/quickbooks",
        linkLabel: "QuickBooks 同步",
      },
    ],
    howItWorks: {
      title: "排班 → 记录工时 → 验证 → 批准 → 支付",
      steps: [
        { title: "排班", description: "分配任务，让预期工时在班次前可见。" },
        { title: "记录", description: "保洁员在现场运行计时器；GPS 验证位置。" },
        { title: "验证", description: "经理审核标记打卡和未完成清单。" },
        { title: "批准", description: "签批工时和调整。" },
        { title: "支付", description: "运行薪酬并导出 PDF 发票或同步至 QuickBooks。" },
      ],
    },
    useCases: {
      title: "薪酬场景",
      items: [
        { title: "按小时计酬保洁团队", description: "按已验证任务时间支付，而非纸质条。" },
        { title: "W-2 与承包商混合", description: "每用户薪酬规则及 PDF 薪酬发票。" },
        { title: "易生纠纷的团队", description: "每条工资单行都有 GPS 和任务历史。" },
        { title: "夜间处理薪酬的业主", description: "从管理仪表板批量审批。" },
      ],
    },
    faqs: [
      { q: "TidyFlow 能追踪保洁员工时吗？", a: "能。任务计时器按任务记录工时。保洁员也可提交工时供经理审批。" },
      { q: "GPS 能证明保洁员在现场吗？", a: "GPS 验证在开始和完成时检查位置。经理会收到远离建筑的打卡提醒。" },
      { q: "能导出薪酬到 QuickBooks 吗？", a: "支持计划可将已批准薪酬作为账单同步至 QuickBooks Online。" },
      { q: "TidyFlow 会替代完整 HR/薪酬服务商吗？", a: "TidyFlow 从已验证运营工时生成薪酬。税务申报和完整 HR 合规仍属会计职责。" },
    ],
  },

  "cleaning-inspection-software": {
    seoTitle: "保洁检查软件 | 清单与照片凭证 | TidyFlow",
    seoDescription:
      "保洁检查软件，含房间清单、前后对比照片、QA 评分、PDF 客户报告及问题追踪，用于质量验证。",
    keywords:
      "保洁检查软件, 保洁质量控制软件, 保洁清单应用, 保洁检查软件, TidyFlow",
    eyebrow: "保洁检查软件",
    h1: "带清单和照片凭证的保洁检查软件",
    heroSubtitle:
      "逐房间检查，拍摄前后对比照片，通过经理 QA 工作流评分质量，并向客户分享品牌凭证。",
    navLabel: "检查",
    problems: {
      title: "检查脱离任务时会出现质量问题",
      items: [
        "清单是纸质 PDF，保洁员不在现场打开就勾选。",
        "前后对比照片在个人相册——未与物业关联。",
        "经理随机检查而非遵循评分工作流。",
        "客户质疑质量，您却没有带时间戳的证据包。",
        "现场发现的问题在记录前就被遗忘。",
      ],
    },
    solution: {
      title: "在任务记录上执行并存储检查",
      paragraphs: [
        "TidyFlow 清单在保洁员移动应用中运行——可选规则可要求完成清单后再启动计时器。照片在现场上传，含离线及后续同步。",
        "经理使用 QA 评分工作流审核完成情况。支持计划中 AI 照片分析可标记质量问题。PDF 报告和客户门户链接为设施客户打包凭证。",
      ],
    },
    features: [
      {
        title: "逐房间清单",
        description: "每物业模板清单及必填项。",
        benefit: "每次访问标准化服务范围。",
        linkHref: "/features",
        linkLabel: "清单功能",
      },
      {
        title: "前后对比照片",
        description: "在任务中采集证据；支持离线。",
        benefit: "照片留在访问记录上，而非相机相册。",
        linkHref: "/offline-cleaning-software",
        linkLabel: "离线照片",
      },
      {
        title: "QA 评分工作流",
        description: "经理审核及已完成任务的质量分数。",
        benefit: "将抽检变为可重复流程。",
        linkHref: "/how-it-works",
        linkLabel: "质量工作流",
      },
      {
        title: "PDF 客户报告",
        description: "品牌任务报告及安全分享链接。",
        benefit: "发送凭证，无需手动做幻灯片。",
        linkHref: "/documentation",
        linkLabel: "报告文档",
      },
    ],
    howItWorks: {
      title: "创建清单 → 检查 → 采集证据 → 审核 → 分享凭证",
      steps: [
        { title: "创建", description: "按客户站点或服务类型构建清单模板。" },
        { title: "检查", description: "保洁员在任务期间于移动端完成各项。" },
        { title: "采集", description: "添加前后对比照片；离线采集稍后同步。" },
        { title: "审核", description: "经理 QA 评分完成情况并记录问题。" },
        { title: "分享", description: "导出 PDF 或发送带证据的客户门户链接。" },
      ],
    },
    useCases: {
      title: "检查使用场景",
      items: [
        { title: "商业 QC 项目", description: "跨客户组合的标准化评分。" },
        { title: "退租与深度清洁", description: "面向房东的前后对比照片包。" },
        { title: "加盟质量标准", description: "各站点一致清单。" },
        { title: "客户审计请求", description: "设施要求凭证时的带时间戳任务历史。" },
      ],
    },
    faqs: [
      { q: "保洁员能离线完成清单吗？", a: "能。清单和照片支持离线，恢复连接后同步。" },
      { q: "TidyFlow 用 AI 评估照片质量吗？", a: "支持计划中 AI 照片分析可评分上传的保洁照片。经理仍做最终 QA 决定。" },
      { q: "客户能访问检查报告吗？", a: "能。PDF 任务报告和安全门户链接向客户分享完成证据。" },
      { q: "能要求打卡前完成清单吗？", a: "能。可选规则可要求在启动任务计时器前完成清单步骤。" },
    ],
  },

  "cleaning-time-tracking-software": {
    seoTitle: "保洁工时追踪软件 | GPS 打卡 | TidyFlow",
    seoDescription:
      "保洁工时追踪软件，含现场任务计时器、GPS 验证、地理围栏、活跃任务实时追踪及薪酬用工时。",
    keywords:
      "保洁工时追踪软件, 保洁工时追踪, 保洁员打卡应用, GPS 保洁工时追踪, TidyFlow",
    eyebrow: "工时追踪",
    h1: "带 GPS 验证的保洁工时追踪软件",
    heroSubtitle:
      "以任务计时器、GPS 验证和地理围栏在现场为保洁员打卡——让记录工时反映真实物业访问，而非估算。",
    navLabel: "工时追踪",
    problems: {
      title: "打卡易造假时工时追踪就会失效",
      items: [
        "保洁员在街对面停车场启动计时器。",
        "经理无法实时查看谁正在执行任务。",
        "代打卡发生，因为任何人都能发「我到了」。",
        "一个客户站点的工时混入通勤时间。",
        "信号弱的楼宇迫使保洁员跳过计时器。",
      ],
    },
    solution: {
      title: "内置于保洁任务的工时追踪",
      paragraphs: [
        "TidyFlow 工时追踪按任务——在任务屏幕开始、休息、继续、提交。GPS 验证将打卡位置与物业比对。经理可在活跃任务期间查看实时 GPS。",
        "离线模式在信号丢失时排队计时器和 GPS 事件，重连后同步——地下室清洁仍能产生可验证工时。",
      ],
    },
    features: [
      {
        title: "现场任务计时器",
        description: "保洁应用中简洁的开始/休息/提交流程。",
        benefit: "工时绑定物业，而非通用班次。",
        linkHref: "/features",
        linkLabel: "现场应用",
      },
      {
        title: "GPS 与地理围栏",
        description: "开始/完成时验证位置；站点地图集成。",
        benefit: "标记远离建筑的打卡。",
        linkHref: "/integrations",
        linkLabel: "地图与地理围栏",
      },
      {
        title: "离线 GPS 队列",
        description: "无信号时排队位置事件；稍后同步。",
        benefit: "在设备间和地下车库追踪时间。",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "离线 GPS",
      },
      {
        title: "可用于薪酬的工时",
        description: "已批准工时进入薪酬运行。",
        benefit: "从打卡到工资单闭环。",
        linkHref: "/cleaning-payroll-software",
        linkLabel: "薪酬软件",
      },
    ],
    howItWorks: {
      title: "分配 → 到达 → 打卡 → 工作 → 提交工时",
      steps: [
        { title: "分配", description: "保洁员在移动端收到今日任务。" },
        { title: "到达", description: "GPS 确认接近物业地理围栏。" },
        { title: "打卡", description: "在任务上启动计时器——可选清单门槛。" },
        { title: "工作", description: "按需休息/继续；活跃任务期间实时 GPS。" },
        { title: "提交", description: "完成任务；工时等待经理审批后进入薪酬。" },
      ],
    },
    useCases: {
      title: "工时追踪场景",
      items: [
        { title: "商业保洁", description: "跨站点验证夜班出勤。" },
        { title: "住宅团队", description: "按小时家政的每户计时器。" },
        { title: "多人任务", description: "每位被分配者在同一任务上记录时间。" },
        { title: "低连接站点", description: "离线队列保留工时和 GPS。" },
      ],
    },
    faqs: [
      { q: "TidyFlow 能自动追踪保洁员工时吗？", a: "能。任务计时器在保洁员开始和提交任务时记录工时。GPS 增加位置验证。" },
      { q: "GPS 不可用时怎么办？", a: "事件离线排队，信号恢复后同步。经理仍能看到任务完成记录。" },
      { q: "实时 GPS 一直开启吗？", a: "实时 GPS 追踪适用于支持工作流中的活跃任务——非 24/7 监控。" },
      { q: "经理能编辑工时吗？", a: "经理通过审批工作流在薪酬前批准或调整工时。" },
    ],
  },

  "offline-cleaning-software": {
    seoTitle: "离线保洁软件 | 无信号现场应用 | TidyFlow",
    seoDescription:
      "面向地下室、停车场和低信号楼宇团队的离线保洁软件——离线清单、计时器、照片及 GPS 队列与自动同步。",
    keywords:
      "离线保洁软件, 离线保洁应用, 无网络保洁应用, 离线保洁员应用, TidyFlow",
    eyebrow: "离线保洁软件",
    h1: "面向真实现场条件的离线保洁软件",
    heroSubtitle:
      "保洁员无网络也可完成任务——清单、任务计时器、照片和 GPS 事件本地排队，恢复连接后自动同步。",
    navLabel: "离线保洁",
    problems: {
      title: "现场应用在保洁实际发生的地方会失败",
      items: [
        "地下室和设备间阻断移动数据——保洁员跳过应用。",
        "照片等到停车场才拍，然后在任务间混淆。",
        "应用要求持续连接导致计时器停止。",
        "经理假设「未同步」等于「未到岗」。",
        "竞品声称离线但只缓存任务列表，不缓存完成数据。",
      ],
    },
    solution: {
      title: "完整离线任务完成——非只读缓存",
      paragraphs: [
        "TidyFlow 离线模式支持保洁员现场所需工作流：运行任务计时器、完成清单、拍照并排队 GPS 验证事件。设备重连后，数据同步至管理仪表板。",
        "专为信号时常中断的保洁和商业站点而构建——非常态边缘情况。",
      ],
    },
    features: [
      {
        title: "离线清单",
        description: "无连接也可完成房间任务。",
        benefit: "检查在地下完成，而非停车场。",
        linkHref: "/cleaning-inspection-software",
        linkLabel: "检查软件",
      },
      {
        title: "离线任务计时器",
        description: "在现场追踪工时；稍后同步时间戳。",
        benefit: "薪酬获得真实任务时间，而非估算。",
        linkHref: "/cleaning-time-tracking-software",
        linkLabel: "工时追踪",
      },
      {
        title: "离线照片采集",
        description: "前后对比照片本地存储待上传。",
        benefit: "证据绑定正确任务。",
        linkHref: "/features",
        linkLabel: "照片凭证",
      },
      {
        title: "离线 GPS 队列",
        description: "无信号时排队位置事件；重连后同步。",
        benefit: "离开无信号区后仍可验证出勤。",
        linkHref: "/whats-new/offline-gps",
        linkLabel: "离线 GPS 功能",
      },
    ],
    howItWorks: {
      title: "加载任务 → 离线工作 → 排队数据 → 重连 → 同步",
      steps: [
        { title: "加载", description: "联网时将已分配任务下载到设备。" },
        { title: "离线工作", description: "计时器、清单和照片无互联网运行。" },
        { title: "排队", description: "GPS 和完成事件本地存储。" },
        { title: "重连", description: "离开楼宇或停车场后手机恢复信号。" },
        { title: "同步", description: "经理在仪表板看到已完成任务、照片和工时。" },
      ],
    },
    useCases: {
      title: "离线场景",
      items: [
        { title: "地下室与设备间保洁", description: "室内零信号也可完成任务。" },
        { title: "地下停车场清洁", description: "设备离开车库前 GPS 排队。" },
        { title: "乡村或工业站点", description: "不稳定覆盖不再阻碍现场合规。" },
        { title: "国际团队", description: "11 种支持语言下相同的离线行为。" },
      ],
    },
    faqs: [
      { q: "TidyFlow 无互联网连接能工作吗？", a: "能。保洁员可离线运行计时器、清单和拍照。恢复连接后数据同步。" },
      { q: "重连后同步什么？", a: "任务完成状态、照片、计时器工时、排队 GPS 事件和清单答案同步至服务器。" },
      { q: "保洁员需要手动同步吗？", a: "设备重连后自动同步——无需单独上传步骤。" },
      { q: "离线在所有方案都可用吗？", a: "离线现场运营是 TidyFlow 核心能力。高级 AI 和集成功能因方案而异——见定价。" },
    ],
  },

  "cleaning-business-software": {
    seoTitle: "保洁业务软件 | 运营与成长 | TidyFlow",
    seoDescription:
      "面向从独立经营者到多团队成长业主的保洁业务软件——排班、账单、薪酬、客户凭证及 Revenue AI 洞察。",
    keywords:
      "保洁业务软件, 小型保洁公司应用, 保洁公司成长软件, 保洁创业软件, TidyFlow",
    eyebrow: "保洁业务软件",
    h1: "随公司成长的保洁业务软件",
    heroSubtitle:
      "从排班和现场凭证开始，随成长添加薪酬、客户开票和业主仪表板——一个平台替代拼凑工具。",
    navLabel: "保洁业务",
    problems: {
      title: "小型保洁公司很快会超出首批工具",
      items: [
        "从日历应用开始，再加薪酬软件，再加照片文件夹——互不相连。",
        "赢得更多合同意味着更多行政时间，而非更多利润。",
        "不导出电子表格就无法判断哪些客户盈利。",
        "雇第一位经理会重复工作，因为没有共享运营系统。",
        "试用工具按席位计费，惩罚成长中的团队。",
      ],
    },
    solution: {
      title: "在一个保洁业务平台上成长运营",
      paragraphs: [
        "TidyFlow 方案从创业团队扩展到更大编制，物业限制按使用量计。业主在应用内管理订阅和账单。排班、现场凭证、薪酬和客户开票一体。",
        "支持计划中的 Revenue AI 在业主仪表板突出风险与机会——成长决策基于运营数据，而非直觉。",
      ],
    },
    features: [
      {
        title: "方案从每月 25 美元起",
        description: "Startup 方案面向较小团队；物业和保洁员增长时可升级。",
        benefit: "无需企业合同即可开始。",
        linkHref: "/pricing",
        linkLabel: "查看定价",
      },
      {
        title: "自助账单",
        description: "应用内试用、升级和订阅管理。",
        benefit: "业主控制成本，无需联系销售。",
        linkHref: "/whats-new/self-serve-billing",
        linkLabel: "账单功能",
      },
      {
        title: "客户开票与 QuickBooks",
        description: "从任务开票；同步至 QuickBooks Online。",
        benefit: "增加客户时财务保持对齐。",
        linkHref: "/integrations",
        linkLabel: "集成",
      },
      {
        title: "Revenue AI 仪表板",
        description: "支持计划中的业主洞察。",
        benefit: "及早发现需要关注的合同。",
        linkHref: "/whats-new/revenue-ai",
        linkLabel: "Revenue AI",
      },
    ],
    howItWorks: {
      title: "启动 → 运营 → 证明 → 账单 → 成长",
      steps: [
        { title: "启动", description: "14 天试用——设置物业并邀请首批保洁员。" },
        { title: "运营", description: "排班任务并以 GPS 和照片运行现场工作。" },
        { title: "证明", description: "赢得更大合同时向客户发送凭证。" },
        { title: "账单", description: "向客户开票并从已验证工时运行薪酬。" },
        { title: "成长", description: "升级方案限制并使用业主仪表板做决策。" },
      ],
    },
    useCases: {
      title: "业务阶段",
      items: [
        { title: "从独立经营到多保洁员", description: "用共享排班替代个人日历。" },
        { title: "赢得商业标的的本地公司", description: "设施合同的客户凭证与 QC。" },
        { title: "区域保洁品牌", description: "多物业限制、角色与集成。" },
        { title: "身兼数职的业主", description: "一个登录管理排班、薪酬和账单。" },
      ],
    },
    faqs: [
      { q: "什么是保洁业务软件？", a: "帮助业主运行保洁公司排班、团队、现场工作、客户账单和薪酬的软件——通常在成长中替代电子表格。" },
      { q: "TidyFlow 多少钱？", a: "Startup 方案从每月 25 美元起。Standard 和 Premium 增加更多物业、保洁员及 Google Sheets、QuickBooks 同步等功能。" },
      { q: "有免费试用吗？", a: "有。所有方案含 14 天免费试用及自助注册。" },
      { q: "业务成长时能升级吗？", a: "能。物业和团队限制增加时可在应用内更换方案。" },
    ],
  },
};
