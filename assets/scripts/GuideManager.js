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
var s = e("GameManager"),
r = e("GuideModel"),
l = cc._decorator,
c = l.ccclass,
d = l.property,
p = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.BlockInputBg = null,
        t.TouchBg = null,
        t.MainNode = null,
        t.MaskShowNode = null,
        t.MaskTouchNode = null,
        t.BlackBg = null,
        t.MaskC = null,
        t.HandNode = null,
        t.DialogNode = null,
        t.ResLabel = null,
        t.DescNode = null,
        t.RightNode = null,
        t.subStep = null,
        t.bgView = null,
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
        var e = this;
        a._ins = this,
        cc.game.addPersistRootNode(this.node),
        this.BlockInputBg.active = !1,
        this.TouchBg.active = !1,
        this.MainNode.active = !1,
        this.TouchBg.on(cc.Node.EventType.TOUCH_START, this.onTouchBg, this),
        this.BlockInputBg.on(cc.Node.EventType.TOUCH_START, this.onTouchBlock, this),
        this.BlackBg.on(cc.Node.EventType.TOUCH_START, this.onTouchBlackBg, this),
        this.node.zIndex = 100,
        this.RightNode.getComponent(sp.Skeleton).setCompleteListener(function() {
            console.log("Right Effect Play Over"),
            e.RightNode.active = !1,
            r.default.getIns().sendPassNeed(r.PassNeed.RightAniOver)
        })
    },
    t.prototype.start = function() {},
    t.prototype.update = function(e) {
        e >= .5 && (e = .016),
        r.default.getIns().updateMain(e)
    },
    t.prototype.showGuideByData = function(e, t) {
        switch (this.subStep = e, this.bgView = t, this.BlockInputBg.active = !1, this.TouchBg.active = !1, this.MainNode.active = !0, this.MaskShowNode.active = !1, this.MaskTouchNode.active = !1, this.HandNode.active = !1, this.DialogNode.active = !1, this.HandNode.getChildByName("TouchEffect").opacity = 255, this.DescNode.active = !1, this.RightNode.active = !1, e.guideType) {
            case r.GuideType.Balck:
                this.MaskShowNode.active = !0,
            this.MaskTouchNode.active = !0,
            this.BlackBg.active = !0,
            this.BlackBg.getComponent(cc.BlockInputEvents).enabled = !0,
            this.DialogNode.active = !0;
            break;
            case r.GuideType.Control:
                this.DialogNode.active = !0,
            this.BlackBg.active = !1;
            break;
            case r.GuideType.NoCompelWhite:
                this.MaskShowNode.active = !0,
            this.MaskTouchNode.active = !0,
            this.BlackBg.active = !0,
            this.BlackBg.getComponent(cc.BlockInputEvents).enabled = !0,
            this.DialogNode.active = !0;
            break;
            case r.GuideType.None:
                this.MainNode.active = !1;
            break;
            case r.GuideType.FinishEffect:
                return this.RightNode.active = !0,
            this.RightNode.getComponent(sp.Skeleton).setAnimation(0, "animation", !1),
            void console.log("Right Effect Play Start");
        }
        if (null != e.showDesc && 1 == e.showDesc && (this.DescNode.active = !0, this.DescNode.parent = s.default.getIns().PlayerNode.parent), null != e.showHand && 1 == e.showHand && (this.HandNode.active = !0), null != e.focus && (this.MaskShowNode.active = !0, this.MaskTouchNode.active = !0, this.BlackBg.active = !0, this.BlackBg.getComponent(cc.BlockInputEvents).enabled = !0), 1 != e.hideView) {
            if (0 == e.hideView) return this.BlockInputBg.active = !1,
            this.TouchBg.active = !0,
            this.DialogNode.active = !1,
            void(this.MainNode.active = !1);
            if (this.MaskC.active = this.MaskShowNode.active, null != e.focus) {
                r.default.getIns().isPause = !0;
                var a = e.focus,
                o = this.bgView;
                cc.log("focusNode 1", o),
                cc.log("focus.length", a.length);
                for (var i = 0; i < a.length; i++) if ("child0" == a[i]) o = o.children[0];
                else if ("child1" == a[i]) o = o.children[1];
                else if ("equip12" == a[i] || "equip6" == a[i]) for (var n = 0; n < o.children.length; n++) {
                    var l = o.children[n],
                    c = Number(l.getChildByName("IDLabel").getComponent(cc.Label).string);
                    if ("equip6" == a[i] && 6 == c || "equip12" == a[i] && 12 == c) {
                        o = l;
                        break
                    }
                } else o = o && o.getChildByName(a[i]);
                if (cc.log("focusNode 2", o), o) {
                    var d = e.maskSize;
                    null == d ? (this.MaskTouchNode.width = o.width, this.MaskTouchNode.height = o.height) : (this.MaskTouchNode.width = d[0], this.MaskTouchNode.height = d[1]);
                    var p = Math.max(this.MaskTouchNode.width, this.MaskTouchNode.height);
                    this.MaskShowNode.width = p + 400,
                    this.MaskShowNode.height = p + 400,
                    this.MaskC.width = this.MaskShowNode.width,
                    this.MaskC.height = this.MaskShowNode.height;
                    var u = (.5 - o.anchorX) * o.width,
                    h = o.convertToWorldSpaceAR(cc.v2(u, 0)),
                    f = this.node.convertToNodeSpaceAR(h);
                    this.MaskTouchNode.position = f,
                    null != e.maskOff && (this.MaskTouchNode.x += e.maskOff[0], this.MaskTouchNode.y += e.maskOff[1]),
                    this.MaskC.position = this.MaskTouchNode.position,
                    this.MaskShowNode.position = this.MaskTouchNode.position;
                    var y = cc.v2(0, 0);
                    e.handOffset && (y.x = e.handOffset[0], y.y = e.handOffset[1]),
                    this.HandNode.position = f.add(y);
                    var m = e.handRota || 0;
                    this.HandNode.angle = m,
                    f.x < 200 ? (this.DialogNode.x = f.x + o.width / 2 + this.DialogNode.width / 2, e.dialogFlip && (this.DialogNode.x = f.x - o.width / 2 - this.DialogNode.width / 2)) : (this.DialogNode.x = f.x - o.width / 2 - this.DialogNode.width / 2, e.dialogFlip && (this.DialogNode.x = f.x + o.width / 2 + this.DialogNode.width / 2)),
                    f.y < 100 ? this.DialogNode.y = f.y + o.height / 2 + this.DialogNode.height / 2 : this.DialogNode.y = f.y - o.height / 2 - this.DialogNode.height / 2,
                    null != e.dialogNodeOff && (this.DialogNode.x += e.dialogNodeOff[0], this.DialogNode.y += e.dialogNodeOff[1])
                }
            } else this.DialogNode.x = 0,
            this.DialogNode.y = -90,
            this.DialogNode.width = 540,
            null != e.dialogNodeOff && (this.DialogNode.x += e.dialogNodeOff[0], this.DialogNode.y += e.dialogNodeOff[1]);
            null != e.handNodePos && (this.HandNode.x = e.handNodePos[0], this.HandNode.y = e.handNodePos[1]),
            null == e.info ? (this.DialogNode.active = !1, r.default.getIns().isPause = !1) : (this.DialogNode.active = !0, this.ResLabel.getComponent(cc.Label).string = e.info, r.default.getIns().isPause = !0),
            cc.log("dialogNode x,y", this.DialogNode.x, this.DialogNode.y)
        } else this.removeGuideView()
    },
    t.prototype.removeGuideView = function() {
        this.BlockInputBg.active = !1,
        this.TouchBg.active = !1,
        this.MainNode.active = !1,
        r.default.getIns().isPause = !1
    },
    t.prototype.sendPassNeed = function(e, t) {
        return void 0 === t && (t = !1),
        r.default.getIns().sendPassNeed(e, t)
    },
    t.prototype.onTouchBg = function() {
        r.default.getIns().runNextGuide()
    },
    t.prototype.onTouchBlock = function() {
        r.default.getIns().runNextGuide()
    },
    t.prototype.onTouchBlackBg = function() {
        this.subStep.guideType == r.GuideType.NoCompelWhite && (r.default.getIns().curStepPass = !0, r.default.getIns().runNextGuide())
    },
    t._ins = null,
    n([d(cc.Node)], t.prototype, "BlockInputBg", void 0),
    n([d(cc.Node)], t.prototype, "TouchBg", void 0),
    n([d(cc.Node)], t.prototype, "MainNode", void 0),
    n([d(cc.Node)], t.prototype, "MaskShowNode", void 0),
    n([d(cc.Node)], t.prototype, "MaskTouchNode", void 0),
    n([d(cc.Node)], t.prototype, "BlackBg", void 0),
    n([d(cc.Node)], t.prototype, "MaskC", void 0),
    n([d(cc.Node)], t.prototype, "HandNode", void 0),
    n([d(cc.Node)], t.prototype, "DialogNode", void 0),
    n([d(cc.Node)], t.prototype, "ResLabel", void 0),
    n([d(cc.Node)], t.prototype, "DescNode", void 0),
    n([d(cc.Node)], t.prototype, "RightNode", void 0),
    a = n([c], t)
} (cc.Component);
a.default = p