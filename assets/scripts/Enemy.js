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
a.EnemyAI = a.EnemyState = void 0;
var s, r, l = e("Consts"),
c = e("GuideModel"),
d = e("PopUpManager"),
p = e("SoundManager"),
u = e("Util"),
h = e("PlayerData"),
f = e("GameManager"),
y = e("Player"),
m = cc._decorator,
g = m.ccclass,
S = m.property; (function(e) {
    e[e.Standy = 0] = "Standy",
    e[e.Move = 1] = "Move",
    e[e.Attack = 2] = "Attack",
    e[e.Attack2 = 3] = "Attack2",
    e[e.ByHit = 4] = "ByHit",
    e[e.Dead = 5] = "Dead",
    e[e.ByHitFly = 6] = "ByHitFly",
    e[e.FallDown = 7] = "FallDown",
    e[e.GetUp = 8] = "GetUp",
    e[e.Die = 9] = "Die",
    e[e.ByCaught0 = 10] = "ByCaught0",
    e[e.ByCaught1 = 11] = "ByCaught1",
    e[e.CaughtByHit = 12] = "CaughtByHit",
    e[e.CaughtDie = 13] = "CaughtDie",
    e[e.ByWheel0 = 14] = "ByWheel0",
    e[e.ByWheel1 = 15] = "ByWheel1",
    e[e.ByThrow = 16] = "ByThrow",
    e[e.MotorMove = 17] = "MotorMove",
    e[e.MotorWait = 18] = "MotorWait",
    e[e.IdleMove = 19] = "IdleMove",
    e[e.Throw = 20] = "Throw",
    e[e.DashReady = 21] = "DashReady",
    e[e.Dash = 22] = "Dash"
})(s = a.EnemyState || (a.EnemyState = {})),
function(e) {
    e[e.Idle = 0] = "Idle",
    e[e.NearTo = 1] = "NearTo",
    e[e.AttackPlayer = 2] = "AttackPlayer",
    e[e.MotorTo = 3] = "MotorTo"
} (r = a.EnemyAI || (a.EnemyAI = {}));
var A = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.isBoss = !1,
        t.enemyIndex = l.EnemyType.RedEnemy,
        t.enemyWpType = l.RoleWpType.NoWp,
        t.stateAniStr = ["standby", "walk", "attack1", "attack2", "bruise1", "conditiondead", "falldown", "", "getup", "die", "standby", "becaught", "bruise_becaught", "conditiondead", "standby", "", "falldown2", "", "", "walk", "throwing_doublewp", "dash_getready", "dash"],
        t.bruiseAniStr = ["bruise1", "bruise2"],
        t.speed = 150,
        t.stateTime = 0,
        t.curAttackIndex = 0,
        t.maxAttackTime = 5,
        t.aiStateTime = 0,
        t.idleTime = 0,
        t.attackFrame = [140, 140],
        t.byHitUpSpeed = l.default.BYHITFLYUPSPEED,
        t.maxLife = l.default.ENEMYMAXLIFE,
        t.curLife = l.default.ENEMYMAXLIFE,
        t.attackPower = l.default.ENEMYATTACKPOWER,
        t.isSuperBody = !1,
        t.isMotorHit = !1,
        t.motorNumber = l.default.MotorMoveMaxNumber,
        t.level = 0,
        t.idleMoveCount = 0,
        t.dropType = -1,
        t.wpName = "",
        t.canThrowTime = 0,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        switch (this.SpineNode = this.node.getChildByName("SpineNode"), this.mySpine = this.SpineNode.getComponent(sp.Skeleton), this.mySpine.setCompleteListener(this.spinePlayOver.bind(this)), this.mySpine.setEventListener(this.spineAniEvent.bind(this)), this.attackFrame = l.default.ENEMYATTACKFRAME[this.enemyIndex], this.speed = l.default.EnemyMoveSpeed[this.enemyIndex], this.isBoss ? this.level = l.default.ENEMYLEVEL[h.default.getIns().curStage][1] : this.level = l.default.ENEMYLEVEL[h.default.getIns().curStage][0], this.maxLife = h.default.getIns().getEnemyInfo(this.enemyIndex, this.level, l.RoleInfoType.Life), this.curLife = this.maxLife, this.attackPower = h.default.getIns().getEnemyInfo(this.enemyIndex, this.level, l.RoleInfoType.Attack), this.enemyWpType) {
            case l.RoleWpType.Wp:
                this.wpName = u.Util.randomItemByArray(["wp_iron", "wp_stick"]);
            break;
            case l.RoleWpType.DoubleWp:
                this.wpName = u.Util.randomItemByArray(["wp_box", "wp_trashcan"]);
        }
        switch (this.updateAniState(this.enemyWpType), this.enemyIndex) {
            case l.EnemyType.Sumo:
                this.stateAniStr[s.ByHit] = "bruise",
            this.bruiseAniStr = ["bruise", "bruise"];
            break;
            case l.EnemyType.WhiteEnemy:
                this.bruiseAniStr = ["bruise1", "bruise1"];
        }
    },
    t.prototype.updateAniState = function(e) {
        if (this.enemyWpType == l.RoleWpType.DoubleWp && e == l.RoleWpType.Wp) {
            switch (this.enemyIndex) {
                case l.EnemyType.BikerDoubleWp:
                    this.enemyIndex = l.EnemyType.Biker;
                break;
                case l.EnemyType.RedEnemyDoubleWp:
                    this.enemyIndex = l.EnemyType.RedEnemy;
                break;
                case l.EnemyType.YellowEnemyDoubleWp:
                    this.enemyIndex = l.EnemyType.YellowEnemy;
                break;
                case l.EnemyType.SchoolGirlDoubleWp:
                    this.enemyIndex = l.EnemyType.SchoolGirl;
            }
            this.attackFrame = l.default.ENEMYATTACKFRAME[this.enemyIndex],
            this.speed = l.default.EnemyMoveSpeed[this.enemyIndex]
        }
        switch (this.enemyWpType = e, this.enemyWpType) {
            case l.RoleWpType.NoWp:
                this.wpName = "",
            this.changeWeapon(l.RoleWpType.NoWp),
            this.stateAniStr[s.Attack] = "attack1",
            this.stateAniStr[s.Standy] = "standby",
            this.stateAniStr[s.Move] = "walk",
            this.stateAniStr[s.IdleMove] = "walk",
            this.stateAniStr[s.Throw] = "throwing";
            break;
            case l.RoleWpType.Wp:
                this.changeWeapon(l.RoleWpType.Wp),
            this.stateAniStr[s.Attack] = "attack_wp",
            this.stateAniStr[s.Standy] = "standby",
            this.stateAniStr[s.Move] = "walk",
            this.stateAniStr[s.IdleMove] = "walk",
            this.stateAniStr[s.Throw] = "throwing";
            break;
            case l.RoleWpType.DoubleWp:
                this.changeWeapon(l.RoleWpType.DoubleWp),
            this.stateAniStr[s.Attack] = "attack_doublewp",
            this.stateAniStr[s.Standy] = "standby_doublewp",
            this.stateAniStr[s.Move] = "walk_doublewp",
            this.stateAniStr[s.IdleMove] = "walk_doublewp",
            this.stateAniStr[s.Throw] = "throwing_doublewp";
        }
    },
    t.prototype.start = function() {
        this.changeAIState(r.Idle),
        this.enemyIndex == l.EnemyType.Motorcycle && (this.isSuperBody = !0, this.changeState(s.MotorWait)),
        this.isBoss || this.changeHead(Math.floor(7 * Math.random()))
    },
    t.prototype.update = function(e) {
        if (1 != f.default.getIns().isGamePause && !f.default.getIns().isPauseGame && !d.default.getIns().isPauseGame && !c.default.getIns().isNeedPauseGame()) switch (this.updateAI(e), this.canThrowTime += e, this.stateTime += e, this.state) {
            case s.Standy:
                break;
            case s.Move:
                (g = this.wantMovePos.sub(this.node.position)).x > 0 ? this.SpineNode.scaleX = -Math.abs(this.SpineNode.scaleX) : this.SpineNode.scaleX = Math.abs(this.SpineNode.scaleX);
            var t = this.speed * e,
            a = g.mag(),
            o = this.node.position.sub(f.default.getIns().PlayerNode.position).mag();
            if (this.enemyWpType == l.RoleWpType.DoubleWp && Math.abs(this.node.y - f.default.getIns().PlayerNode.y) <= l.default.CANATTACKOFFY && Math.abs(this.node.x - f.default.getIns().PlayerNode.x) > 1.5 * this.attackFrame[0]) return this.changeAIState(r.AttackPlayer),
            void this.enterAttackState();
            if (o <= .8 * this.attackFrame[0] && this.canAttackPlayer() && this.insideScreen()) return this.changeAIState(r.AttackPlayer),
            void this.enterAttackState();
            if (a <= t) {
                if (this.node.setPosition(this.wantMovePos), this.canAttackPlayer() && this.insideScreen()) this.changeAIState(r.AttackPlayer),
                this.enterAttackState();
                else {
                    var i = -l.default.CANATTACKOFFY + 2 * l.default.CANATTACKOFFY * Math.random(),
                    n = this.attackFrame[1];
                    this.enemyWpType == l.RoleWpType.DoubleWp && Math.random() <= .5 && (n = this.attackFrame[0]),
                    this.node.x >= f.default.getIns().PlayerNode.x ? this.wantMovePos = cc.v3(f.default.getIns().PlayerNode.x + .85 * n, f.default.getIns().PlayerNode.y + i, 0) : this.wantMovePos = cc.v3(f.default.getIns().PlayerNode.x - .85 * n, f.default.getIns().PlayerNode.y + i, 0)
                }
            } else {
                var p = t * (S = g.normalize()).x,
                u = t * S.y;
                this.node.x += p,
                this.node.y += u,
                this.node.y < l.default.ROLEMOVEFRAME[0] ? this.node.y = l.default.ROLEMOVEFRAME[0] : this.node.y > l.default.ROLEMOVEFRAME[1] && (this.node.y = l.default.ROLEMOVEFRAME[1])
            }
            this.enemyWpType == l.RoleWpType.DoubleWp && this.canThrowTime >= l.default.ENEMYTHROWTIME && (console.log("准备投掷:" + this.enemyWpType), Math.abs(f.default.getIns().PlayerNode.x - this.node.x) >= l.default.ENEMYTHROWMINDIS && Math.abs(f.default.getIns().PlayerNode.y - this.node.y) < 40 && this.changeState(s.Throw));
            break;
            case s.Attack:
            case s.Attack2:
            case s.ByHit:
                break;
            case s.Dead:
                if (0 == this.isBoss) {
                var h = Math.floor(12 * this.stateTime);
                if (this.SpineNode.opacity = h % 2 == 0 ? 0 : 255, this.stateTime > .6) return void f.default.getIns().removeEnmey(this.node)
            } else if (this.stateTime > 3) return void f.default.getIns().removeEnmey(this.node);
            break;
            case s.ByHitFly:
                var y = void 0;
            y = this.SpineNode.scaleX > 0 ? l.default.BYHITFLYMOVESPEED * e: -l.default.BYHITFLYMOVESPEED * e,
            this.node.x += y,
            this.stateTime > .7 && this.changeState(s.FallDown);
            break;
            case s.FallDown:
                this.stateTime > 1 && (this.curLife <= 0 ? this.changeState(s.Dead) : this.changeState(s.GetUp));
            break;
            case s.Die:
                y = void 0,
            y = this.SpineNode.scaleX > 0 ? l.default.BYHITFLYMOVESPEED * e: -l.default.BYHITFLYMOVESPEED * e,
            this.node.x += y;
            break;
            case s.ByThrow:
                y = void 0,
            y = this.SpineNode.scaleX > 0 ? l.default.BYHITFLYMOVESPEED * e * 2 : -l.default.BYHITFLYMOVESPEED * e * 2,
            this.node.x += y,
            this.stateTime > .85 && this.changeState(s.FallDown);
            case s.MotorMove:
                if (y = void 0, this.SpineNode.scaleX < 0) {
                if (y = l.default.MotorMoveSpeed * e, this.node.x += y, this.node.x - f.default.getIns().PlayerNode.x >= l.default.MotorPassPlayerDis) {
                    if (this.motorNumber--, this.motorNumber <= 0) return void f.default.getIns().removeMotorByBiker(this.node);
                    this.changeState(s.MotorWait)
                }
            } else if (y = -l.default.MotorMoveSpeed * e, this.node.x += y, f.default.getIns().PlayerNode.x - this.node.x >= l.default.MotorPassPlayerDis) {
                if (this.motorNumber--, this.motorNumber <= 0) return void f.default.getIns().removeMotorByBiker(this.node);
                this.changeState(s.MotorWait)
            }
            if (0 == this.isMotorHit && f.default.getIns().canAttackPlayer(this.node)) {
                var m = Math.floor(this.attackPower * (1 + .3 * Math.random()));
                f.default.getIns().getPlayerScript().byHitFly(this.node, m),
                this.isMotorHit = !0
            }
            break;
            case s.MotorWait:
                this.stateTime > l.default.MotorWaitTime && this.changeState(s.MotorMove);
            break;
            case s.IdleMove:
                var g, S;
            if ((g = this.idleMoveDesPos.sub(this.node.position)).x > 0 ? this.SpineNode.scaleX = -Math.abs(this.SpineNode.scaleX) : this.SpineNode.scaleX = Math.abs(this.SpineNode.scaleX), t = this.speed * e, (a = g.mag()) <= t) this.node.setPosition(this.idleMoveDesPos),
            this.idleMoveCount++,
            this.idleMoveCount > l.default.IDLEMOVEMAXNUMBER ? (this.state = s.Standy, this.changeAIState(r.NearTo)) : this.findIdleMoveDesPos();
            else p = t * (S = g.normalize()).x,
            u = t * S.y,
            this.node.x += p,
            this.node.y += u,
            this.node.y < l.default.ROLEMOVEFRAME[0] ? this.node.y = l.default.ROLEMOVEFRAME[0] : this.node.y > l.default.ROLEMOVEFRAME[1] && (this.node.y = l.default.ROLEMOVEFRAME[1]);
            break;
            case s.DashReady:
                this.stateTime >= l.default.SumoDashReadyTime && this.changeState(s.Dash);
            break;
            case s.Dash:
                y = void 0,
            this.SpineNode.scaleX < 0 ? (y = l.default.SumoDashSpeed * e, this.node.x += y) : (y = -l.default.SumoDashSpeed * e, this.node.x += y),
            0 == this.isMotorHit && this.insideScreen() && f.default.getIns().canAttackPlayer(this.node) && (m = Math.floor(this.attackPower * (1 + .3 * Math.random())), f.default.getIns().getPlayerScript().byHitFly(this.node, m), this.isMotorHit = !0),
            this.stateTime >= l.default.SumoDashTime && (this.changeState(s.Standy), this.changeAIState(r.Idle));
        }
    },
    t.prototype.changeState = function(e) {
        if (this.state != e) {
            switch (this.state) {
                case s.Standy:
                case s.Move:
                    break;
                case s.Attack:
                case s.Attack2:
                    this.isSuperBody = !1;
                break;
                case s.ByHit:
                case s.Dead:
                case s.ByHitFly:
                case s.ByCaught0:
                case s.ByCaught1:
                case s.CaughtByHit:
                    break;
                case s.DashReady:
                    this.isSuperBody = !1,
                this.node.getChildByName("EffectNode").active = !1;
                break;
                case s.Dash:
                    this.isSuperBody = !1;
            }
            switch (this.state = e, this.stateTime = 0, cc.log("改变状态", e), this.updateWeapon(), this.state) {
                case s.Standy:
                case s.Move:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.Attack:
                case s.Attack2:
                    this.node.x < f.default.getIns().PlayerNode.x ? this.SpineNode.scaleX = -Math.abs(this.SpineNode.scaleX) : this.SpineNode.scaleX = Math.abs(this.SpineNode.scaleX),
                this.isBoss ? (this.isSuperBody = !0, this.state == s.Attack ? (this.curAttackName = "attack1", this.mySpine.setAnimation(0, "attack1", !1)) : (this.curAttackName = "attack2", this.mySpine.setAnimation(0, "attack2", !1))) : this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.ByHit:
                    this.byHitUpSpeed = l.default.BYHITFLYUPSPEED,
                this.faceToPlayer(),
                this.isBoss && p.default.getIns().playAudio(p.SoundType.Pain_BOSS01);
                break;
                case s.FallDown:
                    p.default.getIns().playAudio(p.SoundType.Body_fall);
                break;
                case s.Dead:
                    this.dropCurWeapon(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.ByHitFly:
                    this.dropCurWeapon(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.GetUp:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.Die:
                    this.dropCurWeapon(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.ByCaught0:
                case s.ByCaught1:
                    this.dropCurWeapon(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.CaughtByHit:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.CaughtDie:
                    this.dropCurWeapon(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.ByWheel0:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.ByWheel1:
                    this.mySpine.node.active = !1;
                break;
                case s.ByThrow:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.MotorMove:
                    this.isMotorHit = !1,
                this.faceToPlayer(),
                this.node.getChildByName("EffectNode").opacity = 0;
                break;
                case s.MotorWait:
                    this.node.getChildByName("EffectNode").opacity = 255,
                this.faceToPlayer(),
                this.node.y = l.default.ROLEMOVEFRAME[0] + Math.random() * (l.default.ROLEMOVEFRAME[1] - l.default.ROLEMOVEFRAME[0]);
                break;
                case s.IdleMove:
                    this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0),
                this.idleMoveOrgPos = this.node.position,
                this.idleMoveCount = 0,
                this.findIdleMoveDesPos();
                break;
                case s.Throw:
                    this.faceToPlayer(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !1);
                break;
                case s.DashReady:
                    this.node.getChildByName("EffectNode").active = !0,
                this.isMotorHit = !1,
                this.isSuperBody = !0,
                this.faceToPlayer(),
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
                break;
                case s.Dash:
                    this.isSuperBody = !0,
                this.mySpine.setAnimation(0, this.stateAniStr[this.state], !0);
            }
        }
    },
    t.prototype.spinePlayOver = function() {
        switch (this.state) {
            case s.Attack:
            case s.Attack2:
            case s.Throw:
                this.changeAIState(r.Idle);
            break;
            case s.ByHit:
                this.curAIState == r.Idle || this.curAIState == r.NearTo ? this.changeAIState(r.Idle) : this.curAIState == r.AttackPlayer && this.enterAttackState();
            break;
            case s.GetUp:
                this.changeAIState(r.Idle);
            break;
            case s.Die:
            case s.CaughtDie:
                this.changeState(s.Dead);
            break;
            case s.CaughtByHit:
                this.changeState(s.ByCaught1);
        }
    },
    t.prototype.spineAniEvent = function(e, t) {
        switch ("shake" == t.data.name && f.default.getIns().screenShake(!1), this.state) {
            case s.Attack:
            case s.Attack2:
                var a = 0;
            this.state == s.Attack2 && (a = 1);
            var o = 0;
            "attackon2" == t.data.name && (o = 1);
            var i = l.default.EnemyAttackRes[this.enemyIndex][a][o];
            if (cc.log("enemy attack name :", t.data.name), "attackon" == t.data.name) {
                if (this.isBoss && (this.enemyIndex == l.EnemyType.Boss1 ? p.default.getIns().playAudio(p.SoundType.Attack_BOSS01) : p.default.getIns().playAudio(p.SoundType.Attack_01)), f.default.getIns().canAttackPlayer(this.node)) {
                    var n = i * Math.floor(this.attackPower * (1 + .3 * Math.random()));
                    f.default.getIns().getPlayerScript().byAttack(this.node, n)
                }
            } else if ("attackon2" == t.data.name) this.isBoss && (this.enemyIndex == l.EnemyType.Boss1 ? p.default.getIns().playAudio(p.SoundType.Attack_BOSS01) : p.default.getIns().playAudio(p.SoundType.Attack_01)),
            f.default.getIns().canAttackPlayer(this.node, "attackon2") && (n = i * Math.floor(this.attackPower * (2 + .5 * Math.random())), f.default.getIns().getPlayerScript().byAttack(this.node, n));
            else if ("boom" == t.data.name) {
                this.isBoss && (this.enemyIndex == l.EnemyType.Boss1 ? p.default.getIns().playAudio(p.SoundType.Attack_BOSS01) : p.default.getIns().playAudio(p.SoundType.Attack_02));
                var r = void 0,
                c = void 0;
                this.node.x > f.default.getIns().PlayerNode.x ? (c = this.node.x - l.default.BOOMORGX - f.default.getIns().PlayerNode.x, r = this.node.x - l.default.BOOMORGX) : (c = f.default.getIns().PlayerNode.x - (this.node.x + l.default.BOOMORGX), r = this.node.x + l.default.BOOMORGX),
                c = Math.min(c, 1.2 * this.attackFrame[1]);
                var d, u = (d = (c = Math.max(c, this.attackFrame[0])) <= .7 * this.attackFrame[1] ? l.default.BOOMFLYSPEEDY[0] : l.default.BOOMFLYSPEEDY[1]) / Math.abs(l.default.GAMEG),
                h = c / (Math.sqrt(2 * (l.default.BOOMORGY - l.default.BOOMLANDY) / Math.abs(l.default.GAMEG)) + 2 * u);
                f.default.getIns().PlayerNode.x < this.node.x && (h = -h);
                var y = cc.v3(r, this.node.y, 0),
                m = cc.v2(h, d),
                g = cc.v3(f.default.getIns().PlayerNode.x, this.node.y, 0);
                f.default.getIns().throwBoom(y, m, g, i * this.attackPower)
            }
            break;
            case s.GetUp:
                "attackon" == t.data.name ? f.default.getIns().canAttackPlayer(this.node) && (n = Math.floor(this.attackPower * (.3 + .1 * Math.random())), f.default.getIns().getPlayerScript().byHitFly(this.node, n)) : "shake" == t.data.name && p.default.getIns().playAudio(p.SoundType.Attack_ground);
            break;
            case s.Throw:
                if (cc.log("敌人投掷事件:", t.data.name, this.SpineNode.scaleX), "wp_off" == t.data.name || "attackon" == t.data.name) {
                var S = cc.v2(l.default.ROLEHANDHEIGHT, l.default.ROLEHANDY);
                this.SpineNode.scaleX > 0 && (S.x = -S.x);
                var A = void 0;
                "wp_box" == this.wpName ? A = l.DropType.Weapon0: "wp_trashcan" == this.wpName && (A = l.DropType.Weapon1),
                f.default.getIns().roleThrowFlyItem(this.node, S, A),
                this.updateAniState(l.RoleWpType.NoWp)
            }
        }
    },
    t.prototype.enterAttackState = function() {
        0 == this.isBoss ? this.enemyIndex == l.EnemyType.Sumo ? this.changeState(s.DashReady) : this.enemyIndex == l.EnemyType.WhiteEnemy ? Math.random() < .5 ? this.changeState(s.Attack) : this.changeState(s.Attack2) : this.enemyWpType == l.RoleWpType.DoubleWp && Math.abs(this.node.x - f.default.getIns().PlayerNode.x) > 1.5 * this.attackFrame[0] ? this.changeState(s.Throw) : this.changeState(s.Attack) : this.enemyIndex == l.EnemyType.Boss0 ? Math.abs(this.node.x - f.default.getIns().PlayerNode.x) > this.attackFrame[0] ? this.changeState(s.Attack2) : this.changeState(s.Attack) : Math.random() < .5 ? this.changeState(s.Attack) : this.changeState(s.Attack2)
    },
    t.prototype.changeAIState = function(e) {
        if (this.curAIState != e) switch (cc.log("切换AI控制", e), this.curAIState = e, this.aiStateTime = 0, this.curAIState) {
            case r.Idle:
                this.insideScreen() && Math.random() < .3 ? this.changeState(s.IdleMove) : (this.idleTime = .1 + .3 * Math.random(), this.changeState(s.Standy));
            break;
            case r.NearTo:
            case r.AttackPlayer:
        }
    },
    t.prototype.updateAI = function(e) {
        if (this.enemyIndex != l.EnemyType.Motorcycle) switch (this.aiStateTime += e, this.curAIState) {
            case r.Idle:
                (this.aiStateTime >= this.idleTime || 1 == f.default.getIns().enemyActiveSize()) && (this.canAttackPlayer() && this.insideScreen() ? this.changeAIState(r.AttackPlayer) : this.changeAIState(r.NearTo));
            break;
            case r.NearTo:
                if (this.state == s.Standy) {
                var t = -l.default.CANATTACKOFFY + 2 * l.default.CANATTACKOFFY * Math.random(),
                a = this.attackFrame[1];
                this.enemyWpType == l.RoleWpType.DoubleWp && Math.random() <= .5 && (a = this.attackFrame[0]),
                this.node.x >= f.default.getIns().PlayerNode.x ? this.wantMovePos = cc.v3(f.default.getIns().PlayerNode.x + .85 * a, f.default.getIns().PlayerNode.y + t, 0) : this.wantMovePos = cc.v3(f.default.getIns().PlayerNode.x - .85 * a, f.default.getIns().PlayerNode.y + t, 0),
                this.changeState(s.Move)
            }
            break;
            case r.AttackPlayer:
                this.state == s.Standy && this.enterAttackState();
        }
    },
    t.prototype.canAttackPlayer = function() {
        var e = l.default.CANATTACKOFFY;
        if (this.isBoss && (e += 30), Math.abs(this.node.y - f.default.getIns().PlayerNode.y) <= e) {
            if (this.enemyIndex == l.EnemyType.Boss0 && Math.abs(this.node.x - f.default.getIns().PlayerNode.x) <= this.attackFrame[1]) return ! 0;
            if (Math.abs(this.node.x - f.default.getIns().PlayerNode.x) <= this.attackFrame[1]) return cc.log("判断当前是否可以攻击到玩家 true"),
            !0
        }
        return cc.log("判断当前是否可以攻击到玩家 false"),
        !1
    },
    t.prototype.isCanHitByRect = function(e) {
        return new cc.Rect(this.node.x - l.default.ROLEBYATTACKSIZE.width / 2, this.node.y + l.default.ROLEBYATTACKSIZE.height / 3, l.default.ROLEBYATTACKSIZE.width, 2 * l.default.ROLEBYATTACKSIZE.height / 3).intersects(e)
    },
    t.prototype.attackRect = function(e) {
        var t;
        switch (void 0 === e && (e = ""), this.state) {
            case s.Attack:
            case s.Attack2:
                var a = this.state - s.Attack;
            if (this.enemyIndex == l.EnemyType.Boss0 && "attack2" == this.curAttackName) t = this.SpineNode.scaleX < 0 ? new cc.Rect(this.node.x + l.default.GrenadeDis - l.default.GrenadeBombSize / 2, this.node.y + l.default.ROLEHANDY, l.default.GrenadeBombSize, l.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - l.default.GrenadeDis - l.default.GrenadeBombSize / 2, this.node.y + l.default.ROLEHANDY, l.default.GrenadeBombSize, l.default.ROLEHANDHEIGHT);
            else {
                var o = this.attackFrame[a];
                "attackon2" == e && (o = 2 * this.attackFrame[a]),
                t = this.SpineNode.scaleX < 0 ? new cc.Rect(this.node.x, this.node.y + l.default.ROLEHANDY, o, l.default.ROLEHANDHEIGHT) : new cc.Rect(this.node.x - o, this.node.y + l.default.ROLEHANDY, o, l.default.ROLEHANDHEIGHT)
            }
            break;
            case s.GetUp:
                t = new cc.Rect(this.node.x - .3 * this.attackFrame[0], this.node.y + l.default.ROLEHANDY, .6 * this.attackFrame[0], l.default.ROLEHANDHEIGHT);
            break;
            case s.MotorMove:
            case s.Dash:
                t = new cc.Rect(this.node.x - this.attackFrame[0], this.node.y + l.default.ROLEHANDY, this.attackFrame[0], l.default.ROLEHANDHEIGHT);
        }
        return t
    },
    t.prototype.isCanByAttack = function() {
        return this.enemyIndex != l.EnemyType.Motorcycle && !(this.state == s.Dead || this.state == s.Die || this.state == s.ByHitFly || this.state == s.FallDown || this.state == s.GetUp || this.state == s.ByWheel0 || this.state == s.ByWheel1 || this.curLife <= 0)
    },
    t.prototype.isAcitve = function() {
        return this.curLife > 0
    },
    t.prototype.faceToPlayer = function() {
        var e = f.default.getIns().PlayerNode;
        this.node.x >= e.x ? (this.SpineNode.scaleX = Math.abs(this.SpineNode.scaleX), this.node.getChildByName("EffectNode") && (this.node.getChildByName("EffectNode").x = -740)) : (this.SpineNode.scaleX = -Math.abs(this.SpineNode.scaleX), this.node.getChildByName("EffectNode") && (this.node.getChildByName("EffectNode").x = 740))
    },
    t.prototype.delLife = function(e, t) {
        void 0 === t && (t = !1);
        var a = this.curLife,
        o = l.DamageType.Normal;
        Math.random() <= h.default.getIns().getEnemyInfo(this.enemyIndex, 0, l.RoleInfoType.Block) ? (o = l.DamageType.Block, e *= .5) : Math.random() <= h.default.getIns().getRoleInfo(0, l.RoleInfoType.Crit) + f.default.getIns().PlayerNode.getComponent(y.default).getBuffAtt("crit") && (o = l.DamageType.Crit, e = 1.5 * e * (1 + f.default.getIns().PlayerNode.getComponent(y.default).getBuffAtt("critPower")));
        var i = h.default.getIns().getEnemyInfo(this.enemyIndex, this.level, l.RoleInfoType.Defense);
        e = Math.max(0, e - i),
        this.curLife -= e,
        f.default.getIns().PlayerNode.getComponent(y.default).addCombo(1),
        f.default.getIns().PlayerNode.getComponent(y.default).makeDamage(e);
        var n = cc.v2(0, 0);
        t && (n = this.SpineNode.scaleX < 0 ? cc.v2( - 80, 20) : cc.v2(80, 20));
        var r = !1;
        return 1 == this.isBoss && this.curLife <= 0 && a > 0 && (r = !0),
        f.default.getIns().showDamageEffect(e, l.RoleTeam.Enemy, this.isBoss, this.node, o, n, r),
        this.curLife <= 0 && (this.curLife = 0, this.state == s.ByCaught1 || this.state == s.CaughtByHit || (cc.log("切换到正常死亡，当前状态:" + this.state), this.changeState(s.Die)), !0)
    },
    t.prototype.byAttack = function(e, t) {
        void 0 === t && (t = !1),
        t ? (this.delLife(e, t), this.changeState(s.CaughtByHit)) : 0 != this.delLife(e) || this.isSuperBody || (this.changeState(s.ByHit), this.mySpine.setAnimation(0, u.Util.randomItemByArray(this.bruiseAniStr), !1))
    },
    t.prototype.byHitFly = function(e) {
        0 != this.delLife(e) || this.isSuperBody || this.changeState(s.ByHitFly)
    },
    t.prototype.byCaught = function(e) {
        this.faceToPlayer(),
        this.changeState(s.ByCaught0 + e)
    },
    t.prototype.caughtOver = function() {
        this.curLife <= 0 ? this.changeState(s.Dead) : this.changeState(s.GetUp)
    },
    t.prototype.byWheel = function(e) {
        this.faceToPlayer(),
        this.changeState(s.ByWheel0 + e)
    },
    t.prototype.wheelUpdate = function(e) {
        this.node.setPosition(e),
        this.faceToPlayer()
    },
    t.prototype.wheelOver = function(e) {
        this.mySpine.node.active = !0,
        this.node.setPosition(e),
        this.faceToPlayer(),
        this.changeState(s.ByHitFly)
    },
    t.prototype.changeHead = function(e) {
        switch (this.enemyIndex) {
            case l.EnemyType.RedEnemy:
            case l.EnemyType.YellowEnemy:
            case l.EnemyType.RedEnemyWp:
            case l.EnemyType.RedEnemyDoubleWp:
            case l.EnemyType.YellowEnemyWp:
            case l.EnemyType.YellowEnemyDoubleWp:
            case l.EnemyType.WhiteEnemy:
            case l.EnemyType.SchoolGirl:
            case l.EnemyType.SchoolGirlDoubleWp:
            case l.EnemyType.Biker:
            case l.EnemyType.BikerDoubleWp:
                var t = "tou_0" + (e + 1);
            this.mySpine.setAttachment("tou_1", t);
        }
    },
    t.prototype.changeWeapon = function() {
        if (!this.isBoss && this.enemyIndex != l.EnemyType.Motorcycle && this.enemyIndex != l.EnemyType.Sumo) {
            var e = this.wpName;
            "" == this.wpName && (e = "none"),
            this.mySpine.setAttachment("weapons", e)
        }
    },
    t.prototype.updateWeapon = function() {
        if (!this.isBoss && this.enemyIndex != l.EnemyType.Motorcycle && this.enemyIndex != l.EnemyType.Sumo) {
            var e = this.wpName;
            "" == this.wpName && (e = "none"),
            this.mySpine.setAttachment("weapons", e)
        }
    },
    t.prototype.dropCurWeapon = function() {
        if (this.enemyWpType == l.RoleWpType.DoubleWp) {
            var e;
            if ("wp_box" == this.wpName) e = l.DropType.Weapon0;
            else {
                if ("wp_trashcan" != this.wpName) return;
                e = l.DropType.Weapon1
            }
            f.default.getIns().roleDropWp(this.node, e),
            this.wpName = "",
            this.enemyWpType = l.RoleWpType.NoWp,
            this.updateWeapon(),
            this.updateAniState(this.enemyWpType)
        }
    },
    t.prototype.insideScreen = function() {
        var e = f.default.getIns().MainCamera.x,
        t = f.default.getIns().MainCamera.width;
        return ! (this.node.x + 120 < e - t / 2 || this.node.x - 120 > e + t / 2)
    },
    t.prototype.findIdleMoveDesPos = function() {
        this.idleMoveDesPos = cc.v3(this.idleMoveOrgPos.x - 100 + 200 * Math.random(), this.idleMoveOrgPos.y - 70 + 140 * Math.random(), 0),
        this.idleMoveDesPos.y < l.default.ROLEMOVEFRAME[0] ? this.idleMoveDesPos.y = l.default.ROLEMOVEFRAME[0] : this.idleMoveDesPos.y > l.default.ROLEMOVEFRAME[1] && (this.idleMoveDesPos.y = l.default.ROLEMOVEFRAME[1])
    },
    n([S], t.prototype, "isBoss", void 0),
    n([S({
        type: cc.Enum(l.EnemyType)
    })], t.prototype, "enemyIndex", void 0),
    n([S({
        type: cc.Enum(l.RoleWpType)
    })], t.prototype, "enemyWpType", void 0),
    n([g], t)
} (cc.Component);
a.default = A