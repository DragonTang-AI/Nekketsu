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
},
s = this && this.__awaiter ||
function(e, t, a, o) {
    return new(a || (a = Promise))(function(i, n) {
        function s(e) {
            try {
                l(o.next(e))
            } catch(t) {
                n(t)
            }
        }
        function r(e) {
            try {
                l(o.
                throw (e))
            } catch(t) {
                n(t)
            }
        }
        function l(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof a ? t: new a(function(e) {
                e(t)
            })).then(s, r)
        }
        l((o = o.apply(e, t || [])).next())
    })
},
r = this && this.__generator ||
function(e, t) {
    var a, o, i, n, s = {
        label: 0,
        sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    };
    return n = {
        next: r(0),
        throw: r(1),
        return: r(2)
    },
    "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this
    }),
    n;
    function r(e) {
        return function(t) {
            return l([e, t])
        }
    }
    function l(n) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; s;) try {
            if (a = 1, o && (i = 2 & n[0] ? o.
            return: n[0] ? o.
            throw || ((i = o.
            return) && i.call(o), 0) : o.next) && !(i = i.call(o, n[1])).done) return i;
            switch (o = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                case 0:
                case 1:
                    i = n;
                break;
                case 4:
                    return s.label++,
                {
                    value: n[1],
                    done: !1
                };
                case 5:
                    s.label++,
                o = n[1],
                n = [0];
                continue;
                case 7:
                    n = s.ops.pop(),
                s.trys.pop();
                continue;
                default: if (! (i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                    s = 0;
                    continue
                }
                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                    s.label = n[1];
                    break
                }
                if (6 === n[0] && s.label < i[1]) {
                    s.label = i[1],
                    i = n;
                    break
                }
                if (i && s.label < i[2]) {
                    s.label = i[2],
                    s.ops.push(n);
                    break
                }
                i[2] && s.ops.pop(),
                s.trys.pop();
                continue;
            }
            n = t.call(e, s)
        } catch(r) {
            n = [6, r],
            o = 0
        } finally {
            a = i = 0
        }
        if (5 & n[0]) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
};
Object.defineProperty(a, "__esModule", {
    value: !0
});
var l = e("CommonApi"),
c = e("PopUpManager"),
d = e("SoundManager"),
p = e("PlayerData"),
u = cc._decorator,
h = u.ccclass,
f = u.property,
y = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.ProgressBar = null,
        t.maxPar = .75,
        t.loadingPar = 0,
        t.isLoadScene = !1,
        t.isEnterGame = !1,
        t.waitScene = null,
        t.isNewPlayer = !1,
        t.isGame = !1,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        l.default.getIns().registerApi(),
        l.default.getIns().curApi == l.APIModel.M4399 && (this.node.getComponent(cc.Canvas).fitHeight = !0)
    },
    t.prototype.start = function() {
        p.default.getIns().initNewPlayer(),
        this.isNewPlayer = p.default.getIns().getIsNewPlayer(),
        p.default.getIns().loadData(),
        this.isGame = -1 == p.default.getIns().passStage,
        l.default.getIns().curApi == l.APIModel.WeChat ? this.loadAssetNew() : this.loadAssetAsync()
    },
    t.prototype.loadAssetNew = function() {
        var e = this;
        cc.assetManager.loadBundle("SpinePackage",
        function(t) {
            if (t) return cc.error(t);
            console.log("SpinePackage loadSucc"),
            e.maxPar += .5,
            cc.assetManager.loadBundle("GamePackage",
            function(t, a) {
                if (t) return cc.error(t);
                console.log("GamePackage loadSucc"),
                e.maxPar += .5,
                c.default.getIns().gameBundle = a,
                1 == e.isGame && a.loadScene("GameScene",
                function(t, a) {
                    e.waitScene = a
                })
            })
        }),
        cc.assetManager.loadBundle("HallPackage",
        function(t, a) {
            if (t) return cc.error(t);
            console.log("HallPackage loadSucc"),
            e.maxPar += .5,
            c.default.getIns().hallBundle = a,
            0 == e.isGame && a.loadScene("HallScene",
            function(t, a) {
                e.waitScene = a
            })
        }),
        cc.assetManager.loadBundle("MainPackage",
        function(t, a) {
            if (t) return cc.error(t);
            console.log("MainPackage loadSucc"),
            e.maxPar += .5,
            c.default.getIns().mainBundle = a
        }),
        cc.assetManager.loadBundle("SoundPackage",
        function(t, a) {
            if (t) return cc.error(t);
            console.log("SoundPackage loadSucc"),
            d.default.getIns().soundBundle = a,
            e.maxPar += .5
        })
    },
    t.prototype.loadAssetAsync = function() {
        return s(this, void 0, void 0,
        function() {
            var e;
            return r(this,
            function(t) {
                switch (t.label) {
                    case 0:
                        return e = this,
                    [4, new Promise(function(t) {
                        cc.assetManager.loadBundle("SpinePackage",
                        function(a) {
                            if (a) return cc.error(a);
                            console.log("SpinePackage loadSucc"),
                            e.maxPar += .5,
                            t("success")
                        })
                    })];
                    case 1:
                        return t.sent(),
                    [4, new Promise(function(t) {
                        cc.assetManager.loadBundle("HallPackage",
                        function(a, o) {
                            if (a) return cc.error(a);
                            console.log("HallPackage loadSucc"),
                            e.maxPar += .5,
                            c.default.getIns().hallBundle = o,
                            0 == e.isGame && o.loadScene("HallScene",
                            function(t, a) {
                                e.waitScene = a
                            }),
                            t("success")
                        })
                    })];
                    case 2:
                        return t.sent(),
                    [4, new Promise(function(t) {
                        cc.assetManager.loadBundle("GamePackage",
                        function(a, o) {
                            if (a) return cc.error(a);
                            console.log("GamePackage loadSucc"),
                            e.maxPar += .5,
                            c.default.getIns().gameBundle = o,
                            1 == e.isGame && o.loadScene("GameScene",
                            function(t, a) {
                                e.waitScene = a
                            }),
                            t("success")
                        })
                    })];
                    case 3:
                        return t.sent(),
                    [4, new Promise(function(t) {
                        cc.assetManager.loadBundle("MainPackage",
                        function(a, o) {
                            if (a) return cc.error(a);
                            console.log("MainPackage loadSucc"),
                            e.maxPar += .5,
                            c.default.getIns().mainBundle = o,
                            t("success")
                        })
                    })];
                    case 4:
                        return t.sent(),
                    [4, new Promise(function(t) {
                        cc.assetManager.loadBundle("SoundPackage",
                        function(a, o) {
                            if (a) return cc.error(a);
                            console.log("SoundPackage loadSucc"),
                            d.default.getIns().soundBundle = o,
                            e.maxPar += .5,
                            t("success")
                        })
                    })];
                    case 5:
                        return t.sent(),
                    [2];
                }
            })
        })
    },
    t.prototype.update = function(e) {
        var t = this.loadingPar;
        this.loadingPar += e,
        this.loadingPar = Math.min(this.maxPar, this.loadingPar),
        this.ProgressBar.getComponent(cc.ProgressBar).progress = this.loadingPar,
        t < .01 && this.loadingPar >= .01 ? l.default.getIns().logEvent(l.LogEventType.Loading0, "" + (!0 === this.isNewPlayer ? 1 : 2)) : t < .5 && this.loadingPar >= .5 ? l.default.getIns().logEvent(l.LogEventType.Loading50, "" + (!0 === this.isNewPlayer ? 1 : 2)) : t < .9 && this.loadingPar >= .9 && l.default.getIns().logEvent(l.LogEventType.Loading90, "" + (!0 === this.isNewPlayer ? 1 : 2)),
        this.loadingPar >= 1 && 0 == this.isEnterGame && null != this.waitScene && (l.default.getIns().logEvent(l.LogEventType.Loading100, "" + (!0 === this.isNewPlayer ? 1 : 2)), this.ProgressBar.active = !1, this.onStartButton())
    },
    t.prototype.onStartButton = function() {
        l.default.getIns().logEvent(l.LogEventType.LoadingStart, "" + (!0 === this.isNewPlayer ? 1 : 2), 2),
        this.isEnterGame = !0,
        this.isGame ? p.default.getIns().guideFinish[0] ? cc.director.runScene(this.waitScene) : cc.director.loadScene("StartGuideScene") : cc.director.runScene(this.waitScene)
    },
    t.prototype.onSettingButton = function() {},
    n([f(cc.Node)], t.prototype, "ProgressBar", void 0),
    n([h], t)
} (cc.Component);
a.default = y