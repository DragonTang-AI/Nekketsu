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
        t.floorTime = 0,
        t.isFlyDes = !1,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initBoom = function(e, t, a, o) {
        this.curSpeed = e,
        this.isFlyDes = !1,
        this.signNode = a,
        this.attackPower = o,
        this.boomNode = this.node.getChildByName("boom"),
        this.boomNode.y = t,
        this.shadowNode = this.node.getChildByName("shadow")
    },
    t.prototype.update = function(e) {
        if (!c.default.getIns().isPauseGame && !r.default.getIns().isPauseGame && (this.curSpeed.y -= s.default.GAMEG * e, this.node.x += this.curSpeed.x * e, this.boomNode.y += this.curSpeed.y * e, this.boomNode.y <= s.default.BOOMLANDY)) {
            if (this.boomNode.y = s.default.BOOMLANDY, l.default.getIns().playAudio(l.SoundType.Hit02), c.default.getIns().showBoomEffect(this.node.position), c.default.getIns().canAttackPlayer(this.node, "")) {
                var t = Math.floor(this.attackPower * (1 + .3 * Math.random()));
                c.default.getIns().getPlayerScript().byAttack(this.node, t)
            }
            this.signNode.destroy(),
            this.node.destroy()
        }
    },
    n([p], t)
} (cc.Component));
a.default = u