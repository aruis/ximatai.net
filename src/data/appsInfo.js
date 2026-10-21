// src/data/appsInfo.js

const appsInfo = {
    "booktime": {
        id: "booktime",
        logo:
            "/app/booktime.jpg",
        title:
            "BookTime",
        subtitle:
            "您的阅读计时伴侣",
        summary:
            "我们改变不了人生的长度，但是却可以通过阅读改变人生的厚度。\n" +
            "BookTime 专为爱读纸质书的小伙伴打造，它是您安静的阅读计时伴侣，您可以通过它督促自己完成每日阅读打卡，持续跟踪自己的阅读时间。",
        storeUrl:
            "https://apps.apple.com/cn/app/booktime-您的阅读计时伴侣/id1600654269",
        githubUrl:
            "https://github.com/aruis/BookTime",
        primaryUrl:
            "https://apps.apple.com/cn/app/booktime-您的阅读计时伴侣/id1600654269",
        primaryLabel:
            "App Store",
        platform:[
          "iOS","iPadOS","macOS (Apple Silicon)"
        ],
        privacy:
            "BookTime 隐私政策...",
        qa: [],
    }
    ,
    "timebank": {
        id: "timebank",
        logo:
            "/app/timebank.jpg",
        title:
            "TimeBank",
        subtitle:
            "时间是你唯一拥有的东西",
        summary:
            "人生不过是两件事情的不断轮回：\n" +
            "SaveTime，积跬步，可至千里；\n" +
            "KillTime，休息一下，是为了再次出发。\n" +
            "有了 TimeBank 您将更全面的了解自己时间的分配，得出属于您的时间存款。",
        storeUrl:
            "https://apps.apple.com/cn/app/timebank-时间是你唯一拥有的东西/id6474505609",
        githubUrl:
            "https://github.com/aruis/TimeBank",
        primaryUrl:
            "https://apps.apple.com/cn/app/timebank-时间是你唯一拥有的东西/id6474505609",
        primaryLabel:
            "App Store",
        platform:[
            "iOS","iPadOS","macOS","watchOS","visionOS"
        ],
        privacy:
            "TimeBank 隐私政策...",
        qa: [],
    },
    "pintime":{
        id: "pintime",
        logo: "/app/pintime.jpg",
        title: "PinTime",
        subtitle: "标记您的重要时刻",
        summary:
            "流水般的日子里，总有一些瞬间值得被定格，总有一些坚持值得被标记。\n" +
            "PinTime 是一款极简而不失温度的习惯追踪工具，帮您在时光的流转中，标记出那些真正改变生活的「重要时刻」。\n",
        storeUrl:
            "https://apps.apple.com/us/app/pintime-%E6%A0%87%E8%AE%B0%E6%82%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%97%B6%E5%88%BB/id6757686170",
        primaryUrl:
            "https://apps.apple.com/us/app/pintime-%E6%A0%87%E8%AE%B0%E6%82%A8%E7%9A%84%E9%87%8D%E8%A6%81%E6%97%B6%E5%88%BB/id6757686170",
        primaryLabel:
            "App Store",
        platform:[
            "iOS"
        ],
        privacy:
            "PinTime 隐私政策...",
        qa: [],
    },
    "reelflow": {
        id: "reelflow",
        logo: "/app/reelflow-icon.jpg",
        screenshot: "/app/reelflow.jpg",
        title: "ReelFlow",
        subtitle: "原生 macOS 照片转视频工具",
        summary:
            "ReelFlow 是一款面向摄影师和内容创作者的原生 macOS 应用，用来把一组照片快速做成更完整、更有质感的幻灯片视频。\n" +
            "它强调预览快、导出稳、控制足够细，同时保持主流程清晰：导入照片、调整参数、预览结果、加入音乐、导出 MP4。\n" +
            "目前项目已经开源，官方版本也将继续面向 Mac App Store 分发。",
        storeUrl: "https://apps.apple.com/cn/app/reelflow/id6761539309",
        githubUrl: "https://github.com/aruis/ReelFlow",
        primaryUrl: "https://apps.apple.com/cn/app/reelflow/id6761539309",
        primaryLabel: "查看项目",
        secondaryUrl: "/apps/reelflow#privacy-policy",
        secondaryLabel: "隐私与条款",
        platform: [
            "macOS 14.6+"
        ],
        privacy:
            "ReelFlow 隐私与使用条款...",
        qa: [
            "ReelFlow 当前以 macOS 为核心平台，聚焦照片到视频的高质量导出工作流。",
            "如果你想先了解产品和开发进展，可以直接查看 GitHub 开源仓库。"
        ],
    },
    "codexwatcher": {
        id: "codexwatcher",
        logo: "/app/codexwatcher.png",
        title: "Codex Watcher",
        subtitle: "掌握 Codex 额度，安排使用节奏",
        summary:
            "Codex Watcher 是一款原生 macOS 菜单栏工具，让你随时查看 Codex 已用额度、时间进度与下次重置时间。\n" +
            "通过对比实际用量与自然时间进度，了解额度消耗是否超前；还可查看重置卡数量与有效期，自定义菜单栏显示。\n" +
            "项目以 MIT 许可证在 GitHub 开源，提供源码自行构建运行。",
        githubUrl: "https://github.com/ximatai/CodexWatcher",
        primaryUrl: "https://github.com/ximatai/CodexWatcher",
        primaryLabel: "在 GitHub 查看源码",
        secondaryUrl: "#privacy-policy",
        secondaryLabel: "使用与隐私说明",
        availability: "GitHub 开源 · 源码预览版",
        platform: ["macOS 14+"],
        screenshots: [
            { src: "/app/codexwatcher-light.png", caption: "亮色用量面板" },
            { src: "/app/codexwatcher-dark.png", caption: "暗色用量面板" }
        ],
        screenshotNote: "界面使用虚构演示数据，非真实账号用量。",
        qa: [
            "如何运行？需要 macOS 14+、Xcode 和单独安装的 Codex CLI，按 GitHub 仓库说明从源码构建。",
            "偏移是什么意思？实际用量减去自然时间进度，例如已用 35%、时间已过 28%，偏移为 +7 个百分点，表示消耗超前。",
            "多久更新一次？每 5 分钟读取用量，打开面板、系统唤醒及账号变化也会触发刷新。"
        ],
    },
    "baton": {
        id: "baton",
        logo: "/app/baton.jpg",
        title: "Baton Agent",
        subtitle: "把网页 Agent 对话接力到 iPhone",
        summary:
            "Baton 是已有 Web Agent 系统的 iPhone Companion。\n" +
            "扫描网页上的配对二维码，即可加入同一段对话，在手机上通过本地语音转文字或键盘继续交流。",
        storeUrl:
            "https://apps.apple.com/app/id6806605185",
        platform: [
            "iOS"
        ],
        privacy:
            "Baton 支持与隐私政策...",
        qa: [],
    }

};


export default appsInfo;
