var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.GameStepType = a.PassNeed = a.GuideType = a.GuideTriggerType = void 0;
var o, i, n, s, r = e("PlayerData"),
l = e("GameManager"),
c = e("CommonApi"),
d = e("GuideManager"); (function(e) {
    e[e.GameScene_FirstFight = 0] = "GameScene_FirstFight",
    e[e.GameScene_SecondFight = 1] = "GameScene_SecondFight",
    e[e.GameScene_Buff = 2] = "GameScene_Buff"
})(o = a.GuideTriggerType || (a.GuideTriggerType = {})),
function(e) {
    e[e.Balck = 0] = "Balck",
    e[e.Control = 1] = "Control",
    e[e.NoCompelWhite = 2] = "NoCompelWhite",
    e[e.None = 3] = "None",
    e[e.FinishEffect = 4] = "FinishEffect",
    e[e.GameStep = 5] = "GameStep"
} (i = a.GuideType || (a.GuideType = {})),
function(e) {
    e[e.WaitTime = 0] = "WaitTime",
    e[e.MoveDesc = 1] = "MoveDesc",
    e[e.RightAniOver = 2] = "RightAniOver",
    e[e.KillEnemy = 3] = "KillEnemy",
    e[e.FindSkillIcon = 4] = "FindSkillIcon",
    e[e.GetSkill = 5] = "GetSkill",
    e[e.CreateEnemy = 6] = "CreateEnemy",
    e[e.UseSkill = 7] = "UseSkill",
    e[e.EnemyNear = 8] = "EnemyNear",
    e[e.PickUpWp = 9] = "PickUpWp",
    e[e.ThrowWp = 10] = "ThrowWp",
    e[e.ShowBuffNode = 11] = "ShowBuffNode",
    e[e.BackGame = 12] = "BackGame"
} (n = a.PassNeed || (a.PassNeed = {})),
function(e) {
    e[e.NextGameStep = 0] = "NextGameStep"
} (s = a.GameStepType || (a.GameStepType = {}));
var p = function() {
    function e() {
        this.fullGuideData = [{
            desc: "首次战斗",
            triggerType: o.GameScene_FirstFight,
            stepList: [{
                guideType: i.Control,
                focus: null,
                info: "首先，拖动屏幕控制人物移动",
                dialogNodePos: [0, 500],
                passNeed: n.MoveDesc,
                showDesc: !0,
                showHand: !0,
                handNodePos: [327, 125]
            },
            {
                guideType: i.FinishEffect,
                passNeed: n.RightAniOver
            },
            {
                guideType: i.GameStep,
                gameStepType: s.NextGameStep
            },
            {
                guideType: i.Control,
                focus: null,
                info: "连续点击屏幕消灭敌人",
                dialogNodePos: [0, 500],
                passNeed: n.KillEnemy
            },
            {
                guideType: i.FinishEffect
            },
            {
                guideType: i.None,
                passNeed: n.FindSkillIcon
            },
            {
                guideType: i.Control,
                focus: null,
                info: "拾取技能“马赫旋风踢”",
                dialogNodePos: [0, 500],
                passNeed: n.GetSkill
            },
            {
                guideType: i.FinishEffect
            },
            {
                guideType: i.None,
                passNeed: n.EnemyNear
            },
            {
                guideType: i.Control,
                focus: ["UILayout", "SkillNode0"],
                info: "试试马赫旋风踢的威力，点击使用技能",
                dialogNodePos: [0, 500],
                passNeed: n.UseSkill,
                pauseGame: !0,
                showHand: !0,
                handOffset: [0, 150]
            }]
        },
        {
            desc: "第二次战斗",
            triggerType: o.GameScene_SecondFight,
            stepList: [{
                guideType: i.Control,
                focus: null,
                info: "移动到垃圾桶附近后，点击屏幕任意位置拾取",
                dialogNodePos: [0, 500],
                passNeed: n.PickUpWp
            },
            {
                guideType: i.FinishEffect,
                passNeed: n.RightAniOver
            },
            {
                guideType: i.GameStep,
                gameStepType: s.NextGameStep
            },
            {
                guideType: i.Control,
                focus: null,
                info: "很好，让我们击败当前对手",
                dialogNodePos: [0, 500],
                passNeed: n.KillEnemy
            },
            {
                guideType: i.FinishEffect,
                passNeed: n.RightAniOver
            },
            {
                guideType: i.None,
                passNeed: n.EnemyNear
            },
            {
                guideType: i.Control,
                focus: ["UILayout", "ButtonThrow"],
                info: "可使用投掷按钮击飞敌人",
                dialogNodePos: [0, 500],
                passNeed: n.ThrowWp,
                pauseGame: !0,
                showHand: !0,
                handOffset: [0, 150]
            }]
        },
        {
            desc: "BUFF教程",
            triggerType: o.GameScene_Buff,
            stepList: [{
                guideType: i.Control,
                focus: ["UILayout", "PlayerHPBg", "HeadButton"],
                info: "点击国夫的头像",
                dialogNodePos: [0, 500],
                passNeed: n.ShowBuffNode,
                showHand: !0,
                handOffset: [0, 100]
            },
            {
                guideType: i.Balck,
                focus: null,
                info: "在这里,我们可以看到国夫拥有的所有BUFF",
                dialogNodePos: [0, 500],
                passNeed: n.WaitTime,
                time: 1.5,
                autoNext: !0
            },
            {
                guideType: i.Control,
                focus: ["btnGame"],
                info: "点击继续游戏",
                dialogNodePos: [0, 500],
                passNeed: n.BackGame,
                showHand: !0,
                handOffset: [0, 180]
            }]
        }],
        this.guideIndex = -1,
        this.curGuideData = null,
        this.curStep = -1,
        this.curStepPass = !1,
        this.stepTime = null,
        this.bgView = null,
        this.isPause = !1
    }
    return e.getIns = function() {
        return e._ins || (e._ins = new e),
        e._ins
    },
    e.prototype.canActiveGuide = function(e) {
        for (var t = 0; t < this.fullGuideData.length; t++) {
            var a = this.fullGuideData[t];
            if (a.triggerType == e && 0 == r.default.getIns().guideFinish[t]) {
                if (a.triggerType == o.GameScene_FirstFight && 0 == r.default.getIns().curStage) return t;
                if (a.triggerType == o.GameScene_SecondFight && 1 == r.default.getIns().curStage) return t;
                if (a.triggerType == o.GameScene_Buff) return t
            }
        }
        return - 1
    },
    e.prototype.initGuide = function(e, t) {
        this.guideIndex = e,
        this.curGuideData = this.fullGuideData[this.guideIndex],
        this.curStep = -1,
        this.stepTime = 0,
        this.bgView = t
    },
    e.prototype.changeBgView = function(e) {
        this.bgView = e,
        cc.log("changeBgView", this.bgView)
    },
    e.prototype.runNextGuide = function() {
        if ( - 1 != this.guideIndex && !(this.curStep >= 0 && 0 == this.curStepPass)) {
            this.curStep++,
            cc.log("当前教程步骤:", this.curStep),
            this.stepTime = 0,
            this.curStepPass = !1;
            var e = this.curGuideData;
            if (this.curStep >= e.stepList.length) this.finishGuide();
            else {
                var t = e.stepList[this.curStep];
                if (t.guideType == i.GameStep) {
                    switch (t.gameStepType) {
                        case s.NextGameStep:
                            l.default.getIns().guideCreateEnemy();
                    }
                    return this.curStepPass = !0,
                    void this.runNextGuide()
                }
                null == t.passNeed && (this.curStepPass = !0),
                d.default.getIns().showGuideByData(t, this.bgView)
            }
        }
    },
    e.prototype.isNeedPauseGame = function() {
        return - 1 != this.guideIndex && -1 != this.curStep && 1 == this.curGuideData.stepList[this.curStep].pauseGame
    },
    e.prototype.finishGuide = function() {
        r.default.getIns().guideFinish[this.guideIndex] = 1,
        r.default.getIns().saveData(),
        this.guideIndex = -1,
        this.curStep = -1,
        d.default.getIns().removeGuideView()
    },
    e.prototype.updateMain = function(e) {
        if ( - 1 != this.guideIndex && -1 != this.curStep) {
            this.stepTime += e;
            var t = this.curGuideData.stepList[this.curStep];
            if (t.passNeed == n.WaitTime) {
                var a = t.time || .3;
                this.stepTime >= a && (this.curStepPass = !0, t.autoNext && this.runNextGuide())
            }
        }
    },
    e.prototype.sendPassNeed = function(e, t) {
        if (void 0 === t && (t = !1), -1 != this.guideIndex && -1 != this.curStep) {
            if (this.curGuideData.stepList[this.curStep].passNeed == e && (this.curStepPass = !0, e == n.MoveDesc && (d.default.getIns().DescNode.parent = d.default.getIns().MainNode, d.default.getIns().DescNode.active = !1)), this.curStepPass || 1 == t) {
                switch (e) {
                    case n.MoveDesc:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep0, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.KillEnemy:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep1, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.GetSkill:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep2, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.UseSkill:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep3, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.ShowBuffNode:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep4, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.WaitTime:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep5, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                    break;
                    case n.BackGame:
                        c.default.getIns().logEvent(c.LogEventType.GuideStep6, "" + (!0 === r.default.getIns().getIsNewPlayer() ? 1 : 2));
                }
                return cc.log("成功发送过步骤需求", e),
                this.runNextGuide(),
                !0
            }
            return ! 1
        }
    },
    e.prototype.nextPassNeed = function() {
        return - 1 == this.guideIndex || -1 == this.curStep ? null: this.curGuideData.stepList[this.curStep].passNeed
    },
    e.prototype.isRunGuide = function() {
        return - 1 != this.guideIndex && -1 != this.curStep
    },
    e.prototype.isPauseByGuide = function() {
        return this.isPause
    },
    e.prototype.getPassNeed = function() {
        return - 1 == this.guideIndex || -1 == this.curStep ? -1 : this.curGuideData.stepList[this.curStep].passNeed
    },
    e.prototype.getCurGuideType = function() {
        return - 1 == this.guideIndex || -1 == this.curStep ? -1 : this.curGuideData.stepList[this.curStep].guideType
    },
    e._ins = null,
    e
} ();
a.default = p