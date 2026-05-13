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
var s = e("PopUpManager"),
r = e("GameManager"),
l = cc._decorator,
c = l.ccclass,
d = (l.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.isActive = !0,
        t.deadState = 0,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initFlyItem = function(e, t, a) {
        this.team = e,
        this.curSpeed = t,
        this.attackPower = a,
        this.Sprite = this.node.getChildByName("Sprite"),
        this.orgX = this.node.x
    },
    t.prototype.changeFlyItemSprite = function(e) {
        this.Sprite.getComponent(cc.Sprite).spriteFrame = e,
        this.hitSize = new cc.Size(this.Sprite.width, this.Sprite.height)
    },
    t.prototype.getHitSize = function() {
        return this.hitSize
    },
    t.prototype.update = function(e) {
        var t = this;
        r.default.getIns().isPauseGame || s.default.getIns().isPauseGame || (0 == this.isActive ? 0 == this.deadState ? (this.node.x -= this.curSpeed.x * e * .1, this.curSpeed.y += -1500 * e, this.node.y += this.curSpeed.y * e, this.node.y <= this.orgY - 100 && (this.deadState = 1, cc.tween(this.node).delay(.2).to(.15, {
            opacity: 0
        }).to(.15, {
            opacity: 255
        }).to(.15, {
            opacity: 0
        }).to(.15, {
            opacity: 255
        }).to(.15, {
            opacity: 0
        }).call(function() {
            t.node.destroy()
        }).start())) : this.deadState: this.node.x += this.curSpeed.x * e)
    },
    t.prototype.IsActive = function() {
        return this.isActive
    },
    t.prototype.deadRotation = function() {
        this.isActive = !1,
        this.orgY = this.node.y,
        this.curSpeed.y = 200,
        this.deadState = 0
    },
    n([c], t)
} (cc.Component));
a.default = d