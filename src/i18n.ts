export type Locale = 'en' | 'zh';

export const UI = {
  en: {
    about: 'About', work: 'Work', contact: 'Contact', language: '中文', languageLabel: '切换到中文',
    hero: "Hi, I'm Yitong Xiao.", role: 'Interaction Designer.',
    tagline: 'I design digital products and interactive experiences through research, prototyping and visual storytelling.',
    directory: ['ABOUT ME', 'SELECTED WORK', 'CONTACT.'],
    aboutLabel: 'About me', aboutTitle: 'Designing clear product flows and expressive interactive media.',
    aboutBody: 'I am a final-year Digital Media Art student at Xiamen University. I work from research and user flows to visual design, prototyping and testing, with a focus on AI-enabled products and multimedia experiences.',
    capabilities: [
      ['Product & Interaction', 'Product framing, user flows, prototyping and usability testing.'],
      ['Creative Technology', 'WeChat Mini Programs, Unity and AI-assisted experiences.'],
      ['Visual & Spatial', 'Interface design, 3D visualisation and interactive installation.'],
    ],
    selectedWork: 'Selected work', fiveProjects: 'Five projects', viewCase: 'View case study', viewProduct: 'View product case',
    contactTitle: 'Open to interaction and product design opportunities.',
    allWork: 'All work', allWorkIntro: 'Five projects across digital products, AI-enabled experiences, installations and real-time 3D prototypes.',
    selectedWorkBack: 'Selected work', type: 'Type', date: 'Date', roleLabel: 'Role', watchFilm: 'Watch project film',
    selectedVisuals: 'Selected Visuals', visualDesign: 'Visual Design', productFlow: 'Core product flow',
    productFlowIntro: 'Entry, question flow and personality result.', aiSocial: 'AI and social experience',
    allProjects: 'All projects', backTop: 'Back to top', top: 'Top',
  },
  zh: {
    about: '关于', work: '作品', contact: '联系', language: 'EN', languageLabel: 'Switch to English',
    hero: '你好，我是肖怡彤。', role: '交互设计师。',
    tagline: '我通过研究、原型设计与视觉叙事，设计数字产品和互动体验。',
    directory: ['关于我', '精选作品', '联系我'],
    aboutLabel: '关于我', aboutTitle: '设计清晰的产品流程，也探索富有表现力的互动媒介。',
    aboutBody: '我是厦门大学数字媒体艺术专业大四学生。我的工作从研究与用户流程出发，延伸到视觉设计、原型制作和测试，目前关注 AI 产品体验与多媒体交互。',
    capabilities: [
      ['产品与交互', '产品定义、用户流程、原型设计与可用性测试。'],
      ['创意技术', '微信小程序、Unity 与 AI 辅助体验。'],
      ['视觉与空间', '界面设计、三维可视化与互动装置。'],
    ],
    selectedWork: '精选作品', fiveProjects: '五个项目', viewCase: '查看案例', viewProduct: '查看产品案例',
    contactTitle: '期待交互设计与产品设计方向的机会。',
    allWork: '全部作品', allWorkIntro: '五个涵盖数字产品、AI 体验、互动装置与实时三维原型的项目。',
    selectedWorkBack: '精选作品', type: '类型', date: '时间', roleLabel: '职责', watchFilm: '观看项目视频',
    selectedVisuals: '视觉展示', visualDesign: '视觉设计', productFlow: '核心产品流程',
    productFlowIntro: '从入口、答题流程到人格结果。', aiSocial: 'AI 与社交体验',
    allProjects: '全部项目', backTop: '返回顶部', top: '顶部',
  },
} as const;

export interface ProjectTranslation {
  title: string;
  summary: string;
  role: string;
  projectType: string;
  status?: string;
  sections: Array<{ heading: string; body: string }>;
  gallery: Array<{ alt: string; caption: string }>;
}

