var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.event_dispatcher = a.Util = void 0;
var o = e("PlayerData"); (function(e) {
    e.setSpineAttachment = function(e, t, a) {
        e.setAttachment(t, a)
    },
    e.changePartialCloth = function(e, t, a, o) {
        var i = e.findSlot(t);
        if (i) {
            var n = e.skeletonData.getRuntimeData(),
            s = n.findSkin(a),
            r = n.findSlotIndex(t),
            l = s.getAttachment(r, o);
            i && l ? (i.setAttachment(l), l.updateOffset(), e.invalidAnimationCache()) : cc.error(i && l, "slots: " + t + ", attach: " + o + " not exists!")
        } else cc.error("slots: " + t + " not exists!")
    },
    e.changeSlotByOut = function(e, t) {
        var a = e.findSlot(t).attachment;
        cc.log("att org region:", a.region.width, a.region.height, a)
    },
    e.oldWhitecreateRegion = function(e, t, a) {
        var o = e.findSlot(t).attachment,
        i = (a.width, a.height, a.width, a.height, o.region);
        i.u = 0,
        i.v = 0,
        i.u2 = 1,
        i.v2 = 1,
        i.rotate = !1,
        i.width = a.width,
        i.height = a.height,
        i.originalWidth = a.width,
        i.originalHeight = a.height
    },
    e.changePartialWithExternalTexture = function(e, t, a) {
        var o = e.findSlot(t).getAttachment(),
        i = new sp.SkeletonTexture({
            width: a.width,
            height: a.height
        });
        i.setRealTexture(a);
        var n = o.region;
        n.width = a.width,
        n.height = a.height,
        n.originalWidth = a.width,
        n.originalHeight = a.height,
        n.rotate = !1,
        n.u = 0,
        n.v = 0,
        n.u2 = 1,
        n.v2 = 1,
        n.texture = i,
        n.renderObject = n,
        o.width = a.width,
        o.height = a.height,
        cc.log(o),
        o instanceof sp.spine.MeshAttachment ? o.updateUVs() : (o.setRegion(n), o.updateOffset()),
        e.invalidAnimationCache()
    },
    e.changeSlot = function(e, t, a) {
        var o = e.findSlot(t).attachment;
        if (o) {
            var i = new sp.SkeletonTexture;
            i.setRealTexture(a);
            var n = new sp.spine.TextureAtlasPage;
            n.name = a.name,
            n.uWrap = sp.spine.TextureWrap.ClampToEdge,
            n.vWrap = sp.spine.TextureWrap.ClampToEdge,
            n.texture = i,
            n.texture.setWraps(n.uWrap, n.vWrap),
            n.width = a.width,
            n.height = a.height;
            var s = new sp.spine.TextureAtlasRegion;
            s.page = n,
            s.width = a.width,
            s.height = a.height,
            s.originalWidth = a.width,
            s.originalHeight = a.height,
            s.rotate = !1,
            s.u = 0,
            s.v = 0,
            s.u2 = 1,
            s.v2 = 1,
            s.texture = i,
            o.region = s,
            o.setRegion(s),
            o.updateOffset()
        }
    },
    e.changeSlots = function(e, t, a) {
        var o = new Date,
        i = e.skeletonData,
        n = new sp.SkeletonData;
        cc.js.mixin(n, i),
        n._uuid = i._uuid + "_" + o.getTime() + "_copy";
        var s = n.name,
        r = n.name + "_copy";
        n.name = r,
        n.atlasText = n.atlasText.replace(s, r),
        n.textureNames[0] = r + ".png",
        n.init && n.init(),
        e.skeletonData = n;
        for (var l = 0; l < t.length; l++) {
            var c = e.findSlot(t[l]).attachment;
            if (!c) return;
            var d = new sp.SkeletonTexture;
            d.setRealTexture(a[l]);
            var p = new sp.spine.TextureAtlasPage;
            p.name = a[l].name,
            p.uWrap = sp.spine.TextureWrap.ClampToEdge,
            p.vWrap = sp.spine.TextureWrap.ClampToEdge,
            p.texture = d,
            p.texture.setWraps(p.uWrap, p.vWrap),
            p.width = a[l].width,
            p.height = a[l].height;
            var u = new sp.spine.TextureAtlasRegion;
            u.page = p,
            u.width = a[l].width,
            u.height = a[l].height,
            u.originalWidth = a[l].width,
            u.originalHeight = a[l].height,
            u.rotate = !1,
            u.u = 0,
            u.v = 0,
            u.u2 = 1,
            u.v2 = 1,
            u.texture = d,
            c.region = u,
            c.setRegion(u),
            c.updateOffset()
        }
    },
    e.showSlot = function(e, t) {
        var a = e.findSlot(t),
        o = e.skeletonData.getRuntimeData(),
        i = o.findSlotIndex(t),
        n = o.skins[0].getAttachment(i, t);
        a.setAttachment(n)
    },
    e.load_img = function(e, t) {
        t ? cc.resources.get(t) ? e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.resources.get(t)) : cc.resources.load(t,
        function(t, a) {
            e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(a)
        }) : e.getComponent(cc.Sprite).spriteFrame = null
    },
    e.showTip = function(e) {
        a.event_dispatcher.sendMessage("show_tip_game_view", e)
    },
    e.isLiuhai = function() {
        var e = cc.winSize;
        return 2 * e.height < e.width
    },
    e.logExMsg = function(e) {
        void 0 === e && (e = -1);
        var t = 8;
        return t >= 10 && (t = 0),
        -1 != e && (t = e),
        "" + (!0 === o.default.getIns().getIsNewPlayer() ? 1 : 2) + t
    },
    e.mathLvUpGold = function(e, t, a) {
        var o = 1;
        a && (o = 2);
        var i = t + 1,
        n = 1.2 * (Math.pow((.5 * e + 1) * i, 2) + 65 * (e + 1)) * o;
        return Math.floor(n)
    },
    e.equipLvUpUseGold = function(e, t, a) {
        var o = 1;
        a && (o = 2);
        for (var i = t,
        n = 0,
        s = i; s > 0; s--) n += 1.2 * (Math.pow((.5 * e + 1) * i, 2) + 65 * (e + 1)) * o;
        return Math.floor(n)
    },
    e.extraPush = function(e, t) {
        if (null != t && 0 != t.length) {
            for (var a = 0; a < t.length; a++) if (e == t[a]) return;
            t.push(e)
        }
    },
    e.extraArrayCopy0 = function(e, t) {
        if (null != t && 0 != t.length) for (var a = 0; a < t.length; a++) {
            var o = t[a];
            e.push(o)
        }
    },
    e.extraArrayCopy = function(e, t) {
        if (null != t && 0 != t.length) for (var a = 0; a < t.length; a++) {
            for (var o = t[a], i = !1, n = 0; n < e.length; n++) if (o == e[n]) {
                i = !0;
                break
            }
            i || e.push(o)
        }
    },
    e.removeItemByArray = function(e, t) {
        if (0 != t.length) for (var a = 0; a < t.length; a++) {
            if (t[a] == e) return void t.splice(a, 1);
            if (null != t[a].name && null != e.name && t[a].name == e.name) return void t.splice(a, 1)
        }
    },
    e.randomItemByArray = function(e) {
        return 0 == e.length ? null: e[Math.floor(e.length * Math.random())]
    },
    e.randomItemAndRemove = function(e) {
        if (0 == e.length) return null;
        var t = Math.floor(e.length * Math.random()),
        a = e[t];
        return e.splice(t, 1),
        a
    },
    e.randomArray = function(e) {
        if (0 == e.length) return null;
        for (var t = 0; t < 100; t++) {
            var a = Math.floor(e.length * Math.random()),
            o = Math.floor(e.length * Math.random()),
            i = e[a],
            n = e[o];
            e[a] = n,
            e[o] = i
        }
    },
    e.isHandItemByArray = function(e, t) {
        if (0 == t.length) return ! 1;
        for (var a = 0; a < t.length; a++) if (e == t[a]) return ! 0;
        return ! 1
    },
    e.scienceMath = function(e) {
        return e < 1e3 ? "" + e: e < 1e6 ? (e / 1e3).toFixed(1) + "K": (e / 1e6).toFixed(1) + "M"
    },
    e.timeMath = function(e) {
        var t, a, o;
        return e = Math.ceil(e),
        (t = Math.floor(e / 3600)) < 10 && (t = "0" + t),
        (a = Math.floor((e - 3600 * Number(t)) / 60)) < 10 && (a = "0" + a),
        (o = e % 60) < 10 && (o = "0" + o),
        t + ":" + a + ":" + o
    },
    e.compareVersion = function(e, t) {
        for (var a = e.split("."), o = t.split("."), i = Math.max(a.length, o.length); a.length < i;) a.push("0");
        for (; o.length < i;) o.push("0");
        for (var n = 0; n < i; n++) {
            var s = parseInt(a[n]),
            r = parseInt(o[n]);
            if (s > r) return 1;
            if (s < r) return - 1
        }
        return 0
    }
})(a.Util || (a.Util = {}));
var i = function() {
    function e() {
        this.nodeList = []
    }
    return e.prototype.sendMessage = function(e) {
        for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        for (var o = 0; o < this.nodeList.length; o++) {
            var i = this.nodeList[o];
            i[e] && !i.destroyed && i[e].apply(i, t)
        }
    },
    e.prototype.remove = function(e) {
        for (var t = 0; t < this.nodeList.length; t++) if (this.nodeList[t] === e) {
            this.nodeList.splice(t, 1);
            break
        }
    },
    e.prototype.register = function(e) {
        this.nodeList.push(e)
    },
    e
} ();
a.event_dispatcher = new i