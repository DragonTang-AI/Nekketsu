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
        return t.SubPageNode = null,
        t.PageView = null,
        t.ArrowLeftNode = null,
        t.ArrowRightNode = null,
        t.PageNodeArray = new Array,
        t.HallAtlas = null,
        t
    }
    return i(t, e),
    t.prototype.start = function() {
        this.showArrow();
        for (var e = 0; e < this.PageNodeArray.length; e++) {
            var t = this.PageNodeArray[e];
            c.default.getIns().passStage >= e ? (t.getChildByName("StagePassed").active = !0, t.getChildByName("StagePassBtn").active = !1) : (t.getChildByName("StagePassed").active = !1, t.getChildByName("StagePassBtn").active = !1),
            t.getChildByName("UnlockEffect").active = !1,
            e > c.default.getIns().passStage + 1 ? (t.getChildByName("BgSprite").color = new cc.Color(100, 100, 100), t.getChildByName("colock").active = !0) : (t.getChildByName("BgSprite").color = new cc.Color(255, 255, 255), t.getChildByName("colock").active = !1)
        }
    },
    t.prototype.toCurPage = function() {
        var e = Math.min(2, c.default.getIns().passStage + 1);
        this.PageView.setCurrentPageIndex(e)
    },
    t.prototype.toCurPageUnlockEffect = function() {
        var e = Math.min(2, c.default.getIns().passStage + 1);
        this.PageView.setCurrentPageIndex(e);
        var t = this.PageNodeArray[e];
        t.getChildByName("BgSprite").color = new cc.Color(100, 100, 100),
        t.getChildByName("UnlockEffect").active = !0,
        t.getChildByName("UnlockEffect").getComponent(sp.Skeleton).setCompleteListener(function() {
            t.getChildByName("UnlockEffect").active = !1,
            t.getChildByName("BgSprite").color = new cc.Color(255, 255, 255)
        })
    },
    t.prototype.update = function() {},
    t.prototype.showArrow = function() {
        var e = this.PageView.getCurrentPageIndex(),
        t = this.PageView.getPages().length;
        0 == e ? (this.ArrowLeftNode.active = !1, this.ArrowRightNode.active = !0) : e == t - 1 ? (this.ArrowLeftNode.active = !0, this.ArrowRightNode.active = !1) : (this.ArrowLeftNode.active = !0, this.ArrowRightNode.active = !0)
    },
    t.prototype.onPageViewCallBack = function() {
        this.showArrow()
    },
    t.prototype.onPassButton = function(e, t) {
        var a = Number(t);
        switch (c.default.getIns().stagePassState[a]) {
            case r.AutoPassState.NoPass:
                c.default.getIns().statePassStage(a);
            break;
            case r.AutoPassState.Passing:
                s.default.getIns().showRewardVideo(function() {
                c.default.getIns().finishPassStage(a)
            },
            function() {},
            r.VideoType.FinishPass);
            break;
            case r.AutoPassState.Passed:
                l.default.getIns().showPopUpByBundle(l.PopUpEnum.SuccGet, {
                gold: r.default.PASSSTAGEGOLD[a],
                callBack: function() {
                    c.default.getIns().getPassStage(a)
                }
            });
        }
    },
    t.prototype.onFightButton = function() {
        var e = this.PageView.getCurrentPageIndex();
        if (e > c.default.getIns().passStage + 1) l.default.getIns().showToast({
            msg: "需要先通过之前的关卡"
        });
        else {
            c.default.getIns().curStage = e;
            var t = "Image/gameBg1";
            1 == c.default.getIns().curStage ? t = "Image/gameBg1": 2 == c.default.getIns().curStage && (t = "Image/gameBg2");
            var a = "" + (!0 === c.default.getIns().getIsNewPlayer() ? 1 : 2);
            s.default.getIns().logEvent(s.LogEventType.EnterStage, a + (e + 1), 2),
            l.default.getIns().gameBundle.load(t, cc.SpriteFrame,
            function() {
                cc.director.loadScene("GameScene")
            })
        }
    },
    n([u(cc.Node)], t.prototype, "SubPageNode", void 0),
    n([u(cc.PageView)], t.prototype, "PageView", void 0),
    n([u(cc.Node)], t.prototype, "ArrowLeftNode", void 0),
    n([u(cc.Node)], t.prototype, "ArrowRightNode", void 0),
    n([u(cc.Node)], t.prototype, "PageNodeArray", void 0),
    n([u(cc.SpriteAtlas)], t.prototype, "HallAtlas", void 0),
    n([p], t)
} (cc.Component);
a.default = h