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
r = e("SoundManager"),
l = cc._decorator,
c = l.ccclass,
d = l.property,
p = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.GuideNode = null,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        s.default.getIns().curApi == s.APIModel.M4399 && (this.node.getComponent(cc.Canvas).fitHeight = !0)
    },
    t.prototype.start = function() {
        r.default.getIns().playMusic(2),
        this.GuideNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            cc.director.loadScene("GameScene")
        })
    },
    t.prototype.onSkipButton = function() {
        cc.director.loadScene("GameScene")
    },
    n([d(cc.Node)], t.prototype, "GuideNode", void 0),
    n([c], t)
} (cc.Component);
a.default = p