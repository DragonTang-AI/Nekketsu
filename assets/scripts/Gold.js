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
c = e("GameManager"),
d = cc._decorator,
p = d.ccclass,
u = (d.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.jumpNum = 0,
        t.floorY = -142,
        t.floorTime = 0,
        t.isFlyDes = !1,
        t.dropTime = 0,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initSpeed = function(e, t, a) {
        this.desNode = e,
        this.shadow = this.node.getChildByName("shadow"),
        this.goldNode = this.node.getChildByName("SubNode"),
        this.curSpeed = t,
        this.jumpNum = 0,
        this.floorTime = 0,
        this.isFlyDes = !1,
        this.dropTime = 0,
        this.floorY = a
    },
    t.prototype.flyToDes = function() {
        var e = this;
        this.shadow.active = !1,
        this.node.parent = c.default.getIns().node.getChildByName("UILayout"),
        this.node.x -= c.default.getIns().MainCamera.x;
        var t = this.desNode.position;
        t = t.add(this.desNode.parent.position),
        l.default.getIns().playAudio(l.SoundType.Coin_Collect),
        cc.tween(this.node).to(s.default.DROPGOLDFLYTIME, {
            position: t
        }).call(function() {
            c.default.getIns().addGold(s.default.GOLDPERNUMBER),
            e.node.destroy()
        }).start()
    },
    t.prototype.update = function(e) {
        if (!c.default.getIns().isPauseGame && !r.default.getIns().isPauseGame) {
            if (this.dropTime += e, this.dropTime >= s.default.DROPGOLDFULLTIME) return 0 == this.isFlyDes ? (this.isFlyDes = !0, void this.flyToDes()) : void 0;
            this.jumpNum >= 2 || (this.curSpeed.y -= 1100 * e, this.node.x += this.curSpeed.x * e, this.goldNode.y += this.curSpeed.y * e, this.goldNode.y <= 0 && (this.goldNode.y = 0, this.jumpNum++, this.curSpeed.y = .5 * Math.abs(this.curSpeed.y), this.curSpeed.x = .75 * this.curSpeed.x, l.default.getIns().playAudio(l.SoundType.Coin)))
        }
    },
    n([p], t)
} (cc.Component));
a.default = u