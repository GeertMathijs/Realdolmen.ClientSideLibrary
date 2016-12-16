﻿/*!
 * Knockout JavaScript library v3.4.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
    (function (n) {
        var x = this || (0, eval)("this"), s = x.document, M = x.navigator, u = x.jQuery, F = x.JSON; (function (n) { "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(x.ko = {}) })(function (N, O) {
            function J(a, c) { return null === a || typeof a in R ? a === c : !1 } function S(b, c) { var d; return function () { d || (d = a.a.setTimeout(function () { d = n; b() }, c)) } } function T(b, c) { var d; return function () { clearTimeout(d); d = a.a.setTimeout(b, c) } } function U(a,
            c) { c && c !== I ? "beforeChange" === c ? this.Lb(a) : this.Ha(a, c) : this.Mb(a) } function V(a, c) { null !== c && c.k && c.k() } function W(a, c) { var d = this.Ic, e = d[t]; e.S || (this.lb && this.Ma[c] ? (d.Qb(c, a, this.Ma[c]), this.Ma[c] = null, --this.lb) : e.r[c] || d.Qb(c, a, e.s ? { ia: a } : d.wc(a))) } function K(b, c, d, e) {
                a.d[b] = { init: function (b, g, h, l, m) { var k, r; a.m(function () { var q = g(), p = a.a.c(q), p = !d !== !p, A = !r; if (A || c || p !== k) A && a.va.Aa() && (r = a.a.ua(a.f.childNodes(b), !0)), p ? (A || a.f.da(b, a.a.ua(r)), a.eb(e ? e(m, q) : m, b)) : a.f.xa(b), k = p }, null, { i: b }); return { controlsDescendantBindings: !0 } } };
                a.h.ta[b] = !1; a.f.Z[b] = !0
            } var a = "undefined" !== typeof N ? N : {}; a.b = function (b, c) { for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]]; e[d[d.length - 1]] = c }; a.G = function (a, c, d) { a[c] = d }; a.version = "3.4.1"; a.b("version", a.version); a.options = { deferUpdates: !1, useOnlyNativeEvents: !1 }; a.a = function () {
                function b(a, b) { for (var c in a) a.hasOwnProperty(c) && b(c, a[c]) } function c(a, b) { if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]); return a } function d(a, b) { a.__proto__ = b; return a } function e(b, c, d, e) {
                    var k = b[c].match(r) ||
                    []; a.a.q(d.match(r), function (b) { a.a.pa(k, b, e) }); b[c] = k.join(" ")
                } var f = { __proto__: [] } instanceof Array, g = "function" === typeof Symbol, h = {}, l = {}; h[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "); b(h, function (a, b) { if (b.length) for (var c = 0, d = b.length; c < d; c++) l[b[c]] = a }); var m = { propertychange: !0 }, k = s && function () {
                    for (var a = 3, b = s.createElement("div"), c =
                    b.getElementsByTagName("i") ; b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];); return 4 < a ? a : n
                }(), r = /\S+/g; return {
                    ec: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], q: function (a, b) { for (var c = 0, d = a.length; c < d; c++) b(a[c], c) }, o: function (a, b) { if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b); for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c; return -1 }, Tb: function (a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d)) return a[d];
                        return null
                    }, La: function (b, c) { var d = a.a.o(b, c); 0 < d ? b.splice(d, 1) : 0 === d && b.shift() }, Ub: function (b) { b = b || []; for (var c = [], d = 0, e = b.length; d < e; d++) 0 > a.a.o(c, b[d]) && c.push(b[d]); return c }, fb: function (a, b) { a = a || []; for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d)); return c }, Ka: function (a, b) { a = a || []; for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]); return c }, ra: function (a, b) { if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]); return a }, pa: function (b, c, d) {
                        var e =
                        a.a.o(a.a.zb(b), c); 0 > e ? d && b.push(c) : d || b.splice(e, 1)
                    }, ka: f, extend: c, Xa: d, Ya: f ? d : c, D: b, Ca: function (a, b) { if (!a) return a; var c = {}, d; for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a)); return c }, ob: function (b) { for (; b.firstChild;) a.removeNode(b.firstChild) }, lc: function (b) { b = a.a.V(b); for (var c = (b[0] && b[0].ownerDocument || s).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.$(b[d])); return c }, ua: function (b, c) { for (var d = 0, e = b.length, k = []; d < e; d++) { var m = b[d].cloneNode(!0); k.push(c ? a.$(m) : m) } return k },
                    da: function (b, c) { a.a.ob(b); if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d]) }, sc: function (b, c) { var d = b.nodeType ? [b] : b; if (0 < d.length) { for (var e = d[0], k = e.parentNode, m = 0, f = c.length; m < f; m++) k.insertBefore(c[m], e); m = 0; for (f = d.length; m < f; m++) a.removeNode(d[m]) } }, za: function (a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1); for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--; if (1 < a.length) {
                                var c = a[0], d = a[a.length - 1]; for (a.length = 0; c !== d;) a.push(c),
                                c = c.nextSibling; a.push(d)
                            }
                        } return a
                    }, uc: function (a, b) { 7 > k ? a.setAttribute("selected", b) : a.selected = b }, $a: function (a) { return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") }, od: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b }, Nc: function (a, b) {
                        if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16); for (; a && a !=
                        b;) a = a.parentNode; return !!a
                    }, nb: function (b) { return a.a.Nc(b, b.ownerDocument.documentElement) }, Rb: function (b) { return !!a.a.Tb(b, a.a.nb) }, A: function (a) { return a && a.tagName && a.tagName.toLowerCase() }, Xb: function (b) { return a.onError ? function () { try { return b.apply(this, arguments) } catch (c) { throw a.onError && a.onError(c), c; } } : b }, setTimeout: function (b, c) { return setTimeout(a.a.Xb(b), c) }, bc: function (b) { setTimeout(function () { a.onError && a.onError(b); throw b; }, 0) }, p: function (b, c, d) {
                        var e = a.a.Xb(d); d = k && m[c]; if (a.options.useOnlyNativeEvents ||
                        d || !u) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) { var f = function (a) { e.call(b, a) }, l = "on" + c; b.attachEvent(l, f); a.a.F.oa(b, function () { b.detachEvent(l, f) }) } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else u(b).bind(c, e)
                    }, Da: function (b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent"); var d; "input" === a.a.A(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" ==
                        d || "radio" == d) : d = !1; if (a.options.useOnlyNativeEvents || !u || d) if ("function" == typeof s.createEvent) if ("function" == typeof b.dispatchEvent) d = s.createEvent(l[c] || "HTMLEvents"), d.initEvent(c, !0, !0, x, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events"); else u(b).trigger(c)
                    }, c: function (b) {
                        return a.H(b) ?
                        b() : b
                    }, zb: function (b) { return a.H(b) ? b.t() : b }, bb: function (b, c, d) { var k; c && ("object" === typeof b.classList ? (k = b.classList[d ? "add" : "remove"], a.a.q(c.match(r), function (a) { k.call(b.classList, a) })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d)) }, Za: function (b, c) { var d = a.a.c(c); if (null === d || d === n) d = ""; var e = a.f.firstChild(b); !e || 3 != e.nodeType || a.f.nextSibling(e) ? a.f.da(b, [b.ownerDocument.createTextNode(d)]) : e.data = d; a.a.Sc(b) }, tc: function (a, b) {
                        a.name = b; if (7 >= k) try {
                            a.mergeAttributes(s.createElement("<input name='" +
                            a.name + "'/>"), !1)
                        } catch (c) { }
                    }, Sc: function (a) { 9 <= k && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, Oc: function (a) { if (k) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, jd: function (b, c) { b = a.a.c(b); c = a.a.c(c); for (var d = [], e = b; e <= c; e++) d.push(e); return d }, V: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]); return b }, $b: function (a) { return g ? Symbol(a) : a }, sd: 6 === k, ud: 7 === k, C: k, gc: function (b, c) {
                        for (var d = a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))),
                        e = "string" == typeof c ? function (a) { return a.name === c } : function (a) { return c.test(a.name) }, k = [], m = d.length - 1; 0 <= m; m--) e(d[m]) && k.push(d[m]); return k
                    }, fd: function (b) { return "string" == typeof b && (b = a.a.$a(b)) ? F && F.parse ? F.parse(b) : (new Function("return " + b))() : null }, Eb: function (b, c, d) {
                        if (!F || !F.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return F.stringify(a.a.c(b), c, d)
                    }, gd: function (c, d, e) {
                        e = e || {}; var k = e.params || {}, m = e.includeFields || this.ec, f = c; if ("object" == typeof c && "form" === a.a.A(c)) for (var f = c.action, l = m.length - 1; 0 <= l; l--) for (var g = a.a.gc(c, m[l]), h = g.length - 1; 0 <= h; h--) k[g[h].name] = g[h].value; d = a.a.c(d); var r = s.createElement("form"); r.style.display = "none"; r.action = f; r.method = "post"; for (var n in d) c = s.createElement("input"), c.type = "hidden", c.name = n, c.value = a.a.Eb(a.a.c(d[n])), r.appendChild(c); b(k, function (a, b) {
                            var c = s.createElement("input");
                            c.type = "hidden"; c.name = a; c.value = b; r.appendChild(c)
                        }); s.body.appendChild(r); e.submitter ? e.submitter(r) : r.submit(); setTimeout(function () { r.parentNode.removeChild(r) }, 0)
                    }
                }
            }(); a.b("utils", a.a); a.b("utils.arrayForEach", a.a.q); a.b("utils.arrayFirst", a.a.Tb); a.b("utils.arrayFilter", a.a.Ka); a.b("utils.arrayGetDistinctValues", a.a.Ub); a.b("utils.arrayIndexOf", a.a.o); a.b("utils.arrayMap", a.a.fb); a.b("utils.arrayPushAll", a.a.ra); a.b("utils.arrayRemoveItem", a.a.La); a.b("utils.extend", a.a.extend); a.b("utils.fieldsIncludedWithJsonPost",
            a.a.ec); a.b("utils.getFormFields", a.a.gc); a.b("utils.peekObservable", a.a.zb); a.b("utils.postJson", a.a.gd); a.b("utils.parseJson", a.a.fd); a.b("utils.registerEventHandler", a.a.p); a.b("utils.stringifyJson", a.a.Eb); a.b("utils.range", a.a.jd); a.b("utils.toggleDomNodeCssClass", a.a.bb); a.b("utils.triggerEvent", a.a.Da); a.b("utils.unwrapObservable", a.a.c); a.b("utils.objectForEach", a.a.D); a.b("utils.addOrRemoveItem", a.a.pa); a.b("utils.setTextContent", a.a.Za); a.b("unwrap", a.a.c); Function.prototype.bind || (Function.prototype.bind =
            function (a) { var c = this; if (1 === arguments.length) return function () { return c.apply(a, arguments) }; var d = Array.prototype.slice.call(arguments, 1); return function () { var e = d.slice(0); e.push.apply(e, arguments); return c.apply(a, e) } }); a.a.e = new function () {
                function a(b, g) { var h = b[d]; if (!h || "null" === h || !e[h]) { if (!g) return n; h = b[d] = "ko" + c++; e[h] = {} } return e[h] } var c = 0, d = "__ko__" + (new Date).getTime(), e = {}; return {
                    get: function (c, d) { var e = a(c, !1); return e === n ? n : e[d] }, set: function (c, d, e) {
                        if (e !== n || a(c, !1) !== n) a(c, !0)[d] =
                        e
                    }, clear: function (a) { var b = a[d]; return b ? (delete e[b], a[d] = null, !0) : !1 }, I: function () { return c++ + d }
                }
            }; a.b("utils.domData", a.a.e); a.b("utils.domData.clear", a.a.e.clear); a.a.F = new function () {
                function b(b, c) { var e = a.a.e.get(b, d); e === n && c && (e = [], a.a.e.set(b, d, e)); return e } function c(d) { var e = b(d, !1); if (e) for (var e = e.slice(0), l = 0; l < e.length; l++) e[l](d); a.a.e.clear(d); a.a.F.cleanExternalData(d); if (f[d.nodeType]) for (e = d.firstChild; d = e;) e = d.nextSibling, 8 === d.nodeType && c(d) } var d = a.a.e.I(), e = { 1: !0, 8: !0, 9: !0 },
                f = { 1: !0, 9: !0 }; return { oa: function (a, c) { if ("function" != typeof c) throw Error("Callback must be a function"); b(a, !0).push(c) }, rc: function (c, e) { var l = b(c, !1); l && (a.a.La(l, e), 0 == l.length && a.a.e.set(c, d, n)) }, $: function (b) { if (e[b.nodeType] && (c(b), f[b.nodeType])) { var d = []; a.a.ra(d, b.getElementsByTagName("*")); for (var l = 0, m = d.length; l < m; l++) c(d[l]) } return b }, removeNode: function (b) { a.$(b); b.parentNode && b.parentNode.removeChild(b) }, cleanExternalData: function (a) { u && "function" == typeof u.cleanData && u.cleanData([a]) } }
            };
            a.$ = a.a.F.$; a.removeNode = a.a.F.removeNode; a.b("cleanNode", a.$); a.b("removeNode", a.removeNode); a.b("utils.domNodeDisposal", a.a.F); a.b("utils.domNodeDisposal.addDisposeCallback", a.a.F.oa); a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.F.rc); (function () {
                var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e },
                g = 8 >= a.a.C; a.a.ma = function (c, d) {
                    var e; if (u) if (u.parseHTML) e = u.parseHTML(c, d) || []; else { if ((e = u.clean([c], d)) && e[0]) { for (var k = e[0]; k.parentNode && 11 !== k.parentNode.nodeType;) k = k.parentNode; k.parentNode && k.parentNode.removeChild(k) } } else {
                        (e = d) || (e = s); var k = e.parentWindow || e.defaultView || x, r = a.a.$a(c).toLowerCase(), q = e.createElement("div"), p; p = (r = r.match(/^<([a-z]+)[ >]/)) && f[r[1]] || b; r = p[0]; p = "ignored<div>" + p[1] + c + p[2] + "</div>"; "function" == typeof k.innerShiv ? q.appendChild(k.innerShiv(p)) : (g && e.appendChild(q),
                        q.innerHTML = p, g && q.parentNode.removeChild(q)); for (; r--;) q = q.lastChild; e = a.a.V(q.lastChild.childNodes)
                    } return e
                }; a.a.Cb = function (b, c) { a.a.ob(b); c = a.a.c(c); if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), u) u(b).html(c); else for (var d = a.a.ma(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e]) }
            })(); a.b("utils.parseHtmlFragment", a.a.ma); a.b("utils.setHtml", a.a.Cb); a.M = function () {
                function b(c, e) {
                    if (c) if (8 == c.nodeType) { var f = a.M.nc(c.nodeValue); null != f && e.push({ Mc: c, dd: f }) } else if (1 == c.nodeType) for (var f =
                    0, g = c.childNodes, h = g.length; f < h; f++) b(g[f], e)
                } var c = {}; return {
                    wb: function (a) { if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); c[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e" }, zc: function (a, b) {
                        var f = c[a]; if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try {
                            return f.apply(null, b || []),
                            !0
                        } finally { delete c[a] }
                    }, Ac: function (c, e) { var f = []; b(c, f); for (var g = 0, h = f.length; g < h; g++) { var l = f[g].Mc, m = [l]; e && a.a.ra(m, e); a.M.zc(f[g].dd, m); l.nodeValue = ""; l.parentNode && l.parentNode.removeChild(l) } }, nc: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null }
                }
            }(); a.b("memoization", a.M); a.b("memoization.memoize", a.M.wb); a.b("memoization.unmemoize", a.M.zc); a.b("memoization.parseMemoText", a.M.nc); a.b("memoization.unmemoizeDomNodeAndDescendants", a.M.Ac); a.Y = function () {
                function b() {
                    if (e) for (var b =
                    e, c = 0, m; g < e;) if (m = d[g++]) { if (g > b) { if (5E3 <= ++c) { g = e; a.a.bc(Error("'Too much recursion' after processing " + c + " task groups.")); break } b = e } try { m() } catch (k) { a.a.bc(k) } }
                } function c() { b(); g = e = d.length = 0 } var d = [], e = 0, f = 1, g = 0; return {
                    scheduler: x.MutationObserver ? function (a) { var b = s.createElement("div"); (new MutationObserver(a)).observe(b, { attributes: !0 }); return function () { b.classList.toggle("foo") } }(c) : s && "onreadystatechange" in s.createElement("script") ? function (a) {
                        var b = s.createElement("script"); b.onreadystatechange =
                        function () { b.onreadystatechange = null; s.documentElement.removeChild(b); b = null; a() }; s.documentElement.appendChild(b)
                    } : function (a) { setTimeout(a, 0) }, Wa: function (b) { e || a.Y.scheduler(c); d[e++] = b; return f++ }, cancel: function (a) { a -= f - e; a >= g && a < e && (d[a] = null) }, resetForTesting: function () { var a = e - g; g = e = d.length = 0; return a }, nd: b
                }
            }(); a.b("tasks", a.Y); a.b("tasks.schedule", a.Y.Wa); a.b("tasks.runEarly", a.Y.nd); a.ya = {
                throttle: function (b, c) {
                    b.throttleEvaluation = c; var d = null; return a.B({
                        read: b, write: function (e) {
                            clearTimeout(d);
                            d = a.a.setTimeout(function () { b(e) }, c)
                        }
                    })
                }, rateLimit: function (a, c) { var d, e, f; "number" == typeof c ? d = c : (d = c.timeout, e = c.method); a.cb = !1; f = "notifyWhenChangesStop" == e ? T : S; a.Ta(function (a) { return f(a, d) }) }, deferred: function (b, c) { if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."); b.cb || (b.cb = !0, b.Ta(function (c) { var e; return function () { a.Y.cancel(e); e = a.Y.Wa(c); b.notifySubscribers(n, "dirty") } })) }, notify: function (a, c) {
                    a.equalityComparer =
                    "always" == c ? null : J
                }
            }; var R = { undefined: 1, "boolean": 1, number: 1, string: 1 }; a.b("extenders", a.ya); a.xc = function (b, c, d) { this.ia = b; this.gb = c; this.Lc = d; this.S = !1; a.G(this, "dispose", this.k) }; a.xc.prototype.k = function () { this.S = !0; this.Lc() }; a.J = function () { a.a.Ya(this, D); D.rb(this) }; var I = "change", D = {
                rb: function (a) { a.K = {}; a.Ob = 1 }, X: function (b, c, d) { var e = this; d = d || I; var f = new a.xc(e, c ? b.bind(c) : b, function () { a.a.La(e.K[d], f); e.Ia && e.Ia(d) }); e.sa && e.sa(d); e.K[d] || (e.K[d] = []); e.K[d].push(f); return f }, notifySubscribers: function (b,
                c) { c = c || I; c === I && this.Ib(); if (this.Pa(c)) try { a.l.Vb(); for (var d = this.K[c].slice(0), e = 0, f; f = d[e]; ++e) f.S || f.gb(b) } finally { a.l.end() } }, Na: function () { return this.Ob }, Vc: function (a) { return this.Na() !== a }, Ib: function () { ++this.Ob }, Ta: function (b) { var c = this, d = a.H(c), e, f, g; c.Ha || (c.Ha = c.notifySubscribers, c.notifySubscribers = U); var h = b(function () { c.Nb = !1; d && g === c && (g = c()); e = !1; c.tb(f, g) && c.Ha(f = g) }); c.Mb = function (a) { c.Nb = e = !0; g = a; h() }; c.Lb = function (a) { e || (f = a, c.Ha(a, "beforeChange")) } }, Pa: function (a) {
                    return this.K[a] &&
                    this.K[a].length
                }, Tc: function (b) { if (b) return this.K[b] && this.K[b].length || 0; var c = 0; a.a.D(this.K, function (a, b) { "dirty" !== a && (c += b.length) }); return c }, tb: function (a, c) { return !this.equalityComparer || !this.equalityComparer(a, c) }, extend: function (b) { var c = this; b && a.a.D(b, function (b, e) { var f = a.ya[b]; "function" == typeof f && (c = f(c, e) || c) }); return c }
            }; a.G(D, "subscribe", D.X); a.G(D, "extend", D.extend); a.G(D, "getSubscriptionsCount", D.Tc); a.a.ka && a.a.Xa(D, Function.prototype); a.J.fn = D; a.jc = function (a) {
                return null !=
                a && "function" == typeof a.X && "function" == typeof a.notifySubscribers
            }; a.b("subscribable", a.J); a.b("isSubscribable", a.jc); a.va = a.l = function () { function b(a) { d.push(e); e = a } function c() { e = d.pop() } var d = [], e, f = 0; return { Vb: b, end: c, qc: function (b) { if (e) { if (!a.jc(b)) throw Error("Only subscribable things can act as dependencies"); e.gb.call(e.Hc, b, b.Dc || (b.Dc = ++f)) } }, w: function (a, d, e) { try { return b(), a.apply(d, e || []) } finally { c() } }, Aa: function () { if (e) return e.m.Aa() }, Sa: function () { if (e) return e.Sa } } }(); a.b("computedContext",
            a.va); a.b("computedContext.getDependenciesCount", a.va.Aa); a.b("computedContext.isInitial", a.va.Sa); a.b("ignoreDependencies", a.rd = a.l.w); var E = a.a.$b("_latestValue"); a.N = function (b) { function c() { if (0 < arguments.length) return c.tb(c[E], arguments[0]) && (c.ga(), c[E] = arguments[0], c.fa()), this; a.l.qc(c); return c[E] } c[E] = b; a.a.ka || a.a.extend(c, a.J.fn); a.J.fn.rb(c); a.a.Ya(c, B); a.options.deferUpdates && a.ya.deferred(c, !0); return c }; var B = {
                equalityComparer: J, t: function () { return this[E] }, fa: function () { this.notifySubscribers(this[E]) },
                ga: function () { this.notifySubscribers(this[E], "beforeChange") }
            }; a.a.ka && a.a.Xa(B, a.J.fn); var H = a.N.hd = "__ko_proto__"; B[H] = a.N; a.Oa = function (b, c) { return null === b || b === n || b[H] === n ? !1 : b[H] === c ? !0 : a.Oa(b[H], c) }; a.H = function (b) { return a.Oa(b, a.N) }; a.Ba = function (b) { return "function" == typeof b && b[H] === a.N || "function" == typeof b && b[H] === a.B && b.Wc ? !0 : !1 }; a.b("observable", a.N); a.b("isObservable", a.H); a.b("isWriteableObservable", a.Ba); a.b("isWritableObservable", a.Ba); a.b("observable.fn", B); a.G(B, "peek", B.t); a.G(B,
            "valueHasMutated", B.fa); a.G(B, "valueWillMutate", B.ga); a.la = function (b) { b = b || []; if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.N(b); a.a.Ya(b, a.la.fn); return b.extend({ trackArrayChanges: !0 }) }; a.la.fn = {
                remove: function (b) {
                    for (var c = this.t(), d = [], e = "function" != typeof b || a.H(b) ? function (a) { return a === b } : b, f = 0; f < c.length; f++) { var g = c[f]; e(g) && (0 === d.length && this.ga(), d.push(g), c.splice(f, 1), f--) } d.length &&
                    this.fa(); return d
                }, removeAll: function (b) { if (b === n) { var c = this.t(), d = c.slice(0); this.ga(); c.splice(0, c.length); this.fa(); return d } return b ? this.remove(function (c) { return 0 <= a.a.o(b, c) }) : [] }, destroy: function (b) { var c = this.t(), d = "function" != typeof b || a.H(b) ? function (a) { return a === b } : b; this.ga(); for (var e = c.length - 1; 0 <= e; e--) d(c[e]) && (c[e]._destroy = !0); this.fa() }, destroyAll: function (b) { return b === n ? this.destroy(function () { return !0 }) : b ? this.destroy(function (c) { return 0 <= a.a.o(b, c) }) : [] }, indexOf: function (b) {
                    var c =
                    this(); return a.a.o(c, b)
                }, replace: function (a, c) { var d = this.indexOf(a); 0 <= d && (this.ga(), this.t()[d] = c, this.fa()) }
            }; a.a.ka && a.a.Xa(a.la.fn, a.N.fn); a.a.q("pop push reverse shift sort splice unshift".split(" "), function (b) { a.la.fn[b] = function () { var a = this.t(); this.ga(); this.Wb(a, b, arguments); var d = a[b].apply(a, arguments); this.fa(); return d === a ? this : d } }); a.a.q(["slice"], function (b) { a.la.fn[b] = function () { var a = this(); return a[b].apply(a, arguments) } }); a.b("observableArray", a.la); a.ya.trackArrayChanges = function (b,
            c) {
                function d() { if (!e) { e = !0; l = b.notifySubscribers; b.notifySubscribers = function (a, b) { b && b !== I || ++h; return l.apply(this, arguments) }; var c = [].concat(b.t() || []); f = null; g = b.X(function (d) { d = [].concat(d || []); if (b.Pa("arrayChange")) { var e; if (!f || 1 < h) f = a.a.ib(c, d, b.hb); e = f } c = d; f = null; h = 0; e && e.length && b.notifySubscribers(e, "arrayChange") }) } } b.hb = {}; c && "object" == typeof c && a.a.extend(b.hb, c); b.hb.sparse = !0; if (!b.Wb) {
                    var e = !1, f = null, g, h = 0, l, m = b.sa, k = b.Ia; b.sa = function (a) { m && m.call(b, a); "arrayChange" === a && d() };
                    b.Ia = function (a) { k && k.call(b, a); "arrayChange" !== a || b.Pa("arrayChange") || (l && (b.notifySubscribers = l, l = n), g.k(), e = !1) }; b.Wb = function (b, c, d) {
                        function k(a, b, c) { return m[m.length] = { status: a, value: b, index: c } } if (e && !h) {
                            var m = [], l = b.length, g = d.length, G = 0; switch (c) {
                                case "push": G = l; case "unshift": for (c = 0; c < g; c++) k("added", d[c], G + c); break; case "pop": G = l - 1; case "shift": l && k("deleted", b[G], G); break; case "splice": c = Math.min(Math.max(0, 0 > d[0] ? l + d[0] : d[0]), l); for (var l = 1 === g ? l : Math.min(c + (d[1] || 0), l), g = c + g - 2, G = Math.max(l,
                                g), n = [], s = [], w = 2; c < G; ++c, ++w) c < l && s.push(k("deleted", b[c], c)), c < g && n.push(k("added", d[w], c)); a.a.fc(s, n); break; default: return
                            } f = m
                        }
                    }
                }
            }; var t = a.a.$b("_state"); a.m = a.B = function (b, c, d) {
                function e() { if (0 < arguments.length) { if ("function" === typeof f) f.apply(g.pb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."); return this } a.l.qc(e); (g.T || g.s && e.Qa()) && e.aa(); return g.U } "object" === typeof b ?
                d = b : (d = d || {}, b && (d.read = b)); if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed"); var f = d.write, g = { U: n, T: !0, Ra: !1, Fb: !1, S: !1, Va: !1, s: !1, kd: d.read, pb: c || d.owner, i: d.disposeWhenNodeIsRemoved || d.i || null, wa: d.disposeWhen || d.wa, mb: null, r: {}, L: 0, dc: null }; e[t] = g; e.Wc = "function" === typeof f; a.a.ka || a.a.extend(e, a.J.fn); a.J.fn.rb(e); a.a.Ya(e, z); d.pure ? (g.Va = !0, g.s = !0, a.a.extend(e, Y)) : d.deferEvaluation && a.a.extend(e, Z); a.options.deferUpdates && a.ya.deferred(e, !0);
                g.i && (g.Fb = !0, g.i.nodeType || (g.i = null)); g.s || d.deferEvaluation || e.aa(); g.i && e.ba() && a.a.F.oa(g.i, g.mb = function () { e.k() }); return e
            }; var z = {
                equalityComparer: J, Aa: function () { return this[t].L }, Qb: function (a, c, d) { if (this[t].Va && c === this) throw Error("A 'pure' computed must not be called recursively"); this[t].r[a] = d; d.Ga = this[t].L++; d.na = c.Na() }, Qa: function () { var a, c, d = this[t].r; for (a in d) if (d.hasOwnProperty(a) && (c = d[a], c.ia.Vc(c.na))) return !0 }, cd: function () { this.Fa && !this[t].Ra && this.Fa() }, ba: function () {
                    return this[t].T ||
                    0 < this[t].L
                }, md: function () { this.Nb || this.cc() }, wc: function (a) { if (a.cb && !this[t].i) { var c = a.X(this.cd, this, "dirty"), d = a.X(this.md, this); return { ia: a, k: function () { c.k(); d.k() } } } return a.X(this.cc, this) }, cc: function () { var b = this, c = b.throttleEvaluation; c && 0 <= c ? (clearTimeout(this[t].dc), this[t].dc = a.a.setTimeout(function () { b.aa(!0) }, c)) : b.Fa ? b.Fa() : b.aa(!0) }, aa: function (b) {
                    var c = this[t], d = c.wa, e = !1; if (!c.Ra && !c.S) {
                        if (c.i && !a.a.nb(c.i) || d && d()) { if (!c.Fb) { this.k(); return } } else c.Fb = !1; c.Ra = !0; try { e = this.Rc(b) } finally {
                            c.Ra =
                            !1
                        } c.L || this.k(); return e
                    }
                }, Rc: function (b) { var c = this[t], d = !1, e = c.Va ? n : !c.L, f = { Ic: this, Ma: c.r, lb: c.L }; a.l.Vb({ Hc: f, gb: W, m: this, Sa: e }); c.r = {}; c.L = 0; f = this.Qc(c, f); this.tb(c.U, f) && (c.s || this.notifySubscribers(c.U, "beforeChange"), c.U = f, c.s ? this.Ib() : b && this.notifySubscribers(c.U), d = !0); e && this.notifySubscribers(c.U, "awake"); return d }, Qc: function (b, c) { try { var d = b.kd; return b.pb ? d.call(b.pb) : d() } finally { a.l.end(), c.lb && !b.s && a.a.D(c.Ma, V), b.T = !1 } }, t: function () {
                    var a = this[t]; (a.T && !a.L || a.s && this.Qa()) &&
                    this.aa(); return a.U
                }, Ta: function (b) { a.J.fn.Ta.call(this, b); this.Fa = function () { this.Lb(this[t].U); this[t].T = !0; this.Mb(this) } }, k: function () { var b = this[t]; !b.s && b.r && a.a.D(b.r, function (a, b) { b.k && b.k() }); b.i && b.mb && a.a.F.rc(b.i, b.mb); b.r = null; b.L = 0; b.S = !0; b.T = !1; b.s = !1; b.i = null }
            }, Y = {
                sa: function (b) {
                    var c = this, d = c[t]; if (!d.S && d.s && "change" == b) {
                        d.s = !1; if (d.T || c.Qa()) d.r = null, d.L = 0, d.T = !0, c.aa() && c.Ib(); else {
                            var e = []; a.a.D(d.r, function (a, b) { e[b.Ga] = a }); a.a.q(e, function (a, b) {
                                var e = d.r[a], l = c.wc(e.ia); l.Ga =
                                b; l.na = e.na; d.r[a] = l
                            })
                        } d.S || c.notifySubscribers(d.U, "awake")
                    }
                }, Ia: function (b) { var c = this[t]; c.S || "change" != b || this.Pa("change") || (a.a.D(c.r, function (a, b) { b.k && (c.r[a] = { ia: b.ia, Ga: b.Ga, na: b.na }, b.k()) }), c.s = !0, this.notifySubscribers(n, "asleep")) }, Na: function () { var b = this[t]; b.s && (b.T || this.Qa()) && this.aa(); return a.J.fn.Na.call(this) }
            }, Z = { sa: function (a) { "change" != a && "beforeChange" != a || this.t() } }; a.a.ka && a.a.Xa(z, a.J.fn); var P = a.N.hd; a.m[P] = a.N; z[P] = a.m; a.Yc = function (b) { return a.Oa(b, a.m) }; a.Zc = function (b) {
                return a.Oa(b,
                a.m) && b[t] && b[t].Va
            }; a.b("computed", a.m); a.b("dependentObservable", a.m); a.b("isComputed", a.Yc); a.b("isPureComputed", a.Zc); a.b("computed.fn", z); a.G(z, "peek", z.t); a.G(z, "dispose", z.k); a.G(z, "isActive", z.ba); a.G(z, "getDependenciesCount", z.Aa); a.pc = function (b, c) { if ("function" === typeof b) return a.m(b, c, { pure: !0 }); b = a.a.extend({}, b); b.pure = !0; return a.m(b, c) }; a.b("pureComputed", a.pc); (function () {
                function b(a, f, g) {
                    g = g || new d; a = f(a); if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof
                    Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a; var h = a instanceof Array ? [] : {}; g.save(a, h); c(a, function (c) { var d = f(a[c]); switch (typeof d) { case "boolean": case "number": case "string": case "function": h[c] = d; break; case "object": case "undefined": var k = g.get(d); h[c] = k !== n ? k : b(d, f, g) } }); return h
                } function c(a, b) { if (a instanceof Array) { for (var c = 0; c < a.length; c++) b(c); "function" == typeof a.toJSON && b("toJSON") } else for (c in a) b(c) } function d() { this.keys = []; this.Jb = [] } a.yc = function (c) {
                    if (0 ==
                    arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.H(b) && 10 > c; c++) b = b(); return b })
                }; a.toJSON = function (b, c, d) { b = a.yc(b); return a.a.Eb(b, c, d) }; d.prototype = { save: function (b, c) { var d = a.a.o(this.keys, b); 0 <= d ? this.Jb[d] = c : (this.keys.push(b), this.Jb.push(c)) }, get: function (b) { b = a.a.o(this.keys, b); return 0 <= b ? this.Jb[b] : n } }
            })(); a.b("toJS", a.yc); a.b("toJSON", a.toJSON); (function () {
                a.j = {
                    u: function (b) {
                        switch (a.a.A(b)) {
                            case "option": return !0 ===
                            b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.xb) : 7 >= a.a.C ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value; case "select": return 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) : n; default: return b.value
                        }
                    }, ha: function (b, c, d) {
                        switch (a.a.A(b)) {
                            case "option": switch (typeof c) {
                                case "string": a.a.e.set(b, a.d.options.xb, n); "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__; b.value = c; break; default: a.a.e.set(b, a.d.options.xb, c),
                                b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""
                            } break; case "select": if ("" === c || null === c) c = n; for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.j.u(b.options[f]), h == c || "" == h && c === n) { e = f; break } if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e; break; default: if (null === c || c === n) c = ""; b.value = c
                        }
                    }
                }
            })(); a.b("selectExtensions", a.j); a.b("selectExtensions.readValue", a.j.u); a.b("selectExtensions.writeValue", a.j.ha); a.h = function () {
                function b(b) {
                    b = a.a.$a(b); 123 === b.charCodeAt(0) && (b = b.slice(1,
                    -1)); var c = [], d = b.match(e), r, h = [], p = 0; if (d) {
                        d.push(","); for (var A = 0, y; y = d[A]; ++A) {
                            var v = y.charCodeAt(0); if (44 === v) { if (0 >= p) { c.push(r && h.length ? { key: r, value: h.join("") } : { unknown: r || h.join("") }); r = p = 0; h = []; continue } } else if (58 === v) { if (!p && !r && 1 === h.length) { r = h.pop(); continue } } else 47 === v && A && 1 < y.length ? (v = d[A - 1].match(f)) && !g[v[0]] && (b = b.substr(b.indexOf(y) + 1), d = b.match(e), d.push(","), A = -1, y = "/") : 40 === v || 123 === v || 91 === v ? ++p : 41 === v || 125 === v || 93 === v ? --p : r || h.length || 34 !== v && 39 !== v || (y = y.slice(1, -1));
                            h.push(y)
                        }
                    } return c
                } var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {}; return {
                    ta: [], ea: h, yb: b, Ua: function (e, m) {
                        function k(b, e) {
                            var m; if (!A) {
                                var l = a.getBindingHandler(b); if (l && l.preprocess && !(e = l.preprocess(e, b, k))) return; if (l = h[b]) m = e, 0 <= a.a.o(c, m) ?
                                m = !1 : (l = m.match(d), m = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : m), l = m; l && g.push("'" + b + "':function(_z){" + m + "=_z}")
                            } p && (e = "function(){return " + e + " }"); f.push("'" + b + "':" + e)
                        } m = m || {}; var f = [], g = [], p = m.valueAccessors, A = m.bindingParams, y = "string" === typeof e ? b(e) : e; a.a.q(y, function (a) { k(a.key || a.unknown, a.value) }); g.length && k("_ko_property_writers", "{" + g.join(",") + " }"); return f.join(",")
                    }, bd: function (a, b) { for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0; return !1 }, Ea: function (b, c, d, e, f) {
                        if (b && a.H(b)) !a.Ba(b) ||
                        f && b.t() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
                    }
                }
            }(); a.b("expressionRewriting", a.h); a.b("expressionRewriting.bindingRewriteValidators", a.h.ta); a.b("expressionRewriting.parseObjectLiteral", a.h.yb); a.b("expressionRewriting.preProcessBindings", a.h.Ua); a.b("expressionRewriting._twoWayBindings", a.h.ea); a.b("jsonExpressionRewriting", a.h); a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ua); (function () {
                function b(a) { return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue) }
                function c(a) { return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue) } function d(a, d) { for (var e = a, f = 1, l = []; e = e.nextSibling;) { if (c(e) && (f--, 0 === f)) return l; l.push(e); b(e) && f++ } if (!d) throw Error("Cannot find closing comment tag to match: " + a.nodeValue); return null } function e(a, b) { var c = d(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null } var f = s && "\x3c!--test--\x3e" === s.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ :
                /^\s*\/ko\s*$/, l = { ul: !0, ol: !0 }; a.f = {
                    Z: {}, childNodes: function (a) { return b(a) ? d(a) : a.childNodes }, xa: function (c) { if (b(c)) { c = a.f.childNodes(c); for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d]) } else a.a.ob(c) }, da: function (c, d) { if (b(c)) { a.f.xa(c); for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++) e.parentNode.insertBefore(d[f], e) } else a.a.da(c, d) }, oc: function (a, c) { b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c) }, ic: function (c, d, e) {
                        e ? b(c) ? c.parentNode.insertBefore(d,
                        e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.f.oc(c, d)
                    }, firstChild: function (a) { return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild }, nextSibling: function (a) { b(a) && (a = e(a)); return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling }, Uc: b, qd: function (a) { return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null }, mc: function (d) {
                        if (l[a.a.A(d)]) {
                            var k = d.firstChild; if (k) {
                                do if (1 === k.nodeType) {
                                    var f; f = k.firstChild; var g = null; if (f) {
                                        do if (g) g.push(f); else if (b(f)) {
                                            var h =
                                            e(f, !0); h ? f = h : g = [f]
                                        } else c(f) && (g = [f]); while (f = f.nextSibling)
                                    } if (f = g) for (g = k.nextSibling, h = 0; h < f.length; h++) g ? d.insertBefore(f[h], g) : d.appendChild(f[h])
                                } while (k = k.nextSibling)
                            }
                        }
                    }
                }
            })(); a.b("virtualElements", a.f); a.b("virtualElements.allowedBindings", a.f.Z); a.b("virtualElements.emptyNode", a.f.xa); a.b("virtualElements.insertAfter", a.f.ic); a.b("virtualElements.prepend", a.f.oc); a.b("virtualElements.setDomNodeChildren", a.f.da); (function () {
                a.R = function () { this.Gc = {} }; a.a.extend(a.R.prototype, {
                    nodeHasBindings: function (b) {
                        switch (b.nodeType) {
                            case 1: return null !=
                            b.getAttribute("data-bind") || a.g.getComponentNameForNode(b); case 8: return a.f.Uc(b); default: return !1
                        }
                    }, getBindings: function (b, c) { var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null; return a.g.Pb(d, b, c, !1) }, getBindingAccessors: function (b, c) { var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: !0 }) : null; return a.g.Pb(d, b, c, !0) }, getBindingsString: function (b) { switch (b.nodeType) { case 1: return b.getAttribute("data-bind"); case 8: return a.f.qd(b); default: return null } },
                    parseBindingsString: function (b, c, d, e) { try { var f = this.Gc, g = b + (e && e.valueAccessors || ""), h; if (!(h = f[g])) { var l, m = "with($context){with($data||{}){return{" + a.h.Ua(b, e) + "}}}"; l = new Function("$context", "$element", m); h = f[g] = l } return h(c, d) } catch (k) { throw k.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + k.message, k; } }
                }); a.R.instance = new a.R
            })(); a.b("bindingProvider", a.R); (function () {
                function b(a) { return function () { return a } } function c(a) { return a() } function d(b) {
                    return a.a.Ca(a.l.w(b),
                    function (a, c) { return function () { return b()[c] } })
                } function e(c, e, k) { return "function" === typeof c ? d(c.bind(null, e, k)) : a.a.Ca(c, b) } function f(a, b) { return d(this.getBindings.bind(this, a, b)) } function g(b, c, d) { var e, k = a.f.firstChild(c), f = a.R.instance, m = f.preprocessNode; if (m) { for (; e = k;) k = a.f.nextSibling(e), m.call(f, e); k = a.f.firstChild(c) } for (; e = k;) k = a.f.nextSibling(e), h(b, e, d) } function h(b, c, d) {
                    var e = !0, k = 1 === c.nodeType; k && a.f.mc(c); if (k && d || a.R.instance.nodeHasBindings(c)) e = m(c, null, b, d).shouldBindDescendants;
                    e && !r[a.a.A(c)] && g(b, c, !k)
                } function l(b) { var c = [], d = {}, e = []; a.a.D(b, function X(k) { if (!d[k]) { var f = a.getBindingHandler(k); f && (f.after && (e.push(k), a.a.q(f.after, function (c) { if (b[c]) { if (-1 !== a.a.o(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", ")); X(c) } }), e.length--), c.push({ key: k, hc: f })); d[k] = !0 } }); return c } function m(b, d, e, k) {
                    var m = a.a.e.get(b, q); if (!d) {
                        if (m) throw Error("You cannot apply bindings multiple times to the same element."); a.a.e.set(b,
                        q, !0)
                    } !m && k && a.vc(b, e); var g; if (d && "function" !== typeof d) g = d; else { var h = a.R.instance, r = h.getBindingAccessors || f, p = a.B(function () { (g = d ? d(e, b) : r.call(h, b, e)) && e.P && e.P(); return g }, null, { i: b }); g && p.ba() || (p = null) } var s; if (g) {
                        var u = p ? function (a) { return function () { return c(p()[a]) } } : function (a) { return g[a] }, t = function () { return a.a.Ca(p ? p() : g, c) }; t.get = function (a) { return g[a] && c(u(a)) }; t.has = function (a) { return a in g }; k = l(g); a.a.q(k, function (c) {
                            var d = c.hc.init, k = c.hc.update, f = c.key; if (8 === b.nodeType && !a.f.Z[f]) throw Error("The binding '" +
                            f + "' cannot be used with virtual elements"); try { "function" == typeof d && a.l.w(function () { var a = d(b, u(f), t, e.$data, e); if (a && a.controlsDescendantBindings) { if (s !== n) throw Error("Multiple bindings (" + s + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."); s = f } }), "function" == typeof k && a.B(function () { k(b, u(f), t, e.$data, e) }, null, { i: b }) } catch (m) {
                                throw m.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + m.message,
                                m;
                            }
                        })
                    } return { shouldBindDescendants: s === n }
                } function k(b) { return b && b instanceof a.Q ? b : new a.Q(b) } a.d = {}; var r = { script: !0, textarea: !0, template: !0 }; a.getBindingHandler = function (b) { return a.d[b] }; a.Q = function (b, c, d, e, k) {
                    function f() { var k = g ? b() : b, m = a.a.c(k); c ? (c.P && c.P(), a.a.extend(l, c), l.P = r) : (l.$parents = [], l.$root = m, l.ko = a); l.$rawData = k; l.$data = m; d && (l[d] = m); e && e(l, c, m); return l.$data } function m() { return h && !a.a.Rb(h) } var l = this, g = "function" == typeof b && !a.H(b), h, r; k && k.exportDependencies ? f() : (r = a.B(f,
                    null, { wa: m, i: !0 }), r.ba() && (l.P = r, r.equalityComparer = null, h = [], r.Bc = function (b) { h.push(b); a.a.F.oa(b, function (b) { a.a.La(h, b); h.length || (r.k(), l.P = r = n) }) }))
                }; a.Q.prototype.createChildContext = function (b, c, d, e) { return new a.Q(b, this, c, function (a, b) { a.$parentContext = b; a.$parent = b.$data; a.$parents = (b.$parents || []).slice(0); a.$parents.unshift(a.$parent); d && d(a) }, e) }; a.Q.prototype.extend = function (b) {
                    return new a.Q(this.P || this.$data, this, null, function (c, d) {
                        c.$rawData = d.$rawData; a.a.extend(c, "function" == typeof b ?
                        b() : b)
                    })
                }; a.Q.prototype.Zb = function (a, b) { return this.createChildContext(a, b, null, { exportDependencies: !0 }) }; var q = a.a.e.I(), p = a.a.e.I(); a.vc = function (b, c) { if (2 == arguments.length) a.a.e.set(b, p, c), c.P && c.P.Bc(b); else return a.a.e.get(b, p) }; a.Ja = function (b, c, d) { 1 === b.nodeType && a.f.mc(b); return m(b, c, k(d), !0) }; a.Ec = function (b, c, d) { d = k(d); return a.Ja(b, e(c, d, b), d) }; a.eb = function (a, b) { 1 !== b.nodeType && 8 !== b.nodeType || g(k(a), b, !0) }; a.Sb = function (a, b) {
                    !u && x.jQuery && (u = x.jQuery); if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || x.document.body; h(k(a), b, !0)
                }; a.kb = function (b) { switch (b.nodeType) { case 1: case 8: var c = a.vc(b); if (c) return c; if (b.parentNode) return a.kb(b.parentNode) } return n }; a.Kc = function (b) { return (b = a.kb(b)) ? b.$data : n }; a.b("bindingHandlers", a.d); a.b("applyBindings", a.Sb); a.b("applyBindingsToDescendants", a.eb); a.b("applyBindingAccessorsToNode", a.Ja); a.b("applyBindingsToNode", a.Ec); a.b("contextFor", a.kb); a.b("dataFor", a.Kc)
            })(); (function (b) {
                function c(c, e) {
                    var m = f.hasOwnProperty(c) ? f[c] : b, k; m ? m.X(e) : (m = f[c] =
                    new a.J, m.X(e), d(c, function (b, d) { var e = !(!d || !d.synchronous); g[c] = { definition: b, $c: e }; delete f[c]; k || e ? m.notifySubscribers(b) : a.Y.Wa(function () { m.notifySubscribers(b) }) }), k = !0)
                } function d(a, b) { e("getConfig", [a], function (c) { c ? e("loadComponent", [a, c], function (a) { b(a, c) }) : b(null, null) }) } function e(c, d, f, k) {
                    k || (k = a.g.loaders.slice(0)); var g = k.shift(); if (g) {
                        var q = g[c]; if (q) {
                            var p = !1; if (q.apply(g, d.concat(function (a) { p ? f(null) : null !== a ? f(a) : e(c, d, f, k) })) !== b && (p = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, f, k)
                    } else f(null)
                } var f = {}, g = {}; a.g = { get: function (d, e) { var f = g.hasOwnProperty(d) ? g[d] : b; f ? f.$c ? a.l.w(function () { e(f.definition) }) : a.Y.Wa(function () { e(f.definition) }) : c(d, e) }, Yb: function (a) { delete g[a] }, Kb: e }; a.g.loaders = []; a.b("components", a.g); a.b("components.get", a.g.get); a.b("components.clearCachedDefinition", a.g.Yb)
            })(); (function () {
                function b(b, c, d, e) {
                    function g() { 0 === --y && e(h) } var h = {}, y = 2, v = d.template; d = d.viewModel; v ? f(c, v, function (c) {
                        a.g.Kb("loadTemplate", [b, c], function (a) {
                            h.template =
                            a; g()
                        })
                    }) : g(); d ? f(c, d, function (c) { a.g.Kb("loadViewModel", [b, c], function (a) { h[l] = a; g() }) }) : g()
                } function c(a, b, d) { if ("function" === typeof b) d(function (a) { return new b(a) }); else if ("function" === typeof b[l]) d(b[l]); else if ("instance" in b) { var e = b.instance; d(function () { return e }) } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b) } function d(b) { switch (a.a.A(b)) { case "script": return a.a.ma(b.text); case "textarea": return a.a.ma(b.value); case "template": if (e(b.content)) return a.a.ua(b.content.childNodes) } return a.a.ua(b.childNodes) }
                function e(a) { return x.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType } function f(a, b, c) { "string" === typeof b.require ? O || x.require ? (O || x.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b) } function g(a) { return function (b) { throw Error("Component '" + a + "': " + b); } } var h = {}; a.g.register = function (b, c) { if (!c) throw Error("Invalid configuration for " + b); if (a.g.ub(b)) throw Error("Component " + b + " is already registered"); h[b] = c }; a.g.ub = function (a) { return h.hasOwnProperty(a) };
                a.g.pd = function (b) { delete h[b]; a.g.Yb(b) }; a.g.ac = {
                    getConfig: function (a, b) { b(h.hasOwnProperty(a) ? h[a] : null) }, loadComponent: function (a, c, d) { var e = g(a); f(e, c, function (c) { b(a, e, c, d) }) }, loadTemplate: function (b, c, f) {
                        b = g(b); if ("string" === typeof c) f(a.a.ma(c)); else if (c instanceof Array) f(c); else if (e(c)) f(a.a.V(c.childNodes)); else if (c.element) if (c = c.element, x.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c)); else if ("string" === typeof c) {
                            var l = s.getElementById(c); l ? f(d(l)) : b("Cannot find element with ID " +
                            c)
                        } else b("Unknown element type: " + c); else b("Unknown template value: " + c)
                    }, loadViewModel: function (a, b, d) { c(g(a), b, d) }
                }; var l = "createViewModel"; a.b("components.register", a.g.register); a.b("components.isRegistered", a.g.ub); a.b("components.unregister", a.g.pd); a.b("components.defaultLoader", a.g.ac); a.g.loaders.push(a.g.ac); a.g.Cc = h
            })(); (function () {
                function b(b, e) {
                    var f = b.getAttribute("params"); if (f) {
                        var f = c.parseBindingsString(f, e, b, { valueAccessors: !0, bindingParams: !0 }), f = a.a.Ca(f, function (c) {
                            return a.m(c,
                            null, { i: b })
                        }), g = a.a.Ca(f, function (c) { var e = c.t(); return c.ba() ? a.m({ read: function () { return a.a.c(c()) }, write: a.Ba(e) && function (a) { c()(a) }, i: b }) : e }); g.hasOwnProperty("$raw") || (g.$raw = f); return g
                    } return { $raw: {} }
                } a.g.getComponentNameForNode = function (b) { var c = a.a.A(b); if (a.g.ub(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.C && b.tagName === c)) return c }; a.g.Pb = function (c, e, f, g) {
                    if (1 === e.nodeType) {
                        var h = a.g.getComponentNameForNode(e); if (h) {
                            c = c || {}; if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var l = { name: h, params: b(e, f) }; c.component = g ? function () { return l } : l
                        }
                    } return c
                }; var c = new a.R; 9 > a.a.C && (a.g.register = function (a) { return function (b) { s.createElement(b); return a.apply(this, arguments) } }(a.g.register), s.createDocumentFragment = function (b) { return function () { var c = b(), f = a.g.Cc, g; for (g in f) f.hasOwnProperty(g) && c.createElement(g); return c } }(s.createDocumentFragment))
            })(); (function (b) {
                function c(b, c, d) { c = c.template; if (!c) throw Error("Component '" + b + "' has no template"); b = a.a.ua(c); a.f.da(d, b) }
                function d(a, b, c, d) { var e = a.createViewModel; return e ? e.call(a, d, { element: b, templateNodes: c }) : d } var e = 0; a.d.component = {
                    init: function (f, g, h, l, m) {
                        function k() { var a = r && r.dispose; "function" === typeof a && a.call(r); q = r = null } var r, q, p = a.a.V(a.f.childNodes(f)); a.a.F.oa(f, k); a.m(function () {
                            var l = a.a.c(g()), h, v; "string" === typeof l ? h = l : (h = a.a.c(l.name), v = a.a.c(l.params)); if (!h) throw Error("No component name specified"); var n = q = ++e; a.g.get(h, function (e) {
                                if (q === n) {
                                    k(); if (!e) throw Error("Unknown component '" + h +
                                    "'"); c(h, e, f); var l = d(e, f, p, v); e = m.createChildContext(l, b, function (a) { a.$component = l; a.$componentTemplateNodes = p }); r = l; a.eb(e, f)
                                }
                            })
                        }, null, { i: f }); return { controlsDescendantBindings: !0 }
                    }
                }; a.f.Z.component = !0
            })(); var Q = { "class": "className", "for": "htmlFor" }; a.d.attr = {
                update: function (b, c) {
                    var d = a.a.c(c()) || {}; a.a.D(d, function (c, d) {
                        d = a.a.c(d); var g = !1 === d || null === d || d === n; g && b.removeAttribute(c); 8 >= a.a.C && c in Q ? (c = Q[c], g ? b.removeAttribute(c) : b[c] = d) : g || b.setAttribute(c, d.toString()); "name" === c && a.a.tc(b,
                        g ? "" : d.toString())
                    })
                }
            }; (function () {
                a.d.checked = {
                    after: ["value", "attr"], init: function (b, c, d) {
                        function e() { var e = b.checked, f = p ? g() : e; if (!a.va.Sa() && (!l || e)) { var h = a.l.w(c); if (k) { var m = r ? h.t() : h; q !== f ? (e && (a.a.pa(m, f, !0), a.a.pa(m, q, !1)), q = f) : a.a.pa(m, f, e); r && a.Ba(h) && h(m) } else a.h.Ea(h, d, "checked", f, !0) } } function f() { var d = a.a.c(c()); b.checked = k ? 0 <= a.a.o(d, g()) : h ? d : g() === d } var g = a.pc(function () { return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : d.has("value") ? a.a.c(d.get("value")) : b.value }), h =
                        "checkbox" == b.type, l = "radio" == b.type; if (h || l) { var m = c(), k = h && a.a.c(m) instanceof Array, r = !(k && m.push && m.splice), q = k ? g() : n, p = l || k; l && !b.name && a.d.uniqueName.init(b, function () { return !0 }); a.m(e, null, { i: b }); a.a.p(b, "click", e); a.m(f, null, { i: b }); m = n }
                    }
                }; a.h.ea.checked = !0; a.d.checkedValue = { update: function (b, c) { b.value = a.a.c(c()) } }
            })(); a.d.css = {
                update: function (b, c) {
                    var d = a.a.c(c()); null !== d && "object" == typeof d ? a.a.D(d, function (c, d) { d = a.a.c(d); a.a.bb(b, c, d) }) : (d = a.a.$a(String(d || "")), a.a.bb(b, b.__ko__cssValue,
                    !1), b.__ko__cssValue = d, a.a.bb(b, d, !0))
                }
            }; a.d.enable = { update: function (b, c) { var d = a.a.c(c()); d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0) } }; a.d.disable = { update: function (b, c) { a.d.enable.update(b, function () { return !a.a.c(c()) }) } }; a.d.event = {
                init: function (b, c, d, e, f) {
                    var g = c() || {}; a.a.D(g, function (g) {
                        "string" == typeof g && a.a.p(b, g, function (b) {
                            var m, k = c()[g]; if (k) {
                                try { var r = a.a.V(arguments); e = f.$data; r.unshift(e); m = k.apply(e, r) } finally {
                                    !0 !== m && (b.preventDefault ? b.preventDefault() :
                                    b.returnValue = !1)
                                } !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            }; a.d.foreach = {
                kc: function (b) { return function () { var c = b(), d = a.a.zb(c); if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.W.sb }; a.a.c(c); return { foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.W.sb } } }, init: function (b, c) {
                    return a.d.template.init(b,
                    a.d.foreach.kc(c))
                }, update: function (b, c, d, e, f) { return a.d.template.update(b, a.d.foreach.kc(c), d, e, f) }
            }; a.h.ta.foreach = !1; a.f.Z.foreach = !0; a.d.hasfocus = {
                init: function (b, c, d) {
                    function e(e) { b.__ko_hasfocusUpdating = !0; var f = b.ownerDocument; if ("activeElement" in f) { var g; try { g = f.activeElement } catch (k) { g = f.body } e = g === b } f = c(); a.h.Ea(f, d, "hasfocus", e, !0); b.__ko_hasfocusLastValue = e; b.__ko_hasfocusUpdating = !1 } var f = e.bind(null, !0), g = e.bind(null, !1); a.a.p(b, "focus", f); a.a.p(b, "focusin", f); a.a.p(b, "blur", g); a.a.p(b,
                    "focusout", g)
                }, update: function (b, c) { var d = !!a.a.c(c()); b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.l.w(a.a.Da, null, [b, d ? "focusin" : "focusout"])) }
            }; a.h.ea.hasfocus = !0; a.d.hasFocus = a.d.hasfocus; a.h.ea.hasFocus = !0; a.d.html = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Cb(b, c()) } }; K("if"); K("ifnot", !1, !0); K("with", !0, !1, function (a, c) { return a.Zb(c) }); var L = {}; a.d.options = {
                init: function (b) {
                    if ("select" !==
                    a.a.A(b)) throw Error("options binding applies only to SELECT elements"); for (; 0 < b.length;) b.remove(0); return { controlsDescendantBindings: !0 }
                }, update: function (b, c, d) {
                    function e() { return a.a.Ka(b.options, function (a) { return a.selected }) } function f(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c } function g(c, e) { if (A && k) a.j.ha(b, a.a.c(d.get("value")), !0); else if (p.length) { var f = 0 <= a.a.o(p, a.j.u(e[0])); a.a.uc(e[0], f); A && !f && a.l.w(a.a.Da, null, [b, "change"]) } } var h = b.multiple, l = 0 != b.length &&
                    h ? b.scrollTop : null, m = a.a.c(c()), k = d.get("valueAllowUnset") && d.has("value"), r = d.get("optionsIncludeDestroyed"); c = {}; var q, p = []; k || (h ? p = a.a.fb(e(), a.j.u) : 0 <= b.selectedIndex && p.push(a.j.u(b.options[b.selectedIndex]))); m && ("undefined" == typeof m.length && (m = [m]), q = a.a.Ka(m, function (b) { return r || b === n || null === b || !a.a.c(b._destroy) }), d.has("optionsCaption") && (m = a.a.c(d.get("optionsCaption")), null !== m && m !== n && q.unshift(L))); var A = !1; c.beforeRemove = function (a) { b.removeChild(a) }; m = g; d.has("optionsAfterRender") &&
                    "function" == typeof d.get("optionsAfterRender") && (m = function (b, c) { g(0, c); a.l.w(d.get("optionsAfterRender"), null, [c[0], b !== L ? b : n]) }); a.a.Bb(b, q, function (c, e, g) { g.length && (p = !k && g[0].selected ? [a.j.u(g[0])] : [], A = !0); e = b.ownerDocument.createElement("option"); c === L ? (a.a.Za(e, d.get("optionsCaption")), a.j.ha(e, n)) : (g = f(c, d.get("optionsValue"), c), a.j.ha(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Za(e, c)); return [e] }, c, m); a.l.w(function () {
                        k ? a.j.ha(b, a.a.c(d.get("value")), !0) : (h ? p.length && e().length < p.length :
                        p.length && 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) !== p[0] : p.length || 0 <= b.selectedIndex) && a.a.Da(b, "change")
                    }); a.a.Oc(b); l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l)
                }
            }; a.d.options.xb = a.a.e.I(); a.d.selectedOptions = {
                after: ["options", "foreach"], init: function (b, c, d) { a.a.p(b, "change", function () { var e = c(), f = []; a.a.q(b.getElementsByTagName("option"), function (b) { b.selected && f.push(a.j.u(b)) }); a.h.Ea(e, d, "selectedOptions", f) }) }, update: function (b, c) {
                    if ("select" != a.a.A(b)) throw Error("values binding applies only to SELECT elements");
                    var d = a.a.c(c()), e = b.scrollTop; d && "number" == typeof d.length && a.a.q(b.getElementsByTagName("option"), function (b) { var c = 0 <= a.a.o(d, a.j.u(b)); b.selected != c && a.a.uc(b, c) }); b.scrollTop = e
                }
            }; a.h.ea.selectedOptions = !0; a.d.style = { update: function (b, c) { var d = a.a.c(c() || {}); a.a.D(d, function (c, d) { d = a.a.c(d); if (null === d || d === n || !1 === d) d = ""; b.style[c] = d }) } }; a.d.submit = {
                init: function (b, c, d, e, f) {
                    if ("function" != typeof c()) throw Error("The value for a submit binding must be a function"); a.a.p(b, "submit", function (a) {
                        var d,
                        e = c(); try { d = e.call(f.$data, b) } finally { !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }
                    })
                }
            }; a.d.text = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Za(b, c()) } }; a.f.Z.text = !0; (function () {
                if (x && x.navigator) var b = function (a) { if (a) return parseFloat(a[1]) }, c = x.opera && x.opera.version && parseInt(x.opera.version()), d = x.navigator.userAgent, e = b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), f = b(d.match(/Firefox\/([^ ]*)/)); if (10 > a.a.C) var g = a.a.e.I(), h =
                a.a.e.I(), l = function (b) { var c = this.activeElement; (c = c && a.a.e.get(c, h)) && c(b) }, m = function (b, c) { var d = b.ownerDocument; a.a.e.get(d, g) || (a.a.e.set(d, g, !0), a.a.p(d, "selectionchange", l)); a.a.e.set(b, h, c) }; a.d.textInput = {
                    init: function (b, d, g) {
                        function l(c, d) { a.a.p(b, c, d) } function h() { var c = a.a.c(d()); if (null === c || c === n) c = ""; u !== n && c === u ? a.a.setTimeout(h, 4) : b.value !== c && (s = c, b.value = c) } function y() { t || (u = b.value, t = a.a.setTimeout(v, 4)) } function v() {
                            clearTimeout(t); u = t = n; var c = b.value; s !== c && (s = c, a.h.Ea(d(),
                            g, "textInput", c))
                        } var s = b.value, t, u, x = 9 == a.a.C ? y : v; 10 > a.a.C ? (l("propertychange", function (a) { "value" === a.propertyName && x(a) }), 8 == a.a.C && (l("keyup", v), l("keydown", v)), 8 <= a.a.C && (m(b, x), l("dragend", y))) : (l("input", v), 5 > e && "textarea" === a.a.A(b) ? (l("keydown", y), l("paste", y), l("cut", y)) : 11 > c ? l("keydown", y) : 4 > f && (l("DOMAutoComplete", v), l("dragdrop", v), l("drop", v))); l("change", v); a.m(h, null, { i: b })
                    }
                }; a.h.ea.textInput = !0; a.d.textinput = { preprocess: function (a, b, c) { c("textInput", a) } }
            })(); a.d.uniqueName = {
                init: function (b,
                c) { if (c()) { var d = "ko_unique_" + ++a.d.uniqueName.Jc; a.a.tc(b, d) } }
            }; a.d.uniqueName.Jc = 0; a.d.value = {
                after: ["options", "foreach"], init: function (b, c, d) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = ["change"], f = d.get("valueUpdate"), g = !1, h = null; f && ("string" == typeof f && (f = [f]), a.a.ra(e, f), e = a.a.Ub(e)); var l = function () { h = null; g = !1; var e = c(), f = a.j.u(b); a.h.Ea(e, d, "value", f) }; !a.a.C || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete ||
                        -1 != a.a.o(e, "propertychange") || (a.a.p(b, "propertychange", function () { g = !0 }), a.a.p(b, "focus", function () { g = !1 }), a.a.p(b, "blur", function () { g && l() })); a.a.q(e, function (c) { var d = l; a.a.od(c, "after") && (d = function () { h = a.j.u(b); a.a.setTimeout(l, 0) }, c = c.substring(5)); a.a.p(b, c, d) }); var m = function () {
                            var e = a.a.c(c()), f = a.j.u(b); if (null !== h && e === h) a.a.setTimeout(m, 0); else if (e !== f) if ("select" === a.a.A(b)) {
                                var g = d.get("valueAllowUnset"), f = function () { a.j.ha(b, e, g) }; f(); g || e === a.j.u(b) ? a.a.setTimeout(f, 0) : a.l.w(a.a.Da,
                                null, [b, "change"])
                            } else a.j.ha(b, e)
                        }; a.m(m, null, { i: b })
                    } else a.Ja(b, { checkedValue: c })
                }, update: function () { }
            }; a.h.ea.value = !0; a.d.visible = { update: function (b, c) { var d = a.a.c(c()), e = "none" != b.style.display; d && !e ? b.style.display = "" : !d && e && (b.style.display = "none") } }; (function (b) { a.d[b] = { init: function (c, d, e, f, g) { return a.d.event.init.call(this, c, function () { var a = {}; a[b] = d(); return a }, e, f, g) } } })("click"); a.O = function () { }; a.O.prototype.renderTemplateSource = function () {
                throw Error("Override renderTemplateSource");
            }; a.O.prototype.createJavaScriptEvaluatorBlock = function () { throw Error("Override createJavaScriptEvaluatorBlock"); }; a.O.prototype.makeTemplateSource = function (b, c) { if ("string" == typeof b) { c = c || s; var d = c.getElementById(b); if (!d) throw Error("Cannot find template with ID " + b); return new a.v.n(d) } if (1 == b.nodeType || 8 == b.nodeType) return new a.v.qa(b); throw Error("Unknown template type: " + b); }; a.O.prototype.renderTemplate = function (a, c, d, e) {
                a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, c,
                d, e)
            }; a.O.prototype.isTemplateRewritten = function (a, c) { return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten") }; a.O.prototype.rewriteTemplate = function (a, c, d) { a = this.makeTemplateSource(a, d); c = c(a.text()); a.text(c); a.data("isRewritten", !0) }; a.b("templateEngine", a.O); a.Gb = function () {
                function b(b, c, d, h) {
                    b = a.h.yb(b); for (var l = a.h.ta, m = 0; m < b.length; m++) {
                        var k = b[m].key; if (l.hasOwnProperty(k)) {
                            var r = l[k]; if ("function" === typeof r) { if (k = r(b[m].value)) throw Error(k); } else if (!r) throw Error("This template engine does not support the '" +
                            k + "' binding within its templates");
                        }
                    } d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ua(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')"; return h.createJavaScriptEvaluatorBlock(d) + c
                } var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; return {
                    Pc: function (b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
                            return a.Gb.ed(b,
                            c)
                        }, d)
                    }, ed: function (a, f) { return a.replace(c, function (a, c, d, e, k) { return b(k, c, d, f) }).replace(d, function (a, c) { return b(c, "\x3c!-- ko --\x3e", "#comment", f) }) }, Fc: function (b, c) { return a.M.wb(function (d, h) { var l = d.nextSibling; l && l.nodeName.toLowerCase() === c && a.Ja(l, b, h) }) }
                }
            }(); a.b("__tr_ambtns", a.Gb.Fc); (function () {
                a.v = {}; a.v.n = function (b) { if (this.n = b) { var c = a.a.A(b); this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4 } }; a.v.n.prototype.text = function () {
                    var b = 1 ===
                    this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML"; if (0 == arguments.length) return this.n[b]; var c = arguments[0]; "innerHTML" === b ? a.a.Cb(this.n, c) : this.n[b] = c
                }; var b = a.a.e.I() + "_"; a.v.n.prototype.data = function (c) { if (1 === arguments.length) return a.a.e.get(this.n, b + c); a.a.e.set(this.n, b + c, arguments[1]) }; var c = a.a.e.I(); a.v.n.prototype.nodes = function () { var b = this.n; if (0 == arguments.length) return (a.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : n); a.a.e.set(b, c, { jb: arguments[0] }) }; a.v.qa = function (a) {
                    this.n =
                    a
                }; a.v.qa.prototype = new a.v.n; a.v.qa.prototype.text = function () { if (0 == arguments.length) { var b = a.a.e.get(this.n, c) || {}; b.Hb === n && b.jb && (b.Hb = b.jb.innerHTML); return b.Hb } a.a.e.set(this.n, c, { Hb: arguments[0] }) }; a.b("templateSources", a.v); a.b("templateSources.domElement", a.v.n); a.b("templateSources.anonymousTemplate", a.v.qa)
            })(); (function () {
                function b(b, c, d) { var e; for (c = a.f.nextSibling(c) ; b && (e = b) !== c;) b = a.f.nextSibling(e), d(e, b) } function c(c, d) {
                    if (c.length) {
                        var e = c[0], f = c[c.length - 1], g = e.parentNode, h =
                        a.R.instance, n = h.preprocessNode; if (n) { b(e, f, function (a, b) { var c = a.previousSibling, d = n.call(h, a); d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c)) }); c.length = 0; if (!e) return; e === f ? c.push(e) : (c.push(e, f), a.a.za(c, g)) } b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.Sb(d, b) }); b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.M.Ac(b, [d]) }); a.a.za(c, g)
                    }
                } function d(a) { return a.nodeType ? a : 0 < a.length ? a[0] : null } function e(b, e, f, h, q) {
                    q = q || {}; var p = (b && d(b) || f || {}).ownerDocument, n = q.templateEngine || g;
                    a.Gb.Pc(f, n, p); f = n.renderTemplate(f, h, q, p); if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes"); p = !1; switch (e) { case "replaceChildren": a.f.da(b, f); p = !0; break; case "replaceNode": a.a.sc(b, f); p = !0; break; case "ignoreTargetNode": break; default: throw Error("Unknown renderMode: " + e); } p && (c(f, h), q.afterRender && a.l.w(q.afterRender, null, [f, h.$data])); return f
                } function f(b, c, d) { return a.H(b) ? b() : "function" === typeof b ? b(c, d) : b }
                var g; a.Db = function (b) { if (b != n && !(b instanceof a.O)) throw Error("templateEngine must inherit from ko.templateEngine"); g = b }; a.Ab = function (b, c, k, h, q) {
                    k = k || {}; if ((k.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate"); q = q || "replaceChildren"; if (h) {
                        var p = d(h); return a.B(function () { var g = c && c instanceof a.Q ? c : new a.Q(c, null, null, null, { exportDependencies: !0 }), n = f(b, g.$data, g), g = e(h, q, n, g, k); "replaceNode" == q && (h = g, p = d(h)) }, null, {
                            wa: function () { return !p || !a.a.nb(p) }, i: p &&
                            "replaceNode" == q ? p.parentNode : p
                        })
                    } return a.M.wb(function (d) { a.Ab(b, c, k, d, "replaceNode") })
                }; a.ld = function (b, d, g, h, q) {
                    function p(a, b) { c(b, t); g.afterRender && g.afterRender(b, a); t = null } function s(a, c) { t = q.createChildContext(a, g.as, function (a) { a.$index = c }); var d = f(b, a, t); return e(null, "ignoreTargetNode", d, t, g) } var t; return a.B(function () {
                        var b = a.a.c(d) || []; "undefined" == typeof b.length && (b = [b]); b = a.a.Ka(b, function (b) { return g.includeDestroyed || b === n || null === b || !a.a.c(b._destroy) }); a.l.w(a.a.Bb, null, [h, b,
                        s, g, p])
                    }, null, { i: h })
                }; var h = a.a.e.I(); a.d.template = {
                    init: function (b, c) { var d = a.a.c(c()); if ("string" == typeof d || d.name) a.f.xa(b); else { if ("nodes" in d) { if (d = d.nodes || [], a.H(d)) throw Error('The "nodes" option must be a plain, non-observable array.'); } else d = a.f.childNodes(b); d = a.a.lc(d); (new a.v.qa(b)).nodes(d) } return { controlsDescendantBindings: !0 } }, update: function (b, c, d, e, f) {
                        var g = c(); c = a.a.c(g); d = !0; e = null; "string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)));
                        "foreach" in c ? e = a.ld(g || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.Zb(c.data, c.as) : f, e = a.Ab(g || b, f, c, b)) : a.f.xa(b); f = e; (c = a.a.e.get(b, h)) && "function" == typeof c.k && c.k(); a.a.e.set(b, h, f && f.ba() ? f : n)
                    }
                }; a.h.ta.template = function (b) { b = a.h.yb(b); return 1 == b.length && b[0].unknown || a.h.bd(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates" }; a.f.Z.template = !0
            })(); a.b("setTemplateEngine", a.Db); a.b("renderTemplate", a.Ab); a.a.fc = function (a, c, d) {
                if (a.length &&
                c.length) { var e, f, g, h, l; for (e = f = 0; (!d || e < d) && (h = a[f]) ; ++f) { for (g = 0; l = c[g]; ++g) if (h.value === l.value) { h.moved = l.index; l.moved = h.index; c.splice(g, 1); e = g = 0; break } e += g } }
            }; a.a.ib = function () {
                function b(b, d, e, f, g) {
                    var h = Math.min, l = Math.max, m = [], k, n = b.length, q, p = d.length, s = p - n || 1, t = n + p + 1, v, u, x; for (k = 0; k <= n; k++) for (u = v, m.push(v = []), x = h(p, k + s), q = l(0, k - 1) ; q <= x; q++) v[q] = q ? k ? b[k - 1] === d[q - 1] ? u[q - 1] : h(u[q] || t, v[q - 1] || t) + 1 : q + 1 : k + 1; h = []; l = []; s = []; k = n; for (q = p; k || q;) p = m[k][q] - 1, q && p === m[k][q - 1] ? l.push(h[h.length] = {
                        status: e,
                        value: d[--q], index: q
                    }) : k && p === m[k - 1][q] ? s.push(h[h.length] = { status: f, value: b[--k], index: k }) : (--q, --k, g.sparse || h.push({ status: "retained", value: d[q] })); a.a.fc(s, l, !g.dontLimitMoves && 10 * n); return h.reverse()
                } return function (a, d, e) { e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {}; a = a || []; d = d || []; return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e) }
            }(); a.b("utils.compareArrays", a.a.ib); (function () {
                function b(b, c, d, h, l) {
                    var m = [], k = a.B(function () {
                        var k = c(d, l, a.a.za(m, b)) || []; 0 <
                        m.length && (a.a.sc(m, k), h && a.l.w(h, null, [d, k, l])); m.length = 0; a.a.ra(m, k)
                    }, null, { i: b, wa: function () { return !a.a.Rb(m) } }); return { ca: m, B: k.ba() ? k : n }
                } var c = a.a.e.I(), d = a.a.e.I(); a.a.Bb = function (e, f, g, h, l) {
                    function m(b, c) { w = q[c]; u !== c && (D[b] = w); w.qb(u++); a.a.za(w.ca, e); t.push(w); z.push(w) } function k(b, c) { if (b) for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.q(c[d].ca, function (a) { b(a, d, c[d].ja) }) } f = f || []; h = h || {}; var r = a.a.e.get(e, c) === n, q = a.a.e.get(e, c) || [], p = a.a.fb(q, function (a) { return a.ja }), s = a.a.ib(p, f, h.dontLimitMoves),
                    t = [], v = 0, u = 0, x = [], z = []; f = []; for (var D = [], p = [], w, C = 0, B, E; B = s[C]; C++) switch (E = B.moved, B.status) { case "deleted": E === n && (w = q[v], w.B && (w.B.k(), w.B = n), a.a.za(w.ca, e).length && (h.beforeRemove && (t.push(w), z.push(w), w.ja === d ? w = null : f[C] = w), w && x.push.apply(x, w.ca))); v++; break; case "retained": m(C, v++); break; case "added": E !== n ? m(C, E) : (w = { ja: B.value, qb: a.N(u++) }, t.push(w), z.push(w), r || (p[C] = w)) } a.a.e.set(e, c, t); k(h.beforeMove, D); a.a.q(x, h.beforeRemove ? a.$ : a.removeNode); for (var C = 0, r = a.f.firstChild(e), F; w = z[C]; C++) {
                        w.ca ||
                        a.a.extend(w, b(e, g, w.ja, l, w.qb)); for (v = 0; s = w.ca[v]; r = s.nextSibling, F = s, v++) s !== r && a.f.ic(e, s, F); !w.Xc && l && (l(w.ja, w.ca, w.qb), w.Xc = !0)
                    } k(h.beforeRemove, f); for (C = 0; C < f.length; ++C) f[C] && (f[C].ja = d); k(h.afterMove, D); k(h.afterAdd, p)
                }
            })(); a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Bb); a.W = function () { this.allowTemplateRewriting = !1 }; a.W.prototype = new a.O; a.W.prototype.renderTemplateSource = function (b, c, d, e) {
                if (c = (9 > a.a.C ? 0 : b.nodes) ? b.nodes() : null) return a.a.V(c.cloneNode(!0).childNodes); b = b.text();
                return a.a.ma(b, e)
            }; a.W.sb = new a.W; a.Db(a.W.sb); a.b("nativeTemplateEngine", a.W); (function () {
                a.vb = function () {
                    var a = this.ad = function () { if (!u || !u.tmpl) return 0; try { if (0 <= u.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2 } catch (a) { } return 1 }(); this.renderTemplateSource = function (b, e, f, g) {
                        g = g || s; f = f || {}; if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."); var h = b.data("precompiled"); h || (h = b.text() || "", h = u.template(null, "{{ko_with $item.koBindingContext}}" +
                        h + "{{/ko_with}}"), b.data("precompiled", h)); b = [e.$data]; e = u.extend({ koBindingContext: e }, f.templateOptions); e = u.tmpl(h, b, e); e.appendTo(g.createElement("div")); u.fragments = {}; return e
                    }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" }; this.addTemplate = function (a, b) { s.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>") }; 0 < a && (u.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, u.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
                }; a.vb.prototype =
                new a.O; var b = new a.vb; 0 < b.ad && a.Db(b); a.b("jqueryTmplTemplateEngine", a.vb)
            })()
        })
    })();
})();