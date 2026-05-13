# Hot Blood Campus Dragon 2.4.1

<div align="center">

![Version](https://img.shields.io/badge/Version-2.4.1-blue)
![Engine](https://img.shields.io/badge/Engine-Cocos%20Creator%202.4.10-orange)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Platform](https://img.shields.io/badge/Platform-Web%2FiOS%2FAndroid%2FMinigame-green)

**A hot-blooded side-scrolling beat 'em up game**

</div>

---

## 📖 Introduction

"Hot Blood Campus Dragon" is a side-scrolling beat 'em up game developed with Cocos Creator 2.4.10. Players control a student protagonist, fight through various enemies on campus, challenge powerful Bosses, and finally rescue "Meisha"!

### 🎮 Game Features

- **Exciting Combat**: Normal attacks, skill combos, item throwing, and more combat styles
- **Diverse Enemies**: 16 enemy types, each with unique behavior patterns
- **Boss Challenges**: 3 distinctive Bosses with exclusive dialogues and combat mechanics
- **Buff Food System**: 18 types of food buffs providing various attribute bonuses
- **Skill System**: 4 skill slots, unlock powerful skills by collecting food
- **Beautiful Animations**: Spine skeleton animation system for smooth and natural character movements

---

## ✨ Features

### 🎯 Core Gameplay

| Feature | Description |
|---------|-------------|
| Side-scrolling Combat | Move left/right, defeat enemies along the way |
| Multi-stage Levels | At least 5 major stages, each with multiple substages |
| Boss Battles | Boss fight at the end of each major stage with exclusive dialogue |
| Skill System | 4 skills: Pinwheel, Gale Strike, Mach Tornado Kick, Shell Barrage |
| Buff System | Defeat enemies to drop food, pick up to gain attribute bonuses |
| Stage Rating | Get ratings based on performance, unlock new content |

### 🍔 Buff Food System

There are **18 types of Buff food** in the game, providing different attribute bonuses when picked up:

| Food | Effect | Animation |
|------|--------|-----------|
| 🍖 Dagurou | Attack +10% | buff_gongji |
| 🍢 Guandongzhu | Crit Rate +10% | buff_baoji |
| 🍢 Darouchuan | Crit Damage +25% | buff_baojishanghai |
| 🥡 Take | Block Rate +5% | buff_gedanglv |
| 🍕 Pizza | Restore 10% HP | buff_huifu |
| 🍦 Xuegao | Attack Lifesteal 5% | buff_gongjixixue |
| 🍣 Sushi | Max HP +10% | buff_zuidashengming |
| 🍤 Zha Xia Wei | Skill Drop Rate +10% | buff_diaobaojilv |
| 🍩 Tianticuan | Weapon Damage +15% | buff_wuqishanghai |
| 🍦 Tianticuan | Throw Damage +15% | buff_touzhishanghai |
| 🍟 Zhashutiao | Move Speed +15% | buff_yidongsudu |
| ☕ Kabuqiluo | Damage Reduction +10% | buff_jianshang |
| 🥐 Yangjiaobao | Attack has 2.5% chance to trigger invincible shield (5s) | buff_hudun |
| 🥪 Sanmingzhi | Each combo increases attack damage | buff_lianjishanghai |

### ⚔️ Skill System

| Skill | Name | Description |
|-------|------|-------------|
| Skill0 | Pinwheel | Spin attack hitting nearby enemies |
| Skill1 | Gale Strike | Quick dash attack |
| Skill2 | Mach Tornado Kick | High-speed spinning kick |
| Skill3 | Shell Barrage | Fire barrage attack |

Skill cooldown time: `[35, 25, 30]` seconds

---

## 🛠️ Tech Stack

| Technology | Version/Description |
|------------|----------------------|
| **Game Engine** | Cocos Creator 2.4.10 |
| **Script Language** | JavaScript (ES6+) |
| **Animation System** | Spine Skeleton Animation |
| **Data Storage** | cc.sys.localStorage (local storage) |
| **Physics System** | Cocos Creator built-in physics engine |

---

## 📂 Directory Structure

```
HotBloodCampusDragon2.4.1/
├── assets/                        # Game assets directory
│   ├── scripts/                   # ⭐ Core scripts directory (80+ JS files)
│   │   ├── GameManager.js        # Game core manager
│   │   ├── Player.js            # Player character logic
│   │   ├── Enemy.js             # Enemy AI and logic
│   │   ├── Consts.js           # ⭐ MOST IMPORTANT! All numerical configs
│   │   ├── PlayerData.js        # Player data persistence
│   │   ├── SoundManager.js      # Sound effect manager
│   │   ├── PopUpManager.js     # Popup manager
│   │   ├── GuideManager.js      # Tutorial manager
│   │   ├── Rocker.js           # Joystick control
│   │   └── ...                # Total 80+ scripts
│   ├── GamePackage/             # Game core assets package
│   │   ├── Spine/             # Effect skeleton animations
│   │   ├── Image/             # Image assets
│   │   ├── Texture/           # Texture atlases
│   │   └── prefab/           # Prefabs
│   ├── HallPackage/            # Lobby/Main menu assets package
│   ├── MainPackage/            # Main game scene assets package
│   ├── SpinePackage/           # Character skeleton animation assets
│   │   ├── Player/            # Player character animations
│   │   ├── Enemy0~6/         # Normal enemy animations
│   │   ├── Boss0~2/          # Boss animations
│   │   └── effect_*/          # Effect animations
│   ├── SoundPackage/           # Sound effect assets package
│   └── main/Scene/            # Scene files
├── local/                      # Local configuration
├── settings/                   # Project settings
├── project.json               # Cocos Creator project config
├── README.md                 # Chinese documentation
├── README_EN.md              # English documentation (this file)
└── .gitignore               # Git ignore rules
```

---

## 🚀 Quick Start

### Requirements

- **Cocos Creator 2.4.10** (Must be this version, project is not compatible with 3.x)
- **Node.js** 14.x or higher
- **Browser** (Chrome recommended, for preview)

### Installation Steps

1. **Download Cocos Creator 2.4.10**
   - Visit [Cocos Official Website](https://www.cocos.com/creator-download)
   - Download Cocos Creator 2.4.10

2. **Clone/Download this project**
   ```bash
   git clone <repository-url>
   # Or extract the project archive directly
   ```

3. **Open project with Cocos Creator**
   - Launch Cocos Creator
   - Click "Open Other Project"
   - Select this project directory
   - Wait for project loading to complete

4. **Run preview**
   - Click the "Play" button in the top toolbar
   - Game will open in browser

### Build & Publish

#### Web Publishing
1. Click menu bar "Project" → "Build and Publish"
2. Select "Web Mobile" or "Web Desktop" as target platform
3. Set output path (default: `build/`)
4. Click "Build" → "Run"

#### Minigame Publishing (TikTok/WeChat)
1. Install corresponding minigame support package
2. Select "TikTok Mini Game" or "WeChat Mini Game" as target platform
3. Configure AppID and other related information
4. Click "Build" → "Run"

---

## 📝 Core Files Description

### 🔧 Consts.js (MOST IMPORTANT!)

All game numerical configurations are in this file:

```javascript
// Enemy types
EnemyType = {
  RedEnemy: 0,      // Red enemy
  YellowEnemy: 1,    // Yellow enemy
  Motorcycle: 2,     // Motorcycle enemy
  Boss0: 4,          // Boss 0
  // ...
}

// Player attributes
PLAYERMAXLIFE = 250,      // Player max HP
PLAYERATTACKPOWER = 12,   // Player attack power
BOSSMAXLIFE = 1800,       // Boss max HP

// Skill cooldown time
maxSkillColdTime = [35, 25, 30],  // Cooldown for 3 skills (seconds)

// Stage data (hard-coded)
GAMESTEPDATA = [[...], [...], ...]  // Enemy config for each stage
```

### 🎮 GameManager.js

Game core manager, responsible for:
- Stage flow control
- Enemy spawning management
- Camera movement control
- Battle settlement

### 👤 Player.js

Player character logic, including:
- Character state machine (idle, move, attack, hit, dead, skill, etc.)
- Attack detection
- Skill casting
- Buff effect application

### 👾 Enemy.js

Enemy AI and logic, including:
- Enemy state machine (idle, move, attack, hit, dead, etc.)
- AI behaviors (Idle, NearTo, AttackPlayer, MotorTo)
- Special logic for different enemy types

### 💾 PlayerData.js

Player data persistence, responsible for:
- Gold, diamond, HP storage
- Stage clear status
- Player level and EXP
- Skill unlock status
- Tutorial completion status
- Uses `cc.sys.localStorage` for local storage

---

## 🔧 Secondary Development Guide

### Modify Game Values

**Goal**: Adjust player attack, enemy HP, and other numerical values

1. Open `assets/scripts/Consts.js`
2. Find the corresponding constant definition
3. Modify the value
4. Save and preview the effect in Cocos Creator

```javascript
// Example: Increase player attack power
// Before modification
PLAYERATTACKPOWER = 12,

// After modification
PLAYERATTACKPOWER = 20,
```

### Add New Stages

**Current Limitation**: Stage data is hard-coded in `Consts.js` `GAMESTEPDATA`

**Steps**:
1. Open `assets/scripts/Consts.js`
2. Find `GAMESTEPDATA` array
3. Add new stage data according to existing format

```javascript
// New stage data format example
{
  cameraFrame: [0, 1080],           // Camera movement frame range
  enemy: {
    type: 0,                        // Enemy type
    data: [0, 0, 0],              // Enemy spawn config
    dir: [0, 0, 0],              // Enemy direction
    drop: [[0, 100, 0, 0, 0, 0, 0]]  // Drop config
  },
  enemyCreatePos: 180,             // Enemy spawn position
  timeSupport: [],                  // Timed reinforcements
  clearSupport: [],                 // Spawn after clearing
  passBuffModel: s.ThreeOne        // Stage clear buff mode
}
```

**Recommendation**: Externalize stage data to JSON files for easier planning adjustments (requires code modification to support)

### Add New Enemy Types

**Steps**:
1. Add new type in `Consts.js` `EnemyType`
2. Add new enemy AI logic in `Enemy.js`
3. Create new enemy prefab in Cocos Creator editor
4. Configure Spine animation assets

### Add New Buff Food

**Steps**:
1. Add new Buff type in `Consts.js` `BuffType`
2. Add new Buff effect data in `BUFFEFFECTDATA` array
3. Create new food prefab in Cocos Creator editor
4. Configure Buff animation

```javascript
// Example: Add new Buff
BuffType.NewBuff = 18,

BUFFEFFECTDATA = [
  // ... existing Buff data
  {
    att: "newAtt",        // Attribute name
    num: 0.1,           // Value
    up: 0.1,            // Upgrade value
    desc: "New Buff description",
    name: "New Food Name",
    ani: "buff_new"      // Animation name
  }
]
```

### Modify Boss Dialogues

**File**: `Consts.js`

**Location**: `BOSSTALK` (pre-battle dialogue) and `BOSSDEADTALK` (death dialogue)

```javascript
BOSSTALK = [
  // Boss 0 dialogue
  [
    { talkRole: 1, talkMsg: "Go back to class obediently." },
    { talkRole: 0, talkMsg: "No, Meisha needs me." },
    // ...
  ],
  // Boss 1 dialogue
  // ...
]
```

---

## 🎯 Code Improvement Suggestions

### 1. Externalize Stage Data

**Problem**: `GAMESTEPDATA` is hard-coded in `Consts.js`

**Improvement Plan**:
```javascript
// Change to load from JSON file
cc.resources.load('data/stage', cc.JsonAsset, (err, json) => {
  this.stageData = json.json;
});
```

### 2. Add Stage Editor

Develop a simple stage editing tool for visual configuration:
- Enemy spawn positions
- Enemy waves
- Camera movement paths
- Boss battle trigger conditions

### 3. Enhance Enemy AI

**Current State**: Enemy AI is relatively simple (only 4 states)

**Improvement Plan**:
- Introduce Behavior Tree
- Add more AI states (patrol, dodge, call reinforcements, etc.)
- Different enemy types have different AI strategies

### 4. Integrate LLM API

**Goal**: Make Boss dialogues more intelligent

**Plan**:
- When dialogue is triggered, call LLM API to generate dialogue
- Dynamically adjust dialogue content based on player performance
- Requires modifying dialogue logic in `GameManager.js`

---

## 🐛 Known Issues

1. **Stage data hard-coded** - Modifying stages requires re-building
2. **Cocos Creator version is old** - 2.4.10 is not the latest version (current latest is 3.x)
3. **Enemy AI is simple** - Lacks depth, easily figured out by players
4. **No automated testing** - Lacks unit tests and integration tests

---

## 📄 License

This project is developed based on **Cocos Creator** and complies with its relevant license agreement.

Please confirm copyright ownership of game art assets and sound assets before using them for commercial purposes.

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

**Contribution Workflow**:
1. Fork this project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Submit Pull Request

---

## 📧 Contact

If you have any questions or suggestions, please submit an Issue or contact the developer.

---

## 🙏 Acknowledgments

- **Cocos Creator** - Excellent game engine
- **Spine** - Powerful skeleton animation tool
- All developers who contributed to this project

---

<div align="center">

**⭐ If you find this project helpful, please give it a Star! ⭐**

</div>
