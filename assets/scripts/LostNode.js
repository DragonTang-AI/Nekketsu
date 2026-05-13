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
d = e("GameManager"),
p = cc._decorator,
u = p.ccclass,
h = (p.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.start = function() {
        var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        s.default.getIns().logEvent(s.LogEventType.LostRelive, e + (c.default.getIns().curStage + 1), 1),
        s.default.getIns().logEvent(s.LogEventType.LostBack, e + (c.default.getIns().curStage + 1), 1)
    },
    t.prototype.initByExData = function() {},
    t.prototype.onRerButton = function() {
        s.default.getIns().showRewardVideo(function() {
            l.default.getIns().closePopUp(!0),
            d.default.getIns().playerRelive();
            var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
            s.default.getIns().logEvent(s.LogEventType.LostRelive, e + (c.default.getIns().curStage + 1), 2)
        },
        function() {},
        r.VideoType.ResultRelive)
    },
    t.prototype.onResetButton = function() {
        l.default.getIns().closePopUp(!0),
        cc.director.loadScene("HallScene");
        var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        s.default.getIns().logEvent(s.LogEventType.LostBack, e + (c.default.getIns().curStage + 1), 2)
    },
    n([u], t)
} (cc.Component));
a.default = h