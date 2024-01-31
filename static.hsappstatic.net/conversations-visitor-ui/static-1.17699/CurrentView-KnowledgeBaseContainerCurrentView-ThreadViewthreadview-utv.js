(window.webpackJsonp = window.webpackJsonp || []).push([
    ["CurrentView-KnowledgeBaseContainer~CurrentView-ThreadView~threadview-utv"], {
        "/gEt": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("nDpY"),
                o = n.n(s),
                i = n("xXtf"),
                r = n("LZPL"),
                a = n.n(r);
            const c = () => o.a.get() === i.a || a.a.isQa() && o.a.get() === i.b
        },
        "0ePj": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var s = n("Ktcs");

            function o(e, t, n) {
                let [o, i] = Object(s.useState)(e || t), r = Object(s.useRef)(void 0 !== e), a = r.current, c = void 0 !== e, l = Object(s.useRef)(o);
                a !== c && console.warn(`WARN: A component changed from ${a?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}.`);
                r.current = c;
                let d = Object(s.useCallback)((e, ...t) => {
                    let s = (e, ...t) => {
                        n && (Object.is(l.current, e) || n(e, ...t));
                        c || (l.current = e)
                    };
                    if ("function" == typeof e) {
                        console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
                        i((n, ...o) => {
                            let i = e(c ? l.current : n, ...o);
                            s(i, ...t);
                            return c ? n : i
                        })
                    } else {
                        c || i(e);
                        s(e, ...t)
                    }
                }, [c, n]);
                c ? l.current = e : e = o;
                return [e, d]
            }
        },
        FYyX: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            n.d(t, "b", (function() {
                return a
            }));
            const s = 7e3;
            class o {
                constructor() {
                    this.node = document.createElement("div");
                    this.node.dataset.liveAnnouncer = "true";
                    Object.assign(this.node.style, {
                        border: 0,
                        clip: "rect(0 0 0 0)",
                        clipPath: "inset(50%)",
                        height: 1,
                        margin: "0 -1px -1px 0",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        width: 1,
                        whiteSpace: "nowrap"
                    });
                    this.assertiveLog = this.createLog("assertive");
                    this.node.appendChild(this.assertiveLog);
                    this.politeLog = this.createLog("polite");
                    this.node.appendChild(this.politeLog);
                    document.body.prepend(this.node)
                }
                createLog(e) {
                    const t = document.createElement("div");
                    t.setAttribute("role", "log");
                    t.setAttribute("aria-live", e);
                    t.setAttribute("aria-relevant", "additions");
                    return t
                }
                destroy() {
                    if (this.node) {
                        document.body.removeChild(this.node);
                        this.node = null
                    }
                }
                announce(e, t = "assertive", n = s) {
                    if (!this.node) return;
                    const o = document.createElement("div");
                    o.textContent = e;
                    "assertive" === t ? this.assertiveLog.appendChild(o) : this.politeLog.appendChild(o);
                    "" !== e && setTimeout(() => {
                        o.remove()
                    }, n)
                }
                clear(e) {
                    if (this.node) {
                        e && "assertive" !== e || (this.assertiveLog.innerHTML = "");
                        e && "polite" !== e || (this.politeLog.innerHTML = "")
                    }
                }
            }
            let i = null;

            function r(e, t = "assertive", n = s) {
                i || (i = new o);
                i.announce(e, t, n)
            }

            function a(e) {
                i && i.clear(e)
            }
        },
        Mcxo: function(e, t, n) {
            "use strict";
            var s = n("9f1P"),
                o = n.n(s),
                i = n("57op");
            const r = "help",
                a = "default",
                c = "error";
            var l = n("x+ne");
            const d = ({
                    use: e,
                    theme: t
                }) => {
                    switch (e) {
                        case c:
                            return Object(s.css)(["color:", ";"], Object(i.c)(t));
                        case r:
                            return Object(s.css)(["color:", ";"], Object(i.d)(t));
                        case a:
                        default:
                            return null
                    }
                },
                u = o.a.small.withConfig({
                    displayName: "VizExSmall",
                    componentId: "w4jfyo-0"
                })(["display:block;", ";", ";"], l.b, d);
            t.a = u
        },
        f3U3: function(e, t, n) {
            "use strict";
            var s = n("Q+dC"),
                o = n("QgEn"),
                i = n("VfuR"),
                r = n.n(i),
                a = n("9f1P"),
                c = n.n(a),
                l = n("CR0J");
            const d = "default",
                u = "on-dark";
            var p = n("seb2"),
                h = n("57op"),
                b = n("iKGd");
            const f = h.a,
                g = h.b,
                m = h.g,
                x = h.h,
                j = () => b.o;
            var v = n("Ktcs");
            const w = ({
                    use: e
                }) => {
                    switch (e) {
                        case u:
                            return Object(a.css)(["background-color:", ";"], j());
                        case d:
                        default:
                            return null
                    }
                },
                O = ({
                    theme: e
                }) => Object(a.css)(["cursor:not-allowed;background-color:", ";"], f(e)),
                y = ({
                    theme: e
                }) => Object(a.css)(["color:", ";cursor:not-allowed;&::after{color:", ";}"], g(e), g(e)),
                C = c.a.input.withConfig({
                    displayName: "VizExInput__StyledTextInput",
                    componentId: "tbhv2f-0"
                })(["", ";height:100%;width:100%;line-height:22px;font-size:16px;padding-left:10px;padding-right:10px;border:none;border-radius:3px;background:transparent;", ";:focus{outline:none;}::placeholder{color:", ";}"], p.a, e => e.disabled && y(e), ({
                    theme: e
                }) => m(e)),
                L = c.a.div.withConfig({
                    displayName: "VizExInput__InputContainer",
                    componentId: "tbhv2f-1"
                })(["height:42px;line-height:22px;font-size:16px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;border:1px solid;border-color:", ";background-color:", ";:focus-within{border-color:", ";}border-radius:3px;", " ", ";"], ({
                    theme: e,
                    focus: t
                }) => t ? x(e) : Object(h.f)(e), ({
                    theme: e
                }) => Object(h.e)(e), ({
                    theme: e
                }) => x(e), w, e => e.disabled && O(e)),
                E = Object(v.forwardRef)((e, t) => {
                    const {
                        suffix: n,
                        prefix: i,
                        disabled: r,
                        placeholder: a,
                        value: c,
                        onChange: l,
                        containerStyles: d,
                        theme: u,
                        use: p,
                        focus: h
                    } = e, b = Object(s.a)(e, ["suffix", "prefix", "disabled", "placeholder", "value", "onChange", "containerStyles", "theme", "use", "focus"]);
                    return Object(o.jsxs)(L, {
                        disabled: r,
                        style: d,
                        theme: u,
                        use: p,
                        focus: h,
                        "data-test-id": "VizExInput-Container",
                        children: [i, Object(o.jsx)(C, Object.assign({
                            "aria-disabled": r,
                            disabled: r,
                            placeholder: a,
                            value: c,
                            onChange: l,
                            theme: u,
                            use: p,
                            "data-test-id": "VizExInput-Input",
                            ref: t
                        }, b)), n]
                    })
                });
            E.displayName = "VizExInput";
            E.defaultProps = {
                placeholder: ""
            };
            E.propTypes = {
                containerStyles: r.a.object,
                disabled: r.a.bool,
                focus: r.a.bool,
                onChange: r.a.func,
                placeholder: r.a.string,
                prefix: r.a.node,
                suffix: r.a.node,
                theme: l.a,
                use: r.a.oneOf([d, u]),
                value: r.a.string
            };
            t.a = E
        },
        mIAK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            n.d(t, "b", (function() {
                return u
            }));
            var s = n("QgEn"),
                o = n("Ktcs"),
                i = n("FYyX");
            const r = new Map,
                a = () => r.clear(),
                c = {
                    announce: (e, t = "assertive", n) => {
                        if (!r.has(e.id)) {
                            Object(i.a)(e.text, t, n);
                            r.set(e.id, e.text)
                        }
                    },
                    clearAnnouncer: i.b,
                    clearAnnouncedMessages: a
                },
                l = Object(o.createContext)(c),
                d = ({
                    children: e,
                    clearOnUnmount: t = !0
                }) => {
                    Object(o.useEffect)(() => () => {
                        if (t) {
                            Object(i.b)("assertive");
                            Object(i.b)("polite");
                            a()
                        }
                    }, [t]);
                    return Object(s.jsx)(l.Provider, {
                        value: c,
                        children: e
                    })
                };
            d.displayName = "AriaLiveContextProvider";
            const u = () => Object(o.useContext)(l)
        },
        oxA8: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("QgEn"),
                o = n("Ktcs"),
                i = n("VfuR"),
                r = n.n(i),
                a = n("PVk8");
            class c extends o.Component {
                render() {
                    const {
                        useGap: e,
                        message: t,
                        options: n
                    } = this.props, o = Object(a.a)(Object(a.b)(this.props));
                    return Object(s.jsx)("i18n-string", Object.assign({}, o, {
                        dangerouslySetInnerHTML: {
                            __html: Object(a.c)({
                                useGap: e,
                                message: t,
                                options: n
                            })
                        }
                    }))
                }
            }
            c.displayName = "FormattedHTMLMessage";
            c.propTypes = {
                message: r.a.string.isRequired,
                options: r.a.object,
                useGap: r.a.bool
            };
            c.isI18nElement = !0;
            c.defaultProps = {
                options: {},
                useGap: !1
            }
        },
        tOFb: function(e, t, n) {
            "use strict";
            var s = n("QgEn");
            n("Ktcs");
            const o = e => Object(s.jsxs)("svg", Object.assign({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e, {
                children: [Object(s.jsx)("defs", {
                    children: Object(s.jsx)("path", {
                        d: "M16.233 8.738c.564-.502.564-1.317 0-1.818-.564-.503-1.477-.503-2.04 0l-7.128 6.35c-1.374 1.223-1.374 3.213 0 4.436.686.612 1.587.918 2.49.918.9 0 1.802-.306 2.489-.918l10.318-9.193h.001c2.183-1.946 2.183-5.11 0-7.055-2.181-1.944-5.733-1.944-7.918 0l-12.2 10.87c-2.993 2.667-2.993 7.006 0 9.673C3.742 23.334 5.707 24 7.673 24c1.965 0 3.93-.666 5.427-2l9.01-8.027c.563-.501.563-1.316 0-1.818-.564-.503-1.478-.503-2.042 0l-9.009 8.027c-1.867 1.664-4.906 1.663-6.773 0-1.867-1.664-1.867-4.37 0-6.035l12.2-10.869c1.058-.944 2.779-.943 3.836-.001s1.057 2.475 0 3.417h-.002l-10.317 9.194c-.249.22-.651.22-.897 0-.248-.22-.248-.58 0-.8l7.127-6.35z",
                        id: "attach__a"
                    })
                }), Object(s.jsx)("use", {
                    xlinkHref: "#attach__a",
                    fillRule: "evenodd"
                })]
            }));
            o.displayName = "SVGAttach";
            t.a = o
        }
    }
]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-visitor-ui/static-1.17699/CurrentView-KnowledgeBaseContainer~CurrentView-ThreadView~threadview-utv.js.map