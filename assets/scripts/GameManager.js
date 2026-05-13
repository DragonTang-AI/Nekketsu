var e = require;
var t = module;
var a = exports;
var o, i = this && this.__extends || (o = function(e, t) {
    return (o = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(e, t) {
        e.__proto__ = t
    } ||
    function(e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
    })(e, t)
},
function(e, t) {
    function a() {
        this.constructor = e
    }
    o(e, t),
    e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
}),
n = this && this.__decorate ||
function(e, t, a, o) {
    var i, n = arguments.length,
    s = n < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, o);
    else for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, a, s) : i(t, a)) || s);
    return n > 3 && s && Object.defineProperty(t, a, s),
    s
};
Object.defineProperty(a, "__esModule", {
    value: !0
});
var s = e("Consts"),
r = e("PopUpManager"),
l = e("SoundManager"),
c = e("Util"),
d = e("PlayerData"),
p = e("Player"),
u = e("Enemy"),
h = e("Gold"),
f = e("CommonApi"),
y = e("DropItem"),
m = e("BoomItem"),
g = e("FlyItem"),
S = e("GuideModel"),
A = e("GuideManager"),
v = e("MoreSkill"),
k = cc._decorator,
P = k.ccclass,
C = k.property,
B = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.EnemyNameArray = new Array,
        t.NormalHitPrefab = null,
        t.BashHitPrefab = null,
        t.BossDiePrefab = null,
        t.VsPrefab = null,
        t.PlayerNode = null,
        t.DamageNumPrefab = null,
        t.GoldPrefab = null,
        t.PlayerHPBg = null,
        t.BossHPBg = null,
        t.MainCamera = null,
        t.EffectNode = null,
        t.SkillColdArray = new Array,
        t.SkillStartNode = null,
        t.TalkNode = null,
        t.GoNode = null,
        t.ClearNode = null,
        t.GameAtlas = null,
        t.BossName = null,
        t.ButtonThrow = null,
        t.DropPrefab = null,
        t.CurSubStageLabel = null,
        t.MaxSubStageLabel = null,
        t.BoomItemPrefab = null,
        t.BoomSignPrefab = null,
        t.BoomEffectPrefab = null,
        t.SkillInEffectNode = null,
        t.FlyItemPrefab = null,
        t.ArrowPrefab = null,
        t.ComboNode = null,
        t.ComboEffect = null,
        t.MoreSkill = null,
        t.isDiamond = !1,
        t.enemyList = new Array,
        t.lifeList = new Array,
        t.curGameStep = -1,
        t.isCreateStepEnemy = !1,
        t.stepClearSupport = 0,
        t.stepTimeSupport = 0,
        t.stepCurTime = 0,
        t.isEnterResult = !1,
        t.isRelive = !1,
        t.isGamePause = !1,
        t.playSkillIndex = 0,
        t.isEnterTalk = !1,
        t.talkStep = 0,
        t.talkTime = 0,
        t.isBigBoss = !1,
        t.unEnemyStep = -1,
        t.smallBossEndTalk = -1,
        t.noEnemyTime = 0,
        t.isWaitTalk = !1,
        t.isTalkOver = !1,
        t.fullGold = 0,
        t.fullExp = 0,
        t.gameBgArray = new Array,
        t.isChangeMap0 = !1,
        t.isKillBoss = !1,
        t.isPauseGame = !1,
        t.skillIndexArray = [ - 1, -1, -1, -1, -1],
        t.dropArray = new Array,
        t.flyItemArray = new Array,
        t.lastComboNum = 0,
        t.buffLevel = new Array,
        t.isPressed = [!1, !1, !1, !1],
        t.waitCreateNumber = 0,
        t.goldNumber = 0,
        t
    }
    var a;
    return i(t, e),
    a = t,
    t.getIns = function() {
        return a._ins || (a._ins = new a),
        a._ins
    },
    t.prototype.onLoad = function() {
        var e = this;
        a._ins = this,
        f.default.getIns().curApi == f.APIModel.M4399 && (this.node.getComponent(cc.Canvas).fitHeight = !0),
        this.node.getChildByName("gameBg1").getChildByName("M4399").active = f.default.getIns().curApi == f.APIModel.M4399,
        this.MoreSkill.active = !1,
        d.default.getIns().skillUnlock = [!0, !0, !0, !1, !1];
        var t = new Array,
        o = s.default.BUFFUNLOCKED[d.default.getIns().curStage];
        c.Util.extraArrayCopy0(t, o);
        for (var i = 0; i < s.BuffType.MaxNum; i++) switch (i) {
            case s.BuffType.Skill0:
            case s.BuffType.Skill1:
            case s.BuffType.Skill2:
            case s.BuffType.Skill3:
                c.Util.isHandItemByArray(i, t) ? this.buffLevel.push(2) : this.buffLevel.push( - 1);
            break;
            default: c.Util.isHandItemByArray(i, t) ? this.buffLevel.push(0) : this.buffLevel.push( - 1);
        }
        this.SkillStartNode.getComponent(sp.Skeleton).setCompleteListener(this.skillStartPlayOver.bind(this)),
        this.BossHPBg.active = !1,
        this.gameBgArray.push(this.node.getChildByName("gameBg0")),
        this.gameBgArray.push(this.node.getChildByName("gameBg1")),
        this.gameBgArray.push(this.node.getChildByName("gameBg2"));
        var n = this;
        if (1 == d.default.getIns().curStage) {
            var p = "Image/gameBg1";
            r.default.getIns().gameBundle.load(p, cc.SpriteFrame,
            function(e, t) {
                n.gameBgArray[0].getComponent(cc.Sprite).spriteFrame = t,
                n.gameBgArray[1].getComponent(cc.Sprite).spriteFrame = t,
                n.gameBgArray[2].getComponent(cc.Sprite).spriteFrame = t
            })
        } else 2 == d.default.getIns().curStage && (p = "Image/gameBg2", r.default.getIns().gameBundle.load(p, cc.SpriteFrame,
        function(e, t) {
            n.gameBgArray[0].getComponent(cc.Sprite).spriteFrame = t,
            n.gameBgArray[1].getComponent(cc.Sprite).spriteFrame = t,
            n.gameBgArray[2].getComponent(cc.Sprite).spriteFrame = t
        }));
        this.ClearNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            e.ClearNode.active = !1
        }),
        l.default.getIns().playMusic(1),
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    },
    t.prototype.onDestroy = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    },
    t.prototype.onKeyDown = function(e) {
        switch (console.log("keyCode:", e.keyCode), e.keyCode) {
            case 87:
                this.isPressed[0] = !0;
            break;
            case 65:
                this.isPressed[1] = !0;
            break;
            case 83:
                this.isPressed[2] = !0;
            break;
            case 68:
                this.isPressed[3] = !0;
        }
    },
    t.prototype.onKeyUp = function(e) {
        switch (e.keyCode) {
            case 87:
                this.isPressed[0] = !1;
            break;
            case 65:
                this.isPressed[1] = !1;
            break;
            case 83:
                this.isPressed[2] = !1;
            break;
            case 68:
                this.isPressed[3] = !1;
        }
    },
    t.prototype.anyPressed = function() {
        return this.isPressed[0] || this.isPressed[1] || this.isPressed[2] || this.isPressed[3]
    },
    t.prototype.start = function() {
        for (var e = 0; e < 16; e++) {
            var t = this.PlayerHPBg.getChildByName("blood" + e);
            this.lifeList.push(t)
        }
        this.TalkNode.getChildByName("BlackBg").on(cc.Node.EventType.TOUCH_START, this.touchTalkNode.bind(this));
        var a = S.default.getIns().canActiveGuide(S.GuideTriggerType.GameScene_FirstFight); - 1 != a ? (S.default.getIns().initGuide(a, this.node), S.default.getIns().runNextGuide()) : -1 != (a = S.default.getIns().canActiveGuide(S.GuideTriggerType.GameScene_SecondFight)) && (S.default.getIns().initGuide(a, this.node), S.default.getIns().runNextGuide()),
        this.enterNextGameStep()
    },
    t.prototype.updateByGameBg = function() {
        if (this.MainCamera.x > this.gameBgArray[2].x) {
            if (this.gameBgArray[0].x += 6480, 0 == d.default.getIns().curStage && 0 == this.isChangeMap0) {
                var e = this;
                r.default.getIns().gameBundle.load("Image/gameBg0a", cc.SpriteFrame,
                function(t, a) {
                    e.gameBgArray[0].getComponent(cc.Sprite).spriteFrame = a,
                    e.gameBgArray[1].getComponent(cc.Sprite).spriteFrame = a,
                    e.gameBgArray[2].getComponent(cc.Sprite).spriteFrame = a,
                    e.isChangeMap0 = !0
                })
            }
            var t = [this.gameBgArray[1], this.gameBgArray[2], this.gameBgArray[0]];
            this.gameBgArray.length = 0;
            for (var a = 0; a < t.length; a++) this.gameBgArray.push(t[a])
        }
    },
    t.prototype.update = function(e) {
        this.isPauseGame || r.default.getIns().isPauseGame || (0 == this.enemyList.length && 0 == this.isEnterResult ? this.noEnemyTime += e: this.noEnemyTime = 0, this.noEnemyTime >= 3 && 0 == this.isEnterTalk && 0 == this.isEnterResult ? this.GoNode.active = !0 : this.GoNode.active = !1, S.default.getIns().isRunGuide() && S.default.getIns().guideIndex != S.GuideType.None && (this.GoNode.active = !1), this.updatePlayerHP(), this.updatePlayerSkillButton(), this.moveCameraByPlayer(e), this.updateStep(e), this.drawZIndexRole(), this.updateTalk(e), this.updatePlayerDrop(), this.updateFlyItem())
    },
    t.prototype.updateFlyItem = function() {
        if (! (this.flyItemArray.length <= 0)) for (var e = this.flyItemArray.length - 1; e >= 0; e--) {
            var t = this.flyItemArray[e],
            a = t.getComponent(g.default).getHitSize(),
            o = cc.rect(t.x - a.width / 2, t.y - a.height / 2, a.width, a.height);
            if (0 != t.getComponent(g.default).IsActive()) {
                var i = !1;
                if (t.getComponent(g.default).team == s.RoleTeam.Player) {
                    for (var n = 0; n < this.enemyList.length; n++) {
                        var r = this.enemyList[n];
                        if (new cc.Rect(r.x - s.default.ROLEBYATTACKSIZE.width / 2, r.y, s.default.ROLEBYATTACKSIZE.width, s.default.ROLEBYATTACKSIZE.height).intersects(o)) {
                            i = !0;
                            break
                        }
                    }
                    if (i) for (o = cc.rect(t.x - 2 * a.width / 2, t.y - 2 * a.height / 2, 2 * a.width, 2 * a.height), n = 0; n < this.enemyList.length; n++) r = this.enemyList[n],
                    new cc.Rect(r.x - s.default.ROLEBYATTACKSIZE.width / 2, r.y, s.default.ROLEBYATTACKSIZE.width, s.default.ROLEBYATTACKSIZE.height).intersects(o) && r.getComponent(u.default).byHitFly(t.getComponent(g.default).attackPower)
                } else r = this.PlayerNode,
                new cc.Rect(r.x - s.default.ROLEBYATTACKSIZE.width / 2, r.y, s.default.ROLEBYATTACKSIZE.width, s.default.ROLEBYATTACKSIZE.height).intersects(o) && (this.PlayerNode.getComponent(p.default).byHitFly(t, t.getComponent(g.default).attackPower), i = !0);
                Math.abs(t.x - this.MainCamera.x) >= 1500 && (i = !0),
                i && (t.getComponent(g.default).deadRotation(), this.flyItemArray.splice(e, 1))
            }
        }
    },
    t.prototype.activeSkill = function(e) {
        this.skillIndexArray[e] -= 1e3;
        var t = cc.instantiate(this.SkillInEffectNode);
        t.position = cc.v3(0, 0, 0),
        t.parent = this.SkillColdArray[e],
        t.getComponent(sp.Skeleton).setCompleteListener(function() {
            t.destroy()
        }),
        S.default.getIns().sendPassNeed(S.PassNeed.GetSkill)
    },
    t.prototype.pickUpSomeOne = function() {
        if (this.dropArray.length > 0) for (var e = new cc.Rect(this.PlayerNode.x - s.default.PLAYERGETSIZE.width / 2, this.PlayerNode.y, s.default.PLAYERGETSIZE.width, s.default.PLAYERGETSIZE.height), t = this.dropArray.length - 1; t >= 0; t--) {
            var a = this.dropArray[t],
            o = new cc.Rect(a.x + s.default.DROPWPSIZE.x, a.y + s.default.DROPWPSIZE.y, s.default.DROPWPSIZE.width, s.default.DROPWPSIZE.height);
            if (e.intersects(o) && a.getComponent(y.default).isCanPickUp()) {
                if (this.PlayerNode.getComponent(p.default).WpType == s.RoleWpType.DoubleWp) return r.default.getIns().showToast({
                    msg: "无法拾取更多"
                }),
                -1;
                var i = a.getComponent(y.default).dropType;
                return this.dropArray.splice(t, 1),
                a.destroy(),
                i
            }
        }
        return - 1
    },
    t.prototype.updatePlayerDrop = function() {
        var e = this;
        if (this.dropArray.length > 0) for (var t = new cc.Rect(this.PlayerNode.x - s.default.PLAYERGETSIZE.width / 2, this.PlayerNode.y, s.default.PLAYERGETSIZE.width, s.default.PLAYERGETSIZE.height), a = function(a) {
            var i, n = o.dropArray[a],
            r = new cc.Rect(n.x - s.default.DROPSIZE.width / 2, n.y, s.default.DROPSIZE.width, s.default.DROPSIZE.height);
            if (t.intersects(r)) switch (i = n.getComponent(y.default).dropType) {
                case s.DropType.Skill0:
                case s.DropType.Skill1:
                case s.DropType.Skill2:
                case s.DropType.Skill3:
                    for (var l = -1,
                c = 0; c < d.default.getIns().skillUnlock.length; c++) if (d.default.getIns().skillUnlock[c] && -1 == o.skillIndexArray[c]) {
                    l = c;
                    break
                }
                if (l >= 0) o.dropArray.splice(a, 1),
                o.skillIndexArray[l] = 1e3 + i,
                n.getComponent(y.default).flyToDes(o.SkillColdArray[l], l);
                else {
                    var u = -1;
                    for (c = 0; c < d.default.getIns().skillUnlock.length; c++) if (!d.default.getIns().skillUnlock[c]) {
                        u = c;
                        break
                    }
                    0 == n.getComponent(y.default).isDisByPlayer && u >= 3 && (n.getComponent(y.default).isDisByPlayer = !0, n.getComponent(y.default).disJump(o.PlayerNode.x > n.x), o.moreSkillNode = n, o.scheduleOnce(function() {
                        e.isPauseGame = !0,
                        e.MoreSkill.active = !0,
                        e.MoreSkill.getComponent(v.default).initByExData({
                            index: u - 3,
                            callBack: function() {
                                e.isPauseGame = !1
                            }
                        })
                    },
                    .6))
                }
                break;
                case s.DropType.Food0:
                case s.DropType.Food1:
                case s.DropType.Food2:
                    o.dropArray.splice(a, 1),
                n.destroy(),
                o.PlayerNode.getComponent(p.default).cureLifeByPer(s.default.FOODADDLIFE[i - s.DropType.Food0]);
            } else switch (i = n.getComponent(y.default).dropType) {
                case s.DropType.Skill0:
                case s.DropType.Skill1:
                case s.DropType.Skill2:
                case s.DropType.Skill3:
                    n.getComponent(y.default).isDisByPlayer = !1;
            }
        },
        o = this, i = this.dropArray.length - 1; i >= 0; i--) a(i)
    },
    t.prototype.updatePlayerHP = function() {
        for (var e = this.PlayerNode.getComponent(p.default).realMaxLife, t = this.PlayerNode.getComponent(p.default).curLife, a = e / 16, o = Math.ceil(t / a), i = 0; i < 16; i++) this.lifeList[i].active = i < o;
        if (null != this.bossNode) {
            var n = this.bossNode.getComponent(u.default).maxLife,
            r = this.bossNode.getComponent(u.default).curLife;
            this.BossHPBg.getChildByName("HPProgressBar").getComponent(cc.ProgressBar).progress = r / n
        }
        this.ButtonThrow.active = this.PlayerNode.getComponent(p.default).WpType == s.RoleWpType.DoubleWp,
        this.ButtonThrow.opacity = 255,
        S.default.getIns().isRunGuide() && S.default.getIns().getPassNeed() != S.PassNeed.ThrowWp && (this.ButtonThrow.opacity = 0);
        var l = this.PlayerNode.getComponent(p.default).comboNumber;
        this.ComboNode.active = l > 0,
        this.ComboEffect.active = l > 0,
        l > this.lastComboNum ? (this.lastComboNum = l, l = Math.min(99, l), this.ComboNode.getComponent(cc.Animation).stop(), this.ComboNode.getChildByName("NumberLabel").getComponent(cc.Label).string = "" + l, this.ComboNode.scale = 1, this.ComboNode.getComponent(cc.Animation).play(), this.ComboEffect.getComponent(sp.Skeleton).setAnimation(0, "animation", !1)) : this.lastComboNum = l
    },
    t.prototype.updatePlayerSkillButton = function() {
        for (var e = 0; e < 5; e++) {
            var t = this.SkillColdArray[e];
            0 == d.default.getIns().skillUnlock[e] ? t.getChildByName("Icon").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("button_skill_locked") : -1 == this.skillIndexArray[e] || this.skillIndexArray[e] >= 1e3 ? t.getChildByName("Icon").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("button_skill_none") : t.getChildByName("Icon").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("button_skill" + (1 + this.skillIndexArray[e]))
        }
    },
    t.prototype.moveCameraByPlayer = function(e) {
        if (S.default.getIns().isRunGuide()) {
            var t = A.default.getIns().DescNode.position,
            a = this.PlayerNode.position;
            if (t.sub(a).mag() < 70 && S.default.getIns().sendPassNeed(S.PassNeed.MoveDesc), S.default.getIns().getPassNeed() == S.PassNeed.FindSkillIcon) {
                if (this.dropArray.length > 0) {
                    var o = this.dropArray[0];
                    Math.abs(this.PlayerNode.x - o.x) <= 400 && S.default.getIns().sendPassNeed(S.PassNeed.FindSkillIcon)
                }
            } else if (S.default.getIns().getPassNeed() == S.PassNeed.EnemyNear) {
                var i = this.nearEnemy();
                null != i && i.position.sub(this.PlayerNode.position).mag() <= 400 && S.default.getIns().sendPassNeed(S.PassNeed.EnemyNear)
            }
            if (S.default.getIns().getCurGuideType() != S.GuideType.FinishEffect && S.default.getIns().getCurGuideType() != S.GuideType.None) return
        }
        var n;
        n = this.PlayerNode.x,
        n = Math.min(n, this.gameStepData.cameraFrame[1]),
        n = Math.max(n, this.gameStepData.cameraFrame[0]);
        var r = Math.abs(n - this.MainCamera.x),
        l = s.default.MAINCAMERASPEED * e;
        l >= r ? this.MainCamera.x = n: n > this.MainCamera.x ? this.MainCamera.x += l: this.MainCamera.x -= l,
        this.updateByGameBg()
    },
    t.prototype.enterNextGameStep = function() {
        if (this.curGameStep + 1 >= s.default.GAMESTEPDATA[d.default.getIns().curStage].length && 0 == this.isEnterResult) s.default.BOSSDEADTALK[d.default.getIns().curStage].length > 0 ? 0 == this.isEnterTalk && this.enterTalkState() : (this.isEnterResult = !0, r.default.getIns().showPopUpByBundle(r.PopUpEnum.WinNode, {
            gold: this.fullGold,
            exp: this.fullExp,
            isWin: !0
        }));
        else {
            if (this.gameStepData) {
                var e = this.gameStepData.passBuffModel;
                null != e && this.onBuffNodeView(e)
            }
            this.curGameStep >= 0 && (this.ClearNode.active = !0, this.ClearNode.getComponent(sp.Skeleton).setAnimation(0, "animation", !1)),
            this.curGameStep++,
            this.isCreateStepEnemy = !1,
            this.stepClearSupport = 0,
            this.stepTimeSupport = 0,
            this.stepCurTime = 0,
            this.unEnemyStep = -1,
            this.smallBossEndTalk = -1,
            this.gameStepData = s.default.GAMESTEPDATA[d.default.getIns().curStage][this.curGameStep],
            this.createDropByData(this.gameStepData.dropData);
            var t = "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2);
            0 == d.default.getIns().curStage && f.default.getIns().logEvent(f.LogEventType.PassSubStage, t + (this.curGameStep + 1))
        }
    },
    t.prototype.getGameStepData = function() {
        return this.gameStepData
    },
    t.prototype.createEnemyByData = function(e, t) {
        if (void 0 === t && (t = !1), this.isKillBoss) console.log("Boss Dead,no Create Enemy!");
        else if (this.unEnemyStep != this.curGameStep) {
            var a = ["EnemyNode0", "EnemyNode1", "EnemyNode2", "EnemyNode3", "BossNode0", "BossNode1", "BossNode2", "EnemyNode4", "EnemyNode5", "EnemyNode6", "EnemyNode7", "EnemyNode8", "EnemyNode9", "EnemyNode10", "EnemyNode11", "EnemyNode12"];
            S.default.getIns().sendPassNeed(S.PassNeed.CreateEnemy);
            var o = e.type,
            i = e.data,
            n = e.boss,
            l = e.dir,
            d = e.drop,
            p = e.guideEnemy,
            h = new Array;
            c.Util.extraArrayCopy0(h, d);
            var f = !1,
            y = Math.random() < .5;
            t && (y = !1);
            for (var m = 0; m < i.length; m++) {
                var g = i[m];
                g != s.EnemyType.Boss0 && g != s.EnemyType.Boss1 && g != s.EnemyType.Boss2 || (f = !0)
            }
            var A = this,
            v = function(e) {
                var t = i[e];
                k.waitCreateNumber++,
                r.default.getIns().gameBundle.load("prefab/" + a[t], cc.Prefab,
                function(a, i) {
                    var r, d = cc.instantiate(i);
                    if (A.waitCreateNumber--, t == s.EnemyType.Boss0 || t == s.EnemyType.Boss1 || t == s.EnemyType.Boss2) {
                        A.bossNode = d,
                        A.bossType = t,
                        A.isKillBoss = !1;
                        var m = "bossName" + (A.bossNode.getComponent(u.default).enemyIndex - s.EnemyType.Boss0);
                        A.BossName.getComponent(cc.Sprite).spriteFrame = A.GameAtlas.getSpriteFrame(m),
                        1 == n ? A.isBigBoss = !0 : A.smallBossEndTalk = A.gameStepData.enemy.endTalk
                    }
                    if (d.parent = A.node.getChildByName("RoleLayout"), l && 0 == l[e] ? (r = A.PlayerNode.x + s.default.SCENESIZE.width / 2 + 100 + 100 * Math.random(), 1 == o && (r += 600 * e)) : l && 1 == l[e] ? (r = A.PlayerNode.x - s.default.SCENESIZE.width / 2 - 100 - 100 * Math.random(), 1 == o && (r -= 600 * e)) : y ? (r = A.PlayerNode.x - s.default.SCENESIZE.width / 2 - 100 - 100 * Math.random(), 1 == o && (r -= 600 * e)) : (r = A.PlayerNode.x + s.default.SCENESIZE.width / 2 + 100 + 100 * Math.random(), 1 == o && (r += 600 * e)), h.length > 0) for (var g = c.Util.randomItemAndRemove(h), S = 100 * Math.random(), v = 0, k = 0; k < g.length; k++) if ((v += g[k]) >= S) {
                        d.getComponent(u.default).dropType = k;
                        break
                    }
                    var P = s.default.ROLEMOVEFRAME[0] + Math.random() * (s.default.ROLEMOVEFRAME[1] - s.default.ROLEMOVEFRAME[0]);
                    0 == o && (P = s.default.ENEMYBIRTHY[e]),
                    p && (r = A.PlayerNode.x + 250, d.getComponent(u.default).maxLife = .6 * d.getComponent(u.default).maxLife, d.getComponent(u.default).curLife = d.getComponent(u.default).maxLife),
                    d.setPosition(cc.v2(r, P)),
                    f && (d.getComponent(u.default).isBoss ? d.x = A.PlayerNode.x + s.default.SCENESIZE.width / 2 + 100 : (d.x > A.PlayerNode.x ? d.x += 200 : d.x -= 200, d.active = !1)),
                    A.enemyList.push(d)
                })
            },
            k = this;
            for (m = 0; m < i.length; m++) v(m);
            f && (this.isWaitTalk = !0, this.isTalkOver = !1)
        } else console.log("Small Boss Dead,no Create Enemy!")
    },
    t.prototype.enemyActiveSize = function() {
        for (var e = 0,
        t = 0; t < this.enemyList.length; t++) this.enemyList[t].getComponent(u.default).isAcitve() && e++;
        return e
    },
    t.prototype.createDropByData = function(e) {
        if (! (null == e || e.length <= 0)) for (var t = 0; t < e.length; t++) {
            var a = e[t],
            o = a.type,
            i = a.x,
            n = a.y,
            s = cc.instantiate(this.DropPrefab);
            if (s.parent = this.node.getChildByName("RoleLayout"), s.setPosition(i, n, 0), s.getComponent(y.default).initWpDrop(o), s.getComponent(y.default).changeDropSprite(this.GameAtlas.getSpriteFrame("drop" + o)), this.dropArray.push(s), S.default.getIns().getPassNeed() == S.PassNeed.PickUpWp) {
                var r = cc.instantiate(this.ArrowPrefab);
                r.parent = s,
                r.position = cc.v3(0, 260, 0)
            }
        }
    },
    t.prototype.guideCreateEnemy = function() {
        this.isCreateStepEnemy = !0,
        this.createEnemyByData(this.gameStepData.enemy, !0)
    },
    t.prototype.updateStep = function(e) {
        if (!S.default.getIns().isRunGuide() || S.default.getIns().getCurGuideType() == S.GuideType.FinishEffect || S.default.getIns().getCurGuideType() == S.GuideType.None) {
            if (this.isWaitTalk && Math.abs(this.bossNode.x - this.PlayerNode.x) < 400 && (this.isWaitTalk = !1, this.enterTalkState()), this.isEnterTalk || (this.stepCurTime += e), 0 == this.isCreateStepEnemy && this.PlayerNode.x >= this.gameStepData.enemyCreatePos && (this.isCreateStepEnemy = !0, this.createEnemyByData(this.gameStepData.enemy, !0)), this.isCreateStepEnemy) {
                if (this.gameStepData.timeSupport.length > 0 && this.stepTimeSupport < this.gameStepData.timeSupport.length) {
                    var t = this.gameStepData.timeSupport[this.stepTimeSupport];
                    this.stepCurTime >= t.time && (this.createEnemyByData(t.enemy), this.stepTimeSupport++)
                }
                if (this.gameStepData.clearSupport.length > 0 && this.stepClearSupport < this.gameStepData.clearSupport.length) {
                    var a = this.gameStepData.clearSupport[this.stepClearSupport];
                    0 == this.enemyList.length && 0 == this.waitCreateNumber && (this.createEnemyByData(a.enemy), this.stepClearSupport++)
                }
                0 == this.enemyList.length && 0 == this.waitCreateNumber && this.gameStepData.timeSupport.length > 0 && this.stepTimeSupport < this.gameStepData.timeSupport.length && (t = this.gameStepData.timeSupport[this.stepTimeSupport], this.createEnemyByData(t.enemy), this.stepTimeSupport++)
            }
            this.isCreateStepEnemy && 0 == this.enemyList.length && 0 == this.waitCreateNumber && 0 == this.isEnterResult && 0 == this.isEnterTalk && this.stepClearSupport >= this.gameStepData.clearSupport.length && this.stepTimeSupport >= this.gameStepData.timeSupport.length && this.enterNextGameStep(),
            this.CurSubStageLabel.string = "" + (this.curGameStep + 1),
            this.MaxSubStageLabel.string = "" + s.default.GAMESTEPDATA[d.default.getIns().curStage].length
        }
    },
    t.prototype.touchAttack = function() {
        this.PlayerNode.getComponent(p.default).noticeOneAttack()
    },
    t.prototype.roleThrowFlyItem = function(e, t, a) {
        var o = cc.instantiate(this.FlyItemPrefab);
        o.parent = this.node.getChildByName("RoleLayout"),
        o.setPosition(e.x + t.x, e.y + t.y, 0);
        var i, n, r = cc.v2(s.default.THROWSPEED, 0);
        t.x < 0 && (r.x = -r.x),
        null != e.getComponent(p.default) ? (i = s.RoleTeam.Player, n = e.getComponent(p.default).getAttackPower() * s.default.THROWWPUP * (1 + e.getComponent(p.default).getBuffAtt("throwAttack"))) : (i = s.RoleTeam.Enemy, n = e.getComponent(u.default).attackPower * s.default.THROWWPUP),
        o.getComponent(g.default).initFlyItem(i, r, n),
        o.getComponent(g.default).changeFlyItemSprite(this.GameAtlas.getSpriteFrame("drop" + a)),
        this.flyItemArray.push(o)
    },
    t.prototype.onThrowButton = function() {
        1 != a.getIns().isGamePause && (S.default.getIns().isRunGuide() && S.default.getIns().getPassNeed() != S.PassNeed.ThrowWp || (S.default.getIns().sendPassNeed(S.PassNeed.ThrowWp), this.PlayerNode.getComponent(p.default).throwWp()))
    },
    t.prototype.onSkillButton = function(e, t) {
        var o = this;
        if (1 != a.getIns().isGamePause) {
            if (S.default.getIns().isRunGuide()) {
                if (S.default.getIns().getPassNeed() != S.PassNeed.UseSkill) return;
                S.default.getIns().sendPassNeed(S.PassNeed.UseSkill)
            }
            var i = Number(t);
            if (0 != d.default.getIns().skillUnlock[i]) {
                var n = this.skillIndexArray[i]; - 1 == n || n >= 1e3 ? r.default.getIns().showToast({
                    msg: "没有技能可释放"
                }) : this.PlayerNode.getComponent(p.default).canUseSkill(n) ? (this.playSkillIndex = n, this.SkillStartNode.active = !0, this.SkillStartNode.getComponent(sp.Skeleton).setAnimation(0, ["dafengche", "lanfeng", "mahe", "jianqiao"][n], !1), this.PlayerNode.getComponent(p.default).tryToSkillState(this.playSkillIndex), l.default.getIns().playAudio(l.SoundType.Ult), this.skillIndexArray[i] = -1) : r.default.getIns().showToast({
                    msg: "技能范围内没有对手"
                })
            } else f.default.getIns().showRewardVideo(function() {
                d.default.getIns().skillUnlock[i] = !0,
                d.default.getIns().saveData(),
                o.MoreSkill.active = !1,
                o.isPauseGame = !1
            },
            function() {},
            s.VideoType.SkillUnlock)
        }
    },
    t.prototype.skillStartPlayOver = function() {
        this.SkillStartNode.active = !1
    },
    t.prototype.drawZIndexRole = function() {
        for (var e = new Array,
        t = 0; t < this.node.getChildByName("RoleLayout").childrenCount; t++) e.push(this.node.getChildByName("RoleLayout").children[t]);
        for (e.sort(function(e, t) {
            var a = e.y,
            o = t.y;
            return a < o ? 1 : a > o ? -1 : null != e.getComponent(m.default) ? 1 : null != t.getComponent(m.default) ? -1 : e.x < t.x ? 1 : e.x > t.x ? -1 : 0
        }), t = 0; t < e.length; t++) e[t].zIndex = t
    },
    t.prototype.getPlayerScript = function() {
        return this.PlayerNode.getComponent(p.default)
    },
    t.prototype.nearEnemy = function() {
        for (var e = this.PlayerNode.position,
        t = null,
        a = null,
        o = 0; o < this.enemyList.length; o++) {
            var i = this.enemyList[o],
            n = i.position.sub(e).mag(),
            s = i.getComponent(u.default).isCanByAttack(),
            r = i.getComponent(u.default).insideScreen();
            s && r && (null == t || n < t) && (t = n, a = i)
        }
        return a
    },
    t.prototype.canAttackEnemyList = function(e) {
        for (var t = new Array,
        a = 0; a < this.enemyList.length; a++) {
            var o = this.enemyList[a],
            i = o.getComponent(u.default).isCanHitByRect(e),
            n = o.getComponent(u.default).isCanByAttack();
            i && n && t.push(o)
        }
        return t
    },
    t.prototype.canAttackPlayer = function(e, t) {
        void 0 === t && (t = "");
        var a, o = e.getComponent(u.default);
        null != o ? a = o.attackRect(t) : null != e.getComponent(m.default) && (a = new cc.Rect(e.x - s.default.GrenadeBombSize / 2, e.y + s.default.ROLEBYATTACKSIZE.height / 3, s.default.GrenadeBombSize, .3 * s.default.GrenadeBombSize));
        var i = this.PlayerNode.getComponent(p.default).isCanHitByRect(a),
        n = this.PlayerNode.getComponent(p.default).isCanByAttack();
        return i && n
    },
    t.prototype.roleDropWp = function(e, t) {
        var a = cc.instantiate(this.DropPrefab);
        a.parent = this.node.getChildByName("RoleLayout"),
        a.setPosition(e.position),
        a.getComponent(y.default).initWpByPickUpRole(t, s.default.ROLEHANDY),
        a.getComponent(y.default).changeDropSprite(this.GameAtlas.getSpriteFrame("drop" + t)),
        this.dropArray.push(a)
    },
    t.prototype.removeEnmey = function(e) {
        var t, a = this,
        o = e.getComponent(u.default).enemyIndex,
        i = s.default.ENEMYGOLDEXP[o][0],
        n = s.default.ENEMYGOLDEXP[o][1];
        t = Math.floor(i / s.default.GOLDPERNUMBER),
        this.fullGold += i,
        this.fullExp += n;
        for (var r = 0; r < t; r++) {
            var l = cc.instantiate(this.GoldPrefab);
            l.parent = this.node.getChildByName("RoleLayout"),
            l.setPosition(e),
            l.getComponent(h.default).initSpeed(this.PlayerHPBg.getChildByName("goldPos"), cc.v2(300 * Math.random() - 150, 300 + 300 * Math.random()), e.y)
        }
        var c = e.getComponent(u.default).dropType;
        if (c >= 0) {
            var d = 1;
            this.PlayerNode.getComponent(p.default).getBuffAtt("doubleDrop") > 0 && Math.random() < this.PlayerNode.getComponent(p.default).getBuffAtt("doubleDrop") && (d = 2);
            for (var f = function(t) {
                var o = cc.instantiate(m.DropPrefab);
                if (o.parent = m.node.getChildByName("RoleLayout"), o.setPosition(e.position), S.default.getIns().getPassNeed() == S.PassNeed.KillEnemy && 0 == t) {
                    var i = cc.instantiate(m.ArrowPrefab);
                    i.parent = o,
                    i.position = cc.v3(0, 200, 0),
                    o.getComponent(y.default).initDrop(c, cc.v2( - 100, 300 + 300 * Math.random()), 160)
                } else o.getComponent(y.default).initDrop(c, cc.v2(300 * Math.random() - 150, 300 + 300 * Math.random()), 160);
                o.getComponent(y.default).changeDropSprite(m.GameAtlas.getSpriteFrame("drop" + c)),
                S.default.getIns().getPassNeed() == S.PassNeed.KillEnemy && 0 == t ? m.scheduleOnce(function() {
                    a.dropArray.push(o)
                },
                1.5) : m.dropArray.push(o)
            },
            m = this, g = 0; g < d; g++) f(g)
        }
        for (r = this.enemyList.length - 1; r >= 0; r--) if (this.enemyList[r] == e) {
            this.bossNode == e && (this.bossNode = null, this.BossHPBg.active = !1, 1 == this.isBigBoss ? this.isKillBoss = !0 : (this.unEnemyStep = this.curGameStep, null != this.smallBossEndTalk && this.smallBossEndTalk > 0 && this.enterTalkState())),
            e.destroy(),
            this.enemyList.splice(r, 1);
            break
        }
        S.default.getIns().sendPassNeed(S.PassNeed.KillEnemy)
    },
    t.prototype.playerDead = function() {
        0 == this.isEnterResult && (this.isEnterResult = !0, 0 == this.isRelive ? r.default.getIns().showPopUpByBundle(r.PopUpEnum.LostNode) : r.default.getIns().showPopUpByBundle(r.PopUpEnum.WinNode, {
            gold: this.fullGold,
            exp: this.fullExp,
            isWin: !1
        }))
    },
    t.prototype.playerRelive = function() {
        this.isEnterResult = !1,
        this.isRelive = !0,
        this.PlayerNode.getComponent(p.default).playerRelive()
    },
    t.prototype.showBossDieEffect = function(e) {
        var t = cc.instantiate(this.BossDiePrefab);
        t.setPosition(e),
        t.parent = this.EffectNode,
        t.getComponent(sp.Skeleton).setAnimation(0, "boss_die", !1),
        t.getComponent(sp.Skeleton).setCompleteListener(function() {
            t.destroy()
        })
    },
    t.prototype.showHitEffect = function(e, t) {
        var a;
        switch (e) {
            case s.DamageType.Crit:
                a = cc.instantiate(this.BashHitPrefab);
            break;
            default: a = cc.instantiate(this.NormalHitPrefab);
        }
        a.setPosition(t),
        a.parent = this.EffectNode,
        a.getComponent(sp.Skeleton).setAnimation(0, "animation", !1),
        a.getComponent(sp.Skeleton).setCompleteListener(function() {
            a.destroy()
        })
    },
    t.prototype.showDamageEffect = function(e, t, a, o, i, n, r) {
        void 0 === n && (n = cc.v2(0, 0)),
        void 0 === r && (r = !1),
        l.default.getIns().playAudio(l.SoundType.Hit01);
        var c = cc.instantiate(this.DamageNumPrefab);
        switch (e = Math.floor(e), i) {
            case s.DamageType.Normal:
                c.getComponent(cc.Layout).enabled = !1,
            c.getChildByName("InfoSprite").active = !1,
            c.getChildByName("Label1").active = !1,
            c.getChildByName("Label2").active = !1,
            c.getChildByName("Label0").active = !0,
            c.getChildByName("Label0").x = 0,
            c.getChildByName("Label0").getComponent(cc.Label).string = "" + e;
            break;
            case s.DamageType.Crit:
                c.getChildByName("InfoSprite").active = !0,
            c.getChildByName("InfoSprite").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("Crit"),
            c.getChildByName("Label0").active = !1,
            c.getChildByName("Label1").active = !0,
            c.getChildByName("Label1").getComponent(cc.Label).string = "" + e,
            c.getChildByName("Label2").active = !1;
            break;
            case s.DamageType.Block:
                c.getChildByName("InfoSprite").active = !0,
            c.getChildByName("InfoSprite").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("Block"),
            c.getChildByName("Label1").active = !1,
            c.getChildByName("Label2").active = !1,
            c.getChildByName("Label0").active = !0,
            c.getChildByName("Label0").getComponent(cc.Label).string = "" + e;
            break;
            case s.DamageType.Cure:
                c.getChildByName("InfoSprite").active = !0,
            c.getChildByName("InfoSprite").scale = .6,
            c.getChildByName("InfoSprite").getComponent(cc.Sprite).spriteFrame = this.GameAtlas.getSpriteFrame("greenAdd"),
            c.getChildByName("Label1").active = !1,
            c.getChildByName("Label0").active = !1,
            c.getChildByName("Label2").active = !0,
            c.getChildByName("Label2").getComponent(cc.Label).string = "" + e;
        }
        c.position = o.position;
        var d;
        d = t == s.RoleTeam.Player ? s.default.DAMAGEOFFY[0] : a ? s.default.DAMAGEOFFY[2] : s.default.DAMAGEOFFY[1],
        0 == n.x && 0 == n.y ? c.y += d: (c.x += n.x, c.y += n.y),
        c.parent = this.EffectNode,
        r && (this.kSpeedAndBack(.2, .7), this.showBossDieEffect(c.position)),
        i == s.DamageType.Cure ? (c.scale = 1.6, cc.tween(c).by(.3, {
            y: 70
        }).delay(.05).call(function() {
            c.destroy()
        }).start()) : (cc.tween(c).by(.15, {
            y: 30,
            scale: .6
        }).by(.15, {
            y: 20,
            scale: -.1
        }).delay(.05).to(.1, {
            opacity: 0
        }).call(function() {
            c.destroy()
        }).start(), this.showHitEffect(i, c.position, o))
    },
    t.prototype.throwBoom = function(e, t, a, o) {
        var i = cc.instantiate(this.BoomSignPrefab);
        i.position = a,
        i.parent = this.node.getChildByName("LandNode");
        var n = cc.instantiate(this.BoomItemPrefab);
        n.position = e,
        n.getComponent(m.default).initBoom(t, s.default.BOOMORGY, i, o),
        n.parent = this.node.getChildByName("RoleLayout")
    },
    t.prototype.showBoomEffect = function(e) {
        var t = cc.instantiate(this.BoomEffectPrefab);
        t.position = e,
        t.parent = this.EffectNode,
        t.getComponent(sp.Skeleton).setCompleteListener(function() {
            t.destroy()
        })
    },
    t.prototype.screenShake = function(e) {
        cc.log("屏幕抖动");
        var t = this.MainCamera.position,
        a = 40;
        0 == e ? cc.tween(this.MainCamera).repeat(4, cc.tween().to(.05, {
            y: a * Math.random()
        }).by(.01, {
            x: a * Math.random()
        })).to(.05, {
            x: t.x,
            y: 0
        }).start() : (a = 10, cc.tween(this.MainCamera).repeat(6, cc.tween().to(.1, {
            y: a * Math.random()
        }).by(.01, {
            x: a * Math.random()
        })).to(.05, {
            x: t.x,
            y: 0
        }).start())
    },
    t.prototype.enterVsEffect = function() {
        var e = this,
        t = cc.instantiate(this.VsPrefab);
        switch (t.parent = this.node.getChildByName("UILayout"), this.bossType) {
            case s.EnemyType.Boss0:
                t.getComponent(sp.Skeleton).setAnimation(0, "baoan", !1);
            break;
            case s.EnemyType.Boss1:
                t.getComponent(sp.Skeleton).setAnimation(0, "meiling", !1);
            break;
            case s.EnemyType.Boss2:
                t.getComponent(sp.Skeleton).setAnimation(0, "shantian", !1);
        }
        t.getComponent(sp.Skeleton).setCompleteListener(function() {
            t.destroy(),
            l.default.getIns().stopReplayAudio(),
            l.default.getIns().playMusic(1),
            e.isGamePause = !1,
            e.TalkNode.active = !1,
            e.isEnterTalk = !1,
            e.BossHPBg.active = !0;
            for (var a = 0; a < e.enemyList.length; a++) {
                var o = e.enemyList[a];
                o.getComponent(u.default).isBoss || (o.active = !0)
            }
        })
    },
    t.prototype.enterTalkState = function() {
        this.isGamePause = !0,
        this.TalkNode.active = !0,
        this.isEnterTalk = !0,
        this.talkStep = -1,
        this.talkTime = 0;
        var e = this;
        r.default.getIns().gameBundle.load("Image/BossHead" + this.bossType, cc.SpriteFrame,
        function(t, a) {
            e.TalkNode.getChildByName("role1").getComponent(cc.Sprite).spriteFrame = a
        }),
        this.TalkNode.getChildByName("name1").getComponent(cc.Sprite).spriteFrame = this.EnemyNameArray[this.bossType];
        for (var t = 0; t < this.enemyList.length; t++) {
            var a = this.enemyList[t];
            a.getComponent(u.default).isBoss && a.getComponent(u.default).changeState(u.EnemyState.Standy)
        }
        this.PlayerNode.getComponent(p.default).changeState(p.RoleState.Standy),
        this.showNextTalk()
    },
    t.prototype.showNextTalk = function() {
        var e;
        if (this.talkStep++, this.talkTime = 0, 1 == this.isBigBoss) {
            if (this.isKillBoss) {
                if (e = s.default.BOSSDEADTALK[d.default.getIns().curStage], this.talkStep + 1 > e.length) return this.TalkNode.active = !1,
                this.isEnterResult = !0,
                void r.default.getIns().showPopUpByBundle(r.PopUpEnum.WinNode, {
                    gold: this.fullGold,
                    exp: this.fullExp,
                    isWin: !0
                })
            } else if (e = s.default.BOSSTALK[d.default.getIns().curStage], this.talkStep + 1 > e.length) return this.enterVsEffect(),
            void(this.TalkNode.active = !1)
        } else if (null == this.bossNode || this.bossNode.getComponent(u.default).curLife <= 0) {
            var t = this.smallBossEndTalk;
            if (null == t || t < 0) return void(this.TalkNode.active = !1);
            if (e = s.default.SMALLBOSSTALK[t], this.talkStep + 1 > e.length) return this.TalkNode.active = !1,
            this.isGamePause = !1,
            this.TalkNode.active = !1,
            this.isEnterTalk = !1,
            void(this.BossHPBg.active = !0)
        } else {
            if (null == this.gameStepData.enemy.startTalk || this.gameStepData.enemy.startTalk < 0) return this.enterVsEffect(),
            void(this.TalkNode.active = !1);
            if (e = s.default.SMALLBOSSTALK[this.gameStepData.enemy.startTalk], this.talkStep + 1 > e.length) return this.enterVsEffect(),
            void(this.TalkNode.active = !1)
        }
        l.default.getIns().replayAudio(l.SoundType.BOSSdialogue),
        0 == e[this.talkStep].talkRole ? (this.TalkNode.getChildByName("role0").active = !0, this.TalkNode.getChildByName("role1").active = !1, this.TalkNode.getChildByName("name0").active = !0, this.TalkNode.getChildByName("name1").active = !1, this.TalkNode.getChildByName("BgSprite").scaleX = 1) : (this.TalkNode.getChildByName("role1").active = !0, this.TalkNode.getChildByName("role0").active = !1, this.TalkNode.getChildByName("name1").active = !0, this.TalkNode.getChildByName("name0").active = !1, this.TalkNode.getChildByName("BgSprite").scaleX = -1)
    },
    t.prototype.updateTalk = function(e) {
        if (this.isEnterTalk && this.TalkNode.active) {
            this.talkTime += e;
            var t = (1 == this.isBigBoss ? this.isKillBoss ? s.default.BOSSDEADTALK[d.default.getIns().curStage] : s.default.BOSSTALK[d.default.getIns().curStage] : null == this.bossNode || this.bossNode.getComponent(u.default).curLife <= 0 ? s.default.SMALLBOSSTALK[this.smallBossEndTalk] : s.default.SMALLBOSSTALK[this.gameStepData.enemy.startTalk])[this.talkStep].talkMsg,
            a = Math.min(t.length, Math.floor(this.talkTime / .1)),
            o = t.substring(0, a);
            if (this.TalkNode.getChildByName("TalkLabel").getComponent(cc.Label).string = o, a >= t.length && l.default.getIns().stopReplayAudio(), this.talkTime >= 3.5) return void this.showNextTalk()
        }
    },
    t.prototype.touchTalkNode = function() {
        l.default.getIns().stopReplayAudio(),
        this.talkTime < 2 ? this.talkTime = 2 : this.showNextTalk()
    },
    t.prototype.kSpeedAndBack = function(e, t) {
        cc.kSpeed(1),
        cc.kSpeed(e),
        cc.tween(this.node).delay(t).call(function() {
            cc.kSpeed(1)
        }).start()
    },
    t.prototype.addGold = function(e) {
        this.goldNumber += e,
        this.PlayerHPBg.getChildByName("GoldLabel").getComponent(cc.Label).string = "" + this.goldNumber
    },
    t.prototype.removeMotorByBiker = function(e) {
        for (var t = e.position,
        a = e.getComponent(u.default).dropType, o = this.enemyList.length - 1; o >= 0; o--) if (this.enemyList[o] == e) {
            e.destroy(),
            this.enemyList.splice(o, 1);
            break
        }
        var i = this;
        r.default.getIns().gameBundle.load("prefab/EnemyNode3", cc.Prefab,
        function(e, o) {
            var n = cc.instantiate(o);
            n.parent = i.node.getChildByName("RoleLayout"),
            n.setPosition(t),
            n.getComponent(u.default).dropType = a,
            i.enemyList.push(n)
        })
    },
    t.prototype.onHeadButton = function() {
        var e = this;
        this.isPauseGame = !0;
        var t = this.PlayerNode.getComponent(p.default).buffList;
        r.default.getIns().showPopUpByBundle(r.PopUpEnum.ShowBuffNode, {
            itemData: t,
            callBack: function() {
                e.isPauseGame = !1
            }
        })
    },
    t.prototype.onPauseButton = function() {
        this.onBuffNodeView(0)
    },
    t.prototype.onBuffNodeView = function(e) {
        var t = this;
        this.isPauseGame = !0,
        r.default.getIns().showPopUpByBundle(r.PopUpEnum.BuffNode, {
            buffLevel: this.buffLevel,
            model: e,
            lifePer: this.PlayerNode.getComponent(p.default).lifePer(),
            callBack: function() {
                t.isPauseGame = !1
            }
        })
    },
    t.prototype.getBuffData = function(e) {
        for (var t = 0; t < e.length; t++) {
            var a = e[t].type;
            switch (a) {
                case s.BuffType.Skill0:
                case s.BuffType.Skill1:
                case s.BuffType.Skill2:
                case s.BuffType.Skill3:
                    break;
                default:
                    this.buffLevel[a] = e[t].lv + 1;
            }
        }
        if (this.PlayerNode.getComponent(p.default).getBuffData(e), this.PlayerNode.getComponent(p.default).buffList.length > 0) {
            var o = S.default.getIns().canActiveGuide(S.GuideTriggerType.GameScene_Buff); - 1 != o && (S.default.getIns().initGuide(o, this.node), S.default.getIns().runNextGuide())
        }
    },
    t.prototype.playerGetSkill = function(e) {
        for (var t = -1,
        a = 0; a < d.default.getIns().skillUnlock.length; a++) if (d.default.getIns().skillUnlock[a] && -1 == this.skillIndexArray[a]) {
            t = a;
            break
        }
        if (t >= 0) {
            var o = void 0;
            switch (e) {
                case s.BuffType.Skill0:
                    o = s.DropType.Skill0;
                break;
                case s.BuffType.Skill1:
                    o = s.DropType.Skill1;
                break;
                case s.BuffType.Skill2:
                    o = s.DropType.Skill2;
                break;
                case s.BuffType.Skill3:
                    o = s.DropType.Skill3;
            }
            this.skillIndexArray[t] = 1e3 + o,
            this.activeSkill(t)
        }
    },
    t._ins = null,
    n([C(cc.SpriteFrame)], t.prototype, "EnemyNameArray", void 0),
    n([C(cc.Prefab)], t.prototype, "NormalHitPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "BashHitPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "BossDiePrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "VsPrefab", void 0),
    n([C(cc.Node)], t.prototype, "PlayerNode", void 0),
    n([C(cc.Prefab)], t.prototype, "DamageNumPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "GoldPrefab", void 0),
    n([C(cc.Node)], t.prototype, "PlayerHPBg", void 0),
    n([C(cc.Node)], t.prototype, "BossHPBg", void 0),
    n([C(cc.Node)], t.prototype, "MainCamera", void 0),
    n([C(cc.Node)], t.prototype, "EffectNode", void 0),
    n([C(cc.Node)], t.prototype, "SkillColdArray", void 0),
    n([C(cc.Node)], t.prototype, "SkillStartNode", void 0),
    n([C(cc.Node)], t.prototype, "TalkNode", void 0),
    n([C(cc.Node)], t.prototype, "GoNode", void 0),
    n([C(cc.Node)], t.prototype, "ClearNode", void 0),
    n([C(cc.SpriteAtlas)], t.prototype, "GameAtlas", void 0),
    n([C(cc.Node)], t.prototype, "BossName", void 0),
    n([C(cc.Node)], t.prototype, "ButtonThrow", void 0),
    n([C(cc.Prefab)], t.prototype, "DropPrefab", void 0),
    n([C(cc.Label)], t.prototype, "CurSubStageLabel", void 0),
    n([C(cc.Label)], t.prototype, "MaxSubStageLabel", void 0),
    n([C(cc.Prefab)], t.prototype, "BoomItemPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "BoomSignPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "BoomEffectPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "SkillInEffectNode", void 0),
    n([C(cc.Prefab)], t.prototype, "FlyItemPrefab", void 0),
    n([C(cc.Prefab)], t.prototype, "ArrowPrefab", void 0),
    n([C(cc.Node)], t.prototype, "ComboNode", void 0),
    n([C(cc.Node)], t.prototype, "ComboEffect", void 0),
    n([C(cc.Node)], t.prototype, "MoreSkill", void 0),
    a = n([P], t)
} (cc.Component);
a.default = B