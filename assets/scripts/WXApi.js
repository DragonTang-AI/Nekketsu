var e = require;
var t = module;
var a = exports;
var o = this && this.__awaiter ||
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
i = this && this.__generator ||
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
var n = e("CommonApi"),
s = e("PopUpManager"),
r = e("Util"),
l = cc._decorator,
c = (l.ccclass, l.property,
function() {
    function e() {
        this.time_onHide = 0,
        this.deltaTime_change_state = 0,
        this.bannerAds = [],
        this.bannerId = 0,
        this.bannersId = ["adunit-2a4d8aad711b5ca5"],
        this.rewardVideoAds = [],
        this.rewardVideoId = 0,
        this.videosId = ["adunit-b5dc9db8db239ade"],
        this.insertAdsId = "adunit-24ca421fbad326c5",
        this.bannerAdID = "191092",
        this.insertAdID = "191093",
        this.nativeAdID = "191097",
        this.bannerAd = null,
        this.rewardVideoAd = null,
        this.insertAd = null,
        this.gridAd = null,
        this.matrixAd = null,
        this.rewardLoadSucc = !1,
        this.eventString = ["BCBgAAoXHx5d1wO9UKISWF", "BCBgAAoXHx5d1wO9UKISWG", "BCBgAAoXHx5d1wO9UKISWH", "BCBgAAoXHx5d1wO9UKISWA", "BCBgAAoXHx5d1wO9UKISWB", "BCBgAAoXHx5d1wO9UKISWN", "BCBgAAoXHx5d1wO9UKISWM", "BCBgAAoXHx5d1wO9UKISWO", "BCBgAAoXHx5d1wO9UKISWP", "BCBgAAoXHx5d1wO9UKISWI", "BCBgAAoXHx5d1wO9UKISWK", "BCBgAAoXHx5d1wO9UKISWJ", "BCBgAAoXHx5d1wO9UKISWL", "BCBgAAoXHx5d1wO9UKISWU", "BCBgAAoXHx5d1wO9UKISWV", "BCBgAAoXHx5d1wO9UKISWW", "BCBgAAoXHx5d1wO9UKISWX", "BCBgAAoXHx5d1wO9UKISWQ", "BCBgAAoXHx5d1wO9UKISWR", "BCBgAAoXHx5d1wO9UKISWS", "BCBgAAoXHx5d1wO9UKISWT", "BCBgAAoXHx5d1wO9UKISWc", "BCBgAAoXHx5d1wO9UKISWd", "BCBgAAoXHx5d1wO9UKISWe", "BCBgAAoXHx5d1wO9UKISWf", "BCBgAAoXHx5d1wO9UKISWY", "BCBgAAoXHx5d1wO9UKISWZ", "BCBgAAoXHx5d1wO9UKISWa"],
        this.isHideRefreshBanner = !1,
        this.mistakeBanner = {
            ad: null,
            isLoad: !1,
            isShow: !1,
            isHide: !1
        },
        this.click_video = !1,
        this.current_share_video_times = 0,
        this.singleCustomAdIDArray = ["adunit-2b91380ecc3611c3"],
        this.refreshCustomAdTime = 3e3,
        this.hallSingleCustomAd = {
            ad: null,
            isLoad: !1,
            isShow: !1,
            isHide: !1
        },
        this.curHallCustomAd = null,
        this.singleCustomAdRefreshIndex = 0,
        this.custumAdIds = ["adunit-25b6ede2a9c2264b", "adunit-0921f99e5e1d016e"],
        this.customAdR = {
            ad: null,
            isLoad: !1,
            isShow: !1,
            isHide: !1
        },
        this.customAdL = {
            ad: null,
            isLoad: !1,
            isShow: !1,
            isHide: !1
        }
    }
    return e.getIns = function() {
        return e._ins || (e._ins = new e),
        e._ins
    },
    e.prototype.registerApi = function() {
        this.systemInfo = wx.getSystemInfoSync(),
        wx.showShareMenu({
            withShareTicket: !0
        }),
        wx.onShareAppMessage(function() {}),
        wx.onHide(function() {
            cc.log("切入后台")
        }),
        wx.onShow(function() {
            cc.log("切回前台"),
            s.default.getIns().isPauseGame = !1
        }),
        this.updateManager(),
        this.initRewardVideo()
    },
    e.prototype.updateManager = function() {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(e) {
            cc.log(e.hasUpdate)
        }),
        e.onUpdateReady(function() {
            cc.log("更新提示 -- 000"),
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(t) {
                    t.confirm && (cc.log("更新提示 -- 000 --111"), e.applyUpdate())
                }
            })
        }),
        e.onUpdateFailed(function() {
            cc.log("更新提示 -- 1111"),
            wx.showModal({
                title: "更新提示",
                content: "更新失败,请删除小游戏重试"
            })
        })
    },
    e.prototype.vibrateLong = function() {
        wx.vibrateLong()
    },
    e.prototype.shareAppMsg = function(e, t) {
        var a = this;
        this.time_onHide = new Date().getTime(),
        wx.shareAppMessage({
            title: e.title,
            imageUrlId: e.imageUrlId,
            imageUrl: e.imageUrl
        });
        var o = !0;
        wx.onShow(function() {
            o && (o = !1, a.deltaTime_change_state = new Date().getTime() - a.time_onHide, a.deltaTime_change_state >= 3e3 ? (setTimeout(function() {
                s.default.getIns().showToast({
                    msg: "分享成功!"
                })
            },
            100), t && t()) : setTimeout(function() {
                s.default.getIns().showToast({
                    msg: "分享失败，请重试!"
                })
            },
            100), t = null)
        })
    },
    e.prototype.logEvent = function(e, t, a) {
        wx.reportUserBehaviorBranchAnalytics({
            branchId: this.eventString[e],
            branchDim: t,
            eventType: a
        })
    },
    e.prototype.aladin_start = function(e) {
        cc.log("aladin_start -- levelId = ", e),
        wx.aldStage.onStart({
            stageId: e,
            stageName: "关卡 " + e
        })
    },
    e.prototype.aladin_onRunning = function(e) {
        wx.aldStage.onRunning({
            stageId: e,
            stageName: "关卡 " + e,
            event: "tools"
        })
    },
    e.prototype.aladin_win = function(e) {
        cc.log("aladin_win -- levelId = ", e),
        wx.aldStage.onEnd({
            stageId: e,
            stageName: "关卡 " + e,
            event: "complete",
            params: {
                desc: "关卡完成"
            }
        })
    },
    e.prototype.aladin_fail = function(e) {
        cc.log("aladin_fail -- levelId = ", e),
        wx.aldStage.onEnd({
            stageId: e,
            stageName: "关卡 " + e,
            event: "fail",
            params: {
                desc: "关卡失败"
            }
        })
    },
    e.prototype.isFitVersion = function(e) {
        return ! (r.Util.compareVersion(this.systemInfo.SDKVersion, e) < 0 && (wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        }), 1))
    },
    e.prototype.initBanner = function() {
        for (var e = this,
        t = function(t) {
            var o = a.bannersId[t],
            i = function() {
                cc.log("banner加载完成"),
                s.offLoad(i)
            },
            n = function() {
                s.offError(n)
            },
            s = wx.createBannerAd({
                adUnitId: o,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 300
                }
            });
            s.onResize(function(t) {
                s.style.left = e.systemInfo.windowWidth / 2 - t.width / 2,
                s.style.top = e.systemInfo.windowHeight - t.height,
                s.style.width = 300
            }),
            s.offError(n),
            s && s.onError(n),
            s.onLoad(i),
            a.bannerAds.push(s)
        },
        a = this, o = 0; o < this.bannersId.length; o++) t(o);
        cc.log("banner初始化完成")
    },
    e.prototype.refreshBanner = function(e) {
        return void 0 === e && (e = !0),
        o(this, void 0, void 0,
        function() {
            var t, a, o, n = this;
            return i(this,
            function(s) {
                switch (s.label) {
                    case 0:
                        this.isHideRefreshBanner = !1,
                    t = function(t) {
                        var o, s, r;
                        return i(this,
                        function(i) {
                            switch (i.label) {
                                case 0:
                                    return o = a.bannersId[t],
                                s = wx.createBannerAd({
                                    adUnitId: o,
                                    adIntervals: 30,
                                    style: {
                                        left: 0,
                                        top: 0,
                                        width: 300
                                    }
                                }),
                                r = function(e) {
                                    s.style.left = n.systemInfo.windowWidth / 2 - e.width / 2,
                                    s.style.top = n.systemInfo.windowHeight - e.height
                                },
                                s.onResize(r),
                                s.onClose(function() {}),
                                [4, new Promise(function(a) {
                                    var o = function() {
                                        s.offLoad(o),
                                        n.bannerAds[t] = s,
                                        0 == t && (n.isHideRefreshBanner || e && n.showBanner()),
                                        a("success")
                                    };
                                    s.onLoad(o)
                                })];
                                case 1:
                                    return i.sent(),
                                [2];
                            }
                        })
                    },
                    a = this,
                    o = 0,
                    s.label = 1;
                    case 1:
                        return o < this.bannerAds.length ? [5, t(o)] : [3, 4];
                    case 2:
                        s.sent(),
                    s.label = 3;
                    case 3:
                        return o++,
                    [3, 1];
                    case 4:
                        return [2];
                }
            })
        })
    },
    e.prototype.showBanner = function() {
        this.hideBanner(),
        this.bannerAd = this.bannerAds[this.bannerId],
        this.bannerId++,
        this.bannerId >= this.bannerAds.length && (this.bannerId = 0),
        this.bannerAd.show()
    },
    e.prototype.hideBanner = function() {
        this.isHideRefreshBanner = !0,
        this.bannerAd && this.bannerAd.hide()
    },
    e.prototype.showMistakeBanner = function(e, t, a) {
        var o = this;
        this.mistakeBanner.isHide = !1;
        var i = this.bannersId[Math.floor(Math.random() * this.bannersId.length)];
        if (!this.mistakeBanner.ad || a) {
            this.mistakeBanner.ad = wx.createBannerAd({
                adUnitId: i,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 300
                }
            }),
            this.mistakeBanner.ad.onResize(function(e) {
                o.mistakeBanner.ad.style.left = o.systemInfo.windowWidth / 2 - e.width / 2,
                o.mistakeBanner.ad.style.top = o.systemInfo.windowHeight - e.height - e.height / 2
            }),
            this.mistakeBanner.ad.onLoad(function() {
                o.mistakeBanner.isLoad = !0,
                cc.log("误触banner加载成功"),
                o.mistakeBanner.ad.offLoad(),
                o.mistakeBanner.isHide || o.mistakeBanner.ad.show().then(function() {
                    o.mistakeBanner.isShow = !0,
                    e && e()
                })
            });
            var n = function() {
                t && t(),
                o.mistakeBanner.ad.offError(n)
            };
            this.mistakeBanner.ad.onError(n)
        } else this.mistakeBanner.isHide || this.mistakeBanner.ad.show().then(function() {
            o.mistakeBanner.isShow = !0,
            e && e()
        })
    },
    e.prototype.hideMistakeBanner = function() {
        var e = this;
        this.mistakeBanner.isHide = !0,
        this.mistakeBanner.isShow && this.mistakeBanner.ad.hide().then(function() {
            e.mistakeBanner.isShow = !1
        })
    },
    e.prototype.initRewardVideo = function() {
        if (! (this.rewardVideoAds.length > 0)) for (var e = 0; e < this.videosId.length; e++) {
            var t = this.videosId[e],
            a = wx.createRewardedVideoAd({
                adUnitId: t
            });
            this.rewardVideoAds.push(a),
            a.onError(function(e) {
                cc.log("onError --- : "),
                cc.log(e)
            }),
            cc.log("视频初始化:" + t),
            this.loadRewardVideo(a)
        }
    },
    e.prototype.loadRewardVideo = function(e) {
        return o(this, void 0, void 0,
        function() {
            var t;
            return i(this,
            function() {
                return t = this,
                e.load().then(function() {
                    t.rewardLoadSucc = !0
                }).
                catch(function() {}),
                [2]
            })
        })
    },
    e.prototype.showRewardVideo = function(e, t, a) {
        var o = this;
        if (!this.click_video) {
            this.click_video = !0,
            this.logEvent(n.LogEventType.ShowVideo, "" + e, 2);
            var i = this.rewardVideoAds[this.rewardVideoId];
            cc.log("播放" + this.rewardVideoId + "视频id" + this.videosId[this.rewardVideoId]),
            this.rewardVideoId++,
            this.rewardVideoId >= this.videosId.length && (this.rewardVideoId = 0),
            1 == this.rewardLoadSucc ? (i.show({
                branchId: "BCBgAAoXHx5d0CS-hAgTmS",
                branchDim: "" + e
            }), this.rewardLoadSucc = !1) : i.load().then(function() {
                i.show({
                    branchId: "BCBgAAoXHx5d0CS-hAgTmS",
                    branchDim: "" + e
                })
            }).
            catch(function() {
                o.click_video = !1,
                a && a("拉取视频失败")
            });
            var s = function(e) {
                o.rewardLoadSucc = !1,
                o.click_video = !1,
                e.isEnded ? t && t() : a && a(),
                i.offClose(s),
                o.loadRewardVideo(i)
            };
            i.offClose(s),
            i.onClose(s),
            i.onError(function() {
                o.click_video = !1
            })
        }
    },
    e.prototype.showInsertAd = function(e) {
        var t = this;
        if (null != wx.createInterstitialAd) {
            this.insertAd && this.insertAd.destroy(),
            this.insertAd = wx.createInterstitialAd({
                adUnitId: this.insertAdsId
            }),
            this.insertAd.onError(function(e) {
                console.log(e)
            });
            var a = function() {
                t.insertAd.show().then(function() {
                    e && e()
                }).
                catch(function(e) {
                    cc.error(e)
                }),
                t.insertAd.offLoad(a)
            };
            this.insertAd.onLoad(a)
        }
    },
    e.prototype.showHallSingleCustomAd = function(e, t) {
        var a = this;
        if (this.curHallCustomAd = null, this.singleCustomAdRefreshIndex++, this.singleCustomAdRefreshIndex >= this.singleCustomAdIDArray.length && (this.singleCustomAdRefreshIndex = 0), this.hallSingleCustomAd.isHide = !1, this.curHallCustomAd) this.hallSingleCustomAd.isLoad && this.hallSingleCustomAd.ad.show().then(function() {
            a.hallSingleCustomAd.isShow = !0
        });
        else {
            var o = this.systemInfo.windowWidth - e.x,
            i = e.y;
            t && (i = this.systemInfo.windowHeight - e.y),
            this.curHallCustomAd = wx.createCustomAd({
                adUnitId: this.singleCustomAdIDArray[this.singleCustomAdRefreshIndex],
                left: o,
                top: i,
                fixed: !1
            }),
            this.curHallCustomAd.onError(function(e) {
                console.log(e)
            }),
            this.curHallCustomAd.onLoad(function() {
                a.hallSingleCustomAd.isLoad = !0,
                a.hallSingleCustomAd.isHide ? a.hallSingleCustomAd.ad = a.curHallCustomAd: a.curHallCustomAd.show().then(function() {
                    a.hallSingleCustomAd.ad && a.hallSingleCustomAd.ad.destroy(),
                    a.hallSingleCustomAd.ad = a.curHallCustomAd,
                    a.hallSingleCustomAd.isShow = !0
                })
            })
        }
    },
    e.prototype.hideHallSingleCustomAd = function() {
        var e = this;
        this.hallSingleCustomAd.isHide = !0,
        this.hallSingleCustomAd.isShow && this.hallSingleCustomAd.ad.hide().then(function() {
            e.hallSingleCustomAd.isShow = !1
        })
    },
    e.prototype.show_CustomAd = function() {
        var e = this;
        if (0 != this.isFitVersion("2.11.2")) {
            var t = this.custumAdIds[0],
            a = this.custumAdIds[1],
            o = 50,
            i = 30;
            this.customAdR.isHide = !1,
            this.customAdR.ad || (this.customAdR.ad = wx.createCustomAd({
                adUnitId: t,
                left: o,
                top: i,
                fixed: !1
            }), this.customAdR.ad.onLoad(function() {
                e.customAdR.isLoad = !0,
                e.customAdR.isHide || e.customAdR.ad.show().then(function() {
                    e.customAdR.isShow = !0
                })
            }), this.customAdR.ad.onClose(function() {
                cc.log("原生模板广告关闭"),
                e.customAdR.ad = null,
                e.customAdR.isLoad = !1,
                e.customAdR.isShow = !1
            }), this.customAdR.ad.onError(function() {})),
            this.customAdR.isLoad && this.customAdR.ad.show().then(function() {
                e.customAdR.isShow = !0,
                cc.log("原生模板广告显示")
            }),
            o = this.systemInfo.windowWidth - 120,
            i = 30,
            this.customAdL.isHide = !1,
            this.customAdL.ad || (this.customAdL.ad = wx.createCustomAd({
                adUnitId: a,
                left: o,
                top: i,
                fixed: !1
            }), this.customAdL.ad.onLoad(function() {
                e.customAdL.isLoad = !0,
                e.customAdL.isHide || e.customAdL.ad.show().then(function() {
                    e.customAdL.isShow = !0,
                    cc.log("原生模板广告显示")
                })
            }), this.customAdL.ad.onClose(function() {
                cc.log("原生模板广告关闭"),
                e.customAdL.ad = null,
                e.customAdL.isLoad = !1,
                e.customAdL.isShow = !1
            }), this.customAdL.ad.onError(function() {})),
            this.customAdL.isLoad && this.customAdL.ad.show().then(function() {
                e.customAdL.isShow = !0,
                cc.log("原生模板广告显示")
            })
        }
    },
    e.prototype.hideCustomAd = function() {
        var e = this;
        this.customAdR.isHide = !0,
        this.customAdR.isShow && this.customAdR.ad.hide().then(function() {
            e.customAdR.isShow = !1
        }),
        this.customAdL.isHide = !0,
        this.customAdL.isShow && this.customAdL.ad.hide().then(function() {
            e.customAdL.isShow = !1
        })
    },
    e.prototype.show_gridAd = function(e, t) {
        var a = this;
        this.gridAd && this.gridAd.destroy(),
        this.gridAd = wx.createGridAd({
            adUnitId: "adunit-dd545635e0286229",
            adIntervals: 30,
            adTheme: "white",
            gridCount: 8,
            style: {
                left: 0,
                top: 0,
                width: 100,
                height: 50
            }
        });
        var o = function() {
            a.gridAd.show().then(function() {
                e && e()
            }).
            catch(),
            a.gridAd.offLoad(o)
        };
        this.gridAd.offLoad(o),
        this.gridAd.onLoad(o);
        var i = function(e) {
            cc.log("gridAd width: " + e.width + " height: " + e.height),
            a.gridAd.style.left = a.systemInfo.windowWidth / 2 - e.width / 2,
            t || (a.gridAd.style.top = a.systemInfo.windowHeight - e.height - 100),
            cc.log("gridAd top: " + a.gridAd.style.top),
            a.gridAd.offResize(i)
        };
        this.gridAd.offResize(i),
        this.gridAd.onResize(i);
        var n = function(e) {
            cc.log(e),
            a.gridAd.offError(n)
        };
        this.gridAd.offError(n),
        this.gridAd.onError(n)
    },
    e.prototype.hide_gridAd = function() {
        this.gridAd && this.gridAd.hide()
    },
    e._ins = null,
    e
} ());
a.default = c