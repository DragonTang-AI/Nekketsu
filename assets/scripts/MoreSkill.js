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
var s = cc._decorator,
r = s.ccclass,
l = s.property,
c = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BgSp = null,
        t.index = 0,
        t.signX = [232, 423],
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initByExData = function(e) {
        this.callBack = e.callBack,
        this.index = e.index,
        this.BgSp.scale = .3,
        cc.tween(this.BgSp).to(.2, {
            scale: 1
        }).call(function() {}).start(),
        this.node.getChildByName("MaskShowNode").x = this.signX[this.index],
        this.node.getChildByName("MaskTouchNode").x = this.signX[this.index],
        this.node.getChildByName("MaskC").x = this.signX[this.index],
        this.node.getChildByName("ArrowNode").x = this.signX[this.index]
    },
    t.prototype.update = function() {},
    t.prototype.onCloseButton = function() {
        this.callBack(),
        this.node.active = !1
    },
    n([l(cc.Node)], t.prototype, "BgSp", void 0),
    n([r], t)
} (cc.Component);
a.default = c