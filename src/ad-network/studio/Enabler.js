(function () {
    var DEPS_GRAPH = {
        'enablermodule': [],
        'configurablemodule': ['enablermodule'],
        'gdnmodule': ['enablermodule'],
        'layoutsmodule': ['enablermodule'],
        'videomodule': ['enablermodule'],
        'configurablefillermodule': ['configurablemodule'],
        'layoutsfillermodule': ['layoutsmodule'],
        'rad_ui_videomodule': ['videomodule'],
        '$weak$': ['configurablefillermodule', 'configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
    };
    window.STUDIO_SDK_START = +new Date();
    var g, aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    Vc: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Vc;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da,
        ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ka = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        la = function (a, b) {
            if (b) {
                var c = ja;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ka(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    la("Promise", function (a) {
        function b() {
            this.a = null
        }

        function c(k) {
            return k instanceof e ? k : new e(function (l) {
                l(k)
            })
        }
        if (a) return a;
        b.prototype.b = function (k) {
            if (null == this.a) {
                this.a = [];
                var l = this;
                this.f(function () {
                    l.g()
                })
            }
            this.a.push(k)
        };
        var d = ja.setTimeout;
        b.prototype.f = function (k) {
            d(k, 0)
        };
        b.prototype.g = function () {
            for (; this.a && this.a.length;) {
                var k = this.a;
                this.a = [];
                for (var l = 0; l < k.length; ++l) {
                    var n = k[l];
                    k[l] = null;
                    try {
                        n()
                    } catch (p) {
                        this.h(p)
                    }
                }
            }
            this.a = null
        };
        b.prototype.h = function (k) {
            this.f(function () {
                throw k;
            })
        };
        var e = function (k) {
            this.b = 0;
            this.f = void 0;
            this.a = [];
            var l = this.h();
            try {
                k(l.resolve, l.reject)
            } catch (n) {
                l.reject(n)
            }
        };
        e.prototype.h = function () {
            function k(p) {
                return function (t) {
                    n || (n = !0, p.call(l, t))
                }
            }
            var l = this,
                n = !1;
            return {
                resolve: k(this.w),
                reject: k(this.g)
            }
        };
        e.prototype.w = function (k) {
            if (k === this) this.g(new TypeError("A Promise cannot resolve to itself"));
            else if (k instanceof e) this.W(k);
            else {
                a: switch (typeof k) {
                    case "object":
                        var l = null != k;
                        break a;
                    case "function":
                        l = !0;
                        break a;
                    default:
                        l = !1
                }
                l ? this.s(k) : this.j(k)
            }
        };
        e.prototype.s = function (k) {
            var l = void 0;
            try {
                l = k.then
            } catch (n) {
                this.g(n);
                return
            }
            "function" == typeof l ? this.A(l, k) : this.j(k)
        };
        e.prototype.g = function (k) {
            this.l(2, k)
        };
        e.prototype.j = function (k) {
            this.l(1, k)
        };
        e.prototype.l = function (k, l) {
            if (0 != this.b) throw Error("Cannot settle(" + k + ", " + l + "): Promise already settled in state" + this.b);
            this.b = k;
            this.f = l;
            this.D()
        };
        e.prototype.D = function () {
            if (null != this.a) {
                for (var k = 0; k < this.a.length; ++k) f.b(this.a[k]);
                this.a = null
            }
        };
        var f = new b;
        e.prototype.W = function (k) {
            var l =
                this.h();
            k.Ua(l.resolve, l.reject)
        };
        e.prototype.A = function (k, l) {
            var n = this.h();
            try {
                k.call(l, n.resolve, n.reject)
            } catch (p) {
                n.reject(p)
            }
        };
        e.prototype.then = function (k, l) {
            function n(X, Ba) {
                return "function" == typeof X ? function (ab) {
                    try {
                        p(X(ab))
                    } catch (Ia) {
                        t(Ia)
                    }
                } : Ba
            }
            var p, t, J = new e(function (X, Ba) {
                p = X;
                t = Ba
            });
            this.Ua(n(k, p), n(l, t));
            return J
        };
        e.prototype["catch"] = function (k) {
            return this.then(void 0, k)
        };
        e.prototype.Ua = function (k, l) {
            function n() {
                switch (p.b) {
                    case 1:
                        k(p.f);
                        break;
                    case 2:
                        l(p.f);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            p.b);
                }
            }
            var p = this;
            null == this.a ? f.b(n) : this.a.push(n)
        };
        e.resolve = c;
        e.reject = function (k) {
            return new e(function (l, n) {
                n(k)
            })
        };
        e.race = function (k) {
            return new e(function (l, n) {
                for (var p = ba(k), t = p.next(); !t.done; t = p.next()) c(t.value).Ua(l, n)
            })
        };
        e.all = function (k) {
            var l = ba(k),
                n = l.next();
            return n.done ? c([]) : new e(function (p, t) {
                function J(ab) {
                    return function (Ia) {
                        X[ab] = Ia;
                        Ba--;
                        0 == Ba && p(X)
                    }
                }
                var X = [],
                    Ba = 0;
                do X.push(void 0), Ba++, c(n.value).Ua(J(X.length - 1), t), n = l.next(); while (!n.done)
            })
        };
        return e
    });
    var ma = function () {
            ma = function () {};
            ja.Symbol || (ja.Symbol = na)
        },
        oa = function (a, b) {
            this.a = a;
            ka(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    oa.prototype.toString = function () {
        return this.a
    };
    var na = function () {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new oa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        qa = function () {
            ma();
            var a = ja.Symbol.iterator;
            a || (a = ja.Symbol.iterator = ja.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && ka(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return pa(aa(this))
                }
            });
            qa = function () {}
        },
        pa = function (a) {
            qa();
            a = {
                next: a
            };
            a[ja.Symbol.iterator] = function () {
                return this
            };
            return a
        };
    la("String.prototype.endsWith", function (a) {
        return a ? a : function (b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            var d = this + "";
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    var ra = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    la("WeakMap", function (a) {
        function b() {}

        function c(l) {
            if (!ra(l, e)) {
                var n = new b;
                ka(l, e, {
                    value: n
                })
            }
        }

        function d(l) {
            var n = Object[l];
            n && (Object[l] = function (p) {
                if (p instanceof b) return p;
                c(p);
                return n(p)
            })
        }
        if (function () {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        n = Object.seal({}),
                        p = new a([
                            [l, 2],
                            [n, 3]
                        ]);
                    if (2 != p.get(l) || 3 != p.get(n)) return !1;
                    p["delete"](l);
                    p.set(n, 4);
                    return !p.has(l) && 4 == p.get(n)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random();
        d("freeze");
        d("preventExtensions");
        d("seal");
        var f = 0,
            k = function (l) {
                this.a = (f += Math.random() + 1).toString();
                if (l) {
                    l = ba(l);
                    for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        k.prototype.set = function (l, n) {
            c(l);
            if (!ra(l, e)) throw Error("WeakMap key fail: " + l);
            l[e][this.a] = n;
            return this
        };
        k.prototype.get = function (l) {
            return ra(l, e) ? l[e][this.a] : void 0
        };
        k.prototype.has = function (l) {
            return ra(l, e) && ra(l[e], this.a)
        };
        k.prototype["delete"] = function (l) {
            return ra(l, e) && ra(l[e], this.a) ? delete l[e][this.a] : !1
        };
        return k
    });
    la("Map", function (a) {
        if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var l = Object.seal({
                            x: 4
                        }),
                        n = new a(ba([
                            [l, "s"]
                        ]));
                    if ("s" != n.get(l) || 1 != n.size || n.get({
                            x: 4
                        }) || n.set({
                            x: 4
                        }, "t") != n || 2 != n.size) return !1;
                    var p = n.entries(),
                        t = p.next();
                    if (t.done || t.value[0] != l || "s" != t.value[1]) return !1;
                    t = p.next();
                    return t.done || 4 != t.value[0].x || "t" != t.value[1] || !p.next().done ? !1 : !0
                } catch (J) {
                    return !1
                }
            }()) return a;
        qa();
        var b = new WeakMap,
            c = function (l) {
                this.b = {};
                this.a =
                    f();
                this.size = 0;
                if (l) {
                    l = ba(l);
                    for (var n; !(n = l.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        c.prototype.set = function (l, n) {
            l = 0 === l ? 0 : l;
            var p = d(this, l);
            p.list || (p.list = this.b[p.id] = []);
            p.V ? p.V.value = n : (p.V = {
                next: this.a,
                qa: this.a.qa,
                head: this.a,
                key: l,
                value: n
            }, p.list.push(p.V), this.a.qa.next = p.V, this.a.qa = p.V, this.size++);
            return this
        };
        c.prototype["delete"] = function (l) {
            l = d(this, l);
            return l.V && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.b[l.id], l.V.qa.next = l.V.next, l.V.next.qa = l.V.qa, l.V.head =
                null, this.size--, !0) : !1
        };
        c.prototype.clear = function () {
            this.b = {};
            this.a = this.a.qa = f();
            this.size = 0
        };
        c.prototype.has = function (l) {
            return !!d(this, l).V
        };
        c.prototype.get = function (l) {
            return (l = d(this, l).V) && l.value
        };
        c.prototype.entries = function () {
            return e(this, function (l) {
                return [l.key, l.value]
            })
        };
        c.prototype.keys = function () {
            return e(this, function (l) {
                return l.key
            })
        };
        c.prototype.values = function () {
            return e(this, function (l) {
                return l.value
            })
        };
        c.prototype.forEach = function (l, n) {
            for (var p = this.entries(), t; !(t = p.next()).done;) t =
                t.value, l.call(n, t[1], t[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (l, n) {
                var p = n && typeof n;
                "object" == p || "function" == p ? b.has(n) ? p = b.get(n) : (p = "" + ++k, b.set(n, p)) : p = "p_" + n;
                var t = l.b[p];
                if (t && ra(l.b, p))
                    for (l = 0; l < t.length; l++) {
                        var J = t[l];
                        if (n !== n && J.key !== J.key || n === J.key) return {
                            id: p,
                            list: t,
                            index: l,
                            V: J
                        }
                    }
                return {
                    id: p,
                    list: t,
                    index: -1,
                    V: void 0
                }
            },
            e = function (l, n) {
                var p = l.a;
                return pa(function () {
                    if (p) {
                        for (; p.head != l.a;) p = p.qa;
                        for (; p.next != p.head;) return p = p.next, {
                            done: !1,
                            value: n(p)
                        };
                        p = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function () {
                var l = {};
                return l.qa = l.next = l.head = l
            },
            k = 0;
        return c
    });
    la("Object.is", function (a) {
        return a ? a : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    la("Array.prototype.includes", function (a) {
        return a ? a : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    var h = this || self,
        m = function (a) {
            return void 0 !== a
        },
        q = function (a) {
            return "string" == typeof a
        },
        sa = function (a) {
            return "number" == typeof a
        },
        r = function (a, b, c) {
            a = a.split(".");
            c = c || h;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && m(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
        },
        ta = /^[\w+/_-]+[=]{0,2}$/,
        ua = null,
        va = function (a, b) {
            a = a.split(".");
            b = b || h;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        wa = function () {},
        xa = function () {
            throw Error("unimplemented abstract method");
        },
        ya = function (a) {
            a.ub = void 0;
            a.ja = function () {
                return a.ub ? a.ub : a.ub = new a
            }
        },
        za = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        u = function (a) {
            return "array" == za(a)
        },
        Aa = function (a) {
            var b = za(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        v = function (a) {
            return "function" == za(a)
        },
        w = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ea = function (a) {
            return a[Ca] ||
                (a[Ca] = ++Da)
        },
        Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0,
        Fa = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ga = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        x = function (a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = Fa :
                x = Ga;
            return x.apply(null, arguments)
        },
        Ha = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Ja = Date.now || function () {
            return +new Date
        },
        y = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.o = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Mf = function (d, e, f) {
                for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
                return b.prototype[e].apply(d, k)
            }
        };
    var Ka = function (a, b) {
        this.j = Math.random() < a;
        this.l = b;
        this.h = null;
        this.g = ""
    };
    Ka.prototype.b = function () {
        return this.j && null !== this.h ? (this.l + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.h + this.g).substring(0, 2E3) : ""
    };
    var La = function () {};
    r("studio.common.Environment", La, void 0);
    La.Type = {
        LIVE: 1,
        LOCAL: 2,
        BROWSER: 4,
        IN_APP: 8,
        LAYOUTS_PREVIEW: 16,
        CREATIVE_TOOLSET: 32,
        RENDERING_STUDIO: 64,
        RENDERING_TEST: 128,
        PREVIEW: 256
    };
    var Ma = 6;
    La.addType = function (a) {
        Ma |= a;
        Na(a)
    };
    var Oa = function (a) {
        Ma = a | 6;
        Na(Ma)
    };
    La.setType = Oa;
    var z = function (a) {
        return (Ma & a) == a
    };
    La.hasType = z;
    La.getValue = function () {
        return Ma
    };
    var Na = function (a) {
            Pa(a, 2, 1);
            Pa(a, 1, 2);
            Pa(a, 4, 8);
            Pa(a, 8, 4);
            Pa(a, 128, 64);
            Pa(a, 64, 128);
            Pa(a, 256, 2)
        },
        Pa = function (a, b, c) {
            (a & b) == b && (Ma |= b, Ma &= ~c)
        };
    var Qa = function (a, b) {
        Ka.call(this, a, b);
        this.f = this.a = null;
        this.h = "rmad_mod"
    };
    y(Qa, Ka);
    Qa.prototype.b = function () {
        return null !== this.a && null !== this.f ? (this.g = "&status=" + this.a + "&type=" + this.f, Qa.o.b.call(this)) : ""
    };
    var Ra = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ra);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    y(Ra, Error);
    Ra.prototype.name = "CustomError";
    var Sa;
    var Ta = function (a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ra.call(this, c + a[d])
    };
    y(Ta, Ra);
    Ta.prototype.name = "AssertionError";
    var Ua = function (a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new Ta("" + e, f || []);
        },
        A = function (a, b, c) {
            a || Ua("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Va = function (a, b) {
            throw new Ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Wa = function (a, b, c) {
            sa(a) || Ua("Expected number but got %s: %s.", [za(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Xa = function (a, b, c) {
            q(a) || Ua("Expected string but got %s: %s.", [za(a),
                a
            ], b, Array.prototype.slice.call(arguments, 2))
        },
        Ya = function (a, b, c) {
            v(a) || Ua("Expected function but got %s: %s.", [za(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Za = function (a, b, c) {
            u(a) || Ua("Expected array but got %s: %s.", [za(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
    var $a = Array.prototype.indexOf ? function (a, b) {
            A(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function (a, b) {
            if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        B = Array.prototype.forEach ? function (a, b, c) {
            A(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        bb = Array.prototype.filter ? function (a, b, c) {
            A(null != a.length);
            return Array.prototype.filter.call(a,
                b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, k = q(a) ? a.split("") : a, l = 0; l < d; l++)
                if (l in k) {
                    var n = k[l];
                    b.call(c, n, l, a) && (e[f++] = n)
                } return e
        },
        cb = Array.prototype.map ? function (a, b, c) {
            A(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
            return e
        },
        db = Array.prototype.some ? function (a, b, c) {
            A(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = q(a) ?
                    a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        eb = Array.prototype.every ? function (a, b, c) {
            A(null != a.length);
            return Array.prototype.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        gb = function (a) {
            var b = h.performance.getEntriesByType("resource");
            a = fb(b, a, void 0);
            return 0 > a ? null : q(b) ? b.charAt(a) : b[a]
        },
        fb = function (a, b, c) {
            for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c,
                        e[f], f, a)) return f;
            return -1
        },
        ib = function (a, b) {
            b = $a(a, b);
            var c;
            (c = 0 <= b) && hb(a, b);
            return c
        },
        hb = function (a, b) {
            A(null != a.length);
            Array.prototype.splice.call(a, b, 1)
        },
        jb = function (a) {
            return Array.prototype.concat.apply([], arguments)
        },
        kb = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        lb = function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (Aa(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var k = 0; k < f; k++) a[e + k] = d[k]
                } else a.push(d)
            }
        },
        nb = function (a, b, c, d) {
            A(null != a.length);
            Array.prototype.splice.apply(a, mb(arguments, 1))
        },
        mb = function (a, b, c) {
            A(null != a.length);
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        pb = function (a, b) {
            a.sort(b || ob)
        },
        qb = function (a, b) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
                index: d,
                value: a[d]
            };
            var e = b || ob;
            pb(c, function (f, k) {
                return e(f.value, k.value) || f.index - k.index
            });
            for (d = 0; d < a.length; d++) a[d] = c[d].value
        },
        ob = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var rb = function (a, b) {
            return 0 == a.lastIndexOf(b, 0)
        },
        sb = function (a) {
            return /^[\s\xa0]*$/.test(a)
        },
        tb = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        ub = /&/g,
        vb = /</g,
        wb = />/g,
        xb = /"/g,
        yb = /'/g,
        zb = /\x00/g,
        Ab = /[\x00&<>"']/,
        Bb = function (a, b) {
            return -1 != a.indexOf(b)
        },
        Db = function (a, b) {
            var c = 0;
            a = tb(String(a)).split(".");
            b = tb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    k = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == k[0].length) break;
                    c = Cb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Cb(0 == f[2].length, 0 == k[2].length) || Cb(f[2], k[2]);
                    f = f[3];
                    k = k[3]
                } while (0 == c)
            }
            return c
        },
        Cb = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Eb;
    a: {
        var Fb = h.navigator;
        if (Fb) {
            var Gb = Fb.userAgent;
            if (Gb) {
                Eb = Gb;
                break a
            }
        }
        Eb = ""
    }
    var C = function (a) {
        return Bb(Eb, a)
    };
    var Hb = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ib = function (a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Jb = function (a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = b.call(c, a[e], e, a);
            return d
        },
        Kb = function (a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Lb = function (a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Mb = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Nb = function (a, b) {
            var c = Aa(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Ob = function (a, b) {
            return null !== a && b in a
        },
        Pb = function (a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Qb = function (a, b) {
            return null !== a && b in a ? a[b] : void 0
        },
        Rb = function (a, b, c) {
            b in a || (a[b] = c)
        },
        Sb = function (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ub = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Tb.length; f++) c =
                    Tb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Vb = function (a) {
            var b = arguments.length;
            if (1 == b && u(arguments[0])) return Vb.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var Wb = function () {
            return C("Firefox") || C("FxiOS")
        },
        Xb = function () {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        };
    var Yb = function (a, b) {
        a: {
            try {
                var c = a && a.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || h;
                if (d.Element && d.Location) {
                    var e = d;
                    break a
                }
            } catch (k) {}
            e = null
        }
        if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (w(a)) try {
                var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
            } catch (k) {
                f = "<object could not be stringified>"
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Va("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                b, f)
        }
    };
    var Zb = function (a) {
        var b = 1;
        b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    var bc = function (a, b) {
        this.a = a === $b && b || "";
        this.b = ac
    };
    bc.prototype.ta = !0;
    bc.prototype.oa = function () {
        return this.a
    };
    bc.prototype.toString = function () {
        return "Const{" + this.a + "}"
    };
    var cc = function (a) {
            if (a instanceof bc && a.constructor === bc && a.b === ac) return a.a;
            Va("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        ac = {},
        $b = {},
        dc = new bc($b, "");
    var fc = function () {
        this.a = "";
        this.b = ec
    };
    fc.prototype.ta = !0;
    fc.prototype.oa = function () {
        return this.a.toString()
    };
    fc.prototype.toString = function () {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var gc = function (a) {
            if (a instanceof fc && a.constructor === fc && a.b === ec) return a.a;
            Va("expected object of type TrustedResourceUrl, got '" + a + "' of type " + za(a));
            return "type_error:TrustedResourceUrl"
        },
        ec = {},
        hc = function (a) {
            var b = new fc;
            b.a = a;
            return b
        };
    var jc = function () {
        this.a = "";
        this.b = ic
    };
    jc.prototype.ta = !0;
    jc.prototype.oa = function () {
        return this.a.toString()
    };
    jc.prototype.toString = function () {
        return "SafeUrl{" + this.a + "}"
    };
    var kc = function (a) {
            if (a instanceof jc && a.constructor === jc && a.b === ic) return a.a;
            Va("expected object of type SafeUrl, got '" + a + "' of type " + za(a));
            return "type_error:SafeUrl"
        },
        lc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        nc = function (a) {
            if (a instanceof jc) return a;
            a = "object" == typeof a && a.ta ? a.oa() : String(a);
            lc.test(a) || (a = "about:invalid#zClosurez");
            return mc(a)
        },
        ic = {},
        mc = function (a) {
            var b = new jc;
            b.a = a;
            return b
        };
    mc("about:blank");
    var pc = function () {
        this.a = "";
        this.b = oc
    };
    pc.prototype.ta = !0;
    var oc = {};
    pc.prototype.oa = function () {
        return this.a
    };
    pc.prototype.toString = function () {
        return "SafeStyle{" + this.a + "}"
    };
    var qc = function (a) {
            var b = new pc;
            b.a = a;
            return b
        },
        rc = qc(""),
        tc = function (a) {
            if (a instanceof jc) return 'url("' + kc(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof bc ? cc(a) : sc(String(a));
            if (/[{;}]/.test(a)) throw new Ta("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        sc = function (a) {
            var b = a.replace(uc, "$1").replace(uc, "$1").replace(vc, "url");
            if (wc.test(b)) {
                if (xc.test(a)) return Va("String value disallows comments, got: " + a), "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e =
                        a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                if (!b || !c) return Va("String value requires balanced quotes, got: " + a), "zClosurez";
                if (!yc(a)) return Va("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
            } else return Va("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
            return zc(a)
        },
        yc = function (a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" ==
                    e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        wc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        vc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        uc = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        xc = /\/\*/,
        zc = function (a) {
            return a.replace(vc, function (b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function (k, l, n) {
                    f = l;
                    return n
                });
                b = nc(d).oa();
                return c + f + b + f + e
            })
        };
    var Bc = function () {
        this.a = "";
        this.b = Ac
    };
    Bc.prototype.ta = !0;
    var Ac = {},
        Dc = function (a, b) {
            if (Bb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], f = 0; f < c.length; f++) {
                    var k = c[f];
                    if (d[k]) e.push(d[k]);
                    else if (Pb(d, k) && e.pop() != k) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            if (!(b instanceof pc)) {
                c = "";
                for (var l in b) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                    d = b[l];
                    null != d && (d = u(d) ? cb(d, tc).join(" ") : tc(d), c += l + ":" + d + ";")
                }
                b = c ? qc(c) : rc
            }
            b instanceof pc && b.constructor === pc && b.b === oc ? l = b.a : (Va("expected object of type SafeStyle, got '" + b + "' of type " + za(b)), l = "type_error:SafeStyle");
            a = a + "{" + l.replace(/</g, "\\3C ") + "}";
            return Cc(a)
        };
    Bc.prototype.oa = function () {
        return this.a
    };
    Bc.prototype.toString = function () {
        return "SafeStyleSheet{" + this.a + "}"
    };
    var Cc = function (a) {
        var b = new Bc;
        b.a = a;
        return b
    };
    Cc("");
    var Fc = function () {
        this.a = "";
        this.b = Ec
    };
    Fc.prototype.ta = !0;
    Fc.prototype.oa = function () {
        return this.a.toString()
    };
    Fc.prototype.toString = function () {
        return "SafeHtml{" + this.a + "}"
    };
    var Gc = function (a) {
            if (a instanceof Fc && a.constructor === Fc && a.b === Ec) return a.a;
            Va("expected object of type SafeHtml, got '" + a + "' of type " + za(a));
            return "type_error:SafeHtml"
        },
        Ec = {},
        Hc = function (a) {
            var b = new Fc;
            b.a = a;
            return b
        };
    Hc("<!DOCTYPE html>");
    var Ic = Hc("");
    Hc("<br>");
    var Jc = function (a) {
            var b = hc(cc(dc));
            Yb(a, "HTMLIFrameElement");
            a.src = gc(b).toString()
        },
        Kc = function (a, b) {
            Yb(a, "HTMLScriptElement");
            a.src = gc(b);
            if (null === ua) b: {
                b = h.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ta.test(b)) {
                    ua = b;
                    break b
                }
                ua = ""
            }
            b = ua;
            b && a.setAttribute("nonce", b)
        };
    var Lc = function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Mc = function (a) {
            Ab.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ub, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(vb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(wb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(xb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(yb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(zb, "&#0;")));
            return a
        },
        Nc = function (a, b) {
            var c = a;
            0 < a.length && 0 < b && (c = a.substr(0, 0) + a.substr(0 + b, a.length - 0 - b));
            return c
        },
        Oc = function (a) {
            return null ==
                a ? "" : String(a)
        },
        Pc = function (a) {
            return Array.prototype.join.call(arguments, "")
        },
        Qc = function (a) {
            for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
            return b
        },
        Rc = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
                return c.toUpperCase()
            })
        },
        Sc = function (a) {
            var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (c, d, e) {
                return d + e.toUpperCase()
            })
        };
    var Tc = function () {
            return C("iPhone") && !C("iPod") && !C("iPad")
        },
        Uc = function () {
            return Tc() || C("iPad") || C("iPod")
        };
    var Vc = function (a) {
        Vc[" "](a);
        return a
    };
    Vc[" "] = wa;
    var Xc = function (a, b) {
        var c = Wc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Yc = C("Opera"),
        Zc = C("Trident") || C("MSIE"),
        $c = C("Edge"),
        ad = $c || Zc,
        bd = C("Gecko") && !(Bb(Eb.toLowerCase(), "webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        cd = Bb(Eb.toLowerCase(), "webkit") && !C("Edge"),
        dd = function () {
            var a = h.document;
            return a ? a.documentMode : void 0
        },
        ed;
    a: {
        var fd = "",
            gd = function () {
                var a = Eb;
                if (bd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if ($c) return /Edge\/([\d\.]+)/.exec(a);
                if (Zc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (cd) return /WebKit\/(\S+)/.exec(a);
                if (Yc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();gd && (fd = gd ? gd[1] : "");
        if (Zc) {
            var hd = dd();
            if (null != hd && hd > parseFloat(fd)) {
                ed = String(hd);
                break a
            }
        }
        ed = fd
    }
    var id = ed,
        Wc = {},
        jd = function (a) {
            return Xc(a, function () {
                return 0 <= Db(id, a)
            })
        },
        kd;
    var ld = h.document;
    kd = ld && Zc ? dd() || ("CSS1Compat" == ld.compatMode ? parseInt(id, 10) : 5) : void 0;
    var md = !Zc || 9 <= Number(kd);
    var nd = function (a, b) {
        this.width = a;
        this.height = b
    };
    g = nd.prototype;
    g.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    };
    g.aspectRatio = function () {
        return this.width / this.height
    };
    g.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var qd = function (a) {
            return a ? new od(pd(a)) : Sa || (Sa = new od)
        },
        sd = function (a, b) {
            Hb(b, function (c, d) {
                c && "object" == typeof c && c.ta && (c = c.oa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rd.hasOwnProperty(d) ? a.setAttribute(rd[d], c) : rb(d, "aria-") || rb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
            })
        },
        rd = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        td = function () {
            var a = window.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new nd(a.clientWidth, a.clientHeight)
        },
        ud = function (a) {
            return a.parentWindow || a.defaultView
        },
        D = function (a, b, c) {
            return vd(document, arguments)
        },
        vd = function (a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!md && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Mc(d.name), '"');
                if (d.type) {
                    c.push(' type="', Mc(d.type), '"');
                    var e = {};
                    Ub(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c =
                a.createElement(c);
            d && (q(d) ? c.className = d : u(d) ? c.className = d.join(" ") : sd(c, d));
            2 < b.length && wd(a, c, b, 2);
            return c
        },
        wd = function (a, b, c, d) {
            function e(k) {
                k && b.appendChild(q(k) ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !Aa(f) || w(f) && 0 < f.nodeType ? e(f) : B(xd(f) ? kb(f) : f, e)
            }
        },
        yd = function (a, b) {
            A(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        },
        zd = function (a, b) {
            wd(pd(a), a, arguments, 1)
        },
        Ad = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        pd =
        function (a) {
            A(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        xd = function (a) {
            if (a && "number" == typeof a.length) {
                if (w(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (v(a)) return "function" == typeof a.item
            }
            return !1
        },
        Bd = function (a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                A("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        od = function (a) {
            this.a = a || h.document || document
        };
    od.prototype.getElement = function (a) {
        return q(a) ? this.a.getElementById(a) : a
    };
    var Cd = function (a, b) {
        a = a.a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
        return b
    };
    od.prototype.b = function (a, b, c) {
        return vd(this.a, arguments)
    };
    var Dd = function (a, b) {
        return a.a.createElement(String(b))
    };
    od.prototype.f = yd;
    od.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Ed = {
        gf: "dcm",
        Jf: "studio"
    };
    var Fd = Object.freeze || function (a) {
        return a
    };
    var Gd = function (a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    Gd.prototype.a = null;
    var Hd = 0;
    Gd.prototype.reset = function (a, b, c, d, e) {
        "number" == typeof e || Hd++;
        this.f = d || Ja();
        this.h = a;
        this.g = b;
        this.b = c;
        delete this.a
    };
    var Id = function (a) {
            this.j = a;
            this.a = this.h = this.g = this.f = null
        },
        Jd = function (a, b) {
            this.name = a;
            this.value = b
        };
    Jd.prototype.toString = function () {
        return this.name
    };
    var Kd = new Jd("OFF", Infinity),
        Ld = new Jd("SHOUT", 1200),
        Md = new Jd("SEVERE", 1E3),
        Nd = new Jd("WARNING", 900),
        Od = new Jd("INFO", 800),
        Pd = new Jd("CONFIG", 700),
        Qd = new Jd("FINE", 500),
        Rd = new Jd("FINER", 400),
        Sd = new Jd("FINEST", 300),
        Td = new Jd("ALL", 0),
        Ud = [Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td],
        Vd = null;
    Id.prototype.b = function (a) {
        this.g = a
    };
    var Wd = function (a) {
        if (a.g) return a.g;
        if (a.f) return Wd(a.f);
        Va("Root logger has no level set.");
        return null
    };
    g = Id.prototype;
    g.log = function (a, b, c) {
        if (a.value >= Wd(this).value)
            for (v(b) && (b = b()), a = new Gd(a, String(b), this.j), c && (a.a = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.a)
                    for (var f = 0; b = d.a[f]; f++) b(e);
                c = c.f
            }
    };
    g.Ie = function (a, b) {
        this.log(Ld, a, b)
    };
    g.Kc = function (a, b) {
        this.log(Md, a, b)
    };
    g.fb = function (a, b) {
        this.log(Nd, a, b)
    };
    g.B = function (a, b) {
        this.log(Od, a, b)
    };
    g.Zc = function (a, b) {
        this.log(Pd, a, b)
    };
    g.qb = function (a, b) {
        this.log(Qd, a, b)
    };
    g.gd = function (a, b) {
        this.log(Rd, a, b)
    };
    g.hd = function (a, b) {
        this.log(Sd, a, b)
    };
    var Xd = {},
        Yd = null,
        Zd = function () {
            Yd || (Yd = new Id(""), Xd[""] = Yd, Yd.b(Pd))
        },
        $d = function () {
            Zd();
            return Yd
        },
        E = function (a) {
            Zd();
            var b;
            if (!(b = Xd[a])) {
                b = new Id(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = E(a.substr(0, c));
                c.h || (c.h = {});
                c.h[d] = b;
                b.f = c;
                Xd[a] = b
            }
            return b
        };
    var ae = function (a, b) {
            a && a.Kc(b, void 0)
        },
        F = function (a, b, c) {
            a && a.fb(b, c)
        },
        G = function (a, b) {
            a && a.B(b, void 0)
        },
        be = function (a, b) {
            a && a.qb(b, void 0)
        };
    var H = E("studio.sdk");
    r("studio.sdk.logger", H, void 0);
    r("studio.sdk.logger.setLevel", H.b, void 0);
    r("studio.sdk.logger.Level.OFF", Kd, void 0);
    r("studio.sdk.logger.Level.SHOUT", Ld, void 0);
    r("studio.sdk.logger.Level.SEVERE", Md, void 0);
    r("studio.sdk.logger.Level.WARNING", Nd, void 0);
    r("studio.sdk.logger.Level.INFO", Od, void 0);
    r("studio.sdk.logger.Level.CONFIG", Pd, void 0);
    r("studio.sdk.logger.Level.FINE", Qd, void 0);
    r("studio.sdk.logger.Level.FINER", Rd, void 0);
    r("studio.sdk.logger.Level.FINEST", Sd, void 0);
    r("studio.sdk.logger.Level.ALL", Td, void 0);
    r("studio.sdk.logger.shout", H.Ie, void 0);
    r("studio.sdk.logger.severe", H.Kc, void 0);
    r("studio.sdk.logger.warning", H.fb, void 0);
    r("studio.sdk.logger.info", H.B, void 0);
    r("studio.sdk.logger.config", H.Zc, void 0);
    r("studio.sdk.logger.fine", H.qb, void 0);
    r("studio.sdk.logger.finer", H.gd, void 0);
    r("studio.sdk.logger.finest", H.hd, void 0);
    var ce = {
        ENABLER: "enabler",
        DCM_ENABLER: "dcmenabler",
        VIDEO: "video",
        CONFIGURABLE: "configurable",
        CONFIGURABLE_FILLER: "configurablefiller",
        LAYOUTS: "layouts",
        FILLER: "layoutsfiller",
        RAD_VIDEO: "rad_ui_video",
        GDN: "gdn"
    };
    r("studio.module.ModuleId", ce, void 0);
    var ee = function (a) {
            de();
            return hc(a)
        },
        de = wa;
    var fe = function (a, b) {
        this.f = a;
        this.h = b;
        this.b = 0;
        this.a = null
    };
    fe.prototype.get = function () {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.f();
        return a
    };
    var ge = function (a, b) {
        a.h(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };
    var he = function (a) {
            h.setTimeout(function () {
                throw a;
            }, 0)
        },
        ie, je = function () {
            var a = h.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function () {
                var e = document.createElement("IFRAME");
                e.style.display = "none";
                Jc(e);
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(Gc(Ic));
                e.close();
                var k = "callImmediate" + Math.random(),
                    l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = x(function (n) {
                    if (("*" == l || n.origin == l) && n.data == k) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(k, l)
                    }
                }
            });
            if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (m(c.next)) {
                        c = c.next;
                        var e = c.Pb;
                        c.Pb = null;
                        e()
                    }
                };
                return function (e) {
                    d.next = {
                        Pb: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function (e) {
                    var f = document.createElement("SCRIPT");
                    f.onreadystatechange = function () {
                        f.onreadystatechange = null;
                        f.parentNode.removeChild(f);
                        f = null;
                        e();
                        e = null
                    };
                    document.documentElement.appendChild(f)
                } : function (e) {
                    h.setTimeout(e, 0)
                }
        };
    var ke = function () {
            this.b = this.a = null
        },
        me = new fe(function () {
            return new le
        }, function (a) {
            a.reset()
        });
    ke.prototype.add = function (a, b) {
        var c = me.get();
        c.set(a, b);
        this.b ? this.b.next = c : (A(!this.a), this.a = c);
        this.b = c
    };
    var oe = function () {
            var a = ne,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
            return b
        },
        le = function () {
            this.next = this.scope = this.a = null
        };
    le.prototype.set = function (a, b) {
        this.a = a;
        this.scope = b;
        this.next = null
    };
    le.prototype.reset = function () {
        this.next = this.scope = this.a = null
    };
    var se = function (a, b) {
            pe || qe();
            re || (pe(), re = !0);
            ne.add(a, b)
        },
        pe, qe = function () {
            if (h.Promise && h.Promise.resolve) {
                var a = h.Promise.resolve(void 0);
                pe = function () {
                    a.then(te)
                }
            } else pe = function () {
                var b = te;
                !v(h.setImmediate) || h.Window && h.Window.prototype && !C("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (ie || (ie = je()), ie(b)) : h.setImmediate(b)
            }
        },
        re = !1,
        ne = new ke,
        te = function () {
            for (var a; a = oe();) {
                try {
                    a.a.call(a.scope)
                } catch (b) {
                    he(b)
                }
                ge(me, a)
            }
            re = !1
        };
    var ue = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var xe = function (a) {
            this.a = 0;
            this.l = void 0;
            this.h = this.b = this.f = null;
            this.g = this.j = !1;
            if (a != wa) try {
                var b = this;
                a.call(void 0, function (c) {
                    ve(b, 2, c)
                }, function (c) {
                    if (!(c instanceof we)) try {
                        if (c instanceof Error) throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                    ve(b, 3, c)
                })
            } catch (c) {
                ve(this, 3, c)
            }
        },
        ye = function () {
            this.next = this.context = this.f = this.b = this.a = null;
            this.h = !1
        };
    ye.prototype.reset = function () {
        this.context = this.f = this.b = this.a = null;
        this.h = !1
    };
    var ze = new fe(function () {
            return new ye
        }, function (a) {
            a.reset()
        }),
        Ae = function (a, b, c) {
            var d = ze.get();
            d.b = a;
            d.f = b;
            d.context = c;
            return d
        },
        Be = function (a) {
            if (a instanceof xe) return a;
            var b = new xe(wa);
            ve(b, 2, a);
            return b
        },
        Ce = function (a) {
            return new xe(function (b, c) {
                c(a)
            })
        },
        Ee = function (a, b, c) {
            De(a, b, c, null) || se(Ha(b, a))
        },
        Fe = function (a) {
            return new xe(function (b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function (p, t) {
                            d--;
                            e[p] = t;
                            0 == d && b(e)
                        }, k = function (p) {
                            c(p)
                        }, l = 0, n; l < a.length; l++) n = a[l], Ee(n, Ha(f, l), k);
                else b(e)
            })
        };
    xe.prototype.then = function (a, b, c) {
        null != a && Ya(a, "opt_onFulfilled should be a function.");
        null != b && Ya(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Ge(this, v(a) ? a : null, v(b) ? b : null, c)
    };
    xe.prototype.$goog_Thenable = !0;
    var He = function (a, b) {
        return Ge(a, null, b, void 0)
    };
    xe.prototype.cancel = function (a) {
        0 == this.a && se(function () {
            var b = new we(a);
            Ie(this, b)
        }, this)
    };
    var Ie = function (a, b) {
            if (0 == a.a)
                if (a.f) {
                    var c = a.f;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, k = c.b; k && (k.h || (d++, k.a == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
                        e && (0 == c.a && 1 == d ? Ie(c, b) : (f ? (d = f, A(c.b), A(null != d), d.next == c.h && (c.h = d), d.next = d.next.next) : Je(c), Ke(c, e, 3, b)))
                    }
                    a.f = null
                } else ve(a, 3, b)
        },
        Me = function (a, b) {
            a.b || 2 != a.a && 3 != a.a || Le(a);
            A(null != b.b);
            a.h ? a.h.next = b : a.b = b;
            a.h = b
        },
        Ge = function (a, b, c, d) {
            var e = Ae(null, null, null);
            e.a = new xe(function (f, k) {
                e.b = b ? function (l) {
                        try {
                            var n = b.call(d, l);
                            f(n)
                        } catch (p) {
                            k(p)
                        }
                    } :
                    f;
                e.f = c ? function (l) {
                    try {
                        var n = c.call(d, l);
                        !m(n) && l instanceof we ? k(l) : f(n)
                    } catch (p) {
                        k(p)
                    }
                } : k
            });
            e.a.f = a;
            Me(a, e);
            return e.a
        };
    xe.prototype.s = function (a) {
        A(1 == this.a);
        this.a = 0;
        ve(this, 2, a)
    };
    xe.prototype.w = function (a) {
        A(1 == this.a);
        this.a = 0;
        ve(this, 3, a)
    };
    var ve = function (a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, De(c, a.s, a.w, a) || (a.l = c, a.a = b, a.f = null, Le(a), 3 != b || c instanceof we || Ne(a, c)))
        },
        De = function (a, b, c, d) {
            if (a instanceof xe) return null != b && Ya(b, "opt_onFulfilled should be a function."), null != c && Ya(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Me(a, Ae(b || wa, c || null, d)), !0;
            if (ue(a)) return a.then(b, c, d), !0;
            if (w(a)) try {
                var e = a.then;
                if (v(e)) return Oe(a,
                    e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        Oe = function (a, b, c, d, e) {
            var f = !1,
                k = function (n) {
                    f || (f = !0, c.call(e, n))
                },
                l = function (n) {
                    f || (f = !0, d.call(e, n))
                };
            try {
                b.call(a, k, l)
            } catch (n) {
                l(n)
            }
        },
        Le = function (a) {
            a.j || (a.j = !0, se(a.D, a))
        },
        Je = function (a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.h = null);
            null != b && A(null != b.b);
            return b
        };
    xe.prototype.D = function () {
        for (var a; a = Je(this);) Ke(this, a, this.a, this.l);
        this.j = !1
    };
    var Ke = function (a, b, c, d) {
            if (3 == c && b.f && !b.h)
                for (; a && a.g; a = a.f) a.g = !1;
            if (b.a) b.a.f = null, Pe(b, c, d);
            else try {
                b.h ? b.b.call(b.context) : Pe(b, c, d)
            } catch (e) {
                Qe.call(null, e)
            }
            ge(ze, b)
        },
        Pe = function (a, b, c) {
            2 == b ? a.b.call(a.context, c) : a.f && a.f.call(a.context, c)
        },
        Ne = function (a, b) {
            a.g = !0;
            se(function () {
                a.g && Qe.call(null, b)
            })
        },
        Qe = he,
        we = function (a) {
            Ra.call(this, a)
        };
    y(we, Ra);
    we.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var I = function (a, b) {
        this.l = [];
        this.G = a;
        this.C = b || null;
        this.h = this.a = !1;
        this.f = void 0;
        this.w = this.W = this.s = !1;
        this.D = 0;
        this.b = null;
        this.g = 0
    };
    I.prototype.cancel = function (a) {
        if (this.a) this.f instanceof I && this.f.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.g--, 0 >= b.g && b.cancel())
            }
            this.G ? this.G.call(this.C, this) : this.w = !0;
            this.a || this.j(new Re(this))
        }
    };
    I.prototype.A = function (a, b) {
        this.s = !1;
        Se(this, a, b)
    };
    var Se = function (a, b, c) {
            a.a = !0;
            a.f = c;
            a.h = !b;
            Te(a)
        },
        Ve = function (a) {
            if (a.a) {
                if (!a.w) throw new Ue(a);
                a.w = !1
            }
        };
    I.prototype.P = function (a) {
        Ve(this);
        We(a);
        Se(this, !0, a)
    };
    I.prototype.j = function (a) {
        Ve(this);
        We(a);
        Se(this, !1, a)
    };
    var We = function (a) {
            A(!(a instanceof I), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        Ye = function (a, b, c) {
            Xe(a, b, null, c)
        },
        Xe = function (a, b, c, d) {
            A(!a.W, "Blocking Deferreds can not be re-used");
            a.l.push([b, c, d]);
            a.a && Te(a)
        };
    I.prototype.then = function (a, b, c) {
        var d, e, f = new xe(function (k, l) {
            d = k;
            e = l
        });
        Xe(this, d, function (k) {
            k instanceof Re ? f.cancel() : e(k)
        });
        return f.then(a, b, c)
    };
    I.prototype.$goog_Thenable = !0;
    var Ze = function (a, b) {
        b instanceof I ? Ye(a, x(b.H, b)) : Ye(a, function () {
            return b
        })
    };
    I.prototype.H = function (a) {
        var b = new I;
        Xe(this, b.P, b.j, b);
        a && (b.b = this, this.g++);
        return b
    };
    var $e = function (a) {
            return db(a.l, function (b) {
                return v(b[1])
            })
        },
        Te = function (a) {
            if (a.D && a.a && $e(a)) {
                var b = a.D,
                    c = af[b];
                c && (h.clearTimeout(c.a), delete af[b]);
                a.D = 0
            }
            a.b && (a.b.g--, delete a.b);
            b = a.f;
            for (var d = c = !1; a.l.length && !a.s;) {
                var e = a.l.shift(),
                    f = e[0],
                    k = e[1];
                e = e[2];
                if (f = a.h ? k : f) try {
                    var l = f.call(e || a.C, b);
                    m(l) && (a.h = a.h && (l == b || l instanceof Error), a.f = b = l);
                    if (ue(b) || "function" === typeof h.Promise && b instanceof h.Promise) d = !0, a.s = !0
                } catch (n) {
                    b = n, a.h = !0, $e(a) || (c = !0)
                }
            }
            a.f = b;
            d && (l = x(a.A, a, !0), d = x(a.A, a,
                !1), b instanceof I ? (Xe(b, l, d), b.W = !0) : b.then(l, d));
            c && (b = new bf(b), af[b.a] = b, a.D = b.a)
        },
        Ue = function () {
            Ra.call(this)
        };
    y(Ue, Ra);
    Ue.prototype.message = "Deferred has already fired";
    Ue.prototype.name = "AlreadyCalledError";
    var Re = function () {
        Ra.call(this)
    };
    y(Re, Ra);
    Re.prototype.message = "Deferred was canceled";
    Re.prototype.name = "CanceledError";
    var bf = function (a) {
        this.a = h.setTimeout(x(this.f, this), 0);
        this.b = a
    };
    bf.prototype.f = function () {
        A(af[this.a], "Cannot throw an error that is not scheduled.");
        delete af[this.a];
        throw this.b;
    };
    var af = {};
    var gf = function (a) {
            var b = {},
                c = b.document || document,
                d = gc(a).toString(),
                e = document.createElement("SCRIPT"),
                f = {
                    Gc: e,
                    Pc: void 0
                },
                k = new I(cf, f),
                l = null,
                n = null != b.timeout ? b.timeout : 5E3;
            0 < n && (l = window.setTimeout(function () {
                df(e, !0);
                k.j(new ef(1, "Timeout reached for loading script " + d))
            }, n), f.Pc = l);
            e.onload = e.onreadystatechange = function () {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (df(e, b.Nf || !1, l), k.P(null))
            };
            e.onerror = function () {
                df(e, !0, l);
                k.j(new ef(0, "Error while loading script " + d))
            };
            f = b.attributes || {};
            Ub(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            sd(e, f);
            Kc(e, a);
            ff(c).appendChild(e);
            return k
        },
        ff = function (a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        cf = function () {
            if (this && this.Gc) {
                var a = this.Gc;
                a && "SCRIPT" == a.tagName && df(a, !0, this.Pc)
            }
        },
        df = function (a, b, c) {
            null != c && h.clearTimeout(c);
            a.onload = wa;
            a.onerror = wa;
            a.onreadystatechange = wa;
            b && window.setTimeout(function () {
                Ad(a)
            }, 0)
        },
        ef = function (a, b) {
            var c = "Jsloader error (code #" + a +
                ")";
            b && (c += ": " + b);
            Ra.call(this, c);
            this.code = a
        };
    y(ef, Ra);
    var K = function (a, b) {
        this.b = {};
        this.a = [];
        this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof K)
                for (c = a.R(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    g = K.prototype;
    g.Y = function () {
        return this.f
    };
    g.O = function () {
        hf(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    g.R = function () {
        hf(this);
        return this.a.concat()
    };
    g.T = function (a) {
        return jf(this.b, a)
    };
    g.Ha = function (a) {
        for (var b = 0; b < this.a.length; b++) {
            var c = this.a[b];
            if (jf(this.b, c) && this.b[c] == a) return !0
        }
        return !1
    };
    var kf = function (a) {
            a.b = {};
            a.a.length = 0;
            a.f = 0
        },
        lf = function (a, b) {
            jf(a.b, b) && (delete a.b[b], a.f--, a.a.length > 2 * a.f && hf(a))
        },
        hf = function (a) {
            if (a.f != a.a.length) {
                for (var b = 0, c = 0; b < a.a.length;) {
                    var d = a.a[b];
                    jf(a.b, d) && (a.a[c++] = d);
                    b++
                }
                a.a.length = c
            }
            if (a.f != a.a.length) {
                var e = {};
                for (c = b = 0; b < a.a.length;) d = a.a[b], jf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
                a.a.length = c
            }
        };
    K.prototype.get = function (a, b) {
        return jf(this.b, a) ? this.b[a] : b
    };
    K.prototype.set = function (a, b) {
        jf(this.b, a) || (this.f++, this.a.push(a));
        this.b[a] = b
    };
    K.prototype.forEach = function (a, b) {
        for (var c = this.R(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var jf = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var L = function () {
        this.D = this.D;
        this.W = this.W
    };
    L.prototype.D = !1;
    L.prototype.dispose = function () {
        this.D || (this.D = !0, this.v())
    };
    var nf = function (a, b) {
        b = Ha(mf, b);
        a.D ? m(void 0) ? b.call(void 0) : b() : (a.W || (a.W = []), a.W.push(m(void 0) ? x(b, void 0) : b))
    };
    L.prototype.v = function () {
        if (this.W)
            for (; this.W.length;) this.W.shift()()
    };
    var mf = function (a) {
            a && "function" == typeof a.dispose && a.dispose()
        },
        of = function (a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                Aa(d) ? of .apply(null, d) : mf(d)
            }
        };
    var pf = function (a, b) {
        this.type = a;
        this.a = this.target = b;
        this.b = !1;
        this.Fc = !0
    };
    pf.prototype.stopPropagation = function () {
        this.b = !0
    };
    pf.prototype.f = function () {
        this.Fc = !1
    };
    var qf = function (a) {
        a.f()
    };
    var rf = !Zc || 9 <= Number(kd),
        sf = Zc && !jd("9"),
        tf = function () {
            if (!h.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0
                    }
                });
            try {
                h.addEventListener("test", wa, b), h.removeEventListener("test", wa, b)
            } catch (c) {}
            return a
        }();
    var vf = function (a, b) {
        pf.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.ea = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if (b = a.relatedTarget) {
                if (bd) {
                    a: {
                        try {
                            Vc(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e ||
                    (b = null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = q(a.pointerType) ? a.pointerType : uf[a.pointerType] || "";
            this.ea = a;
            a.defaultPrevented && this.f()
        }
    };
    y(vf, pf);
    var uf = Fd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    vf.prototype.stopPropagation = function () {
        vf.o.stopPropagation.call(this);
        this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
    };
    vf.prototype.f = function () {
        vf.o.f.call(this);
        var a = this.ea;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, sf) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    vf.prototype.md = function () {
        return this.ea
    };
    var wf = "closure_listenable_" + (1E6 * Math.random() | 0),
        xf = function (a) {
            return !(!a || !a[wf])
        },
        yf = 0;
    var zf = function (a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ea = e;
            this.key = ++yf;
            this.Fa = this.Ta = !1
        },
        Af = function (a) {
            a.Fa = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.Ea = null
        };
    var Bf = function (a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    Bf.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var k = Cf(a, b, d, e); - 1 < k ? (b = a[k], c || (b.Ta = !1)) : (b = new zf(b, this.src, f, !!d, e), b.Ta = c, a.push(b));
        return b
    };
    var Df = function (a, b) {
            var c = b.type;
            if (!(c in a.a)) return !1;
            var d = ib(a.a[c], b);
            d && (Af(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
            return d
        },
        Ef = function (a, b) {
            b = b && b.toString();
            var c = 0,
                d;
            for (d in a.a)
                if (!b || d == b) {
                    for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Af(e[f]);
                    delete a.a[d];
                    a.b--
                }
        },
        Ff = function (a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = Cf(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Gf = function (a, b) {
            var c = m(b),
                d = c ? b.toString() : "",
                e = m(void 0);
            return Kb(a.a, function (f) {
                for (var k = 0; k < f.length; ++k)
                    if (!(c && f[k].type !=
                            d || e && void 0 != f[k].capture)) return !0;
                return !1
            })
        },
        Cf = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.Fa && f.listener == b && f.capture == !!c && f.Ea == d) return e
            }
            return -1
        };
    var Hf = "closure_lm_" + (1E6 * Math.random() | 0),
        If = {},
        Jf = 0,
        Lf = function (a, b, c, d, e) {
            if (d && d.once) return Kf(a, b, c, d, e);
            if (u(b)) {
                for (var f = 0; f < b.length; f++) Lf(a, b[f], c, d, e);
                return null
            }
            c = Mf(c);
            return xf(a) ? a.Ca(b, c, w(d) ? !!d.capture : !!d, e) : Nf(a, b, c, !1, d, e)
        },
        Nf = function (a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var k = w(e) ? !!e.capture : !!e,
                l = Of(a);
            l || (a[Hf] = l = new Bf(a));
            c = l.add(b, c, d, k, f);
            if (c.a) return c;
            d = Pf();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) tf || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Qf(b.toString()), d);
            else if (a.addListener && a.removeListener) A("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Jf++;
            return c
        },
        Pf = function () {
            var a = Rf,
                b = rf ? function (c) {
                    return a.call(b.src, b.listener, c)
                } : function (c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Kf = function (a, b, c, d, e) {
            if (u(b)) {
                for (var f = 0; f < b.length; f++) Kf(a, b[f], c, d, e);
                return null
            }
            c = Mf(c);
            return xf(a) ?
                a.h.add(String(b), c, !0, w(d) ? !!d.capture : !!d, e) : Nf(a, b, c, !0, d, e)
        },
        Sf = function (a, b, c, d, e) {
            if (u(b))
                for (var f = 0; f < b.length; f++) Sf(a, b[f], c, d, e);
            else d = w(d) ? !!d.capture : !!d, c = Mf(c), xf(a) ? a.Ka(b, c, d, e) : a && (a = Of(a)) && (b = Ff(a, b, c, d, e)) && Tf(b)
        },
        Tf = function (a) {
            if (sa(a) || !a || a.Fa) return !1;
            var b = a.src;
            if (xf(b)) return Df(b.h, a);
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Qf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            Jf--;
            (c = Of(b)) ? (Df(c,
                a), 0 == c.b && (c.src = null, b[Hf] = null)) : Af(a);
            return !0
        },
        Uf = function (a, b, c, d, e) {
            c = Mf(c);
            d = !!d;
            return xf(a) ? Ff(a.h, String(b), c, d, e) : a ? (a = Of(a)) ? Ff(a, b, c, d, e) : null : null
        },
        Vf = function (a, b) {
            if (xf(a)) return Gf(a.h, m(b) ? String(b) : void 0);
            a = Of(a);
            return !!a && Gf(a, b)
        },
        Qf = function (a) {
            return a in If ? If[a] : If[a] = "on" + a
        },
        Xf = function (a, b, c, d) {
            var e = !0;
            if (a = Of(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.Fa && (f = Wf(f, d), e = e && !1 !== f)
                    }
            return e
        },
        Wf = function (a, b) {
            var c = a.listener,
                d = a.Ea || a.src;
            a.Ta && Tf(a);
            return c.call(d, b)
        },
        Rf = function (a, b) {
            if (a.Fa) return !0;
            if (!rf) {
                var c = b || va("window.event");
                b = new vf(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (k) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; !b.b && 0 <= e; e--) {
                        b.a = c[e];
                        var f = Xf(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; !b.b && e < c.length; e++) b.a = c[e],
                    f = Xf(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return Wf(a,
                new vf(b, this))
        },
        Of = function (a) {
            a = a[Hf];
            return a instanceof Bf ? a : null
        },
        Yf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Mf = function (a) {
            A(a, "Listener can not be null.");
            if (v(a)) return a;
            A(a.handleEvent, "An object listener must have handleEvent method.");
            a[Yf] || (a[Yf] = function (b) {
                return a.handleEvent(b)
            });
            return a[Yf]
        };
    var M = function () {
        L.call(this);
        this.h = new Bf(this);
        this.be = this;
        this.Qa = null
    };
    y(M, L);
    M.prototype[wf] = !0;
    g = M.prototype;
    g.zb = function (a) {
        this.Qa = a
    };
    g.addEventListener = function (a, b, c, d) {
        Lf(this, a, b, c, d)
    };
    g.removeEventListener = function (a, b, c, d) {
        Sf(this, a, b, c, d)
    };
    g.dispatchEvent = function (a) {
        Zf(this);
        var b = this.Qa;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Qa) c.push(b), A(1E3 > ++d, "infinite loop")
        }
        b = this.be;
        d = a.type || a;
        if (q(a)) a = new pf(a, b);
        else if (a instanceof pf) a.target = a.target || b;
        else {
            var e = a;
            a = new pf(d, b);
            Ub(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.b && 0 <= f; f--) {
                var k = a.a = c[f];
                e = $f(k, d, !0, a) && e
            }
        a.b || (k = a.a = b, e = $f(k, d, !0, a) && e, a.b || (e = $f(k, d, !1, a) && e));
        if (c)
            for (f = 0; !a.b && f < c.length; f++) k = a.a = c[f], e = $f(k, d, !1, a) && e;
        return e
    };
    g.v = function () {
        M.o.v.call(this);
        this.h && Ef(this.h, void 0);
        this.Qa = null
    };
    g.Ca = function (a, b, c, d) {
        Zf(this);
        return this.h.add(String(a), b, !1, c, d)
    };
    g.Ka = function (a, b, c, d) {
        var e = this.h;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = Cf(f, b, c, d); - 1 < b ? (Af(f[b]), hb(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var $f = function (a, b, c, d) {
            b = a.h.a[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var k = b[f];
                if (k && !k.Fa && k.capture == c) {
                    var l = k.listener,
                        n = k.Ea || k.src;
                    k.Ta && Df(a.h, k);
                    e = !1 !== l.call(n, d) && e
                }
            }
            return e && 0 != d.Fc
        },
        Zf = function (a) {
            A(a.h, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
    var ag = function (a, b) {
        M.call(this);
        this.b = a || 1;
        this.a = b || h;
        this.f = x(this.Qe, this);
        this.g = Ja()
    };
    y(ag, M);
    g = ag.prototype;
    g.Aa = !1;
    g.fa = null;
    g.setInterval = function (a) {
        this.b = a;
        this.fa && this.Aa ? (this.stop(), this.start()) : this.fa && this.stop()
    };
    g.Qe = function () {
        if (this.Aa) {
            var a = Ja() - this.g;
            0 < a && a < .8 * this.b ? this.fa = this.a.setTimeout(this.f, this.b - a) : (this.fa && (this.a.clearTimeout(this.fa), this.fa = null), this.dispatchEvent("tick"), this.Aa && (this.stop(), this.start()))
        }
    };
    g.start = function () {
        this.Aa = !0;
        this.fa || (this.fa = this.a.setTimeout(this.f, this.b), this.g = Ja())
    };
    g.stop = function () {
        this.Aa = !1;
        this.fa && (this.a.clearTimeout(this.fa), this.fa = null)
    };
    g.v = function () {
        ag.o.v.call(this);
        this.stop();
        delete this.a
    };
    var bg = function (a, b, c) {
        if (v(a)) c && (a = x(a, c));
        else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
    };
    var cg = {},
        dg = {},
        eg = new Qa(.001, "");
    eg.a = "load";
    var fg = new Qa(.1, "");
    fg.a = "fail";
    var gg = new K;
    gg.set("enabler", "enabler");
    gg.set("dcmenabler", "dcm");
    gg.set("video", "vid");
    gg.set("configurable", "cfg");
    gg.set("configurablefiller", "cfg_fill");
    gg.set("layouts", "lay");
    gg.set("layoutsfiller", "lay_fill");
    gg.set("gdn", "gdn");
    gg.set("rad_ui_video", "rad");
    var hg = function () {
            for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.src || c.getAttribute("src"))
                    if (c = c.src || c.getAttribute("src"), /Enabler/.test(c)) return c.substring(0, c.lastIndexOf("/") + 1)
            }
            return ""
        },
        ig = function (a) {
            a = cg[a];
            return m(a) && 1 <= a
        },
        jg = function (a) {
            return [hg(), "dev_studio_01_236_", [a, "module"].join(""), ".js"].join("")
        };
    r("goog.exportSymbol", function (a, b, c) {
        r(a, b, c)
    }, this);
    var kg = function (a) {
            a += "goog.exportSymbol('studioLoader.context.evalInContext', " + kg.toString() + ");";
            eval(a)
        },
        lg = function (a, b) {
            b = gg.get(b) || "unknown";
            a.f = b;
            a = a.b();
            !sb(a) && z(1) && (document.createElement("IMG").src = a)
        },
        mg = function (a, b) {
            cg[a] = 2;
            lg(eg, a);
            b = sa(b) ? b : 2;
            for (var c = jg(a), d = gf(ee(c)), e = 0; e < b; ++e) d = d.then(void 0, function () {
                return gf(ee(c))
            });
            return d.then(function () {
                cg[a] = 3
            }, function () {
                lg(fg, a);
                return Ce()
            })
        },
        ng = function (a) {
            if (ig(a)) return dg[a];
            cg[a] = 1;
            for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a,
                    "module"
                ].join("")] : [], d = c.length - 1; 0 <= d; d--) {
                var e = c[d].replace(/module$/, "");
                if (e == a) break;
                ig(e) ? b.push(dg[e]) : b.push(ng(e))
            }
            b = Fe(b).then(Ha(mg, a, 2));
            return dg[a] = b
        },
        og = function (a, b) {
            a = ng(a);
            v(b) && (a = a.then(b));
            He(a, wa)
        };
    r("studioLoader.context.evalInContext", kg, void 0);
    var pg = Wb(),
        qg = Tc() || C("iPod"),
        rg = C("iPad"),
        sg = C("Android") && !(Xb() || Wb() || C("Opera") || C("Silk")),
        tg = Xb(),
        ug = C("Safari") && !(Xb() || C("Coast") || C("Opera") || C("Edge") || Wb() || C("Silk") || C("Android")) && !Uc();
    var vg = function () {},
        wg = "function" == typeof Uint8Array,
        xg = function (a, b) {
            a.b = null;
            b || (b = []);
            a.l = void 0;
            a.h = -1;
            a.a = b;
            a: {
                if (b = a.a.length) {
                    --b;
                    var c = a.a[b];
                    if (!(null === c || "object" != typeof c || u(c) || wg && c instanceof Uint8Array)) {
                        a.g = b - a.h;
                        a.f = c;
                        break a
                    }
                }
                a.g = Number.MAX_VALUE
            }
            a.j = {}
        },
        yg = Object.freeze ? Object.freeze([]) : [],
        zg = function (a, b) {
            if (b < a.g) {
                b += a.h;
                var c = a.a[b];
                return c === yg ? a.a[b] = [] : c
            }
            if (a.f) return c = a.f[b], c === yg ? a.f[b] = [] : c
        },
        Ag = function (a, b) {
            a.b || (a.b = {});
            if (!a.b[1]) {
                var c = zg(a, 1);
                c && (a.b[1] = new b(c))
            }
            return a.b[1]
        },
        Cg = function (a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (u(c))
                        for (var d = 0; d < c.length; d++) c[d] && Bg(c[d]);
                    else c && Bg(c)
                }
        },
        Bg = function (a) {
            Cg(a);
            return a.a
        };
    vg.prototype.toString = function () {
        Cg(this);
        return this.a.toString()
    };
    var Dg = function (a) {
        xg(this, a)
    };
    y(Dg, vg);
    var Eg = function (a) {
        xg(this, a)
    };
    y(Eg, vg);
    var Fg = function (a) {
            if (a.O && "function" == typeof a.O) return a.O();
            if (q(a)) return a.split("");
            if (Aa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Mb(a)
        },
        Gg = function (a, b) {
            return a.contains && "function" == typeof a.contains ? a.contains(b) : a.Ha && "function" == typeof a.Ha ? a.Ha(b) : Aa(a) || q(a) ? 0 <= $a(a, b) : Pb(a, b)
        };
    var Hg = function () {
            this.a = new K
        },
        Ig = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + Ea(a) : b.substr(0, 1) + a
        };
    Hg.prototype.Y = function () {
        return this.a.Y()
    };
    Hg.prototype.add = function (a) {
        this.a.set(Ig(a), a)
    };
    var Kg = function (a) {
        var b = Jg;
        a = Fg(a);
        for (var c = a.length, d = 0; d < c; d++) b.add(a[d])
    };
    Hg.prototype.contains = function (a) {
        return this.a.T(Ig(a))
    };
    Hg.prototype.O = function () {
        return this.a.O()
    };
    r("studio.common.Feature.Type", {
        Df: 1,
        SDK_EVENT_FORWARDER: 2,
        RL_EVENT_FORWARDER: 3
    }, void 0);
    var Jg = new Hg;
    r("studio.common.Feature.hasFeature", function (a) {
        return Jg.contains(a)
    }, void 0);
    r("studio.common.Feature.hasFeatures", function (a) {
        var b = Jg;
        a: {
            var c = b.contains;
            if ("function" == typeof a.every) a = a.every(c, b);
            else if (Aa(a) || q(a)) a = eb(a, c, b);
            else {
                if (a.R && "function" == typeof a.R) var d = a.R();
                else if (a.O && "function" == typeof a.O) d = void 0;
                else if (Aa(a) || q(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = Fg(a);
                f = e.length;
                for (var k = 0; k < f; k++)
                    if (!c.call(b, e[k], d && d[k], a)) {
                        a = !1;
                        break a
                    } a = !0
            }
        }
        return a
    }, void 0);
    var Lg = function (a, b) {
        this.b = a;
        this.a = null != b ? b : 0
    };
    r("studio.common.Orientation", Lg, void 0);
    var Mg = function () {
            var a = window;
            return a.innerWidth > a.innerHeight ? "landscape" : "portrait"
        },
        Ng = function () {
            return "onorientationchange" in window
        };
    Lg.Mode = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
    };
    Lg.prototype.vd = function () {
        return this.b
    };
    Lg.prototype.getMode = Lg.prototype.vd;
    Lg.prototype.ud = function () {
        return this.a
    };
    Lg.prototype.getDegrees = Lg.prototype.ud;
    Lg.prototype.toString = function () {
        return this.b
    };
    var Og = function (a, b, c, d, e, f, k) {
            var l = "";
            a && (l += a + ":");
            c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
            e && (l += e);
            f && (l += "?" + f);
            k && (l += "#" + k);
            return l
        },
        Pg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Qg = function (a) {
            var b = a.indexOf("#");
            return 0 > b ? null : a.substr(b + 1)
        },
        Rg = function (a) {
            a = a.match(Pg);
            return Og(a[1], a[2], a[3], a[4])
        },
        Sg = function (a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <=
                        d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Lc(e) : "")
                }
            }
        },
        Tg = function (a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        Ug = function (a, b, c) {
            Xa(a);
            if (u(b)) {
                Za(b);
                for (var d = 0; d < b.length; d++) Ug(a, String(b[d]), c)
            } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Vg = /#|$/,
        Wg = function (a,
            b) {
            var c = a.search(Vg);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Lc(a.substr(d, e - d))
        };
    var Xg = function (a, b) {
            return b ? a.replace("[rm_exit_id]", b) : a
        },
        Yg = function (a) {
            sb(Oc(a)) || "market" != (a.match(Pg)[1] || null) || (a = a.match(Pg), a = "https://play.google.com/store/apps/details" + Og(null, null, null, null, a[5], a[6], a[7]));
            return a
        };
    var Zg = {
        CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
        CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
        CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
        CREATIVE_REPORTER: "creativeReporter",
        CREATIVE_INNOVATION: "gcreativeinnovation",
        GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
    };
    r("studio.common.WhitelistedExternalObject", Zg, void 0);
    var $g = {
            hf: "devicemotion",
            jf: "deviceorientation",
            zf: "hostpageScroll",
            nf: "enterViewport",
            pf: "exitViewport",
            bf: "adLocation"
        },
        ah = {},
        bh;
    for (bh in $g) ah[$g[bh]] = !0;
    var N = function (a) {
        pf.call(this, a)
    };
    y(N, pf);
    r("studio.events.StudioEvent", N, void 0);
    N.INIT = "init";
    N.VISIBLE = "visible";
    N.HIDDEN = "hidden";
    N.VISIBILITY_CHANGE = "visibilityChange";
    N.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
    N.EXIT = "exit";
    N.INTERACTION = "interaction";
    N.PAGE_LOADED = "pageLoaded";
    N.ORIENTATION = "orientation";
    N.ABOUT_TO_EXPAND = "aboutToExpand";
    N.EXPAND_START = "expandStart";
    N.EXPAND_FAILED = "expandFailed";
    N.EXPAND_FINISH = "expandFinish";
    N.COLLAPSE_START = "collapseStart";
    N.COLLAPSE_FINISH = "collapseFinish";
    N.COLLAPSE = "collapse";
    N.FULLSCREEN_SUPPORT = "fullscreenSupport";
    N.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
    N.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
    N.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
    N.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
    N.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
    N.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
    N.HOSTPAGE_SCROLL = "hostpageScroll";
    N.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
    N.SCROLL_INTERACTION = "scrollInteraction";
    N.ENTER_VIEWPORT = "enterViewport";
    N.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
    N.EXIT_VIEWPORT = "exitViewport";
    N.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
    N.VIDEO_START = "videoStart";
    N.prototype.ba = function (a, b) {
        this[a] = b;
        return this
    };
    N.prototype.addProperty = N.prototype.ba;
    var ch = {},
        dh = (ch.optHostpageScroll = "hostpageScroll", ch.optEnterViewport = "enterViewport", ch.optExitViewport = "exitViewport", ch);
    var eh = function (a) {
        this.a = a
    };
    r("studio.common.mde.Direction", eh, void 0);
    eh.Corner = {
        Kf: 0,
        Lf: 1,
        cf: 2,
        df: 3
    };
    eh.prototype.toString = function () {
        return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
    };
    var fh = {
            TL: new eh(0),
            TR: new eh(1),
            BL: new eh(2),
            BR: new eh(3)
        },
        gh = Mb(fh);
    var hh = {
            If: "startExpandInternal",
            Hf: "startCollapseInternal",
            rf: "finishCollapseInternal",
            af: "aboutToExpandInternal",
            Ef: "setAdVisibleInternal",
            Ff: "setAdParameters",
            kf: "dispatchEvent",
            Gf: "setParameter",
            yf: "getParameter",
            xf: "fullscreenSupportInternal",
            uf: "fullscreenDimensionsInternal",
            wf: "fullscreenExpandStartInternal",
            vf: "fullscreenExpandFinishInternal",
            tf: "fullscreenCollapseStartInternal",
            sf: "fullscreenCollapseFinishInternal",
            Af: "invokeOnAllVideos",
            Bf: "livePreviewChannel",
            lf: "dispatchPageLoaded"
        },
        ih = {},
        jh;
    for (jh in hh) ih[hh[jh]] = !0;
    var kh = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/],
        lh = function () {
            var a = location.hostname;
            return z(2) && !z(16) ? !1 : db(kh, function (b) {
                return b.test(a)
            })
        };
    var mh = function (a) {
        L.call(this);
        this.b = a;
        this.a = {};
        this.b.Bc(x(this.h, this))
    };
    y(mh, L);
    mh.prototype.f = E("goog.messaging.MultiChannel");
    var oh = function (a, b) {
        if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
        if (b in a.a) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
        var c = new nh(a, b);
        return a.a[b] = c
    };
    mh.prototype.h = function (a, b) {
        var c = a.match(/^([^:]*):(.*)/);
        if (c) {
            var d = c[1];
            a = c[2];
            d in this.a ? (c = this.a[d]) ? c.f ? c.f(a, b) : F(this.f, 'Service "' + a + '" is not registered on virtual channel "' + d + '"') : F(this.f, 'Virtual channel "' + d + ' has been disposed, but a message was received for it: "' + a + '"') : F(this.f, 'Virtual channel "' + d + ' does not exist, but a message was received for it: "' + a + '"')
        } else F(this.f, 'Invalid service name "' + a + '": no virtual channel specified')
    };
    mh.prototype.v = function () {
        Hb(this.a, function (a) {
            mf(a)
        });
        mf(this.b);
        delete this.a;
        delete this.b
    };
    var nh = function (a, b) {
        L.call(this);
        this.b = a;
        this.a = b
    };
    y(nh, L);
    g = nh.prototype;
    g.Ed = E("goog.messaging.MultiChannel.VirtualChannel");
    g.connect = function (a) {
        a && a()
    };
    g.pa = function () {
        return !0
    };
    g.La = function (a, b, c) {
        this.b.b.La(this.a + ":" + a, x(this.Vb, this, b), c)
    };
    g.Bc = function (a) {
        this.f = x(this.Vb, this, a)
    };
    g.Ya = function (a, b) {
        if (this.D) throw Error("#send called for disposed VirtualChannel.");
        this.b.b.Ya(this.a + ":" + a, b)
    };
    g.Vb = function (a, b) {
        this.D ? F(this.Ed, 'Virtual channel "' + this.a + '" received  a message after being disposed.') : a.apply({}, Array.prototype.slice.call(arguments, 1))
    };
    g.v = function () {
        this.b = this.b.a[this.a] = null
    };
    var ph = function (a) {
        L.call(this);
        this.b = new mh(a);
        this.g = {};
        this.f = oh(this.b, "private");
        this.h = oh(this.b, "public");
        this.f.La("mics", x(this.A, this), !0)
    };
    y(ph, L);
    ph.prototype.H = 0;
    ph.prototype.C = E("goog.messaging.RespondingChannel");
    ph.prototype.v = function () {
        mf(this.b);
        delete this.b;
        delete this.h;
        delete this.f
    };
    var qh = function (a, b, c, d) {
        var e = a.H++;
        a.g[e] = d;
        d = {};
        d.signature = e;
        d.data = c;
        a.h.Ya(b, d)
    };
    ph.prototype.A = function (a) {
        var b = a.signature;
        a = a.data;
        b in this.g ? ((0, this.g[b])(a), delete this.g[b]) : F(this.C, "Received signature is invalid")
    };
    ph.prototype.s = function (a, b) {
        a = a(b.data);
        var c = b.signature;
        Be(a).then(x(function (d) {
            var e = {};
            e.data = d;
            e.signature = c;
            this.f && this.f.Ya("mics", e)
        }, this))
    };
    var rh = function (a, b, c) {
        L.call(this);
        this.a = a;
        this.h = b || 0;
        this.b = c;
        this.f = x(this.ed, this)
    };
    y(rh, L);
    g = rh.prototype;
    g.Ba = 0;
    g.v = function () {
        rh.o.v.call(this);
        this.stop();
        delete this.a;
        delete this.b
    };
    g.start = function (a) {
        this.stop();
        this.Ba = bg(this.f, m(a) ? a : this.h)
    };
    g.stop = function () {
        0 != this.Ba && h.clearTimeout(this.Ba);
        this.Ba = 0
    };
    g.ed = function () {
        this.Ba = 0;
        this.a && this.a.call(this.b)
    };
    var O = function (a) {
        L.call(this);
        this.l = a;
        this.f = {}
    };
    y(O, L);
    var sh = [],
        P = function (a, b, c, d, e, f) {
            u(c) || (c && (sh[0] = c.toString()), c = sh);
            for (var k = 0; k < c.length; k++) {
                var l = Lf(b, c[k], d || a.handleEvent, e || !1, f || a.l || a);
                if (!l) break;
                a.f[l.key] = l
            }
        },
        th = function (a, b, c, d, e, f) {
            if (u(c))
                for (var k = 0; k < c.length; k++) th(a, b, c[k], d, e, f);
            else(b = Kf(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.f[b.key] = b)
        },
        uh = function (a, b, c, d, e, f) {
            if (u(c))
                for (var k = 0; k < c.length; k++) uh(a, b, c[k], d, e, f);
            else if (b = Uf(b, c, d || a.handleEvent, w(e) ? !!e.capture : !!e, f || a.l || a)) Tf(b), delete a.f[b.key]
        },
        vh = function (a) {
            Hb(a.f,
                function (b, c) {
                    this.f.hasOwnProperty(c) && Tf(b)
                }, a);
            a.f = {}
        };
    O.prototype.v = function () {
        O.o.v.call(this);
        vh(this)
    };
    O.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var yh = function (a) {
            var b = [];
            wh(new xh, a, b);
            return b.join("")
        },
        xh = function () {},
        wh = function (a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (u(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), wh(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), zh(d, c), c.push(":"), wh(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        zh(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Ah = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Bh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        zh = function (a, b) {
            b.push('"', a.replace(Bh, function (c) {
                var d = Ah[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Ah[c] = d);
                return d
            }), '"')
        };
    var Ch = function () {
        L.call(this);
        this.s = {}
    };
    y(Ch, L);
    g = Ch.prototype;
    g.hc = E("goog.messaging.AbstractChannel");
    g.connect = function (a) {
        a && a()
    };
    g.pa = function () {
        return !0
    };
    g.La = function (a, b, c) {
        this.s[a] = {
            P: b,
            uc: !!c
        }
    };
    g.Bc = function (a) {
        this.j = a
    };
    g.v = function () {
        Ch.o.v.call(this);
        delete this.s;
        delete this.j
    };
    var Dh = {
            1: "NativeMessagingTransport",
            2: "FrameElementMethodTransport",
            3: "IframeRelayTransport",
            4: "IframePollingTransport",
            5: "FlashTransport",
            6: "NixTransport",
            7: "DirectTransport"
        },
        Eh = ["pu", "lru", "pru", "lpu", "ppu"],
        Fh = {},
        Hh = function () {
            for (var a = 10, b = Gh, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        Gh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        Q = E("goog.net.xpc");
    var Ih = function (a) {
        L.call(this);
        this.l = a || qd()
    };
    y(Ih, L);
    Ih.prototype.Eb = 0;
    var Lh = function (a, b) {
        Ih.call(this, b);
        this.a = a;
        this.A = new O(this);
        nf(this, this.A);
        this.j = new ag(100, ud(this.l.a));
        nf(this, this.j);
        this.h = new I;
        this.g = new I;
        this.b = new I;
        this.w = Hh();
        this.s = null;
        this.f = {};
        this.G = this.a.name;
        Jh(this.a, this.a.name + "_" + Kh(this.a));
        this.C = !1;
        Ze(this.b, this.h);
        Ze(this.b, this.g);
        Ye(this.b, this.Fd, this);
        this.b.P(!0);
        P(this.A, this.j, "tick", this.ic, void 0);
        G(Q, "DirectTransport created. role=" + Kh(this.a))
    };
    y(Lh, Ih);
    var Mh = {},
        Ph = function (a) {
            var b = new Nh(a.channelName, a.service, a.payload);
            a = b.a;
            var c = b.f;
            b = b.b;
            be(Q, "messageReceived: channel=" + a + ", service=" + c + ", payload=" + b);
            var d = Fh[a];
            if (d) return d.f(c, b), !0;
            d = Oh(b)[0];
            for (var e in Fh) {
                var f = Fh[e];
                if (1 == Kh(f) && !f.pa() && "tp" == c && "SETUP" == d) return Jh(f, a), f.f(c, b), !0
            }
            G(Q, "channel name mismatch; message ignored.");
            return !1
        };
    g = Lh.prototype;
    g.Eb = 7;
    g.Qc = function (a) {
        a = Oh(a);
        var b = a[1];
        switch (a[0]) {
            case "SETUP_ACK":
                this.h.a || this.h.P(!0);
                break;
            case "SETUP":
                this.da("tp", "SETUP_ACK"), this.g.a || this.g.P(!0), null != this.s && this.s != b && (G(Q, "Sending SETUP and changing peer ID to: " + b), this.da("tp", "SETUP," + this.w)), this.s = b
        }
    };
    g.connect = function () {
        var a = ud(this.l.a);
        if (a) {
            var b = Ea(a);
            0 == (Mh[b] || 0) && null == va("crosswindowmessaging.channel", a) && r("crosswindowmessaging.channel", Ph, a);
            Mh[b]++;
            this.C = !0;
            this.ic()
        } else be(Q, "connect(): no window to initialize.")
    };
    g.ic = function () {
        this.a.pa() ? this.j.stop() : (this.j.start(), this.da("tp", "SETUP," + this.w))
    };
    g.da = function (a, b) {
        this.a.aa ? (a = new Nh(this.G + "_" + (0 == Kh(this.a) ? 1 : 0), a, b), this.a.a.directSyncMode ? this.Xb(a) : this.f[Ea(a)] = bg(x(this.Xb, this, a), 0)) : be(Q, "send(): window not ready")
    };
    g.Xb = function (a) {
        var b = Ea(a);
        this.f[b] && delete this.f[b];
        try {
            var c = va("crosswindowmessaging.channel", this.a.aa)
        } catch (d) {
            F(Q, "Can't access other window, ignoring.", d);
            return
        }
        if (null === c) F(Q, "Peer window had no global function.");
        else try {
            c({
                channelName: a.a,
                service: a.f,
                payload: a.b
            }), G(Q, "send(): channelName=" + a.a + " service=" + a.f + " payload=" + a.b)
        } catch (d) {
            F(Q, "Error performing call, ignoring.", d)
        }
    };
    g.Fd = function () {
        Qh(this.a, 0)
    };
    g.v = function () {
        if (this.C) {
            var a = ud(this.l.a),
                b = Ea(a);
            1 == --Mh[b] && r("crosswindowmessaging.channel", null, a)
        }
        this.f && (Hb(this.f, function (c) {
            h.clearTimeout(c)
        }), this.f = null);
        this.h && (this.h.cancel(), delete this.h);
        this.g && (this.g.cancel(), delete this.g);
        this.b && (this.b.cancel(), delete this.b);
        Lh.o.v.call(this)
    };
    var Oh = function (a) {
            a = a.split(",");
            a[1] = a[1] || null;
            return a
        },
        Nh = function (a, b, c) {
            this.a = a;
            this.f = b;
            this.b = c
        };
    var Rh = function (a, b, c, d, e) {
        Ih.call(this, c);
        this.j = a;
        this.b = e || 2;
        A(1 <= this.b);
        A(2 >= this.b);
        this.I = b || "*";
        this.G = new O(this);
        this.s = new ag(100, ud(this.l.a));
        this.C = !!d;
        this.h = new I;
        this.g = new I;
        this.f = new I;
        this.N = Hh();
        this.A = null;
        this.C ? 1 == Kh(this.j) ? Ze(this.f, this.h) : Ze(this.f, this.g) : (Ze(this.f, this.h), 2 == this.b && Ze(this.f, this.g));
        Ye(this.f, this.Gd, this);
        this.f.P(!0);
        P(this.G, this.s, "tick", this.jc, void 0);
        G(Q, "NativeMessagingTransport created.  protocolVersion=" + this.b + ", oneSidedHandshake=" + this.C +
            ", role=" + Kh(this.j))
    };
    y(Rh, Ih);
    Rh.prototype.a = null;
    Rh.prototype.H = !1;
    Rh.prototype.Eb = 1;
    var Sh = {};
    Rh.prototype.w = 0;
    var Vh = function (a) {
        var b = a.ea.data;
        if (!q(b)) return !1;
        var c = b.indexOf("|"),
            d = b.indexOf(":");
        if (-1 == c || -1 == d) return !1;
        var e = b.substring(0, c);
        c = b.substring(c + 1, d);
        b = b.substring(d + 1);
        be(Q, "messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
        if (d = Fh[e]) return d.f(c, b, a.ea.origin), !0;
        d = Th(b)[0];
        for (var f in Fh) {
            var k = Fh[f];
            if (1 == Kh(k) && !k.pa() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && Uh(k, a.ea.origin)) return Jh(k, e), k.f(c, b), !0
        }
        G(Q, 'channel name mismatch; message ignored"');
        return !1
    };
    Rh.prototype.Qc = function (a) {
        var b = Th(a);
        a = b[1];
        switch (b[0]) {
            case "SETUP_ACK":
                Wh(this, 1);
                this.h.a || this.h.P(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.b && (Wh(this, 2), this.h.a || this.h.P(!0));
                break;
            case "SETUP":
                Wh(this, 1);
                Xh(this, 1);
                break;
            case "SETUP_NTPV2":
                2 == this.b && (b = this.a, Wh(this, 2), Xh(this, 2), 1 != b && null == this.A || this.A == a || (G(Q, "Sending SETUP and changing peer ID to: " + a), Yh(this)), this.A = a)
        }
    };
    var Yh = function (a) {
            A(!(1 == a.b && 2 == a.a));
            2 != a.b || null != a.a && 2 != a.a || a.da("tp", "SETUP_NTPV2," + a.N);
            null != a.a && 1 != a.a || a.da("tp", "SETUP")
        },
        Xh = function (a, b) {
            A(1 != a.b || 2 != b, "Shouldn't try to send a v2 setup ack in v1 mode.");
            if (2 != a.b || null != a.a && 2 != a.a || 2 != b) {
                if (null != a.a && 1 != a.a || 1 != b) return;
                a.da("tp", "SETUP_ACK")
            } else a.da("tp", "SETUP_ACK_NTPV2");
            a.g.a || a.g.P(!0)
        },
        Wh = function (a, b) {
            b > a.a && (a.a = b);
            1 == a.a && (a.g.a || a.C || a.g.P(!0), a.A = null)
        };
    g = Rh.prototype;
    g.connect = function () {
        var a = ud(this.l.a),
            b = Ea(a),
            c = Sh[b];
        sa(c) || (c = 0);
        0 == c && Lf(a.postMessage ? a : a.document, "message", Vh, !1, Rh);
        Sh[b] = c + 1;
        this.H = !0;
        this.jc()
    };
    g.jc = function () {
        var a = 0 == Kh(this.j);
        this.C && a || this.j.pa() || this.D ? this.s.stop() : (this.s.start(), Yh(this))
    };
    g.da = function (a, b) {
        var c = this.j.aa;
        c ? (this.da = function (d, e) {
            var f = this,
                k = this.j.name;
            this.w = bg(function () {
                f.w = 0;
                try {
                    var l = c.postMessage ? c : c.document;
                    l.postMessage ? (l.postMessage(k + "|" + d + ":" + e, f.I), be(Q, "send(): service=" + d + " payload=" + e + " to hostname=" + f.I)) : F(Q, "Peer window had no postMessage function.")
                } catch (n) {
                    F(Q, "Error performing postMessage, ignoring.", n)
                }
            }, 0)
        }, this.da(a, b)) : be(Q, "send(): window not ready")
    };
    g.Gd = function () {
        Qh(this.j, 1 == this.b || 1 == this.a ? 200 : void 0)
    };
    g.v = function () {
        if (this.H) {
            var a = ud(this.l.a),
                b = Ea(a),
                c = Sh[b];
            Sh[b] = c - 1;
            1 == c && Sf(a.postMessage ? a : a.document, "message", Vh, !1, Rh)
        }
        this.w && (h.clearTimeout(this.w), this.w = 0);
        mf(this.G);
        delete this.G;
        mf(this.s);
        delete this.s;
        this.h.cancel();
        delete this.h;
        this.g.cancel();
        delete this.g;
        this.f.cancel();
        delete this.f;
        delete this.da;
        Rh.o.v.call(this)
    };
    var Th = function (a) {
        a = a.split(",");
        a[1] = a[1] || null;
        return a
    };
    var Zh = function (a) {
        this.b = this.l = this.h = "";
        this.D = null;
        this.g = this.a = "";
        this.j = !1;
        var b;
        a instanceof Zh ? (this.j = m(void 0) ? void 0 : a.j, $h(this, a.h), this.l = a.l, this.b = a.b, ai(this, a.D), this.a = a.a, bi(this, ci(a.f)), this.g = a.g) : a && (b = String(a).match(Pg)) ? (this.j = !1, $h(this, b[1] || "", !0), this.l = di(b[2] || ""), this.b = di(b[3] || "", !0), ai(this, b[4]), this.a = di(b[5] || "", !0), bi(this, b[6] || "", !0), this.g = di(b[7] || "")) : (this.j = !1, this.f = new ei(null, this.j))
    };
    Zh.prototype.toString = function () {
        var a = [],
            b = this.h;
        b && a.push(fi(b, gi, !0), ":");
        var c = this.b;
        if (c || "file" == b) a.push("//"), (b = this.l) && a.push(fi(b, gi, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.D, null != c && a.push(":", String(c));
        if (c = this.a) this.b && "/" != c.charAt(0) && a.push("/"), a.push(fi(c, "/" == c.charAt(0) ? hi : ii, !0));
        (c = this.f.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", fi(c, ji));
        return a.join("")
    };
    Zh.prototype.resolve = function (a) {
        var b = new Zh(this),
            c = !!a.h;
        c ? $h(b, a.h) : c = !!a.l;
        c ? b.l = a.l : c = !!a.b;
        c ? b.b = a.b : c = null != a.D;
        var d = a.a;
        if (c) ai(b, a.D);
        else if (c = !!a.a) {
            if ("/" != d.charAt(0))
                if (this.b && !this.a) d = "/" + d;
                else {
                    var e = b.a.lastIndexOf("/"); - 1 != e && (d = b.a.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (Bb(e, "./") || Bb(e, "/.")) {
                d = rb(e, "/");
                e = e.split("/");
                for (var f = [], k = 0; k < e.length;) {
                    var l = e[k++];
                    "." == l ? d && k == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && k == e.length &&
                        f.push("")) : (f.push(l), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.a = d : c = "" !== a.f.toString();
        c ? bi(b, ci(a.f)) : c = !!a.g;
        c && (b.g = a.g);
        return b
    };
    var $h = function (a, b, c) {
            a.h = c ? di(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        },
        ai = function (a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.D = b
            } else a.D = null
        },
        bi = function (a, b, c) {
            b instanceof ei ? (a.f = b, ki(a.f, a.j)) : (c || (b = fi(b, li)), a.f = new ei(b, a.j))
        },
        di = function (a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        fi = function (a, b, c) {
            return q(a) ? (a = encodeURI(a).replace(b, mi), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        mi = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        gi = /[#\/\?@]/g,
        ii = /[#\?:]/g,
        hi = /[#\?]/g,
        li = /[#\?@]/g,
        ji = /#/g,
        ei = function (a, b) {
            this.b = this.a = null;
            this.f = a || null;
            this.h = !!b
        },
        ni = function (a) {
            a.a || (a.a = new K, a.b = 0, a.f && Sg(a.f, function (b, c) {
                a.add(Lc(b), c)
            }))
        };
    ei.prototype.Y = function () {
        ni(this);
        return this.b
    };
    ei.prototype.add = function (a, b) {
        ni(this);
        this.f = null;
        a = oi(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = Wa(this.b) + 1;
        return this
    };
    var pi = function (a, b) {
        ni(a);
        b = oi(a, b);
        a.a.T(b) && (a.f = null, a.b = Wa(a.b) - a.a.get(b).length, lf(a.a, b))
    };
    g = ei.prototype;
    g.T = function (a) {
        ni(this);
        a = oi(this, a);
        return this.a.T(a)
    };
    g.Ha = function (a) {
        var b = this.O();
        return 0 <= $a(b, a)
    };
    g.forEach = function (a, b) {
        ni(this);
        this.a.forEach(function (c, d) {
            B(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    g.R = function () {
        ni(this);
        for (var a = this.a.O(), b = this.a.R(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.O = function (a) {
        ni(this);
        var b = [];
        if (q(a)) this.T(a) && (b = jb(b, this.a.get(oi(this, a))));
        else {
            a = this.a.O();
            for (var c = 0; c < a.length; c++) b = jb(b, a[c])
        }
        return b
    };
    g.set = function (a, b) {
        ni(this);
        this.f = null;
        a = oi(this, a);
        this.T(a) && (this.b = Wa(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = Wa(this.b) + 1;
        return this
    };
    g.get = function (a, b) {
        if (!a) return b;
        a = this.O(a);
        return 0 < a.length ? String(a[0]) : b
    };
    g.toString = function () {
        if (this.f) return this.f;
        if (!this.a) return "";
        for (var a = [], b = this.a.R(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.O(d);
            for (var f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
                a.push(k)
            }
        }
        return this.f = a.join("&")
    };
    var ci = function (a) {
            var b = new ei;
            b.f = a.f;
            a.a && (b.a = new K(a.a), b.b = a.b);
            return b
        },
        oi = function (a, b) {
            b = String(b);
            a.h && (b = b.toLowerCase());
            return b
        },
        ki = function (a, b) {
            b && !a.h && (ni(a), a.f = null, a.a.forEach(function (c, d) {
                var e = d.toLowerCase();
                d != e && (pi(this, d), pi(this, e), 0 < c.length && (this.f = null, this.a.set(oi(this, e), kb(c)), this.b = Wa(this.b) + c.length))
            }, a));
            a.h = b
        };
    var ri = function (a, b) {
        Ch.call(this);
        for (var c = 0, d; d = Eh[c]; c++)
            if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
        this.a = a;
        this.name = this.a.cn || Hh();
        this.b = b || qd();
        this.h = [];
        this.l = new O(this);
        a.lpu = a.lpu || Rg(ud(this.b.a).location.href) + "/robots.txt";
        a.ppu = a.ppu || Rg(a.pu || "") + "/robots.txt";
        Fh[this.name] = this;
        Uf(window, "unload", qi) || Kf(window, "unload", qi);
        G(Q, "CrossPageChannel created: " + this.name)
    };
    y(ri, Ch);
    var si = /^%*tp$/,
        ti = /^%+tp$/;
    g = ri.prototype;
    g.sa = null;
    g.wa = null;
    g.Z = null;
    g.Da = 1;
    g.pa = function () {
        return 2 == this.Da
    };
    g.aa = null;
    g.Za = null;
    g.connect = function (a) {
        this.g = a || wa;
        3 == this.Da && (this.Da = 1);
        this.wa ? Ye(this.wa, this.Qb) : this.Qb()
    };
    g.Qb = function () {
        G(Q, "continueConnection_()");
        this.wa = null;
        this.a.ifrid && (this.Za = this.b.getElement(this.a.ifrid));
        if (this.Za) {
            var a = this.Za.contentWindow;
            a || (a = window.frames[this.a.ifrid]);
            this.aa = a
        }
        if (!this.aa) {
            if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            this.aa = window.parent
        }
        if (!this.Z) {
            this.a.tp || (this.a.tp = v(document.postMessage) || v(window.postMessage) || Zc && window.postMessage ? 1 : bd ? 2 : Zc && this.a.pru ? 3 : 0);
            if (v(this.a.tp)) this.Z = new this.a.tp(this,
                this.b);
            else switch (this.a.tp) {
                case 1:
                    this.Z = new Rh(this, this.a.ph, this.b, !!this.a.osh, this.a.nativeProtocolVersion || 2);
                    break;
                case 6:
                    this.Z = null;
                    break;
                case 2:
                    this.Z = null;
                    break;
                case 3:
                    this.Z = null;
                    break;
                case 7:
                    if (a = this.aa) try {
                        a = window.document.domain == this.aa.document.domain
                    } catch (b) {
                        a = !1
                    }
                    a ? this.Z = new Lh(this, this.b) : G(Q, "DirectTransport not supported for this window, peer window in different security context or not set yet.")
            }
            if (this.Z) G(Q, "Transport created: " + (Dh[String(this.Z.Eb)] || ""));
            else throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
        }
        for (this.Z.connect(); 0 < this.h.length;) this.h.shift()()
    };
    g.close = function () {
        this.wa && (this.wa.cancel(), this.wa = null);
        this.h.length = 0;
        vh(this.l);
        this.Da = 3;
        mf(this.Z);
        this.g = this.Z = null;
        mf(this.sa);
        this.sa = null;
        G(Q, 'Channel "' + this.name + '" closed')
    };
    var Qh = function (a, b) {
        a.pa() || a.sa && 0 != a.sa.Ba || (a.Da = 2, G(Q, 'Channel "' + a.name + '" connected'), mf(a.sa), m(b) ? (a.sa = new rh(a.g, b), a.sa.start()) : (a.sa = null, a.g()))
    };
    ri.prototype.Ya = function (a, b) {
        if (this.pa()) {
            try {
                var c = !!this.aa && !this.aa.closed
            } catch (d) {
                c = !1
            }
            c ? (w(b) && (b = yh(b)), this.Z.da(ui(a), b)) : (ae(Q, "Peer has disappeared."), this.close())
        } else ae(Q, "Can't send. Channel not connected.")
    };
    ri.prototype.f = function (a, b, c) {
        if (this.wa) this.h.push(x(this.f, this, a, b, c));
        else if (Uh(this, c))
            if (this.D || 3 == this.Da) F(Q, "CrossPageChannel::xpcDeliver(): Channel closed.");
            else if (a && "tp" != a)
            if (this.pa()) {
                if (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = ti.test(a) ? a.substring(1) : a, c = this.s[a], c || (this.j ? c = {
                        P: Ha(this.j, a),
                        uc: w(b)
                    } : (F(this.hc, 'Unknown service name "' + a + '"'), c = null)), c) {
                    a: {
                        var d = c.uc;
                        if (d && q(b)) try {
                            var e = JSON.parse(b);
                            break a
                        } catch (f) {
                            F(this.hc, "Expected JSON payload for " + a + ', was "' +
                                b + '"');
                            e = null;
                            break a
                        } else if (!d && !q(b)) {
                            e = yh(b);
                            break a
                        } e = b
                    }
                    null != e && c.P(e)
                }
            } else G(Q, "CrossPageChannel::xpcDeliver(): Not connected.");
        else this.Z.Qc(b);
        else F(Q, 'Message received from unapproved origin "' + c + '" - rejected.')
    };
    var ui = function (a) {
            si.test(a) && (a = "%" + a);
            return a.replace(/[%:|]/g, encodeURIComponent)
        },
        Kh = function (a) {
            var b = a.a.role;
            return sa(b) ? b : window.parent == a.aa ? 1 : 0
        },
        Jh = function (a, b) {
            be(Q, "changing channel name to " + b);
            delete Fh[a.name];
            a.name = b;
            Fh[b] = a
        },
        Uh = function (a, b) {
            var c = a.a.ph;
            return sb(Oc(b)) || sb(Oc(c)) || b == a.a.ph
        };
    ri.prototype.v = function () {
        this.close();
        this.Za = this.aa = null;
        delete Fh[this.name];
        mf(this.l);
        delete this.l;
        ri.o.v.call(this)
    };
    var qi = function () {
        for (var a in Fh) mf(Fh[a])
    };
    var vi = function (a, b) {
        this.a = this.j = this.w = null;
        var c = {},
            d = 1,
            e = window.parent;
        if (null != b) switch (b) {
            case 3:
                e = window;
            case 2:
                d = 7;
                c.directSyncMode = !0;
                break;
            case 4:
                e = window.parent.frames["goog-messaging-iframe"]
        }
        c.tp = d;
        c.role = 1;
        a && (c.cn = a);
        E("goog.net.xpc").b(Kd);
        this.l = new ri(c);
        this.l.aa = e;
        ph.call(this, this.l);
        a = x(this.G, this);
        this.h.La("general", x(this.s, this, a), !0)
    };
    y(vi, ph);
    vi.prototype.connect = function (a) {
        lh() ? this.j ? (this.w = Ja(), this.l.connect(x(this.I, this, a))) : ae(H, "You must call setAssetUrl before connecting.") : be(H, "This class should only listen to messages when served by the rendering libraries.")
    };
    vi.prototype.I = function (a) {
        R(this, "conduitInitialized", [this.j, Jg.O()]);
        var b = {
            version: "01_236"
        };
        b.x = window.STUDIO_SDK_START || null;
        b.c = this.w;
        b.t = Ja();
        R(this, "recordTimings", [b]);
        a && a()
    };
    vi.prototype.G = function (a) {
        a: {
            var b = a.methodName;a = a.args;
            if (b in ih) {
                if (this.a) {
                    be(H, ["Invoking method: ", b, " with args: ", a.join(", ")].join(""));
                    var c = this.a[b];
                    v(c) || (c = this.a.defaultMessageHandler, a = [b, a]);
                    if (v(c)) {
                        b = c.apply(this.a, a);
                        break a
                    }
                }
                b = null
            } else b = void 0
        }
        return b
    };
    var R = function (a, b, c, d) {
        var e = {};
        e.methodName = b;
        e.args = c && u(c) ? c : [];
        qh(a, "general", e, d || wa)
    };
    r("studio.sdk.ContainerState", {
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed",
        EXPANDING: "expanding",
        EXPANDED: "expanded",
        FS_COLLAPSING: "fs_collapsing",
        FS_EXPANDING: "fs_expanding",
        FS_EXPANDED: "fs_expanded"
    }, void 0);
    var wi = function () {
        O.call(this);
        this.a = new Map;
        this.b = !1;
        this.a.set("nx", null);
        this.a.set("ny", null);
        this.a.set("dim", null)
    };
    wi.prototype = ca(O.prototype);
    wi.prototype.constructor = wi;
    if (ia) ia(wi, O);
    else
        for (var xi in O)
            if ("prototype" != xi)
                if (Object.defineProperties) {
                    var yi = Object.getOwnPropertyDescriptor(O, xi);
                    yi && Object.defineProperty(wi, xi, yi)
                } else wi[xi] = O[xi];
    wi.o = O.prototype;
    wi.prototype.h = function (a) {
        var b = a.clientX,
            c = a.clientY;
        a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
        this.a.set("nx", Math.round(b));
        this.a.set("ny", Math.round(c))
    };
    wi.prototype.v = function () {
        this.b = !1;
        O.prototype.v.call(this)
    };
    var zi = {
        NONE: 0,
        LOG_ONLY: 1
    };
    r("studio.sdk.ExitFlag", zi, void 0);
    zi.NONE = 0;
    zi.LOG_ONLY = 1;
    var Ai = {
        GET_CURRENT_POSITION: "getCurrentPosition",
        GET_DEFAULT_POSITION: "getDefaultPosition",
        GET_SCREEN_SIZE: "getScreenSize",
        CREATE_CALENDAR_EVENT: "createCalendarEvent",
        GET_MAX_SIZE: "getMaxSize",
        PLAY_VIDEO: "playVideo",
        STORE_PICTURE: "storePicture",
        SUPPORTS: "supports",
        USE_CUSTOM_CLOSE: "useCustomClose"
    };
    r("studio.sdk.MraidMethod", Ai, void 0);
    var Bi = function () {};
    r("studio.sdk.IEnabler", Bi, void 0);
    g = Bi.prototype;
    g.Hc = function () {};
    g.reportManualClose = function () {};
    g.Cc = function () {};
    g.Jc = function () {};
    g.Ic = function () {};
    g.isVisible = function () {};
    g.ma = function () {};
    g.isPageLoaded = function () {};
    g.isInitialized = function () {};
    g.Ob = function () {};
    g.getParameter = function () {};
    g.exit = function () {};
    g.Wa = function () {};
    g.ac = function () {};
    g.Ia = function () {};
    g.startTimer = function () {};
    g.stopTimer = function () {};
    g.cc = function () {};
    g.fc = function () {};
    g.cb = function () {};
    g.sb = function () {};
    g.Ga = function () {};
    g.rb = function () {};
    g.close = function () {};
    g.Ja = function () {};
    g.Ma = function () {};
    g.addEventListener = function () {};
    g.removeEventListener = function () {};
    g.Ac = function () {};
    g.zc = function () {};
    g.Dc = function () {};
    g.$b = function () {};
    g.xb = function () {};
    g.Zb = function () {};
    g.gc = function () {};
    g.qc = function () {};
    var Ci = function (a, b) {
            return "The " + (a + (" method has been deprecated. As an alternative please use: " + (b + ".")))
        },
        Di = function (a, b) {
            return 'Video "' + (a + ('" dispatching "' + (b + '" event.')))
        },
        Ei = function (a, b) {
            return 'Custom event "' + (a + ('" of type "' + (b + '" invoked.')))
        };
    var Fi = function (a) {
            this.a = a;
            this.b = ""
        },
        Gi = /:/,
        Hi = /%(.+)!/,
        Ii = function (a, b, c) {
            for (var d = c.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (1 < f.length && f[0].length && f[1].length) {
                    var k = decodeURIComponent(f[0]);
                    f = decodeURIComponent(f[1]);
                    a.a.set(k, f)
                }
            }
            if (null != a.a && a.a.T("exitEvents")) {
                d = {};
                e = a.a.get("exitEvents").toString();
                k = e.split("{DELIM}");
                for (f = 0; f < k.length; f++) {
                    var l = k[f];
                    Bb(e, "%2C") && (l = unescape(l));
                    var n = {};
                    l = l.split(",");
                    for (var p = 0; p < l.length; p++)
                        if (Gi.test(l[p])) {
                            l[p].replace(Hi, "%25$1!");
                            var t = l[p].split(":"),
                                J = t.shift();
                            n[J] = unescape(t.join(":"))
                        } d[n.name] = n
                }
                b.exitEvents = d
            }
            a.b = c
        };
    Fi.prototype.get = function (a, b) {
        return this.a.get(a, b)
    };
    Fi.prototype.set = function (a, b) {
        return this.a.set(a, b)
    };
    Fi.prototype.T = function (a) {
        return this.a.T(a)
    };
    var Ji = function (a) {
            this.a = {};
            this.b = new Fi(a)
        },
        Ki = function (a, b, c, d) {
            var e = c;
            "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
            a.a[b] = e
        },
        Li = function (a, b) {
            try {
                var c = JSON.parse(b);
                null != c && Ub(a.a, c);
                var d = {};
                Hb(a.a, function (e, f) {
                    e && !w(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
                    f && e && (d[f] = e)
                }, a);
                a.a = d
            } catch (e) {
                Ii(a.b, a.a, b)
            }
        };
    Ji.prototype.getParameter = function (a, b) {
        return Ob(this.a, a) ? Qb(this.a, a) : this.b.get(a, b)
    };
    Ji.prototype.S = function (a) {
        a = parseInt(this.getParameter(a), 10);
        return isNaN(a) ? null : a
    };
    Ji.prototype.ca = function (a) {
        a = this.getParameter(a);
        return sb(Oc(a)) ? null : a.toString()
    };
    var Mi = function () {
            this.b = !1;
            this.a = []
        },
        Ni = function (a, b, c) {
            a.f ? R(a.f, b, c) : a.a.push({
                type: b,
                Wc: c
            })
        },
        Oi = function (a, b, c, d, e, f) {
            Ni(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.h, !!d, !!e])
        },
        Qi = function (a) {
            a.b || (Oi(a, "Count", "INTERACTIVE_IMPRESSION"), a.b = !0, Pi(a))
        },
        Pi = function (a) {
            Ni(a, "flushCounters", [a.h])
        },
        Ri = function (a, b, c, d) {
            Ni(a, "logVideoEvent", [b, escape(c), d])
        };
    var Si = function () {
            this.b = this.a = 0
        },
        Ti = function (a, b) {
            a.b = Math.max(a.b, b);
            switch (a.a) {
                case 3:
                    return !1;
                case 0:
                    return .25 > b && (a.a = 1), !1;
                case 1:
                    return .5 < b && (a.a = 2), !1;
                case 2:
                    return b <= a.b - .5 ? (a.a = 3, !0) : !1;
                default:
                    return !1
            }
        };
    var Ui = function () {
        var a = h.innerHeight;
        this.b = 0;
        this.D = !1;
        this.f = a;
        this.l = this.h = this.j = null;
        this.g = this.a = this.s = 0
    };
    var Vi = function (a, b) {
        L.call(this);
        this.f = a;
        this.b = b;
        this.a = null;
        this.h = new Si;
        this.j = new Ui
    };
    y(Vi, L);
    var Wi = function (a) {
        a.a || (a.a = Lf(a.f, "hostpageScroll", x(a.g, a)))
    };
    Vi.prototype.g = function (a) {
        Ti(this.h, a.creativeFramePercentY) && (Oi(this.b, "Count", "LARGE_SCROLL", !1, !1, !1), Xi(this));
        var b = this.j;
        b.D || (b.j = a.windowHeight, b.h = b.f / (b.j + b.f), b.l = 1 - b.h, b.D = !0);
        var c = !1,
            d = !1;
        a = a.creativeFramePercentY;
        switch (b.b) {
            case 0:
                a > b.h && a < b.l && (b.g = a, b.b = 1);
                break;
            case 1:
                a < b.a && (d = !0, b.b = Math.abs(b.a - b.g) >= 10 / (b.j + b.f) ? 4 : 3);
                break;
            case 2:
                a < b.a && (d = !0, b.b = 4);
                break;
            case 3:
                a > b.a && (d = !0, b.b = 1);
                break;
            case 4:
                a > b.a && (d = !0, a > b.h && a < b.l && Math.abs(b.a - b.g) >= 10 / (b.j + b.f) ? (b.b = 1, 0 < b.s++ && (c = !0)) : b.b = 2)
        }
        d && (b.g = b.a);
        b.a = a;
        c && (Oi(this.b, "Count", "SMALL_SCROLL", !0, !1, !1), Xi(this))
    };
    var Xi = function (a) {
        Oi(a.b, "Count", "SCROLL", !1, !1, !1)
    };
    Vi.prototype.v = function () {
        this.a && (Tf(this.a), this.a = null)
    };
    var Yi = function (a) {
        O.call(this);
        this.w = a;
        this.a = this.h = null;
        this.C = !1;
        this.b = null;
        this.g = !1;
        this.j = -1;
        this.s = 0
    };
    y(Yi, O);
    Yi.prototype.tb = function () {
        return this.C
    };
    Yi.prototype.H = function () {
        this.s = 1;
        this.a && (this.a.stop(), this.a.start())
    };
    Yi.prototype.G = function () {
        this.s = 0;
        this.a && this.a.stop()
    };
    Yi.prototype.A = function () {
        "1" == this.w.getParameter("isMouseOver") || 1 == this.s ? this.g || (this.C = !0, 1 > this.j ? this.j = Ja() : 1E3 < Ja() - this.j && (this.g = !0, this.w.dispatchEvent(new N("interaction")), Zi(this.w, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.h && (Oi(this.h, "Start", "INTERACTION_TIMER"), Qi(this.h)))) : (this.g && $i(this), this.j = -1)
    };
    var $i = function (a) {
        a.g = !1;
        a.h && Oi(a.h, "Stop", "INTERACTION_TIMER")
    };
    Yi.prototype.v = function () {
        this.g && $i(this); of (this.b, this.a);
        Yi.o.v.call(this)
    };
    var aj = function () {
        return new Zh((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"))
    };
    var bj = function (a) {
        this.a = a
    };
    bj.prototype.f = function (a) {
        return (null === this.a || this.a.canPlayType) && rb(a, "video/")
    };
    bj.prototype.b = function (a) {
        return this.a ? "probably" == this.a.canPlayType(a.toLowerCase()) : !1
    };
    var cj = function (a) {
        this.a = a
    };
    cj.prototype.f = function (a) {
        return "image/webp" == a.toLowerCase()
    };
    cj.prototype.b = function (a) {
        if (!this.a) return !1;
        a = a.toLowerCase();
        return rb(this.a.toDataURL(a), "data:" + a)
    };
    var dj = function () {
            this.a = Ja()
        },
        ej = null;
    dj.prototype.set = function (a) {
        this.a = a
    };
    dj.prototype.reset = function () {
        this.set(Ja())
    };
    dj.prototype.get = function () {
        return this.a
    };
    var fj = function (a) {
        this.h = a || "";
        ej || (ej = new dj);
        this.g = ej
    };
    fj.prototype.a = !0;
    fj.prototype.b = !0;
    fj.prototype.f = !1;
    var gj = function (a) {
            return 10 > a ? "0" + a : String(a)
        },
        hj = function (a, b) {
            a = (a.f - b) / 1E3;
            b = a.toFixed(3);
            var c = 0;
            if (1 > a) c = 2;
            else
                for (; 100 > a;) c++, a *= 10;
            for (; 0 < c--;) b = " " + b;
            return b
        },
        ij = function (a) {
            fj.call(this, a)
        };
    y(ij, fj);
    var jj = function (a, b) {
        var c = [];
        c.push(a.h, " ");
        if (a.b) {
            var d = new Date(b.f);
            c.push("[", gj(d.getFullYear() - 2E3) + gj(d.getMonth() + 1) + gj(d.getDate()) + " " + gj(d.getHours()) + ":" + gj(d.getMinutes()) + ":" + gj(d.getSeconds()) + "." + gj(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", hj(b, a.g.get()), "s] ");
        c.push("[", b.b, "] ");
        c.push(b.g);
        a.f && (b = b.a) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.a && c.push("\n");
        return c.join("")
    };
    var kj = function () {
            this.g = x(this.f, this);
            this.a = new ij;
            this.a.b = !1;
            this.a.f = !1;
            this.b = this.a.a = !1;
            this.h = {}
        },
        mj = function () {
            var a = lj;
            if (1 != a.b) {
                var b = $d(),
                    c = a.g;
                b.a || (b.a = []);
                b.a.push(c);
                a.b = !0
            }
        };
    kj.prototype.f = function (a) {
        function b(f) {
            if (f) {
                if (f.value >= Md.value) return "error";
                if (f.value >= Nd.value) return "warn";
                if (f.value >= Pd.value) return "log"
            }
            return "debug"
        }
        if (!this.h[a.b]) {
            var c = jj(this.a, a),
                d = nj;
            if (d) {
                var e = b(a.h);
                oj(d, e, c, a.a)
            }
        }
    };
    var lj = null,
        nj = h.console,
        pj = function () {
            lj || (lj = new kj);
            h.location && -1 != h.location.href.indexOf("Debug=true") && mj()
        },
        oj = function (a, b, c, d) {
            if (a[b]) a[b](c, d || "");
            else a.log(c, d || "")
        };
    var rj = function (a, b, c) {
            if (q(b))(b = qj(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = qj(c, d);
                    f && (c.style[f] = e)
                }
        },
        sj = {},
        qj = function (a, b) {
            var c = sj[b];
            if (!c) {
                var d = Rc(b);
                c = d;
                void 0 === a.style[d] && (d = (cd ? "Webkit" : bd ? "Moz" : Zc ? "ms" : Yc ? "O" : null) + Sc(d), void 0 !== a.style[d] && (c = d));
                sj[b] = c
            }
            return c
        },
        tj = function (a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        uj = function (a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = cd && !b && !c;
            if ((!m(b) || d) && a.getBoundingClientRect) {
                a: {
                    try {
                        var e = a.getBoundingClientRect()
                    } catch (f) {
                        e = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        break a
                    }
                    Zc && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
                }
                return new nd(e.right - e.left, e.bottom - e.top)
            }
            return new nd(b, c)
        },
        wj = function (a) {
            var b = qd(void 0),
                c = b.a;
            if (Zc && c.createStyleSheet) return b = c.createStyleSheet(), vj(b, a), b;
            c = Cd(b, "HEAD")[0];
            if (!c) {
                var d = Cd(b, "BODY")[0];
                c = b.b("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.b("STYLE");
            vj(d, a);
            b.f(c, d);
            return d
        },
        xj = function (a) {
            Ad(a.ownerNode ||
                a.owningElement || a)
        },
        vj = function (a, b) {
            b instanceof Bc && b.constructor === Bc && b.b === Ac ? b = b.a : (Va("expected object of type SafeStyleSheet, got '" + b + "' of type " + za(b)), b = "type_error:SafeStyleSheet");
            Zc && m(a.cssText) ? a.cssText = b : a.innerHTML = b
        },
        yj = function (a) {
            a = a.style;
            a.position = "relative";
            Zc && !jd("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block"
        };
    var zj = function (a) {
        xg(this, a)
    };
    y(zj, vg);
    var S = function (a) {
        window.AdobeEdge = window.AdobeEdge || {};
        window.AdobeEdge.bootstrapLoading = !0;
        h.console && (pj(), mj());
        G(H, "");
        if (a != Aj) return ae(H, "You must access the enabler instance using studio.Enabler.getInstance(); or Enabler and not create a duplicate instance."), !1;
        M.call(this);
        this.w = {};
        this.j = {};
        this.G = new Lg(Mg(), Ng() ? window.orientation : 0);
        this.N = new O(this);
        this.Ra = !1;
        this.A = null;
        this.f = "collapsed";
        this.ib = !1;
        this.ha = null;
        this.oe = 0;
        this.Pa = {};
        this.ga = null;
        this.hb = !1;
        this.H = new I;
        this.g =
            null;
        this.gb = [];
        this.ra = {};
        this.kb = [];
        this.b = new Mi;
        this.I = new Yi(this);
        this.Oa = null;
        a = D("CANVAS");
        a.getContext && a.getContext("2d") || (a = null);
        this.Ze = new cj(a);
        (a = D("VIDEO")) || (a = null);
        this.rc = new bj(a);
        this.a = new Ji(Bj(this));
        this.ya = null;
        this.Ib = {}
    };
    y(S, M);
    r("studio.Enabler", S, void 0);
    var Cj = ["c"],
        Aj = Math.random(),
        Dj = !1,
        Ej = null,
        T = function () {
            Ej || (Ej = new S(Aj));
            return Ej
        };
    S.getInstance = T;
    g = S.prototype;
    g.yc = -1;
    g.mb = null;
    g.Mc = null;
    g.Fb = null;
    g.Lc = !0;
    g.Ab = !1;
    g.za = !1;
    g.wc = !1;
    g.Nc = !1;
    g.va = null;
    g.Bb = null;
    g.ia = null;
    g.F = null;
    var Fj = function (a) {
            a.Fb || (a.Fb = aj());
            return a.Fb
        },
        Bj = function (a) {
            var b = Fj(a).f;
            (a = Qg(Fj(a).toString())) && Sg(a, function (c, d) {
                -1 < Cj.indexOf(c) && b.set(c, d)
            });
            return b
        },
        Zi = function (a, b, c) {
            R(a.F, b, c, void 0)
        },
        Kj = function (a) {
            a.Ab = !0;
            a.Bb = a.ec();
            a.ia = a.dc();
            if (a.F) {
                var b = a.b,
                    c = a.Bb;
                b.f = a.F;
                b.h = c;
                for (c = kb(b.a); c.length;) {
                    var d = c.shift();
                    Ni(b, d.type, d.Wc)
                }
            }
            null != a.a.getParameter("clickN") || Ki(a.a, "clickN", 1);
            a.Lc = "true" != a.a.getParameter("ise");
            b = a.S("leftOffset") || 0;
            c = a.S("topOffset") || 0;
            0 == b && 0 == c || Gj(a,
                b, c);
            a.j = a.a.getParameter("exitEvents", {});
            b = a.a;
            if (Ob(b.a, "assets") || b.b.T("assets")) b = a.a.getParameter("assets").toString(), Hj(a, b);
            Kg(a.a.getParameter("features", []));
            a.I.h = a.b;
            b = a.I;
            z(2) && (P(b, document.body || window, "mouseover", b.H, void 0), P(b, document.body || window, "mouseout", b.G, void 0));
            m(window.ontouchstart) && (b.a = new ag(1E3), P(b, b.a, "tick", b.G, void 0), P(b, document, ["touchstart", "touchmove"], b.H, void 0));
            b.b && (uh(b, b.b, "tick", b.A), b.b.dispose());
            b.b = new ag(80);
            P(b, b.b, "tick", b.A, void 0);
            b.b.start();
            Ij(a);
            if (b = a.getParameter("layoutsConfig")) a.Mc = JSON.parse(String(b));
            if (b = a.getParameter("experiments")) a.Ib = JSON.parse(String(b));
            if (b = a.getParameter("rum_config")) try {
                var e = JSON.parse(String(b));
                b = window;
                if (!b.google_rum_config && e) {
                    var f = new zj(e),
                        k, l = zg(f, 2);
                    if (k = null == l ? "" : l) {
                        var n = Ag(f, Eg);
                        if (n) {
                            var p = Ag(n, Dg);
                            if (p) {
                                b.google_timing_url = k;
                                if (2 < p.g) p.a[2 + p.h] = 3;
                                else {
                                    var t = p.g + p.h;
                                    p.a[t] || (p.f = p.a[t] = {});
                                    p.f[2] = 3
                                }
                                b.google_rum_config = Bg(n);
                                var J = zg(f, 3);
                                var X = null == J ? J : !!J;
                                b.google_measure_js_timing =
                                    null == X ? !1 : X;
                                var Ba = b.document,
                                    ab = Ba.createElement("script");
                                Kc(ab, ee(k));
                                var Ia = Ba.getElementsByTagName("script")[0];
                                if (Ia && Ia.parentNode) {
                                    Ia.parentNode.insertBefore(ab, Ia);
                                    var Yl = ab
                                } else Yl = null;
                                Yl || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0)
                            }
                        }
                    }
                }
            } catch (xr) {}
            a.dispatchEvent(new N("init"));
            a.H.a || a.H.P();
            Jj(a) && (a.ya = new wi, a = a.ya, a.b = !0, P(a, document.body || window, "mousedown", a.h, {
                capture: !0,
                passive: !0
            }), P(a, document.body || window, "touchstart", a.h, {
                capture: !0,
                passive: !0
            }))
        };
    S.prototype.Ee = function (a) {
        sa(a) ? (this.yc = a, G(H, "enabler.setProfileId set to: " + a)) : G(H, "enabler.setProfileId invalid profile id value: " + a)
    };
    S.prototype.setProfileId = S.prototype.Ee;
    S.prototype.xd = function () {
        return this.yc
    };
    S.prototype.getProfileId = S.prototype.xd;
    S.prototype.Be = function (a) {
        w(a) ? (this.mb = a, this.isInitialized() && Ij(this)) : G(H, "enabler.setDevDynamicContent invalid dcData value: " + a)
    };
    S.prototype.setDevDynamicContent = S.prototype.Be;
    var Ij = function (a) {
        if (null != a.ca("dcData") || a.mb) window.dynamicContent = null != a.ca("dcData") ? a.Xa() : a.mb
    };
    S.prototype.Xa = function () {
        var a = this.getParameter("dcData");
        return a ? JSON.parse(String(a)) : null
    };
    S.prototype.getDynamicDataPayload = S.prototype.Xa;
    S.prototype.na = function () {
        return this.Mc
    };
    S.prototype.getLayoutsConfig = S.prototype.na;
    S.prototype.re = function () {
        return this.a.b.b || yh(this.a)
    };
    S.prototype.getAdParameters = S.prototype.re;
    S.prototype.Ve = function (a) {
        Li(this.a, a);
        this.va && Tf(this.va);
        Kj(this);
        G(H, "Asset properties have been set by host.")
    };
    S.prototype.setAdParameters = S.prototype.Ve;
    S.prototype.ie = function () {
        this.va && Tf(this.va);
        G(H, "Using default ad parameters in test environment. Simulating local events.");
        Kj(this)
    };
    S.setRushSimulatedLocalEvents = function (a) {
        Dj = !!a;
        if (a && Ej) {
            a = Ej;
            for (var b = 0; b < a.gb.length; ++b) a.dispatchEvent(a.gb[b])
        }
    };
    var Lj = function (a, b, c) {
        var d = U;
        c = null != c ? c : 0;
        d.gb.push(b);
        bg(function () {
            this.dispatchEvent(b)
        }, c, d);
        return Kf(d, b, a, !1, d)
    };
    S.prototype.Wb = function () {
        var a = Mg(),
            b = this.G.a;
        if (this.G.b != a || Ng() && this.G.a != window.orientation) {
            Ng() && (b = window.orientation);
            var c = new N("orientation");
            c.ba("mode", a);
            c.ba("degrees", b);
            this.dispatchEvent(c)
        }
    };
    S.prototype.l = function (a, b, c) {
        if (!this.ma()) {
            var d = x.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
            bg(d, b)
        }
    };
    var Hj = function (a, b) {
        0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
        b = b.split("&");
        if (!(2 >= b.length && "" == b[0]))
            for (var c = 0; c < b.length; c++) {
                var d = b[c].split("=");
                a.w[d[0].toLowerCase()] = unescape(d[1])
            }
    };
    S.prototype.s = function () {
        Pi(this.b)
    };
    S.prototype.reportActivitiesImmediately = S.prototype.s;
    var Mj = function (a) {
            a.b && Qi(a.b)
        },
        Nj = function (a, b) {
            var c = a.a.getParameter("click", ""),
                d = parseInt(a.a.getParameter("clickN"), 10);
            a = a.a.getParameter("thirdPartyClickRedirect", "");
            a: {
                var e = c;c = b;
                if (!sb(Oc(e))) {
                    e = Xg(e, null);
                    if (!rb(b, e)) break a;
                    c = Nc(c, e.length)
                }
                a && (c = decodeURIComponent(c), rb(c, a) && (c = Nc(c, a.length)));
                if (!sb(Oc(e)) && -1 < e.indexOf("?"))
                    for (b = sa(d) ? d : 1, d = 0; d < b; d++) c = unescape(c);b = c
            }
            return b
        },
        Oj = function (a, b, c, d) {
            var e = {};
            e.target = c;
            sg && (e.fullscreen = !0);
            (c = e) || (c = {});
            e = window;
            var f = b instanceof
            jc ? b : nc("undefined" != typeof b.href ? b.href : String(b));
            b = c.target || b.target;
            var k = [];
            for (l in c) switch (l) {
                case "width":
                case "height":
                case "top":
                case "left":
                    k.push(l + "=" + c[l]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    k.push(l + "=" + (c[l] ? 1 : 0))
            }
            var l = k.join(",");
            Uc() && e.navigator && e.navigator.standalone && b && "_self" != b ? (l = e.document.createElement("A"), Yb(l, "HTMLAnchorElement"), f instanceof jc || f instanceof jc || (f = "object" == typeof f && f.ta ? f.oa() : String(f), A(lc.test(f), "%s does not match the safe URL pattern",
                f) || (f = "about:invalid#zClosurez"), f = mc(f)), l.href = kc(f), l.setAttribute("target", b), c.noreferrer && l.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, e, 1), l.dispatchEvent(c)) : c.noreferrer ? (e = e.open("", b, l), f = kc(f).toString(), e && (ad && Bb(f, ";") && (f = "'" + f.replace(/'/g, "%27") + "'"), e.opener = null, c = new bc($b, "b/12014412, meta tag with sanitized URL"), f = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Mc(f) + '">', Xa(cc(c),
                "must provide justification"), A(!sb(cc(c)), "must provide non-empty justification"), c = Hc(f), e.document.write(Gc(c)), e.document.close())) : (e = e.open(kc(f).toString(), b, l)) && c.noopener && (e.opener = null);
            d && a.s()
        },
        Pj = function (a, b, c, d, e) {
            R(a.F, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.Bb, !1, c, null, d])
        },
        Rj = function (a, b, c, d, e) {
            if (sb(Oc(b))) G(H, "There was a problem with the exit call.");
            else if (a.isInitialized()) {
                var f = m(d) ? d : 0;
                d = a.j[b] && a.j[b].target || "_blank";
                var k;
                if (k = !z(8)) k = !(Bb(a.a.getParameter("click",
                    ""), "[rm_exit_id]") && null != a.j[b] && null != a.j[b].reportingId && !sb(a.j[b].reportingId));
                f = !(f & 1);
                var l = a.a.getParameter("click", "");
                if (Jj(a)) {
                    var n = a.ya;
                    if (n.b) {
                        var p = td();
                        n.a.set("dim", p.width + "x" + p.height);
                        p = "";
                        n = ba(n.a);
                        for (var t = n.next(); !t.done; t = n.next()) {
                            var J = ba(t.value);
                            t = J.next().value;
                            J = J.next().value;
                            p = null == J ? p + "&" + t + "=" : p + "&" + t + "=" + J
                        }
                        n = l.toLowerCase().indexOf("&adurl="); - 1 < n && 34 >= p.length && (l = l.substr(0, n) + p + l.substr(n))
                    }
                    e && e.pIndex && (e = e.pIndex) && (p = l.toLowerCase().indexOf("&adurl="),
                        -1 < p && (l = l.substr(0, p) + "&gpa_pos=" + e + l.substr(p)))
                } else {
                    if (e) {
                        p = l;
                        if (e.pIndex) {
                            l = p;
                            if (p = e.pIndex) n = l.toLowerCase().indexOf("&adurl="), -1 < n && (l = l.substr(0, n) + "&gpa_pos=" + p + l.substr(n));
                            p = l
                        }
                        l = e.clickX;
                        e = e.clickY;
                        void 0 != l && void 0 != e && -1 < l && -1 < e && (n = p.toLowerCase().indexOf("&adurl="), -1 < n && (p = p.substr(0, n) + "&nx=" + l + "&ny=" + e + p.substr(n)));
                        e = p
                    } else e = l;
                    l = e
                }
                f && (a.j[b] ? z(8) ? Pj(a, b, c, l, !0) : (f = Yg(c), f = Qj(a, f, l, b), Oj(a, f, d, !k)) : c && (a.ma() && z(8) ? Pj(a, b, c, l, !1) : (f = Yg(c), f = Qj(a, f, l, null), Oj(a, f, d, !0), k = !1)));
                k && Oi(a.b, "Count", b, !0, !0, !0);
                R(a.F, "AD_CLICKED");
                d = new N("exit");
                d.ba("id", b);
                d.ba("url", c);
                a.dispatchEvent(d);
                G(H, 'Exit "' + (b + '" invoked.'))
            }
        },
        Sj = function (a, b, c, d, e) {
            a = a.j[b];
            c = !d && a && a.url ? a.url : c;
            var f;
            null == e || sb(Oc(e)) ? f = c : f = Tg(c, e + "");
            return f
        },
        Qj = function (a, b, c, d) {
            var e = null;
            d && (e = a.j[d], e = null != e.reportingId ? e.reportingId : null);
            b = b || "";
            d = a.a.getParameter("thirdPartyClickRedirect", "");
            a = parseInt(a.a.getParameter("clickN"), 10);
            if (!sb(Oc(c)) && -1 < c.indexOf("?")) {
                a = sa(a) ? a : 1;
                for (var f = 0; f < a; f++) b =
                    encodeURIComponent(b)
            }
            e && (c = Xg(c, e), b = d ? encodeURIComponent(d + b) : b);
            return c + b
        };
    S.prototype.reportManualClose = function () {
        G(H, "Ad was closed by user action.");
        Oi(this.b, "Count", "EVENT_MANUAL_CLOSE", void 0, void 0, void 0)
    };
    S.prototype.reportManualClose = S.prototype.reportManualClose;
    S.prototype.Cc = function () {
        Oi(this.b, "Count", "ENGAGEMENT", !1, !1, !1);
        this.s()
    };
    S.prototype.reportEngagement = S.prototype.Cc;
    var Tj = function (a, b, c) {
            var d = b;
            100 < d.length && (d = d.substr(0, 100));
            R(a.F, "reportCustomVariable", [escape(d), c]);
            G(H, 'Custom string "' + (b + '" recorded.'))
        },
        Gj = function (a, b, c) {
            a.ma() && !z(8) && (a.ga && xj(a.ga), a.ga = wj(Dc("body", {
                position: "relative",
                "margin-left": -b + "px !important",
                "margin-top": -c + "px !important"
            })))
        };
    S.prototype.Ye = function (a, b, c) {
        Ki(this.a, a, b, c)
    };
    S.prototype.setParameter = S.prototype.Ye;
    var Jj = function (a) {
        return a.Ib.append_spam_signals_to_click_url || null
    };
    S.prototype.Hb = function () {
        this.dispatchEvent(new N("pageLoaded"))
    };
    S.prototype.dispatchPageLoaded = S.prototype.Hb;
    S.prototype.dispatchEvent = function (a) {
        this.ra[a.type] = (this.ra[a.type] || 0) + 1;
        switch (a.type) {
            case "pageLoaded":
                null != window.AdobeEdge && v(window.AdobeEdge.loadResources) && window.AdobeEdge.loadResources();
                this.wc = !0;
                break;
            case "orientation":
                this.G.b = a.mode, this.G.a = a.degrees
        }
        return S.o.dispatchEvent.call(this, a)
    };
    S.prototype.dispatchEvent = S.prototype.dispatchEvent;
    S.prototype.jb = function (a) {
        (this.Nc = a) && !this.ra.visible ? (null != window.AdobeEdge && v(window.AdobeEdge.playWhenReady) && window.AdobeEdge.playWhenReady(), this.Lc && Oi(this.b, "Start", "DISPLAY_TIMER", void 0, void 0, void 0), this.dispatchEvent(new N("visible"))) : this.ra.hidden || this.dispatchEvent(new N("hidden"));
        this.dispatchEvent(new N("visibilityChange"))
    };
    S.prototype.setAdVisibleInternal = S.prototype.jb;
    S.prototype.qe = function () {
        this.jb(!0)
    };
    S.prototype.dispatchAdVisible = S.prototype.qe;
    S.prototype.Hc = function (a, b, c, d, e, f) {
        if (c || d) this.A || (this.A = {}), this.A.width = c, this.A.height = d;
        null != e && (this.Ra = !!e);
        null != f && Ki(this.a, "isMultiDirectional", f ? "true" : "false")
    };
    S.prototype.setExpandingPixelOffsets = S.prototype.Hc;
    S.prototype.Jc = function (a) {
        this.Ra = !!a
    };
    S.prototype.setStartExpanded = S.prototype.Jc;
    S.prototype.Ic = function (a) {
        Ki(this.a, "isMultiDirectional", a ? "true" : "false")
    };
    S.prototype.setIsMultiDirectional = S.prototype.Ic;
    S.prototype.He = function (a) {
        R(this.F, "invokeMraidMethod", ["useCustomClose", [a]]);
        this.hb = 0 == a
    };
    S.prototype.setUseCustomClose = S.prototype.He;
    S.prototype.Ce = function () {};
    S.prototype.setFloatingPixelDimensions = S.prototype.Ce;
    S.prototype.isVisible = function () {
        return this.Nc
    };
    S.prototype.isVisible = S.prototype.isVisible;
    S.prototype.ma = function () {
        return z(1)
    };
    S.prototype.isServingInLiveEnvironment = S.prototype.ma;
    S.prototype.isPageLoaded = function () {
        return this.wc
    };
    S.prototype.isPageLoaded = S.prototype.isPageLoaded;
    S.prototype.isInitialized = function () {
        return this.Ab
    };
    S.prototype.isInitialized = S.prototype.isInitialized;
    S.prototype.Ob = function (a) {
        v(a) && Ye(this.H, a)
    };
    S.prototype.callAfterInitialized = S.prototype.Ob;
    S.prototype.getParameter = function (a) {
        return this.a.getParameter(a, null)
    };
    S.prototype.getParameter = S.prototype.getParameter;
    S.prototype.getParameter = S.prototype.getParameter;
    S.prototype.S = function (a) {
        return this.a.S(a)
    };
    S.prototype.getParameterAsInteger = S.prototype.S;
    S.prototype.ca = function (a) {
        return this.a.ca(a)
    };
    S.prototype.getParameterAsNullableString = S.prototype.ca;
    S.prototype.exit = function (a, b, c) {
        m(b) && (b = Nj(this, b));
        Mj(this);
        Rj(this, a, Sj(this, a, b, !1), c)
    };
    S.prototype.exit = S.prototype.exit;
    S.prototype.Wa = function (a, b, c) {
        b = Nj(this, b);
        Mj(this);
        Rj(this, a, Sj(this, a, b, !0), c)
    };
    S.prototype.exitOverride = S.prototype.Wa;
    S.prototype.fd = function (a, b, c, d, e) {
        e && !e.pIndex ? e.pIndex = c : e || (e = {
            pIndex: c
        });
        b = Nj(this, b);
        Mj(this);
        Rj(this, a, Sj(this, a, b, !0), d, e)
    };
    S.prototype.dynamicExit = S.prototype.fd;
    S.prototype.pb = function (a, b) {
        Rj(this, a, Sj(this, a, void 0, void 0, b || ""))
    };
    S.prototype.exitQueryString = S.prototype.pb;
    S.prototype.ac = function (a) {
        return Qj(this, a, this.a.getParameter("click", ""), null)
    };
    S.prototype.formExitUrlFromOverride = S.prototype.ac;
    S.prototype.Ia = function (a, b) {
        G(H, 'Counter "' + (a + '" invoked.'));
        Oi(this.b, "Count", a, b, !0, void 0);
        be(H, Ei(a, "Count"))
    };
    S.prototype.counter = S.prototype.Ia;
    S.prototype.startTimer = function (a) {
        G(H, 'Timer "' + (a + '" started.'));
        Oi(this.b, "Start", a, void 0, !0, void 0);
        be(H, Ei(a, "Start"))
    };
    S.prototype.startTimer = S.prototype.startTimer;
    S.prototype.stopTimer = function (a) {
        G(H, 'Timer "' + (a + '" stopped.'));
        Oi(this.b, "Stop", a, void 0, !0, void 0);
        be(H, Ei(a, "Stop"))
    };
    S.prototype.stopTimer = S.prototype.stopTimer;
    S.prototype.we = function (a) {
        F(H, Ci("Enabler.reportCustomImpressionVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
        Tj(this, a, 1)
    };
    S.prototype.reportCustomImpressionVariable = S.prototype.we;
    S.prototype.xe = function (a) {
        Tj(this, a, 1)
    };
    S.prototype.reportCustomVariableCount1 = S.prototype.xe;
    S.prototype.ve = function (a) {
        F(H, Ci("Enabler.reportCustomClickVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
        Tj(this, a, 2)
    };
    S.prototype.reportCustomClickVariable = S.prototype.ve;
    S.prototype.ye = function (a) {
        Tj(this, a, 2)
    };
    S.prototype.reportCustomVariableCount2 = S.prototype.ye;
    S.prototype.cc = function () {
        return this.f
    };
    S.prototype.getContainerState = S.prototype.cc;
    S.prototype.fc = function () {
        return this.ha
    };
    S.prototype.getExpandDirection = S.prototype.fc;
    S.prototype.Fe = function (a) {
        this.ib || Zi(this, "setResponsiveBehavior", [a ? 2 : 0, 2])
    };
    S.prototype.setResponsiveExpanding = S.prototype.Fe;
    S.prototype.Ge = function (a, b) {
        Zi(this, "responsiveResize", [a, b])
    };
    S.prototype.setResponsiveSize = S.prototype.Ge;
    S.prototype.cb = function () {
        if ("collapsed" != this.f) F(H, "Enabler.requestExpand() should not be invoked unless the creative is in the collapsed state.");
        else {
            Vf(this, "expandStart") || F(H, "Please implement the expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.EXPAND_START,\n    function() {/* expand action */});");
            this.ib = !0;
            var a = [this.ia];
            this.A && a.push(this.A);
            R(this.F, "expandRequested", a);
            Uj(this, this.Ga);
            this.l(this.kc, 0)
        }
    };
    S.prototype.requestExpand = S.prototype.cb;
    var Uj = function (a, b) {
            if (!a.ma() && a.hb) {
                var c = document.getElementsByTagName("body")[0],
                    d = D("IMG", {
                        width: "15",
                        height: "15",
                        border: "0",
                        src: "http://s0.2mdn.net/ads/studio/close.png"
                    });
                a.g = {
                    P: b,
                    element: D("DIV", {
                        style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
                    }, d)
                };
                P(a.N, a.g.element, "click", b, void 0);
                zd(c, a.g.element)
            }
        },
        Vj = function (a) {
            a.g && (Ad(a.g.element), uh(a.N, a.g.element, "click", a.g.P), a.g.element = null, a.g.P = null, a.g = null)
        };
    S.prototype.ae = function () {
        this.dispatchEvent(new N("aboutToExpand"))
    };
    S.prototype.aboutToExpandInternal = S.prototype.ae;
    S.prototype.kc = function (a) {
        a && (a = fh[a.toString().toUpperCase()]);
        var b = 0,
            c = 0;
        "true" == this.getParameter("isMultiDirectional") && a && (a.a & 2 && (c = this.S("topOffset")), a.a & 1 && (b = this.S("leftOffset")));
        Gj(this, null === b ? 0 : b, null === c ? 0 : c);
        a ? this.ha = a : this.ha = this.ma() || "true" != this.getParameter("isMultiDirectional") ? null : gh[this.oe++ % gh.length];
        this.Ra || (Oi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Mj(this), this.za || (this.s(), this.za = !0));
        this.Ra = !1;
        this.f = "expanding";
        a = new N("expandStart");
        a.ba("direction",
            this.ha);
        this.dispatchEvent(a)
    };
    S.prototype.startExpandInternal = S.prototype.kc;
    S.prototype.sb = function () {
        "expanding" != this.f ? F(H, "You must first call Enabler.requestExpand() to initiate the expansion and then call Enabler.finishExpand() when the expand animation has  finished. Cancelling expansion...") : (R(this.F, "expandFinished", [this.ia]), this.f = "expanded", G(H, "The creative has expanded."), this.dispatchEvent(new N("expandFinish")))
    };
    S.prototype.finishExpand = S.prototype.sb;
    S.prototype.expand = function (a, b) {
        F(H, "The Enabler.expand() method has been deprecated. As an alternative please use: Enabler.requestExpand().");
        Gj(this, 0, 0);
        var c = [this.ia];
        b && c.push(b);
        this.hb = !!b && 0 == b.useCustomClose;
        R(this.F, "expandAsset", c);
        a || (Oi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Mj(this));
        this.za || (this.s(), this.za = !0);
        G(H, "The creative has expanded.")
    };
    S.prototype.expand = S.prototype.expand;
    S.prototype.Ga = function () {
        "expanded" != this.f && F(H, "Enabler.requestCollapse() should not be invoked unless the creative is in the expanded state.");
        Vj(this);
        Vf(this, "collapseStart") || F(H, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
        R(this.F, "collapseRequested", [this.ia]);
        this.l(this.bc, 0)
    };
    S.prototype.requestCollapse = S.prototype.Ga;
    S.prototype.bc = function () {
        this.f = "collapsing";
        this.dispatchEvent(new N("collapseStart"))
    };
    S.prototype.startCollapseInternal = S.prototype.bc;
    S.prototype.rb = function () {
        "collapsing" != this.f ? F(H, "You must first call Enabler.requestCollapse() to initiate the collapse and then call Enabler.finishCollapse() when the collapse animation has  finished. Cancelling collapse...") : (R(this.F, "collapseFinished", [this.ia]), this.l(this.Jb, 0))
    };
    S.prototype.finishCollapse = S.prototype.rb;
    S.prototype.Jb = function () {
        var a = this.S("leftOffset") || 0,
            b = this.S("topOffset") || 0;
        Gj(this, a, b);
        Oi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        G(H, "The creative has collapsed.");
        this.dispatchEvent(new N("collapseFinish"))
    };
    S.prototype.finishCollapseInternal = S.prototype.Jb;
    S.prototype.collapse = function () {
        F(H, "The Enabler.collapse() method has been deprecated. As an alternative please use: Enabler.requestCollapse().");
        Vf(this, "collapse") || F(H, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
        var a = this.S("leftOffset") || 0,
            b = this.S("topOffset") || 0;
        Gj(this, a, b);
        R(this.F, "collapseAsset", [this.ia]);
        this.dispatchEvent(new N("collapse"));
        Oi(this.b, "Stop",
            "EXPAND_TIMER", void 0, void 0, void 0)
    };
    S.prototype.collapse = S.prototype.collapse;
    S.prototype.close = function () {
        this.I.dispose();
        R(this.F, "tellAssetHide", [this.ia]);
        G(H, "Closing ad. If this was invoked by a user action, call Enabler.reportManualClose() as well.")
    };
    S.prototype.close = S.prototype.close;
    S.prototype.Xc = function () {
        R(this.F, "tellCompanionAssetHide", [this.ia])
    };
    S.prototype.closeCompanion = S.prototype.Xc;
    S.prototype.dd = function () {
        R(this.F, "tellCompanionAssetShow", [this.ia])
    };
    S.prototype.displayCompanion = S.prototype.dd;
    S.prototype.sd = function () {
        return this.ca("sn")
    };
    S.prototype.getDartSiteName = S.prototype.sd;
    S.prototype.rd = function () {
        return this.S("sid")
    };
    S.prototype.getDartSiteId = S.prototype.rd;
    S.prototype.od = function () {
        return this.S("aid")
    };
    S.prototype.getDartAdId = S.prototype.od;
    S.prototype.qd = function () {
        return this.S("pid")
    };
    S.prototype.getDartPageId = S.prototype.qd;
    S.prototype.ec = function () {
        return this.ca("rid")
    };
    S.prototype.getDartRenderingId = S.prototype.ec;
    S.prototype.pd = function () {
        return this.S("cid")
    };
    S.prototype.getDartCreativeId = S.prototype.pd;
    S.prototype.dc = function () {
        return this.ca("varName")
    };
    S.prototype.getDartAssetId = S.prototype.dc;
    S.prototype.Ad = function () {
        return this.ca("ct")
    };
    S.prototype.getUserCountry = S.prototype.Ad;
    S.prototype.Cd = function () {
        return this.ca("st")
    };
    S.prototype.getUserState = S.prototype.Cd;
    S.prototype.Dd = function () {
        return this.ca("zp")
    };
    S.prototype.getUserZipCode = S.prototype.Dd;
    S.prototype.zd = function () {
        var a = this.S("bw");
        return null != a ? a : 0
    };
    S.prototype.getUserBandwidth = S.prototype.zd;
    S.prototype.yd = function () {
        return this.ca("ac")
    };
    S.prototype.getUserAreaCode = S.prototype.yd;
    S.prototype.Bd = function () {
        return this.S("dma")
    };
    S.prototype.getUserDMACode = S.prototype.Bd;
    S.prototype.getFilename = function (a) {
        F(H, "The method: Enabler.getFilename(filename) has been deprecated. As an alternative please use: Enabler.getUrl(filename).");
        return this.Ja(a)
    };
    S.prototype.getFilename = S.prototype.getFilename;
    S.prototype.Ja = function (a) {
        var b = a.toLowerCase(),
            c = b.slice(b.lastIndexOf("/") + 1),
            d = encodeURIComponent(c),
            e = this.w[c];
        e = (e = (e = (e = (e = e || this.w["pro_" + c]) || this.w[b]) || this.w["pro_" + b]) || this.w[d]) || this.w["pro_" + d];
        return null != e ? e : a
    };
    S.prototype.getUrl = S.prototype.Ja;
    S.prototype.wd = function () {
        return this.G
    };
    S.prototype.getOrientation = S.prototype.wd;
    S.prototype.Oe = function (a, b) {
        if (a)
            for (var c = 0; c < this.kb.length; ++c) {
                var d = this.kb[c];
                if (null != d) switch (a) {
                    case "changevolume":
                        null != b && (0 < b && (d.muted = !1), d.volume = b);
                        break;
                    case "pause":
                        d.pause();
                        break;
                    case "resume":
                        d.play()
                }
            }
    };
    S.prototype.invokeOnAllVideos = S.prototype.Oe;
    S.prototype.Yb = function (a) {
        null != a && this.kb.push(a)
    };
    S.prototype.registerVideoElements = S.prototype.Yb;
    S.prototype.de = function (a, b) {
        a = gf(ee(a));
        null != b && Ye(a, b)
    };
    S.prototype.loadScript = S.prototype.de;
    S.prototype.Ma = function (a, b) {
        Gg(ce, a) ? Ye(this.H, Ha(og, a, b)) : ae(H, "There is no module called " + (a + "."))
    };
    S.prototype.loadModule = S.prototype.Ma;
    S.prototype.ce = function (a, b) {
        for (var c = a.length, d = 0; d < a.length; ++d) this.Ma(a[d], function () {
            0 == --c && b()
        })
    };
    S.prototype.loadModules = S.prototype.ce;
    S.prototype.pc = function (a) {
        G(H, 'Dispatching function invocation "' + a + '" on parent.');
        R(this.F, "invokeExternalJSFunction", [escape(a)])
    };
    S.prototype.invokeExternalJsFunction = S.prototype.pc;
    S.prototype.qc = function (a, b, c) {
        a in Ai || F(H, 'The mraid method "' + (a + "\" isn't allowed to be invoked, please use one of the corresponding Enabler methods."));
        var d = 'Method "' + (a + '" invoked');
        b && (d += 'with arguments "' + (b.join(",") + '"'));
        G(H, d + ".");
        R(this.F, "invokeMraidMethod", [a, b], c)
    };
    S.prototype.invokeMraidMethod = S.prototype.qc;
    S.prototype.Ae = function () {
        F(H, "The method: Enabler.invokeAdMobMethod has been deprecated.")
    };
    S.prototype.invokeAdMobMethod = S.prototype.Ae;
    S.prototype.C = function (a, b, c, d) {
        Gg(Zg, a) ? R(this.F, "invokeExternalJSFunctionWithReturn", [a, b, c], d) : ae(H, 'The whitelist global object "' + (a + "\" isn't whitelisted, please only call methods on one of the existing whitelisted objects."))
    };
    S.prototype.invokeExternalJsFunctionWithReturn = S.prototype.C;
    S.prototype.Se = function (a, b) {
        G(H, "Dispatching function invocation openUrl on parent.");
        R(this.F, "invokeUrlOpen", [a], b)
    };
    S.prototype.invokeUrlOpen = S.prototype.Se;
    S.prototype.v = function () {
        this.ga && xj(this.ga);
        this.va && Tf(this.va); of (this.Oa, this.I, this.b, this.N, this.H, this.ya);
        delete this.Pa;
        S.o.v.call(this)
    };
    S.prototype.addEventListener = function (a, b, c, d, e) {
        a = dh[a.toString()] || a;
        if (a.toString() in ah) {
            if (!this.ma()) {
                e = b;
                v(b) && (e = function (f) {
                    f.md ? b(f.ea) : b(f)
                });
                P(this.N, window, a, e, c, d);
                return
            }
            "hostpageScroll" != a || this.Oa || (this.Oa = new Vi(this, this.b), Wi(this.Oa));
            R(this.F, "registerEventTypeListenerForType", [a, e])
        }
        "hostpageFeaturesLoaded" == a && R(this.F, "getHostpageFeatures", [a]);
        Lf(this, a, b, c, d)
    };
    S.prototype.addEventListener = S.prototype.addEventListener;
    S.prototype.removeEventListener = function (a, b, c, d) {
        Sf(this, a, b, c, d)
    };
    S.prototype.removeEventListener = S.prototype.removeEventListener;
    S.prototype.lb = function (a, b) {
        this.Pa[a] = b
    };
    S.prototype.addMessageHandler = S.prototype.lb;
    S.prototype.te = function (a) {
        delete this.Pa[a]
    };
    S.prototype.removeMessageHandler = S.prototype.te;
    S.prototype.je = function (a, b) {
        a = this.Pa[a];
        v(a) && a.apply(null, b)
    };
    S.prototype.defaultMessageHandler = S.prototype.je;
    S.prototype.Ac = function () {
        Vf(this, "fullscreenSupport") || F(H, "Please implement an event handler in order to receive support status:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_SUPPORT,\n    function() {/* query event for fullscreen status */});");
        R(this.F, "isFullscreenSupported");
        this.l(this.Rb, 0, !0)
    };
    S.prototype.queryFullscreenSupport = S.prototype.Ac;
    S.prototype.zc = function () {
        Vf(this, "fullscreenDimensions") || F(H, "Please implement an event handler in order to receive dimensions:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,\n    function() {/* query event for fullscreen dimensions */});");
        R(this.F, "queryFullscreenDimensions");
        if (!this.ma()) {
            var a = td();
            this.l(this.Lb, 0, a.width, a.height)
        }
    };
    S.prototype.queryFullscreenDimensions = S.prototype.zc;
    S.prototype.Dc = function (a, b) {
        if ("collapsed" != this.f) F(H, "Enabler.requestFullscreenExpand() should not be invoked unless the  creative is in the collapsed state.");
        else {
            Vf(this, "fullscreenExpandStart") || F(H, "Please implement the fullscreen expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_EXPAND_START,\n    function() {/* expand action */});");
            this.ib = !0;
            var c = [];
            a && b && (c = [a, b]);
            R(this.F, "fullscreenExpandRequested", c);
            Uj(this, this.xb);
            this.l(this.Nb,
                0, a, b)
        }
    };
    S.prototype.requestFullscreenExpand = S.prototype.Dc;
    S.prototype.$b = function () {
        "fs_expanding" != this.f ? F(H, "You must first call Enabler.requestFullscreenExpand() to initiate the expansion and then call Enabler.finishFullscreenExpand() when the expand animation has finished. Cancelling expansion...") : (R(this.F, "fullscreenExpandFinished"), G(H, "The creative has expanded."), this.l(this.Mb, 0))
    };
    S.prototype.finishFullscreenExpand = S.prototype.$b;
    S.prototype.xb = function () {
        "fs_expanded" != this.f ? F(H, "Enabler.requestFullscreenCollapse() should not be invoked unless the  creative is in the fullscreen state.") : (Vf(this, "fullscreenCollapseStart") || F(H, "Please implement fullscreen collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,\n    function() {/* Begin collapse animation */});"), Vj(this), R(this.F, "fullscreenCollapseRequested"), this.l(this.Gb, 0))
    };
    S.prototype.requestFullscreenCollapse = S.prototype.xb;
    S.prototype.Zb = function () {
        "fs_collapsing" != this.f ? F(H, "You must first call Enabler.requestFullscreenCollapse() to initiate the collapse and then call Enabler.finishFullscreenCollapse() when the collapse animation has finished. Cancelling collapse...") : (R(this.F, "fullscreenCollapseFinished"), this.l(this.Kb, 0))
    };
    S.prototype.finishFullscreenCollapse = S.prototype.Zb;
    S.prototype.se = function (a) {
        R(this.F, "registerChargeableEventName", [a])
    };
    S.prototype.registerChargeableEventName = S.prototype.se;
    S.prototype.tb = function () {
        return this.I.tb()
    };
    S.prototype.hasUserInteracted = S.prototype.tb;
    S.prototype.Rb = function (a) {
        var b = new N("fullscreenSupport");
        b.ba("supported", a);
        this.dispatchEvent(b)
    };
    S.prototype.fullscreenSupportInternal = S.prototype.Rb;
    S.prototype.Lb = function (a, b) {
        var c = new N("fullscreenDimensions");
        void 0 != a && void 0 != b && (c.ba("width", a), c.ba("height", b));
        this.dispatchEvent(c)
    };
    S.prototype.fullscreenDimensionsInternal = S.prototype.Lb;
    S.prototype.Nb = function (a, b, c, d) {
        Oi(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0);
        Mj(this);
        this.za || (this.s(), this.za = !0);
        this.f = "fs_expanding";
        var e = new N("fullscreenExpandStart");
        e.ba("width", a);
        e.ba("height", b);
        e.ba("left", c);
        e.ba("top", d);
        this.dispatchEvent(e)
    };
    S.prototype.fullscreenExpandStartInternal = S.prototype.Nb;
    S.prototype.Mb = function () {
        this.f = "fs_expanded";
        this.dispatchEvent(new N("fullscreenExpandFinish"))
    };
    S.prototype.fullscreenExpandFinishInternal = S.prototype.Mb;
    S.prototype.Gb = function () {
        this.f = "fs_collapsing";
        this.dispatchEvent(new N("fullscreenCollapseStart"))
    };
    S.prototype.fullscreenCollapseStartInternal = S.prototype.Gb;
    S.prototype.Kb = function () {
        Oi(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        this.dispatchEvent(new N("fullscreenCollapseFinish"))
    };
    S.prototype.fullscreenCollapseFinishInternal = S.prototype.Kb;
    S.prototype.fe = function () {
        return this.Ze.b("image/webp")
    };
    S.prototype.canRenderWebpImages = S.prototype.fe;
    S.prototype.lc = function (a) {
        return this.rc.f(a) ? this.rc.b(a) : !1
    };
    S.prototype.supportsVideoFormat = S.prototype.lc;
    S.prototype.De = function () {
        return this
    };
    S.prototype.setHint = S.prototype.De;
    S.prototype.gc = function () {
        a: {
            for (a in Ed)
                if ("studio" == Ed[a]) {
                    var a = "studio";
                    break a
                } a = null
        }
        return a || "studio"
    };
    S.prototype.getSdk = S.prototype.gc;
    var Wj = T();
    r("Enabler", Wj, void 0);
    var U = T();
    if (!U.Ab) {
        var Xj = U.a.getParameter("e", null);
        Xj && Oa(parseInt(Xj, 10) || 0);
        var Yj = U.S("leftOffset") || 0,
            Zj = U.S("topOffset") || 0;
        0 == Yj && 0 == Zj || Gj(U, Yj, Zj);
        var ak;
        ak = Fj(U).h;
        var bk;
        bk = Fj(U).b;
        var ck;
        ck = Fj(U).a;
        var dk = [ak, "://", bk, ck].join("");
        kf(Jg.a);
        Kg([1, 2]);
        var ek;
        ek = U.a.getParameter("c", void 0);
        var fk;
        fk = U.a.S("t");
        U.F = new vi(ek, fk);
        nf(U, U.F);
        U.F.a = U;
        U.F.j = dk.split("?")[0];
        if (!U.ma()) {
            var gk = 1E3;
            Dj && (gk = 0);
            U.va = Lj(U.ie, "a", gk);
            var hk = 2E3,
                ik = 2500;
            Dj && (ik = hk = 0);
            Lj(U.Hb, "b", hk);
            Lj(Ha(U.jb, !0), "c", ik);
            P(U.N,
                window, ["resize", "orientationchange"], U.Wb, void 0);
            U.Wb()
        }
        U.F.connect()
    }
    cg.enabler = 3;
    var V = function () {
        M.call(this);
        this.a = "loading";
        this.b = va("Enabler");
        this.b.isInitialized() ? this.f() : Lf(this.b, "init", this.f, !1, this)
    };
    y(V, M);
    ya(V);
    V.prototype.s = function () {
        return this.a
    };
    V.prototype.getState = V.prototype.s;
    V.prototype.j = function () {
        return "1.0"
    };
    V.prototype.getVersion = V.prototype.j;
    V.prototype.open = function () {
        this.b.exit("MRAID default exit")
    };
    V.prototype.open = V.prototype.open;
    V.prototype.close = function () {
        "expanded" == this.a ? (this.b.Ga(), this.a = "default", this.dispatchEvent("stateChange")) : "default" == this.a && (this.a = "hidden", this.b.close(), this.dispatchEvent("stateChange"))
    };
    V.prototype.close = V.prototype.close;
    V.prototype.l = function () {
        return this.b.isVisible()
    };
    V.prototype.isViewable = V.prototype.l;
    V.prototype.expand = function () {
        "default" == this.a && (this.b.cb(), this.a = "expanded", this.dispatchEvent("stateChange"))
    };
    V.prototype.expand = V.prototype.expand;
    V.prototype.f = function () {
        this.a = "default";
        Lf(this.b, "collapseStart", this.g, !1, this);
        this.dispatchEvent("ready")
    };
    V.prototype.g = function () {
        "expanded" == this.a && (this.a = "default", this.dispatchEvent("stateChange"))
    };
    if (!window.mraid) {
        var jk = V.ja();
        r("mraid", jk, void 0)
    };
    r("studio.sdk.hint.ExpansionMode", {
        NORMAL: "normal",
        LIGHTBOX: "lightbox"
    }, void 0);
    r("studio.sdk.hint.ExpansionTrigger", {
        ON_CLICK: "onClick",
        ON_HOVER: "onHover"
    }, void 0);
    r("studio.sdk.hint.Hint", {
        EXPANSION_MODE: "expansionMode",
        EXPANSION_TRIGGER: "expansionTrigger"
    }, void 0);
    var kk, lk, mk, nk, ok, pk, qk = function () {
            return h.navigator ? h.navigator.userAgent : ""
        },
        rk = function (a) {
            return Bb(qk(), a)
        },
        sk = rk("(iPad") || rk("(iPod") || rk("(iPhone"),
        tk = rk("Android"),
        uk = rk("MSIE") || rk("IEMobile") || rk("Windows Phone"),
        vk = function () {
            m(nk) || (nk = rk("afma-sdk-a") ? !0 : !1);
            return nk
        },
        wk = function () {
            if (!m(ok)) {
                a: {
                    if (!m(mk)) {
                        if (sk && !rk("Safari")) {
                            var a = mk = !0;
                            break a
                        }
                        mk = !1
                    }
                    a = mk
                }
                ok = a || vk()
            }
            return ok
        };
    var xk = function (a) {
            return "Config type " + (a + " does not exist")
        },
        yk = function (a) {
            return "Unable to parse a type for value with JavaScript type " + (za(a) + (': "' + (a + '"')))
        },
        zk = function (a, b) {
            return "Cannot handle description for property " + (b + (" on type " + (a + ".")))
        },
        Ak = function (a, b) {
            return "Array property " + (b + (" on type " + (a + " must have at least one element.")))
        },
        Bk = function (a, b) {
            return "Invalid type for value of property " + (b + (" on type " + (a + ".")))
        },
        Ck = function (a, b) {
            return "No value specified for non-optional property " +
                (b + (" on type " + (a + ".")))
        },
        Dk = function (a, b) {
            return "Property " + (b + (" does not exist on type " + (a + ".")))
        },
        Ek = function (a, b) {
            return "Property " + (b + (" is not an array on type " + (a + ".")))
        },
        Fk = function (a, b, c, d) {
            return "Property " + (b + (" on type " + (a + (" has length " + (c + (", but invalid index " + (d + " was requested.")))))))
        },
        Gk = function (a, b) {
            return "Unknown event with type " + (a + (" and name " + b))
        },
        Hk = function (a) {
            return "The optional property " + (a + " must be a reference")
        };
    var Ik = function () {};
    r("studio.utils.EnablerAccessor", Ik, void 0);
    var Jk = function (a) {
        var b = T();
        b.isInitialized() ? a(b) : b.h.add("init", Ha(a, b), !0, void 0, void 0)
    };
    Ik.getInitializedEnablerByCallback = Jk;
    var Kk = function () {
        return new xe(function (a) {
            var b = T();
            b.isInitialized() ? a(b) : b.h.add("init", Ha(a, b), !0, void 0, void 0)
        })
    };
    Ik.getInitializedEnabler = Kk;
    Ik.loadModuleWhenReady = function (a, b) {
        Jk(function (c) {
            c.Ma(a, b)
        })
    };
    var Lk = function () {};
    ya(Lk);
    Lk.prototype.a = 0;
    var Mk = function (a) {
        M.call(this);
        this.ga = a || qd();
        this.G = null;
        this.la = !1;
        this.a = null;
        this.s = void 0;
        this.l = this.b = this.j = null
    };
    y(Mk, M);
    Mk.prototype.ya = Lk.ja();
    var Nk = function (a) {
        return a.G || (a.G = ":" + (a.ya.a++).toString(36))
    };
    Mk.prototype.getElement = function () {
        return this.a
    };
    var Ok = function (a) {
            a.s || (a.s = new O(a));
            return A(a.s)
        },
        Pk = function (a, b) {
            if (a == b) throw Error("Unable to set parent component");
            var c;
            if (c = b && a.j && a.G) {
                c = a.j;
                var d = a.G;
                c = c.l && d ? Qb(c.l, d) || null : null
            }
            if (c && a.j != b) throw Error("Unable to set parent component");
            a.j = b;
            Mk.o.zb.call(a, b)
        };
    Mk.prototype.zb = function (a) {
        if (this.j && this.j != a) throw Error("Method not supported");
        Mk.o.zb.call(this, a)
    };
    Mk.prototype.$ = function () {
        this.a = Dd(this.ga, "DIV")
    };
    var Qk = function (a, b, c) {
        if (a.la) throw Error("Component already rendered");
        a.a || a.$();
        b ? b.insertBefore(a.a, c || null) : a.ga.a.body.appendChild(a.a);
        a.j && !a.j.la || a.X()
    };
    Mk.prototype.X = function () {
        this.la = !0;
        Rk(this, function (a) {
            !a.la && a.getElement() && a.X()
        })
    };
    var Sk = function (a) {
        Rk(a, function (b) {
            b.la && Sk(b)
        });
        a.s && vh(a.s);
        a.la = !1
    };
    Mk.prototype.v = function () {
        this.la && Sk(this);
        this.s && (this.s.dispose(), delete this.s);
        Rk(this, function (a) {
            a.dispose()
        });
        this.a && Ad(this.a);
        this.j = this.a = this.l = this.b = null;
        Mk.o.v.call(this)
    };
    var Tk = function (a, b) {
        var c = a.b ? a.b.length : 0;
        A(!!b, "Provided element must not be null.");
        if (b.la) throw Error("Component already rendered");
        if (0 > c || c > (a.b ? a.b.length : 0)) throw Error("Child component index out of bounds");
        a.l && a.b || (a.l = {}, a.b = []);
        if (b.j == a) {
            var d = Nk(b);
            a.l[d] = b;
            ib(a.b, b)
        } else {
            d = a.l;
            var e = Nk(b);
            if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
            d[e] = b
        }
        Pk(b, a);
        nb(a.b, c, 0, b);
        b.la && a.la && b.j == a ? (a = a.ka(), c = a.childNodes[c] || null, c != b.getElement() && a.insertBefore(b.getElement(),
            c)) : (a.a || a.$(), c = a.b ? a.b[c + 1] || null : null, Qk(b, a.ka(), c ? c.a : null))
    };
    Mk.prototype.ka = function () {
        return this.a
    };
    var Rk = function (a, b) {
        a.b && B(a.b, b, void 0)
    };
    Mk.prototype.removeChild = function (a, b) {
        if (a) {
            var c = q(a) ? a : Nk(a);
            a = this.l && c ? Qb(this.l, c) || null : null;
            if (c && a) {
                var d = this.l;
                c in d && delete d[c];
                ib(this.b, a);
                b && (Sk(a), a.a && Ad(a.a));
                Pk(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Uk = function (a) {
        for (var b = []; a.b && 0 != a.b.length;) b.push(a.removeChild(a.b ? a.b[0] || null : null, !0))
    };
})();
export const Enabler = Enabler