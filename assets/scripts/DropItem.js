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
        t.dropTime = 0,
        t.dropOrgY = 0,
        t.isDisByPlayer = !1,
        t.isDisJump = !1,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.changeDropSprite = function(e) {
        this.dropNode.getComponent(cc.Sprite).spriteFrame = e
    },
    t.prototype.disJump = function(e) {
        this.isDisJump = !0,
        this.curSpeed.y = 500,
        this.curSpeed.x = e ? -100 - 50 * Math.random() : 100 + 50 * Math.random()
    },
    t.prototype.initDrop = function(e, t) {
        this.dropType = e,
        this.Pickup = this.node.getChildByName("Pickup"),
        this.Pickup.active = this.dropType == s.DropType.Weapon0 || this.dropType == s.DropType.Weapon1,
        this.dropNode = this.node.getChildByName("drop"),
        this.curSpeed = t,
        this.jumpNum = 0,
        this.floorTime = 0,
        this.isFlyDes = !1,
        this.dropTime = 0
    },
    t.prototype.initWpDrop = function(e) {
        this.dropType = e,
        this.Pickup = this.node.getChildByName("Pickup"),
        this.Pickup.active = this.dropType == s.DropType.Weapon0 || this.dropType == s.DropType.Weapon1,
        this.dropNode = this.node.getChildByName("drop"),
        this.jumpNum = 2
    },
    t.prototype.initWpByPickUpRole = function(e, t) {
        console.log("初始化武器掉落:" + e),
        this.dropType = e,
        this.Pickup = this.node.getChildByName("Pickup"),
        this.Pickup.active = this.dropType == s.DropType.Weapon0 || this.dropType == s.DropType.Weapon1,
        this.dropNode = this.node.getChildByName("drop"),
        this.dropNode.y = t,
        this.curSpeed = cc.v2(0, 0),
        this.jumpNum = 1
    },
    t.prototype.isCanPickUp = function() {
        return this.dropType == s.DropType.Weapon0 || this.dropType == s.DropType.Weapon1
    },
    t.prototype.update = function(e) {
        if (!c.default.getIns().isPauseGame && !r.default.getIns().isPauseGame) return this.isDisJump ? (this.curSpeed.y -= 1600 * e, this.node.x += this.curSpeed.x * e, this.dropNode.y += this.curSpeed.y * e, void(this.dropNode.y <= 0 && (this.dropNode.y = 0, this.isDisJump = !1))) : void(this.jumpNum >= 2 || (this.curSpeed.y -= 1600 * e, this.node.x += this.curSpeed.x * e, this.dropNode.y += this.curSpeed.y * e, this.dropNode.y <= 0 && (this.dropNode.y = 0, this.jumpNum++, this.curSpeed.y = .5 * Math.abs(this.curSpeed.y), this.curSpeed.x = .6 * this.curSpeed.x, l.default.getIns().playAudio(l.SoundType.Coin))))
    },
    t.prototype.flyToDes = function(e, t) {
        var a = this;
        this.desNode = e,
        this.node.parent = c.default.getIns().node.getChildByName("UILayout"),
        this.node.x -= c.default.getIns().MainCamera.x;
        var o = this.desNode.position;
        o = o.add(this.desNode.parent.position),
        l.default.getIns().playAudio(l.SoundType.Coin_Collect),
        cc.tween(this.node).to(s.default.DROPGOLDFLYTIME, {
            position: o
        }).call(function() {
            c.default.getIns().activeSkill(t),
            a.node.destroy()
        }).start()
    },
    n([p], t)
} (cc.Component));
a.default = u