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
r = e("Util"),
l = e("PlayerData"),
c = cc._decorator,
d = c.ccclass,
p = c.property,
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.CoinEffect = null,
        t.DiamondEffect = null,
        t.isDiamond = !1,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initByExData = function(e) {
        this.callBack = e.callBack,
        this.BirthFrame = e.BirthFrame,
        this.EndFrame = e.EndFrame,
        e.isDiamond && (this.isDiamond = !0),
        this.showEffectAni()
    },
    t.prototype.showEffectAni = function() {
        var e = this,
        t = Number(this.BirthFrame.getChildByName("NumLabel").getComponent(cc.Label).string),
        a = Math.floor(t / 12),
        o = l.default.getIns().gold;
        this.isDiamond && (o = l.default.getIns().diamond);
        for (var i = this.BirthFrame.getChildByName("SubSp").convertToWorldSpaceAR(cc.v2(0, 0)), n = this.node.convertToNodeSpaceAR(i), c = this.EndFrame.getChildByName("SubSp").convertToWorldSpaceAR(cc.v2(0, 0)), d = this.node.convertToNodeSpaceAR(c), p = 0, u = new Array, h = function() {
            var i; (i = f.isDiamond ? cc.instantiate(f.DiamondEffect) : cc.instantiate(f.CoinEffect)).parent = f.node,
            i.position = cc.v3(n.x - 100 + 200 * Math.random(), n.y - 100 + 200 * Math.random(), 0);
            var c = 1 + Math.floor(1.5 * Math.random());
            cc.tween(i).delay(.25 * Math.random()).call(function() {
                e.isDiamond || i.getComponent(cc.Animation).play()
            }).repeat(c, cc.tween().by(.1, {
                y: 10
            }).by(.1, {
                y: -10
            })).bezierTo(.2 + .15 * Math.random(), cc.v2(i.x, i.y), cc.v2(0, 0), d).call(function() {
                i.destroy(),
                o += a,
                e.EndFrame.getChildByName("NumLabel").getComponent(cc.Label).string = r.Util.scienceMath(o),
                e.EndFrame.getChildByName("SubSp").stopAllActions(),
                e.EndFrame.getChildByName("SubSp").scale = 1,
                cc.tween(e.EndFrame.getChildByName("SubSp")).to(.2, {
                    scale: 1.3
                }).to(.1, {
                    scale: 1
                }).start(),
                ++p >= 12 && (e.isDiamond ? (l.default.getIns().addDiamond(t), e.EndFrame.getChildByName("NumLabel").getComponent(cc.Label).string = r.Util.scienceMath(l.default.getIns().diamond)) : (l.default.getIns().addGold(t), e.EndFrame.getChildByName("NumLabel").getComponent(cc.Label).string = r.Util.scienceMath(l.default.getIns().gold)), e.callBack(), s.default.getIns().closePopUp(!1))
            }).start(),
            u.push(i)
        },
        f = this, y = 0; y < 12; y++) h()
    },
    n([p(cc.Prefab)], t.prototype, "CoinEffect", void 0),
    n([p(cc.Prefab)], t.prototype, "DiamondEffect", void 0),
    n([d], t)
} (cc.Component);
a.default = u