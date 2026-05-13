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
}),
a.PopUpEnum = void 0;
var s = e("PlayerData"),
r = e("CommonApi"),
l = cc._decorator,
c = l.ccclass;
l.property,
function(e) {
    e[e.WinNode = 0] = "WinNode",
    e[e.LostNode = 1] = "LostNode",
    e[e.SettingNode = 2] = "SettingNode",
    e[e.LevelUpNode = 3] = "LevelUpNode",
    e[e.SuccGet = 4] = "SuccGet",
    e[e.Pause = 5] = "Pause",
    e[e.UnlockNode = 6] = "UnlockNode",
    e[e.BuffNode = 7] = "BuffNode",
    e[e.ShowBuffNode = 8] = "ShowBuffNode",
    e[e.SureBackHall = 9] = "SureBackHall"
} (a.PopUpEnum || (a.PopUpEnum = {}));
var d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.PopUpStr = [["prefab/WinNode", "WinNode"], ["prefab/LostNode", "LostNode"], ["prefab/SettingNode", "SettingNode"], ["prefab/LevelUpNode", "LevelUpNode"], ["prefab/SuccGet", "SuccGet"], ["prefab/Pause", "Pause"], ["prefab/UnlockNode", "UnlockNode"], ["prefab/BuffNode", "BuffNode"], ["prefab/ShowBuffNode", "ShowBuffNode"], ["prefab/SureBackHall", "SureBackHall"]],
        t.isPauseGame = !1,
        t
    }
    var a;
    return i(t, e),
    a = t,
    t.getIns = function() {
        return a._ins || (a._ins = new a),
        a._ins
    },
    t.prototype.onLoad = function() {
        a._ins = this,
        this.BlackBg = this.node.getChildByName("BlackBg"),
        this.CustomNode = this.node.getChildByName("CustomNode"),
        this.ToastNode = this.node.getChildByName("ToastNode"),
        cc.game.addPersistRootNode(this.node),
        this.popUpArray = new Array
    },
    t.prototype.start = function() {},
    t.prototype.update = function(e) {
        s.default.getIns().updateByPopUpManager(e)
    },
    t.prototype.popUpLength = function() {
        return this.popUpArray.length
    },
    t.prototype.showPopUpByBundle = function(e, t) {
        void 0 === t && (t = null);
        var a = this,
        o = this.PopUpStr[e][0],
        i = this.PopUpStr[e][1];
        this.mainBundle.load(o, cc.Prefab,
        function(e, o) {
            for (var n = 0; n < a.popUpArray.length; n++) if (null != a.popUpArray[n].getComponent(i)) return void cc.log("有相同界面，不弹出");
            a.BlackBg.active = !0;
            var s = cc.instantiate(o);
            s.parent = a.CustomNode,
            s.name = i,
            s.position = cc.v3(0, 0, 0),
            a.popUpArray.push(s),
            s.getComponent(i).initByExData(t),
            a.refurbishAd(i)
        })
    },
    t.prototype.hideBannerByNull = function() {},
    t.prototype.refurbishAd = function(e) {
        switch (e) {
            case "EquipLvUp":
            case "ExtraGoldGet":
                r.default.getIns().showBanner();
            break;
            default:
                r.default.getIns().hideBanner();
        }
        switch (e) {
            case "ChoiceStage":
                this.scheduleOnce(function() {
                r.default.getIns().showHallSingleCustomAd(cc.v2(120, 40), !1)
            },
            .5);
            break;
            default: r.default.getIns().hideHallSingleCustomAd();
        }
        switch (e) {
            case "EquipLvUp":
            case "ExtraGoldGet":
            case "Result":
            case "OpenBox":
            case "TryPlaying":
            case "TodaySupply":
                r.default.getIns().show_CustomAd();
            break;
            default:
                r.default.getIns().hideCustomAd();
        }
        switch (e) {
            case "TodaySupply":
                r.default.getIns().showInsertAd();
        }
    },
    t.prototype.refurbishView = function(e) {
        if (r.default.getIns().hideHallSingleCustomAd(), r.default.getIns().hideCustomAd(), e.getComponent(e.name)) return this.refurbishAd(e.name),
        void(null != e.getComponent(e.name).refurbishView && e.getComponent(e.name).refurbishView())
    },
    t.prototype.refurbishCurScene = function() {
        cc.log("刷新当前场景")
    },
    t.prototype.closePopUpOne = function(e) {
        if (this.popUpArray.length > 0) {
            for (var t = e,
            a = 0; a < this.popUpArray.length; a++) if (t == this.popUpArray[a]) {
                this.popUpArray.splice(a, 1);
                break
            }
            null != t && t.destroy()
        }
        if (this.popUpArray.length <= 0) this.CustomNode.removeAllChildren(),
        this.BlackBg.active = !1,
        this.hideBannerByNull(),
        this.refurbishCurScene();
        else {
            var o = this.popUpArray[this.popUpArray.length - 1];
            this.refurbishView(o)
        }
    },
    t.prototype.closePopUp = function(e) {
        if (1 == e) this.BlackBg.active = !1,
        this.popUpArray.length = 0,
        this.CustomNode.removeAllChildren(),
        this.hideBannerByNull(),
        this.refurbishCurScene();
        else {
            if (this.popUpArray.length > 0) {
                var t = this.popUpArray.pop();
                null != t && t.destroy()
            }
            if (this.popUpArray.length <= 0) this.CustomNode.removeAllChildren(),
            this.BlackBg.active = !1,
            this.hideBannerByNull(),
            this.refurbishCurScene();
            else {
                var a = this.popUpArray[this.popUpArray.length - 1];
                this.refurbishView(a)
            }
        }
    },
    t.prototype.showToast = function(e) {
        var t = this;
        this.mainBundle.load("prefab/ShowToastNode", cc.Prefab,
        function(a, o) {
            for (var i = 0; i < t.popUpArray.length; i++) if (null != t.popUpArray[i].getComponent("ShowToast")) return void cc.log("有相同界面，不弹出");
            var n = cc.instantiate(o);
            n.parent = t.ToastNode,
            n.name = "ShowToast",
            n.position = cc.v3(0, 0, 0),
            n.getComponent("ShowToast").initMsg(e.msg),
            t.scheduleOnce(function() {
                n.destroy()
            }.bind(t), .8)
        })
    },
    t._ins = null,
    a = n([c], t)
} (cc.Component);
a.default = d