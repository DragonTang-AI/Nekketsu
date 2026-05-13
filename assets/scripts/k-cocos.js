var e = require;
var t = module;
! function() {
    var e = window.cc;
    e.director._kSpeed = 1;
    var t = e.Director.prototype.calculateDeltaTime;
    e.director.calculateDeltaTime = function(e) {
            t.call(this, e),
                this._deltaTime *= this._kSpeed
        },
        e.kSpeed = function(t) {
            e.director._kSpeed = t
        },
        e.kGetSpeed = function() {
            return e.director._kSpeed
        },
        e.kMultTouch = function(t) {
            e.internal && e.internal.inputManager ? e.internal.inputManager._maxTouches = t : (_cc && _cc.inputManager && (_cc.inputManager._maxTouches = t), CC_QQPLAY && BK && BK.inputManager && (BK.inputManager._maxTouches = t))
        },
        e.kNode = function(t) {
            return t.kTag = 0,
                t.kInfo = "init",
                t._kState = "init",
                Object.defineProperties(t, {
                    kState: {
                        get: function() {
                            return this._kState
                        },
                        set: function(e) {
                            var t = this._kState;
                            this._kState = e,
                                this.kStateCb && this.kStateCb(e, t)
                        }
                    },
                    kComponents: {
                        get: function() {
                            return this._components
                        },
                        set: function() {
                            e.error("can not set kComponents, please use addComponent()")
                        }
                    },
                    kFirstChild: {
                        get: function() {
                            return this.children[0]
                        },
                        set: function() {
                            e.error("can not set kFirstChild, please use addChild()")
                        }
                    },
                    kSecondChild: {
                        get: function() {
                            return this.children[1]
                        },
                        set: function() {
                            e.error("can not set kSecondChild, please use addChild()")
                        }
                    },
                    kThirdChild: {
                        get: function() {
                            return this.children[2]
                        },
                        set: function() {
                            e.error("can not set kThirdChild, please use addChild()")
                        }
                    },
                    kLastChild: {
                        get: function() {
                            return this.children[this.childrenCount - 1]
                        },
                        set: function() {
                            e.error("can not set kFirstChild, please use addChild()")
                        }
                    }
                }),
                t.kHitTest = function(e) {
                    this._hitTest = e
                },
                t
        }
}()