export const PROJECT_ZH: Record<string, ProjectTranslation> = {
  'fandom-mbti': {
    title: '追星 MBTI',
    summary: '一款微信小程序，通过 12 道追星人格测试生成 16 种结果、AI 追星档案与可分享的社交互动。',
    role: '产品策略、交互设计、视觉设计与开发',
    projectType: 'AI 微信小程序',
    status: '可运行原型',
    sections: [
      { heading: '产品构想', body: '追星 MBTI 将常见的追星行为转化为轻量人格测试和社交话题，把熟悉的人格测试形式与粉丝文化中的语言和情境结合起来。' },
      { heading: '核心流程', body: '原型由 12 道题、四个计分维度和 16 种人格结果构成。简洁的结果页先提供易读结论，再引导用户进入详细报告。' },
      { heading: 'AI 体验', body: '腾讯混元生成个性化追星档案与好友契合度分析。系统使用结构化 JSON、每日限额和本地兜底内容，并明确说明结果仅供娱乐。' },
      { heading: '社交闭环', body: '用户可以比较好友结果、保存结果海报并分享小程序码，让一次个人测试延伸为可重复的社交交流。' },
      { heading: '可靠性', body: '实现包含异常处理、分包加载、音频控制、计分测试，以及 AI 或广告服务不可用时的降级方案，保证主流程在不理想条件下仍可使用。' },
      { heading: '反思', body: '目前项目是可运行原型，而非正式上线产品。下一步会通过真实用户测试验证题目表达、报告理解和分享流程，再讨论参与度或留存表现。' },
    ],
    gallery: [
      { alt: '追星 MBTI 首页', caption: '入口说明测试内容，并为回访用户提供已保存报告的入口。' },
      { alt: '追星 MBTI 答题流程', caption: '12 道题围绕四个人格维度计分，并持续显示答题进度。' },
      { alt: '追星 MBTI 人格结果', caption: '16 种结果以易记的人格身份和简洁特征说明呈现。' },
      { alt: 'AI 生成的追星档案', caption: '结构化 AI 输出把测试数据转化为轻松、易读的个性档案。' },
      { alt: '好友契合度分析', caption: '两种人格结果可以组合生成好友契合度解读。' },
      { alt: '详细报告与分享海报', caption: '详细报告和海报让结果可以保存、回看与分享。' },
    ],
  },
  'divine-echo': {
    title: 'Divine Echo', summary: '一座互动数字祭坛，通过手势、文字和投影，将私人问题转化为人与虚拟神祇之间的静默对话。',
    role: '体验策略、交互流程、空间设计与视觉指导', projectType: '互动装置',
    sections: [
      { heading: '体验设定', body: '对数字占卜与仪式行为的研究形成了一个清晰目标：创造一段私密时刻，让参与者提出问题，并收到具有开放解释空间的回应。' },
      { heading: '交互流程', body: '参与者走近祭坛、双手合十并输入问题。每个动作都会产生可见的空间反馈，从投影环境到粒子神祇，使整个仪式无需长篇说明也能被理解。' },
      { heading: '空间反馈', body: '摄像头输入、文字和投影把实体祭坛与虚拟存在连接起来。烛光、织物与亚克力支架引导注意力，同时让技术退居体验之后。' },
    ],
    gallery: [
      { alt: '参与者双手合十开始仪式', caption: '简单的合十手势启动互动，并建立私密仪式的体验氛围。' },
      { alt: '粒子构成的数字神祇从黑暗中出现', caption: '神祇以不稳定的粒子形态出现，而非固定的物理形象。' },
      { alt: '数字神祇站在投影祭坛环境中', caption: '投影环境把虚拟形象与实体祭坛联系起来。' },
      { alt: '祭坛中的电脑、键盘与蜡烛', caption: '烛光、蜡液和透明支架共同构成祭坛的材料语言。' },
    ],
  },
  'traces-of-evaluation': {
    title: 'Traces of Evaluation', summary: '一件关于社会评价如何影响人们理解并重塑自我的互动装置。',
    role: '体验策略、交互映射、视觉设计与装置搭建', projectType: 'AI 互动装置',
    sections: [
      { heading: '观众输入', body: '观众用实体字母块拼出一段简短的自我评价。摄像头读取词语，并由 AI 判断其情感倾向。' },
      { heading: '输入与输出映射', body: '分类结果控制围绕观众实时轮廓的两套视觉反馈。四块屏幕分别代表凝视、语言、网络和人群，让输入与空间反馈的关系变得可见。' },
      { heading: '观众体验', body: '积极语言生成温暖、呼吸般的轮廓；消极语言使轮廓破碎后重新聚合。直接反馈之外，体验也为观众保留思考评价如何改变自我认知的空间。' },
    ],
    gallery: [
      { alt: '由四块屏幕和中央投影组成的完整装置', caption: '四块屏幕围绕中央投影中的自我，分别代表凝视、语言、网络与人群。' },
      { alt: '用于组成自我评价的木制字母块', caption: '实体字母块让自我评价成为有意识的触觉行为。' },
      { alt: '参与者正在排列字母块', caption: '摄像头读取参与者组成的词语。' },
      { alt: '积极评价产生的暖色投影轮廓', caption: '积极语言让轮廓呈现温暖、呼吸般的色彩。' },
      { alt: '参与者面对投影与周围屏幕', caption: '观众在多种社会评价来源中看见自己的轮廓。' },
    ],
  },
  'liquidity-compensation-operation': {
    title: 'Liquidity Compensation Operation', summary: '一个 Unity 实时三维原型，通过导航、环境任务和即时反馈解释回注水过程。',
    role: '交互流程、关卡设计、Unity 原型与玩家测试', projectType: '3D 叙事游戏原型',
    sections: [
      { heading: '体验目标', body: '玩家以维修人员身份进入废弃游乐园。探索和环境任务逐步揭示开采如何破坏地貌，以及回注水如何延缓地层沉降。' },
      { heading: 'Unity 原型', body: '圆形与三角形空间引导玩家完成平台移动、遭遇和四个回注点。Unity 系统将移动、触发器、任务和环境变化连接为一条完整流程。' },
      { heading: '测试与迭代', body: '测试暴露出目标不清、导航提示薄弱和反馈不足的问题。迭代强化了地标、任务提示和状态变化，使修复流程的路线更清晰。' },
    ],
    gallery: [
      { alt: '回注水关卡中的第一人称战斗', caption: '战斗与环境目标构成主要体验循环。' },
      { alt: '回注水关卡中的管道连接谜题', caption: '管道谜题把回注水转化为直接的玩家任务。' },
      { alt: '废弃游乐园中的任务提示', caption: '屏幕任务提示帮助玩家理解受损公园中的推进目标。' },
      { alt: '参与者在电脑上测试 Unity 游戏', caption: '玩家测试推动了导航、反馈和任务清晰度的调整。' },
    ],
  },
  'oyster-reef-revival': {
    title: 'Oyster Reef Revival', summary: '一款把牡蛎礁生态修复转化为可视化、可游玩的策略桌游。',
    role: '研究、系统设计、信息设计与原型制作', projectType: '生态策略桌游',
    sections: [
      { heading: '从研究到游戏', body: '牡蛎礁支持沿海生态系统，却很容易被忽视。项目将生态修复研究转化为游戏系统，让复杂的生态关系更容易理解。' },
      { heading: '设计过程', body: '研究决定了地图、卡牌层级与资源模型。玩家种植牡蛎、应对环境事件，并在有限资源下维持稳定礁体；色彩、图标与信息层级帮助玩家判断每回合的系统状态。' },
      { heading: '迭代', body: '三轮玩家测试暴露了资源平衡、事件频率与节奏问题。每轮测试都推动规则与信息呈现调整，最终形成更清晰的策略循环与统一视觉系统。' },
    ],
    gallery: [
      { alt: '牡蛎礁复兴中的政策支持资源卡', caption: '政策支持卡' },
      { alt: '牡蛎礁复兴中的生态突破卡', caption: '生态突破卡' },
      { alt: '牡蛎礁复兴中的风暴事件卡', caption: '风暴事件卡' },
      { alt: '牡蛎礁复兴中的修复行动卡', caption: '修复行动卡' },
    ],
  },
};

export function localizedPath(pathname: string, locale: Locale) {
  if (locale === 'zh') return pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  return `/zh${pathname === '/' ? '/' : pathname}`;
}
