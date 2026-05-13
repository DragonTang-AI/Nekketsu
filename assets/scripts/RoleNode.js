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
l = e("PlayerData"),
c = cc._decorator,
d = c.ccclass,
p = c.property,
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.LvLabel = null,
        t.PowerLabel = null,
        t.RoleSkillArray = new Array,
        t.RoleInfoArray = new Array,
        t
    }
    return i(t, e),
    t.prototype.start = function() {
        this.updateHUD()
    },
    t.prototype.update = function() {
        this.updateHUD()
    },
    t.prototype.updateHUD = function() {
        this.LvLabel.string = "" + (l.default.getIns().getRoleInfo(0, s.RoleInfoType.Level) + 1),
        this.PowerLabel.string = "" + l.default.getIns().getRoleInfo(0, s.RoleInfoType.Power),
        this.RoleInfoArray[0].string = "" + l.default.getIns().getRoleInfo(0, s.RoleInfoType.Life),
        this.RoleInfoArray[1].string = "" + l.default.getIns().getRoleInfo(0, s.RoleInfoType.Attack),
        this.RoleInfoArray[2].string = "" + l.default.getIns().getRoleInfo(0, s.RoleInfoType.Defense),
        this.RoleInfoArray[3].string = 100 * l.default.getIns().getRoleInfo(0, s.RoleInfoType.Crit) + "%",
        this.RoleInfoArray[4].string = 100 * l.default.getIns().getRoleInfo(0, s.RoleInfoType.Block) + "%";
        for (var e = 0; e < s.SkillType.MaxNum; e++) l.default.getIns().skillCanUse[e] ? (this.RoleSkillArray[e].getChildByName("RoleSkillLocked").active = !1, this.RoleSkillArray[e].color = new cc.Color(255, 255, 255)) : (this.RoleSkillArray[e].getChildByName("RoleSkillLocked").active = !0, this.RoleSkillArray[e].color = new cc.Color(127, 127, 127))
    },
    t.prototype.onSkillButton = function(e, t) {
        var a = Number(t);
        0 == l.default.getIns().skillCanUse[a] && r.default.getIns().showToast({
            msg: "技能尚未解锁"
        })
    },
    t.prototype.onLvUpButton = function() {
        r.default.getIns().showPopUpByBundle(r.PopUpEnum.LevelUpNode, {})
    },
    n([p(cc.Label)], t.prototype, "LvLabel", void 0),
    n([p(cc.Label)], t.prototype, "PowerLabel", void 0),
    n([p(cc.Node)], t.prototype, "RoleSkillArray", void 0),
    n([p(cc.Label)], t.prototype, "RoleInfoArray", void 0),
    n([d], t)
} (cc.Component);
a.default = u