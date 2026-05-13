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
c = e("Util"),
d = e("GameManager"),
p = cc._decorator,
u = p.ccclass,
h = p.property,
f = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BgSp = null,
        t.ItemNodeArray = new Array,
        t.DescRichText = null,
        t.btnAll = null,
        t.btnChange = null,
        t.btnNo = null,
        t.btnGet = null,
        t.CommonAtlas = null,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.initByExData = function(e) {
        this.buffLevel = e.buffLevel,
        this.model = e.model,
        this.lifePer = e.lifePer,
        this.callBack = e.callBack,
        this.updateBuffView(this.model),
        this.BgSp.scale = .3,
        cc.tween(this.BgSp).to(.2, {
            scale: 1
        }).call(function() {}).start()
    },
    t.prototype.updateBuffView = function(e, t) {
        void 0 === t && (t = null);
        for (var a, o = e,
        i = new Array,
        n = 0; n < this.buffLevel.length; n++) {
            var s = this.buffLevel[n];
            s >= 0 && s < 3 && i.push(n)
        }
        if (null != t) a = t;
        else if (a = new Array, o == r.BuffModel.One) {
            if (this.lifePer < .5) a.push({
                type: r.BuffType.Pisa,
                lv: 2
            });
            else {
                c.Util.removeItemByArray(r.BuffType.Pisa, i);
                var l = c.Util.randomItemAndRemove(i),
                d = 2;
                Math.random() < .5 && (d = 1),
                a.push({
                    type: l,
                    lv: d
                })
            }
            cc.log("buffData", a)
        } else {
            var p = 3;
            for (this.lifePer < .5 ? (l = r.BuffType.Pisa, d = 0, a.push({
                type: l,
                lv: d,
                isRe: !0
            }), c.Util.removeItemByArray(r.BuffType.Pisa, i), p = 2) : c.Util.removeItemByArray(r.BuffType.Pisa, i), n = 0; n < p; n++) l = c.Util.randomItemAndRemove(i),
            d = this.buffLevel[l],
            a.push({
                type: l,
                lv: d
            });
            c.Util.randomArray(a)
        }
        switch (this.buffData = a, o) {
            case r.BuffModel.ThreeOne:
            case r.BuffModel.ThreeOneAll:
                this.DescRichText.string = "<color=#ffffff>挑选一份料理</c><color=#0fffff> </color>",
            this.threeOneData = this.buffData;
            break;
            case r.BuffModel.One:
                if (null != t) {
                var u = r.default.BUFFEFFECTDATA[t[0].type].name;
                this.DescRichText.string = "<color=#ffffff>恭喜您获得小南的青睐，</c><color=#ffff00>" + u + "</c><color=#ffffff>升级了</color>"
            } else this.buffData[0].type == r.BuffType.Pisa ? this.DescRichText.string = "<color=#ffffff>您好像受了重伤，小南为您准备了料理</c><color=#ffff00></color>": this.DescRichText.string = "<color=#ffffff>想要变得更强吗，来试试小南的料理</c><color=#ffff00></color>";
        }
        switch (o) {
            case r.BuffModel.ThreeOne:
            case r.BuffModel.ThreeOneAll:
                this.btnAll.active = !1,
            this.btnChange.active = !0,
            this.btnNo.active = !1,
            this.btnGet.active = !1,
            o == r.BuffModel.ThreeOneAll && (this.btnAll.active = !0),
            this.ItemNodeArray[0].active = !0,
            this.ItemNodeArray[1].active = !0,
            this.ItemNodeArray[2].active = !0;
            var h = [!1, !1, !1],
            f = !1;
            for (n = 0; n < 3; n++) if (1 == a[n].isRe) {
                f = !0,
                h[n] = !0;
                break
            }
            if (!f) {
                var y = -1,
                m = void 0;
                for (n = 0; n < 3; n++) {
                    var g = a[n];
                    g.lv > y && (y = g.lv, m = n)
                }
                h[m] = !0
            }
            for (n = 0; n < 3; n++) {
                var S = this.ItemNodeArray[n];
                S.active = !0;
                var A = a[n].type,
                v = a[n].lv,
                k = r.default.BUFFEFFECTDATA[A];
                this.showItemNode(S, k, A, v, h[n])
            }
            break;
            case r.BuffModel.One:
                this.btnAll.active = !1,
            this.btnChange.active = !1,
            this.btnNo.active = !0,
            this.btnGet.active = !0,
            this.ItemNodeArray[0].active = !1,
            this.ItemNodeArray[2].active = !1;
            var P = a[0].type,
            C = a[0].lv,
            B = r.default.BUFFEFFECTDATA[P];
            this.showItemNode(this.ItemNodeArray[1], B, P, C, !0);
        }
    },
    t.prototype.showItemNode = function(e, t, a, o, i) {
        switch (a) {
            case r.BuffType.Skill0:
            case r.BuffType.Skill1:
            case r.BuffType.Skill2:
            case r.BuffType.Skill3:
                e.getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("frame_food_lv2");
            break;
            default: e.getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("frame_food_lv" + (o + 1));
        }
        e.getChildByName("Recommended").active = i,
        e.getChildByName("TitleLabel").getComponent(cc.Label).string = t.name;
        var n, s = t.desc;
        n = a == r.BuffType.Sanmingzhi ? s.replace("XX", "" + Math.floor(1e4 * (t.num + o * t.up)) / 100) : s.replace("XX", "" + Math.floor(100 * (t.num + o * t.up))),
        e.getChildByName("DescLabel").getComponent(cc.Label).string = n,
        e.getChildByName("BuffIcon").getComponent(cc.Sprite).spriteFrame = this.CommonAtlas.getSpriteFrame("buff" + a)
    },
    t.prototype.update = function() {},
    t.prototype.getBuffData = function(e) {
        d.default.getIns().getBuffData(e)
    },
    t.prototype.onChangeButton = function() {
        var e = this;
        s.default.getIns().showRewardVideo(function() {
            e.updateBuffView(e.model)
        },
        function() {},
        r.VideoType.BuffChange)
    },
    t.prototype.onAllButton = function() {
        var e = this;
        s.default.getIns().showRewardVideo(function() {
            e.getBuffData(e.buffData),
            e.callBack(),
            l.default.getIns().closePopUp(!1)
        },
        function() {},
        r.VideoType.BuffAll)
    },
    t.prototype.onNoButton = function() {
        if (null != this.threeOneData) {
            var e = [{
                type: this.buffData[0].type,
                lv: this.buffData[0].lv - 1
            }];
            this.getBuffData(e),
            this.callBack(),
            l.default.getIns().closePopUp(!1)
        } else this.callBack(),
        l.default.getIns().closePopUp(!1)
    },
    t.prototype.onGetButton = function() {
        var e = this;
        s.default.getIns().showRewardVideo(function() {
            e.getBuffData(e.buffData),
            e.callBack(),
            l.default.getIns().closePopUp(!1)
        },
        function() {},
        r.VideoType.BuffOne)
    },
    t.prototype.onBuffNode = function(e, t) {
        var a = Number(t);
        if (this.model != r.BuffModel.One) {
            var o = this.buffData[a],
            i = o.lv,
            n = Math.random();
            o.type == r.BuffType.Pisa && 0 == i ? (this.model = r.BuffModel.One, this.updateBuffView(r.BuffModel.One, [{
                type: o.type,
                lv: 2
            }])) : 1 == i ? (this.model = r.BuffModel.One, this.updateBuffView(r.BuffModel.One, [{
                type: o.type,
                lv: o.lv + 1
            }])) : 0 == i && n < .5 ? (this.model = r.BuffModel.One, this.updateBuffView(r.BuffModel.One, [{
                type: o.type,
                lv: o.lv + 1
            }])) : (this.getBuffData([o]), this.callBack(), l.default.getIns().closePopUp(!1))
        }
    },
    n([h(cc.Node)], t.prototype, "BgSp", void 0),
    n([h(cc.Node)], t.prototype, "ItemNodeArray", void 0),
    n([h(cc.RichText)], t.prototype, "DescRichText", void 0),
    n([h(cc.Node)], t.prototype, "btnAll", void 0),
    n([h(cc.Node)], t.prototype, "btnChange", void 0),
    n([h(cc.Node)], t.prototype, "btnNo", void 0),
    n([h(cc.Node)], t.prototype, "btnGet", void 0),
    n([h(cc.SpriteAtlas)], t.prototype, "CommonAtlas", void 0),
    n([u], t)
} (cc.Component);
a.default = f