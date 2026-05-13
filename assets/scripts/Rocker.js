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
r = e("GameManager"),
l = cc._decorator,
c = l.ccclass,
d = l.property,
p = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.RockBg = null,
        t.Rocker = null,
        t.Max_r = 120,
        t.moveTouchID = -1,
        t
    }
    return i(t, e),
    t.prototype.start = function() {
        this.RockBg.opacity = 0,
        this.Rocker.opacity = 0,
        this.dir = cc.v2(0, 0),
        this.node.on(cc.Node.EventType.TOUCH_START,
        function(e) {
            if (1 != r.default.getIns().isGamePause && !r.default.getIns().isPauseGame && !s.default.getIns().isPauseGame) {
                cc.log("touch:", e);
                var t = e.getLocation(),
                a = this.node.parent.convertToNodeSpaceAR(t);
                cc.log("pos," + a.x + ",y:" + a.y),
                this.touchStartTime = new Date().getTime()
            }
        },
        this),
        this.node.on(cc.Node.EventType.TOUCH_MOVE,
        function(e) {
            if (1 != r.default.getIns().isGamePause && !s.default.getIns().isPauseGame) {
                var t = e.getLocation(),
                a = this.node.convertToNodeSpaceAR(t);
                if ( - 1 == this.moveTouchID) this.moveTouchID = e.getID(),
                this.startPos = a,
                this.RockBg.setPosition(a),
                this.Rocker.setPosition(a),
                cc.tween(this.RockBg).to(.2, {
                    opacity: 255
                }).start(),
                cc.tween(this.Rocker).to(.2, {
                    opacity: 255
                }).start();
                else if (this.moveTouchID == e.getID()) {
                    var o = a.sub(this.startPos),
                    i = o.mag();
                    0 == i ? this.dir = cc.v2(0, 0) : (this.dir.x = o.x / i, this.dir.y = o.y / i, i > this.Max_r && (o.x = this.Max_r * o.x / i, o.y = this.Max_r * o.y / i), this.Rocker.setPosition(o.add(this.startPos)))
                }
            }
        },
        this),
        this.node.on(cc.Node.EventType.TOUCH_END,
        function(e) {
            this.moveTouchID == e.getID() && (this.moveTouchID = -1, this.Rocker.setPosition(this.startPos), this.dir = cc.v2(0, 0), cc.tween(this.RockBg).to(.2, {
                opacity: 0
            }).start(), cc.tween(this.Rocker).to(.2, {
                opacity: 0
            }).start()),
            new Date().getTime() - this.touchStartTime < 500 && r.default.getIns().touchAttack()
        },
        this),
        this.node.on(cc.Node.EventType.TOUCH_CANCEL,
        function(e) {
            this.moveTouchID == e.getID() && (this.moveTouchID = -1, this.Rocker.setPosition(this.startPos), this.dir = cc.v2(0, 0), cc.tween(this.RockBg).to(.2, {
                opacity: 0
            }).start(), cc.tween(this.Rocker).to(.2, {
                opacity: 0
            }).start())
        },
        this)
    },
    n([d(cc.Node)], t.prototype, "RockBg", void 0),
    n([d(cc.Node)], t.prototype, "Rocker", void 0),
    n([c], t)
} (cc.Component);
a.default = p