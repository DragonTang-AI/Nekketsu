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
var s = e("CommonApi"),
r = e("Consts"),
l = e("PopUpManager"),
c = e("PlayerData"),
d = cc._decorator,
p = d.ccclass,
u = d.property,
h = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BgSp = null,
        t.GoldLabel = null,
        t.LvLabel = null,
        t.ProgressBar = null,
        t.ExpLabel = null,
        t.TitleSp = null,
        t.ResultAtlas = null,
        t.time = 0,
        t.curExp = 0,
        t.expAddSpeed = 0,
        t.expTime = .5,
        t.expAniIs = !1,
        t.isWin = !0,
        t.showAddExp = 0,
        t.showLv = 0,
        t.showCurExp = 0,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initByExData = function(e) {
        var t = this;
        this.baseGold = e.gold,
        this.addExp = e.exp,
        this.isWin = e.isWin;
        var a = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        this.isWin ? (this.TitleSp.spriteFrame = this.ResultAtlas.getSpriteFrame("TitleSucc"), c.default.getIns().finishCurStage(), s.default.getIns().logEvent(s.LogEventType.WinNodeGet, a + (c.default.getIns().curStage + 1), 1), s.default.getIns().logEvent(s.LogEventType.WinNodeDoubleGet, a + (c.default.getIns().curStage + 1), 1)) : (this.TitleSp.spriteFrame = this.ResultAtlas.getSpriteFrame("TitleFail"), s.default.getIns().logEvent(s.LogEventType.LostResultView, a + (c.default.getIns().curStage + 1), 1), s.default.getIns().logEvent(s.LogEventType.LostResultDouble, a + (c.default.getIns().curStage + 1), 1)),
        this.GoldLabel.string = "x " + this.baseGold,
        this.LvLabel.string = "Lv." + (c.default.getIns().playerLv + 1);
        var o = r.default.PLAYEREXP[c.default.getIns().playerLv];
        this.ExpLabel.string = c.default.getIns().playerExp + "/" + o,
        this.ProgressBar.progress = c.default.getIns().playerExp / o,
        this.curExp = c.default.getIns().playerExp,
        this.expAddSpeed = e.exp / this.expTime,
        this.showAddExp = this.addExp,
        this.showLv = c.default.getIns().playerLv,
        this.showCurExp = c.default.getIns().playerExp,
        this.BgSp.scale = .3,
        cc.tween(this.BgSp).to(.2, {
            scale: 1
        }).call(function() {
            t.expAniIs = !0
        }).start()
    },
    t.prototype.update = function(e) {
        if (0 != this.expAniIs) {
            var t = Math.floor(this.expAddSpeed * e);
            t > this.showAddExp && (t = this.showAddExp),
            this.showAddExp -= t,
            this.showCurExp += t;
            var a = r.default.PLAYEREXP[this.showLv];
            this.showCurExp >= a && (this.showCurExp -= a, this.showLv++, a = r.default.PLAYEREXP[this.showLv], this.LvLabel.string = "Lv." + (this.showLv + 1)),
            this.ExpLabel.string = this.showCurExp + "/" + a,
            this.ProgressBar.progress = this.showCurExp / a,
            this.showAddExp <= 0 && (this.expAniIs = !1)
        }
    },
    t.prototype.onSureButton = function() {
        l.default.getIns().closePopUp(!1);
        var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        s.default.getIns().logEvent(s.LogEventType.WinNodeGet, e + (c.default.getIns().curStage + 1), 2),
        c.default.getIns().addGold(this.baseGold),
        c.default.getIns().addPlayerExp(this.addExp),
        cc.director.loadScene("HallScene")
    },
    t.prototype.onVideoButton = function() {
        var e = this,
        t = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        this.isWin ? s.default.getIns().logEvent(s.LogEventType.WinNodeDoubleGet, t + (c.default.getIns().curStage + 1), 2) : s.default.getIns().logEvent(s.LogEventType.LostResultDouble, t + (c.default.getIns().curStage + 1), 2),
        s.default.getIns().showRewardVideo(function() {
            l.default.getIns().closePopUp(!1),
            c.default.getIns().addGold(3 * e.baseGold),
            e.GoldLabel.string = "x " + 3 * e.baseGold,
            c.default.getIns().addPlayerExp(e.addExp),
            cc.director.loadScene("HallScene")
        },
        function() {},
        r.VideoType.ResultDoubleGet)
    },
    n([u(cc.Node)], t.prototype, "BgSp", void 0),
    n([u(cc.Label)], t.prototype, "GoldLabel", void 0),
    n([u(cc.Label)], t.prototype, "LvLabel", void 0),
    n([u(cc.ProgressBar)], t.prototype, "ProgressBar", void 0),
    n([u(cc.Label)], t.prototype, "ExpLabel", void 0),
    n([u(cc.Sprite)], t.prototype, "TitleSp", void 0),
    n([u(cc.SpriteAtlas)], t.prototype, "ResultAtlas", void 0),
    n([p], t)
} (cc.Component);
a.default = h