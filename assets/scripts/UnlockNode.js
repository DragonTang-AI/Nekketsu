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
        return t.ItemNode = null,
        t.Layout = null,
        t.CommonAtlas = null,
        t
    }
    return i(t, e),
    t.prototype.start = function() {
        var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        s.default.getIns().logEvent(s.LogEventType.NewSkill, e + (c.default.getIns().curStage + 1), 1)
    },
    t.prototype.initByExData = function(e) {
        this.lockData = e.lockData,
        this.callBack = e.callBack;
        for (var t = 0; t < this.lockData.length; t++) {
            var a = this.lockData[t],
            o = void 0;
            0 == t ? o = this.ItemNode: (o = cc.instantiate(this.ItemNode)).parent = this.Layout,
            o.active = !0,
            o.getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("button_skill" + (a + 1)),
            o.getChildByName("Label").getComponent(cc.Label).string = r.default.DROPDESC[a]
        }
    },
    t.prototype.onSureButton = function() {
        var e = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
        s.default.getIns().logEvent(s.LogEventType.NewSkill, e + (c.default.getIns().curStage + 1), 2),
        c.default.getIns().firstPassStage = -1,
        this.callBack(),
        l.default.getIns().closePopUp(!1)
    },
    n([u(cc.Node)], t.prototype, "ItemNode", void 0),
    n([u(cc.Node)], t.prototype, "Layout", void 0),
    n([u(cc.SpriteAtlas)], t.prototype, "CommonAtlas", void 0),
    n([p], t)
} (cc.Component);
a.default = h