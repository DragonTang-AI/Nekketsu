var e = require;
var t = module;
var a = exports;
var o = this && this.__decorate ||
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
var i = e("Consts"),
n = cc._decorator,
s = n.ccclass,
r = (n.property,
function() {
    function e() {
        this.loadIsNewPlayer = !0,
        this.gold = 0,
        this.diamond = 0,
        this.hp = 100,
        this.passStage = -1,
        this.playerLv = 0,
        this.playerExp = 0,
        this.roleLv = [0, 0, 0, 0, 0, 0, 0, 0],
        this.curStage = 0,
        this.firstPassStage = -1,
        this.stagePassState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        this.stagePassTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        this.saveTime = 0,
        this.saveYear = 0,
        this.saveMonth = 0,
        this.saveDate = 0,
        this.skillUnlock = [!0, !0, !0, !1, !1],
        this.skillCanUse = [!1, !0, !0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
        this.isFirstHall = !0,
        this.guideFinish = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    var t;
    return t = e,
    e.getIns = function() {
        return t._ins || (t._ins = new t),
        t._ins
    },
    e.prototype.saveData = function() {
        var e = new Date;
        this.saveYear = e.getFullYear(),
        this.saveMonth = e.getMonth(),
        this.saveDate = e.getDate();
        var t = {
            gold: this.gold,
            diamond: this.diamond,
            hp: this.hp,
            passStage: this.passStage,
            playerLv: this.playerLv,
            playerExp: this.playerExp,
            roleLv: this.roleLv,
            stagePassState: this.stagePassState,
            stagePassTime: this.stagePassTime,
            saveTime: e.getTime(),
            saveYear: this.saveYear,
            saveMonth: this.saveMonth,
            saveDate: this.saveDate,
            skillUnlock: this.skillUnlock,
            guideFinish: this.guideFinish
        };
        cc.sys.localStorage.setItem(i.default.SAVEDATANAME, JSON.stringify(t))
    },
    e.prototype.loadData = function() {
        var e = cc.sys.localStorage.getItem(i.default.SAVEDATANAME),
        t = new Date,
        a = t.getFullYear(),
        o = t.getMonth(),
        n = t.getDate();
        if (t.getDay(), null != e && e.length > 0) {
            var s = JSON.parse(e);
            null != s.gold && (this.gold = s.gold),
            null != s.diamond && (this.diamond = s.diamond),
            null != s.hp && (this.hp = s.hp),
            null != s.passStage && (this.passStage = s.passStage),
            null != s.playerLv && (this.playerLv = s.playerLv),
            null != s.playerExp && (this.playerExp = s.playerExp),
            null != s.roleLv && (this.roleLv = s.roleLv),
            null != s.stagePassState && (this.stagePassState = s.stagePassState),
            null != s.stagePassTime && (this.stagePassTime = s.stagePassTime),
            null != s.saveTime && (this.saveTime = s.saveTime),
            null != s.saveYear && (this.saveYear = s.saveYear),
            null != s.saveMonth && (this.saveMonth = s.saveMonth),
            null != s.saveDate && (this.saveDate = s.saveDate),
            null != s.skillUnlock && (this.skillUnlock = s.skillUnlock),
            null != s.guideFinish && (this.guideFinish = s.guideFinish);
            var r = Math.floor(new Date().getTime() - this.saveTime) / 1e3;
            if (r > 0) for (var l = 0; l < this.stagePassTime.length; l++) this.stagePassTime[l] -= r;
            this.saveYear == a && this.saveMonth == o && this.saveDate == n || (this.saveYear = a, this.saveMonth = o, this.saveDate = n, this.saveData())
        } else this.gold = 0,
        this.diamond = 0;
        if (this.passStage >= 0) for (l = 0; l < this.passStage + 1; l++) for (var c = i.default.UNLOCKSTAGEDROP[l], d = 0; d < c.length; d++) this.skillCanUse[d] = !0
    },
    e.prototype.saveNewPlayerDay = function() {
        var e = cc.sys.localStorage.getItem(i.default.SAVEDAYDATANAME);
        if (null == e || 0 == e.length) {
            var t = new Date().getDate(),
            a = {
                saveDay: t
            };
            cc.sys.localStorage.setItem(i.default.SAVEDAYDATANAME, JSON.stringify(a)),
            console.log("保存的日期:", t)
        }
    },
    e.prototype.initNewPlayer = function() {
        this.loadIsNewPlayer = !0;
        var e = cc.sys.localStorage.getItem(i.default.SAVEDAYDATANAME);
        if (null != e && e.length > 0) {
            var t = JSON.parse(e),
            a = new Date().getDate();
            t.saveDay != a ? (console.log("不是同一天:", t.saveDay, a), this.loadIsNewPlayer = !1) : console.log("同一天:", t.saveDay, a)
        }
    },
    e.prototype.getIsNewPlayer = function() {
        return this.loadIsNewPlayer
    },
    e.prototype.addGold = function(e) {
        this.gold += Number(e),
        this.saveData()
    },
    e.prototype.addDiamond = function(e) {
        this.diamond += Number(e),
        this.saveData()
    },
    e.prototype.addPlayerExp = function(e) {
        this.playerExp += e;
        for (var a = 0; a < 5; a++) this.playerExp >= i.default.PLAYEREXP[t.getIns().playerLv] && (this.playerExp -= i.default.PLAYEREXP[t.getIns().playerLv], t.getIns().playerLv++);
        this.saveData()
    },
    e.prototype.roleLevelUp = function(e) {
        this.roleLv[e]++,
        this.saveData()
    },
    e.prototype.finishCurStage = function() {
        if (this.passStage < this.curStage) {
            if (this.firstPassStage = this.curStage, this.passStage = this.curStage, this.passStage >= 0) for (var e = 0; e < this.passStage + 1; e++) for (var t = i.default.UNLOCKSTAGEDROP[e], a = 0; a < t.length; a++) this.skillCanUse[a] = !0;
            this.saveData()
        }
    },
    e.prototype.getRoleInfo = function(e, t, a) {
        void 0 === a && (a = 0);
        var o = this.roleLv[e] + a;
        switch (t) {
            case i.RoleInfoType.Life:
                return 500 + i.default.ROLELVUPXX[0] * o;
            case i.RoleInfoType.Attack:
                return 50 + i.default.ROLELVUPXX[1] * o;
            case i.RoleInfoType.Defense:
                return 40 + i.default.ROLELVUPXX[2] * o;
            case i.RoleInfoType.Crit:
            case i.RoleInfoType.Block:
                return.1;
            case i.RoleInfoType.Level:
                return o;
            case i.RoleInfoType.Power:
                return Math.floor(1.1 * (300 + i.default.ROLELVUPXX[0] * o + 15 * (15 + i.default.ROLELVUPXX[2] * o)) + 1.1 * (50 + i.default.ROLELVUPXX[1] * o));
        }
    },
    e.prototype.getEnemyInfo = function(e, t, a) {
        switch (a) {
            case i.RoleInfoType.Life:
                return i.default.EnemyInfo[e][0] + i.default.EnemyInfo[e][3] * t;
            case i.RoleInfoType.Attack:
                return i.default.EnemyInfo[e][1] + i.default.EnemyInfo[e][4] * t;
            case i.RoleInfoType.Defense:
                return i.default.EnemyInfo[e][2] + i.default.EnemyInfo[e][5] * t;
            case i.RoleInfoType.Crit:
            case i.RoleInfoType.Block:
                return.1;
        }
    },
    e.prototype.statePassStage = function(e) {
        this.stagePassState[e] = 1,
        this.stagePassTime[e] = i.default.PASSSTAGETIME
    },
    e.prototype.finishPassStage = function(e) {
        this.stagePassState[e] = 2,
        this.stagePassTime[e] = 0
    },
    e.prototype.getPassStage = function(e) {
        this.stagePassState[e] = 0,
        this.stagePassTime[e] = 0
    },
    e.prototype.updateByPopUpManager = function(e) {
        for (var t = 0; t < this.stagePassState.length; t++) 1 == this.stagePassState[t] && (this.stagePassTime[t] -= e, this.stagePassTime[t] <= 0 && this.finishPassStage(t))
    },
    e._ins = null,
    t = o([s], e)
} ());
a.default = r