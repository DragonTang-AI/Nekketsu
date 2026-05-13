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
r = e("GuideModel"),
l = e("PopUpManager"),
c = cc._decorator,
d = c.ccclass,
p = c.property,
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BgSp = null,
        t.BuffLayout = null,
        t.ItemNode = null,
        t.CommonAtlas = null,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initByExData = function(e) {
        this.callBack = e.callBack,
        this.itemData = e.itemData;
        for (var t = 0; t < this.itemData.length; t++) {
            var a = this.itemData[t],
            o = void 0;
            0 == t ? o = this.ItemNode: (o = cc.instantiate(this.ItemNode)).parent = this.BuffLayout,
            o.active = !0;
            var i = a.type,
            n = a.lv,
            l = s.default.BUFFEFFECTDATA[i];
            this.showItemNode(o, l, i, n)
        }
        this.BgSp.scale = .3,
        cc.tween(this.BgSp).to(.2, {
            scale: 1
        }).call(function() {}).start(),
        r.default.getIns().changeBgView(this.node),
        r.default.getIns().sendPassNeed(r.PassNeed.ShowBuffNode)
    },
    t.prototype.showItemNode = function(e, t, a, o) {
        e.getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("frame_food_lv" + (o + 1)),
        e.getChildByName("TitleLabel").getComponent(cc.Label).string = t.name;
        var i = t.desc.replace("XX", "" + Math.floor(100 * (t.num + o * t.up)));
        e.getChildByName("DescLabel").getComponent(cc.Label).string = i,
        e.getChildByName("BuffIcon").getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("buff" + a)
    },
    t.prototype.update = function() {},
    t.prototype.onGameButton = function() {
        r.default.getIns().sendPassNeed(r.PassNeed.BackGame),
        this.callBack(),
        l.default.getIns().closePopUp(!1)
    },
    t.prototype.onHomeButton = function() {
        l.default.getIns().showPopUpByBundle(l.PopUpEnum.SureBackHall)
    },
    n([p(cc.Node)], t.prototype, "BgSp", void 0),
    n([p(cc.Node)], t.prototype, "BuffLayout", void 0),
    n([p(cc.Node)], t.prototype, "ItemNode", void 0),
    n([p(cc.SpriteAtlas)], t.prototype, "CommonAtlas", void 0),
    n([d], t)
} (cc.Component);
a.default = u