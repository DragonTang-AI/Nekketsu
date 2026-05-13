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
        return t.GoldNeedLabel = null,
        t.LevelUpEffectNode = null,
        t.isEffect = !1,
        t
    }
    return i(t, e),
    t.prototype.start = function() {
        var e = this;
        s.default.getIns().curApi == s.APIModel.M4399 && (this.node.getChildByName("LevelTipBtn0").active = !1, this.node.getChildByName("LevelTipBtn1").active = !1, this.node.getChildByName("LevelTipBtn2").active = !1),
        this.LevelUpEffectNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            e.LevelUpEffectNode.active = !1,
            e.isEffect = !1
        }),
        this.updateView()
    },
    t.prototype.initByExData = function() {},
    t.prototype.updateView = function() {
        var e = c.default.getIns().getRoleInfo(0, r.RoleInfoType.Level);
        this.GoldNeedLabel.string = "x " + (300 + 150 * e),
        this.node.getChildByName("LvLabel0").getComponent(cc.Label).string = "" + (e + 1),
        this.node.getChildByName("LvLabel1").getComponent(cc.Label).string = "" + (e + 2),
        this.node.getChildByName("InfoLabel0").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Life),
        this.node.getChildByName("InfoLabel0a").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Life, 1),
        this.node.getChildByName("InfoLabel1").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Attack),
        this.node.getChildByName("InfoLabel1a").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Attack, 1),
        this.node.getChildByName("InfoLabel2").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Defense),
        this.node.getChildByName("InfoLabel2a").getComponent(cc.Label).string = "" + c.default.getIns().getRoleInfo(0, r.RoleInfoType.Defense, 1),
        this.node.getChildByName("InfoLabel3").getComponent(cc.Label).string = 100 * c.default.getIns().getRoleInfo(0, r.RoleInfoType.Crit) + "%",
        this.node.getChildByName("InfoLabel3a").getComponent(cc.Label).string = 100 * c.default.getIns().getRoleInfo(0, r.RoleInfoType.Crit, 1) + "%",
        this.node.getChildByName("InfoLabel4").getComponent(cc.Label).string = 100 * c.default.getIns().getRoleInfo(0, r.RoleInfoType.Block) + "%",
        this.node.getChildByName("InfoLabel4a").getComponent(cc.Label).string = 100 * c.default.getIns().getRoleInfo(0, r.RoleInfoType.Block, 1) + "%"
    },
    t.prototype.onTipButton = function(e, t) {
        Number(t) > 0 && l.default.getIns().showToast({
            msg: "该功能未开放"
        })
    },
    t.prototype.onCloseButton = function() {
        l.default.getIns().closePopUp(!1)
    },
    t.prototype.onLvUpButton = function() {
        if (!this.isEffect) {
            var e = 300 + 200 * c.default.getIns().getRoleInfo(0, r.RoleInfoType.Level);
            c.default.getIns().gold < e ? l.default.getIns().showToast({
                msg: "金币不足"
            }) : (c.default.getIns().gold -= e, c.default.getIns().roleLevelUp(0), this.isEffect = !0, this.LevelUpEffectNode.active = !0, this.LevelUpEffectNode.getComponent(sp.Skeleton).setAnimation(0, "animation", !1), this.updateView())
        }
    },
    n([u(cc.Label)], t.prototype, "GoldNeedLabel", void 0),
    n([u(cc.Node)], t.prototype, "LevelUpEffectNode", void 0),
    n([p], t)
} (cc.Component);
a.default = h