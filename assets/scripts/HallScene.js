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
c = e("SoundManager"),
d = e("PlayerData"),
p = e("StageNode"),
u = cc._decorator,
h = u.ccclass,
f = u.property,
y = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BtnNodeArray = new Array,
        t.hallAtlas = null,
        t.LvLabel = null,
        t.ExpBar = null,
        t.ExpLabel = null,
        t.MaxExpLabel = null,
        t.GoldLabel = null,
        t.HPLabel = null,
        t.StageNode = null,
        t.RoleNode = null,
        t.GoldAddBtn = null,
        t.HPAddBtn = null,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        s.default.getIns().curApi == s.APIModel.M4399 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.GoldAddBtn.active = !1, this.HPAddBtn.active = !1, this.node.getChildByName("BottomUI").getChildByName("ButtonNode2").active = !1, this.node.getChildByName("BottomUI").getChildByName("ButtonNode3").active = !1),
        this.node.getChildByName("TopUI").getChildByName("M4399").active = s.default.getIns().curApi == s.APIModel.M4399,
        this.node.getChildByName("TopUI").getChildByName("N4399").active = s.default.getIns().curApi == s.APIModel.M4399
    },
    t.prototype.start = function() {
        var e = this;
        c.default.getIns().playMusic(0),
        d.default.getIns().saveNewPlayerDay(),
        this.changeTip(0),
        this.updateHUD(),
        d.default.getIns().isFirstHall && s.default.getIns().logEvent(s.LogEventType.EnterHall, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2)),
        this.scheduleOnce(function() {
            d.default.getIns().firstPassStage >= 0 ? l.default.getIns().showPopUpByBundle(l.PopUpEnum.UnlockNode, {
                lockData: r.default.UNLOCKSTAGEDROP[d.default.getIns().firstPassStage],
                callBack: function() {
                    e.StageNode.getComponent(p.default).toCurPageUnlockEffect()
                }
            }) : e.StageNode.getComponent(p.default).toCurPage()
        },
        .1),
        d.default.getIns().isFirstHall = !1,
        s.default.getIns().logEvent(s.LogEventType.HallRole, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 1),
        s.default.getIns().logEvent(s.LogEventType.HallStage, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 1),
        s.default.getIns().logEvent(s.LogEventType.HallNPC, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 1),
        s.default.getIns().logEvent(s.LogEventType.HallShop, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 1)
    },
    t.prototype.updateHUD = function() {
        this.LvLabel.string = "" + (d.default.getIns().playerLv + 1),
        this.ExpLabel.string = "" + d.default.getIns().playerExp;
        var e = r.default.PLAYEREXP[d.default.getIns().playerLv];
        this.MaxExpLabel.string = "" + e,
        this.ExpBar.fillRange = d.default.getIns().playerExp / e,
        this.GoldLabel.string = "" + d.default.getIns().gold,
        this.HPLabel.string = "" + d.default.getIns().hp
    },
    t.prototype.update = function() {
        this.updateHUD()
    },
    t.prototype.changeTip = function(e) {
        for (var t = 0; t < this.BtnNodeArray.length; t++) {
            var a = this.BtnNodeArray[t];
            t == e ? (a.getChildByName("BtnBg").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnBg1"), a.getChildByName("BtnIcon").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnIcon" + t + "b"), a.getChildByName("BtnLabel").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnLabel" + t + "b")) : (a.getChildByName("BtnBg").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnBg0"), a.getChildByName("BtnIcon").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnIcon" + t + "a"), a.getChildByName("BtnLabel").getComponent(cc.Sprite).spriteFrame = this.hallAtlas.getSpriteFrame("BtnLabel" + t + "b"))
        }
        0 == e ? (this.StageNode.active = !0, this.RoleNode.active = !1, s.default.getIns().logEvent(s.LogEventType.HallStage, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 2)) : (this.StageNode.active = !1, this.RoleNode.active = !0, s.default.getIns().logEvent(s.LogEventType.HallRole, "" + (!0 === d.default.getIns().getIsNewPlayer() ? 1 : 2), 2))
    },
    t.prototype.onBottomButton = function(e, t) {
        this.changeTip(Number(t))
    },
    t.prototype.onAddGoldButton = function() {},
    t.prototype.onAddHPButton = function() {},
    n([f(cc.Node)], t.prototype, "BtnNodeArray", void 0),
    n([f(cc.SpriteAtlas)], t.prototype, "hallAtlas", void 0),
    n([f(cc.Label)], t.prototype, "LvLabel", void 0),
    n([f(cc.Sprite)], t.prototype, "ExpBar", void 0),
    n([f(cc.Label)], t.prototype, "ExpLabel", void 0),
    n([f(cc.Label)], t.prototype, "MaxExpLabel", void 0),
    n([f(cc.Label)], t.prototype, "GoldLabel", void 0),
    n([f(cc.Label)], t.prototype, "HPLabel", void 0),
    n([f(cc.Node)], t.prototype, "StageNode", void 0),
    n([f(cc.Node)], t.prototype, "RoleNode", void 0),
    n([f(cc.Node)], t.prototype, "GoldAddBtn", void 0),
    n([f(cc.Node)], t.prototype, "HPAddBtn", void 0),
    n([h], t)
} (cc.Component);
a.default = y