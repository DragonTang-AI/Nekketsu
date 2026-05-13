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
}),
a.RoleState = void 0;
var s, r = e("Consts"),
l = e("GuideModel"),
c = e("PopUpManager"),
d = e("SoundManager"),
p = e("PlayerData"),
u = e("Enemy"),
h = e("GameManager"),
f = e("Rocker"),
y = cc._decorator,
m = y.ccclass,
g = y.property; (function(e) {
    e[e.Standy = 0] = "Standy",
    e[e.Move = 1] = "Move",
    e[e.Attack = 2] = "Attack",
    e[e.ByHit = 3] = "ByHit",
    e[e.Dead = 4] = "Dead",
    e[e.AttackNear = 5] = "AttackNear",
    e[e.Die = 6] = "Die",
    e[e.Skill0 = 7] = "Skill0",
    e[e.Skill1 = 8] = "Skill1",
    e[e.Skill2 = 9] = "Skill2",
    e[e.Skill3 = 10] = "Skill3",
    e[e.ByHitFly = 11] = "ByHitFly",
    e[e.FallDown = 12] = "FallDown",
    e[e.GetUp = 13] = "GetUp",
    e[e.AttackCold = 14] = "AttackCold",
    e[e.Throw = 15] = "Throw"
})(s = a.RoleState || (a.RoleState = {}));
var S = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.Rocker = null,
        t.CureLifePrefab = null,
        t.stateAniStr = ["standby_nowp", "walk2", "attack1", "bruise1", "conditiondead", "walk", "die", "skill_pinwheel", "skill_hammeringfloor", "skill_whirlwind", "skill_throwingmax", "falldown", "", "getup", "standby_nowp", "throwing"],
        t.speed = 300,
        t.stateTime = 0,
        t.noticeAttackArray = new Array,
        t.curAttackIndex = 0,
        t.maxAttackTime = 5,
        t.attackAniStr = ["attack1", "attack2", "attack3", "attack4", "attack5"],
        t.thinkAttackEnemy = null,
        t.attackFrame = r.default.PLAYERATTACKFRAME,
        t.attackPower = 0,
        t.defesne = 0,
        t.noMoveTime = 0,
        t.maxSkillColdTime = [35, 25, 30],
        t.curSkillColdTime = [0, 0, 0],
        t.isSuperBody = !1,
        t.caughtEnemy = null,
        t.caughtFlySpeed = cc.v2(0, 0),
        t.getwpEnemy = null,
        t.atkNullNum = 0,
        t.isShield = !1,
        t.shieldTime = 0,
        t.WpType = r.RoleWpType.NoWp,
        t.comboNumber = 0,
        t.buffList = new Array,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        this.maxLife = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Life),
        this.realMaxLife = this.maxLife,
        this.curLife = this.maxLife,
        this.attackPower = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Attack),
        this.defesne = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Defense),
        this.SpineNode = this.node.getChildByName("SpineNode"),
        this.ShieldNode = this.node.getChildByName("ShieldNode"),
        this.ShieldNode.active = !1,
        this.mySpine = this.SpineNode.getComponent(sp.Skeleton),
        this.mySpine.setCompleteListener(this.spinePlayOver.bind(this)),
        this.mySpine.setEventListener(this.spineAniEvent.bind(this))
    },
    t.prototype.changeWpType = function(e, t) {
        switch (this.WpType = e, this.DropWp = t, this.changeWeapon(), this.WpType) {
            case r.RoleWpType.NoWp:
                this.stateAniStr[s.Standy] = "standby_nowp",
            this.stateAniStr[s.Move] = "walk2",
            this.stateAniStr[s.Attack] = "attack1",
            this.stateAniStr[s.AttackNear] = "walk",
            this.stateAniStr[s.AttackCold] = "standby_nowp";
            break;
            case r.RoleWpType.Wp:
                this.stateAniStr[s.Standy] = "standby_wp",
            this.stateAniStr[s.Move] = "walk2",
            this.stateAniStr[s.Attack] = "attack1",
            this.stateAniStr[s.AttackNear] = "walk",
            this.stateAniStr[s.AttackCold] = "standby_wp",
            this.stateAniStr[s.Throw] = "throwing";
            break;
            case r.RoleWpType.DoubleWp:
                this.stateAniStr[s.Standy] = "standby_doublewp",
            this.stateAniStr[s.Move] = "walk_doublewp",
            this.stateAniStr[s.Attack] = "attack_doublewp",
            this.stateAniStr[s.AttackNear] = "walk_doublewp",
            this.stateAniStr[s.AttackCold] = "standby_doublewp",
            this.stateAniStr[s.Throw] = "throwing_doublewp";
        }
    },
    t.prototype.clearCombo = function() {
        this.comboNumber = 0
    },
    t.prototype.addCombo = function(e) {
        this.comboNumber += e
    },
    t.prototype.pickUpTest = function() {
        var e = h.default.getIns().pickUpSomeOne();
        return e >= 0 && (l.default.getIns().sendPassNeed(l.PassNeed.PickUpWp), this.changeWpType(r.RoleWpType.DoubleWp, e), this.state = -1, this.changeState(s.Standy), !0)
    },
    t.prototype.start = function() {
        this.changeState(s.Standy)
    },
    t.prototype.playerRelive = function() {
        this.maxLife = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Life),
        this.realMaxLife = this.maxLife * (1 + this.getBuffAtt("maxLife")),
        this.curLife = this.realMaxLife,
        this.SpineNode.opacity = 255,
        this.attackPower = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Attack),
        this.defesne = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Defense),
        this.changeState(s.Standy),
        this.curSkillColdTime = [0, 0, 0],
        this.SpineNode.opacity = 255,
        this.isShield = !0,
        this.shieldTime = r.default.PLAYERSHIELDTIME,
        this.ShieldNode.active = !0
    },
    t.prototype.moveByRocker = function(e) {
        var t = 0,
        a = 0;
        h.default.getIns().anyPressed() ? (h.default.getIns().isPressed[0] ? a = 1 : h.default.getIns().isPressed[2] && (a = -1), h.default.getIns().isPressed[1] ? t = -1 : h.default.getIns().isPressed[3] && (t = 1)) : (t = this.Rocker.dir.x, a = this.Rocker.dir.y);
        var o = t * this.speed * (1 + this.getBuffAtt("moveSpeed")),
        i = a * this.speed * (1 + this.getBuffAtt("moveSpeed"));
        this.SpineNode.scaleX = o > 0 ? -Math.abs(this.SpineNode.scaleX) : Math.abs(this.SpineNode.scaleX);
        var n = o * e,
        s = i * e;
        this.node.x += n,
        this.node.y += s,
        this.node.y < r.default.ROLEMOVEFRAME[0] ? this.node.y = r.default.ROLEMOVEFRAME[0] : this.node.y > r.default.ROLEMOVEFRAME[1] && (this.node.y = r.default.ROLEMOVEFRAME[1]);
        var l = h.default.getIns().getGameStepData().cameraFrame,
        c = [l[0] - r.default.SCENESIZE.width / 2 + r.default.ROLEBYATTACKSIZE.width / 2, l[1] + r.default.SCENESIZE.width / 2 - r.default.ROLEBYATTACKSIZE.width / 2];
        this.node.x = Math.max(this.node.x, c[0]),
        this.node.x = Math.min(this.node.x, c[1])
    },
    t.prototype.update = function(e) {
        if (1 != h.default.getIns().isGamePause && !h.default.getIns().isPauseGame && !c.default.getIns().isPauseGame) {
            switch (this.isShield && (this.shieldTime -= e, this.shieldTime <= 0 && (this.isShield = !1, this.ShieldNode.active = !1)), this.stateTime += e, this.state) {
                case s.Standy:
                    this.Rocker.dir.mag() >= .5 ? this.changeState(s.Move) : h.default.getIns().anyPressed() && this.changeState(s.Move);
                break;
                case s.Move:
                    if (this.Rocker.dir.mag() < .5 && !h.default.getIns().anyPressed()) return this.noMoveTime += e,
                void(this.noMoveTime >= .25 && this.changeState(s.Standy));
                this.moveByRocker(e),
                this.noMoveTime = 0;
                break;
                case s.Attack:
                    for (var t = this.noticeAttackArray.length - 1; t >= 0; t--) {
                    var a = this.noticeAttackArray[t];
                    a.time -= e,
                    a.time <= 0 && this.noticeAttackArray.splice(t, 1)
                }
                break;
                case s.ByHit:
                    break;
                case s.Dead:
                    var o = Math.floor(12 * this.stateTime);
                if (this.SpineNode.opacity = o % 2 == 0 ? 0 : 255, this.stateTime > .6) return this.SpineNode.opacity = 0,
                void h.default.getIns().playerDead();
                break;
                case s.AttackNear:
                    var i = r.default.PLAYERATTACKNEARSPEED * e,
                n = this.thinkAttackEnemy.position.sub(this.node.position).mag();
                if (i + this.attackFrame >= n) return this.node.y = this.thinkAttackEnemy.y,
                this.node.x > this.thinkAttackEnemy.x && this.node.x - this.thinkAttackEnemy.x > this.attackFrame ? this.node.x = this.thinkAttackEnemy.x + this.attackFrame: this.node.x < this.thinkAttackEnemy.x && this.thinkAttackEnemy.x - this.node.x > this.attackFrame && (this.node.x = this.thinkAttackEnemy.x - this.attackFrame),
                this.faceToEnemy(this.thinkAttackEnemy),
                void this.changeState(s.Attack);
                var l = (this.node.x >= this.thinkAttackEnemy.x ? cc.v3(this.thinkAttackEnemy.x + .618 * this.attackFrame, this.thinkAttackEnemy.y, 0) : cc.v3(this.thinkAttackEnemy.x - .618 * this.attackFrame, this.thinkAttackEnemy.y, 0)).sub(this.node.position).normalize(),
                d = i * l.x,
                p = i * l.y;
                this.node.x += d,
                this.node.y += p,
                this.faceToEnemy(this.thinkAttackEnemy);
                break;
                case s.Die:
                    i = void 0,
                i = this.SpineNode.scaleX > 0 ? r.default.BYHITFLYMOVESPEED * e: -r.default.BYHITFLYMOVESPEED * e,
                this.node.x += i;
                break;
                case s.Skill0:
                    if (this.stateTime <= r.default.CAUGHTFLYTIME && null != this.getwpEnemy) {
                    var f = this.caughtFlySpeed.x * e;
                    Math.abs(this.getwpEnemy.x - this.node.x) <= Math.abs(f) ? this.node.x = this.getwpEnemy.x: this.node.x += this.caughtFlySpeed.x * e;
                    var y = this.caughtFlySpeed.y * e;
                    Math.abs(this.getwpEnemy.y - this.node.y) <= Math.abs(y) ? this.node.y = this.getwpEnemy.y: this.node.y += this.caughtFlySpeed.y * e,
                    cc.log("跳跃移动：", this.getwpEnemy.x, this.node.x)
                } else {
                    this.moveByRocker(e);
                    var m = this.node.position;
                    this.SpineNode.scaleX > 0 ? m.x -= 200 : m.x += 200,
                    null != this.getwpEnemy && this.getwpEnemy.getComponent(u.default).wheelUpdate(m)
                }
                break;
                case s.Skill1:
                    this.stateTime <= r.default.CAUGHTFLYTIME ? (f = this.caughtFlySpeed.x * e, Math.abs(this.caughtEnemy.x - this.node.x) <= Math.abs(f) ? this.node.x = this.caughtEnemy.x: this.node.x += this.caughtFlySpeed.x * e, y = this.caughtFlySpeed.y * e, Math.abs(this.caughtEnemy.y - this.node.y) <= Math.abs(y) ? this.node.y = this.caughtEnemy.y - 1 : this.node.y += this.caughtFlySpeed.y * e) : this.stateTime <= r.default.CAUGHTFLYTIME + .5 && (this.node.setPosition(this.caughtEnemy.position), this.node.y = this.caughtEnemy.y - 1);
                break;
                case s.Skill2:
                    this.moveByRocker(e);
                break;
                case s.Skill3:
                    break;
                case s.ByHitFly:
                    i = void 0,
                i = this.SpineNode.scaleX > 0 ? r.default.BYHITFLYMOVESPEED * e: -r.default.BYHITFLYMOVESPEED * e,
                this.node.x += i,
                this.stateTime > .7 && this.changeState(s.FallDown);
                break;
                case s.FallDown:
                    this.stateTime > 1 && this.changeState(s.GetUp);
                break;
                case s.AttackCold:
                    this.stateTime > r.default.PLAYERATKCOLDTIME && this.changeState(s.Standy);
                break;
                case s.Throw:
            }
            for (t = 0; t < 3; t++) this.curSkillColdTime[t] -= e,
            this.curSkillColdTime[t] = Math.max(0, this.curSkillColdTime[t])
        }
    },
    t.prototype.changeState = function(e) {
        if (this.state != e) {
            switch (this.state) {
                case s.Standy:
                case s.Move:
                    break;
                case s.Attack:
                    this.noticeAttackArray.length = 0;
                break;
                case s.ByHit:
                case s.Dead:
                    break;
                case s.Skill0:
                    this.isSuperBody = !1;
                break;
                case s.Skill1:
                    this.isSuperBody = !1,
                this.caughtEnemy = null;
                break;
                case s.Skill2:
                    this.isSuperBody = !1;
                break;
                case s.Skill3:
                    this.changeWeapon(),
                this.isSuperBody = !1;
            }
            switch (this.state = e, this.stateTime = 0, this.state) {
                case s.Standy:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0),
                this.SpineNode.opacity = 255;
                break;
                case s.Move:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.Attack:
                    this.atkNullNum = 0,
                this.curAttackIndex = 0,
                this.playAniByAttackIndex(),
                this.noticeAttackArray.shift();
                break;
                case s.ByHit:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                d.default.getIns().playAudio(d.SoundType.Pain01);
                break;
                case s.Dead:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.AttackNear:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                this.thinkAttackEnemy = h.default.getIns().nearEnemy(),
                null == this.thinkAttackEnemy && this.changeState(s.Attack);
                break;
                case s.Die:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.Skill0:
                    this.WpType == r.RoleWpType.DoubleWp && (h.default.getIns().roleDropWp(this.node, this.DropWp), this.changeWpType(r.RoleWpType.NoWp, -1)),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                this.curSkillColdTime[0] = this.maxSkillColdTime[0],
                this.isSuperBody = !0,
                null != this.getwpEnemy && (this.caughtFlySpeed = cc.v2((this.getwpEnemy.x - this.node.x) / r.default.CAUGHTFLYTIME, (this.getwpEnemy.y - this.node.y) / r.default.CAUGHTFLYTIME), this.faceToEnemy(this.getwpEnemy));
                break;
                case s.Skill1:
                    this.WpType == r.RoleWpType.DoubleWp && (h.default.getIns().roleDropWp(this.node, this.DropWp), this.changeWpType(r.RoleWpType.NoWp, -1)),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                this.curSkillColdTime[1] = this.maxSkillColdTime[1],
                this.isSuperBody = !0,
                this.caughtFlySpeed = cc.v2((this.caughtEnemy.x - this.node.x) / r.default.CAUGHTFLYTIME, (this.caughtEnemy.y - this.node.y) / r.default.CAUGHTFLYTIME),
                this.faceToEnemy(this.caughtEnemy);
                break;
                case s.Skill2:
                    this.WpType == r.RoleWpType.DoubleWp && (h.default.getIns().roleDropWp(this.node, this.DropWp), this.changeWpType(r.RoleWpType.NoWp, -1)),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                this.curSkillColdTime[2] = this.maxSkillColdTime[2],
                this.isSuperBody = !0;
                break;
                case s.Skill3:
                    this.WpType == r.RoleWpType.DoubleWp && (h.default.getIns().roleDropWp(this.node, this.DropWp), this.changeWpType(r.RoleWpType.NoWp, -1)),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1),
                this.isSuperBody = !0;
                break;
                case s.ByHitFly:
                case s.GetUp:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.FallDown:
                    d.default.getIns().playAudio(d.SoundType.Body_fall);
                break;
                case s.AttackCold:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.Throw:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
            }
        }
    },
    t.prototype.faceToEnemy = function(e) {
        this.node.x >= e.x ? this.SpineNode.scaleX = Math.abs(this.SpineNode.scaleX) : this.SpineNode.scaleX = -Math.abs(this.SpineNode.scaleX)
    },
    t.prototype.noticeOneAttack = function() {
        this.pickUpTest() || (this.noticeAttackArray.push({
            time: r.default.PLAYERATTACKMAXTIME
        }), this.state != s.Move && this.state != s.Standy || this.changeState(s.AttackNear))
    },
    t.prototype.playAniByAttackIndex = function() {
        if (this.WpType == r.RoleWpType.DoubleWp) return this.mySpine.setAnimation(0, this.stateAniStr[s.Attack], !1),
        void d.default.getIns().playAudio(d.SoundType.Attack_01);
        if (this.mySpine.setAnimation(0, this.attackAniStr[this.curAttackIndex], !1), 0 == this.curAttackIndex || 4 == this.curAttackIndex) {
            var e = Math.random();
            e < .25 ? d.default.getIns().playAudio(d.SoundType.Attack_01) : e < .5 && d.default.getIns().playAudio(d.SoundType.Attack_02)
        }
    },
    t.prototype.getAttackRect = function(e) {
        var t;
        switch (this.state) {
            case s.Attack:
                t = this.SpineNode.scaleX < 0 ? new cc.Rect(this.node.x, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT);
            break;
            case s.Skill0:
                t = "attackon_2" == e ? this.SpineNode.scaleX < 0 ? new cc.Rect(this.node.x, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, 2 * this.attackFrame, r.default.ROLEHANDHEIGHT);
            break;
            case s.Skill1:
                "attackon_2" == e && (t = new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, 2 * this.attackFrame, r.default.ROLEHANDHEIGHT));
            break;
            case s.Skill2:
                t = "attackon_2" == e ? this.SpineNode.scaleX < 0 ? new cc.Rect(this.node.x, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, this.attackFrame, r.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, 2 * this.attackFrame, r.default.ROLEHANDHEIGHT);
            break;
            case s.Skill3:
                t = new cc.Rect(this.node.x - this.attackFrame, this.node.y + r.default.ROLEHANDY, 2 * this.attackFrame, r.default.ROLEHANDHEIGHT);
            break;
            default: "caught" == e && (t = new cc.Rect(this.node.x - 3 * this.attackFrame, this.node.y + r.default.ROLEHANDY - 3 * this.attackFrame / 2, 6 * this.attackFrame, r.default.ROLEHANDHEIGHT + 3 * this.attackFrame));
        }
        return t
    },
    t.prototype.spinePlayOver = function() {
        switch (this.state) {
            case s.Attack:
                if (this.noticeAttackArray.length > 0) {
                if (this.atkNullNum >= 2) return this.curAttackIndex = 0,
                this.noticeAttackArray.length = 0,
                void this.changeState(s.AttackCold);
                this.curAttackIndex < this.maxAttackTime - 1 ? (this.noticeAttackArray.shift(), this.curAttackIndex++, this.playAniByAttackIndex()) : (this.curAttackIndex = 0, this.noticeAttackArray.length = 0, this.changeState(s.AttackCold))
            } else this.changeState(s.AttackCold);
            break;
            case s.ByHit:
                this.changeState(s.Standy);
            break;
            case s.Die:
                this.changeState(s.Dead);
            break;
            case s.Skill0:
            case s.Skill1:
            case s.Skill2:
            case s.Skill3:
                this.changeState(s.Standy);
            break;
            case s.GetUp:
            case s.Throw:
                this.changeState(s.Standy);
        }
    },
    t.prototype.spineAniEvent = function(e, t) {
        switch (t.data.name) {
            case "Attackwind01":
                d.default.getIns().playAudio(d.SoundType.Attackwind01);
            break;
            case "Attackwind02":
                d.default.getIns().playAudio(d.SoundType.Attackwind02);
            break;
            case "Attackwind03":
                d.default.getIns().playAudio(d.SoundType.Attackwind03);
            break;
            case "Attackwind04":
                d.default.getIns().playAudio(d.SoundType.Attackwind04);
        }
        switch ("shake" == t.data.name && h.default.getIns().screenShake(!1), this.state) {
            case s.Attack:
                cc.log("攻击 事件监听：", t.data.name);
            var a = 1;
            switch (t.data.name) {
                case "attackon":
                    a = r.default.PLAYERATTRES[0][0];
                break;
                case "attackon_2":
                    a = r.default.PLAYERATTRES[0][1];
                break;
                case "attackon_3":
                    a = r.default.PLAYERATTRES[0][2];
                break;
                case "attackon_4":
                    a = r.default.PLAYERATTRES[0][3];
                break;
                case "attackon_5":
                    a = r.default.PLAYERATTRES[0][4];
                break;
                default: return;
            }
            if ((f = h.default.getIns().canAttackEnemyList(this.getAttackRect(t.data.name))).length > 0) {
                for (var o = 0; o < f.length; o++) {
                    var i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random()));
                    this.WpType == r.RoleWpType.DoubleWp && (i = i * r.default.PLAYERDOUBLEINDEX * (1 + this.getBuffAtt("weaponAttack")));
                    var n = f[o];
                    "attackon_5" == t.data.name ? n.getComponent(u.default).byHitFly(i) : n.getComponent(u.default).byAttack(i)
                }
                this.atkNullNum = 0,
                Math.random() < this.getBuffAtt("shield") && this.getShield()
            } else this.atkNullNum++;
            break;
            case s.Skill0:
                if (cc.log("技能0 事件监听：", t.data.name), "attackon" == t.data.name) {
                if (a = 1, "attackon" == t.data.name ? a = r.default.PLAYERATTRES[1][0] : "attackon_2" == t.data.name && (a = r.default.PLAYERATTRES[1][1]), (f = h.default.getIns().canAttackEnemyList(this.getAttackRect(t.data.name))).length > 0) for (o = 0; o < f.length; o++) i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random())),
                n = f[o],
                t.data.name,
                n.getComponent(u.default).byAttack(i)
            } else if ("getwp" == t.data.name) {
                if (this.WpType == r.RoleWpType.DoubleWp) return;
                this.getwpEnemy.getComponent(u.default).byWheel(1);
                var l = "weapons",
                c = "wp_trashfish_red";
                switch (this.getwpEnemy.getComponent(u.default).enemyIndex) {
                    case r.EnemyType.RedEnemy:
                    case r.EnemyType.RedEnemyWp:
                    case r.EnemyType.RedEnemyDoubleWp:
                        c = "wp_trashfish_red";
                    break;
                    case r.EnemyType.YellowEnemy:
                    case r.EnemyType.YellowEnemyWp:
                    case r.EnemyType.YellowEnemyDoubleWp:
                        c = "wp_trashfish_yellow";
                    break;
                    case r.EnemyType.Biker:
                    case r.EnemyType.BikerDoubleWp:
                        c = "wp_biker";
                    break;
                    case r.EnemyType.Boss0:
                        c = "wp_security";
                    break;
                    case r.EnemyType.Boss1:
                        c = "wp_boss";
                    break;
                    case r.EnemyType.Boss2:
                        c = "wp_fubu_shantian";
                    break;
                    case r.EnemyType.Sumo:
                        c = "weapon_sumo";
                }
                this.mySpine.setAttachment(l, c),
                d.default.getIns().replayAudio(d.SoundType.Attackwind04)
            } else if ("attackon_2" == t.data.name) {
                if (this.WpType != r.RoleWpType.DoubleWp) {
                    l = "weapons",
                    c = "none",
                    this.mySpine.setAttachment(l, c);
                    var p = -220;
                    this.SpineNode.scaleX < 0 && (p = 220),
                    this.getwpEnemy.getComponent(u.default).wheelOver(this.node.position.add(cc.v3(p, 0, 0)))
                }
                d.default.getIns().stopReplayAudio()
            } else "attack_inhand" == t.data.name && (i = Math.floor(this.getAttackPower() * (1 + .3 * Math.random())), this.WpType != r.RoleWpType.DoubleWp && this.getwpEnemy.getComponent(u.default).byAttack(i));
            break;
            case s.Skill1:
                if (cc.log("技能1 事件监听：", t.data.name), a = 1, "attackon" == t.data.name ? a = r.default.PLAYERATTRES[2][0] : "attackon_2" == t.data.name && (a = r.default.PLAYERATTRES[2][1]), "attackon" == t.data.name) i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random())),
            this.caughtEnemy.getComponent(u.default).byAttack(i, !0),
            d.default.getIns().playAudio(d.SoundType.Hit01);
            else if ("attackon_2" == t.data.name) {
                if ((f = h.default.getIns().canAttackEnemyList(this.getAttackRect(t.data.name))).length > 0) for (o = 0; o < f.length; o++) i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random())),
                (n = f[o]) == this.caughtEnemy ? this.caughtEnemy.getComponent(u.default).byAttack(i, !0) : n.getComponent(u.default).byHitFly(i);
                d.default.getIns().playAudio(d.SoundType.Hit02)
            } else "caught" == t.data.name ? this.caughtEnemy.getComponent(u.default).byCaught(1) : "caught_off" == t.data.name && this.caughtEnemy.getComponent(u.default).caughtOver();
            break;
            case s.Skill2:
                if (cc.log("技能2 事件监听：", t.data.name), a = 1, "attackon" == t.data.name ? a = r.default.PLAYERATTRES[3][0] : "attackon_2" == t.data.name && (a = r.default.PLAYERATTRES[3][1]), ("attackon" == t.data.name || "attackon_2" == t.data.name) && (f = h.default.getIns().canAttackEnemyList(this.getAttackRect(t.data.name))).length > 0) for (o = 0; o < f.length; o++) i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random())),
            n = f[o],
            "attackon_2" == t.data.name ? (i *= 2, n.getComponent(u.default).byHitFly(i)) : n.getComponent(u.default).byAttack(i);
            break;
            case s.Skill3:
                var f;
            if (cc.log("技能3 事件监听：", t.data.name), a = 1, "attackon" == t.data.name ? a = r.default.PLAYERATTRES[4][0] : "attackon_2" == t.data.name && (a = r.default.PLAYERATTRES[4][1]), ("attackon" == t.data.name || "attackon_2" == t.data.name) && (f = h.default.getIns().canAttackEnemyList(this.getAttackRect(t.data.name))).length > 0) for (o = 0; o < f.length; o++) i = Math.floor(this.getAttackPower() * a * (.9 + .2 * Math.random())),
            n = f[o],
            "attackon_2" == t.data.name ? (i *= 2, n.getComponent(u.default).byHitFly(i)) : n.getComponent(u.default).byAttack(i);
            break;
            case s.Throw:
                if (cc.log("投掷事件:", t.data.name, this.SpineNode.scaleX), "wp_off" == t.data.name) {
                var y = cc.v2(r.default.ROLEHANDHEIGHT, r.default.ROLEHANDY);
                this.SpineNode.scaleX > 0 && (y.x = -y.x),
                h.default.getIns().roleThrowFlyItem(this.node, y, this.DropWp),
                this.changeWpType(r.RoleWpType.NoWp, -1)
            }
        }
    },
    t.prototype.isCanHitByRect = function(e) {
        var t = new cc.Rect(this.node.x - r.default.ROLEBYATTACKSIZE.width / 2, this.node.y + r.default.ROLEBYATTACKSIZE.height / 3, r.default.ROLEBYATTACKSIZE.width, 2 * r.default.ROLEBYATTACKSIZE.height / 3);
        return null != e && null != t && t.intersects(e)
    },
    t.prototype.isCanByAttack = function() {
        return this.state != s.Dead && this.state != s.Die
    },
    t.prototype.cureLifeByPer = function(e) {
        var t = this,
        a = Math.floor(this.realMaxLife * e);
        this.curLife += a,
        this.curLife = Math.min(this.curLife, this.realMaxLife);
        var o = cc.instantiate(this.CureLifePrefab);
        o.parent = this.node,
        o.position = cc.v3(0, 0, 0),
        o.getComponent(sp.Skeleton).setAnimation(0, "animation", !1),
        o.getComponent(sp.Skeleton).setCompleteListener(function() {
            o.destroy()
        }),
        this.scheduleOnce(function() {
            h.default.getIns().showDamageEffect(a, r.RoleTeam.Player, !1, t.node, r.DamageType.Cure, cc.v2(20, 200))
        },
        .2)
    },
    t.prototype.curLifeByNumber = function(e) {
        var t = e / this.realMaxLife;
        this.cureLifeByPer(t)
    },
    t.prototype.delLife = function(e) {
        var t = p.default.getIns().getRoleInfo(0, r.RoleInfoType.Defense),
        a = r.DamageType.Normal;
        return Math.random() <= p.default.getIns().getRoleInfo(0, r.RoleInfoType.Block) + this.getBuffAtt("block") ? (a = r.DamageType.Block, e = e * (1 - t / (300 + t)) * .5) : (Math.random() <= p.default.getIns().getEnemyInfo(r.EnemyType.YellowEnemy, 0, r.RoleInfoType.Crit) && (a = r.DamageType.Crit, e *= 1.5), e *= 1 - t / (300 + t)),
        e *= 1 - this.getBuffAtt("damageDel"),
        e = Math.max(1, e),
        l.default.getIns().isRunGuide() && (e = 1),
        this.curLife -= e,
        this.clearCombo(),
        h.default.getIns().showDamageEffect(e, r.RoleTeam.Player, !1, this.node, a),
        this.curLife <= 0 && (this.curLife = 0, this.changeState(s.Die), !0)
    },
    t.prototype.byAttack = function(e, t) {
        this.isShield || 0 != this.delLife(t) || this.isSuperBody || (this.changeState(s.ByHit), this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1), this.faceToEnemy(e))
    },
    t.prototype.byHitFly = function(e, t) {
        this.isShield || 0 != this.delLife(t) || this.isSuperBody || (this.changeState(s.ByHitFly), this.faceToEnemy(e))
    },
    t.prototype.canUseSkill = function(e) {
        if (this.state == s.Skill0 || this.state == s.Skill1 || this.state == s.Skill2 || this.state == s.Skill3) return ! 1;
        switch (s.Skill0 + e) {
            case s.Skill0:
            case s.Skill1:
                return 0 != h.default.getIns().canAttackEnemyList(this.getAttackRect("caught")).length;
            case s.Skill2:
            case s.Skill3:
                return ! 0;
        }
    },
    t.prototype.tryToSkillState = function(e) {
        var t = s.Skill0 + e;
        if (t == s.Skill1) {
            if (0 == (o = h.default.getIns().canAttackEnemyList(this.getAttackRect("caught"))).length) return void cc.log("无法锁定敌人！！！距离不够");
            var a = o[0];
            this.caughtEnemy = a,
            a.getComponent(u.default).byCaught(0)
        } else if (t == s.Skill0) {
            var o;
            if (0 == (o = h.default.getIns().canAttackEnemyList(this.getAttackRect("caught"))).length) return void cc.log("无法锁定敌人！！！距离不够");
            a = o[0],
            this.getwpEnemy = a,
            a.getComponent(u.default).byWheel(0),
            cc.log("技能0 ，成功抓举到敌人")
        }
        this.changeState(t)
    },
    t.prototype.getSkillColdPer = function(e) {
        return this.curSkillColdTime[e] / this.maxSkillColdTime[e]
    },
    t.prototype.getSkillColdTime = function(e) {
        return Math.floor(this.curSkillColdTime[e])
    },
    t.prototype.throwWp = function() {
        this.WpType == r.RoleWpType.DoubleWp && this.changeState(s.Throw)
    },
    t.prototype.changeWeapon = function() {
        var e;
        switch (this.DropWp) {
            case r.DropType.Weapon0:
                e = "wp_box";
            break;
            case r.DropType.Weapon1:
                e = "wp_trashcan";
            break;
            default: e = "none";
        }
        this.mySpine.setAttachment("weapons", e)
    },
    t.prototype.lifePer = function() {
        return this.curLife / this.realMaxLife
    },
    t.prototype.getBuffData = function(e) {
        for (var t = this,
        a = new Array,
        o = 0; o < e.length; o++) {
            for (var i = e[o], n = !1, s = 0; s < this.buffList.length; s++) if (i.type == this.buffList[s].type) {
                n = !0,
                this.buffList[s].lv = i.lv;
                break
            }
            switch (n || this.buffList.push(i), i.type) {
                case r.BuffType.Pisa:
                case r.BuffType.Skill0:
                case r.BuffType.Skill1:
                case r.BuffType.Skill2:
                case r.BuffType.Skill3:
                    break;
                default:
                    a.push(i.type);
            }
        }
        for (o = this.buffList.length - 1; o >= 0; o--) {
            var l = this.buffList[o],
            c = r.default.BUFFEFFECTDATA[l.type];
            switch (l.type) {
                case r.BuffType.Pisa:
                    this.cureLifeByPer(c.num + c.up * l.lv),
                this.buffList.splice(o, 1);
                break;
                case r.BuffType.Shousi:
                    this.realMaxLife = this.maxLife * (1 + c.num + c.up * l.lv);
                var d = this.realMaxLife - this.maxLife;
                this.curLifeByNumber(d);
                break;
                case r.BuffType.Skill0:
                case r.BuffType.Skill1:
                case r.BuffType.Skill2:
                case r.BuffType.Skill3:
                    h.default.getIns().playerGetSkill(l.type),
                this.buffList.splice(o, 1);
            }
        }
        if (a.length > 0) {
            this.node.getChildByName("GetBuffNode").active = !0;
            var p = function(e) {
                var o = a[e],
                i = r.default.BUFFEFFECTDATA[o].ani;
                u.scheduleOnce(function() {
                    t.node.getChildByName("GetBuffNode").getComponent(sp.Skeleton).setAnimation(0, i, !1)
                },
                1.2 * e)
            },
            u = this;
            for (o = 0; o < a.length; o++) p(o);
            this.scheduleOnce(function() {
                t.node.getChildByName("GetBuffNode").active = !1
            },
            1.2 * (a.length + 1))
        }
    },
    t.prototype.getBuffAtt = function(e) {
        for (var t = 0,
        a = 0; a < this.buffList.length; a++) {
            var o = this.buffList[a],
            i = r.default.BUFFEFFECTDATA[o.type];
            if (i.att == e) {
                t = i.num + i.up * o.lv;
                break
            }
        }
        return t
    },
    t.prototype.getAttackPower = function() {
        var e = this.comboNumber * this.getBuffAtt("comboAttack");
        return this.attackPower * (1 + this.getBuffAtt("attack") + e)
    },
    t.prototype.makeDamage = function(e) {
        var t = this.getBuffAtt("attackCure");
        t > 0 && Math.random() < .1 && this.curLifeByNumber(t * e)
    },
    t.prototype.getShield = function() {
        this.isShield = !0,
        this.shieldTime = r.default.PLAYERSHIELDTIME2,
        this.ShieldNode.active = !0
    },
    n([g(f.default)], t.prototype, "Rocker", void 0),
    n([g(cc.Prefab)], t.prototype, "CureLifePrefab", void 0),
    n([m], t)
} (cc.Component);
a.default = S