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
a.SoundType = void 0;
var s = cc._decorator,
r = s.ccclass;
s.property,
function(e) {
    e[e.Attackwind01 = 0] = "Attackwind01",
    e[e.Attackwind02 = 1] = "Attackwind02",
    e[e.Attackwind03 = 2] = "Attackwind03",
    e[e.Attackwind04 = 3] = "Attackwind04",
    e[e.Coin = 4] = "Coin",
    e[e.Coin_Collect = 5] = "Coin_Collect",
    e[e.Hit01 = 6] = "Hit01",
    e[e.Hit02 = 7] = "Hit02",
    e[e.BOSSdialogue = 8] = "BOSSdialogue",
    e[e.Attack_01 = 9] = "Attack_01",
    e[e.Attack_02 = 10] = "Attack_02",
    e[e.Pain01 = 11] = "Pain01",
    e[e.Attack_BOSS01 = 12] = "Attack_BOSS01",
    e[e.Pain_BOSS01 = 13] = "Pain_BOSS01",
    e[e.Attack_ground = 14] = "Attack_ground",
    e[e.Ult = 15] = "Ult",
    e[e.Body_fall = 16] = "Body_fall"
} (a.SoundType || (a.SoundType = {}));
var l = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.SoundDir = ["Attackwind01", "Attackwind02", "Attackwind03", "Attackwind04", "Coin", "Coin_Collect", "Hit01", "Hit02", "BOSSdialogue", "Attack_01", "Attack_02", "Pain01", "Attack_BOSS1", "Pain_BOSS01", "Attack_ground", "Ult", "Body_fall"],
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
        cc.game.addPersistRootNode(this.node)
    },
    t.prototype.start = function() {},
    t.prototype.playMusic = function(e) {
        this.stopMusic(),
        1 != cc.audioEngine.isMusicPlaying() && (0 == e ? this.soundBundle.load("BGM_Stage01", cc.AudioClip,
        function(e, t) {
            cc.audioEngine.playMusic(t, !0)
        }) : 2 == e ? this.soundBundle.load("BGM_Guide", cc.AudioClip,
        function(e, t) {
            cc.audioEngine.playMusic(t, !0)
        }) : this.soundBundle.load("BGM_BOSS01", cc.AudioClip,
        function(e, t) {
            cc.audioEngine.playMusic(t, !0)
        }))
    },
    t.prototype.stopMusic = function() {
        cc.audioEngine.stopMusic()
    },
    t.prototype.pauseMusic = function() {
        cc.audioEngine.pauseMusic()
    },
    t.prototype.resumeMusic = function() {
        cc.audioEngine.resumeMusic()
    },
    t.prototype.tweenHideMusic = function(e) {
        void 0 === e && (e = !1);
        var t = [.8, .6, .5, .4];
        1 == e && (t = [.4, .35, .3, .2]),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(t[0])
        },
        100),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(t[1])
        },
        400),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(t[2])
        },
        700),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(t[3])
        },
        1e3)
    },
    t.prototype.tweenShowMusic = function() {
        var e = [.5, .6, .8, 1];
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(e[0])
        },
        100),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(e[1])
        },
        400),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(e[2])
        },
        700),
        setTimeout(function() {
            cc.audioEngine.setMusicVolume(e[3])
        },
        1e3)
    },
    t.prototype.playAudio = function(e, t) {
        void 0 === t && (t = 1);
        var a = this.SoundDir[e];
        cc.log("playAudio:", a),
        this.soundBundle.load(a, cc.AudioClip,
        function(e, a) {
            cc.audioEngine.play(a, !1, t)
        })
    },
    t.prototype.reloadAudio = function(e) {
        if (null != this.soundBundle) {
            var t = this.SoundDir[e];
            this.soundBundle.load(t, cc.AudioClip,
            function() {})
        }
    },
    t.prototype.replayAudio = function(e, t) {
        void 0 === t && (t = 1);
        var a = this.SoundDir[e],
        o = this;
        this.soundBundle.load(a, cc.AudioClip,
        function(e, a) {
            o.replayID = cc.audioEngine.play(a, !0, t)
        })
    },
    t.prototype.stopReplayAudio = function() {
        cc.audioEngine.stop(this.replayID)
    },
    t._ins = null,
    a = n([r], t)
} (cc.Component);
a.default = l