var e = require;
var t = module;
var a = exports;
var o = this && this.__decorate ||
function(e, t, a, o) {
    var i, n = arguments.length,
    s = n < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, a, o);
    else for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (s = (n < 3 ? i(s) : n > 3 ? i(t, a, s) : i(t, a)) || s);
    return n > 3 && s && Object.defineProperty(t, a, s),
    s
},
i = this && this.__awaiter ||
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
n = this && this.__generator ||
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
}),
a.LogEventType = a.APIModel = void 0;
var s, r = e("M4399Api"),
l = e("PopUpManager"),
c = e("SoundManager"),
d = e("WXApi"),
p = cc._decorator,
u = p.ccclass;
p.property,
function(e) {
    e[e.WeChat = 0] = "WeChat",
    e[e.H5 = 1] = "H5",
    e[e.OPPO = 2] = "OPPO",
    e[e.VIVO = 3] = "VIVO",
    e[e.QQ = 4] = "QQ",
    e[e.M4399 = 5] = "M4399"
} (s = a.APIModel || (a.APIModel = {})),
function(e) {
    e[e.Loading10 = 0] = "Loading10",
    e[e.Loading50 = 1] = "Loading50",
    e[e.Loading90 = 2] = "Loading90",
    e[e.Loading100 = 3] = "Loading100",
    e[e.EnterHall = 4] = "EnterHall",
    e[e.EnterStage = 5] = "EnterStage",
    e[e.WinNodeGet = 6] = "WinNodeGet",
    e[e.WinNodeDoubleGet = 7] = "WinNodeDoubleGet",
    e[e.Loading0 = 8] = "Loading0",
    e[e.LoadingStart = 9] = "LoadingStart",
    e[e.HallRole = 10] = "HallRole",
    e[e.HallStage = 11] = "HallStage",
    e[e.HallNPC = 12] = "HallNPC",
    e[e.HallShop = 13] = "HallShop",
    e[e.LostRelive = 14] = "LostRelive",
    e[e.LostBack = 15] = "LostBack",
    e[e.PassSubStage = 16] = "PassSubStage",
    e[e.NewSkill = 17] = "NewSkill",
    e[e.GuideStep0 = 18] = "GuideStep0",
    e[e.GuideStep1 = 19] = "GuideStep1",
    e[e.GuideStep2 = 20] = "GuideStep2",
    e[e.GuideStep3 = 21] = "GuideStep3",
    e[e.GuideStep4 = 22] = "GuideStep4",
    e[e.GuideStep5 = 23] = "GuideStep5",
    e[e.GuideStep6 = 24] = "GuideStep6",
    e[e.ShowVideo = 25] = "ShowVideo",
    e[e.LostResultView = 26] = "LostResultView",
    e[e.LostResultDouble = 27] = "LostResultDouble"
} (a.LogEventType || (a.LogEventType = {}));
var h = function() {
    function e() {}
    var t;
    return t = e,
    e.getIns = function() {
        return t._ins || (t._ins = new t),
        t._ins
    },
    e.prototype.registerApi = function() {
        switch (this.curApi = t.STATICAPI, this.curApi == s.WeChat && cc.sys.platform != cc.sys.WECHAT_GAME && (this.curApi = s.H5), this.curApi) {
            case s.WeChat:
                d.default.getIns().registerApi();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
                break;
            case s.M4399:
                r.default.getIns().registerApi();
        }
        this.initBanner()
    },
    e.prototype.shareAppMsg = function(e, t) {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().shareAppMsg(e, t);
            break;
            case s.H5:
                t();
            break;
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.logEvent = function(e, t, a) {
        switch (void 0 === a && (a = 1), cc.log("自定义事件", e, t, a), this.curApi) {
            case s.WeChat:
                d.default.getIns().logEvent(e, t, a);
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.vibrateLong = function() {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().vibrateLong();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.initBanner = function() {
        switch (this.curApi) {
            case s.WeChat:
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.refreshBanner = function() {
        return i(this, void 0, void 0,
        function() {
            return n(this,
            function() {
                switch (this.curApi) {
                    case s.WeChat:
                    case s.H5:
                    case s.OPPO:
                    case s.VIVO:
                    case s.QQ:
                }
                return [2]
            })
        })
    },
    e.prototype.showBanner = function() {
        switch (this.curApi) {
            case s.WeChat:
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.hideBanner = function() {
        switch (this.curApi) {
            case s.WeChat:
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.showHallSingleCustomAd = function(e, t) {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().showHallSingleCustomAd(e, t);
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.hideHallSingleCustomAd = function() {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().hideHallSingleCustomAd();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.show_CustomAd = function() {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().show_CustomAd();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.hideCustomAd = function() {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().hideCustomAd();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.initRewardVideo = function() {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().hideMistakeBanner();
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e.prototype.showRewardVideo = function(e, t, a) {
        var o = this;
        l.default.getIns().isPauseGame = !0,
        c.default.getIns().pauseMusic();
        var i = function() {
            setTimeout(function() {
                l.default.getIns().isPauseGame = !1,
                c.default.getIns().resumeMusic(),
                o.curApi != s.M4399 && l.default.getIns().showToast({
                    msg: "观看视频成功！"
                }),
                e()
            },
            100)
        },
        n = function(e) {
            setTimeout(function() {
                l.default.getIns().isPauseGame = !1,
                c.default.getIns().resumeMusic(),
                o.curApi != s.M4399 && (e ? l.default.getIns().showToast({
                    msg: e
                }) : l.default.getIns().showToast({
                    msg: "观看视频失败！"
                })),
                t()
            },
            100)
        };
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().showRewardVideo(a, i, n);
            break;
            case s.H5:
                i();
            break;
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
                break;
            case s.M4399:
                r.default.getIns().showRewardVideo(a, i, n);
        }
    },
    e.prototype.showInsertAd = function(e, t) {
        switch (this.curApi) {
            case s.WeChat:
                d.default.getIns().showInsertAd(e, t);
            break;
            case s.H5:
            case s.OPPO:
            case s.VIVO:
            case s.QQ:
        }
    },
    e._ins = null,
    e.STATICAPI = s.M4399,
    t = o([u], e)
} ();
a.default = h