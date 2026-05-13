var e = require;
var t = module;
var a = exports;
var o, i, n, s;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.BuffModel = a.BuffType = a.SkillType = a.DropType = a.DamageType = a.AutoPassState = a.RoleInfoType = a.RoleWpType = a.EnemyType = a.RoleTeam = a.AttackEffectType = a.VideoType = void 0,
function(e) {
    e[e.ResultDoubleGet = 0] = "ResultDoubleGet",
    e[e.ResultRelive = 1] = "ResultRelive",
    e[e.TodaySupplyGold = 2] = "TodaySupplyGold",
    e[e.ExtraGoldGet = 3] = "ExtraGoldGet",
    e[e.FinishPass = 4] = "FinishPass",
    e[e.SkillUnlock = 5] = "SkillUnlock",
    e[e.BuffOne = 6] = "BuffOne",
    e[e.BuffAll = 7] = "BuffAll",
    e[e.BuffChange = 8] = "BuffChange"
} (a.VideoType || (a.VideoType = {})),
function(e) {
    e[e.Sword1 = 0] = "Sword1",
    e[e.FootEffect = 1] = "FootEffect",
    e[e.AxeEffect = 2] = "AxeEffect",
    e[e.SpearEffect1 = 3] = "SpearEffect1",
    e[e.SpearEffect2 = 4] = "SpearEffect2",
    e[e.FanEffect = 5] = "FanEffect",
    e[e.BallEffect = 6] = "BallEffect",
    e[e.BumpEffect = 7] = "BumpEffect",
    e[e.FlowEffect = 8] = "FlowEffect",
    e[e.PowerUpEffect = 9] = "PowerUpEffect",
    e[e.PowerUpEffect2 = 10] = "PowerUpEffect2",
    e[e.LaserEffect = 11] = "LaserEffect",
    e[e.BigLaserEffect = 12] = "BigLaserEffect",
    e[e.LaunchEffect = 13] = "LaunchEffect",
    e[e.GrenadeEffect = 14] = "GrenadeEffect",
    e[e.LandEffect = 15] = "LandEffect",
    e[e.LandEffect2 = 16] = "LandEffect2",
    e[e.SkillRocketEffect = 17] = "SkillRocketEffect"
} (a.AttackEffectType || (a.AttackEffectType = {})),
function(e) {
    e[e.Player = 0] = "Player",
    e[e.Enemy = 1] = "Enemy"
} (a.RoleTeam || (a.RoleTeam = {})),
function(e) {
    e[e.RedEnemy = 0] = "RedEnemy",
    e[e.YellowEnemy = 1] = "YellowEnemy",
    e[e.Motorcycle = 2] = "Motorcycle",
    e[e.Biker = 3] = "Biker",
    e[e.Boss0 = 4] = "Boss0",
    e[e.Boss1 = 5] = "Boss1",
    e[e.Boss2 = 6] = "Boss2",
    e[e.RedEnemyWp = 7] = "RedEnemyWp",
    e[e.RedEnemyDoubleWp = 8] = "RedEnemyDoubleWp",
    e[e.YellowEnemyWp = 9] = "YellowEnemyWp",
    e[e.YellowEnemyDoubleWp = 10] = "YellowEnemyDoubleWp",
    e[e.WhiteEnemy = 11] = "WhiteEnemy",
    e[e.SchoolGirl = 12] = "SchoolGirl",
    e[e.SchoolGirlDoubleWp = 13] = "SchoolGirlDoubleWp",
    e[e.BikerDoubleWp = 14] = "BikerDoubleWp",
    e[e.Sumo = 15] = "Sumo"
} (a.EnemyType || (a.EnemyType = {})),
function(e) {
    e[e.NoWp = 0] = "NoWp",
    e[e.Wp = 1] = "Wp",
    e[e.DoubleWp = 2] = "DoubleWp"
} (a.RoleWpType || (a.RoleWpType = {})),
function(e) {
    e[e.Life = 0] = "Life",
    e[e.Attack = 1] = "Attack",
    e[e.Defense = 2] = "Defense",
    e[e.Crit = 3] = "Crit",
    e[e.Block = 4] = "Block",
    e[e.Level = 5] = "Level",
    e[e.Power = 6] = "Power"
} (a.RoleInfoType || (a.RoleInfoType = {})),
function(e) {
    e[e.NoPass = 0] = "NoPass",
    e[e.Passing = 1] = "Passing",
    e[e.Passed = 2] = "Passed"
} (a.AutoPassState || (a.AutoPassState = {})),
function(e) {
    e[e.Normal = 0] = "Normal",
    e[e.Crit = 1] = "Crit",
    e[e.Block = 2] = "Block",
    e[e.Cure = 3] = "Cure"
} (a.DamageType || (a.DamageType = {})),
function(e) {
    e[e.Skill0 = 0] = "Skill0",
    e[e.Skill1 = 1] = "Skill1",
    e[e.Skill2 = 2] = "Skill2",
    e[e.Skill3 = 3] = "Skill3",
    e[e.Food0 = 4] = "Food0",
    e[e.Food1 = 5] = "Food1",
    e[e.Food2 = 6] = "Food2",
    e[e.Weapon0 = 7] = "Weapon0",
    e[e.Weapon1 = 8] = "Weapon1"
} (o = a.DropType || (a.DropType = {})),
function(e) {
    e[e.Skill0 = 0] = "Skill0",
    e[e.Skill1 = 1] = "Skill1",
    e[e.Skill2 = 2] = "Skill2",
    e[e.Skill3 = 3] = "Skill3",
    e[e.MaxNum = 4] = "MaxNum"
} (i = a.SkillType || (a.SkillType = {})),
function(e) {
    e[e.Dagurou = 0] = "Dagurou",
    e[e.Guandongzhu = 1] = "Guandongzhu",
    e[e.Darouchuan = 2] = "Darouchuan",
    e[e.Take = 3] = "Take",
    e[e.Pisa = 4] = "Pisa",
    e[e.Xuegao = 5] = "Xuegao",
    e[e.Shousi = 6] = "Shousi",
    e[e.Zhaxiawei = 7] = "Zhaxiawei",
    e[e.Tiantianquan = 8] = "Tiantianquan",
    e[e.Tiantong = 9] = "Tiantong",
    e[e.Zhashutiao = 10] = "Zhashutiao",
    e[e.Kabuqiluo = 11] = "Kabuqiluo",
    e[e.Yangjiaobao = 12] = "Yangjiaobao",
    e[e.Sanmingzhi = 13] = "Sanmingzhi",
    e[e.Skill0 = 14] = "Skill0",
    e[e.Skill1 = 15] = "Skill1",
    e[e.Skill2 = 16] = "Skill2",
    e[e.Skill3 = 17] = "Skill3",
    e[e.MaxNum = 18] = "MaxNum"
} (n = a.BuffType || (a.BuffType = {})),
function(e) {
    e[e.ThreeOne = 0] = "ThreeOne",
    e[e.ThreeOneAll = 1] = "ThreeOneAll",
    e[e.One = 2] = "One"
} (s = a.BuffModel || (a.BuffModel = {}));
var r = function() {
    function e() {}
    return e.SAVEDATANAME = "HotBloodUserData01",
    e.SAVEDAYDATANAME = "HotBloodUserNewDay01",
    e.PLAYERATTACKMAXTIME = .5,
    e.PLAYERATTACKFRAME = 130,
    e.BOSSATTACKFRAME = 540,
    e.PLAYERATTACKNEARSPEED = 2e3,
    e.ENEMYATTACKFRAME = [[140, 140], [140, 140], [140, 140], [300, 300], [240, 540], [360, 860], [260, 540], [250, 250], [250, 400], [250, 250], [250, 400], [180, 180], [180, 180], [250, 400], [250, 400], [300, 650]],
    e.ENEMYGOLDEXP = [[10, 10], [10, 10], [0, 0], [30, 30], [400, 400], [600, 600], [800, 800], [10, 10], [10, 10], [10, 10], [10, 10], [30, 30], [30, 30], [30, 30], [30, 30], [50, 50]],
    e.EnemyInfo = [[420, 18, 14, 84, 4, 3], [600, 13, 10, 120, 3, 2], [24e3, 25, 20, 4800, 5, 4], [720, 19, 15, 144, 4, 3], [3360, 40, 32, 672, 8, 6], [6e3, 56, 45, 1200, 11, 9], [18e3, 90, 72, 3600, 18, 14], [360, 18, 14, 72, 4, 3], [360, 9, 7, 72, 2, 1], [540, 13, 10, 108, 3, 2], [540, 7, 6, 108, 1, 1], [960, 29, 23, 192, 6, 5], [780, 24, 19, 156, 5, 4], [780, 12, 10, 156, 2, 2], [780, 12, 10, 156, 2, 2], [960, 36, 29, 192, 7, 6]],
    e.PLAYERATTRES = [[1, 1, 1.5, 2, 3], [2, 5], [2, 4], [2, 4], [2, 4]],
    e.EnemyAttackRes = [[[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[.15, .6], [.25, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]], [[1, 1], [1, 1]]],
    e.EnemyMoveSpeed = [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
    e.SHANTIANACK1 = .15,
    e.GOLDPERNUMBER = 10,
    e.MotorWaitTime = 2,
    e.MotorMoveSpeed = 1e3,
    e.MotorPassPlayerDis = 1e3,
    e.MotorMoveMaxNumber = 1,
    e.SumoDashReadyTime = 1.8,
    e.SumoDashSpeed = 1500,
    e.SumoDashTime = .7,
    e.CANATTACKOFFY = 60,
    e.PLAYERATKCOLDTIME = .3,
    e.ROLEHANDY = 150,
    e.ROLEHANDHEIGHT = 45,
    e.THROWSPEED = 1500,
    e.BUFFUNLOCKED = [[n.Dagurou, n.Guandongzhu, n.Darouchuan, n.Pisa, n.Sanmingzhi, n.Kabuqiluo], [n.Guandongzhu, n.Darouchuan, n.Take, n.Pisa, n.Xuegao, n.Shousi, n.Zhaxiawei, n.Yangjiaobao, n.Sanmingzhi], [n.Dagurou, n.Guandongzhu, n.Darouchuan, n.Pisa, n.Shousi, n.Tiantianquan, n.Tiantong, n.Zhashutiao, n.Kabuqiluo]],
    e.BUFFEFFECTDATA = [{
        att: "attack",
        num: .1,
        up: .1,
        desc: "攻击增加XX%",
        name: "大骨肉",
        ani: "buff_gongji"
    },
    {
        att: "crit",
        num: .1,
        up: .1,
        desc: "暴击率增加XX%",
        name: "关东煮",
        ani: "buff_baoji"
    },
    {
        att: "critPower",
        num: .25,
        up: .25,
        desc: "暴击伤害增加XX%",
        name: "大肉串",
        ani: "buff_baojishanghai"
    },
    {
        att: "block",
        num: .05,
        up: .05,
        desc: "格挡率增加XX%",
        name: "塔克",
        ani: "buff_gedanglv"
    },
    {
        att: "cureLife",
        num: .1,
        up: .2,
        desc: "恢复XX%的血量",
        name: "披萨",
        ani: "buff_huifu"
    },
    {
        att: "attackCure",
        num: .05,
        up: .05,
        desc: "攻击有10%概率吸收XX%的血量",
        name: "雪糕",
        ani: "buff_gongjixixue"
    },
    {
        att: "maxLife",
        num: .1,
        up: .15,
        desc: "增加XX%的最大生命值",
        name: "寿司",
        ani: "buff_zuidashengming"
    },
    {
        att: "doubleDrop",
        num: .1,
        up: .1,
        desc: "怪物掉落技能的概率增加XX%",
        name: "炸虾尾",
        ani: "buff_diaobaojilv"
    },
    {
        att: "weaponAttack",
        num: .15,
        up: .15,
        desc: "道具攻击伤害增加XX%",
        name: "甜甜圈",
        ani: "buff_wuqishanghai"
    },
    {
        att: "throwAttack",
        num: .15,
        up: .25,
        desc: "投掷道具伤害增加XX%",
        name: "甜筒",
        ani: "buff_touzhishanghai"
    },
    {
        att: "moveSpeed",
        num: .15,
        up: .15,
        desc: "主角移动速度增加XX%",
        name: "炸薯条",
        ani: "buff_yidongsudu"
    },
    {
        att: "damageDel",
        num: .1,
        up: .1,
        desc: "受到伤害减少XX%",
        name: "卡布奇洛",
        ani: "buff_jianshang"
    },
    {
        att: "shield",
        num: .025,
        up: .025,
        desc: "攻击有XX%的概率触发无敌护盾,持续5秒",
        name: "羊角包",
        ani: "buff_hudun"
    },
    {
        att: "comboAttack",
        num: .0025,
        up: .0025,
        desc: "每次连击均可提升XX%攻击伤害",
        name: "三明治",
        ani: "buff_lianjishanghai"
    },
    {
        att: "skill",
        num: 0,
        up: .1,
        desc: "获得技能“大风车”",
        name: "大风车",
        ani: ""
    },
    {
        att: "skill",
        num: 1,
        up: .1,
        desc: "获得技能“岚风突击”",
        name: "岚风突击",
        ani: ""
    },
    {
        att: "skill",
        num: 2,
        up: .1,
        desc: "获得技能“马赫旋风踢”",
        name: "马赫踢",
        ani: ""
    },
    {
        att: "skill",
        num: 3,
        up: .1,
        desc: "获得技能“坚壳弹幕击”",
        name: "弹幕击",
        ani: ""
    }],
    e.PLAYERGETSIZE = new cc.Size(120, 60),
    e.DROPSIZE = new cc.Size(120, 120),
    e.DROPWPSIZE = new cc.Rect( - 90, -40, 180, 160),
    e.GrenadeDis = 860,
    e.GrenadeBombSize = 160,
    e.ROLEBYATTACKSIZE = new cc.Size(112 * 1.6, 272),
    e.ROLEMOVEFRAME = [ - 460, 240],
    e.ENEMYBIRTHY = [0, -180, 180, -360, 360],
    e.BYHITFLYMOVESPEED = 300,
    e.BYHITFLYUPSPEED = 200,
    e.ENEMYMAXLIFE = 100,
    e.PLAYERMAXLIFE = 250,
    e.BOSSMAXLIFE = 1800,
    e.ENEMYATTACKPOWER = 7,
    e.PLAYERATTACKPOWER = 12,
    e.BOSSATTACKPOWER = 70,
    e.CAUGHTFLYTIME = .5,
    e.DAMAGEOFFY = [180, 180, 200],
    e.SCENESIZE = new cc.Size(1080, 1920),
    e.MAINCAMERASPEED = 1e3,
    e.DROPGOLDFULLTIME = 1.4,
    e.DROPGOLDFLYTIME = .35,
    e.PLAYEREXP = [200, 300, 400, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 1e5],
    e.ROLELVUPXX = [150, 20, 16],
    e.PASSSTAGETIME = 1800,
    e.PASSSTAGEGOLD = [500, 1e3, 1500],
    e.ENEMYLEVEL = [[0, 0], [1, 0], [2, 0]],
    e.IDLEMOVEMAXNUMBER = 3,
    e.FOODADDLIFE = [.15, .1, .05],
    e.PLAYERSHIELDTIME = 3,
    e.PLAYERSHIELDTIME2 = 5,
    e.BOOMFLYSPEEDY = [0, 600],
    e.BOOMORGX = 100,
    e.BOOMORGY = 300,
    e.BOOMLANDY = 30,
    e.GAMEG = 1100,
    e.ENEMYTHROWTIME = 20,
    e.ENEMYTHROWMINDIS = 300,
    e.PLAYERDOUBLEINDEX = 3,
    e.THROWWPUP = 6,
    e.UNLOCKSTAGEDROP = [[i.Skill0], [i.Skill3], [i.Skill3]],
    e.DROPDESC = ["抓起对手旋转", "跳起抱摔对手", "旋转自身击飞对手", "跳起使用木箱砸击对手", "", "", "", "", "", "", ""],
    e.GAMESTEPDATA = [[{
        cameraFrame: [0, 1080],
        enemy: {
            type: 0,
            data: [0],
            dir: [0],
            drop: [[0, 0, 100, 0, 0, 0, 0]],
            guideEnemy: !0
        },
        enemyCreatePos: 720,
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [0, 1620],
        enemy: {
            type: 0,
            data: [1, 1, 1, 0, 0, 0],
            dir: [0, 0, 0, 0, 0, 0],
            drop: [[0, 100, 0, 0, 0, 0, 0]]
        },
        enemyCreatePos: 1170,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOne
    },
    {
        cameraFrame: [0, 2160],
        enemy: {
            type: 0,
            data: [11],
            dir: [0],
            drop: [[0, 0, 100, 0, 0, 0, 0]]
        },
        enemyCreatePos: 1890,
        timeSupport: [],
        clearSupport: [{
            enemy: {
                type: 0,
                data: [9, 9, 9, 7, 7, 7],
                dir: [1, 0, 1, 0, 1, 0],
                drop: [[0, 0, 0, 0, 0, 0, 100]]
            }
        }],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [0, 3240],
        enemy: {
            type: 0,
            data: [1, 0, 1, 0],
            dir: [0, 0, 0, 0],
            drop: [[0, 0, 0, 0, 0, 100, 0]]
        },
        enemyCreatePos: 2430,
        timeSupport: [{
            time: 10,
            enemy: {
                type: 0,
                data: [9, 7, 9, 7],
                dir: [1, 1, 1, 1],
                drop: [[0, 100, 0, 0, 0, 0, 0]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [1620, 4860],
        enemy: {
            type: 0,
            data: [4],
            dir: [0],
            boss: !0
        },
        enemyCreatePos: 3510,
        timeSupport: [{
            time: 15,
            enemy: {
                type: 0,
                data: [7, 1, 7],
                dir: [0, 0, 0],
                drop: [[0, 50, 50, 0, 0, 0, 0]]
            }
        },
        {
            time: 30,
            enemy: {
                type: 0,
                data: [0, 9, 0],
                dir: [1, 1, 1],
                drop: [[0, 0, 0, 0, 0, 0, 100]]
            }
        },
        {
            time: 45,
            enemy: {
                type: 0,
                data: [7, 1, 7],
                dir: [0, 0, 0],
                drop: [[0, 50, 50, 0, 0, 0, 0]]
            }
        },
        {
            time: 60,
            enemy: {
                type: 0,
                data: [0, 9, 0],
                dir: [1, 1, 1],
                drop: [[0, 0, 0, 0, 0, 0, 100]]
            }
        },
        {
            time: 75,
            enemy: {
                type: 0,
                data: [7, 1, 7],
                dir: [0, 0, 0],
                drop: [[0, 50, 50, 0, 0, 0, 0]]
            }
        },
        {
            time: 90,
            enemy: {
                type: 0,
                data: [0, 9, 0],
                dir: [1, 1, 1],
                drop: [[0, 0, 0, 0, 0, 0, 100]]
            }
        },
        {
            time: 105,
            enemy: {
                type: 0,
                data: [7, 1, 7],
                dir: [0, 0, 0],
                drop: [[0, 50, 50, 0, 0, 0, 0]]
            }
        }],
        clearSupport: []
    }], [{
        cameraFrame: [0, 1080],
        enemy: {
            type: 0,
            data: [9],
            dir: [0],
            drop: []
        },
        enemyCreatePos: 180,
        dropData: [{
            type: o.Weapon1,
            x: 140,
            y: -60
        }],
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [0, 1620],
        enemy: {
            type: 0,
            data: [7, 7, 7],
            dir: [0, 0, 0],
            drop: [[100, 0, 0, 0, 0, 0, 0]]
        },
        dropData: [{
            type: o.Weapon1,
            x: 1560,
            y: -350
        },
        {
            type: o.Weapon1,
            x: 3430,
            y: 100
        },
        {
            type: o.Weapon1,
            x: 5590,
            y: -350
        },
        {
            type: o.Weapon1,
            x: 7750,
            y: -350
        }],
        enemyCreatePos: 1170,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOne
    },
    {
        cameraFrame: [0, 2160],
        enemy: {
            type: 0,
            data: [2, 2],
            dir: [0, 0],
            drop: []
        },
        enemyCreatePos: 1890,
        timeSupport: [{
            time: 5,
            enemy: {
                type: 0,
                data: [9, 9, 7, 7],
                dir: [0, 0, 0, 0],
                drop: [[50, 0, 50, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 100]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.ThreeOne
    },
    {
        cameraFrame: [0, 3240],
        enemy: {
            type: 0,
            data: [3, 3, 3, 3],
            dir: [0, 0, 0, 0]
        },
        enemyCreatePos: 2430,
        timeSupport: [{
            time: 5,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [1, 1],
                drop: [[50, 0, 50, 0, 0, 0, 0]]
            }
        }],
        clearSupport: []
    },
    {
        cameraFrame: [1080, 4320],
        enemy: {
            type: 0,
            data: [2, 2, 2],
            dir: [0, 0, 0],
            drop: [[0, 100, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 100, 0]]
        },
        enemyCreatePos: 3510,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [2160, 5400],
        enemy: {
            type: 0,
            data: [4],
            dir: [0],
            boss: !1,
            drop: [100, 0, 0, 0, 0, 0, 0]
        },
        enemyCreatePos: 4590,
        timeSupport: [{
            time: 10,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        },
        {
            time: 30,
            enemy: {
                type: 0,
                data: [3, 3, 3],
                dir: [1, 1, 1],
                drop: [[40, 30, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 100, 0]]
            }
        },
        {
            time: 40,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        },
        {
            time: 50,
            enemy: {
                type: 0,
                data: [3, 3, 3],
                dir: [1, 1, 1],
                drop: [[40, 30, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 100, 0]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.One
    },
    {
        cameraFrame: [3240, 6480],
        enemy: {
            type: 0,
            data: [3, 3, 3, 3, 7, 7],
            dir: [0, 0, 0, 0, 1, 1]
        },
        enemyCreatePos: 5670,
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [4320, 7560],
        enemy: {
            type: 0,
            data: [2, 2, 2],
            dir: [0, 0, 0],
            drop: [100, 0, 0, 0, 0, 0, 0]
        },
        enemyCreatePos: 6750,
        timeSupport: [{
            time: 5,
            enemy: {
                type: 0,
                data: [3, 3, 3, 3],
                dir: [1, 1, 1, 1],
                drop: [[0, 0, 0, 0, 100, 0, 0]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.One
    },
    {
        cameraFrame: [5400, 8640],
        enemy: {
            type: 0,
            data: [7, 7, 9, 9, 2, 2],
            dir: [0, 0, 0, 0, 1, 1],
            drop: [[30, 40, 30, 0, 0, 0, 0], [30, 30, 40, 0, 0, 0, 0]]
        },
        enemyCreatePos: 7830,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [7020, 10260],
        enemy: {
            type: 0,
            data: [5],
            boss: !0
        },
        enemyCreatePos: 8910,
        timeSupport: [{
            time: 10,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        },
        {
            time: 30,
            enemy: {
                type: 0,
                data: [7, 7, 7],
                dir: [1, 1, 1],
                drop: [[40, 50, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 50,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        },
        {
            time: 70,
            enemy: {
                type: 0,
                data: [9, 9, 9],
                dir: [1, 1, 1],
                drop: [[40, 30, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 90,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        },
        {
            time: 110,
            enemy: {
                type: 0,
                data: [7, 7, 7],
                dir: [1, 1, 1],
                drop: [[40, 30, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 130,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0]]
            }
        }],
        clearSupport: []
    }], [{
        cameraFrame: [0, 1080],
        enemy: {
            type: 0,
            data: [13, 13],
            dir: [0, 0],
            drop: [[0, 0, 0, 100, 0, 0, 0]]
        },
        enemyCreatePos: 180,
        dropData: [{
            type: o.Weapon1,
            x: 90,
            y: -350
        },
        {
            type: o.Weapon0,
            x: 1700,
            y: 100
        },
        {
            type: o.Weapon1,
            x: 3510,
            y: -350
        },
        {
            type: o.Weapon0,
            x: 3810,
            y: 100
        },
        {
            type: o.Weapon1,
            x: 5770,
            y: -350
        },
        {
            type: o.Weapon0,
            x: 7830,
            y: 100
        },
        {
            type: o.Weapon1,
            x: 9990,
            y: -350
        },
        {
            type: o.Weapon0,
            x: 10600,
            y: 100
        }],
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [0, 1620],
        enemy: {
            type: 0,
            data: [13, 1, 13, 1],
            dir: [0, 0, 0, 0],
            drop: [0, 100, 0, 0, 0, 0, 0]
        },
        enemyCreatePos: 1170,
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [0, 2160],
        enemy: {
            type: 0,
            data: [15, 15],
            dir: [0, 0]
        },
        enemyCreatePos: 1890,
        timeSupport: [{
            time: 5,
            enemy: {
                type: 0,
                data: [1, 1, 1, 1],
                dir: [1, 0, 1, 0],
                drop: [[0, 0, 0, 100, 0, 0, 0], [0, 0, 0, 0, 0, 100, 0]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.ThreeOne
    },
    {
        cameraFrame: [0, 3240],
        enemy: {
            type: 0,
            data: [11, 11, 11],
            dir: [0, 0, 1],
            drop: [[40, 0, 0, 30, 0, 0, 0], [0, 0, 0, 0, 50, 50, 0]]
        },
        enemyCreatePos: 2430,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.One
    },
    {
        cameraFrame: [1080, 4320],
        enemy: {
            type: 0,
            data: [15, 15],
            dir: [0, 1]
        },
        enemyCreatePos: 3510,
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [2160, 5400],
        enemy: {
            type: 0,
            data: [15, 11, 15, 11, 15, 11],
            dir: [0, 0, 1, 1, 0, 1],
            drop: [[0, 100, 0, 0, 0, 0, 0], [0, 0, 0, 0, 30, 40, 40]]
        },
        enemyCreatePos: 4590,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [3240, 6480],
        enemy: {
            type: 0,
            data: [5],
            boss: !1
        },
        enemyCreatePos: 5670,
        timeSupport: [{
            time: 10,
            enemy: {
                type: 0,
                data: [13, 13, 13],
                dir: [0, 0, 0],
                drop: [[40, 30, 30, 0, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.One
    },
    {
        cameraFrame: [4320, 7560],
        enemy: {
            type: 0,
            data: [11, 11, 13, 13, 13, 13],
            dir: [0, 0, 1, 1, 1, 1],
            drop: [[30, 20, 20, 30, 0, 0, 0]]
        },
        enemyCreatePos: 6750,
        timeSupport: [],
        clearSupport: []
    },
    {
        cameraFrame: [5400, 8640],
        enemy: {
            type: 0,
            data: [8, 8, 10, 10],
            dir: [0, 1, 0, 1],
            drop: [[0, 100, 0, 0, 0, 0, 0]]
        },
        enemyCreatePos: 7830,
        timeSupport: [],
        clearSupport: [{
            enemy: {
                type: 0,
                data: [15, 15],
                drop: [[0, 0, 0, 0, 40, 30, 30]]
            }
        }],
        passBuffModel: s.ThreeOne
    },
    {
        cameraFrame: [6480, 9720],
        enemy: {
            type: 0,
            data: [11, 11, 11],
            dir: [0, 0, 0],
            drop: [[50, 0, 50, 0, 0, 0, 0]]
        },
        enemyCreatePos: 8910,
        timeSupport: [{
            time: 5,
            enemy: {
                type: 0,
                data: [13, 13],
                drop: [[0, 0, 0, 100, 0, 0, 0]]
            }
        }],
        clearSupport: [],
        passBuffModel: s.ThreeOneAll
    },
    {
        cameraFrame: [7560, 10800],
        enemy: {
            type: 0,
            data: [11, 11, 11, 13, 13, 13],
            dir: [0, 0, 0, 1, 1, 1],
            drop: [[0, 0, 0, 0, 50, 50, 0], [0, 100, 0, 0, 0, 0, 0], [30, 0, 30, 40, 0, 0, 0]]
        },
        enemyCreatePos: 9990,
        timeSupport: [],
        clearSupport: [],
        passBuffModel: s.One
    },
    {
        cameraFrame: [9180, 12420],
        enemy: {
            type: 0,
            data: [6],
            boss: !0
        },
        enemyCreatePos: 11070,
        timeSupport: [{
            time: 10,
            enemy: {
                type: 0,
                data: [3, 3, 3],
                dir: [0, 0, 0],
                drop: [[30, 20, 20, 30, 0, 0, 0]]
            }
        },
        {
            time: 30,
            enemy: {
                type: 0,
                data: [11, 11, 11],
                dir: [1, 1, 1],
                drop: [[30, 20, 20, 30, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 50,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [0, 0],
                drop: [[30, 20, 20, 30, 0, 0, 0]]
            }
        },
        {
            time: 70,
            enemy: {
                type: 0,
                data: [11, 11, 11],
                dir: [1, 1, 1],
                drop: [[30, 20, 20, 30, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 90,
            enemy: {
                type: 0,
                data: [3, 3, 3],
                dir: [0, 0, 0],
                drop: [[30, 20, 20, 20, 0, 0, 0]]
            }
        },
        {
            time: 110,
            enemy: {
                type: 0,
                data: [2, 2],
                dir: [1, 1],
                drop: [[30, 20, 20, 20, 0, 0, 0], [0, 0, 0, 0, 0, 50, 50]]
            }
        },
        {
            time: 130,
            enemy: {
                type: 0,
                data: [11, 11, 11],
                dir: [0, 0, 0],
                drop: [[30, 20, 20, 20, 0, 0, 0]]
            }
        }],
        clearSupport: []
    }]],
    e.BOSSTALK = [[{
        talkRole: 1,
        talkMsg: "乖乖滚回去上课。"
    },
    {
        talkRole: 0,
        talkMsg: "不，美沙子需要我。"
    },
    {
        talkRole: 1,
        talkMsg: "再不回去，可别怪我不客气了。"
    },
    {
        talkRole: 0,
        talkMsg: "那就来吧。"
    }], [{
        talkRole: 1,
        talkMsg: "就是你吗，热血新任的番长。"
    },
    {
        talkRole: 0,
        talkMsg: "走开，长腿毛的大叔。"
    },
    {
        talkRole: 1,
        talkMsg: "没眼力的家伙~ 见识一下老娘的厉害。"
    },
    {
        talkRole: 0,
        talkMsg: "还差的远呢。"
    }], [{
        talkRole: 1,
        talkMsg: "我才是最强的番长。"
    },
    {
        talkRole: 0,
        talkMsg: "小子，美沙子在哪"
    },
    {
        talkRole: 1,
        talkMsg: "跪下来求我，说不定我就大发慈悲告诉你了。"
    },
    {
        talkRole: 0,
        talkMsg: "想都别想！！！"
    }]],
    e.BOSSDEADTALK = [[{
        talkRole: 1,
        talkMsg: "可恶的不良，咳..咳..咳"
    },
    {
        talkRole: 0,
        talkMsg: "不要当我的路，美沙子在等着我"
    },
    {
        talkRole: 1,
        talkMsg: "美沙子？ 美沙子是谁？"
    },
    {
        talkRole: 0,
        talkMsg: "可恶！"
    }], [{
        talkRole: 1,
        talkMsg: "可恶，老娘的美貌比不上那个丫头片子吗"
    },
    {
        talkRole: 0,
        talkMsg: "呕...呕..."
    },
    {
        talkRole: 1,
        talkMsg: "别想让老娘告诉你她在哪"
    },
    {
        talkRole: 0,
        talkMsg: "我还没问呢"
    }], [{
        talkRole: 1,
        talkMsg: "热血的番长，就这点本事吗"
    },
    {
        talkRole: 0,
        talkMsg: "小子，你输了"
    },
    {
        talkRole: 1,
        talkMsg: "哈哈哈哈，我还会再回来的"
    },
    {
        talkRole: 0,
        talkMsg: "等等，告诉我美沙子在哪！！！"
    }]],
    e.SMALLBOSSTALK = [[{
        talkRole: 1,
        talkMsg: "乖乖滚回去上课222。"
    },
    {
        talkRole: 0,
        talkMsg: "美沙子需要我111。"
    }]],
    e
} ();
a.default = r