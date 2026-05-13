var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = cc._decorator,
    i = (o.ccclass, o.property,
        function() {
            function e() {
                this.canPlayAd = true,
                    this.remain = 999999,
                    this.click_video = !1
            }
            return e.getIns = function() {
                    return e._ins || (e._ins = new e),
                        e._ins
                },
                e.prototype.registerApi = function() {
                    // var e = this;
                    // window.h5api.canPlayAd(function(t) {
                    //     console.log("是否可播放广告", t.canPlayAd, "剩余次数", t.remain),
                    //         e.canPlayAd = t.canPlayAd,
                    //         e.remain = t.remain
                    // })
                },
                e.prototype.showRewardVideo = function(e, t, a) {
                    t && t();
                    return;
                    if (!this.click_video) {
                        this.click_video = !0;
                        var o = this;
                        window.h5api.playAd(function(e) {
                            console.log("代码:" + e.code + ",消息:" + e.message),
                                1e4 === e.code ? console.log("开始播放") : 10001 === e.code ? (console.log("播放结束"), o.click_video = !1, t && t()) : (console.log("广告异常"), o.click_video = !1, a && a())
                        })
                    }
                },
                e._ins = null,
                e
        }());
a.default = i