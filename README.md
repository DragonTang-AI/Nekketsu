# 热血校园威龙 2.4.1

<div align="center">

![版本](https://img.shields.io/badge/版本-2.4.1-blue)
![引擎](https://img.shields.io/badge/引擎-Cocos%20Creator%202.4.10-orange)
![语言](https://img.shields.io/badge/语言-JavaScript-yellow)
![平台](https://img.shields.io/badge/平台-Web%2FiOS%2FAndroid%2F小游戏-green)

**一款热血风格的横版动作过关游戏**

</div>

---

## 📖 项目介绍

《热血校园威龙》是一款基于 Cocos Creator 2.4.10 开发的横版动作过关游戏。玩家将操控学生主角，在校园场景中击败各路敌人，挑战强大的 Boss，最终救出"美沙子"！

### 🎮 游戏特色

- **爽快战斗**：普通攻击、技能连招、投掷道具等多种战斗方式
- **丰富敌人**：16 种敌人类型，每种都有独特的行为模式
- **Boss 挑战**：3 个特色鲜明的 Boss，拥有专属对话和战斗机制
- **Buff 食物系统**：18 种食物 Buff，提供攻击、暴击、防御等多种属性加成
- **技能系统**：4 个技能格，收集食物解锁强力技能
- **精美动画**：基于 Spine 骨骼动画系统，角色动作流畅自然

---

## ✨ 功能特性

### 🎯 核心玩法

| 功能 | 说明 |
|------|------|
| 横版卷轴战斗 | 左右移动，击败沿路敌人 |
| 多阶段关卡 | 至少 5 大关，每关包含多个小关 |
| Boss 战 | 每个大关结尾有 Boss 战，配有专属对话 |
| 技能系统 | 4 个技能：大风车、岚风突击、马赫旋风踢、坚壳弹幕击 |
| Buff 系统 | 击败敌人掉落食物，拾取获得属性加成 |
| 关卡评价 | 根据表现给予评价，解锁新内容 |

### 🍔 Buff 食物系统

游戏中共有 **18 种 Buff 食物**，拾取后获得不同属性加成：

| 食物 | 效果 | 动画 |
|------|------|------|
| 🍖 大骨肉 | 攻击 +10% | buff_gongji |
| 🍢 关东煮 | 暴击率 +10% | buff_baoji |
| 🍢 大肉串 | 暴击伤害 +25% | buff_baojishanghai |
| 🛡️ 塔克 | 格挡率 +5% | buff_gedanglv |
| 🍕 披萨 | 恢复 10% 血量 | buff_huifu |
| 🍦 雪糕 | 攻击吸血 5% | buff_gongjixixue |
| 🍣 寿司 | 最大生命 +10% | buff_zuidashengming |
| 🍤 炸虾尾 | 技能掉落概率 +10% | buff_diaobaojilv |
| 🍩 甜甜圈 | 武器伤害 +15% | buff_wuqishanghai |
| 🍦 甜筒 | 投掷伤害 +15% | buff_touzhishanghai |
| 🍟 炸薯条 | 移动速度 +15% | buff_yidongsudu |
| ☕ 卡布奇诺 | 受到伤害 -10% | buff_jianshang |
| 🥐 羊角包 | 攻击概率触发无敌护盾（5秒） | buff_hudun |
| 🥪 三明治 | 连击提升攻击伤害 | buff_lianjishanghai |

### ⚔️ 技能系统

| 技能 | 名称 | 说明 |
|------|------|------|
| Skill0 | 大风车 | 旋转攻击周围敌人 |
| Skill1 | 岚风突击 | 快速突进攻击 |
| Skill2 | 马赫旋风踢 | 高速旋转踢击 |
| Skill3 | 坚壳弹幕击 | 发射弹幕攻击 |

技能冷却时间：`[35, 25, 30]` 秒

---

## 🛠️ 技术栈

| 技术 | 版本/说明 |
|------|-----------|
| **游戏引擎** | Cocos Creator 2.4.10 |
| **脚本语言** | JavaScript (ES6+) |
| **动画系统** | Spine 骨骼动画 |
| **数据存储** | cc.sys.localStorage (本地存储) |
| **物理系统** | Cocos Creator 内置物理引擎 |

---

## 📂 目录结构

```
热血校园威龙2.4.1/
├── assets/                        # 游戏资源目录
│   ├── scripts/                   # ⭐ 核心脚本目录（80+ 个 JS 文件）
│   │   ├── GameManager.js        # 游戏核心管理器
│   │   ├── Player.js            # 玩家角色逻辑
│   │   ├── Enemy.js             # 敌人 AI 与逻辑
│   │   ├── Consts.js            # ⭐ 最重要！所有数值配置
│   │   ├── PlayerData.js        # 玩家数据持久化
│   │   ├── SoundManager.js      # 音效管理
│   │   ├── PopUpManager.js     # 弹窗管理
│   │   ├── GuideManager.js      # 新手引导管理
│   │   ├── Rocker.js           # 摇杆控制
│   │   └── ...                # 共 80+ 个脚本
│   ├── GamePackage/             # 游戏核心资源包
│   │   ├── Spine/             # 特效骨骼动画
│   │   ├── Image/             # 图片资源
│   │   ├── Texture/           # 纹理图集
│   │   └── prefab/           # 预制体
│   ├── HallPackage/            # 大厅/主菜单资源包
│   ├── MainPackage/            # 主游戏场景资源包
│   ├── SpinePackage/           # 角色骨骼动画资源包
│   │   ├── Player/            # 玩家角色动画
│   │   ├── Enemy0~6/         # 普通敌人动画
│   │   ├── Boss0~2/          # Boss 动画
│   │   └── effect_*/          # 特效动画
│   ├── SoundPackage/           # 音效资源包
│   └── main/Scene/            # 场景文件
├── local/                      # 本地配置
├── settings/                   # 项目设置
├── project.json               # Cocos Creator 项目配置
└── README.md                # 本文件
```

---

## 🚀 快速开始

### 环境要求

- **Cocos Creator 2.4.10** (必须此版本，项目不兼容 3.x)
- **Node.js** 14.x 或更高版本
- **浏览器** (Chrome 推荐，用于预览)

### 安装步骤

1. **下载 Cocos Creator 2.4.10**
   - 访问 [Cocos 官网](https://www.cocos.com/creator-download)
   - 下载 Cocos Creator 2.4.10 版本

2. **克隆/下载本项目**
   ```bash
   git clone https://github.com/DragonTang-AI/Nekketsu.git
   # 或直接解压项目压缩包
   ```

3. **用 Cocos Creator 打开项目**
   - 启动 Cocos Creator
   - 点击「打开其他项目」
   - 选择本项目目录
   - 等待项目加载完成

4. **运行预览**
   - 点击顶部工具栏的「播放」按钮
   - 游戏将在浏览器中打开

### 构建发布

#### Web 端发布
1. 点击菜单栏「项目」→「构建发布」
2. 发布平台选择「Web Mobile」或「Web Desktop」
3. 设置发布路径（默认 `build/ `）
4. 点击「构建」→「运行」

#### 小游戏发布（抖音/微信）
1. 安装对应的小游戏支持包
2. 发布平台选择「抖音小游戏」或「微信小游戏」
3. 配置 AppID 等相关信息
4. 点击「构建」→「运行」

---

## 📝 核心文件说明

### 🔧 Consts.js（最重要！）

所有游戏数值配置都在这个文件中：

```javascript
// 敌人类型
EnemyType = {
  RedEnemy: 0,      // 红色敌人
  YellowEnemy: 1,    // 黄色敌人
  Motorcycle: 2,      // 摩托车敌人
  Boss0: 4,          // Boss 0
  // ...
}

// 玩家属性
PLAYERMAXLIFE = 250,      // 玩家最大生命值
PLAYERATTACKPOWER = 12,   // 玩家攻击力
BOSSMAXLIFE = 1800,       // Boss 最大生命值

// 技能冷却时间
maxSkillColdTime = [35, 25, 30],  // 三个技能的冷却时间（秒）

// 关卡数据（硬编码）
GAMESTEPDATA = [[...], [...], ...]  // 每关的敌人配置
```

### 🎮 GameManager.js

游戏核心管理器，负责：
- 关卡流程控制
- 敌人生成管理
- 相机移动控制
- 战斗结算

### 👤 Player.js

玩家角色逻辑，包含：
- 角色状态机（待机、移动、攻击、受击、死亡、技能等）
- 攻击判定
- 技能释放
- Buff 效果应用

### 👾 Enemy.js

敌人 AI 与逻辑，包含：
- 敌人状态机（待机、移动、攻击、受击、死亡等）
- AI 行为（Idle、NearTo、AttackPlayer、MotorTo）
- 不同敌人类型的特殊逻辑

### 💾 PlayerData.js

玩家数据持久化，负责：
- 金币、钻石、生命值存储
- 关卡通关状态
- 玩家等级与经验
- 技能解锁状态
- 引导完成状态
- 使用 `cc.sys.localStorage` 进行本地存储

---

## 🔧 二次开发指南

### 修改游戏数值

**目标**：调整玩家攻击力、敌人生命值等数值

1. 打开 `assets/scripts/Consts.js`
2. 找到对应的常量定义
3. 修改数值
4. 保存并在 Cocos Creator 中预览效果

```javascript
// 示例：提高玩家攻击力
// 修改前
PLAYERATTACKPOWER = 12,

// 修改后
PLAYERATTACKPOWER = 20,
```

### 添加新关卡

**当前限制**：关卡数据硬编码在 `Consts.js` 的 `GAMESTEPDATA` 中

**步骤**：
1. 打开 `assets/scripts/Consts.js`
2. 找到 `GAMESTEPDATA` 数组
3. 按照现有格式添加新的关卡数据

```javascript
// 新关卡数据格式示例
{
  cameraFrame: [0, 1080],           // 相机移动帧范围
  enemy: {
    type: 0,                        // 敌人类型
    data: [0, 0, 0],              // 敌人生成配置
    dir: [0, 0, 0],              // 敌人方向
    drop: [[0, 100, 0, 0, 0, 0, 0]]  // 掉落配置
  },
  enemyCreatePos: 180,             // 敌人生成位置
  timeSupport: [],                  // 定时增援
  clearSupport: [],                 // 清场后增援
  passBuffModel: s.ThreeOne        // 过关 Buff 模式
}
```

**建议**：将关卡数据外置为 JSON 文件，方便策划调整（需要修改代码支持）

### 添加新敌人类型

**步骤**：
1. 在 `Consts.js` 的 `EnemyType` 中添加新类型
2. 在 `Enemy.js` 中添加新敌人的 AI 逻辑
3. 在 Cocos Creator 编辑器中创建新敌人的预制体
4. 配置 Spine 动画资源

### 添加新 Buff 食物

**步骤**：
1. 在 `Consts.js` 的 `BuffType` 中添加新 Buff 类型
2. 在 `BUFFEFFECTDATA` 数组中添加新 Buff 的效果数据
3. 在 Cocos Creator 编辑器中创建新食物的预制体
4. 配置 Buff 动画

```javascript
// 示例：添加新 Buff
BuffType.NewBuff = 18,

BUFFEFFECTDATA = [
  // ... 现有 Buff 数据
  {
    att: "newAtt",        // 属性名
    num: 0.1,           // 数值
    up: 0.1,            // 升级数值
    desc: "新Buff描述",
    name: "新食物名称",
    ani: "buff_new"      // 动画名称
  }
]
```

### 修改 Boss 对话

**文件**：`Consts.js`

**位置**：`BOSSTALK`（战前对话）和 `BOSSDEADTALK`（死亡对话）

```javascript
BOSSTALK = [
  // Boss 0 的对话
  [
    { talkRole: 1, talkMsg: "乖乖滚回去上课。" },
    { talkRole: 0, talkMsg: "不，美沙子需要我。" },
    // ...
  ],
  // Boss 1 的对话
  // ...
]
```

---

## 🎯 代码改进建议

### 1. 将关卡数据外置

**问题**：`GAMESTEPDATA` 硬编码在 `Consts.js` 中

**改进方案**：
```javascript
// 改为从 JSON 文件加载
cc.resources.load('data/stage', cc.JsonAsset, (err, json) => {
  this.stageData = json.json;
});
```

### 2. 添加关卡编辑器

开发一个简单的关卡编辑工具，可视化配置：
- 敌人生成位置
- 敌人波次
- 相机移动路径
- Boss 战触发条件

### 3. 敌人 AI 增强

**当前状态**：敌人 AI 较简单（只有 4 种状态）

**改进方案**：
- 引入行为树（Behavior Tree）
- 添加更多 AI 状态（巡逻、躲避、召唤增援等）
- 不同敌人类型有不同的 AI 策略

### 4. 接入大模型 API

**目标**：让 Boss 的对话更智能

**方案**：
- 在对话触发时，调用大模型 API 生成对话
- 根据玩家表现动态调整对话内容
- 需要修改 `GameManager.js` 中的对话逻辑

---

## 🐛 已知问题

1. **关卡数据硬编码** - 修改关卡需要重新构建
2. **Cocos Creator 版本较旧** - 2.4.10 不是最新版本（当前最新为 3.x）
3. **敌人 AI 较简单** - 缺乏深度，容易被玩家摸清规律
4. **无自动化测试** - 缺少单元测试和集成测试

---

## 📄 许可证

本项目基于 **Cocos Creator** 开发，遵守其相关许可协议。

游戏美术资源、音效资源请确认版权归属后再用于商业用途。

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

**贡献流程**：
1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

---

## 📧 联系方式

- **电话**: +86 18195603692
- **GitHub Issues**: [提交 Issue](https://github.com/DragonTang-AI/Nekketsu/issues)

如有问题或建议，欢迎联系开发者！

---

## 🙏 致谢

- **Cocos Creator** - 优秀的游戏引擎
- **Spine** - 强大的骨骼动画工具
- 所有为本项目做出贡献的开发者

---

<div align="center">

**⭐ 如果觉得这个项目对你有帮助，请给个 Star！⭐**

</div>
