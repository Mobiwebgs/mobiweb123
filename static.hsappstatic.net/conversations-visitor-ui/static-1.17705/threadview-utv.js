(window.webpackJsonp = window.webpackJsonp || []).push([
    ["threadview-utv"], {
        "+WNO": function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("q8Gl");
            const r = ["/products/crm/conversations", "/products/crm/chatbot-builder", "/crm/am_chatbot", "/products/crm/live-chat", "/crm/am_live-chat"],
                a = "/products/cms",
                i = "/products/sales",
                o = /www\.hubspot\.fr$/;
            n.d(t, "isFrenchSalesPage", (function() {
                return c
            }));
            n.d(t, "isOneOfTargetedProductPages", (function() {
                return d
            }));
            const c = (e, t) => o.test(e) && t.startsWith(i),
                d = () => {
                    const e = new URL(Object(s.getWindowLocation)().paramValue("url"));
                    return r.includes(e.pathname) || e.pathname.startsWith(a) || c(e.hostname, e.pathname)
                }
        },
        "+a0K": function(e, t) {
            function n(e, t) {
                return e === t || e != e && t != t
            }
            e.exports = n
        },
        "/Dz0": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n.d(t, "b", (function() {
                return i
            }));
            var s = n("Ut5p"),
                r = n("KrP/");
            const a = Object(s.b)(r.h);

            function i() {
                return e => {
                    e(a())
                }
            }
        },
        "/TWJ": function(e, t) {
            function n(e, t) {
                return null == e ? void 0 : e[t]
            }
            e.exports = n
        },
        "/rM/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("/OK6"),
                r = n("Cblj");
            const a = e => Object(r.isTypingMessage)(e) && Object(s.isFromVisitor)(e)
        },
        "0IL2": function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("Ktcs"),
                o = n("9f1P"),
                c = n.n(o),
                d = n("4cgu"),
                l = n("QGYt"),
                u = n("sl/w"),
                p = n("+KD7"),
                h = n("HtM0"),
                b = n("X5NR"),
                m = n("Mcxo"),
                g = n("Jr27");
            const f = c.a.div.withConfig({
                    displayName: "ConsentPrompt__Container",
                    componentId: "sc-1dgr4f8-0"
                })(["border-top:2px solid ", ";display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:12px 24px;position:relative;"], p.f),
                j = c()(m.a).withConfig({
                    displayName: "ConsentPrompt__SmallNoParagraphPadding",
                    componentId: "sc-1dgr4f8-1"
                })(["display:block;word-break:break-word;word-wrap:break-word;-ms-word-break:break-all;p{margin-bottom:0;}"]),
                O = c()(l.a).withConfig({
                    displayName: "ConsentPrompt__FullWidthButton",
                    componentId: "sc-1dgr4f8-2"
                })(["flex:0 1 100%;"]),
                x = c.a.div.withConfig({
                    displayName: "ConsentPrompt__FlexWrapper",
                    componentId: "sc-1dgr4f8-3"
                })(["display:flex;flex-direction:row;width:100%;margin:12px 0 8px 0;"]),
                y = ({
                    message: e,
                    onClick: t,
                    onClose: n,
                    showButton: r,
                    isOneOfTargetedProductPages: a,
                    isPortal53: o
                }) => {
                    const [c, l] = Object(i.useState)(!1), p = () => {
                        t();
                        l(!0)
                    };
                    return Object(s.jsxs)(f, {
                        "data-test-id": "gdpr-consent-prompt",
                        dir: "auto",
                        children: [Object(s.jsx)(j, {
                            use: "help",
                            "data-test-id": "gdpr-consent-text",
                            dangerouslySetInnerHTML: {
                                __html: Object(h.a)(e)
                            }
                        }), !r && o && a && Object(s.jsx)(g.a, {
                            size: "sm",
                            onClick: n
                        }), r && Object(s.jsx)(x, {
                            children: Object(s.jsx)(d.a, {
                                currentState: c ? "submitting" : "ready",
                                Button: O,
                                "data-test-id": "gdpr-consent-agree-button",
                                onClick: p,
                                children: Object(s.jsx)(b.a, {
                                    children: e => Object(s.jsx)(u.a, {
                                        message: "conversations-visitor-experience-components.buttons.agree",
                                        options: {
                                            locale: e
                                        }
                                    })
                                })
                            })
                        })]
                    })
                };
            y.propTypes = {
                isOneOfTargetedProductPages: a.a.bool.isRequired,
                isPortal53: a.a.bool.isRequired,
                message: a.a.string.isRequired,
                onClick: a.a.func.isRequired,
                onClose: a.a.func,
                showButton: a.a.bool.isRequired
            };
            y.displayName = "ConsentPrompt";
            t.a = y
        },
        "0srx": function(e, t, n) {
            "use strict";
            var s = n("+KD7");
            const r = {
                    tileBackgroundColor: s.j,
                    tileBorderColor: s.l
                },
                a = e => Object.assign({}, r, e);
            t.a = a
        },
        "0wen": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "PRIMARY", (function() {
                return s
            }));
            n.d(t, "SECONDARY", (function() {
                return r
            }));
            n.d(t, "TRANSPARENT_ON_PRIMARY", (function() {
                return a
            }));
            const s = "primary",
                r = "secondary",
                a = "transparent-on-primary"
        },
        "1HZx": function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("Ktcs"),
                a = n("OwpT"),
                i = n.n(a),
                o = n("ughT"),
                c = n("l6Ux"),
                d = n("mKxs"),
                l = n("w/SM"),
                u = n("npjq"),
                p = n("QYOI"),
                h = n("VfuR"),
                b = n.n(h),
                m = n("9f1P"),
                g = n.n(m),
                f = n("mEYk"),
                j = n.n(f);
            const O = g.a.div.withConfig({
                    displayName: "MessageComposer__FullWidth",
                    componentId: "sc-1l8dx9h-0"
                })(["width:100%;"]),
                x = g.a.div.withConfig({
                    displayName: "MessageComposer__InputWrapper",
                    componentId: "sc-1l8dx9h-1"
                })(["display:flex;width:100%;align-items:center;justify-content:space-between;flex-wrap:nowrap;"]);
            class y extends r.Component {
                render() {
                    const e = "input-container m-bottom-2" + (this.props.showingHsBranding ? "" : " no-branding");
                    return Object(s.jsxs)("div", {
                        className: e,
                        children: [this.props.FileUploads && Object(s.jsx)(O, {
                            children: this.props.FileUploads
                        }), Object(s.jsxs)(x, {
                            children: [this.props.inputToRender, this.props.children && Object(s.jsx)("div", {
                                className: "display-flex flex-row m-left-1 no-shrink",
                                children: this.props.children
                            })]
                        })]
                    })
                }
            }
            y.propTypes = {
                FileUploads: b.a.node,
                children: b.a.node,
                inputToRender: b.a.node.isRequired,
                showingHsBranding: b.a.bool
            };
            y.defaultProps = {
                FileUploads: null,
                showingHsBranding: !1
            };
            y.displayName = "MessageComposer";
            var v = n("iu1j");
            const C = Object(r.createContext)(void 0),
                I = C.Consumer;
            C.Provider;
            var T = n("Q+dC");
            const w = e => {
                    Object(r.useEffect)(() => {
                        const t = t => {
                            if (e(t)) {
                                t.stopPropagation();
                                t.preventDefault()
                            }
                        };
                        document.addEventListener("touchmove", t, {
                            passive: !1
                        });
                        return () => {
                            document.removeEventListener("touchmove", t)
                        }
                    }, [e])
                },
                S = () => {},
                k = e => {
                    const t = Object(r.forwardRef)((t, n) => {
                        const {
                            onBlur: a,
                            onFocus: i
                        } = t, o = Object(T.a)(t, ["onBlur", "onFocus"]), c = Object(r.useRef)(), d = n || c, [l, u] = Object(r.useState)(null);
                        w(e => {
                            if (l && e.target !== l) {
                                d.current && d.current.blur();
                                u(null);
                                return !1
                            }
                            return Boolean(l)
                        });
                        const p = e => {
                                u(null);
                                a(e)
                            },
                            h = e => {
                                e.target && u(e.target);
                                i(e)
                            };
                        return Object(s.jsx)(e, Object.assign({}, o, {
                            ref: d,
                            onFocus: h,
                            onBlur: p
                        }))
                    });
                    t.propTypes = {
                        onBlur: b.a.func,
                        onFocus: b.a.func
                    };
                    t.defaultProps = {
                        onBlur: S,
                        onFocus: S
                    };
                    t.displayName = "Component";
                    return t
                };
            k.propTypes = {
                onBlur: b.a.func.isRequired,
                onFocus: b.a.func.isRequired
            };
            var R = k,
                A = n("CR0J"),
                P = n("Mcxo");
            const M = {
                    error: !1,
                    required: !1
                },
                E = g.a.div.withConfig({
                    displayName: "VizExFormControl__FormControlWrapper",
                    componentId: "sc-1mmcof2-0"
                })(["width:100%;flex-basis:100%;"]);
            class N extends r.Component {
                constructor(...e) {
                    super(...e);
                    this.getChildProps = ({
                        ariaLabel: e,
                        newError: t,
                        newRequired: n,
                        validationMessage: s,
                        fallbackId: r,
                        ref: a
                    }) => {
                        const i = {
                            "aria-label": e,
                            required: n,
                            "aria-invalid": t,
                            "aria-required": n,
                            ref: a
                        };
                        r && (i.id = r);
                        t && (i.error = s);
                        return i
                    }
                }
                render() {
                    const e = this.props,
                        {
                            "aria-label": t,
                            error: n,
                            validationMessage: r,
                            required: a,
                            theme: i,
                            children: o
                        } = e,
                        c = Object(T.a)(e, ["aria-label", "error", "validationMessage", "required", "theme", "children"]),
                        d = o(Object.assign({}, this.getChildProps({
                            ariaLabel: t,
                            newError: n,
                            newRequired: a,
                            validationMessage: r
                        })));
                    return Object(s.jsxs)(E, Object.assign({}, c, {
                        children: [d, r ? Object(s.jsx)(P.a, {
                            use: n ? "error" : "default",
                            theme: i,
                            children: r
                        }) : null]
                    }))
                }
            }
            N.displayName = "VizExFormControl";
            N.propTypes = {
                "aria-label": b.a.string,
                children: b.a.func.isRequired,
                error: b.a.bool,
                required: b.a.bool,
                theme: A.a,
                validationMessage: b.a.node
            };
            N.defaultProps = M;
            N.defaultProps = M;
            var _ = N,
                F = n("8Q5G"),
                q = n("57op");
            const L = q.f,
                B = q.e,
                U = q.c,
                D = q.a,
                z = q.b,
                H = q.g,
                V = "unstyled",
                Q = "default",
                W = e => (new DOMParser).parseFromString(e, "text/html").body.textContent || "",
                J = window.navigator ? navigator.userAgent.toLowerCase() : "",
                G = () => J.includes("trident/"),
                Y = e => "" === e.trim() || "<br />" === e.trim() || "<br>" === e.trim() || "<br/>" === e.trim(),
                K = () => Object(m.css)(["outline:none;"]),
                X = ({
                    use: e,
                    theme: t
                }) => {
                    switch (e) {
                        case V:
                            return Object(m.css)(["border:none;background-color:transparent;"]);
                        case Q:
                        default:
                            return Object(m.css)(["border:2px solid;border-color:", ";background-color:", ";"], L(t), B(t))
                    }
                },
                $ = ({
                    theme: e
                }) => Object(m.css)(["cursor:not-allowed;background-color:", ";color:", ";&[contenteditable][placeholder]:empty::after{color:", ";cursor:not-allowed;}"], D(e), z(e), z(e)),
                Z = ({
                    theme: e
                }) => Object(m.css)(["border:2px solid;border-color:", ";"], U(e)),
                ee = g.a.div.withConfig({
                    displayName: "VizExExpandingInput__StyledInput",
                    componentId: "sc-1mwqzbo-0"
                })(["border-radius:3px;font-size:16px;line-height:22px;min-height:40px;max-height:", ";overflow-x:hidden;overflow-y:auto;padding:8px;position:relative;width:100%;flex-basis:100%;word-break:break-word;cursor:text;", ";", ";@supports (-webkit-touch-callout:none){cursor:pointer;}&[contenteditable][placeholder]:empty{overflow-y:hidden;}&[contenteditable][placeholder]:empty::after{display:block;content:attr(placeholder);position:relative;color:", ";background-color:transparent;cursor:text;user-select:none;font-size:16px;line-height:22px;height:22px;}@media all and (-ms-high-contrast:none){&[contenteditable][placeholder]:empty::after{position:absolute;top:50%;transform:translateY(-50%);}}:focus{", ";}", ";", ";"], ({
                    maxHeight: e
                }) => "number" == typeof e ? e + "px" : e || "150px", ({
                    focus: e
                }) => e && K(), X, ({
                    theme: e
                }) => H(e), K, e => e.disabled && $(e), e => e.error && Z(e)),
                te = Object(r.forwardRef)((e, t) => {
                    const n = "function" != typeof t && t || Object(r.useRef)(null),
                        {
                            onInput: a,
                            placeholder: i,
                            onChange: o,
                            value: c,
                            maxHeight: d,
                            disabled: l,
                            shouldAutofocus: u,
                            onPaste: p
                        } = e,
                        h = Object(T.a)(e, ["onInput", "placeholder", "onChange", "value", "maxHeight", "disabled", "shouldAutofocus", "onPaste"]),
                        b = (e, ...t) => {
                            e.persist();
                            if (n.current && n.current.innerHTML && Y(n.current.innerHTML)) {
                                n.current.innerHTML = "";
                                e.target.innerText = ""
                            }
                            e.target.value = e.target.innerText;
                            Object(F.a)(o, e, ...t);
                            Object(F.a)(a, e, ...t)
                        },
                        m = e => {
                            e.preventDefault();
                            Object(F.a)(p, e);
                            if (!e.clipboardData.files || !e.clipboardData.files[0]) {
                                let t;
                                try {
                                    t = e.clipboardData.getData("text/plain")
                                } catch (n) {
                                    t = W(e.clipboardData.getData("text"))
                                }
                                document.queryCommandSupported("insertText") ? document.execCommand("insertText", !1, t) : document.execCommand("paste", !1, t)
                            }
                        };
                    Object(r.useLayoutEffect)(() => {
                        null != c && n.current && c !== n.current.innerText && (n.current.innerText = c || "")
                    }, [n, c]);
                    Object(r.useEffect)(() => {
                        u && n && n.current && n.current.focus()
                    }, []);
                    const g = G() ? {
                        onKeyUp: b
                    } : {
                        onInput: b
                    };
                    return Object(s.jsx)(ee, Object.assign({}, h, {
                        ref: n,
                        placeholder: i
                    }, g, {
                        onPaste: m,
                        contentEditable: !l,
                        maxHeight: d,
                        disabled: l,
                        "aria-disabled": l
                    }))
                });
            te.displayName = "VizExExpandingInput";
            te.propTypes = {
                disabled: b.a.bool,
                error: b.a.bool,
                maxHeight: b.a.number,
                onChange: b.a.func,
                onInput: b.a.func,
                onPaste: b.a.func,
                placeholder: b.a.string,
                shouldAutofocus: b.a.bool,
                theme: A.a,
                use: b.a.oneOf([V, Q]),
                value: b.a.string
            };
            const ne = () => !!/iPad|iPhone|iPod|Android|Mobi/.test(navigator.userAgent),
                se = R(te),
                re = Object(r.forwardRef)(({
                    disableInitialInputFocus: e,
                    disabled: t,
                    error: n,
                    messageText: r,
                    onChange: a,
                    onInputBlur: i,
                    onInputFocus: o,
                    onKeyDown: c,
                    validationMessage: d,
                    showQuickReplyPlaceholder: l,
                    onPaste: p
                }, h) => Object(s.jsx)(I, {
                    children: b => Object(s.jsx)(_, {
                        "aria-label": u.a.text(l ? "conversations-visitor-ui.chatTextArea.forceQuickReplyPlaceholder" : "conversations-visitor-ui.chatTextArea.placeholder", {
                            locale: b
                        }),
                        validationMessage: d,
                        error: n,
                        required: !0,
                        children: d => Object(s.jsx)(se, Object.assign({}, d, {
                            use: "unstyled",
                            error: n,
                            className: "widget-textarea message-box",
                            "data-test-id": "widget-textarea",
                            tabIndex: "0",
                            ref: h,
                            maxHeight: 100,
                            placeholder: u.a.text(l ? "conversations-visitor-ui.chatTextArea.forceQuickReplyPlaceholder" : "conversations-visitor-ui.chatTextArea.placeholder", {
                                locale: b
                            }),
                            disabled: t,
                            onChange: a,
                            onKeyDown: c,
                            value: r,
                            onFocus: o,
                            onBlur: i,
                            onPaste: p,
                            shouldAutofocus: !(e || ne())
                        }))
                    })
                }));
            re.propTypes = {
                disableInitialInputFocus: b.a.bool.isRequired,
                disabled: b.a.bool.isRequired,
                error: b.a.bool.isRequired,
                messageText: b.a.string.isRequired,
                onChange: b.a.func.isRequired,
                onInputBlur: b.a.func,
                onInputFocus: b.a.func,
                onKeyDown: b.a.func.isRequired,
                onPaste: b.a.func,
                showQuickReplyPlaceholder: b.a.bool.isRequired,
                validationMessage: b.a.string.isRequired
            };
            re.displayName = "TextInput";
            var ae = re,
                ie = n("sl/w"),
                oe = n("r1tY"),
                ce = n.n(oe),
                de = n("/mXs");
            const le = ["left", "right"],
                ue = ["top", "bottom"],
                pe = ["left top", "left bottom", "right top", "right bottom", "top left", "top right", "bottom left", "bottom right", "top center", "bottom center", "left middle", "right middle"],
                he = [...le, ...ue, ...pe];

            function be(e) {
                return e.split(" ")[0]
            }

            function me(e) {
                return le.includes(e)
            }

            function ge(e) {
                const t = e.split(" ")[1];
                return t || (me(be(e)) ? "middle" : "center")
            }
            const fe = 16,
                je = 8,
                Oe = ({
                    placement: e
                }) => {
                    switch (be(e)) {
                        case "top":
                            return Object(m.css)(["transform:rotate(45deg);top:-", "px;"], fe + 5);
                        case "right":
                            return Object(m.css)(["transform:rotate(135deg);right:-", "px;"], fe + 5);
                        case "bottom":
                            return Object(m.css)(["transform:rotate(-135deg);bottom:-", "px;"], fe + 5);
                        case "left":
                            return Object(m.css)(["transform:rotate(-45deg);left:-", "px;"], fe + 5);
                        default:
                            return ""
                    }
                },
                xe = ({
                    placement: e
                }) => {
                    switch (ge(e)) {
                        case "top":
                            return Object(m.css)(["top:", "px;"], je);
                        case "middle":
                            return Object(m.css)(["top:calc(50% - ", "px);"], fe / 2);
                        case "bottom":
                            return Object(m.css)(["bottom:", "px;"], je);
                        case "left":
                            return Object(m.css)(["left:", "px;"], je);
                        case "center":
                            return Object(m.css)(["left:calc(50% - ", "px);"], fe / 2);
                        case "right":
                            return Object(m.css)(["right:", "px;"], je);
                        default:
                            return ""
                    }
                },
                ye = ({
                    placement: e
                }) => Object(m.css)(["", ";", ";"], Oe({
                    placement: e
                }), xe({
                    placement: e
                }));
            var ve = n("iKGd");
            const Ce = "#425b76",
                Ie = () => Ce,
                Te = () => ve.o;
            var we = g.a.div.withConfig({
                displayName: "VizExTooltipArrow",
                componentId: "sc-31c073-0"
            })(["position:absolute;pointer-events:none;border:none;clip-path:polygon(100% 100%,0 100%,100% 0);border-top-left-radius:100%;border-radius:3px;border-top-color:transparent !important;border-left-color:transparent !important;border-bottom-right-radius:3px;width:16px;height:16px;background-color:", ";", ""], ({
                backgroundColor: e
            }) => e || Ie(), ({
                placement: e
            }) => ye({
                placement: e
            }));
            const Se = 16,
                ke = ({
                    placement: e
                }) => {
                    switch (ge(e)) {
                        case "top":
                            return Object(m.css)(["top:0;"]);
                        case "bottom":
                            return Object(m.css)(["bottom:0;"]);
                        case "left":
                            return Object(m.css)(["left:0;"]);
                        case "right":
                            return Object(m.css)(["right:0;"]);
                        default:
                            return ""
                    }
                },
                Re = ({
                    placement: e
                }) => {
                    switch (be(e)) {
                        case "top":
                            return Object(m.css)(["transform:translateY(-100%);top:-", "px;"], Se - 5);
                        case "right":
                            return Object(m.css)(["transform:translateX(100%);right:-", "px;"], Se - 5);
                        case "bottom":
                            return Object(m.css)(["transform:translateY(100%);bottom:-", "px;"], Se - 5);
                        case "left":
                            return Object(m.css)(["transform:translateX(-100%);left:-", "px;"], Se - 5);
                        default:
                            return ""
                    }
                },
                Ae = ({
                    placement: e
                }) => {
                    switch (e) {
                        case "top center":
                        case "top middle":
                            return Object(m.css)(["transform:translate(-50%,-100%);left:50%;"]);
                        case "bottom middle":
                        case "bottom center":
                            return Object(m.css)(["transform:translate(-50%,100%);left:50%;"]);
                        case "left center":
                        case "left middle":
                            return Object(m.css)(["transform:translate(-100%,-50%);top:50%;"]);
                        case "right center":
                        case "right middle":
                            return Object(m.css)(["transform:translate(100%,-50%);top:50%;"]);
                        default:
                            return ""
                    }
                },
                Pe = ({
                    placement: e
                }) => Object(m.css)(["", ";", ";", ""], Re({
                    placement: e
                }), ke({
                    placement: e
                }), Ae({
                    placement: e
                }));
            var Me = g.a.div.withConfig({
                    displayName: "VizExTooltipBody",
                    componentId: "sc-1bhk9w-0"
                })(["border-radius:3px;font-size:13px;width:max-content;max-width:232px;display:block;position:absolute;visibility:visible;box-shadow:0 3px 8px rgba(0,0,0,0.1);line-height:1.5;padding:10px 16px;text-decoration:none;word-wrap:break-word;", ";background-color:", ";color:", ";pointer-events:", ";"], ({
                    placement: e
                }) => Pe({
                    placement: e
                }), ({
                    backgroundColor: e
                }) => e || Ie(), ({
                    textColor: e
                }) => e || Te(), ({
                    open: e
                }) => e ? "all" : "none"),
                Ee = n("0ePj");

            function Ne(e) {
                let [t, n] = Object(Ee.a)(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
                return {
                    isOpen: t,
                    setOpen: n,
                    open() {
                        n(!0)
                    },
                    close() {
                        n(!1)
                    },
                    toggle() {
                        n(!t)
                    }
                }
            }
            const _e = 1500,
                Fe = 500;
            let qe = {},
                Le = 0,
                Be = !1,
                Ue = null,
                De = null;

            function ze(e = {}) {
                let {
                    delay: t = _e
                } = e, {
                    isOpen: n,
                    open: s,
                    close: a
                } = Ne(e), i = Object(r.useMemo)(() => "" + ++Le, []), o = Object(r.useRef)(), c = () => {
                    qe[i] = u
                }, d = () => {
                    for (let e in qe)
                        if (e !== i) {
                            qe[e](!0);
                            delete qe[e]
                        }
                }, l = () => {
                    clearTimeout(o.current);
                    o.current = null;
                    d();
                    c();
                    Be = !0;
                    s();
                    if (Ue) {
                        clearTimeout(Ue);
                        Ue = null
                    }
                    if (De) {
                        clearTimeout(De);
                        De = null
                    }
                }, u = e => {
                    if (e) {
                        clearTimeout(o.current);
                        o.current = null;
                        a()
                    } else o.current || (o.current = setTimeout(() => {
                        o.current = null;
                        a()
                    }, Fe));
                    if (Ue) {
                        clearTimeout(Ue);
                        Ue = null
                    }
                    if (Be) {
                        De && clearTimeout(De);
                        De = setTimeout(() => {
                            delete qe[i];
                            De = null;
                            Be = !1
                        }, Fe)
                    }
                }, p = () => {
                    d();
                    c();
                    n || Ue || Be ? n || l() : Ue = setTimeout(() => {
                        Ue = null;
                        Be = !0;
                        l()
                    }, t)
                };
                Object(r.useEffect)(() => () => {
                    clearTimeout(o.current);
                    qe[i] && delete qe[i]
                }, [i]);
                return {
                    isOpen: n,
                    open: e => {
                        !e && t > 0 && !o.current ? p() : l()
                    },
                    close: u
                }
            }
            var He = n("dByS"),
                Ve = n("xr6y"),
                Qe = n("Zulv");
            const We = g.a.div.withConfig({
                    displayName: "VizExTooltip__Popover",
                    componentId: "sc-1ncaqqk-0"
                })(["transition-property:", ";transition-duration:", "ms;opacity:", ";transform:", ";position:absolute;pointer-events:none;width:100%;height:100%;"], ({
                    transitioning: e
                }) => e ? "opacity ease-out, transform ease-out" : "none", ({
                    duration: e
                }) => e, ({
                    open: e
                }) => e ? "1" : "0", ({
                    open: e,
                    transitioning: t
                }) => e && !t ? "none" : e ? "scale(1)" : "scale(.75)"),
                Je = g.a.div.withConfig({
                    displayName: "VizExTooltip__PopoverWrapper",
                    componentId: "sc-1ncaqqk-1"
                })(["display:inline-block;position:relative;"]),
                Ge = {
                    placement: "top right"
                },
                Ye = e => {
                    const {
                        content: t,
                        backgroundColor: n,
                        textColor: a,
                        placement: i,
                        children: o,
                        theme: c,
                        onOpenChange: d,
                        open: l,
                        delay: u = 0
                    } = e, p = Object(T.a)(e, ["content", "backgroundColor", "textColor", "placement", "children", "theme", "onOpenChange", "open", "delay"]), h = "boolean" == typeof l, b = Object.assign({
                        delay: u
                    }, h && {
                        isOpen: l
                    }), m = Object(r.useRef)(null), g = ze(b), {
                        triggerProps: f,
                        tooltipProps: j
                    } = Object(He.a)(b, g, m), {
                        keyboardProps: O
                    } = Object(Ve.h)({
                        onKeyUp: f.onKeyUp,
                        onKeyDown: f.onKeyDown
                    });
                    if (!Object(r.isValidElement)(o)) return null;
                    if (!t) return o;
                    const x = () => {
                            if (!h) {
                                Object(F.a)(d, !0);
                                g.open(!0)
                            }
                        },
                        y = () => {
                            if (!h) {
                                Object(F.a)(d, !1);
                                g.close(!0)
                            }
                        };
                    return Object(s.jsxs)(Je, Object.assign({}, p, {
                        onMouseEnter: x,
                        onMouseLeave: y,
                        children: [Object(s.jsxs)(We, {
                            open: g.isOpen,
                            duration: 250,
                            transitioning: !0,
                            "data-test-id": "tooltip-popover",
                            children: [Object(s.jsx)(Me, Object.assign({
                                textColor: a,
                                backgroundColor: n,
                                placement: i,
                                open: g.isOpen,
                                theme: c,
                                "data-test-open": g.isOpen
                            }, j, {
                                "aria-hidden": !0,
                                children: t
                            })), Object(s.jsx)(we, {
                                backgroundColor: n,
                                placement: i,
                                theme: c
                            })]
                        }), Object(r.cloneElement)(r.Children.only(o), Object.assign({}, Object(Qe.i)(f, O), {
                            onClick: o.props.onClick,
                            ref: m
                        }))]
                    }))
                };
            Ye.propTypes = {
                backgroundColor: b.a.string,
                children: b.a.node.isRequired,
                content: b.a.node,
                delay: b.a.number,
                onOpenChange: b.a.func,
                open: b.a.bool,
                placement: b.a.oneOf(he),
                textColor: b.a.string,
                theme: A.a
            };
            Ye.displayName = "VizExTooltip";
            Ye.defaultProps = Ge;
            var Ke = Ye,
                Xe = n("P7jJ"),
                $e = n("tOFb");
            const Ze = g.a.input.withConfig({
                displayName: "AttachmentPickerButton__HiddenInput",
                componentId: "sc-1q5rf25-0"
            })(["display:none;"]);
            class et extends r.PureComponent {
                constructor(e) {
                    super(e);
                    this.inputRefCallback = e => {
                        this.inputRef = e
                    };
                    this.findInputNode = () => {
                        if (!this.inputRef) return null;
                        return ce.a.findDOMNode(this.inputRef)
                    };
                    this.clearInputNode = () => {
                        const e = this.findInputNode();
                        e && (e.value = "")
                    };
                    this.handlePickerClick = e => {
                        const t = this.findInputNode();
                        t && t.click();
                        this.props.onClick(e)
                    };
                    this.onInputChange = ({
                        target: {
                            files: e
                        }
                    }) => {
                        this.props.onSelectFiles({
                            files: e
                        });
                        this.clearInputNode()
                    };
                    this.renderMaxFileSizeTooltip = () => {
                        if (!this.props.mobile) return Object(s.jsx)(ie.a, {
                            message: "conversations-visitor-ui.fileSizeLimit",
                            options: {
                                size: u.a.formatSize(this.props.maxAttachmentFileSize)
                            }
                        })
                    };
                    this.inputRef = null
                }
                render() {
                    const {
                        disabled: e
                    } = this.props;
                    return Object(s.jsxs)(r.Fragment, {
                        children: [Object(s.jsx)(Ke, {
                            content: this.renderMaxFileSizeTooltip(),
                            placement: "top right",
                            children: Object(s.jsx)(de.a, {
                                disabled: e,
                                onClick: this.handlePickerClick,
                                use: "transparent-on-background",
                                "aria-label": u.a.text("conversations-visitor-ui.visitorExperienceAriaLabels.attachment"),
                                shape: "circle",
                                "data-test-id": "AttachmentPickerButton-VizExIconButton",
                                children: Object(s.jsx)(Xe.a, {
                                    icon: Object(s.jsx)($e.a, {})
                                })
                            })
                        }), Object(s.jsx)(Ze, {
                            accept: this.props.accept.join(","),
                            "data-selenium-test": "visitor-attachment-file-input",
                            "data-test-id": "AttachmentPickerButton-input",
                            disabled: this.props.disabled,
                            ref: this.inputRefCallback,
                            type: "file",
                            multiple: this.props.allowMultiple,
                            onChange: this.onInputChange
                        })]
                    })
                }
            }
            et.displayName = "AttachmentPickerButton";
            et.propTypes = {
                accept: b.a.arrayOf(b.a.string).isRequired,
                allowMultiple: b.a.bool.isRequired,
                disabled: b.a.bool,
                maxAttachmentFileSize: b.a.number.isRequired,
                mobile: b.a.bool,
                onClick: b.a.func,
                onSelectFiles: b.a.func.isRequired
            };
            et.defaultProps = {
                accept: [],
                allowMultiple: !1,
                onClick: () => {}
            };
            var tt = et,
                nt = n("Fjoq"),
                st = n("qKTc"),
                rt = n("Xs/R");
            const at = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                it = `(?:${Object.keys(at).join("|")})`,
                ot = RegExp(it),
                ct = RegExp(it, "g");

            function dt(e) {
                e = null == e ? "" : "" + e;
                return ot.test(e) ? e.replace(ct, e => at[e]) : e
            }
            const lt = 13,
                ut = g.a.div.withConfig({
                    displayName: "MessageEditor__FileUploadWrapper",
                    componentId: "sc-142mntr-0"
                })(["display:flex;overflow:auto;& > *:not(:last-child){margin-right:8px;}"]);
            let pt = !1;
            const ht = Object(r.forwardRef)(({
                canUploadAttachments: e,
                chatInputChanged: t,
                coloring: n,
                disablePublish: a,
                disabled: d,
                fileTypes: p,
                inputStaging: h,
                maxAttachmentFileSize: b,
                mobile: m,
                networkOffline: g,
                onAttachmentButtonClick: f,
                onRemoveAttachment: O,
                onSelectAttachmentFiles: x,
                publishMessage: C,
                shouldDisableInitialInputFocus: I,
                shouldHideAttachmentButton: T,
                shouldSendInputStagingEvent: w,
                showQuickReplyPlaceholder: S,
                showingHsBranding: k,
                stagedAttachments: R,
                stagedMessageEditorText: A,
                supportsAttachments: P,
                toggleOnAndOffInputFocus: M
            }, E) => {
                const [N, _] = Object(r.useState)(A || ""), F = Object(r.useRef)(), q = E || F, L = () => {
                    q && q.current && q.current.focus()
                };
                Object(r.useEffect)(() => {
                    d || I || ne() || !q || !q.current || q.current.focus()
                }, [q, d, I]);
                const B = () => N,
                    U = () => B().length < l.a,
                    D = () => R && R.size,
                    z = () => !R || R.every(c.isUploadCompleted),
                    H = () => {
                        const e = Boolean(B()) && "" !== B().trim();
                        return U() && z() && (e || D())
                    },
                    V = () => H() && !g && !d && !a,
                    Q = e => {
                        const n = e.target.value;
                        _(n);
                        w && !n && h(n, !0);
                        t(n);
                        if ((d || a) && !pt) {
                            j.a.captureMessage("VISITOR_CAN_TYPE_WHILE_PUBLISH_DISABLED");
                            pt = !0
                        }
                    },
                    W = () => {
                        if (V()) {
                            const e = B(),
                                t = `<div>${i.a.link(dt(e),{stripPrefix:!1})}</div>`.replace(/\n/g, "<br>");
                            C({
                                text: e,
                                richText: t
                            });
                            _("");
                            h("", !0);
                            L()
                        }
                    },
                    J = e => {
                        if (e.keyCode === lt && !1 === e.shiftKey) {
                            W();
                            e.preventDefault();
                            e.stopPropagation();
                            return !1
                        }
                        return !0
                    },
                    G = () => U() ? "" : u.a.text("conversations-visitor-ui.chatTextArea.validationMessage"),
                    Y = ({
                        files: e
                    }) => {
                        x({
                            files: e
                        });
                        L()
                    },
                    K = () => {
                        d || M(!0)
                    },
                    X = () => {
                        M(!1)
                    },
                    $ = t => {
                        t && t.clipboardData && t.clipboardData.files && e && x({
                            files: t.clipboardData.files
                        })
                    },
                    Z = Object(s.jsx)(ae, {
                        disableInitialInputFocus: I,
                        disabled: d || g || a,
                        error: !U(),
                        messageText: N,
                        onChange: Q,
                        onKeyDown: J,
                        showQuickReplyPlaceholder: S,
                        ref: q,
                        showingHsBranding: k,
                        validationMessage: G(),
                        onInputFocus: K,
                        onInputBlur: X,
                        onPaste: $
                    }),
                    ee = D() ? Object(s.jsx)(ut, {
                        className: "m-bottom-2" + (k ? " m-top-2" : ""),
                        children: R.map(e => Object(s.jsx)("div", {
                            "data-test-id": "MessageEditor-FileUploadItem",
                            children: Object(s.jsx)(v.a, {
                                attachment: e,
                                onRemove: () => {
                                    O({
                                        attachment: e
                                    })
                                }
                            })
                        }, Object(o.getLocalId)(e)))
                    }) : null,
                    te = Object(nt.c)(n) ? null : Object(nt.a)(n),
                    se = !V();
                return Object(s.jsx)(y, {
                    inputToRender: Z,
                    FileUploads: ee,
                    showingHsBranding: k,
                    children: Object(s.jsxs)(r.Fragment, {
                        children: [P && !T ? Object(s.jsx)("div", {
                            className: m ? "m-right-3" : "",
                            children: Object(s.jsx)(tt, {
                                accept: p,
                                color: te,
                                disabled: !e || d,
                                mobile: m,
                                onClick: f,
                                onSelectFiles: Y,
                                maxAttachmentFileSize: b
                            })
                        }) : null, Object(s.jsx)(de.a, {
                            className: "chat-send-button",
                            "data-test-id": "chat-send-button",
                            disabled: se,
                            shape: "circle",
                            onClick: W,
                            use: "transparent-on-background",
                            "aria-label": u.a.text("conversations-visitor-ui.visitorExperienceAriaLabels.send"),
                            children: Object(s.jsx)(Xe.a, {
                                icon: Object(s.jsx)(rt.a, {})
                            })
                        })]
                    })
                })
            });
            ht.propTypes = {
                canUploadAttachments: b.a.bool.isRequired,
                chatInputChanged: b.a.func.isRequired,
                coloring: Object(d.a)("ColoringRecord"),
                disablePublish: b.a.bool.isRequired,
                disabled: b.a.bool.isRequired,
                fileTypes: b.a.arrayOf(b.a.string).isRequired,
                inputStaging: b.a.func.isRequired,
                maxAttachmentFileSize: b.a.number.isRequired,
                mobile: b.a.bool,
                networkOffline: b.a.bool.isRequired,
                onAttachmentButtonClick: b.a.func,
                onRemoveAttachment: b.a.func.isRequired,
                onSelectAttachmentFiles: b.a.func.isRequired,
                publishMessage: b.a.func.isRequired,
                shouldDisableInitialInputFocus: b.a.bool,
                shouldHideAttachmentButton: b.a.bool,
                shouldSendInputStagingEvent: b.a.bool.isRequired,
                showQuickReplyPlaceholder: b.a.bool.isRequired,
                showingHsBranding: b.a.bool,
                stagedAttachments: b.a.instanceOf(p.List),
                stagedMessageEditorText: b.a.string,
                supportsAttachments: b.a.bool.isRequired,
                toggleOnAndOffInputFocus: b.a.func
            };
            ht.displayName = "MessageEditor";
            ht.defaultProps = {
                isThreadStarted: !0,
                disablePublish: !1,
                onRemoveAttachment: () => {},
                onSelectAttachmentFiles: () => {},
                createNewThread: () => {},
                supportsAttachments: !1,
                fileTypes: st.a,
                stagedAttachments: [],
                toggleOnAndOffInputFocus: () => {}
            };
            t.a = ht
        },
        "2+Io": function(e, t, n) {
            var s = n("pDio")(n("8i16"), "Map");
            e.exports = s
        },
        "31tl": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = "WEB"
        },
        "3FHW": function(e, t, n) {
            var s = n("8X3F"),
                r = n("kmmH"),
                a = "[object AsyncFunction]",
                i = "[object Function]",
                o = "[object GeneratorFunction]",
                c = "[object Proxy]";

            function d(e) {
                if (!r(e)) return !1;
                var t = s(e);
                return t == i || t == o || t == a || t == c
            }
            e.exports = d
        },
        "3OTY": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            n.d(t, "c", (function() {
                return u
            }));
            n.d(t, "b", (function() {
                return p
            }));
            n.d(t, "d", (function() {
                return h
            }));
            var s = n("Ut5p"),
                r = n("KrP/"),
                a = n("tlSg"),
                i = n("k3iI"),
                o = n("E6wg"),
                c = n("NpZo"),
                d = n("081M");
            const l = Object(s.b)(r.a),
                u = Object(s.b)(r.c),
                p = Object(s.b)(r.b, e => ({
                    error: e
                }));

            function h(e = !1) {
                return e ? (e, t) => {
                    const n = Object(o.getSessionId)(t()),
                        s = Object(c.getSelectedThreadId)(t()),
                        r = Object(d.getHubspotUtk)();
                    e(l());
                    const h = ({
                            sessionId: t
                        } = {}) => {
                            e(Object(i.updateSessionId)(t));
                            e(u())
                        },
                        b = t => {
                            e(p(t))
                        };
                    Object(a.sendConsentToCommunicate)({
                        sessionId: n,
                        hubspotUtk: r,
                        threadId: s
                    }).then(h, b).catch(e => {
                        setTimeout(() => {
                            throw e
                        })
                    })
                } : null
            }
        },
        "3oj9": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var s = n("KXN9"),
                r = n("MBJP"),
                a = n("ZSXR"),
                i = n("eEyY"),
                o = n("Ryja"),
                c = n("eg5p");
            const d = Object(r.a)([i.getCurrentThreadId, a.a, o.getStagedThreadHistory], (e, t, n) => e === c.a ? n : Object(s.a)(t) || null)
        },
        "3yBC": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            }));
            n.d(t, "c", (function() {
                return r
            }));
            n.d(t, "a", (function() {
                return a
            }));
            const s = "SIZE_LIMIT_EXCEEDED",
                r = "UPLOAD_ERROR",
                a = "INVALID_FILE_TYPE"
        },
        "4cgu": function(e, t, n) {
            "use strict";
            var s = n("Q+dC"),
                r = n("QgEn"),
                a = n("VfuR"),
                i = n.n(a),
                o = n("9f1P"),
                c = n.n(o),
                d = n("uax2"),
                l = n("0wen"),
                u = n("54vt");
            const p = "primary",
                h = "secondary",
                b = {
                    PRIMARY: p,
                    SECONDARY: h
                },
                m = {
                    [p]: l.PRIMARY,
                    [h]: l.SECONDARY
                },
                g = e => m[e],
                f = {
                    [p]: u.SECONDARY,
                    [h]: u.PRIMARY
                },
                j = e => f[e];
            var O = b,
                x = n("CR0J");
            const y = c()(d.a).withConfig({
                    displayName: "VizExLoadingButton__Spinner",
                    componentId: "sc-10i3vzv-0"
                })(["height:0;position:absolute;top:50%;right:0;transition:opacity 0.2s;opacity:", ";"], ({
                    show: e
                }) => e ? 1 : 0),
                v = c.a.div.withConfig({
                    displayName: "VizExLoadingButton__ReadyWrapper",
                    componentId: "sc-10i3vzv-1"
                })(["transition:opacity 0.2s;opacity:", ";"], ({
                    show: e
                }) => e ? 1 : 0),
                C = e => {
                    const {
                        children: t,
                        Button: n,
                        result: a,
                        use: i,
                        theme: o,
                        currentState: c,
                        onClick: d
                    } = e, l = Object(s.a)(e, ["children", "Button", "result", "use", "theme", "currentState", "onClick"]), u = "ready" === c, p = "submitting" === c, h = "done" === c;
                    return Object(r.jsxs)(n, Object.assign({
                        theme: o,
                        onClick: p || h ? () => {} : d,
                        use: g(i),
                        style: {
                            position: "relative"
                        }
                    }, l, {
                        children: [Object(r.jsx)(v, {
                            "data-test-id": "VizExLoadingButton-Ready",
                            show: u,
                            children: t
                        }), Object(r.jsx)(y, {
                            size: "xs",
                            grow: !0,
                            use: j(i),
                            theme: o,
                            showResult: h,
                            show: p || h,
                            "data-test-id": "VizExLoadingButton-Spinner",
                            children: a
                        })]
                    }))
                };
            C.propTypes = {
                Button: i.a.elementType.isRequired,
                children: i.a.node.isRequired,
                currentState: i.a.oneOf(["ready", "submitting", "done"]),
                onClick: i.a.func,
                result: i.a.node,
                theme: x.a,
                use: i.a.oneOf(Object.values(O))
            };
            C.defaultProps = {
                "data-test-id": "loading-button",
                use: O.PRIMARY,
                onClick: () => {}
            };
            C.displayName = "VizExLoadingButton";
            t.a = C
        },
        "4hT6": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getFileSize", (function() {
                return a
            }));
            var s = n("JGJA"),
                r = n("ughT");
            const a = e => {
                const t = Object(r.getFile)(e);
                return t && Object(s.a)("size", t) || 0
            }
        },
        "4nf7": function(e, t, n) {
            "use strict";
            var s = n("021p"),
                r = n("bOW6"),
                a = n("BnUr"),
                i = n("QYOI"),
                o = n("MBJP"),
                c = n("qjq5"),
                d = n("3Yas");
            d.a.implement(Array, (e, t) => i.Iterable.isIterable(e) ? t.concat(e.toJS()) : t.concat(e));
            d.a.implementInherited(i.Seq.Indexed, (e, t) => t.concat(e));
            d.a.implementInherited(i.Collection.Indexed, (e, t) => t.concat(e));
            d.a.implement(String, (e, t) => t.concat(e));
            var l = d.a,
                u = Object(c.a)(l),
                p = n("SGjM"),
                h = n("DdHT"),
                b = n("6aYC"),
                m = n("k09d"),
                g = n("Z6IV"),
                f = n("3oj9"),
                j = n("5oUx");
            n.d(t, "a", (function() {
                return x
            }));
            let O;
            const x = Object(o.a)([m.a, f.a, b.a, j.a], (e, t, n, o) => {
                const c = Object(a.getChannelName)(e),
                    d = Object(a.getThreadId)(e),
                    l = Object(s.d)(t) || Object(i.List)(),
                    b = Object(h.a)(u(l), u(n), Object(p.a)(Object(r.wrapFailedMessage)({
                        threadId: d,
                        channel: c
                    })), u(o))(Object(i.List)()),
                    m = b.size ? b.filter(g.isSupportedMessageType) : Object(i.List)();
                Object(i.is)(O, m) || (O = m);
                return O
            })
        },
        "5N3d": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "validateAttachmentFile", (function() {
                return i
            }));
            var s = n("3yBC"),
                r = n("eg+O"),
                a = n("z4Bj");
            const i = e => {
                const t = Object(a.a)();
                Object(r.fileExceedsSizeLimit)(e) ? t.reject(s.b) : t.resolve();
                return t.promise
            }
        },
        "5SRO": function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("mKxs"),
                a = n("VfuR"),
                i = n.n(a),
                o = n("9f1P"),
                c = n.n(o);
            const d = 32,
                l = e => "number" == typeof e ? e + "px" : e;
            var u = n("Q+dC");
            const p = "1.5s",
                h = "linear",
                b = "infinite",
                m = Object(o.keyframes)(["100%{transform:translateX(100%);}"]),
                g = Object(o.css)(["animation:", " ", " ", " ", ";"], m, p, h, b);
            var f = n("+KD7");
            const j = "default",
                O = "blank",
                x = "on-shade",
                y = "on-dark",
                v = {
                    [j]: {
                        primary: f.j,
                        secondary: f.l
                    },
                    [x]: {
                        primary: f.l,
                        secondary: f.j
                    },
                    [y]: {
                        primary: f.k,
                        secondary: f.t
                    }
                },
                C = `\n  background: ${f.r};\n`,
                I = ({
                    primary: e,
                    secondary: t
                }) => `\n  background: ${e};\n  background: linear-gradient(to right, ${e}, ${t} 20%, ${e} 40%);\n`,
                T = e => v[e],
                w = ({
                    use: e
                }) => e === O ? C : I(T(e)),
                S = j,
                k = c.a.div.withConfig({
                    displayName: "SkeletonBase__SkeletonBaseInner",
                    componentId: "sc-1cphyas-0"
                })(["position:relative;margin:", ";padding:", ";", ";width:100%;overflow:hidden;z-index:1;&::after{content:' ';display:block;position:absolute;top:0;left:0;right:0;height:100%;transform:translateX(-100%);", ";", "}"], ({
                    margin: e
                }) => l(e), ({
                    padding: e
                }) => l(e), ({
                    use: e = S
                }) => e === O ? C : "background: " + v[e].primary, ({
                    use: e = S
                }) => e !== O && g, ({
                    use: e = S
                }) => e !== O && w({
                    use: e
                })),
                R = e => {
                    let {
                        children: t
                    } = e, n = Object(u.a)(e, ["children"]);
                    return Object(s.jsx)(k, Object.assign({
                        "data-loading": "true"
                    }, n, {
                        children: t
                    }))
                };
            R.displayName = "SkeletonBase";
            R.propTypes = {
                children: i.a.node,
                className: i.a.string,
                margin: i.a.oneOfType([i.a.number, i.a.string]),
                padding: i.a.oneOfType([i.a.number, i.a.string]),
                use: i.a.oneOf([j, x, y, O])
            };
            var A = R;
            const P = d,
                M = c()(A).withConfig({
                    displayName: "SkeletonCircle",
                    componentId: "zkdp6-0"
                })(["border-radius:50%;width:", ";height:", ";min-width:", ";&::before{border-radius:50%;}"], ({
                    size: e = P
                }) => l(e), ({
                    size: e = P
                }) => l(e), ({
                    size: e = P
                }) => l(e));
            M.displayName = "SkeletonCircle";
            M.propTypes = {
                size: i.a.number
            };
            var E = M,
                N = n("Ktcs"),
                _ = n("GdKg"),
                F = n("0IK8"),
                q = n("lw+E"),
                L = n("cAkk"),
                B = n.n(L),
                U = n("Mx3c"),
                D = n("npjq");
            const z = () => {};
            class H extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.handleClick = this.handleClick.bind(this)
                }
                handleClick() {
                    const {
                        onClick: e,
                        sender: t
                    } = this.props;
                    e(t)
                }
                render() {
                    const {
                        isLoading: e,
                        sender: t,
                        size: n
                    } = this.props;
                    if (e) return Object(s.jsx)(E, {
                        size: 32
                    });
                    if (!t) return Object(s.jsx)(_.a, {
                        size: n
                    });
                    const r = Object(F.getSenderTypeForCMF)(t),
                        a = D.a.text("conversations-visitor-message-history.agent"),
                        i = D.a.text("conversations-visitor-message-history.avatar", {
                            identifier: Object(q.c)(t) || a
                        });
                    switch (r) {
                        case U.BOT:
                        case U.SYSTEM:
                            return Object(s.jsx)(_.a, {
                                size: n,
                                src: Object(q.a)(t) || B.a,
                                alt: i
                            });
                        default:
                            return Object(s.jsx)("span", {
                                onClick: this.handleClick,
                                children: Object(s.jsx)(_.a, {
                                    size: n,
                                    src: Object(q.a)(t),
                                    alt: i
                                })
                            })
                    }
                }
            }
            H.displayName = "SenderAvatar";
            H.propTypes = {
                isLoading: i.a.bool,
                onClick: i.a.func.isRequired,
                sender: Object(r.a)("Sender"),
                size: _.a.propTypes.size
            };
            H.defaultProps = {
                onClick: z,
                size: "sm"
            };
            var V = n("yCEM"),
                Q = n("Ydwr");
            const W = "#cbd6e2",
                J = "#00a4bd";
            var G = n("pcz0");
            const Y = Object(N.createContext)(Object(G.a)()),
                K = () => Object(N.useContext)(Y);
            var X = Y;
            const $ = Object(o.keyframes)(["25%{background-color:", ";}75%{background-color:", ";}"], W, W),
                Z = Object(o.keyframes)(["0%,100%{transform:translateY(0);}25%{transform:translateY(.25em);}50%{transform:translateY(0);}75%{transform:translateY(-.25em);}"]),
                ee = c.a.div.withConfig({
                    displayName: "TypingDots__Dot",
                    componentId: "sc-11x9zka-0"
                })(["position:relative;background-color:currentColor;color:", ";border-radius:50%;height:1em;width:1em;animation:", ",", ";animation-duration:1s;animation-timing-function:linear;animation-iteration-count:infinite;&:not(:last-child){margin-right:0.75em;}&:nth-child(2){animation-delay:-0.66s;}&:nth-child(3){animation-delay:-0.33s;}"], e => e.color ? e.color : J, Z, $),
                te = c.a.div.withConfig({
                    displayName: "TypingDots__TypingDotsWrapper",
                    componentId: "sc-11x9zka-1"
                })(["display:flex;align-items:center;justify-content:center;height:24px;font-size:8px;width:4.5em;"]);
            class ne extends N.Component {
                render() {
                    const {
                        widgetAccent: e
                    } = this.context;
                    return Object(s.jsxs)(te, {
                        "data-test-id": "typing-dots",
                        children: [Object(s.jsx)(ee, {
                            color: e,
                            className: "dot-1"
                        }), Object(s.jsx)(ee, {
                            color: e,
                            className: "dot-2"
                        }), Object(s.jsx)(ee, {
                            color: e,
                            className: "dot-3"
                        })]
                    })
                }
            }
            ne.displayName = "TypingDots";
            ne.contextType = X;
            var se = ne,
                re = i.a.oneOf([V.b, V.a, V.c]),
                ae = n("vVnP"),
                ie = n("Gc2C");
            const oe = e => {
                    Object(ie.a)(void 0 === e || "object" == typeof e, "Invalid config type given");
                    e && Object.values(e).forEach(e => {
                        Object(ie.a)("object" == typeof e, "All themes in the configuration must be a `Theme` object. Found %s", typeof e)
                    })
                },
                ce = Object(N.memo)(({
                    themeConfig: e,
                    use: t,
                    children: n
                }) => {
                    oe(e);
                    e = Object.assign({}, ae.b, e);
                    const r = t ? e[t] : e[V.b] || Object(G.a)();
                    return Object(s.jsx)(X.Provider, {
                        value: r,
                        children: n
                    })
                });
            ce.displayName = "ThemeProvider";
            ce.propTypes = {
                children: i.a.node.isRequired,
                themeConfig: i.a.object,
                use: re
            };
            var de = ce;
            const le = c.a.div.withConfig({
                displayName: "PrimaryMessageAvatar__PrimaryMessageAvatarWrapper",
                componentId: "sc-1mukv35-0"
            })(["align-items:center;display:flex;flex-shrink:0;justify-items:center;margin-top:35px;"]);
            class ue extends N.PureComponent {
                render() {
                    const {
                        children: e,
                        className: t
                    } = this.props;
                    return Object(s.jsx)(le, {
                        "data-test-id": "primary-message-avatar",
                        className: t,
                        children: e
                    })
                }
            }
            ue.displayName = "PrimaryMessageAvatar";
            ue.propTypes = {
                children: i.a.node.isRequired,
                className: i.a.string
            };
            const pe = c.a.div.withConfig({
                    displayName: "PrimaryMessageContentSection__PaddedArea",
                    componentId: "sc-3d4zs2-0"
                })(["padding:8px 16px;"]),
                he = c.a.div.withConfig({
                    displayName: "PrimaryMessageContentSection__PrimaryMessageContentSectionWrapper",
                    componentId: "sc-3d4zs2-1"
                })(["overflow:hidden;width:100%;button{width:auto;}"]);
            class be extends N.PureComponent {
                renderContent() {
                    const {
                        children: e
                    } = this.props;
                    return Object(s.jsx)(pe, {
                        children: e
                    })
                }
                render() {
                    const {
                        children: e,
                        className: t
                    } = this.props;
                    return N.Children.count(e) > 0 ? Object(s.jsx)(he, {
                        "data-test-id": "primary-message-content-section",
                        className: t,
                        children: Object(s.jsx)("div", {
                            className: "width-100 padding-x-4 padding-y-2",
                            children: this.renderContent()
                        })
                    }) : null
                }
            }
            be.contextType = X;
            be.displayName = "PrimaryMessageContentSection";
            be.propTypes = {
                children: i.a.node,
                className: i.a.string
            };
            var me = n("8Ma8");
            const ge = c.a.div.withConfig({
                    displayName: "PrimaryMessageContent__PrimaryMessageContentWrapper",
                    componentId: "sc-8y6iqq-0"
                })(["position:relative;min-height:32px;word-break:break-word;box-sizing:border-box;border-style:solid;border-width:", ";border-color:", ";background-color:", ";color:", ";display:inline-flex;align-items:center;flex-direction:column;border-radius:", ";", "{border-top-style:solid;border-top-width:1px;border-top-color:", ";&:first-child{border-top:none;}}max-width:284px;"], ({
                    borderWidth: e
                }) => e, ({
                    borderColor: e
                }) => e, ({
                    backgroundColor: e
                }) => e, ({
                    textColor: e
                }) => e, ({
                    borderRadius: e
                }) => e, he, ({
                    borderColor: e
                }) => e),
                fe = e => {
                    const {
                        children: t,
                        className: n,
                        shouldFocusMessage: r
                    } = e, a = K(), {
                        backgroundColor: i,
                        borderColor: o,
                        borderRadius: c,
                        borderWidth: d,
                        textColor: l
                    } = a, u = Object(N.useRef)(null), {
                        disableAutoFocus: p
                    } = Object(me.c)();
                    Object(N.useEffect)(() => {
                        !p && r && u.current && u.current.focus()
                    }, [p, r]);
                    return Object(s.jsx)(ge, {
                        className: n,
                        backgroundColor: i,
                        borderColor: o,
                        borderRadius: c,
                        borderWidth: d,
                        tabIndex: 0,
                        ref: u,
                        textColor: l,
                        "data-test-id": "primary-message-content-wrapper",
                        children: t
                    })
                };
            fe.displayName = "PrimaryMessageContent";
            fe.propTypes = {
                children: i.a.node,
                className: i.a.string,
                shouldFocusMessage: i.a.bool
            };
            var je = fe;
            const Oe = c.a.div.withConfig({
                displayName: "PrimaryMessageFooter__PrimaryMessageFooterWrapper",
                componentId: "sc-1812kci-0"
            })(["display:flex;margin-top:4px;max-width:284px;"]);
            class xe extends N.PureComponent {
                render() {
                    const {
                        children: e,
                        className: t
                    } = this.props;
                    return Object(s.jsx)(Oe, {
                        "data-test-id": "primary-message-footer",
                        className: t,
                        children: e
                    })
                }
            }
            xe.displayName = "PrimaryMessageFooter";
            xe.propTypes = {
                children: i.a.node.isRequired,
                className: i.a.string
            };
            const ye = c.a.div.withConfig({
                displayName: "PrimaryMessageHeader__PrimaryMessageHeaderWrapper",
                componentId: "sc-199pezs-0"
            })(["display:flex;height:16px;align-items:center;margin-top:4px;margin-bottom:4px;width:100%;"]);
            class ve extends N.PureComponent {
                render() {
                    const {
                        children: e,
                        className: t
                    } = this.props;
                    return Object(s.jsx)(ye, {
                        className: t,
                        "data-test-id": "primary-message-header-wrapper",
                        children: e
                    })
                }
            }
            ve.displayName = "PrimaryMessageHeader";
            ve.propTypes = {
                children: i.a.node.isRequired,
                className: i.a.string
            };
            const Ce = c.a.div.withConfig({
                displayName: "PrimaryMessageHeaderContent__PrimaryMessageHeaderContentWrapper",
                componentId: "sc-1aq07s0-0"
            })(["margin-left:1px;min-width:0;"]);
            class Ie extends N.PureComponent {
                render() {
                    const {
                        children: e,
                        className: t
                    } = this.props;
                    return Object(s.jsx)(Ce, {
                        className: t,
                        "data-test-id": "primary-message-header-content-wrapper",
                        children: e
                    })
                }
            }
            Ie.displayName = "PrimaryMessageHeaderContent";
            Ie.propTypes = {
                children: i.a.node.isRequired,
                className: i.a.string
            };
            const Te = "8px",
                we = c.a.div.withConfig({
                    displayName: "PrimaryMessage__PrimaryMessageWrapper",
                    componentId: "sc-1d9u0si-0"
                })(["display:flex;flex-direction:column;align-items:", ";padding-left:", ";", "{", "{width:", ";margin-left:-", ";margin-right:", ";}>:first-child{&", "{margin-left:", ";}}}", "{margin-left:", ";}", "{margin-left:", ";}"], ({
                    alignment: e
                }) => e || "flex-start", Te, ye, le, ({
                    avatarWidth: e
                }) => e, Te, Te, Ce, ({
                    avatarWidth: e
                }) => e, ge, ({
                    avatarWidth: e
                }) => e, Oe, ({
                    avatarWidth: e
                }) => e),
                Se = c.a.div.withConfig({
                    displayName: "PrimaryMessage__SpacingWrapper",
                    componentId: "sc-1d9u0si-1"
                })(["padding-top:4px;padding-bottom:4px;padding-left:10px;padding-right:10px;width:100%;"]);
            class ke extends N.PureComponent {
                render() {
                    const {
                        children: e,
                        className: t,
                        use: n
                    } = this.props;
                    return e ? Object(s.jsx)(de, {
                        themeConfig: this.context,
                        use: n,
                        children: Object(s.jsx)(Se, {
                            className: t,
                            children: Object(s.jsx)(X.Consumer, {
                                children: ({
                                    alignItems: t,
                                    avatarWidth: r
                                }) => Object(s.jsx)(we, {
                                    "data-test-id": this.props["data-test-id"],
                                    "data-test-use": n,
                                    alignment: t,
                                    avatarWidth: r,
                                    children: e
                                })
                            })
                        })
                    }) : null
                }
            }
            ke.displayName = "PrimaryMessage";
            ke.propTypes = {
                children: i.a.node,
                className: i.a.string,
                "data-test-id": i.a.string,
                use: re
            };
            ke.contextType = ae.a;
            const Re = c.a.div.withConfig({
                    displayName: "SkeletonText__SkeletonTextWrapper",
                    componentId: "vd207h-0"
                })(["position:relative;width:", ";height:", ";max-height:24px;"], ({
                    width: e
                }) => l(e), ({
                    height: e
                }) => l(e)),
                Ae = c()(A).withConfig({
                    displayName: "SkeletonText__SkeletonTextInner",
                    componentId: "vd207h-1"
                })(["height:0.75em;left:0;position:absolute;top:50%;transform:translateY(-50%);width:100%;"]),
                Pe = e => {
                    let {
                        width: t = "100%",
                        height: n = "auto"
                    } = e, r = Object(u.a)(e, ["width", "height"]);
                    return Object(s.jsxs)(Re, {
                        width: t,
                        height: n,
                        children: [" ", Object(s.jsx)(Ae, Object.assign({}, r))]
                    })
                };
            Pe.displayName = "SkeletonText";
            Pe.propTypes = {
                height: i.a.oneOfType([i.a.number, i.a.string]),
                width: i.a.oneOfType([i.a.number, i.a.string])
            };
            var Me = Pe,
                Ee = n("Mcxo"),
                Ne = n("dPcB"),
                _e = n("Rd7q");
            const Fe = ["de", "ja"];
            var qe = ({
                    givenName: e,
                    familyName: t,
                    email: n
                }, s) => {
                    const r = s && s.locale || Object(_e.a)();
                    return Fe.indexOf(r) >= 0 || !e ? Object(Ne.a)({
                        firstName: e,
                        lastName: t,
                        email: n
                    }, s) : e
                },
                Le = n("0FzD");
            class Be extends N.Component {
                render() {
                    const {
                        email: e,
                        familyName: t,
                        givenName: n,
                        isFriendly: r,
                        name: a,
                        options: i,
                        titleType: o
                    } = this.props, c = r ? qe({
                        givenName: n,
                        familyName: t,
                        email: e
                    }, i) : Object(Ne.a)({
                        firstName: n,
                        lastName: t,
                        email: e,
                        name: a,
                        titleType: o
                    }, i);
                    return Object(s.jsx)("span", {
                        children: c
                    })
                }
            }
            Be.displayName = "FormattedName";
            Be.propTypes = {
                email: i.a.string,
                familyName: i.a.string,
                givenName: i.a.string,
                isFriendly: i.a.bool,
                name: i.a.string,
                options: i.a.object,
                titleType: i.a.oneOf(Object.keys(Le.a).map(e => Le.a[e]))
            };
            Be.defaultProps = {
                isFriendly: !1
            };
            var Ue = n("sl/w");
            const De = ({
                sender: e
            }) => {
                switch (e && Object(q.h)(e)) {
                    case U.BOT:
                        return Object(s.jsx)(Ue.a, {
                            message: "conversations-message-history.responder.bot"
                        });
                    case U.AGENT:
                        return Object(s.jsx)(Ue.a, {
                            message: "conversations-message-history.responder.unknownResponder"
                        });
                    case U.VISITOR:
                        return Object(s.jsx)(Ue.a, {
                            message: "conversations-message-history.responder.unknownVisitor"
                        });
                    case U.SYSTEM:
                        return Object(s.jsx)(Ue.a, {
                            message: "conversations-message-history.responder.automatic"
                        });
                    default:
                        return Object(s.jsx)(Ue.a, {
                            message: "conversations-message-history.responder.unknownSender"
                        })
                }
            };
            De.displayName = "UnknownSenderText";
            const ze = ({
                sender: e,
                isLoading: t
            }) => {
                if (t) return Object(s.jsx)(Me, {
                    "data-test-id": "skeleton-text",
                    width: 100
                });
                const n = e && Object(q.e)(e),
                    r = e && Object(q.g)(e),
                    a = e && Object(q.d)(e);
                return Boolean(n || r || a) ? Object(s.jsx)(Be, {
                    givenName: n || void 0,
                    familyName: r || void 0,
                    email: a || void 0
                }) : Object(s.jsx)(De, {
                    sender: e
                })
            };
            ze.displayName = "SenderName";
            ze.propTypes = {
                isLoading: i.a.bool,
                sender: Object(r.a)("Sender")
            };
            var He = ze;
            class Ve extends N.PureComponent {
                render() {
                    const {
                        isSenderLoading: e,
                        sender: t
                    } = this.props;
                    return e ? Object(s.jsx)(Me, {
                        width: 150
                    }) : Object(s.jsx)(Ee.a, {
                        use: "help",
                        children: Object(s.jsx)("strong", {
                            children: Object(s.jsx)(He, {
                                sender: t
                            })
                        })
                    })
                }
            }
            Ve.displayName = "SenderHeaderContent";
            Ve.propTypes = {
                isSenderLoading: i.a.bool,
                sender: Object(r.a)("Sender")
            };
            var Qe = Ve;
            class We extends N.PureComponent {
                render() {
                    const {
                        isSenderLoading: e,
                        sender: t
                    } = this.props;
                    return Object(s.jsx)(Qe, {
                        sender: t,
                        isSenderLoading: e
                    })
                }
            }
            We.displayName = "TypingHeaderContent";
            We.propTypes = {
                isSenderLoading: i.a.bool,
                sender: Object(r.a)("Sender")
            };
            var Je = n("FYyX"),
                Ge = n("rCfO"),
                Ye = n("Nnwm");
            const Ke = Object(Ge.default)((e, t, n) => t ? n.get(Object(Ye.buildSenderLocator)(t, e)) : null);
            var Xe = n("oLsC"),
                $e = n("o/5C"),
                Ze = n("/OK6");
            const et = e => Object(Ze.isFromAgent)(e) ? D.a.text("conversations-visitor-message-history.agent") : Object(Ze.isFromBot)(e) ? D.a.text("conversations-visitor-message-history.bot") : Object(Ze.isFromSystem)(e) ? D.a.text("conversations-visitor-message-history.system") : "",
                tt = (e, t) => {
                    const n = Object(F.getSenderId)(e),
                        s = Object(F.getSenderType)(e),
                        r = Ke(n, s, t);
                    return Object(q.b)(r) || Object(Xe.a)({
                        senderType: s,
                        firstName: Object($e.c)(e) || et(e),
                        email: Object($e.b)(e) || null
                    })
                },
                nt = "STARTED",
                st = Object(Ge.default)(e => !Object(q.b)(e) && Object(q.i)(e) === nt),
                rt = e => {
                    const {
                        message: t,
                        senders: n
                    } = e, r = tt(t, n), a = st(r), i = Object(q.e)(r), o = Object(Ze.isFromVisitor)(t), c = o ? V.c : V.a;
                    Object(N.useEffect)(() => {
                        o || Object(Je.a)(D.a.text("conversations-visitor-message-history.subjectIsTyping", {
                            subject: i || D.a.text("conversations-visitor-message-history.agent")
                        }))
                    }, [o, i]);
                    return Object(s.jsxs)(ke, {
                        use: c,
                        children: [Object(s.jsxs)(ve, {
                            children: [Object(s.jsx)(ue, {
                                children: Object(s.jsx)(H, {
                                    sender: r,
                                    isLoading: a
                                })
                            }), Object(s.jsx)(Ie, {
                                children: Object(s.jsx)(We, {
                                    message: t,
                                    sender: r,
                                    isSenderLoading: a
                                })
                            })]
                        }), Object(s.jsx)(je, {
                            children: Object(s.jsx)(be, {
                                children: Object(s.jsx)(se, {})
                            })
                        })]
                    })
                };
            rt.displayName = "TypingIndicatorMessage";
            rt.propTypes = {
                message: Object(r.a)("TypingIndicatorMessage").isRequired,
                senders: Q.a.isRequired
            };
            var at = rt,
                it = n("t6nY"),
                ot = n.n(it);
            const ct = c.a.div.withConfig({
                displayName: "DashedLabel__StyledBorder",
                componentId: "sc-1eqpps7-0"
            })(["display:flex;flex-grow:1;border:solid 1px ", ";"], f.i);

            function dt({
                children: e,
                transparent: t,
                "data-test-id": n,
                labelPadding: r
            }) {
                return Object(s.jsxs)("div", {
                    className: ot()("display-flex align-end", r, t && "justify-center", !r && "m-y-6"),
                    "data-test-id": n || "dashed-label",
                    tabIndex: 0,
                    children: [!t && Object(s.jsx)(ct, {
                        "data-test-id": "styled-border",
                        className: "m-bottom-3"
                    }), Object(s.jsx)("div", {
                        className: "max-100 p-x-4",
                        children: Object(s.jsx)(Ee.a, {
                            use: "help",
                            className: "m-bottom-1 align-center text-center word-break-break-word flex-column",
                            children: e
                        })
                    }), !t && Object(s.jsx)(ct, {
                        "data-test-id": "styled-border",
                        className: "m-bottom-3"
                    })]
                })
            }
            dt.displayName = "DashedLabel";
            dt.propTypes = {
                children: i.a.node.isRequired,
                "data-test-id": i.a.string,
                transparent: i.a.bool
            };
            var lt = dt,
                ut = n("sA91"),
                pt = n("Pz4q"),
                ht = n("rIrL"),
                bt = n("MfaD");
            const mt = document.implementation.createHTMLDocument(""),
                gt = (e, t) => "p" === t && e && e.classList && e.classList.contains("MsoNormal") && e.children && e.children.length,
                ft = e => e && !e.children.legnth && "o:p" === e.tagName.toLowerCase() && e.innerHTML.includes("&nbsp;"),
                jt = e => e && "span" === e.tagName.toLowerCase() && ft(e.firstElementChild),
                Ot = e => !!e.getElementsByTagName("img").length,
                xt = ({
                    node: e,
                    node_name: t
                }) => {
                    if (gt(e, t)) {
                        const t = e.firstElementChild;
                        if (ft(t) || jt(t)) {
                            if (Ot(e)) {
                                e.removeChild(t);
                                return xt({
                                    node: e,
                                    node_name: "p"
                                })
                            }
                            return {
                                node: mt.createElement("br")
                            }
                        }
                        const n = mt.createElement("div");
                        Object.keys(e.attributes).forEach(t => {
                            const s = e.attributes[t];
                            n.setAttribute(s.nodeName, s.nodeValue)
                        });
                        n.innerHTML = e.innerHTML.trim().replace(/&nbsp;/g, "");
                        return {
                            node: n
                        }
                    }
                    return null
                },
                yt = ["position", "top", "bottom", "left", "right", "z-index", "clear", "float", "background-image", "white-space"],
                vt = ({
                    node: e
                }) => {
                    if (e && e.style && e.style.length > 0 && e.style.removeProperty) {
                        yt.forEach(t => e.style.removeProperty(t));
                        return {
                            node: e
                        }
                    }
                    return null
                },
                Ct = ({
                    node: e,
                    node_name: t
                }) => {
                    if (e && "img" === t && e.attributes) {
                        e.attributes["data-original-height"] && e.setAttribute("height", e.attributes["data-original-height"].value);
                        e.attributes["data-original-width"] && e.setAttribute("width", e.attributes["data-original-width"].value);
                        e.attributes["data-full-size-src"] && e.setAttribute("src", e.attributes["data-full-size-src"].value);
                        return {
                            node: e
                        }
                    }
                    return null
                },
                It = ({
                    node: e,
                    node_name: t
                }) => {
                    if ("div" === t && e && e.classList && e.classList.contains("gmail_default")) {
                        const t = mt.createElement("span");
                        Object.keys(e.attributes).forEach(n => {
                            const s = e.attributes[n];
                            t.setAttribute(s.nodeName, s.nodeValue)
                        });
                        t.innerHTML = e.innerHTML.trim();
                        return {
                            node: t
                        }
                    }
                    return null
                };
            var Tt = n("YibP"),
                wt = n("eCQl"),
                St = n("kkqp"),
                kt = n.n(St);
            const Rt = e => new kt.a(e),
                At = ["gmail_extra", "gmail_quote", "hs_reply", "x_hs_reply_wrap"],
                Pt = "divRplyFwdMsg",
                Mt = (e, t) => t === Pt || e && e.contains && At.some(t => e.contains(t)),
                Et = ["hs_signature"],
                Nt = e => e && e.contains && Et.some(t => e.contains(t)),
                _t = {
                    transformers: [xt, ({
                        node: e
                    }) => {
                        const {
                            classList: t,
                            id: n,
                            attributes: s = []
                        } = e;
                        if (Mt(t, n)) {
                            const e = mt.createElement("span");
                            Object.keys(s).forEach(t => {
                                const n = s[t];
                                e.setAttribute(n.nodeName, n.nodeValue)
                            });
                            e.innerHTML = "";
                            e.setAttribute("data-email-reply", "");
                            return {
                                node: e
                            }
                        }
                        return null
                    }, ({
                        node: e
                    }) => {
                        const {
                            classList: t,
                            attributes: n = []
                        } = e;
                        if (Nt(t)) {
                            const e = mt.createElement("span");
                            Object.keys(n).forEach(t => {
                                const s = n[t];
                                e.setAttribute(s.nodeName, s.nodeValue)
                            });
                            e.innerHTML = "";
                            e.setAttribute("data-email-signature", "");
                            return {
                                node: e
                            }
                        }
                        return null
                    }, vt, It, Ct],
                    dom: mt,
                    elements: ["b", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "dl", "dt", "em", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "i", "img", "li", "ol", "p", "pre", "q", "small", "strike", "strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "u", "ul", "font", "div", "span", "a"],
                    attributes: {
                        __ALL__: ["style", "align", "valign", "width", "height"],
                        blockquote: ["cite"],
                        col: ["span"],
                        colgroup: ["span"],
                        figure: ["style"],
                        ol: ["start", "type"],
                        q: ["cite"],
                        img: ["title", "alt", "src"],
                        table: ["summary", "bgcolor"],
                        td: ["abbr", "axis", "colspan", "rowspan", "bgcolor"],
                        th: ["abbr", "axis", "colspan", "rowspan", "scope", "bgcolor"],
                        ul: ["type"],
                        font: ["size"],
                        a: ["href", "title"],
                        span: ["data-at-mention", "data-owner-id", "contenteditable", "data-email-reply"]
                    },
                    add_attributes: {
                        a: {
                            target: "_blank"
                        }
                    },
                    remove_contents: ["script"],
                    protocols: {
                        a: {
                            href: ["http", "https"]
                        }
                    }
                },
                Ft = e => {
                    Array.from(e.querySelectorAll("br + [data-email-reply]")).forEach(e => {
                        const t = e.previousElementSibling;
                        t && t.nodeName && "br" === t.nodeName.toLowerCase() && t.classList && t.classList.add("display-none")
                    })
                },
                {
                    body: qt
                } = mt,
                Lt = Object(Ge.default)((e, t) => {
                    const n = mt.createElement("div");
                    try {
                        qt.innerHTML = e;
                        const s = Object.assign({}, _t);
                        s.transformers = t;
                        const r = Rt(s).clean_node(qt).cloneNode(!0);
                        n.appendChild(r);
                        Ft(n)
                    } catch (e) {
                        const t = Object(Tt.a)("Error sanitizing email message: " + e.message, e);
                        Object(wt.reportError)({
                            error: t
                        })
                    }
                    return n.innerHTML
                }),
                Bt = Object(Ge.default)(e => Lt(e, [xt, It, vt, Ct])),
                Ut = Object(Ge.default)(e => {
                    if (!e) return null;
                    const t = document.createElement("div");
                    t.innerHTML = Bt(e);
                    document.body.appendChild(t);
                    const n = t.innerText;
                    document.body.removeChild(t);
                    return n
                });
            var Dt = n("qkre");
            const zt = [pt.a, ht.a, bt.a],
                Ht = Object(Ge.default)(e => {
                    setTimeout(() => {
                        Object(ie.a)(zt.some(t => e instanceof t), "hasTextContent: Unsupported message record type %s supplied", Object(ut.a)(e))
                    }, 0);
                    const t = Object(Dt.f)(e),
                        n = Object(F.getRichText)(e) || Object(F.getPlainText)(e);
                    return t || Boolean(n && n.length && Ut(n))
                });
            var Vt = n("HtM0"),
                Qt = n("mIAK");
            const Wt = c.a.div.withConfig({
                    displayName: "ContentText__ContentTextWrapper",
                    componentId: "sc-1qr8x56-0"
                })(["word-wrap:break-word;box-sizing:border-box;width:100%;a{font-weight:inherit;text-decoration:underline;}img{max-width:100%;height:auto;}"]),
                Jt = e => {
                    const {
                        "aria-label": t,
                        contentText: n,
                        messageId: r,
                        onClickAction: a = (() => {}),
                        shouldAnnounce: i
                    } = e, {
                        announce: o
                    } = Object(Qt.b)();
                    Object(N.useEffect)(() => {
                        i && o({
                            id: r || t,
                            text: t
                        })
                    }, [o, t, r, i]);
                    return Object(s.jsx)(Wt, {
                        children: Object(s.jsx)("div", {
                            "aria-label": t,
                            dir: "auto",
                            "data-test-id": "primary-message-content",
                            dangerouslySetInnerHTML: {
                                __html: Object(Vt.a)(n, {
                                    shouldPreserveNewlines: !0,
                                    allowedDomainsForIframe: [/^\/?\/?play\.vidyard\.com\/[a-zA-Z0-9]*\.html$/gm]
                                })
                            },
                            onClick: a
                        })
                    })
                };
            Jt.displayName = "ContentText";
            Jt.propTypes = {
                "aria-label": i.a.string,
                contentText: i.a.string.isRequired,
                messageId: i.a.string,
                onClickAction: i.a.func,
                shouldAnnounce: i.a.bool
            };
            var Gt = Jt,
                Yt = n("MJM1");
            const Kt = e => Object(Yt.a)(["metadata", "officeHoursStartTime"], e),
                Xt = e => Object(Yt.a)(["officeHoursStartTime"], e);
            var $t = n("V1/C");
            const Zt = e => e["@type"] === $t.a ? Xt(e) && Xt(e) - (new Date).getTime() < 0 : Kt(e) && Kt(e) - (new Date).getTime() < 0,
                en = ({
                    message: e
                }) => e["@type"] === $t.a || Ht(e) ? Zt(e) ? null : Object(s.jsx)(lt, {
                    transparent: !0,
                    labelPadding: "m-y-1",
                    children: Object(s.jsx)(Gt, {
                        messageId: e.id,
                        "aria-label": `${D.a.text("conversations-visitor-message-history.systemMessage")} ${Object(F.getPlainText)(e)}`,
                        contentText: Object(F.getRichText)(e) || Object(F.getPlainText)(e)
                    })
                }) : null;
            en.displayName = "AvailabilityMessage";
            en.propTypes = {
                message: i.a.oneOfType([Object(r.a)("TypicalResponseTimeMessage"), Object(r.a)("OfficeHoursMessage")]).isRequired
            };
            var tn = en,
                nn = n("vIAU"),
                sn = n("mNDY"),
                rn = n("wL7V"),
                an = n("oxA8"),
                on = n("QYOI");
            const cn = () => Object(s.jsx)("i", {
                children: Object(s.jsx)(Ue.a, {
                    message: "conversations-message-history.noContent"
                })
            });
            cn.displayName = "NoContentLabel";
            var dn = cn,
                ln = n("r1tY");
            const un = ["fileId"],
                pn = ["fileMetadata"],
                hn = ["fileUsageType"],
                bn = ["thumbnailMetadata"],
                mn = (Object(Yt.a)(un), Object(Yt.a)(pn)),
                gn = (Object(Yt.a)(hn), Object(Yt.a)(bn), ["expiresAt"]),
                fn = ["url"],
                jn = ["name"],
                On = ["extension"],
                xn = ["type"],
                yn = ["fileSize"],
                vn = ["width"],
                Cn = ["height"],
                In = (Object(Yt.a)(gn), Object(Yt.a)(fn)),
                Tn = Object(Yt.a)(jn),
                wn = Object(Yt.a)(On),
                Sn = Object(Yt.a)(xn),
                kn = Object(Yt.a)(yn),
                Rn = Object(Yt.a)(vn),
                An = Object(Yt.a)(Cn),
                Pn = e => {
                    const t = Tn(e),
                        n = wn(e);
                    return n ? `${t}.${n}` : t
                };
            var Mn = n("g/uM"),
                En = n("PY2H");
            const Nn = c.a.div.withConfig({
                    displayName: "InlineImageAttachment__InlineImageAttachmentWrapper",
                    componentId: "sc-157kmke-0"
                })(["display:block;max-width:100%;"]),
                _n = ({
                    maxWidth: e,
                    width: t,
                    height: n,
                    hasLoaded: s
                }) => {
                    if (s || !e || !t || !n) return {};
                    if (t <= e) return {
                        width: t,
                        height: n
                    };
                    return {
                        width: e,
                        height: n * (e / t)
                    }
                };
            class Fn extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.hasLoadedImage = () => {
                        this.setState({
                            hasLoaded: !0
                        })
                    };
                    this.state = {
                        hasLoaded: !1
                    }
                }
                render() {
                    const {
                        name: e,
                        url: t
                    } = this.props, {
                        width: n,
                        height: r
                    } = _n(Object.assign({}, this.props, {}, this.state));
                    return Object(s.jsx)(Nn, {
                        children: Object(s.jsx)(En.a, {
                            href: t,
                            target: "_blank",
                            "data-test-id": "inline-image-attachment",
                            children: Object(s.jsx)(Mn.a, {
                                alt: e,
                                src: t,
                                width: n,
                                height: r,
                                style: {
                                    minHeight: r
                                },
                                onLoad: this.hasLoadedImage
                            })
                        })
                    })
                }
            }
            Fn.displayName = "InlineImageAttachment";
            Fn.propTypes = {
                height: i.a.number,
                maxWidth: i.a.number,
                name: i.a.string.isRequired,
                url: i.a.string.isRequired,
                width: i.a.number
            };
            var qn = Fn;
            const Ln = "IMG",
                Bn = e => {
                    const t = mn(e);
                    return {
                        type: Sn(t),
                        extension: wn(t)
                    }
                },
                Un = e => e ? e.filter(e => {
                    const {
                        type: t,
                        extension: n
                    } = Bn(e);
                    return Boolean(t === Ln && "svg" !== n)
                }) : Object(on.List)(),
                Dn = e => e.filter(e => {
                    const {
                        type: t,
                        extension: n
                    } = Bn(e);
                    return Boolean(t !== Ln || "svg" === n)
                }),
                zn = e => e.some(e => {
                    const {
                        type: t,
                        extension: n
                    } = Bn(e);
                    return Boolean(t === Ln && "svg" !== n)
                }),
                Hn = 300,
                Vn = c.a.div.withConfig({
                    displayName: "InlineImageAttachments__FileAttachmentsWrapper",
                    componentId: "sc-23psr-0"
                })(["cursor:pointer;box-sizing:border-box;width:100%;max-width:", "px;display:block;margin-bottom:16px;margin-top:8px;"], Hn);
            class Qn extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.state = {
                        maxWidth: Hn
                    };
                    this.wrapperRef = Object(N.createRef)()
                }
                componentDidMount() {
                    const e = Object(ln.findDOMNode)(this.wrapperRef.current);
                    e && e.offsetWidth && e.offsetWidth !== this.state.maxWidth && this.setState({
                        maxWidth: e.offsetWidth
                    })
                }
                render() {
                    const {
                        fileAttachments: e
                    } = this.props;
                    return Object(s.jsx)(Vn, {
                        "data-test-id": "file-attachments-wrapper",
                        ref: this.wrapperRef,
                        children: Un(e).map((e, t) => {
                            const n = mn(e),
                                r = Pn(n),
                                a = In(n),
                                i = Rn(n),
                                o = An(n);
                            return Object(s.jsx)(qn, {
                                name: r,
                                url: a,
                                width: i,
                                height: o,
                                maxWidth: this.state.maxWidth
                            }, "image-" + t)
                        })
                    })
                }
            }
            Qn.displayName = "InlineImageAttachments";
            Qn.propTypes = {
                fileAttachments: i.a.instanceOf(on.List)
            };
            var Wn = Qn,
                Jn = n("C3IS"),
                Gn = n("OI0Z"),
                Yn = n("rF4n"),
                Kn = n("P7jJ");
            const Xn = e => Object(s.jsxs)("svg", Object.assign({
                width: "1em",
                height: "1em",
                viewBox: "0 0 20 24",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e, {
                children: [Object(s.jsx)("defs", {
                    children: Object(s.jsx)("path", {
                        d: "M14.466 0c.076 0 .153.008.233.023.1.02.196.059.288.104.023.011.046.023.068.037.09.052.177.111.252.187l6.345 6.4c.075.076.135.163.186.255.013.023.025.045.036.068.045.093.083.19.103.295.015.075.023.153.023.231v13.2c0 1.884-1.468 3.2-3.569 3.2H6.534c-2.1 0-3.568-1.316-3.568-3.2V3.6c0-1.985 1.6-3.6 3.568-3.6zm-1.133 2H6.25C5.56 2 5 2.56 5 3.25v17.917c0 .689.68.833 1.25.833h12.5c.57 0 1.25-.144 1.25-.833v-12.5h-4.583c-1.149 0-2.084-.935-2.084-2.084V2z",
                        id: "file__a"
                    })
                }), Object(s.jsx)("use", {
                    xlinkHref: "#file__a"
                })]
            }));
            Xn.displayName = "SVGFile";
            var $n = Xn;
            const Zn = c.a.div.withConfig({
                displayName: "FileAttachmentTile__FileAttachmentTileWrapper",
                componentId: "sc-3iw02t-0"
            })(["max-width:300px;"]);
            class es extends N.PureComponent {
                render() {
                    const {
                        fileMetadata: e
                    } = this.props, t = Pn(e), n = In(e), r = kn(e);
                    return Object(s.jsx)(Zn, {
                        "data-test-id": "file-attachment-tile",
                        children: Object(s.jsx)(Yn.default, {
                            onClick: () => window.open(n),
                            fileName: t,
                            fileInfo: Object(s.jsx)(Gn.a, {
                                value: r
                            }),
                            preview: Object(s.jsx)(Kn.a, {
                                icon: Object(s.jsx)($n, {}),
                                size: "sm"
                            })
                        })
                    })
                }
            }
            es.displayName = "FileAttachmentTile";
            es.propTypes = {
                fileMetadata: Object(r.a)("FileMetadataRecord").isRequired
            };
            es.contextType = X;
            var ts = es;
            const ns = c.a.div.withConfig({
                    displayName: "AttachmentsFooter__AttachmentsFooterWrapper",
                    componentId: "sc-1kd5uw-0"
                })(["cursor:pointer;box-sizing:border-box;display:block;background-color:", ";"], ({
                    backgroundColor: e
                }) => e),
                ss = c()(ts).withConfig({
                    displayName: "AttachmentsFooter__StyledFileAttachmentTile",
                    componentId: "sc-1kd5uw-1"
                })(["background-color:", ";"], ({
                    backgroundColor: e
                }) => e || "rgba(255, 255, 255, 0.5)");
            class rs extends N.PureComponent {
                render() {
                    const {
                        fileAttachments: e
                    } = this.props, {
                        fileAttachmentTheme: {
                            tileBackgroundColor: t
                        },
                        backgroundColor: n
                    } = this.context;
                    return Object(s.jsx)(ns, {
                        "data-test-id": "attachments-footer",
                        backgroundColor: n,
                        children: e.map((e, n) => Object(s.jsx)(ss, {
                            fileMetadata: mn(e),
                            backgroundColor: t
                        }, n))
                    })
                }
            }
            rs.displayName = "AttachmentsFooter";
            rs.propTypes = {
                fileAttachments: i.a.instanceOf(on.List).isRequired
            };
            rs.contextType = X;
            var as = rs;
            const is = /^rgb/i,
                os = e => {
                    let t, n, s;
                    try {
                        if (is.test(e)) {
                            const r = e.match(/(\d+)\D+(\d+)\D+(\d+)/) || [];
                            t = parseInt(r[1], 10);
                            n = parseInt(r[2], 10);
                            s = parseInt(r[3], 10)
                        } else {
                            let r = e.toLowerCase().replace(/^#/, "");
                            3 === r.length && (r = r.replace(/([0-9a-f])/g, "$1$1"));
                            t = parseInt(r.substring(0, 2), 16);
                            n = parseInt(r.substring(2, 4), 16);
                            s = parseInt(r.substring(4, 6), 16)
                        }
                        if ([t, n, s].some(isNaN)) return {}
                    } catch (e) {
                        return {}
                    }
                    return {
                        r: t,
                        g: n,
                        b: s
                    }
                },
                cs = e => {
                    const {
                        r: t,
                        g: n,
                        b: s
                    } = os(e);
                    if ([t, n, s].some(e => Number.isNaN(Number(e)))) return {
                        hue: 0,
                        saturation: 0,
                        lightness: 0
                    };
                    const r = t / 255,
                        a = n / 255,
                        i = s / 255,
                        o = Math.max(r, a, i),
                        c = Math.min(r, a, i),
                        d = (o + c) / 2,
                        l = o - c;
                    if (0 === l) return {
                        hue: 0,
                        saturation: 0,
                        lightness: d
                    };
                    let u;
                    const p = d > .5 ? l / (2 - o - c) : l / (o + c);
                    switch (o) {
                        case r:
                            u = (a - i) / l + (a < i ? 6 : 0);
                            break;
                        case a:
                            u = (i - r) / l + 2;
                            break;
                        default:
                            u = (r - a) / l + 4
                    }
                    u *= 60;
                    u = Math.round(u);
                    return {
                        hue: u,
                        saturation: p,
                        lightness: d
                    }
                },
                ds = e => {
                    const t = e < 0 ? 0 : e > 1 ? 1 : e;
                    return Math.round(100 * t) + "%"
                },
                ls = (e, t = .1) => {
                    const {
                        hue: n,
                        saturation: s,
                        lightness: r
                    } = cs(e);
                    return `hsl(${[n,ds(s),ds(r+t)].join(", ")})`
                },
                us = (e, t = .1) => ls(e, -t);
            var ps = n("OwpT"),
                hs = n.n(ps);
            const bs = c.a.div.withConfig({
                displayName: "CommonMessageContent__HyperlinkStyleWrapper",
                componentId: "sc-18sx44c-0"
            })(["overflow:hidden;", " a{color:", ";&:hover{color:", ";}&:active{color:", ";}}"], ge, ({
                hyperlinkColor: e
            }) => e, ({
                hyperlinkColor: e
            }) => e && us(e), ({
                hyperlinkColor: e
            }) => e && us(e, .2));
            class ms extends N.PureComponent {
                isSentFromVisitor() {
                    return Object(F.getSenderType)(this.props.message) === U.VISITOR
                }
                isClickableLink(e) {
                    return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)
                }
                handleOnClickEvent(e) {
                    e.persist();
                    e.target instanceof HTMLElement && "A" === e.target.tagName && this.props.toggleOpen({
                        isOpened: !1,
                        isUser: !0
                    })
                }
                renderContentText() {
                    const {
                        message: e,
                        mobile: t,
                        isLastMessage: n,
                        senderName: r
                    } = this.props, a = Object(F.getRichText)(e) || Object(F.getPlainText)(e), i = t && this.isClickableLink(a);
                    if (!a) return null;
                    const o = Object(F.getRichText)(e) && hs.a.link(a, {
                        stripPrefix: !1
                    });
                    return Object(s.jsx)(Gt, {
                        messageId: e.id,
                        contentText: o || a,
                        shouldAnnounce: n,
                        "aria-label": `${this.isSentFromVisitor()?D.a.text("conversations-visitor-message-history.iSay"):D.a.text("conversations-visitor-message-history.subjectSays",{subject:r||D.a.text("conversations-visitor-message-history.agent")})} ${Object(F.getPlainText)(e)}`,
                        onClickAction: i ? this.handleOnClickEvent.bind(this) : () => {}
                    })
                }
                renderMessageSection() {
                    const {
                        fileAttachments: e,
                        message: t
                    } = this.props, n = !Object(Jn.c)(t) && e && zn(e), r = Ht(t);
                    return n || r ? Object(s.jsxs)(be, {
                        children: [this.renderContentText(), n && Object(s.jsx)(Wn, {
                            fileAttachments: e
                        }), this.props.quickReplySelect && "function" == typeof this.props.quickReplySelect && this.props.quickReplySelect()]
                    }) : null
                }
                renderAttachmentsSection() {
                    const {
                        fileAttachments: e,
                        message: t
                    } = this.props, n = Object(Jn.c)(t) ? e : Dn(e);
                    return n && n.size ? Object(s.jsx)(be, {
                        children: Object(s.jsx)(as, {
                            fileAttachments: n
                        })
                    }) : null
                }
                render() {
                    const {
                        textColor: e
                    } = this.context, t = this.renderMessageSection(), n = this.renderAttachmentsSection(), r = this.isSentFromVisitor(), {
                        hasUnansweredQuickReplyMessage: a,
                        isLastMessage: i
                    } = this.props;
                    return Object(s.jsx)(bs, {
                        hyperlinkColor: r ? e : "inherit",
                        children: Object(s.jsxs)(je, {
                            shouldFocusMessage: i && a,
                            children: [t, n, !t && !n && Object(s.jsx)(be, {
                                children: Object(s.jsx)(dn, {})
                            })]
                        })
                    })
                }
            }
            ms.displayName = "CommonMessageContent";
            ms.propTypes = {
                fileAttachments: i.a.instanceOf(on.List),
                hasUnansweredQuickReplyMessage: i.a.bool,
                isLastMessage: i.a.bool,
                message: Object(r.a)("CommonMessage").isRequired,
                mobile: i.a.bool,
                quickReplySelect: i.a.oneOfType([i.a.bool, i.a.func]),
                senderName: i.a.string,
                toggleOpen: i.a.func
            };
            ms.contextType = X;
            var gs = ms;
            class fs extends N.PureComponent {
                render() {
                    const {
                        fileAttachments: e,
                        message: t,
                        positionDescriptors: n
                    } = this.props, r = Object(rn.a)(t), a = n.includes(nn.c);
                    return Object(s.jsxs)(ke, {
                        use: V.c,
                        "data-test-id": "primary-message",
                        children: [Object(s.jsx)(gs, {
                            fileAttachments: e,
                            isLastMessage: a,
                            message: r
                        }), a && Object(s.jsx)(xe, {
                            children: Object(s.jsx)(Ee.a, {
                                use: "help",
                                children: Object(s.jsx)(an.a, {
                                    message: "conversations-visitor-message-history.status.publishing.UNPUBLISHED"
                                })
                            })
                        })]
                    })
                }
            }
            fs.displayName = "ActivelyPublishingMessage";
            fs.propTypes = {
                fileAttachments: i.a.instanceOf(on.List),
                message: Object(r.a)("ActivelyPublishing").isRequired,
                positionDescriptors: sn.a.isRequired
            };
            var js = fs,
                Os = n("JGJA"),
                xs = n("yYAF"),
                ys = n("BvOu"),
                vs = n("mEYk"),
                Cs = n.n(vs);
            const Is = (e, t) => {
                    Object(N.useEffect)(() => {
                        const n = n => {
                            try {
                                const {
                                    data: s,
                                    source: r
                                } = n, a = JSON.parse(s);
                                if (a.uuid !== e || !e || !a.uuid) return;
                                const {
                                    type: i,
                                    data: o
                                } = a, c = t[i];
                                "function" == typeof c && c({
                                    data: o,
                                    source: r
                                })
                            } catch (t) {
                                t instanceof Error && Cs.a.captureException(t, {
                                    extra: {
                                        event: n,
                                        uuid: e
                                    }
                                });
                                return
                            }
                        };
                        window.addEventListener("message", n);
                        return () => window.removeEventListener("message", n)
                    }, [])
                },
                Ts = window.location.host.includes("local"),
                ws = Object(N.memo)(({
                    message: e,
                    sessionId: t,
                    hubspotUtk: n,
                    threadId: r
                }) => {
                    const a = Object(N.useRef)(Object(ys.generateUuid)()),
                        [i, o] = Object(N.useState)(160),
                        c = {
                            RESIZE_IFRAME: ({
                                data: e
                            }) => {
                                o(e.height)
                            }
                        };
                    Is(a.current, c);
                    const d = new URLSearchParams({
                            uuid: a.current,
                            sessionId: t,
                            hubspotUtk: n,
                            threadId: r
                        }),
                        l = `${Object(xs.getFullUrl)(Ts?"local":"app")}/feedback-in-chat/${Object(Os.a)("feedbackTransactionId",e)}?${d}`;
                    return Object(s.jsx)(ke, {
                        use: V.a,
                        children: Object(s.jsx)(je, {
                            children: Object(s.jsx)(be, {
                                children: Object(s.jsx)("iframe", {
                                    src: l,
                                    style: {
                                        width: "100%",
                                        height: i,
                                        border: 0
                                    }
                                })
                            })
                        })
                    })
                });
            ws.displayName = "FeedbackSurveyMessage";
            ws.propTypes = {
                hubspotUtk: i.a.string,
                message: Object(r.a)("FeedbackSurveyMessage").isRequired,
                sessionId: i.a.string,
                threadId: i.a.string
            };
            var Ss = ws,
                ks = n("LdnN"),
                Rs = n("QGYt"),
                As = n("4cgu"),
                Ps = n("Xs/R"),
                Ms = n("f3U3");
            const Es = c()(Rs.a).withConfig({
                    displayName: "EmailCaptureInput__StyledVizExButton",
                    componentId: "sc-1fywpny-0"
                })(["padding:0;width:100% !important;height:100%;"]),
                Ns = c.a.div.withConfig({
                    displayName: "EmailCaptureInput__LoadingButtonContainer",
                    componentId: "sc-1fywpny-1"
                })(["width:38px;height:32px;margin:4px 4px 4px 0;"]),
                _s = {
                    disabled: i.a.bool,
                    locale: i.a.string,
                    onChange: i.a.func.isRequired,
                    onKeyPress: i.a.func.isRequired,
                    onSubmit: i.a.func,
                    submissionState: i.a.oneOf(["ready", "submitting", "done"]),
                    value: i.a.string
                },
                Fs = ({
                    disabled: e,
                    value: t,
                    onChange: n,
                    onKeyPress: r,
                    onSubmit: a,
                    locale: i,
                    submissionState: o
                }) => Object(s.jsx)(Ms.a, {
                    "aria-label": D.a.text("conversations-visitor-message-history.email-capture.placeholderText", {
                        locale: i
                    }),
                    value: t,
                    placeholder: D.a.text("conversations-visitor-message-history.email-capture.placeholderText", {
                        locale: i
                    }),
                    "data-test-id": "email-capture-input",
                    onChange: n,
                    onKeyPress: r,
                    suffix: Object(s.jsx)(Ns, {
                        children: Object(s.jsx)(As.a, {
                            currentState: o,
                            onClick: a,
                            disabled: e,
                            "aria-label": D.a.text("conversations-visitor-message-history.email-capture.submitEmailAddress", {
                                locale: i
                            }),
                            "data-test-id": "email-capture-submit-button",
                            Button: Es,
                            children: Object(s.jsx)(Kn.a, {
                                icon: Object(s.jsx)(Ps.a, {
                                    color: f.r
                                })
                            })
                        })
                    })
                });
            Fs.displayName = "EmailCaptureInput";
            Fs.propTypes = _s;
            var qs = Fs;
            const Ls = c.a.span.withConfig({
                    displayName: "CaptureSection__ErrorMessage",
                    componentId: "sc-1a5rooa-0"
                })(["color:", ";font-size:12px;line-height:18px;text-align:left;margin-top:9px;display:flex;"], f.e),
                Bs = ({
                    message: e,
                    email: t,
                    errorMessage: n,
                    onChange: r,
                    onKeyPress: a,
                    onSubmit: i,
                    submissionState: o
                }) => Object(s.jsxs)(be, {
                    children: [Object(s.jsx)(Gt, {
                        messageId: e.id,
                        "aria-label": `${D.a.text("conversations-visitor-message-history.agentSays")} ${Object(F.getPlainText)(e)}`,
                        contentText: Object(F.getPlainText)(e)
                    }), Object(s.jsx)(qs, {
                        disabled: !t,
                        value: t,
                        onChange: r,
                        onKeyPress: a,
                        onSubmit: i,
                        submissionState: o
                    }), Object(s.jsx)(Ls, {
                        "aria-live": "assertive",
                        children: n
                    })]
                }, "email-prompt-capture-section");
            Bs.displayName = "CaptureSection";
            Bs.propTypes = {
                email: i.a.string,
                errorMessage: i.a.string,
                message: Object(r.a)("EmailCapturePromptMessage").isRequired,
                onChange: i.a.func.isRequired,
                onKeyPress: i.a.func.isRequired,
                onSubmit: i.a.func.isRequired,
                submissionState: i.a.string.isRequired
            };
            var Us = n("CR0J"),
                Ds = n("57op");
            const zs = Ds.a,
                Hs = Ds.f,
                Vs = Ds.h;
            var Qs = n("rdz/");
            const Ws = ({
                    theme: e
                }) => Object(o.css)(["box-shadow:0 0 0 1px ", ";"], Object(Qs.a)(Vs(e), 40)),
                Js = ({
                    checked: e,
                    theme: t
                }) => Object(o.css)(["background-color:", ";color:", ";"], zs(t), !e && Object(Qs.a)(Vs(t), 40)),
                Gs = c.a.div.withConfig({
                    displayName: "VizExCheckbox__CheckboxBox",
                    componentId: "ausntz-0"
                })(["flex-shrink:0;height:16px;width:16px;transition:color 0.15s ease-out,background-color 0.15s ease-out;color:", ";border-color:currentColor;border:2px solid;border-radius:3px;position:relative;", ";", ";"], ({
                    checked: e,
                    theme: t
                }) => e ? Vs(t) : Hs(t), ({
                    hover: e,
                    theme: t,
                    checked: n
                }) => e && Js({
                    theme: t,
                    checked: n
                }), ({
                    focus: e,
                    theme: t
                }) => e && Ws({
                    theme: t
                })),
                Ys = c.a.label.withConfig({
                    displayName: "VizExCheckbox__CheckboxWrapper",
                    componentId: "ausntz-1"
                })(["position:relative;display:inline-flex;flex-direction:row;align-items:center;font-size:16px;cursor:pointer;:hover ", "{", "}input:focus + ", "{", "}"], Gs, Js, Gs, Ws),
                Ks = c.a.input.withConfig({
                    displayName: "VizExCheckbox__CheckboxInput",
                    componentId: "ausntz-2"
                })(["position:absolute;top:0;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;"]),
                Xs = c.a.svg.withConfig({
                    displayName: "VizExCheckbox__Indicator",
                    componentId: "ausntz-3"
                })(["height:100%;width:100%;top:0;left:0;position:absolute;pointer-events:none;"]),
                $s = c.a.div.withConfig({
                    displayName: "VizExCheckbox__ContentWrapper",
                    componentId: "ausntz-4"
                })(["padding-left:8px;user-select:none;cursor:pointer;"]),
                Zs = e => {
                    const {
                        onChange: t,
                        theme: n,
                        children: r,
                        checked: a,
                        focus: i,
                        hover: o
                    } = e, c = Object(u.a)(e, ["onChange", "theme", "children", "checked", "focus", "hover"]), d = Object(N.useRef)(null);
                    return Object(s.jsxs)(Ys, Object.assign({}, c, {
                        onClick: () => {
                            d.current && d.current.focus()
                        },
                        "data-test-id": "VizExCheckbox",
                        checked: a,
                        theme: n,
                        children: [Object(s.jsx)(Ks, {
                            ref: d,
                            "data-test-id": "VizExCheckbox-input",
                            type: "checkbox",
                            onChange: t
                        }), Object(s.jsx)(Gs, {
                            theme: n,
                            checked: a,
                            focus: i,
                            hover: o,
                            children: a && Object(s.jsx)(Xs, {
                                viewBox: "0 0 15 15.343",
                                children: Object(s.jsx)("path", {
                                    d: "M1.013 8.11c0-.223.078-.412.234-.568l1.14-1.14c.155-.155.345-.233.568-.233s.413.077.57.233l2.46 2.47 5.492-5.5c.156-.156.346-.234.568-.234.224 0 .413.077.57.233l1.138 1.14c.156.155.234.345.234.568 0 .224-.078.414-.234.57l-6.06 6.06-1.14 1.14c-.155.155-.345.233-.568.233s-.413-.078-.57-.234l-1.138-1.14-3.03-3.03c-.156-.156-.234-.346-.234-.57z",
                                    fill: "currentColor"
                                })
                            })
                        }), r && Object(s.jsx)($s, {
                            children: r
                        })]
                    }))
                };
            Zs.displayName = "VizExCheckbox";
            Zs.propTypes = {
                checked: i.a.bool,
                children: i.a.node,
                focus: i.a.bool,
                hover: i.a.bool,
                onChange: i.a.func,
                theme: Us.a
            };
            var er = Zs;
            const tr = c.a.div.withConfig({
                    displayName: "ConsentToCommunicate__BreakString",
                    componentId: "sc-99i34u-0"
                })(["-ms-word-break:break-all;display:block;word-break:break-word;word-wrap:break-word;"]),
                nr = c()(Ee.a).withConfig({
                    displayName: "ConsentToCommunicate__SmallNoParagraphPadding",
                    componentId: "sc-99i34u-1"
                })(["p{margin-bottom:0;}"]),
                sr = ({
                    message: e,
                    companyName: t,
                    consentToCommunicate: n,
                    onChange: r
                }) => {
                    const a = Object(Vt.a)(e) || D.a.text("conversations-visitor-message-history.email-capture.consentToCommunicate", {
                        accountName: t
                    });
                    return Object(s.jsx)(er, {
                        checked: n,
                        onChange: r,
                        children: Object(s.jsx)(nr, {
                            use: "help",
                            children: Object(s.jsx)(tr, {
                                children: Object(s.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: a
                                    }
                                })
                            })
                        })
                    })
                };
            sr.displayName = "ConsentToCommunicate";
            sr.propTypes = {
                companyName: i.a.string,
                consentToCommunicate: i.a.bool.isRequired,
                message: i.a.string.isRequired,
                onChange: i.a.func.isRequired
            };
            var rr = sr;
            const ar = /\s|@.{0,}@/;
            class ir extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.onConsentChange = () => {
                        this.setState({
                            hasConsentedToCommunicate: !this.state.hasConsentedToCommunicate
                        })
                    };
                    this.state = {
                        email: "",
                        emailError: !1,
                        hasConsentedToCommunicate: !1,
                        submitFailure: !1,
                        submissionState: "ready"
                    };
                    this.handleChange = this.handleChange.bind(this);
                    this.handleKeyPress = this.handleKeyPress.bind(this);
                    this.handleSubmit = this.handleSubmit.bind(this)
                }
                handleChange(e) {
                    this.setState({
                        email: e.target.value,
                        emailError: !1,
                        submitFailure: !1,
                        submissionState: "ready"
                    })
                }
                handleKeyPress(e) {
                    const t = 13;
                    e.which === t && this.handleSubmit()
                }
                handleSubmit() {
                    const {
                        sendVisitorEmailAddress: e,
                        threadId: t
                    } = this.props, {
                        email: n,
                        hasConsentedToCommunicate: s
                    } = this.state, r = n.trim();
                    ks.a.test(r) && !r.match(ar) ? this.setState({
                        submissionState: "submitting"
                    }, () => {
                        e({
                            email: r,
                            consentToCommunicate: s,
                            threadId: t
                        }).then(({
                            error: e
                        } = {}) => {
                            this.setState({
                                submitFailure: Boolean(e),
                                submissionState: "done"
                            })
                        }).catch(e => {
                            setTimeout(() => {
                                throw e
                            })
                        })
                    }) : this.setState({
                        emailError: !0,
                        submissionState: "ready"
                    })
                }
                getValidationMessage() {
                    switch (!0) {
                        case this.state.emailError:
                            return Object(s.jsx)(an.a, {
                                message: "conversations-visitor-message-history.email-capture.invalid"
                            });
                        case this.state.submitFailure:
                            return Object(s.jsx)(an.a, {
                                message: "conversations-visitor-message-history.email-capture.failed"
                            });
                        default:
                            return null
                    }
                }
                render() {
                    const {
                        companyName: e,
                        consentToCommunicateMessage: t,
                        hasVisitorEmail: n,
                        message: r,
                        positionDescriptors: a,
                        requiresConsentToCommunicate: i
                    } = this.props, {
                        email: o,
                        hasConsentedToCommunicate: c
                    } = this.state, d = this.getValidationMessage();
                    return Object(s.jsx)(ke, {
                        use: V.a,
                        children: Object(s.jsx)(je, {
                            shouldFocusMessage: a && a.get(nn.c),
                            children: n ? Object(s.jsx)(be, {
                                children: Object(s.jsx)(an.a, {
                                    "data-test-id": "email-capture-success",
                                    message: "conversations-visitor-message-history.email-capture.thanks"
                                })
                            }) : Object(s.jsxs)(N.Fragment, {
                                children: [Object(s.jsx)(Bs, {
                                    message: r,
                                    email: o,
                                    errorMessage: d,
                                    onChange: this.handleChange,
                                    onKeyPress: this.handleKeyPress,
                                    onSubmit: this.handleSubmit,
                                    submissionState: this.state.submissionState
                                }), i && Object(s.jsx)(be, {
                                    children: Object(s.jsx)(rr, {
                                        message: t,
                                        companyName: e,
                                        consentToCommunicate: c,
                                        onChange: this.onConsentChange
                                    })
                                }, "email-prompt-content-section")]
                            })
                        })
                    })
                }
            }
            ir.displayName = "EmailCapturePromptMessage";
            ir.propTypes = {
                companyName: i.a.string,
                consentToCommunicateMessage: i.a.string,
                hasVisitorEmail: i.a.bool.isRequired,
                message: Object(r.a)("EmailCapturePromptMessage").isRequired,
                positionDescriptors: sn.a.isRequired,
                requiresConsentToCommunicate: i.a.bool,
                sendVisitorEmailAddress: i.a.func.isRequired,
                threadId: i.a.number.isRequired
            };
            var or = ir,
                cr = n("19qb"),
                dr = n("AQmo"),
                lr = n("le4V"),
                ur = n("MBJP"),
                pr = n("ZqFO"),
                hr = n("647q");
            const br = Object(ur.a)(hr.getLatestWidgetData, e => Object(pr.c)(e)),
                mr = Object(ur.a)(hr.getLatestWidgetData, Object(Os.a)("companyName"));
            var gr = n("Wtdz"),
                fr = n("AEyM"),
                jr = n("eEyY");
            const Or = e => ({
                    coloring: Object(dr.a)(e),
                    companyName: mr(e),
                    consentToCommunicateMessage: br(e),
                    hasVisitorEmail: Object(gr.a)(e),
                    requiresConsentToCommunicate: Object(lr.a)(e),
                    threadId: Object(jr.getCurrentThreadId)(e)
                }),
                xr = {
                    sendVisitorEmailAddress: fr.sendVisitorEmailAddress
                };
            var yr = Object(cr.connect)(Or, xr)(or);
            const vr = e => Object(s.jsx)("svg", Object.assign({
                width: "1em",
                height: "1em",
                viewBox: "0 0 28 25",
                xmlns: "http://www.w3.org/2000/svg"
            }, e, {
                children: Object(s.jsx)("path", {
                    d: "M12 7.663c-.042-.286.044-.577.234-.796.192-.218.469-.344.76-.344h2.011c.292 0 .57.126.76.344.192.22.277.51.236.796l-1.006 6.992c-.07.492-.494.857-.995.857-.5 0-.925-.365-.995-.857l-1.006-6.992zm2 13.841c-1.11 0-2.01-.894-2.01-1.997 0-1.103.9-1.998 2.01-1.998 1.111 0 2.01.895 2.01 1.998s-.899 1.997-2.01 1.997zm3.001-19.783C16.375.643 15.253 0 14 0s-2.374.643-3 1.72L.47 19.838c-.627 1.078-.627 2.365 0 3.442C1.096 24.357 2.217 25 3.47 25H24.53c1.253 0 2.374-.643 3-1.72.627-1.078.627-2.365 0-3.443L17.001 1.721z",
                    fillRule: "evenodd"
                })
            }));
            vr.displayName = "SVGWarning";
            var Cr = vr;
            class Ir extends N.PureComponent {
                render() {
                    const {
                        fileAttachments: e,
                        message: t,
                        onRepublish: n
                    } = this.props, r = Object(rn.a)(t);
                    return Object(s.jsxs)(ke, {
                        use: V.c,
                        "data-test-id": "primary-message",
                        children: [Object(s.jsx)(gs, {
                            fileAttachments: e,
                            isLastMessage: !0,
                            message: r
                        }), Object(s.jsx)(xe, {
                            children: Object(s.jsxs)(Ee.a, {
                                use: "error",
                                children: [Object(s.jsx)(Kn.a, {
                                    icon: Object(s.jsx)(Cr, {}),
                                    className: "m-right-1"
                                }), Object(s.jsx)(En.a, {
                                    onClick: () => n(r),
                                    use: "error",
                                    children: Object(s.jsx)(an.a, {
                                        message: "conversations-visitor-message-history.status.publishing.PUBLISH_FAILED"
                                    })
                                })]
                            })
                        })]
                    })
                }
            }
            Ir.displayName = "FailedToPublishMessage";
            Ir.propTypes = {
                fileAttachments: i.a.instanceOf(on.List),
                message: Object(r.a)("FailedToPublish").isRequired,
                onRepublish: i.a.func.isRequired
            };
            var Tr = Ir;
            const wr = {
                onRepublish: n("N4ZN").a
            };
            var Sr = Object(cr.connect)(null, wr)(Tr),
                kr = n("gGDi");

            function Rr(e) {
                return "string" == typeof e
            }

            function Ar(e) {
                return Rr(e) ? e : e.has("label") ? e.get("label") : e.get("value")
            }

            function Pr(e) {
                return Rr(e) ? e : e.get("value")
            }
            var Mr = n("k8Ub"),
                Er = n("/mXs");
            const Nr = e => Object(s.jsx)("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 32 32"
            }, e, {
                children: Object(s.jsx)("path", {
                    d: "M29.92 2.58L11.33 21.17l-9.25-9.25c-.362-.362-.862-.586-1.415-.586-1.105 0-2.001.896-2.001 2.001 0 .553.224 1.053.586 1.415L9.92 25.41c.362.362.862.587 1.415.587s1.053-.224 1.415-.587l20-20c.362-.362.586-.862.586-1.415 0-1.105-.896-2.001-2.001-2.001-.553 0-1.053.224-1.415.586z"
                })
            }));
            Nr.displayName = "SVGSuccess";
            var _r = Nr;
            const Fr = c.a.div.withConfig({
                    displayName: "QuickReplyGroup__ButtonWrapper",
                    componentId: "sc-1wziu4m-0"
                })(["margin-bottom:12px;gap:8px;padding-top:8px;padding-bottom:8px;align-items:center;display:flex;flex-wrap:wrap;"]),
                qr = c()(Rs.a).withConfig({
                    displayName: "QuickReplyGroup__LeftAlignButton",
                    componentId: "sc-1wziu4m-1"
                })(["text-align:left;flex-shrink:1;"]);
            class Lr extends N.Component {
                constructor(e) {
                    super(e);
                    this.handleSendMulti = this.handleSendMulti.bind(this);
                    this.handleQuickReplySend = this.handleQuickReplySend.bind(this);
                    this.handleSendIndividual = this.handleSendIndividual.bind(this);
                    this.handleSelect = this.handleSelect.bind(this);
                    this.state = {
                        selected: Object(on.Set)()
                    }
                }
                hasSelected() {
                    const {
                        selected: e
                    } = this.state;
                    return e.size > 0
                }
                handleSelect(e) {
                    this.setState(({
                        selected: t
                    }) => ({
                        selected: t.includes(e) ? t.delete(e) : t.add(e)
                    }))
                }
                handleSendMulti() {
                    const {
                        selected: e
                    } = this.state;
                    if (this.hasSelected()) {
                        const t = e.map(Ar).join(", ");
                        this.handleQuickReplySend(t, e)
                    }
                }
                handleSendIndividual(e) {
                    const t = Object(on.List)([e]),
                        n = Ar(e);
                    this.handleQuickReplySend(n, t)
                }
                handleQuickReplySend(e, t) {
                    const {
                        message: n,
                        publishMessage: s
                    } = this.props;
                    s({
                        text: e,
                        quickReply: Object(Mr.a)(n).set("quickReplies", t.toJS())
                    })
                }
                renderOptions() {
                    const {
                        options: e,
                        multiSelect: t,
                        disabled: n
                    } = this.props, {
                        selected: r
                    } = this.state, a = t ? this.handleSelect : this.handleSendIndividual;
                    return e.map(e => {
                        const i = () => a(e),
                            o = r.includes(e),
                            c = Pr(e),
                            d = Ar(e);
                        if (!c || !d) return null;
                        const l = t && Object(s.jsx)(er, {
                            className: "m-right-2",
                            checked: o,
                            onChange: i,
                            children: d
                        });
                        return Object(s.jsx)(qr, {
                            onClick: i,
                            disabled: n,
                            size: "sm",
                            children: l || d
                        }, "quickreply." + c)
                    })
                }
                renderSendButton() {
                    const {
                        disabled: e,
                        multiSelect: t
                    } = this.props;
                    if (!t) return null;
                    const n = !this.hasSelected() || e;
                    return Object(s.jsx)(Er.a, {
                        disabled: n,
                        onClick: this.handleSendMulti,
                        size: "sm",
                        "data-test-id": "quick-reply-send-button",
                        children: Object(s.jsx)(Kn.a, {
                            icon: Object(s.jsx)(_r, {}),
                            size: "sm"
                        })
                    }, "send-button")
                }
                render() {
                    return Object(s.jsx)(Fr, {
                        "data-test-id": "quick-reply-group",
                        children: [...this.renderOptions(), this.renderSendButton()]
                    })
                }
            }
            Lr.contextType = X;
            Lr.defaultProps = {
                multiSelect: !1,
                hasSentReply: !1
            };
            Lr.displayName = "QuickReplyGroup";
            Lr.propTypes = {
                disabled: i.a.bool.isRequired,
                message: i.a.oneOfType([Object(r.a)("CommonMessage"), Object(r.a)("InitialMessage")]).isRequired,
                multiSelect: i.a.bool.isRequired,
                options: i.a.instanceOf(on.Set).isRequired,
                publishMessage: i.a.func
            };
            var Br = Lr;
            const Ur = 7;
            n("iKGd");
            const Dr = Ds.f,
                zr = Ds.e,
                Hr = (Ds.a, Ds.b, Ds.g, Ds.f, Ds.h, Ds.h),
                Vr = (Ds.h, "__PLACEHOLDER_VALUE__"),
                Qr = c.a.select.withConfig({
                    displayName: "VizExMobileSelect__StyledSelect",
                    componentId: "sc-2a1ww1-0"
                })(["appearance:none;background:none;border-radius:3px;border:1px solid transparent;color:inherit;cursor:inherit;font-size:16px;margin:0;outline:none;padding:8px 32px 10px 10px;width:100%;height:40px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&::-ms-expand{display:none;}:focus::-ms-value{color:", ";background:transparent;}"], ({
                    theme: e
                }) => Object(Ds.i)(e)),
                Wr = c.a.div.withConfig({
                    displayName: "VizExMobileSelect__SelectContainer",
                    componentId: "sc-2a1ww1-1"
                })(["background-color:", ";border-radius:3px;border:1px solid ", ";cursor:pointer;display:block;font-size:16px;height:40px;line-height:22px;padding:0;position:relative;text-align:left;transition:all 0.15s ease-out;width:100%;&::after{border-color:transparent;border-style:solid;border-width:0.375em;display:inline-block;vertical-align:middle;border-top-color:", ";margin-top:0.375em;margin-top:-3px;content:' ';position:absolute;top:50%;right:1em;z-index:2;pointer-events:none;}"], ({
                    theme: e
                }) => zr(e), ({
                    theme: e
                }) => Dr(e), ({
                    theme: e
                }) => Hr(e)),
                Jr = e => {
                    const {
                        options: t,
                        disabled: n,
                        value: r,
                        onChange: a,
                        placeholder: i,
                        theme: o
                    } = e, c = Object(u.a)(e, ["options", "disabled", "value", "onChange", "placeholder", "theme"]), d = t.map(({
                        value: e,
                        text: t
                    }) => Object(s.jsx)("option", {
                        value: e,
                        children: t
                    }, e));
                    return Object(s.jsx)(Wr, {
                        theme: o,
                        children: Object(s.jsxs)(Qr, Object.assign({}, c, {
                            "data-test-id": "VizExSelect",
                            disabled: n,
                            defaultValue: Vr,
                            value: r,
                            onChange: a,
                            theme: o,
                            children: [i && Object(s.jsx)("option", {
                                disabled: !0,
                                value: Vr,
                                children: i
                            }), d]
                        }))
                    })
                };
            Jr.displayName = "VizExMobileSelect";
            Jr.propTypes = {
                disabled: i.a.bool,
                onChange: i.a.func.isRequired,
                options: i.a.arrayOf(i.a.shape({
                    text: i.a.string,
                    value: i.a.string
                })).isRequired,
                placeholder: i.a.string,
                theme: Us.a,
                value: i.a.string
            };
            var Gr = Jr;
            const Yr = "__PLACEHOLDER_VALUE__",
                Kr = ({
                    quickReplyOptions: e,
                    onChange: t,
                    disabled: n,
                    value: r,
                    placeholder: a
                }) => {
                    const i = Object(N.useMemo)(() => e.map(e => {
                        const t = Pr(e);
                        return {
                            text: Ar(e),
                            value: t
                        }
                    }).toJS(), [e]);
                    return Object(s.jsx)(Gr, {
                        options: i,
                        onChange: t,
                        disabled: n,
                        defaultValue: Yr,
                        value: r,
                        placeholder: a
                    })
                };
            Kr.displayName = "QuickReplySelect";
            Kr.propTypes = {
                disabled: i.a.bool,
                onChange: i.a.func.isRequired,
                placeholder: i.a.string,
                quickReplyOptions: i.a.instanceOf(on.OrderedSet).isRequired,
                value: i.a.string
            };
            var Xr = Kr,
                $r = n("VADA"),
                Zr = n("pHbL"),
                ea = n("SGjM");
            const ta = Object(Ge.default)(({
                companyLogo: e,
                customChatName: t
            }) => new Xe.a({
                avatar: e,
                firstName: t,
                senderType: U.AGENT
            }));
            var na = n("YPLr"),
                sa = n("Avso");
            const ra = Object(Ge.default)((e, t, n) => {
                    const s = Object(na.agentTypeToSenderType)(Object(sa.getAgentType)(e) || n);
                    return new Xe.a({
                        id: Object(sa.getUserId)(e) || t,
                        avatar: Object(sa.getAvatar)(e),
                        firstName: Object(sa.getFirstName)(e),
                        email: Object(sa.getEmail)(e),
                        lastName: Object(sa.getLastName)(e),
                        senderType: s
                    })
                }),
                aa = c.a.div.withConfig({
                    displayName: "InitialMessageAvatar__MultiAvatarWrapper",
                    componentId: "ddjj4k-0"
                })(["width:100%;height:100%;display:flex;justify-content:center;flex-wrap:wrap;margin-right:4px;margin-left:-4px;& > *{flex:1;line-height:1;position:relative;& > *{position:absolute;left:0;bottom:-8px;}div{background-color:white;}}"]);
            class ia extends N.PureComponent {
                getSenderAvatars() {
                    const {
                        chatHeadingConfig: e,
                        sender: t,
                        sendFromResponders: n
                    } = this.props;
                    if (Object(Ze.isFromBot)(t)) return Object(on.List)([t]);
                    if (n.size) return Object(ea.a)(ra, n);
                    const s = Object($r.a)(e);
                    return s ? Object(on.List)([ta({
                        companyLogo: s,
                        customChatName: Object(Zr.a)(e)
                    })]) : Object(on.List)()
                }
                renderAvatars() {
                    const e = this.getSenderAvatars();
                    if (!e.size) return Object(s.jsx)(H, {});
                    if (1 === e.size) {
                        const t = e.get(0);
                        return Object(s.jsx)(H, {
                            sender: t
                        })
                    }
                    const t = 2 === e.size;
                    return Object(s.jsx)(aa, {
                        children: e.map((e, n) => Object(s.jsx)(H, {
                            sender: e,
                            size: t ? "xs" : "xxs"
                        }, n))
                    })
                }
                render() {
                    return Object(s.jsx)(ue, {
                        children: this.renderAvatars()
                    })
                }
            }
            ia.displayName = "InitialMessageAvatar";
            ia.propTypes = {
                chatHeadingConfig: i.a.oneOfType([Object(r.a)("CompanyChatHeadingConfig"), Object(r.a)("OwnerChatHeadingConfig"), Object(r.a)("UsersAndTeamsChatHeadingConfig")]),
                sendFromResponders: i.a.instanceOf(on.List).isRequired,
                sender: Object(r.a)("Sender")
            };
            var oa = ia;
            class ca extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.handleQuickReplySend = () => {
                        const {
                            message: e,
                            publishMessage: t
                        } = this.props, {
                            selectedQuickReply: n
                        } = this.state;
                        t({
                            text: Ar(n),
                            quickReply: Object(Mr.a)(e).set("quickReplies", [n])
                        })
                    };
                    this.handleQuickReplySelect = ({
                        target: {
                            value: e
                        }
                    }) => {
                        const {
                            message: t
                        } = this.props, n = Object(Mr.d)(t).filter(t => Pr(t) === e).first();
                        this.setState({
                            selectedQuickReply: n
                        })
                    };
                    this.showQuickReplySelection = () => {
                        const {
                            message: e
                        } = this.props, t = Object(Mr.d)(e), n = Object(Mr.b)(e);
                        return this.showQuickReplies() && t.count() > Ur && !n
                    };
                    this.renderQuickReplySelect = () => {
                        const {
                            message: e,
                            isThreadStarted: t,
                            requiresExplicitConsentToProcess: n
                        } = this.props, {
                            selectedQuickReply: r
                        } = this.state, a = Object(Mr.d)(e);
                        return Object(s.jsx)("div", {
                            className: "m-y-2",
                            children: Object(s.jsx)(Xr, {
                                quickReplyOptions: a,
                                disabled: n || !t,
                                onChange: this.handleQuickReplySelect,
                                value: Pr(r),
                                placeholder: D.a.text("conversations-visitor-message-history.quickReply.selectionPlaceholder")
                            })
                        })
                    };
                    this.renderQuickReplySendButton = () => {
                        const {
                            isThreadStarted: e
                        } = this.props, {
                            selectedQuickReply: t
                        } = this.state;
                        return Object(s.jsx)(xe, {
                            children: Object(s.jsx)(Rs.a, {
                                disabled: !e || !Pr(t),
                                onClick: this.handleQuickReplySend,
                                size: "sm",
                                use: "primary",
                                children: Object(s.jsx)(Ue.a, {
                                    message: "conversations-visitor-message-history.quickReply.selectionComplete"
                                })
                            })
                        })
                    };
                    this.state = {
                        selectedQuickReply: Object(on.Map)()
                    }
                }
                get sender() {
                    const {
                        message: e,
                        senders: t
                    } = this.props;
                    return tt(e, t)
                }
                hasQuickReplyOptions() {
                    const {
                        message: e
                    } = this.props, t = Object(F.getSenderType)(e);
                    return Object(Mr.a)(e) && t !== U.VISITOR
                }
                showQuickReplies() {
                    const {
                        hasUnansweredQuickReplyMessage: e,
                        positionDescriptors: t
                    } = this.props, n = e && t.get(nn.c);
                    return this.hasQuickReplyOptions() && n
                }
                renderAvatar() {
                    const {
                        chatHeadingConfig: e,
                        sendFromResponders: t
                    } = this.props;
                    return Object(s.jsx)(oa, {
                        chatHeadingConfig: e,
                        sender: this.sender,
                        sendFromResponders: t
                    })
                }
                renderQuickReplyGroup() {
                    const {
                        isThreadStarted: e,
                        message: t,
                        publishMessage: n,
                        requiresExplicitConsentToProcess: r
                    } = this.props, a = Object(Mr.d)(t), i = Object(Mr.b)(t);
                    return Object(s.jsx)(xe, {
                        children: Object(s.jsx)(Br, {
                            disabled: r || !e,
                            options: a,
                            message: t,
                            multiSelect: i,
                            publishMessage: n,
                            onSend: this.handleQuickReplySend
                        })
                    })
                }
                renderContentSection() {
                    const e = Object(Yt.a)(["metadata", "@type"]),
                        {
                            message: t
                        } = this.props;
                    let n, r;
                    if (Boolean(e(t))) {
                        n = Object(F.getPlainText)(t);
                        r = Object(F.getRichText)(t)
                    } else {
                        n = Object(kr.b)(t);
                        r = Object(kr.a)(t)
                    }
                    const a = hs.a.link(r, {
                        stripPrefix: !1
                    });
                    return Object(s.jsxs)(be, {
                        children: [Object(s.jsx)(Gt, {
                            messageId: t.id,
                            "aria-label": `${D.a.text("conversations-visitor-message-history.agentSays")} ${Object(F.getPlainText)(t)}`,
                            contentText: a || n
                        }), this.showQuickReplySelection() && this.renderQuickReplySelect()]
                    })
                }
                renderMessageFooter() {
                    const {
                        message: e
                    } = this.props, t = Object(Mr.d)(e), n = Object(Mr.b)(e);
                    return this.showQuickReplySelection() ? this.renderQuickReplySendButton() : this.showQuickReplies() && (t.count() <= Ur || n) ? this.renderQuickReplyGroup() : null
                }
                render() {
                    const {
                        positionDescriptors: e
                    } = this.props, t = e.get(nn.a);
                    return Object(s.jsxs)(ke, {
                        use: V.a,
                        children: [t && Object(s.jsx)(ve, {
                            children: this.renderAvatar()
                        }), Object(s.jsx)(je, {
                            shouldFocusMessage: Boolean(this.showQuickReplies()),
                            children: this.renderContentSection()
                        }), this.renderMessageFooter()]
                    })
                }
            }
            ca.displayName = "InitialMessage";
            ca.propTypes = {
                chatHeadingConfig: i.a.oneOfType([Object(r.a)("CompanyChatHeadingConfig"), Object(r.a)("OwnerChatHeadingConfig"), Object(r.a)("UsersAndTeamsChatHeadingConfig")]),
                hasUnansweredQuickReplyMessage: i.a.bool,
                isThreadStarted: i.a.bool.isRequired,
                message: Object(r.a)("InitialMessage").isRequired,
                positionDescriptors: sn.a.isRequired,
                publishMessage: i.a.func,
                requiresExplicitConsentToProcess: i.a.bool.isRequired,
                sendFromResponders: i.a.instanceOf(on.List).isRequired,
                senders: Q.a.isRequired
            };
            var da = ca,
                la = n("p9k8"),
                ua = n("WUj5"),
                pa = n("hTKa"),
                ha = n("PYok"),
                ba = n("byjC"),
                ma = n("k09d"),
                ga = n("wD2U");
            const fa = e => {
                    const t = Object(ma.a)(e);
                    return {
                        chatHeadingConfig: Object(ua.a)(e),
                        sendFromResponders: Object(pa.a)(e),
                        hasUnansweredQuickReplyMessage: Object(ba.a)(e, {
                            thread: t
                        }),
                        isThreadStarted: Object(la.a)(t),
                        mobile: Object(ga.getIsMobile)(e)
                    }
                },
                ja = {
                    publishMessage: ha.a
                };
            var Oa = Object(cr.connect)(fa, ja)(da);
            const xa = e => {
                const t = Object(F.getSenderType)(e);
                return Object(Mr.a)(e) && t !== U.VISITOR
            };
            class ya extends N.PureComponent {
                constructor(e) {
                    super(e);
                    this.handleQuickReplySend = () => {
                        const {
                            message: e,
                            publishMessage: t
                        } = this.props, {
                            selectedQuickReply: n
                        } = this.state;
                        t({
                            text: Ar(n),
                            quickReply: Object(Mr.a)(e).set("quickReplies", [n])
                        })
                    };
                    this.handleQuickReplySelect = ({
                        target: {
                            value: e
                        }
                    }) => {
                        const {
                            message: t
                        } = this.props, n = Object(Mr.d)(t).filter(t => Pr(t) === e).first();
                        this.setState({
                            selectedQuickReply: n
                        })
                    };
                    this.showQuickReplies = () => {
                        const {
                            hasUnansweredQuickReplyMessage: e,
                            message: t,
                            positionDescriptors: n
                        } = this.props, s = e && n.get(nn.c);
                        return xa(t) && s
                    };
                    this.showQuickReplySelection = () => {
                        const {
                            message: e
                        } = this.props, t = Object(Mr.d)(e), n = Object(Mr.b)(e);
                        return this.showQuickReplies() && t.count() > Ur && !n
                    };
                    this.renderQuickReplyGroup = () => {
                        const {
                            isThreadStarted: e,
                            message: t,
                            publishMessage: n,
                            requiresExplicitConsentToProcess: r
                        } = this.props, a = Object(Mr.d)(t), i = Object(Mr.b)(t);
                        return Object(s.jsx)(xe, {
                            children: Object(s.jsx)(Br, {
                                options: a,
                                disabled: r || !e,
                                message: t,
                                multiSelect: i,
                                publishMessage: n,
                                onChange: this.handleQuickReplyUpdate
                            })
                        })
                    };
                    this.renderQuickReplySendButton = () => {
                        const {
                            isThreadStarted: e
                        } = this.props, {
                            selectedQuickReply: t
                        } = this.state;
                        return Object(s.jsx)(xe, {
                            children: Object(s.jsx)(Rs.a, {
                                disabled: !e || !Pr(t),
                                onClick: this.handleQuickReplySend,
                                size: "sm",
                                use: "primary",
                                children: Object(s.jsx)(Ue.a, {
                                    message: "conversations-visitor-message-history.quickReply.selectionComplete"
                                })
                            })
                        })
                    };
                    this.renderQuickReplySelect = () => {
                        const {
                            message: e,
                            isThreadStarted: t,
                            requiresExplicitConsentToProcess: n
                        } = this.props, {
                            selectedQuickReply: r
                        } = this.state, a = Object(Mr.d)(e);
                        return Object(s.jsx)("div", {
                            className: "m-y-2",
                            children: Object(s.jsx)(Xr, {
                                quickReplyOptions: a,
                                disabled: n || !t,
                                onChange: this.handleQuickReplySelect,
                                value: Pr(r),
                                placeholder: D.a.text("conversations-visitor-message-history.quickReply.selectionPlaceholder")
                            })
                        })
                    };
                    this.state = {
                        selectedQuickReply: Object(on.Map)()
                    }
                }
                isSentFromVisitor() {
                    return Object(Ze.isFromVisitor)(this.props.message)
                }
                get sender() {
                    const {
                        message: e,
                        senders: t
                    } = this.props;
                    return tt(e, t)
                }
                renderMessageHeader() {
                    const {
                        positionDescriptors: e
                    } = this.props;
                    if (!e.includes(nn.b) || this.isSentFromVisitor()) return null;
                    const t = this.sender,
                        n = st(t);
                    return Object(s.jsxs)(ve, {
                        children: [Object(s.jsx)(ue, {
                            children: Object(s.jsx)(H, {
                                sender: t,
                                isLoading: n
                            })
                        }), Object(s.jsx)(Ie, {
                            children: Object(s.jsx)(Qe, {
                                isSenderLoading: n,
                                sender: t
                            })
                        })]
                    })
                }
                renderTimeStamp() {
                    const {
                        message: e,
                        positionDescriptors: t,
                        locale: n
                    } = this.props, r = t.includes(nn.e), a = Object(F.getTimestamp)(e);
                    return r && a ? Object(s.jsx)(xe, {
                        children: Object(s.jsx)(Ee.a, {
                            use: "help",
                            children: new Date(a).toLocaleTimeString(n, {
                                hour: "2-digit",
                                minute: "2-digit"
                            })
                        })
                    }) : null
                }
                renderMessageFooter() {
                    const {
                        message: e
                    } = this.props, t = Object(Mr.d)(e), n = Object(Mr.b)(e);
                    return this.showQuickReplies() && this.showQuickReplySelection() ? this.renderQuickReplySendButton() : this.showQuickReplies() && (t.count() <= Ur || n) ? this.renderQuickReplyGroup() : this.renderTimeStamp()
                }
                render() {
                    const {
                        fileAttachments: e,
                        message: t,
                        positionDescriptors: n,
                        toggleOpen: r,
                        mobile: a,
                        hasUnansweredQuickReplyMessage: i
                    } = this.props, o = this.isSentFromVisitor() ? V.c : V.a;
                    return Object(s.jsxs)(ke, {
                        use: o,
                        children: [this.renderMessageHeader(), Object(s.jsx)(gs, {
                            senderName: Object(q.e)(this.sender),
                            fileAttachments: e,
                            isLastMessage: n.includes(nn.c),
                            message: t,
                            quickReplySelect: this.showQuickReplySelection() && this.renderQuickReplySelect,
                            mobile: a,
                            toggleOpen: r,
                            hasUnansweredQuickReplyMessage: i
                        }), this.renderMessageFooter()]
                    })
                }
            }
            ya.displayName = "CommonMessage";
            ya.propTypes = {
                fileAttachments: i.a.instanceOf(on.List),
                hasUnansweredQuickReplyMessage: i.a.bool,
                isThreadStarted: i.a.bool.isRequired,
                locale: i.a.string.isRequired,
                message: Object(r.a)("CommonMessage").isRequired,
                mobile: i.a.bool,
                positionDescriptors: sn.a.isRequired,
                publishMessage: i.a.func,
                requiresExplicitConsentToProcess: i.a.bool.isRequired,
                senders: Q.a,
                toggleOpen: i.a.func
            };
            var va = ya,
                Ca = n("jxkM"),
                Ia = n("u8Gm");
            const Ta = e => {
                    const t = Object(ma.a)(e);
                    return {
                        hasUnansweredQuickReplyMessage: Object(ba.a)(e, {
                            thread: t
                        }),
                        isThreadStarted: Object(la.a)(t),
                        mobile: Object(ga.getIsMobile)(e),
                        locale: Object(Ia.b)(e)
                    }
                },
                wa = {
                    publishMessage: ha.a,
                    toggleOpen: Ca.toggleOpen
                };
            var Sa = Object(cr.connect)(Ta, wa)(va),
                ka = n("lOT2");
            const Ra = e => ({
                    requiresExplicitConsentToProcess: Object(ka.a)(e)
                }),
                Aa = {},
                Pa = Object(cr.connect)(Ra, Aa),
                Ma = ["id"],
                Ea = ["timestamp"],
                Na = (Object(Yt.a)(Ma), Object(Yt.a)(Ea)),
                _a = Object(N.memo)(({
                    message: e,
                    labelPadding: t,
                    locale: n
                }) => {
                    const r = Na(e),
                        a = new Date(r).toLocaleDateString(n, {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                    return Object(s.jsx)(lt, {
                        labelPadding: t,
                        children: Object(s.jsx)(Ee.a, {
                            use: "help",
                            children: a
                        })
                    })
                });
            _a.displayName = "DateLabelMessage";
            _a.propTypes = {
                labelPadding: i.a.string,
                locale: i.a.string.isRequired,
                message: Object(r.a)("DateMessage").isRequired
            };
            var Fa = _a;
            const qa = c.a.div.withConfig({
                    displayName: "DateLabel__StyleWrapper",
                    componentId: "raa9k-0"
                })(["", "{border-color:", ";}"], ct, f.f),
                La = e => Object(s.jsx)(qa, {
                    children: Object(s.jsx)(Fa, Object.assign({}, e, {
                        labelPadding: "m-y-3"
                    }))
                });
            La.displayName = "DateLabel";
            La.propTypes = Fa.propTypes;
            var Ba = La;
            const Ua = e => ({
                locale: Object(Ia.b)(e)
            });
            var Da = Object(cr.connect)(Ua, null)(Ba),
                za = n("x1PU"),
                Ha = n("E6wg");
            const Va = e => t => {
                const n = Object(cr.useSelector)(Ha.getSessionId);
                return Object(s.jsx)(e, Object.assign({}, t, {
                    sessionId: n
                }))
            };
            var Qa = n("081M");
            const Wa = e => t => {
                const n = Object(cr.useSelector)(Qa.getHubspotUtk);
                return Object(s.jsx)(e, Object.assign({}, t, {
                    hubspotUtk: n
                }))
            };

            function Ja(e) {
                return t => {
                    const n = Object(cr.useSelector)(jr.getCurrentThreadId);
                    return Object(s.jsx)(e, Object.assign({}, t, {
                        threadId: n
                    }))
                }
            }
            n.d(t, "a", (function() {
                return ri
            }));
            const {
                ACTIVELY_PUBLISHING: Ga,
                COMMON_MESSAGE: Ya,
                DATE_MESSAGE: Ka,
                EMAIL_CAPTURE_PROMPT: Xa,
                FAILED_TO_PUBLISH: $a,
                INITIAL_MESSAGE: Za,
                OFFICE_HOURS: ei,
                TYPICAL_RESPONSE_TIME: ti,
                TYPING: ni,
                FEEDBACK_SURVEY: si
            } = za.a, ri = {
                [Ga]: js,
                [Ya]: Pa(Sa),
                [Ka]: Da,
                [Xa]: yr,
                [$a]: Sr,
                [Za]: Pa(Oa),
                [ei]: tn,
                [ti]: tn,
                [ni]: at,
                [si]: Ja(Va(Wa(Ss)))
            }
        },
        "5els": function(e, t, n) {
            var s = n("uIOU"),
                r = n("EzJv"),
                a = n("2+Io");

            function i() {
                this.size = 0;
                this.__data__ = {
                    hash: new s,
                    map: new(a || r),
                    string: new s
                }
            }
            e.exports = i
        },
        "5oUx": function(e, t, n) {
            "use strict";
            var s = n("YPLr"),
                r = n("Avso"),
                a = n("MBJP"),
                i = n("k09d"),
                o = n("Q2fA");
            const c = Object(a.a)([e => e, i.a], (e, t) => Object(o.a)(e, {
                thread: t
            }));
            var d = n("eEyY"),
                l = n("QYOI"),
                u = n("+TdC"),
                p = n("BvOu"),
                h = n("cPs9");
            n.d(t, "a", (function() {
                return b
            }));
            const b = Object(a.a)([c, d.getCurrentThreadId], (e, t) => {
                if (!e || !t) return Object(l.List)();
                const n = Object(s.agentTypeToCMFSenderType)(Object(r.getAgentType)(e), !0),
                    a = Object(h.a)(n);
                return Object(l.List)([new u.a({
                    id: Object(p.generateUuid)(),
                    typingState: null,
                    sender: {
                        "@type": n,
                        [a]: Object(r.getUserId)(e)
                    }
                })])
            })
        },
        "5rZi": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "createNewThread", (function() {
                return E
            }));
            var s = n("+LtA"),
                r = n("Ut5p"),
                a = n("QYOI"),
                i = n("JGJA"),
                o = n("mEYk"),
                c = n.n(o),
                d = n("4dq7"),
                l = n("dIvY"),
                u = n("sWFM"),
                p = n("V0XL"),
                h = n("E6wg"),
                b = n("lJFu"),
                m = n("Ryja"),
                g = n("Ux+X"),
                f = n("081M"),
                j = n("k3iI"),
                O = n("qwm9"),
                x = n("2Sm/"),
                y = n("PY3R"),
                v = n("q1tZ"),
                C = n("647q"),
                I = n("2BFa"),
                T = n("xM+F"),
                w = n("CdQ/"),
                S = n("dZ2B"),
                k = n("R4/u");
            const R = Object(r.b)(x.a.STARTED),
                A = Object(r.b)(x.a.SUCCEEDED, ({
                    channel: e,
                    threadId: t,
                    conversation: n,
                    threadHistory: s,
                    shouldAskForEmail: r
                }) => ({
                    channel: e,
                    threadId: t,
                    conversation: n,
                    threadHistory: s,
                    shouldAskForEmail: r
                })),
                P = Object(r.b)(x.a.FAILED, ({
                    status: e,
                    message: t,
                    error: n
                }) => ({
                    status: e,
                    message: t,
                    error: n
                }));
            let M;

            function E() {
                return (e, t) => {
                    const n = Object(h.getSessionId)(t()),
                        r = Object(u.getMessageId)(t()),
                        o = Object(p.getMessagesPageUri)(t()),
                        x = Object(f.getHubspotUtk)(),
                        E = Object(C.getLatestWidgetData)(t()),
                        N = Object(m.getVisitorInitialThreadHistory)(t()),
                        _ = (N[0] || [{}]).id;
                    if (void 0 === _ || M === _) {
                        M === _ && c.a.captureMessage("createNewThread attempted duplicate initial message", {
                            level: "warning",
                            extra: {
                                initialMessageId: _
                            }
                        });
                        return null
                    }
                    M = _;
                    e(R());
                    return Object(O.createVisitorThread)({
                        sessionId: n,
                        hubspotUtk: x,
                        messageId: r,
                        messagesPageUri: o,
                        visitorThreadInitialHistory: N,
                        widgetData: E,
                        zoneId: Object(S.getUserTimezone)()
                    }).then(({
                        channelDetails: n,
                        sessionId: r,
                        id: c,
                        history: u,
                        shouldAskForEmail: p
                    }) => {
                        const h = new s.a(Object.assign({}, u, {
                                attachments: Object(a.Map)(Object(i.a)("attachments", u))
                            })),
                            m = Object(b.buildCreatedThread)({
                                channelDetails: n,
                                messagesPageUri: o,
                                threadId: c,
                                threadHistory: h
                            });
                        e(Object(j.updateSessionId)(r));
                        e(Object(g.trackInteraction)("start-conversation", {
                            action: "new conversation started",
                            threadId: c
                        }));
                        e(Object(k.b)());
                        e(A({
                            channel: Object(v.a)(n),
                            threadId: c,
                            conversation: m,
                            threadHistory: h,
                            shouldAskForEmail: p
                        }));
                        e(Object(d.addAvailabilityMessage)({
                            channel: Object(v.a)(n),
                            threadId: c
                        }));
                        Object(y.a)({
                            thread: m
                        });
                        Object(I.gdprCookieConsentOnExitIntentEnabled)(t(), E) || Object(T.getIsPrivateLoad)(E) || Object(l.handleStoreMessagesCookie)(Object(w.getMessagesUtk)())
                    }).catch((t = {}) => e(P({
                        status: t.status,
                        message: t.message,
                        error: t
                    })))
                }
            }
        },
        "6GFX": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "generateIdForFile", (function() {
                return s
            }));
            const s = ({
                file: e,
                timestamp: t
            }) => `${e?e.name:""}-${t}`
        },
        "6PLn": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "applyGdprConsent", (function() {
                return a
            }));
            var s = n("Qf6G"),
                r = n("FPMu");
            const a = () => (e, t) => {
                Object(r.shouldRecordImplicitConsentToProcess)(t()) && e(Object(s.consentToProcess)());
                return Promise.resolve()
            }
        },
        "6aYC": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var s = n("KXN9"),
                r = n("x1JE"),
                a = n("MBJP"),
                i = n("eEyY"),
                o = n("goEE"),
                c = n("a/jS");
            const d = Object(a.a)([c.a, i.getCurrentThreadId], (e, t) => {
                const n = Object(r.getEntries)(e).map(s.a);
                return Object(o.getSortedMessagesByThreadId)(n, t)
            })
        },
        "6upE": function(e, t) {
            function n(e) {
                var t = this.has(e) && delete this.__data__[e];
                this.size -= t ? 1 : 0;
                return t
            }
            e.exports = n
        },
        "7yF8": function(e, t, n) {
            "use strict";
            var s = n("MBJP"),
                r = n("Pda3"),
                a = n("PaBm"),
                i = n("BxyF"),
                o = n("JGJA"),
                c = n("KXN9"),
                d = n("x1JE"),
                l = n("5vQK");
            const u = Object(o.a)("subscriptions"),
                p = (e, {
                    clientKey: t = l.a
                } = {}) => t,
                h = Object(s.a)([p, u], d.getEntry);
            Object(s.a)([h], c.a);
            var b = n("rjAk"),
                m = n("Ryja"),
                g = n("dHfq"),
                f = n("ZSXR");
            n.d(t, "a", (function() {
                return j
            }));
            const j = Object(s.a)([m.getAsyncStagedThread, i.getAsyncPubSubClient, b.hasPersistedThreads, h, g.a, f.a], (e, t, n, s, i, o) => {
                if (Object(r.isStarted)(e)) return !1;
                if (Object(r.isUninitialized)(e) && !n) return !0;
                return !(!Object(r.isSucceeded)(i) && !Object(r.isUninitialized)(i) || !Object(r.isSucceeded)(o) && !Object(r.isUninitialized)(o)) && (!!(n && Object(a.isClientReady)(t) && Object(r.isSucceeded)(s)) || !!(Object(r.isSucceeded)(e) && Object(a.isClientReady)(t) && Object(r.isSucceeded)(s)))
            })
        },
        "80AS": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var s = n("MBJP"),
                r = n("J4oD"),
                a = n("C3IS"),
                i = n("V+nC"),
                o = n("iPDb"),
                c = n("k8Ub"),
                d = n("kWFB");
            const l = Object(s.a)([r.historyDataForThread], e => {
                if (!e || !Object(d.hasMessages)(e)) return !0;
                const t = Object(o.a)(e).filter(e => Object(a.b)(e) && !Object(a.c)(e) || Object(i.a)(e)).last();
                return Object(c.c)(t)
            })
        },
        "84zR": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "uploadAttachment", (function() {
                return g
            }));
            var s = n("ughT"),
                r = n("Ux+X"),
                a = n("E6wg"),
                i = n("9P7L"),
                o = n("xAl4"),
                c = n("JIa2"),
                d = n("VXRw"),
                l = n("lnDz"),
                u = n("3yBC"),
                p = n("gygH"),
                h = n("Wnz4"),
                b = n("gQ5O"),
                m = n("R4/u");
            const g = ({
                attachment: e,
                threadId: t
            }) => (n, g) => {
                const f = Date.now();
                n(Object(d.attachmentUploadStart)({
                    attachment: e,
                    threadId: t
                }));
                const j = Object(a.getSessionId)(g()),
                    O = Object(s.getLocalId)(e),
                    x = Object(s.getFile)(e),
                    y = Object(c.createFormDataForAttachment)({
                        file: x
                    });
                return Object(i.fetchAttachmentUploadUrlClient)({
                    sessionId: j,
                    threadId: t
                }).then(({
                    uploadUrl: e
                }) => Object(o.uploadAttachmentClient)({
                    formData: y,
                    onProgress: ({
                        loaded: e,
                        total: s
                    }) => {
                        n(Object(p.handleAttachmentUploadProgress)({
                            localId: O,
                            threadId: t,
                            loaded: e,
                            total: s
                        }))
                    },
                    uploadUrl: `${b.a}/${e}`
                })).then(({
                    objects: [e]
                }) => {
                    const s = Date.now();
                    n(Object(l.attachmentUploadComplete)({
                        localId: O,
                        threadId: t,
                        fileId: e.id,
                        uploadedFile: e
                    }));
                    n(Object(m.a)());
                    n(Object(r.trackInteraction)("attached-file", {
                        action: "attached file",
                        "attachment-type": e.extension,
                        "attachment-size-bytes": x.size,
                        "upload-time-ms": s - f
                    }))
                }).catch(e => {
                    if (e && e.responseJSON && e.responseJSON.message.includes("not allowed")) {
                        n(Object(h.attachmentError)(u.a, t));
                        n(Object(r.trackInteraction)("failed-to-attach-file", {
                            action: "failed to attach file",
                            "failure-type": "invalid file type"
                        }))
                    } else {
                        n(Object(h.attachmentError)(u.c, t));
                        n(Object(r.trackInteraction)("failed-to-attach-file", {
                            action: "failed to attach file",
                            "failure-type": "upload error"
                        }))
                    }
                })
            }
        },
        "8FuJ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var s = n("YPLr"),
                r = n("oLsC"),
                a = n("Avso"),
                i = n("MBJP");
            const o = Object(i.b)((e, t, n) => {
                const i = Object(s.agentTypeToSenderType)(Object(a.getAgentType)(e) || n);
                return new r.a({
                    id: Object(a.getUserId)(e) || t,
                    avatar: Object(a.getAvatar)(e),
                    firstName: Object(a.getFirstName)(e),
                    email: Object(a.getEmail)(e),
                    lastName: Object(a.getLastName)(e),
                    senderType: i
                })
            })
        },
        "8M+t": function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("Ktcs"),
                o = n("9f1P"),
                c = n.n(o),
                d = n("+KD7"),
                l = n("0IL2"),
                u = n("mKxs"),
                p = n("evgc"),
                h = n("sl/w"),
                b = n("/gEt"),
                m = n("+WNO");
            const g = c.a.div.withConfig({
                displayName: "ProcessConsentPrompt__ConsentPromptWrapper",
                componentId: "s2qyig-0"
            })(["border-top:2px solid ", ";"], d.f);
            class f extends i.Component {
                componentDidMount() {
                    const {
                        trackInteraction: e
                    } = this.props;
                    e("widget-interaction", {
                        action: "view consent to process"
                    })
                }
                render() {
                    const {
                        coloring: e,
                        consentToProcess: t,
                        closeConsentToProcess: n,
                        consentToProcessError: r,
                        consentToProcessMessage: a,
                        dismissConsentToProcessError: i,
                        showGdprConsentToProcessButton: o
                    } = this.props;
                    return Object(s.jsx)(g, {
                        children: r ? Object(s.jsx)(p.a, {
                            title: Object(s.jsx)(h.a, {
                                message: "conversations-visitor-ui.network.offline.title"
                            }),
                            onClose: i
                        }) : Object(s.jsx)(l.a, {
                            showButton: o,
                            message: a,
                            onClick: t,
                            onClose: n,
                            coloring: e,
                            isOneOfTargetedProductPages: Object(m.isOneOfTargetedProductPages)(),
                            isPortal53: Object(b.a)()
                        })
                    })
                }
            }
            f.displayName = "ProcessConsentPrompt";
            f.propTypes = {
                closeConsentToProcess: a.a.func,
                coloring: Object(u.a)("ColoringRecord"),
                consentToProcess: a.a.func,
                consentToProcessError: a.a.bool,
                consentToProcessMessage: a.a.string,
                dismissConsentToProcessError: a.a.func,
                showGdprConsentToProcessButton: a.a.bool,
                trackInteraction: a.a.func
            };
            t.a = f
        },
        "8Q5G": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = (e, ...t) => {
                "function" == typeof e && e(...t)
            }
        },
        "8cLO": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "gdprExplicitConsentRequired", (function() {
                return i
            }));
            var s = n("DdHT"),
                r = n("ZqFO"),
                a = n("VvTX");
            const i = Object(s.a)(r.f, a.getGdprExplicitConsentRequired)
        },
        "8f3s": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("ughT"),
                r = n("l6Ux"),
                a = n("p3n+");
            const i = e => {
                if (!e) return null;
                const t = e.filter(r.isUploadCompleted).map(s.getFileId);
                return t.size ? Object(a.a)({
                    fileIds: t
                }) : null
            }
        },
        "8g7g": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var s = n("ughT"),
                r = n("Ux+X"),
                a = n("BnUr"),
                i = n("jVj2");
            const o = ({
                attachment: e,
                thread: t
            }) => n => {
                const o = Object(a.getThreadId)(t),
                    c = Object(s.getLocalId)(e);
                n(Object(i.removeAttachment)({
                    localId: c,
                    threadId: o
                }));
                n(Object(r.trackInteraction)("remove-staged-attachment", {
                    action: "remove staged attachment"
                }))
            }
        },
        "90r9": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("dIvY"),
                r = n("CdQ/"),
                a = n("Ux+X");

            function i() {
                return e => {
                    Object(s.handleStoreMessagesCookie)(Object(r.getMessagesUtk)());
                    e(Object(a.trackInteraction)("widget-interaction", {
                        action: "clicked consent to cookies button"
                    }))
                }
            }
        },
        "9C7g": function(e, t, n) {
            "use strict";
            var s = n("QYOI"),
                r = "<<anonymous>>",
                a = {
                    listOf: u,
                    mapOf: h,
                    orderedMapOf: b,
                    setOf: m,
                    orderedSetOf: g,
                    stackOf: f,
                    iterableOf: j,
                    recordOf: O,
                    shape: y,
                    contains: y,
                    mapContains: v,
                    list: c("List", s.List.isList),
                    map: c("Map", s.Map.isMap),
                    orderedMap: c("OrderedMap", s.OrderedMap.isOrderedMap),
                    set: c("Set", s.Set.isSet),
                    orderedSet: c("OrderedSet", s.OrderedSet.isOrderedSet),
                    stack: c("Stack", s.Stack.isStack),
                    seq: c("Seq", s.Seq.isSeq),
                    record: c("Record", (function(e) {
                        return e instanceof s.Record
                    })),
                    iterable: c("Iterable", s.Iterable.isIterable)
                };

            function i(e) {
                var t = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : e instanceof s.Iterable ? "Immutable." + e.toSource().split(" ")[0] : t
            }

            function o(e) {
                function t(t, n, s, a, i, o) {
                    for (var c = arguments.length, d = Array(c > 6 ? c - 6 : 0), l = 6; l < c; l++) d[l - 6] = arguments[l];
                    o = o || s;
                    a = a || r;
                    return null != n[s] ? e.apply(void 0, [n, s, a, i, o].concat(d)) : t ? new Error("Required " + i + " `" + o + "` was not specified in `" + a + "`.") : void 0
                }
                var n = t.bind(null, !1);
                n.isRequired = t.bind(null, !0);
                return n
            }

            function c(e, t) {
                function n(n, s, r, a, o) {
                    var c = n[s];
                    if (!t(c)) {
                        var d = i(c);
                        return new Error("Invalid " + a + " `" + o + "` of type `" + d + "` supplied to `" + r + "`, expected `" + e + "`.")
                    }
                    return null
                }
                return o(n)
            }

            function d(e, t, n) {
                function s(s, r, a, o, c) {
                    for (var d = arguments.length, l = Array(d > 5 ? d - 5 : 0), u = 5; u < d; u++) l[u - 5] = arguments[u];
                    var p = s[r];
                    if (!n(p)) {
                        var h = o,
                            b = i(p);
                        return new Error("Invalid " + h + " `" + c + "` of type `" + b + "` supplied to `" + a + "`, expected an Immutable.js " + t + ".")
                    }
                    if ("function" != typeof e) return new Error("Invalid typeChecker supplied to `" + a + "` for propType `" + c + "`, expected a function.");
                    for (var m = p.toArray(), g = 0, f = m.length; g < f; g++) {
                        var j = e.apply(void 0, [m, g, a, o, c + "[" + g + "]"].concat(l));
                        if (j instanceof Error) return j
                    }
                }
                return o(s)
            }

            function l(e) {
                function t(t, n, s, r, a) {
                    for (var i = arguments.length, o = Array(i > 5 ? i - 5 : 0), c = 5; c < i; c++) o[c - 5] = arguments[c];
                    var d = t[n];
                    if ("function" != typeof e) return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + s + "` for propType `" + a + "`, expected a function.");
                    for (var l = d.keySeq().toArray(), u = 0, p = l.length; u < p; u++) {
                        var h = e.apply(void 0, [l, u, s, r, a + " -> key(" + l[u] + ")"].concat(o));
                        if (h instanceof Error) return h
                    }
                }
                return o(t)
            }

            function u(e) {
                return d(e, "List", s.List.isList)
            }

            function p(e, t, n, s) {
                function r() {
                    for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return d(e, n, s).apply(void 0, a) || t && l(t).apply(void 0, a)
                }
                return o(r)
            }

            function h(e, t) {
                return p(e, t, "Map", s.Map.isMap)
            }

            function b(e, t) {
                return p(e, t, "OrderedMap", s.OrderedMap.isOrderedMap)
            }

            function m(e) {
                return d(e, "Set", s.Set.isSet)
            }

            function g(e) {
                return d(e, "OrderedSet", s.OrderedSet.isOrderedSet)
            }

            function f(e) {
                return d(e, "Stack", s.Stack.isStack)
            }

            function j(e) {
                return d(e, "Iterable", s.Iterable.isIterable)
            }

            function O(e) {
                function t(t, n, r, a, o) {
                    for (var c = arguments.length, d = Array(c > 5 ? c - 5 : 0), l = 5; l < c; l++) d[l - 5] = arguments[l];
                    var u = t[n];
                    if (!(u instanceof s.Record)) {
                        var p = i(u);
                        return new Error("Invalid " + a + " `" + o + "` of type `" + p + "` supplied to `" + r + "`, expected an Immutable.js Record.")
                    }
                    for (var h in e) {
                        var b = e[h];
                        if (b) {
                            var m = u.toObject(),
                                g = b.apply(void 0, [m, h, r, a, o + "." + h].concat(d));
                            if (g) return g
                        }
                    }
                }
                return o(t)
            }

            function x(e) {
                var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
                    n = void 0 === arguments[2] ? s.Iterable.isIterable : arguments[2];

                function r(s, r, a, o, c) {
                    for (var d = arguments.length, l = Array(d > 5 ? d - 5 : 0), u = 5; u < d; u++) l[u - 5] = arguments[u];
                    var p = s[r];
                    if (!n(p)) {
                        var h = i(p);
                        return new Error("Invalid " + o + " `" + c + "` of type `" + h + "` supplied to `" + a + "`, expected an Immutable.js " + t + ".")
                    }
                    var b = p.toObject();
                    for (var m in e) {
                        var g = e[m];
                        if (g) {
                            var f = g.apply(void 0, [b, m, a, o, c + "." + m].concat(l));
                            if (f) return f
                        }
                    }
                }
                return o(r)
            }

            function y(e) {
                return x(e)
            }

            function v(e) {
                return x(e, "Map", s.Map.isMap)
            }
            e.exports = a
        },
        "9P7L": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "fetchAttachmentUploadUrlClient", (function() {
                return a
            }));
            var s = n("VYoM");
            const r = "livechat-public/v1/attachment/upload-url",
                a = ({
                    sessionId: e,
                    threadId: t
                }) => s.a.get(r, {
                    query: {
                        sessionId: e,
                        threadId: t
                    }
                })
        },
        "9n7a": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var s = n("JGJA");
            const r = Object(s.a)("resolvedAttachments")
        },
        "A+8x": function(e, t, n) {
            "use strict";
            var s = n("MBJP"),
                r = n("647q"),
                a = n("X9Pk"),
                i = n("2BFa"),
                o = n("JGJA");
            const c = Object(o.a)("cookieBannerOnExitVisible");
            var d = n("FFIQ");
            n.d(t, "a", (function() {
                return l
            }));
            const l = Object(s.a)([r.getLatestWidgetData, d.getHasMessagesCookieBeenSaved, a.getAPIEnableWidgetCookieBanner, c], (e, t, n, s) => {
                const r = Object(i.gdprCookieConsentOnWidgetLoadEnabled)(e);
                return Boolean(n || r || s) && !t
            })
        },
        AEyM: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "sendVisitorEmailAddressRequested", (function() {
                return h
            }));
            n.d(t, "sendVisitorEmailAddressFailed", (function() {
                return b
            }));
            n.d(t, "sendVisitorEmailAddressSucceeded", (function() {
                return m
            }));
            n.d(t, "sendVisitorEmailAddress", (function() {
                return g
            }));
            var s = n("Ut5p"),
                r = n("E6wg"),
                a = n("xZ3y"),
                i = n("sIRh"),
                o = n("z96q"),
                c = n("3OTY"),
                d = n("Ux+X"),
                l = n("c2PF"),
                u = n("081M"),
                p = n("BnUr");
            const h = Object(s.b)(a.SEND_VISITOR_EMAIL_ADDRESS, e => ({
                    email: e
                })),
                b = Object(s.b)(a.SEND_VISITOR_EMAIL_ADDRESS_FAILED, e => ({
                    error: e
                })),
                m = Object(s.b)(a.SEND_VISITOR_EMAIL_ADDRESS_SUCCEEDED, e => ({
                    email: e
                }));

            function g({
                consentToCommunicate: e = !1,
                email: t,
                threadId: n
            }) {
                return (s, a) => {
                    s(h(t));
                    const g = Object(l.getThreadByThreadId)(a(), {
                            threadId: n
                        }),
                        f = Object(p.getChannelName)(g),
                        j = Object(r.getSessionId)(a()),
                        O = Object(u.getHubspotUtk)(),
                        x = () => {
                            s(m(t));
                            s(Object(i.default)({
                                channel: f,
                                email: t,
                                threadId: n
                            }));
                            e && s(Object(c.d)(e));
                            s(Object(d.trackInteraction)("widget-interaction", {
                                action: "submit email"
                            }));
                            return {
                                error: null
                            }
                        },
                        y = e => {
                            s(b(e));
                            return {
                                error: e
                            }
                        };
                    return o.sendVisitorEmailAddress({
                        threadId: n,
                        email: t,
                        sessionId: j,
                        hubspotUtk: O
                    }).then(x, y)
                }
            }
        },
        Apky: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("p9k8"),
                r = n("19qb"),
                a = n("MBJP"),
                i = n("LgEy"),
                o = n("647q");
            const c = Object(a.a)([o.getLatestWidgetData], e => Object(i.gdprConsentToProcessEnabled)(e));
            var d = n("A+8x"),
                l = n("lOT2"),
                u = n("k09d"),
                p = n("JoPj"),
                h = n("Wzl7"),
                b = n("zB5l"),
                m = n("vwA6"),
                g = n("V2EP"),
                f = n("3gKe");
            const j = e => ({
                    shouldShowMeetingsLink: Object(b.a)(e),
                    isThreadStarted: Object(s.a)(Object(u.a)(e)),
                    requiresExplicitConsentToProcess: Object(l.a)(e),
                    showingGdprProcess: c(e) && !Object(f.getUserHasGivenConsentToProcess)(e),
                    renderCookieConsentPrompt: Object(d.a)(e),
                    showingHsBranding: Object(p.a)(e)
                }),
                O = {
                    toggleOnAndOffInputFocus: m.a,
                    selectAttachmentFile: g.a
                };
            t.default = Object(r.connect)(j, O)(h.a)
        },
        BB3q: function(e, t, n) {
            var s = n("QhUm");

            function r(e, t) {
                var n = s(this, e),
                    r = n.size;
                n.set(e, t);
                this.size += n.size == r ? 0 : 1;
                return this
            }
            e.exports = r
        },
        "BW+T": function(e, t, n) {
            var s = n("d1Q1"),
                r = "Expected a function";

            function a(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(r);
                var n = function() {
                    var s = arguments,
                        r = t ? t.apply(this, s) : s[0],
                        a = n.cache;
                    if (a.has(r)) return a.get(r);
                    var i = e.apply(this, s);
                    n.cache = a.set(r, i) || a;
                    return i
                };
                n.cache = new(a.Cache || s);
                return n
            }
            a.Cache = s;
            e.exports = a
        },
        BYz9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("Nnwm"),
                r = n("MeE7");
            const a = e => Object(s.buildSenderLocator)(Object(r.getType)(e), Object(r.getId)(e))
        },
        DOHQ: function(e, t, n) {
            var s = n("8i16")["__core-js_shared__"];
            e.exports = s
        },
        EzJv: function(e, t, n) {
            var s = n("RLxx"),
                r = n("ccWV"),
                a = n("Uz5A"),
                i = n("mMAp"),
                o = n("IrnW");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                this.clear();
                for (; ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }
            c.prototype.clear = s;
            c.prototype.delete = r;
            c.prototype.get = a;
            c.prototype.has = i;
            c.prototype.set = o;
            e.exports = c
        },
        FJf1: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "trackSendMessage", (function() {
                return r
            }));
            var s = n("Ux+X");
            const r = ({
                threadId: e
            }) => t => {
                const n = {};
                "number" == typeof e && (n.threadId = e);
                t(Object(s.trackInteraction)("send-message", n))
            }
        },
        FPMu: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "shouldRecordImplicitConsentToProcess", (function() {
                return c
            }));
            var s = n("MBJP"),
                r = n("LgEy"),
                a = n("8cLO"),
                i = n("647q"),
                o = n("3gKe");
            const c = Object(s.a)([i.getLatestWidgetData, o.getUserHasGivenConsentToProcess], (e, t) => Object(r.gdprConsentToProcessEnabled)(e) && !Object(a.gdprExplicitConsentRequired)(e) && !t)
        },
        GkNN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("MBJP"),
                r = n("JGJA"),
                a = n("xePV"),
                i = n("BnUr"),
                o = n("BMD5");
            const c = Object(s.a)([a.a, o.a], (e, t) => {
                const n = Object(i.getThreadId)(t);
                return Object(r.a)(n, e) || null
            })
        },
        IqZ3: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.e, e => ({
                threadId: e
            }))
        },
        IrnW: function(e, t, n) {
            var s = n("LPlp");

            function r(e, t) {
                var n = this.__data__,
                    r = s(n, e);
                if (r < 0) {
                    ++this.size;
                    n.push([e, t])
                } else n[r][1] = t;
                return this
            }
            e.exports = r
        },
        JIa2: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "createFormDataForAttachment", (function() {
                return s
            }));
            const s = ({
                file: e
            }) => {
                const t = new FormData;
                t.append("file", e);
                return t
            }
        },
        JWgK: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("MBJP"),
                r = n("jM00"),
                a = n("byjC"),
                i = n("80AS"),
                o = n("S055");
            const c = Object(s.a)([i.a, r.a, a.a, o.a], (e, t, n, s) => !(!e && n || s) && (!t || !t.size))
        },
        JoPj: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("JGJA"),
                r = n("MBJP"),
                a = n("647q");
            const i = Object(r.a)(a.getLatestWidgetData, Object(s.a)("showingHsBranding"))
        },
        KLi6: function(e, t, n) {
            var s = n("uQvf"),
                r = "__lodash_hash_undefined__";

            function a(e, t) {
                var n = this.__data__;
                this.size += this.has(e) ? 0 : 1;
                n[e] = s && void 0 === t ? r : t;
                return this
            }
            e.exports = a
        },
        KSjU: function(e, t, n) {
            "use strict";
            var s = n("MJM1");
            t.a = Object(s.a)(["meetingsLinkUrl"])
        },
        LPlp: function(e, t, n) {
            var s = n("+a0K");

            function r(e, t) {
                for (var n = e.length; n--;)
                    if (s(e[n][0], t)) return n;
                return -1
            }
            e.exports = r
        },
        LdnN: function(e, t, n) {
            "use strict";
            var s = n("EuUD");
            const r = "\\.",
                a = '\\s\\?\\#\\/\\(\\)\\=\\:\\;\\@\\\\"' + r,
                i = `(?:www${r})`,
                o = "(?:[%a-zA-Z0-9_-]+)",
                c = "(?:(?:\\.[%a-zA-Z0-9-]+)[^\\.\\s])",
                d = "\\s\\?\\#\\&";
            var l = new RegExp(`^(?:.+)@${{www:i,domain:`${i}?(?:(?:[^${a}]+)${r})+(?:[^${a}]+)`,protocol:"(?:(?:https?:)?\\/\\/)",protocolRequired:"(?:https?:\\/\\/)",path:"(?:(?:\\/[^\\s\\/\\#\\&\\?]*)+\\/?)",wildcardPath:"(?:(/(?:[%a-zA-Z0-9_-])*?)*(?:/[\\*]))",file:`${o}${c}`,fileName:o,fileExtension:c,search:`(?:([\\?&#][^${d}]*?=?([^${d}]*))+)`,ungroupedSearch:`(?:(?:[\\?&#][^${d}]*?=?(?:[^${d}]*))+)`}.domain}$`);
            t.a = Object(s.a)({
                name: "EmailAddress",
                validator: e => l.test(e)
            })
        },
        LgEy: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "gdprConsentToProcessEnabled", (function() {
                return i
            }));
            var s = n("DdHT"),
                r = n("ZqFO"),
                a = n("VvTX");
            const i = Object(s.a)(r.f, a.getGdprConsentToProcessEnabled)
        },
        Nnwm: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("Mx3c"),
                r = n("QYOI"),
                a = Object(r.Record)({
                    senderId: null,
                    senderType: null
                }, "SenderLocator");
            n.d(t, "buildSenderLocator", (function() {
                return o
            }));
            const i = [s.AGENT, s.BOT, s.SYSTEM, s.VISITOR, s.INTEGRATOR],
                o = (e, t) => {
                    i.includes(e) || console.warn(`buildSenderLocator received invalid sender type ${e} expected one of: ${i}`);
                    return a({
                        senderType: e,
                        senderId: t ? "" + t : null
                    })
                }
        },
        OI0Z: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var s = n("Q+dC"),
                r = n("QgEn"),
                a = n("Ktcs"),
                i = n("VfuR"),
                o = n.n(i),
                c = n("npjq");
            class d extends a.Component {
                render() {
                    const e = this.props,
                        {
                            value: t
                        } = e,
                        n = Object(s.a)(e, ["value"]);
                    return Object(r.jsx)("span", {
                        children: c.a.formatSize(t, n)
                    })
                }
            }
            d.displayName = "FormattedSize";
            d.propTypes = {
                value: o.a.number.isRequired
            }
        },
        OhTC: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var s = n("JGJA");
            const r = Object(s.a)("fileUploads")
        },
        OoDT: function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("Ktcs"),
                o = n("qjq5"),
                c = n("scKg");

            function d(e) {
                if ("number" == typeof e && e >= 0) return e;
                throw new Error(`expected \`interval\` to be a positive number but got \`${e}\``)
            }

            function l(e, t) {
                d(e);
                Object(c.a)(t);
                let n, s, r = 0,
                    a = null;

                function i() {
                    if (null !== a) {
                        clearTimeout(a);
                        a = null
                    }
                }

                function o() {
                    r = Date.now();
                    s = t(...n)
                }

                function l(...t) {
                    n = t;
                    i();
                    Date.now() - r >= e ? o() : a = setTimeout(o, e);
                    return s
                }
                l.cancel = i;
                return l
            }
            var u = Object(o.a)(l);
            const p = 100,
                h = e => {
                    try {
                        return e[0].contentBoxSize[0].blockSize || 0
                    } catch (e) {
                        return 0
                    }
                };
            class b extends i.PureComponent {
                constructor(e) {
                    super(e);
                    this.state = {
                        inTop: !0,
                        inBottom: !0,
                        height: 0,
                        distanceToBottom: 0,
                        shouldKeepAtBottom: !0,
                        previousContentHeight: 0
                    };
                    this.scrollContainer = Object(i.createRef)();
                    this.scrollContent = Object(i.createRef)();
                    const t = e => {
                        const t = h(e);
                        this.state.previousContentHeight < t && this.inThreshold().inTop && this.props.onScrollToTop();
                        this.setState({
                            previousContentHeight: t
                        })
                    };
                    t.bind(this);
                    this.contentResizeObserver = new ResizeObserver(t);
                    this.onResize = u(p, this.onResize.bind(this));
                    this.onScroll = u(p, this.onScroll.bind(this))
                }
                componentDidMount() {
                    const {
                        current: e
                    } = this.scrollContent;
                    if (e) {
                        this.setState({
                            height: e.clientHeight
                        });
                        this.scrollToBottom();
                        this.contentResizeObserver.observe(e)
                    }
                    window.addEventListener("resize", this.onResize, {
                        passive: !0
                    })
                }
                getSnapshotBeforeUpdate() {
                    const {
                        current: e
                    } = this.scrollContainer;
                    return e ? {
                        prevScrollTop: this.getScrollDistanceFromTop()
                    } : null
                }
                componentDidUpdate(e, t, n) {
                    const {
                        current: s
                    } = this.scrollContainer;
                    if (!n || !s) return;
                    if (this.state.shouldKeepAtBottom) {
                        this.scrollToBottom();
                        return
                    }
                    if (0 === this.state.distanceToBottom) {
                        this.setState({
                            shouldKeepAtBottom: !0
                        });
                        return
                    }
                    const {
                        prevScrollTop: r
                    } = n, a = this.getScrollDistanceFromTop();
                    a === r && t.height > this.state.height && this.setScrollTop(a + (t.height - this.state.height))
                }
                componentWillUnmount() {
                    this.contentResizeObserver.disconnect();
                    window.removeEventListener("resize", this.onResize)
                }
                getScrollDistanceFromTop() {
                    const {
                        current: e
                    } = this.scrollContainer, {
                        current: t
                    } = this.scrollContent, n = e.scrollHeight - t.clientHeight;
                    return e.scrollTop - n
                }
                onScroll() {
                    const {
                        onScrollToTop: e,
                        onScrollFromBottom: t,
                        onScrollToBottom: n
                    } = this.props;
                    if (!this.scrollContainer.current || !this.scrollContent.current) return;
                    const {
                        inTop: s,
                        inBottom: r
                    } = this.inThreshold();
                    !this.state.inTop && s && e();
                    !this.state.inBottom && r && n();
                    this.state.inBottom && !r && t();
                    const a = this.getScrollDistanceFromBottom();
                    this.setState({
                        inTop: s,
                        inBottom: r,
                        distanceToBottom: a,
                        shouldKeepAtBottom: !1
                    })
                }
                inThreshold() {
                    const {
                        topThreshold: e,
                        bottomThreshold: t
                    } = this.props;
                    return {
                        inTop: this.getScrollDistanceFromTop() <= e,
                        inBottom: this.getScrollDistanceFromBottom() <= t
                    }
                }
                getScrollDistanceFromBottom() {
                    const {
                        current: e
                    } = this.scrollContainer;
                    if (!e) return 0;
                    const {
                        scrollTop: t,
                        scrollHeight: n,
                        clientHeight: s,
                        offsetHeight: r
                    } = e;
                    return n - (s || r) - t
                }
                scrollToBottom() {
                    const {
                        current: e
                    } = this.scrollContainer;
                    e && this.setScrollTop(e.scrollHeight);
                    this.setState({
                        shouldKeepAtBottom: !0
                    })
                }
                setScrollTop(e) {
                    const {
                        current: t
                    } = this.scrollContainer;
                    t && (t.scrollTop = e || 0)
                }
                onResize() {
                    const {
                        current: e
                    } = this.scrollContent;
                    e && this.setState({
                        height: e.clientHeight || 0
                    })
                }
                render() {
                    const {
                        children: e,
                        className: t,
                        stickToTop: n
                    } = this.props;
                    return Object(s.jsxs)("div", {
                        className: t,
                        style: {
                            flexGrow: 1
                        },
                        onScroll: this.onScroll,
                        ref: this.scrollContainer,
                        "data-test-id": "scroll-container",
                        children: [n, Object(s.jsx)("div", {
                            ref: this.scrollContent,
                            children: e
                        })]
                    })
                }
            }
            b.displayName = "ScrollWrapper";
            b.propTypes = {
                bottomThreshold: a.a.number.isRequired,
                children: a.a.node,
                className: a.a.string,
                onScrollFromBottom: a.a.func.isRequired,
                onScrollToBottom: a.a.func.isRequired,
                onScrollToTop: a.a.func.isRequired,
                stickToTop: a.a.node,
                topThreshold: a.a.number.isRequired
            };
            const m = () => {};
            b.defaultProps = {
                bottomThreshold: 300,
                onScrollFromBottom: m,
                onScrollToBottom: m,
                onScrollToTop: m,
                topThreshold: 300
            };
            var g = b,
                f = n("c89E");
            const j = e => document.querySelector(`[${f.a}="${e}"]`);
            var O = n("Gc2C");
            const x = (e, t) => {
                    for (const n of t) Object(O.a)(!!e.prototype[n], "Component missing required function %s", n)
                },
                y = () => {
                    const e = document.querySelector(`[${f.a}]:last-child`);
                    return e && e.getAttribute ? e.getAttribute(f.a) : null
                },
                v = e => {
                    const t = y();
                    if (!e || !t) return null;
                    const n = j(t);
                    if (!n) return null;
                    const s = e.getScrollDistanceFromTop(),
                        {
                            offsetTop: r
                        } = n;
                    return {
                        lastMessageId: t,
                        lastMessageOffsetTop: r,
                        prevScrollTop: s
                    }
                },
                C = 300,
                I = () => (e, {
                    alignment: t
                } = {
                    alignment: "start"
                }) => {
                    const n = j(e);
                    e && n && n.scrollIntoView && n.scrollIntoView("start" === t)
                },
                T = ({
                    scrollWrapperRef: e
                }) => () => {
                    const t = e.current;
                    t && t.scrollToBottom()
                },
                w = ({
                    scrollWrapperRef: e
                }) => ({
                    threshold: t = C
                } = {}) => {
                    const n = e.current;
                    n && n.state && (e.current.state.distanceToBottom <= t || n.getScrollDistanceFromBottom() <= t) && n.scrollToBottom()
                },
                S = e => {
                    const t = e.current;
                    return {
                        lastMessageId: t.lastMessageId,
                        lastMessageOffsetTop: t.lastMessageOffsetTop,
                        prevScrollTop: t.prevScrollTop
                    }
                },
                k = e => {
                    x(e, ["getScrollDistanceFromTop", "getScrollDistanceFromBottom", "setScrollTop", "scrollToBottom"]);
                    const t = Object(i.forwardRef)((e, t) => {
                        const n = Object(i.useRef)(),
                            r = Object(i.useRef)();
                        t.current = {
                            scrollToMessage: I(),
                            scrollToBottom: T({
                                scrollWrapperRef: n
                            }),
                            scrollToBottomIfInThreshold: w({
                                scrollWrapperRef: n
                            })
                        };
                        const a = Object(i.useRef)(!0);
                        Object(i.useLayoutEffect)(() => {
                            const e = n.current;
                            if (a.current) {
                                r.current = v(e);
                                a.current = !1;
                                return
                            }
                            if (!r.current) return;
                            const {
                                lastMessageId: t,
                                lastMessageOffsetTop: s,
                                prevScrollTop: i
                            } = S(r);
                            r.current = v(e);
                            if (e.getScrollDistanceFromTop() !== i) return;
                            const o = j(t);
                            if (!o || !o.offsetTop) return;
                            const c = o.offsetTop - s;
                            c && e.setScrollTop(e.getScrollDistanceFromTop() + c)
                        });
                        return Object(s.jsx)(g, Object.assign({
                            ref: n
                        }, e))
                    });
                    t.displayName = "WithScrollTo";
                    return t
                };
            var R = n("mKxs"),
                A = n("021p"),
                P = n("kWFB"),
                M = n("9f1P"),
                E = n.n(M),
                N = n("uax2"),
                _ = n("t6nY"),
                F = n.n(_),
                q = n("eg5p"),
                L = n("sl/w");
            const B = E.a.div.withConfig({
                    displayName: "ErrorState__ErrorWrapper",
                    componentId: "sc-9n3cba-0"
                })(["display:flex;justify-content:center;align-items:center;height:100%;flex-direction:column;"]),
                U = () => Object(s.jsxs)(B, {
                    children: [Object(s.jsx)("h5", {
                        children: Object(s.jsx)(L.a, {
                            message: "conversations-visitor-ui.asyncError.body"
                        })
                    }), Object(s.jsx)("div", {
                        className: "m-top-3",
                        children: Object(s.jsx)(L.a, {
                            message: "conversations-visitor-ui.asyncError.noRetry"
                        })
                    })]
                });
            U.displayName = "ErrorState";
            var D = U;
            const z = E.a.div.withConfig({
                    displayName: "ThreadHistoryError__ThreadHistoryErrorWrapper",
                    componentId: "eons6g-0"
                })(["text-align:center;flex-grow:1;"]),
                H = () => Object(s.jsx)(z, {
                    children: Object(s.jsx)(D, {})
                });
            H.displayName = "ThreadHistoryError";
            var V = H;
            const Q = E()(N.a).withConfig({
                    displayName: "ThreadHistoryFetcher__LoadingSpinnerWrapper",
                    componentId: "mpap2q-0"
                })(["height:0;margin-top:20px;"]),
                W = E()(k(g)).withConfig({
                    displayName: "ThreadHistoryFetcher__ScrollToWrapper",
                    componentId: "mpap2q-1"
                })(["flex:1 1;display:flex;flex-direction:column;align-self:stretch;overflow-y:scroll;overflow-x:hidden;"]);
            class J extends i.PureComponent {
                constructor(e) {
                    super(e);
                    this.scrollWrapper = Object(i.createRef)();
                    this.fetchHistory = this.fetchHistory.bind(this)
                }
                componentDidMount() {
                    const {
                        current: e
                    } = this.scrollWrapper;
                    e && e.scrollToBottom();
                    this.fetchHistory()
                }
                componentDidUpdate(e) {
                    const {
                        threadId: t,
                        messageCount: n,
                        shouldScrollToBottom: s,
                        isOnFocus: r
                    } = this.props, {
                        threadId: a,
                        messageCount: i,
                        shouldScrollToBottom: o,
                        isOnFocus: c
                    } = e, {
                        current: d
                    } = this.scrollWrapper;
                    if (t === a)
                        if (i) {
                            n !== i && d && d.scrollToBottomIfInThreshold();
                            s !== o && d && d.scrollToBottomIfInThreshold();
                            r !== c && d && d.scrollToBottomIfInThreshold()
                        } else d && d.scrollToBottom();
                    else {
                        this.fetchHistory();
                        d && d.scrollToBottom()
                    }
                }
                fetchHistory() {
                    const {
                        fetchThreadHistory: e,
                        threadId: t,
                        threadHistory: n,
                        sessionId: s
                    } = this.props;
                    t !== q.a && e({
                        offsetOrdinal: Object(A.e)(n),
                        offsetTimestamp: Object(A.f)(n),
                        threadId: t,
                        sessionId: s
                    })
                }
                render() {
                    const {
                        children: e,
                        isLoadingHistory: t,
                        loadingHistoryFailed: n,
                        threadId: r,
                        threadHistory: a
                    } = this.props;
                    if (t && !Object(P.hasMessages)(a)) return Object(s.jsx)(N.a, {
                        grow: !0
                    });
                    if (n && !Object(P.hasMessages)(a)) return Object(s.jsx)(V, {});
                    const i = F()(this.props.className, "messages-scroll-container-utv");
                    return Object(s.jsx)(W, {
                        className: i,
                        ref: this.scrollWrapper,
                        onScrollToTop: this.fetchHistory,
                        stickToTop: t && Object(s.jsx)(Q, {
                            grow: !0
                        }),
                        children: e
                    }, r)
                }
            }
            J.propTypes = {
                children: a.a.node.isRequired,
                className: a.a.string,
                fetchThreadHistory: a.a.func.isRequired,
                isLoadingHistory: a.a.bool,
                isOnFocus: a.a.bool.isRequired,
                loadingHistoryFailed: a.a.bool,
                messageCount: a.a.number.isRequired,
                sessionId: a.a.string.isRequired,
                shouldScrollToBottom: a.a.bool.isRequired,
                threadHistory: Object(R.a)("ThreadHistory"),
                threadId: a.a.number.isRequired
            };
            J.displayName = "ThreadHistoryFetcher";
            t.a = J
        },
        P5SP: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("MBJP"),
                r = n("c2PF"),
                a = n("lTxV");
            const i = Object(s.a)([r.getThreadByThreadId], a.a);
            var o = n("V0XL");
            n.d(t, "shouldRecordUrlContextUpdate", (function() {
                return c
            }));
            const c = Object(s.a)([i, o.getMessagesPageUri], (e, t) => e !== t)
        },
        PY3R: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("sZZm"),
                r = n("mlLV"),
                a = n("6WMu");
            const i = ({
                thread: e
            }) => {
                Object(s.postExternalApiEvent)({
                    eventType: r.c,
                    payload: {
                        conversation: Object(a.serializeThreadForExternalEvent)(e)
                    }
                })
            }
        },
        PYok: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return P
            }));
            var s = n("BnUr"),
                r = n("31tl"),
                a = n("LdnN"),
                i = n("5rZi"),
                o = n("6PLn"),
                c = n("4SpI"),
                d = n("2gT5"),
                l = n("IqZ3"),
                u = n("k09d"),
                p = n("FJf1"),
                h = n("UxS0"),
                b = n("tbpt"),
                m = n("V0XL"),
                g = n("P5SP"),
                f = n("wy0V"),
                j = n("AEyM"),
                O = n("SbeA"),
                x = n("CdQ/"),
                y = n("gD8A"),
                v = n("E6wg"),
                C = n("eg5p"),
                I = n("0U0A"),
                T = n("yDuE"),
                w = n("JGJA"),
                S = n("Zui/"),
                k = n("pdIa");
            const R = () => (e, t) => {
                    const n = Object(u.a)(t()),
                        r = Object(m.getMessagesPageUri)(t()),
                        a = Object(s.getThreadId)(n);
                    return Object(g.shouldRecordUrlContextUpdate)(t(), {
                        threadId: a
                    }) && a !== C.a ? Object(y.updateVisitorContext)({
                        currentUrl: r,
                        sessionId: Object(v.getSessionId)(t()),
                        threadId: a
                    }).then(() => {
                        e(Object(f.a)({
                            threadId: a,
                            currentUrl: r
                        }))
                    }).catch(() => Promise.resolve()) : Promise.resolve()
                },
                A = ({
                    text: e,
                    richText: t,
                    quickReply: n,
                    fileAttachment: m
                }) => (g, f) => {
                    const y = Object(u.a)(f()),
                        v = Object(d.isPersistedThread)(y),
                        C = Object(s.getChannelName)(y),
                        w = Object(s.getThreadId)(y),
                        S = Object(x.getMessagesUtk)(),
                        k = v ? Object(T.getChannelInstanceIdFromCurrentThreadHistory)(f(), w) : Object(I.getChannelInstanceId)(f()),
                        R = Object(h.buildVisitorCommonMessage)({
                            channelInstanceId: k,
                            clientType: r.a,
                            fileAttachment: m,
                            quickReply: n,
                            richText: t,
                            senderId: S,
                            text: e
                        });
                    g(Object(l.a)(w));
                    g(Object(p.trackSendMessage)({
                        threadId: w
                    }));
                    if (!v) {
                        g(Object(b.stageMessageOnStubbedThread)(R));
                        return g(Object(i.createNewThread)())
                    }
                    Object(O.getMostRecentMessageIsEmailPrompt)(f()) && a.a.test(e) && g(Object(j.sendVisitorEmailAddress)({
                        email: e,
                        consentToCommunicate: !1,
                        threadId: w
                    }));
                    return g(Object(c.publishMessage)({
                        channel: C,
                        message: R,
                        threadId: w
                    })).then(() => g(Object(o.applyGdprConsent)()))
                };

            function P({
                text: e,
                richText: t,
                quickReply: n,
                fileAttachment: s
            }) {
                return r => r(R()).then(() => {
                    r(A({
                        text: e,
                        richText: t,
                        quickReply: n,
                        fileAttachment: s
                    }));
                    n && Object(w.a)("@type", n) === S.i && Object(k.a)(n)
                })
            }
        },
        Q2fA: function(e, t, n) {
            "use strict";
            var s = n("MBJP"),
                r = n("qjq5"),
                a = n("AaWM"),
                i = Object(r.a)(a.a),
                o = n("JGJA"),
                c = n("Avso"),
                d = n("RyNb"),
                l = n("ncoD"),
                u = n("SfUm");
            n.d(t, "a", (function() {
                return p
            }));
            const p = Object(s.a)([u.a, l.getAllAgentResponders, d.a], (e, t, n) => {
                const s = Object(c.getUserId)(n);
                return Object(o.a)(s, e) ? n : t && t.find(t => {
                    const n = Object(c.getUserId)(t);
                    return i(n, e)
                })
            })
        },
        QG41: function(e, t, n) {
            var s = n("uQvf");

            function r() {
                this.__data__ = s ? s(null) : {};
                this.size = 0
            }
            e.exports = r
        },
        QGYt: function(e, t, n) {
            "use strict";
            var s = n("Q+dC"),
                r = n("QgEn"),
                a = n("VfuR"),
                i = n.n(a),
                o = n("9f1P"),
                c = n.n(o),
                d = n("7719"),
                l = n("CR0J"),
                u = n("Z/Dw"),
                p = n("aXPX"),
                h = n("0wen"),
                b = n("W/H/"),
                m = n("wjRl"),
                g = n("rdz/");
            const f = {
                    baseStyle: Object(o.css)(["padding:", ";font-size:", ";flex-shrink:0;border-radius:3px;line-height:16px;outline:none;transition:background-color 150ms ease-out;border-style:solid;border-width:1px;cursor:pointer;text-align:center;word-break:normal;overflow-wrap:break-word;background-color:transparent;", ""], ({
                        size: e
                    }) => p.b[e], ({
                        size: e
                    }) => p.a[e], ({
                        theme: {
                            colors: e
                        },
                        use: t
                    }) => "primary" === t ? `\n          background-color: ${e.primary};\n          border: none;\n          color: ${e.textOnPrimary};\n        ` : `\n          background-color: transparent;\n          border-color: ${e.primary};\n          color: ${e.primary};\n        `),
                    _disabled: Object(o.css)(["background-color:", ";border:none;color:", ";cursor:not-allowed;user-select:none;"], ({
                        theme: {
                            colors: e
                        }
                    }) => e.disabledBackground, ({
                        theme: {
                            colors: e
                        }
                    }) => e.disabledText),
                    _focused: m.a,
                    _hovered: Object(o.css)(["", ""], ({
                        theme: {
                            colors: e
                        },
                        use: t
                    }) => `background-color: ${Object(g.a)(e.primary,"primary"===t?20:95)};`),
                    _pressed: Object(o.css)(["", ""], ({
                        theme: {
                            colors: e
                        },
                        use: t
                    }) => `background-color: ${Object(g.a)(e.primary,"primary"===t?-10:90)};`)
                },
                j = {
                    use: h.SECONDARY,
                    size: d.e
                },
                O = c.a.button.withConfig({
                    displayName: "VizExButton__AbstractVizExButton",
                    componentId: "sc-1ktl6zr-0"
                })(["", ""], ({
                    theme: e
                }) => Object(b.a)({
                    component: "Button",
                    defaultStyles: f,
                    theme: e
                })),
                x = c.a.div.withConfig({
                    displayName: "VizExButton__NoSelect",
                    componentId: "sc-1ktl6zr-1"
                })(["user-select:none;"]),
                y = e => {
                    const {
                        children: t
                    } = e, n = Object(s.a)(e, ["children"]);
                    return Object(r.jsx)(O, Object.assign({}, n, {
                        children: Object(r.jsx)(x, {
                            children: t
                        })
                    }))
                };
            y.displayName = "VizExButton";
            y.propTypes = Object.assign({
                children: i.a.node,
                onClick: i.a.func,
                size: i.a.oneOf(Object.keys(p.c)),
                theme: l.a,
                use: i.a.oneOf(Object.values(h))
            }, u.a);
            y.defaultProps = j;
            t.a = y
        },
        QVIP: function(e, t) {
            var n = Function.prototype.toString;

            function s(e) {
                if (null != e) {
                    try {
                        return n.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
            e.exports = s
        },
        "QVu+": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = 3e3
        },
        Qf6G: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "clickedConsentToProcess", (function() {
                return m
            }));
            n.d(t, "consentToProcessSucceeded", (function() {
                return g
            }));
            n.d(t, "consentToProcessFailed", (function() {
                return f
            }));
            n.d(t, "consentToProcess", (function() {
                return j
            }));
            var s = n("Ut5p"),
                r = n("KrP/"),
                a = n("E6wg"),
                i = n("wn0x"),
                o = n("uk/S"),
                c = n("dIvY"),
                d = n("2BFa"),
                l = n("k3iI"),
                u = n("081M"),
                p = n("Ux+X"),
                h = n("647q"),
                b = n("CdQ/");
            const m = Object(s.b)(r.d),
                g = Object(s.b)(r.g),
                f = Object(s.b)(r.f, ({
                    error: e
                }) => ({
                    error: e
                }));

            function j() {
                return (e, t) => {
                    const n = Object(a.getSessionId)(t()),
                        s = Object(i.getMessageId)(t()),
                        r = Object(u.getHubspotUtk)(),
                        j = Object(h.getLatestWidgetData)(t());
                    e(m());
                    Object(o.sendConsentToProcess)({
                        sessionId: n,
                        hubspotUtk: r,
                        welcomeMessageId: s,
                        widgetData: j
                    }).then(n => {
                        const {
                            sessionId: s
                        } = n, r = Object(d.gdprCookieConsentOnExitIntentEnabled)(t(), j);
                        try {
                            localStorage.setItem("userHasGivenConsentToProcess", !0)
                        } catch (e) {
                            console.warn("local storage not set!")
                        }
                        r || Object(c.handleStoreMessagesCookie)(Object(b.getMessagesUtk)());
                        e(Object(l.updateSessionId)(s));
                        e(g());
                        e(Object(p.trackInteraction)("widget-interaction", {
                            action: "clicked consent to process button"
                        }))
                    }, t => e(f({
                        error: t
                    }))).catch(e => {
                        setTimeout(() => {
                            throw e
                        })
                    })
                }
            }
        },
        QhUm: function(e, t, n) {
            var s = n("xP7N");

            function r(e, t) {
                var n = e.__data__;
                return s(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
            e.exports = r
        },
        "R4/u": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("0GGv");

            function r() {
                return (e, t) => {
                    Object(s.a)(t()) || window.newrelic && window.newrelic.addPageAction && window.newrelic.setCustomAttribute && window.newrelic.addPageAction("threadCreatedInWidget", {
                        actionAttribute: "createdThreadInhWidget"
                    })
                }
            }

            function a() {
                return (e, t) => {
                    Object(s.a)(t()) || window.newrelic && window.newrelic.addPageAction && window.newrelic.setCustomAttribute && window.newrelic.addPageAction("fileAttachedToWidget", {
                        actionAttribute: "attachedFileToWidget"
                    })
                }
            }
        },
        RLxx: function(e, t) {
            function n() {
                this.__data__ = [];
                this.size = 0
            }
            e.exports = n
        },
        S055: function(e, t, n) {
            "use strict";
            var s = n("MBJP"),
                r = n("MJM1");
            const a = Object(r.a)(["isAttachmentDisabled"]);
            var i = n("QnHA");
            n.d(t, "a", (function() {
                return o
            }));
            const o = Object(s.a)([i.a], e => a(e))
        },
        SbeA: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getMostRecentMessageIsEmailPrompt", (function() {
                return o
            }));
            var s = n("MBJP"),
                r = n("4nf7"),
                a = n("0IK8"),
                i = n("KO+H");
            const o = Object(s.a)([r.a], e => Object(a.getType)(e.last()) === i.a)
        },
        SfUm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var s = n("QYOI"),
                r = n("MBJP"),
                a = n("JGJA"),
                i = n("BnUr"),
                o = n("BMD5"),
                c = n("6T8d");
            const d = Object(r.a)([o.a, c.typingStates], (e, t) => {
                const n = Object(i.getThreadId)(e);
                return Object(a.a)("" + n, t) || Object(s.Map)()
            })
        },
        TXBG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var s = n("KXN9"),
                r = n("Pda3"),
                a = n("x1JE"),
                i = n("QYOI"),
                o = n("MBJP"),
                c = n("bYG+"),
                d = n("9n7a");
            const l = Object(o.a)([d.a], e => e && Object(a.getEntries)(e).size ? Object(a.getEntries)(e).reduce((e, t, n) => t && n && Object(r.isSucceeded)(t) ? Object(c.a)(String(n), Object(s.a)(t), e) : e, Object(i.Map)()) : Object(i.Map)())
        },
        UxS0: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "buildVisitorCommonMessage", (function() {
                return m
            }));
            var s = n("QYOI"),
                r = n("Mx3c"),
                a = n("6d8N"),
                i = n("cPs9"),
                o = n("bWKF"),
                c = n("BvOu"),
                d = n("v0wH"),
                l = n("WebA"),
                u = n("kqCt"),
                p = n("rf4d"),
                h = n("OxGf"),
                b = n("0G/n");
            const m = ({
                channelInstanceId: e,
                clientType: t,
                fileAttachment: n,
                quickReply: m,
                richText: g,
                senderId: f,
                text: j
            }) => {
                const O = Object(o.b)(r.VISITOR),
                    x = Object(i.a)(O),
                    y = [],
                    v = {
                        type: b.a,
                        value: f
                    },
                    C = Object(u.a)({
                        deliveryIdentifier: v
                    }),
                    I = Object(s.List)([C]);
                n && y.push(n);
                m && y.push(new a.a(m));
                return Object(l.buildCommonMessage)({
                    status: {
                        messageStatus: d.b
                    },
                    clientType: t,
                    attachments: y,
                    text: j,
                    richText: g,
                    id: Object(c.generateUuid)(),
                    sender: {
                        "@type": O,
                        [x]: f
                    },
                    senders: I,
                    channelInstanceId: e,
                    genericChannelId: p.d,
                    direction: h.a
                })
            }
        },
        Uz5A: function(e, t, n) {
            var s = n("LPlp");

            function r(e) {
                var t = this.__data__,
                    n = s(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
            e.exports = r
        },
        V2EP: function(e, t, n) {
            "use strict";
            var s = n("ejMo"),
                r = n("Ux+X"),
                a = n("3yBC");
            const i = e => {
                switch (e) {
                    case a.b:
                        return "size limit exceeded";
                    default:
                        return null
                }
            };
            var o = n("Wnz4"),
                c = n("BnUr"),
                d = n("5N3d"),
                l = n("84zR");
            n.d(t, "a", (function() {
                return u
            }));
            const u = ({
                file: e,
                thread: t
            }) => n => {
                const a = Object(c.getThreadId)(t);
                return Object(d.validateAttachmentFile)(e).then(() => {
                    const t = new s.a({
                        file: e,
                        progress: 0
                    });
                    return n(Object(l.uploadAttachment)({
                        attachment: t,
                        threadId: a
                    }))
                }).catch(e => {
                    n(Object(o.attachmentError)(e, a));
                    n(Object(r.trackInteraction)("failed-to-attach-file", {
                        action: "failed to attach file",
                        "failure-type": i(e)
                    }))
                })
            }
        },
        VXRw: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "attachmentUploadStart", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.d, ({
                attachment: e,
                threadId: t
            }) => ({
                attachment: e,
                threadId: t
            }))
        },
        Vsm7: function(e, t, n) {
            var s = n("QhUm");

            function r(e) {
                return s(this, e).get(e)
            }
            e.exports = r
        },
        Wnz4: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "attachmentError", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.a, (e, t) => ({
                error: e,
                threadId: t
            }))
        },
        Wzl7: function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("Ktcs"),
                o = n("19qb"),
                c = n("8g7g"),
                d = n("V2EP"),
                l = n("jM00"),
                u = n("PYok"),
                p = n("7yF8"),
                h = n("MBJP"),
                b = n("Pda3"),
                m = n("BxyF");
            const g = Object(h.a)([m.getAsyncPubSubClient], b.isFailed);
            var f = n("k09d"),
                j = n("AQmo"),
                O = n("V0XL"),
                x = n("JoPj"),
                y = n("byjC"),
                v = n("ZAuv"),
                C = n("w1Zi"),
                I = n("84LK"),
                T = n("piVz"),
                w = n("80AS"),
                S = n("jRRu"),
                k = n("wD2U"),
                R = n("vwA6"),
                A = n("MJM1");
            const P = e => Object(A.a)(["widgetInputFocusStatus", "widgetInputIsOnFocus"], e);
            var M = n("S055");
            const E = Object(A.a)(["isInitialInputFocusDisabled"]);
            var N = n("QnHA");
            const _ = Object(h.a)([N.a], e => E(e));
            var F = n("NpZo"),
                q = n("JGJA");
            const L = e => Object(q.a)("messageEditorStaging", e);
            var B = n("w1qe");
            const U = (e, t) => Object(A.a)([e, B.a], t),
                D = Object(h.a)(F.getSelectedThreadId, L, (e, t) => U(e, t));
            var z = n("Ut5p"),
                H = n("xZ3y");
            const V = Object(z.b)(H.UPDATE_MESSAGE_EDITOR_STAGING_TEXT, e => e),
                Q = Object(z.b)(H.REMOVE_MESSAGE_EDITOR_STAGING_TEXT, e => e),
                W = e => (t, n) => {
                    t(V({
                        stagingText: e,
                        threadId: Object(F.getSelectedThreadId)(n())
                    }))
                },
                J = () => (e, t) => {
                    e(Q(Object(F.getSelectedThreadId)(t())))
                };
            var G = n("/gEt"),
                Y = n("2gT5"),
                K = n("A+sO"),
                X = n("JWgK");
            const $ = e => {
                    const t = Object(f.a)(e),
                        n = !Object(w.a)(e, {
                            thread: t
                        }) && Object(y.a)(e, {
                            thread: t
                        }),
                        s = Object(S.getIsBot)(e) && Object(K.getIsWidgetInAwayMode)(e) && !Object(Y.isPersistedThread)(t);
                    return {
                        coloring: Object(j.a)(e),
                        currentConversation: t,
                        disablePublish: !Object(p.a)(e),
                        disableTextInput: n || s,
                        showQuickReplyPlaceholder: n,
                        isOnFocus: P(e),
                        stagedMessage: D(e),
                        messagesPageUri: Object(O.getMessagesPageUri)(e),
                        networkOffline: g(e),
                        showingHsBranding: Object(x.a)(e),
                        showInitialMessageBubble: Object(T.a)(e),
                        stagedAttachments: Object(l.a)(e),
                        mobile: Object(k.getIsMobile)(e),
                        shouldHideAttachmentButton: Object(M.a)(e),
                        shouldDisableInitialInputFocus: _(e),
                        shouldSendInputStagingEvent: Object(G.a)(),
                        canUploadAttachments: Object(X.a)(e, {
                            thread: t
                        })
                    }
                },
                Z = {
                    closeInitialMessageBubble: I.a,
                    onRemoveAttachment: c.a,
                    onSelectAttachmentFile: d.a,
                    publishMessage: u.a,
                    publishTypingMessage: v.a,
                    toggleOnAndOffInputFocus: R.a,
                    setMessageEditorStagingText: W,
                    removeMessageEditorStagingText: J
                };
            var ee = Object(o.connect)($, Z)(C.a),
                te = n("nDpY"),
                ne = n.n(te),
                se = n("QYOI"),
                re = n("mKxs"),
                ae = n("9f1P"),
                ie = n.n(ae),
                oe = n("0IK8"),
                ce = n("+KD7"),
                de = n("yCEM");
            var le = Object(se.Record)({
                tileBackgroundColor: ce.j,
                tileBorderColor: ce.l
            }, "FileAttachmentTheme");
            var ue = Object(se.Record)({
                width: "auto",
                minHeight: 36,
                borderColor: ce.h,
                whiteSpace: "normal",
                lineHeight: "1rem",
                color: ce.h
            }, "QuickReplyTheme");
            var pe = Object(se.Record)({
                alignItems: "flex-start",
                avatarWidth: "32px",
                backgroundColor: ce.l,
                borderColor: ce.a,
                borderRadius: "4px",
                borderWidth: "1px",
                messageSpacing: "8px",
                textColor: ce.q,
                fileAttachmentTheme: le(),
                quickReplyTheme: ue(),
                headerBackgroundColor: ce.r,
                headerTextColor: ce.q,
                avatarBackgroundColor: ce.a,
                avatarBorderColor: ce.a,
                avatarTextColor: ce.q
            }, "Theme");
            const he = {
                [de.b]: pe(),
                [de.a]: pe(),
                [de.c]: pe({
                    backgroundColor: ce.c,
                    borderColor: ce.d
                })
            };
            var be = Object(i.createContext)(he),
                me = n("Ydwr"),
                ge = n("9C7g"),
                fe = n.n(ge);
            fe.a.mapOf(fe.a.recordOf({
                data: Object(re.a)("Recipient"),
                status: a.a.string.isRequired
            }), Object(re.a)("RecipientLocator"));
            const je = fe.a.mapOf(fe.a.recordOf({
                data: Object(re.a)("LegacyRecipient"),
                status: a.a.string.isRequired
            }), Object(re.a)("RecipientLocator"));
            var Oe = fe.a.mapOf(fe.a.recordOf({
                    data: Object(re.a)("ResolvedAttachmentRecord"),
                    status: a.a.string.isRequired
                }), a.a.string.isRequired),
                xe = n("6OYF"),
                ye = n("wL7V"),
                ve = n("0GyJ"),
                Ce = n("tY0N");
            const Ie = (e, t) => {
                    const n = oe.getSenderId,
                        s = oe.getSenderType;
                    return n(e) === n(t) && s(e) === s(t)
                },
                Te = e => (t, n) => {
                    const s = Object(oe.getTimestamp)(t),
                        r = Object(oe.getTimestamp)(n);
                    return Math.abs(s - r) >= e
                };
            var we = n("o/5C");
            const Se = (e, t, n, s) => e === n && t === s || e === s && t === n,
                ke = (e, t) => {
                    const n = Object(oe.getType)(e),
                        s = Object(oe.getType)(t);
                    return n === s || Se(n, s, ve.a, Ce.a)
                },
                Re = (e, t) => Object(we.e)(e) === Object(we.e)(t),
                Ae = Te(6e4),
                Pe = (e, t) => {
                    e = Object(ye.a)(e) || e;
                    t = Object(ye.a)(t) || t;
                    return Ie(e, t) && ke(e, t) && Re(e, t) && !Ae(e, t)
                };
            var Me = n("rCfO");
            const Ee = e => Object(ye.a)(e) || e;
            var Ne = n("SlUU"),
                _e = n("Zui/"),
                Fe = n("9F2+"),
                qe = n("iapW");
            const Le = e => {
                    const t = (Object(Fe.a)(e) || Object(se.List)()).find(e => Object(q.a)("@type", e) === _e.d);
                    return t ? Object(qe.b)(t) : Object(se.Map)()
                },
                Be = Object(Me.default)((e, t) => {
                    e = Ee(e);
                    const n = Le(e);
                    return Object(Ne.fileAttachmentIdsInMessage)(e).reduce((e, s) => {
                        if (t.has("" + s)) {
                            const r = t.get("" + s),
                                a = n.get("" + s);
                            let i = r && r.set("fileId", s);
                            a && (i = i && i.set("fileUsageType", a));
                            return e.push(i)
                        }
                        return e
                    }, Object(se.List)())
                });
            var Ue = n("eoCu"),
                De = n("vIAU");
            const ze = (e, t, n, s) => {
                const r = !t,
                    a = !Pe(e, t),
                    i = !s && !Pe(e, n),
                    o = !n,
                    c = {
                        [De.a]: r,
                        [De.b]: a,
                        [De.e]: i,
                        [De.c]: o
                    };
                return Object.keys(c).reduce((e, t) => c[t] ? e.add(t) : e, Object(se.Set)())
            };
            var He = n("mNDY"),
                Ve = n("c89E");
            const Qe = (e, t) => !Object.keys(e).some(n => "fileAttachments" === n || "positionDescriptors" === n || "senders" === n ? !Object(se.is)(e[n], t[n]) : e[n] !== t[n]),
                We = Object(i.memo)(({
                    fileAttachments: e,
                    fileAttachmentsForThread: t,
                    friendlyNames: n,
                    indexedAsyncFileAttachments: r,
                    historyConfig: a,
                    message: i,
                    portalId: o,
                    positionDescriptors: c,
                    presentSenderLocators: d,
                    senders: l,
                    legacyRecipients: u,
                    visitorLastReadTimestamp: p,
                    lastMessageId: h,
                    ungatedForToolbarRedesign: b,
                    vid: m,
                    recipientVisitors: g,
                    threadHistory: f,
                    threadId: j,
                    ungatedForHeaderRedesign: O,
                    channelName: x
                }) => {
                    const y = {
                            [Ve.a]: Object(Ue.a)(i)
                        },
                        v = a[Object(oe.getType)(i)];
                    return v ? Object(s.jsx)("div", Object.assign({}, y, {
                        children: Object(s.jsx)(v, {
                            channelName: x,
                            fileAttachments: e,
                            fileAttachmentsForThread: t,
                            friendlyNames: n,
                            indexedAsyncFileAttachments: r,
                            message: i,
                            portalId: o,
                            positionDescriptors: c,
                            senders: l,
                            legacyRecipients: u,
                            presentSenderLocators: d,
                            visitorLastReadTimestamp: p,
                            lastMessageId: h,
                            ungatedForToolbarRedesign: b,
                            vid: m,
                            recipientVisitors: g,
                            threadHistory: f,
                            threadId: j,
                            ungatedForHeaderRedesign: O,
                            ungatedForNewForkedComponent: O
                        })
                    })) : null
                }, Qe);
            We.displayName = "MessageHistoryItem";
            We.propTypes = {
                channelName: a.a.string,
                fileAttachments: a.a.instanceOf(se.List),
                fileAttachmentsForThread: a.a.instanceOf(se.Map),
                historyConfig: a.a.object.isRequired,
                indexedAsyncFileAttachments: Oe,
                lastMessageId: a.a.string,
                legacyRecipients: je,
                message: a.a.instanceOf(se.Record).isRequired,
                portalId: a.a.number,
                positionDescriptors: He.a.isRequired,
                presentSenderLocators: a.a.instanceOf(se.Set),
                recipientVisitors: a.a.instanceOf(se.Map),
                senders: me.a,
                threadHistory: Object(re.a)("ThreadHistory"),
                threadId: a.a.string,
                ungatedForToolbarRedesign: a.a.bool,
                vid: a.a.number,
                visitorLastReadTimestamp: a.a.number
            };
            We.defaultProps = {
                innerRef: () => {},
                positionDescriptors: []
            };
            var Je = We;
            const Ge = ie.a.div.withConfig({
                displayName: "MessageHistory__ReflowElement",
                componentId: "wn1897-0"
            })(["z-index:0;padding-top:4px;padding-left:16px;padding-right:16px;flex-shrink:0;@media screen and (max-width:900px){padding-left:8px;padding-right:8px;}"]);
            class Ye extends i.PureComponent {
                getDontIncludeLastInGroup(e, t) {
                    const {
                        messages: n
                    } = this.props, s = n.get(t + 2);
                    return !(!s || !Pe(e, s))
                }
                renderHistory() {
                    const {
                        fileAttachments: e,
                        friendlyNames: t,
                        getAdditionalPositionDescriptors: n,
                        historyConfig: r,
                        indexedAsyncFileAttachments: a,
                        lastMessageId: i,
                        messages: o,
                        portalId: c,
                        presentSenderLocators: d,
                        senders: l,
                        ungatedForToolbarRedesign: u,
                        visitorLastReadTimestamp: p,
                        vid: h,
                        recipientVisitors: b,
                        ungatedForHeaderRedesign: m,
                        threadHistory: g,
                        threadId: f,
                        legacyRecipients: j,
                        channelName: O
                    } = this.props, x = n(o);
                    return o.map((n, y) => {
                        const v = y > 0 ? o.get(y - 1) : void 0,
                            C = o.get(y + 1);
                        let I;
                        Object(oe.getType)(C) === xe.a && (I = this.getDontIncludeLastInGroup(n, y));
                        const T = Be(n, e);
                        let w = ze(n, v, C, I);
                        const S = Object(oe.getId)(n);
                        w = w.merge(x.get(S, Object(se.Set)()));
                        return Object(s.jsx)(Je, {
                            historyConfig: r,
                            fileAttachments: T,
                            fileAttachmentsForThread: e,
                            friendlyNames: t,
                            indexedAsyncFileAttachments: a,
                            portalId: c,
                            positionDescriptors: w,
                            message: n,
                            senders: l,
                            presentSenderLocators: d,
                            visitorLastReadTimestamp: p,
                            lastMessageId: i,
                            ungatedForToolbarRedesign: u,
                            vid: h,
                            recipientVisitors: b,
                            ungatedForHeaderRedesign: m,
                            threadHistory: g,
                            threadId: f,
                            legacyRecipients: j,
                            channelName: O
                        }, Object(Ue.a)(n))
                    })
                }
                render() {
                    const {
                        className: e,
                        themeConfig: t
                    } = this.props;
                    return Object(s.jsx)(Ge, {
                        className: e,
                        children: Object(s.jsx)(be.Provider, {
                            value: t,
                            children: this.renderHistory()
                        })
                    })
                }
            }
            Ye.displayName = "MessageHistory";
            Ye.propTypes = {
                channelName: a.a.string,
                className: a.a.string,
                fileAttachments: a.a.instanceOf(se.Map),
                friendlyNames: a.a.array,
                getAdditionalPositionDescriptors: a.a.func,
                historyConfig: a.a.object.isRequired,
                indexedAsyncFileAttachments: Oe,
                lastMessageId: a.a.string,
                legacyRecipients: je,
                messages: a.a.instanceOf(se.List),
                portalId: a.a.number,
                presentSenderLocators: a.a.instanceOf(se.Set),
                recipientVisitors: a.a.instanceOf(se.Map),
                senders: me.a,
                themeConfig: a.a.object,
                threadHistory: Object(re.a)("ThreadHistory"),
                threadId: a.a.string,
                ungatedForHeaderRedesign: a.a.bool,
                ungatedForToolbarRedesign: a.a.bool,
                vid: a.a.number,
                visitorLastReadTimestamp: a.a.number
            };
            Ye.defaultProps = {
                getAdditionalPositionDescriptors: () => Object(se.Map)(),
                fileAttachments: Object(se.Map)(),
                preventAutoscroll: !1,
                presentSenderLocators: Object(se.Set)(),
                scrollContainerToBottom: () => {},
                displayEmailDeleteBanner: !1,
                ungatedForToolbarRedesign: !1
            };
            var Ke = Ye,
                Xe = n("vVnP");
            const $e = Object(i.memo)(({
                themeConfig: e,
                children: t
            }) => Object(s.jsx)(Xe.a.Provider, {
                value: e,
                children: t
            }));
            $e.displayName = "ThemeConfigProvider";
            $e.propTypes = {
                children: a.a.node.isRequired,
                themeConfig: a.a.object
            };
            var Ze = $e,
                et = n("T25L").a,
                tt = n("npjq"),
                nt = n("5SRO"),
                st = n("E6wg"),
                rt = n("HiOC"),
                at = n("OoDT"),
                it = n("3oj9"),
                ot = n("ZSXR"),
                ct = n("eEyY");
            const dt = e => {
                    const t = Object(ot.a)(e);
                    return {
                        isLoadingHistory: Object(b.isStarted)(t),
                        loadingHistoryFailed: Object(b.isFailed)(t),
                        sessionId: Object(st.getSessionId)(e),
                        threadHistory: Object(it.a)(e),
                        threadId: Object(ct.getCurrentThreadId)(e),
                        isOnFocus: P(e)
                    }
                },
                lt = {
                    fetchThreadHistory: rt.fetchThreadHistory
                };
            var ut = Object(o.connect)(dt, lt)(at.a),
                pt = n("Fjoq"),
                ht = n("0srx"),
                bt = n("kMm/"),
                mt = n("pcz0");
            const gt = Object(ht.a)({
                    tileBackgroundColor: ce.j
                }),
                ft = ({
                    coloring: e
                }) => ({
                    [de.b]: Object(mt.a)({
                        borderRadius: "0px 8px 8px 8px",
                        borderWidth: "0px",
                        fileAttachmentTheme: gt
                    }),
                    [de.a]: Object(mt.a)({
                        borderRadius: "0px 8px 8px 8px",
                        borderWidth: "0px",
                        fileAttachmentTheme: gt,
                        widgetAccent: Object(pt.c)(e) ? ce.k : Object(pt.a)(e),
                        quickReplyTheme: Object(bt.a)({
                            borderColor: Object(pt.c)(e) ? ce.h : Object(pt.a)(e),
                            color: Object(pt.c)(e) ? ce.k : Object(pt.b)(e)
                        })
                    }),
                    [de.c]: Object(mt.a)({
                        alignItems: "flex-end",
                        backgroundColor: Object(pt.c)(e) ? ce.l : Object(pt.a)(e),
                        borderColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px 0px 8px 8px",
                        borderWidth: "0px",
                        textColor: Object(pt.c)(e) ? ce.k : Object(pt.b)(e),
                        fileAttachmentTheme: gt,
                        widgetAccent: Object(pt.c)(e) ? ce.k : Object(pt.a)(e)
                    })
                });
            var jt = n("sl/w"),
                Ot = n("X5NR"),
                xt = n("PY2H");
            const yt = ie.a.div.withConfig({
                displayName: "NewThreadPrompt__NewThreadpromptContainer",
                componentId: "gvh43c-0"
            })(["padding:32px 20px 12px 20px;text-align:center;width:100%;"]);

            function vt({
                createNewThread: e
            }) {
                return Object(s.jsx)(Ot.a, {
                    children: t => Object(s.jsxs)(yt, {
                        children: [Object(s.jsx)("p", {
                            className: "m-bottom-0",
                            children: Object(s.jsx)(jt.a, {
                                message: "conversations-visitor-ui.newThreadPrompt.newHeading",
                                options: {
                                    locale: t
                                }
                            })
                        }), Object(s.jsx)(xt.a, {
                            "data-test-id": "visitor-widget-start-new-thread-button",
                            onClick: e,
                            children: Object(s.jsx)(jt.a, {
                                message: "conversations-visitor-ui.newThreadPrompt.newButton",
                                options: {
                                    locale: t
                                }
                            })
                        })]
                    })
                })
            }
            vt.propTypes = {
                createNewThread: a.a.func.isRequired
            };
            vt.displayName = "NewThreadPrompt";
            var Ct = vt;
            const It = e => ({
                    accentColor: Object(pt.a)(Object(j.a)(e))
                }),
                Tt = {
                    createNewThread: n("uxYb").a
                };
            var wt = Object(o.connect)(It, Tt)(Ct),
                St = n("mIAK");
            class kt extends i.Component {
                render() {
                    const {
                        coloring: e,
                        fileAttachments: t,
                        messagesList: n,
                        portalId: r,
                        senders: a,
                        shouldRenderNewThreadPrompt: i
                    } = this.props, o = n.map(e => {
                        if ("INITIAL_MESSAGE" === e.get("@type")) {
                            const t = e.get("richText");
                            return t ? e.set("richText", t.replace(/\n/g, "<br>")) : e
                        }
                        return e
                    });
                    return Object(s.jsx)(ut, {
                        messageCount: et(n),
                        shouldScrollToBottom: i,
                        children: Object(s.jsxs)(Ze, {
                            themeConfig: ft({
                                coloring: e
                            }),
                            children: [Object(s.jsx)(St.a, {
                                children: Object(s.jsx)("section", {
                                    "aria-label": tt.a.text("conversations-visitor-ui.visitorExperienceAriaLabels.messageHistory"),
                                    children: Object(s.jsx)(Ke, {
                                        fileAttachments: t,
                                        historyConfig: nt.a,
                                        messages: o,
                                        portalId: r,
                                        senders: a
                                    })
                                })
                            }), i && Object(s.jsx)(wt, {})]
                        })
                    })
                }
            }
            kt.propTypes = {
                coloring: Object(re.a)("ColoringRecord").isRequired,
                fileAttachments: a.a.instanceOf(se.Map).isRequired,
                messagesList: a.a.instanceOf(se.List),
                portalId: a.a.number.isRequired,
                senders: a.a.instanceOf(se.Map).isRequired,
                shouldRenderNewThreadPrompt: a.a.bool.isRequired
            };
            kt.displayName = "ThreadHistory";
            var Rt = kt,
                At = n("dJw2"),
                Pt = n("f8gn"),
                Mt = n("TXBG"),
                Et = n("eCQl"),
                Nt = n("YibP");
            const _t = e => {
                    let t;
                    try {
                        t = Object(At.a)(e)
                    } catch (e) {
                        Object(Et.reportError)({
                            error: Object(Nt.a)("ConnectedChatHistoryGetMessagesList selector threw: " + e.message, e)
                        });
                        throw e
                    }
                    return {
                        coloring: Object(j.a)(e),
                        fileAttachments: Object(Mt.a)(e),
                        messagesList: t,
                        portalId: ne.a.get(),
                        senders: Object(Pt.a)(e)
                    }
                },
                Ft = {};
            var qt = Object(o.connect)(_t, Ft)(Rt),
                Lt = n("yb5F"),
                Bt = n("Ux+X"),
                Ut = n("3yBC"),
                Dt = n("mriK"),
                zt = n("evgc"),
                Ht = n("qKTc"),
                Vt = n("Q+dC"),
                Qt = n("8Q5G");
            const Wt = ie.a.input.withConfig({
                    displayName: "VizExFileButton__FilePickerInput",
                    componentId: "uk4yfi-0"
                })(["display:none;"]),
                Jt = {
                    accept: []
                },
                Gt = e => {
                    const {
                        children: t,
                        multiple: n,
                        accept: r,
                        onChange: a,
                        onClick: o
                    } = e, c = Object(Vt.a)(e, ["children", "multiple", "accept", "onChange", "onClick"]), d = Object(i.useRef)(null), l = e => {
                        d.current && d.current.click();
                        Object(Qt.a)(o, e)
                    };
                    return Object(s.jsxs)(i.Fragment, {
                        children: [t({
                            onClick: l
                        }), Object(s.jsx)(Wt, Object.assign({}, c, {
                            ref: d,
                            type: "file",
                            accept: r.join(","),
                            multiple: n,
                            onChange: a
                        }))]
                    })
                };
            Gt.displayName = "VizExFileButton";
            Gt.defaultProps = Jt;
            Gt.propTypes = {
                accept: a.a.arrayOf(a.a.string),
                children: a.a.func.isRequired,
                multiple: a.a.bool,
                onChange: a.a.func,
                onClick: a.a.func
            };
            var Yt = Gt;
            const Kt = e => Object(s.jsx)(Yt, {
                accept: Ht.a,
                use: "unstyled",
                onClick: e.onClick,
                onChange: e.onChange,
                children: t => Object(s.jsx)(xt.a, Object.assign({
                    use: "on-bright"
                }, t, {
                    children: e.children
                }))
            });
            Kt.displayName = "FilePickerLink";
            Kt.propTypes = {
                children: a.a.node.isRequired,
                onChange: a.a.func.isRequired,
                onClick: a.a.func
            };
            var Xt = Kt,
                $t = n("gQ5O"),
                Zt = n("BnUr");
            const en = ({
                attachmentsError: e,
                dismissAttachmentsError: t,
                selectAttachmentFile: n,
                thread: r,
                trackInteraction: a
            }) => {
                const i = () => {
                        t({
                            threadId: Object(Zt.getThreadId)(r)
                        })
                    },
                    o = ({
                        target: {
                            files: e
                        }
                    }) => {
                        if (!e || !e.length) return;
                        const t = e.item(0);
                        n({
                            file: t,
                            thread: r
                        })
                    },
                    c = () => {
                        a("retry-attachment-upload", {
                            action: "retry attachment upload"
                        })
                    },
                    d = (() => {
                        switch (e) {
                            case Ut.b:
                                return Object(s.jsx)(jt.a, {
                                    message: "cvVisitorUIAttachments.errors.fileSizeExceeded",
                                    options: {
                                        maxSize: tt.a.formatSize($t.b)
                                    }
                                });
                            case Ut.c:
                                return Object(s.jsx)(jt.a, {
                                    message: "cvVisitorUIAttachments.errors.uploadError"
                                });
                            case Ut.a:
                                return Object(s.jsx)(jt.a, {
                                    message: "cvVisitorUIAttachments.errors.invalidFileType"
                                });
                            default:
                                return null
                        }
                    })();
                return Object(s.jsx)(zt.a, {
                    title: d,
                    onClose: i,
                    link: Object(s.jsx)(Xt, {
                        onChange: o,
                        onClick: c,
                        children: Object(s.jsx)(jt.a, {
                            message: "cvVisitorUIAttachments.tryAgain"
                        })
                    })
                })
            };
            en.displayName = "AttachmentErrorAlerts";
            en.propTypes = {
                attachmentsError: a.a.oneOf([Ut.b, Ut.c, Ut.a]),
                dismissAttachmentsError: a.a.func.isRequired,
                selectAttachmentFile: a.a.func.isRequired,
                thread: Object(re.a)("Thread").isRequired,
                trackInteraction: a.a.func.isRequired
            };
            var tn = en;
            const nn = ({
                createNewThread: e,
                fetchOlderThreadHistory: t,
                networkError: n,
                startPubSub: r,
                resubscribe: a
            }) => {
                const [o, c] = Object(i.useState)([]), d = () => {
                    c([...o, n])
                };
                if (o.includes(n)) return null;
                const l = (() => {
                        switch (n) {
                            case Dt.b:
                            case Dt.c:
                            case Dt.d:
                                return Object(s.jsx)(jt.a, {
                                    message: "conversations-visitor-ui.network.offline.title"
                                });
                            case Dt.e:
                                return Object(s.jsx)(jt.a, {
                                    message: "conversations-visitor-ui.network.pubSubFailure.title"
                                });
                            case Dt.a:
                                return Object(s.jsx)(jt.a, {
                                    message: "conversations-visitor-ui.network.newThreadFailure.title"
                                });
                            default:
                                return null
                        }
                    })(),
                    u = (() => {
                        switch (n) {
                            case Dt.e:
                                return Object(s.jsx)(xt.a, {
                                    use: "on-bright",
                                    onClick: t,
                                    children: Object(s.jsx)(jt.a, {
                                        message: "conversations-visitor-ui.network.pubSubFailure.retry"
                                    })
                                });
                            case Dt.a:
                                return Object(s.jsx)(xt.a, {
                                    use: "on-bright",
                                    onClick: e,
                                    children: Object(s.jsx)(jt.a, {
                                        message: "conversations-visitor-ui.network.pubSubFailure.retry"
                                    })
                                });
                            case Dt.d:
                                return Object(s.jsx)(xt.a, {
                                    use: "on-bright",
                                    onClick: a,
                                    children: Object(s.jsx)(jt.a, {
                                        message: "conversations-visitor-ui.network.pubSubFailure.retry"
                                    })
                                });
                            case Dt.c:
                                return Object(s.jsx)(xt.a, {
                                    use: "on-bright",
                                    onClick: r,
                                    children: Object(s.jsx)(jt.a, {
                                        message: "conversations-visitor-ui.network.pubSubFailure.retry"
                                    })
                                });
                            default:
                                return null
                        }
                    })();
                return Object(s.jsx)(zt.a, {
                    title: l,
                    onClose: d,
                    link: u
                })
            };
            nn.displayName = "NetworkErrorAlerts";
            nn.propTypes = {
                createNewThread: a.a.func.isRequired,
                fetchOlderThreadHistory: a.a.func.isRequired,
                networkError: a.a.oneOf([Dt.b, Dt.e, Dt.a, Dt.c, Dt.d]).isRequired,
                resubscribe: a.a.func.isRequired,
                startPubSub: a.a.func.isRequired
            };
            var sn = nn;
            class rn extends i.Component {
                render() {
                    const {
                        attachmentsError: e,
                        createNewThread: t,
                        dismissAttachmentsError: n,
                        fetchOlderThreadHistory: r,
                        networkError: a,
                        resubscribe: i,
                        selectAttachmentFile: o,
                        startPubSub: c,
                        thread: d,
                        trackInteraction: l
                    } = this.props;
                    return e ? Object(s.jsx)(tn, {
                        attachmentsError: e,
                        dismissAttachmentsError: n,
                        selectAttachmentFile: o,
                        thread: d,
                        trackInteraction: l
                    }) : a ? Object(s.jsx)(sn, {
                        createNewThread: t,
                        fetchOlderThreadHistory: r,
                        networkError: a,
                        resubscribe: i,
                        startPubSub: c
                    }) : null
                }
            }
            rn.displayName = "ChatAreaAlertContainer";
            rn.propTypes = {
                attachmentsError: a.a.oneOf([Ut.b, Ut.c, Ut.a]),
                createNewThread: a.a.func.isRequired,
                dismissAttachmentsError: a.a.func.isRequired,
                fetchOlderThreadHistory: a.a.func.isRequired,
                networkError: a.a.oneOf([Dt.b, Dt.e, Dt.a, Dt.c, Dt.d]),
                resubscribe: a.a.func.isRequired,
                selectAttachmentFile: a.a.func.isRequired,
                startPubSub: a.a.func.isRequired,
                thread: Object(re.a)("Thread").isRequired,
                trackInteraction: a.a.func.isRequired
            };
            var an = rn,
                on = n("GkNN"),
                cn = n("lRdY"),
                dn = n("r0yA"),
                ln = n("eg5p"),
                un = n("J4oD"),
                pn = n("021p");
            const hn = () => (e, t) => {
                const n = t(),
                    s = Object(st.getSessionId)(n),
                    r = Object(F.getSelectedThreadId)(n);
                if (null === r || r === ln.a) return;
                const a = Object(f.a)(n),
                    i = Object(un.historyDataForThread)(n, {
                        thread: a
                    }),
                    o = Object(pn.e)(i),
                    c = Object(pn.f)(i);
                e(Object(rt.fetchThreadHistory)({
                    offsetOrdinal: o,
                    offsetTimestamp: c,
                    threadId: r,
                    sessionId: s
                }))
            };
            var bn = n("5rZi"),
                mn = n("8HpB");
            const gn = (e, {
                    thread: t
                }) => ({
                    attachmentsError: Object(on.a)(e, {
                        thread: t
                    }),
                    networkError: Object(dn.a)(e)
                }),
                fn = {
                    createNewThread: bn.createNewThread,
                    dismissAttachmentsError: cn.a,
                    fetchOlderThreadHistory: hn,
                    selectAttachmentFile: d.a,
                    trackInteraction: Bt.trackInteraction,
                    startPubSub: mn.startPubSub,
                    resubscribe: Lt.resubscribe
                };
            var jn = Object(o.connect)(gn, fn)(an);
            const On = e => ({
                thread: Object(f.a)(e)
            });
            var xn = Object(o.connect)(On)(jn),
                yn = n("Qf6G"),
                vn = n("zs6M"),
                Cn = n("/Dz0"),
                In = n("647q"),
                Tn = n("ZqFO");
            const wn = Object(h.a)([In.getLatestWidgetData], e => Object(Tn.d)(e));
            var Sn = n("lOT2"),
                kn = n("8M+t");
            const Rn = Object(q.a)("gdpr"),
                An = Object(h.a)([Rn], Object(q.a)("consentToProcessError")),
                Pn = e => ({
                    consentToProcessMessage: wn(e),
                    showGdprConsentToProcessButton: Object(Sn.a)(e),
                    coloring: Object(j.a)(e),
                    consentToProcessError: An(e)
                }),
                Mn = {
                    consentToProcess: yn.consentToProcess,
                    closeConsentToProcess: vn.a,
                    dismissConsentToProcessError: Cn.b,
                    trackInteraction: Bt.trackInteraction
                };
            var En = Object(o.connect)(Pn, Mn)(kn.a),
                Nn = n("QGYt"),
                _n = n("HtM0"),
                Fn = n("38AR"),
                qn = n("JxxT"),
                Ln = n("Mcxo");
            const Bn = ie.a.div.withConfig({
                    displayName: "ConsentModal__ConsentModalContainer",
                    componentId: "sc-8gg21r-0"
                })(["position:absolute;display:flex;align-items:flex-start;justify-content:center;height:calc(100% - ", "px);top:", "px;width:100%;background-color:rgba(45,62,80,0.79);backdrop-filter:blur(2px);padding-top:20%;border-bottom-left-radius:", "px;border-bottom-right-radius:", "px;overflow-y:hidden;"], qn.d, qn.d, Fn.a, Fn.a),
                Un = ie.a.div.withConfig({
                    displayName: "ConsentModal__ContentContainer",
                    componentId: "sc-8gg21r-1"
                })(["display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:12px 24px;background-color:white;border-radius:3px;box-shadow:0 2px 4px -1px rgba(0,0,0,0.75);margin:0 20px;"]),
                Dn = ie()(Ln.a).withConfig({
                    displayName: "ConsentModal__SmallNoParagraphPadding",
                    componentId: "sc-8gg21r-2"
                })(["display:block;word-break:break-word;word-wrap:break-word;-ms-word-break:break-all;p{margin-bottom:0;}"]),
                zn = ie()(Nn.a).withConfig({
                    displayName: "ConsentModal__FullWidthButton",
                    componentId: "sc-8gg21r-3"
                })(["padding:9px 16px;flex:0 1 100%;&:not(:first-child){margin-left:8px;}"]),
                Hn = ie.a.div.withConfig({
                    displayName: "ConsentModal__ButtonsContainer",
                    componentId: "sc-8gg21r-4"
                })(["display:flex;flex-direction:row;margin:12px 0 0 0;width:100%;"]),
                Vn = ie.a.p.withConfig({
                    displayName: "ConsentModal__Header",
                    componentId: "sc-8gg21r-5"
                })(["text-transform:none;font-size:18px;font-weight:500;margin-top:18px;margin-bottom:12px;line-height:normal;"]),
                Qn = ({
                    headerMessage: e,
                    message: t,
                    onClick: n,
                    onDeclineClick: r
                }) => {
                    const [a, o] = Object(i.useState)({
                        isEntering: !0,
                        shouldRender: !0,
                        callback: () => {}
                    }), c = () => {
                        if (!a.isEntering) {
                            a.callback();
                            o(Object.assign({}, a, {
                                shouldRender: !1
                            }))
                        }
                    }, d = e => {
                        o(Object.assign({}, a, {
                            isEntering: !1,
                            callback: e
                        }))
                    };
                    return a.shouldRender ? Object(s.jsx)(Bn, {
                        style: {
                            animation: (a.isEntering ? "consent-modal-background-fadeIn" : "consent-modal-background-fadeOut") + " .3s"
                        },
                        "data-test-id": "gdpr-consent-prompt-container",
                        onAnimationEnd: c,
                        children: Object(s.jsx)(Ot.a, {
                            children: i => Object(s.jsxs)(Un, {
                                "data-test-id": "gdpr-consent-prompt",
                                style: {
                                    animation: (a.isEntering ? "consent-modal-content-fadeIn" : "consent-modal-content-fadeOut") + " .3s"
                                },
                                children: [e && Object(s.jsx)(Vn, {
                                    children: e
                                }), Object(s.jsx)(Dn, {
                                    use: "help",
                                    role: "document",
                                    tabIndex: 0,
                                    "data-test-id": "gdpr-consent-text",
                                    dangerouslySetInnerHTML: {
                                        __html: Object(_n.a)(t)
                                    }
                                }), Object(s.jsxs)(Hn, {
                                    children: [Object(s.jsx)(zn, {
                                        onClick: () => {
                                            d(n)
                                        },
                                        "data-test-id": "gdpr-consent-agree-button",
                                        use: "primary",
                                        children: Object(s.jsx)(jt.a, {
                                            message: "conversations-visitor-experience-components.buttons.agree",
                                            options: {
                                                locale: i
                                            }
                                        })
                                    }), Object(s.jsx)(zn, {
                                        onClick: () => {
                                            d(r)
                                        },
                                        "data-test-id": "gdpr-consent-dismiss-button",
                                        children: Object(s.jsx)(jt.a, {
                                            message: "conversations-visitor-experience-components.buttons.disagree",
                                            options: {
                                                locale: i
                                            }
                                        })
                                    })]
                                })]
                            }, "consent-modal-content-container")
                        })
                    }, Math.random + "-consent-modal-container") : null
                };
            Qn.defaultProps = {
                animationTimeMs: 300,
                onClick: () => {},
                onDeclineClick: () => {}
            };
            Qn.propTypes = {
                headerMessage: a.a.node,
                message: a.a.string.isRequired,
                onClick: a.a.func.isRequired,
                onDeclineClick: a.a.func.isRequired
            };
            Qn.displayName = "ConsentModal";
            var Wn = Qn,
                Jn = n("0IL2"),
                Gn = n("90r9"),
                Yn = n("iatO"),
                Kn = n("2BFa"),
                Xn = n("VTHq");

            function $n() {
                return (e, t) => {
                    (Object(Kn.gdprCookieConsentOnExitIntentEnabled)(t()) || Object(Xn.getAPIEnableWidgetCookieBannerOnExitIntent)(t())) && e(Object(Yn.a)(!1));
                    e(Object(Bt.trackInteraction)("widget-interaction", {
                        action: "clicked decline cookies button"
                    }))
                }
            }
            var Zn = n("X9Pk");
            class es extends i.Component {
                componentDidMount() {
                    const {
                        trackInteraction: e
                    } = this.props;
                    e("widget-interaction", {
                        action: "view consent to cookies"
                    })
                }
                render() {
                    return Object(s.jsx)(Ot.a, {
                        children: e => this.props.isExitIntentPrompt ? Object(s.jsx)(Wn, {
                            headerMessage: Object(s.jsx)(jt.a, {
                                message: "conversations-visitor-ui.gdpr.consentToCookies.promptHeader",
                                options: {
                                    locale: e
                                }
                            }),
                            message: tt.a.text("conversations-visitor-ui.gdpr.consentToCookies.exitIntentCookieConsent", {
                                locale: e
                            }),
                            onDeclineClick: this.props.declineCookies,
                            onClick: this.props.consentToCookies,
                            coloring: this.props.coloring
                        }) : Object(s.jsx)(Jn.a, {
                            message: tt.a.text("conversations-visitor-ui.gdpr.consentToCookies.pageLoadCookieConsent", {
                                locale: e
                            }),
                            onDeclineClick: this.props.declineCookies,
                            onClick: this.props.consentToCookies,
                            coloring: this.props.coloring,
                            showButton: !0
                        })
                    })
                }
            }
            es.displayName = "CookieConsentPrompt";
            es.propTypes = {
                coloring: Object(re.a)("ColoringRecord"),
                consentToCookies: a.a.func.isRequired,
                declineCookies: a.a.func.isRequired,
                isExitIntentPrompt: a.a.bool.isRequired,
                trackInteraction: a.a.func.isRequired
            };
            const ts = {
                    consentToCookies: Gn.a,
                    declineCookies: $n,
                    trackInteraction: Bt.trackInteraction
                },
                ns = e => ({
                    coloring: Object(j.a)(e),
                    widgetData: Object(In.getLatestWidgetData)(e),
                    isExitIntentPrompt: Object(Kn.gdprCookieConsentOnExitIntentEnabled)(e) && !Object(Zn.getAPIEnableWidgetCookieBanner)(e)
                });
            var ss = Object(o.connect)(ns, ts)(es),
                rs = n("LSdF"),
                as = n("6gho");
            const is = e => /https:\/\/(app|local)\.hubspot(qa)?\.com/.test(e.origin),
                os = ({
                    iframeRef: e,
                    onMessage: t
                }) => {
                    const n = e && e.current && e.current.contentWindow;
                    window.addEventListener("message", e => {
                        is(e) && e.source === n && e.data.action === as.b.SET_IFRAME_HEIGHT && t(e.data.value)
                    })
                };

            function cs({
                langOverride: e,
                linkType: t,
                portalId: n,
                additionalParams: r
            }) {
                const a = Object(i.useRef)(null),
                    [o, c] = Object(i.useState)();
                Object(i.useEffect)(() => {
                    os({
                        iframeRef: a,
                        onMessage: e => {
                            c(parseInt(e, 10))
                        }
                    })
                }, [a]);
                return Object(s.jsx)("iframe", {
                    style: {
                        width: "100%",
                        border: "none",
                        height: (o || 0) + "px"
                    },
                    "aria-label": `hubspot-${t}-viral-iframe`,
                    "data-test-id": "viral-link-iframe",
                    ref: a,
                    src: Object(rs.d)(t, Object.assign({
                        lang: e,
                        portalId: n
                    }, r))
                })
            }
            const ds = ie.a.div.withConfig({
                displayName: "WidgetBranding__ViralFrameContainer",
                componentId: "sc-1mviqjy-0"
            })(["max-height:22px;min-height:22px;height:22px;"]);
            class ls extends i.PureComponent {
                render() {
                    const {
                        liveChatHref: e,
                        lang: t
                    } = this.props, n = new URL(e).searchParams, r = n.get("intent"), a = n.get("viralSourcePortalId"), i = n.get("hubs_medium"), o = n.get("hubs_campaign");
                    return Object(s.jsx)(ds, {
                        className: "p-x-1 m-bottom-1 align-center justify-center",
                        children: Object(s.jsx)(cs, {
                            linkType: "live-chat",
                            langOverride: t,
                            height: 24,
                            additionalParams: {
                                intent: r,
                                viralSourcePortalId: a,
                                hubs_medium: i,
                                hubs_campaign: o
                            }
                        })
                    })
                }
            }
            ls.propTypes = {
                lang: a.a.string,
                liveChatHref: a.a.string
            };
            ls.displayName = "WidgetBranding";
            var us = ls,
                ps = n("sYgu"),
                hs = n("u8Gm");
            const bs = e => ({
                liveChatHref: Object(ps.a)(e),
                lang: Object(hs.b)(e)
            });
            var ms = Object(o.connect)(bs)(us),
                gs = n("QmIQ");
            const fs = 1e3;
            class js extends i.PureComponent {
                constructor(e) {
                    super(e);
                    this.state = {
                        renderNewThreadPrompt: !e.isThreadStarted
                    }
                }
                componentDidUpdate(e) {
                    const {
                        isThreadStarted: t,
                        toggleOnAndOffInputFocus: n
                    } = this.props, {
                        isThreadStarted: s
                    } = e;
                    t || t === s || setTimeout(() => {
                        this.setRenderNewThreadPromptTrue();
                        n(!1)
                    }, fs);
                    t && this.state.renderNewThreadPrompt && this.setRenderNewThreadPromptFalse()
                }
                setRenderNewThreadPromptTrue() {
                    this.setState({
                        renderNewThreadPrompt: !0
                    })
                }
                setRenderNewThreadPromptFalse() {
                    this.setState({
                        renderNewThreadPrompt: !1
                    })
                }
                renderMessageEditor() {
                    const {
                        requiresExplicitConsentToProcess: e,
                        renderCookieConsentPrompt: t
                    } = this.props, {
                        renderNewThreadPrompt: n
                    } = this.state;
                    return e || t || n ? null : Object(s.jsxs)(i.Fragment, {
                        children: [Object(s.jsx)(xn, {}), Object(s.jsx)(ee, {})]
                    })
                }
                renderError() {
                    const e = Object(s.jsx)(jt.a, {
                        message: "conversations-visitor-ui.network.pubSubFailure.title"
                    });
                    return Object(s.jsx)(zt.a, {
                        title: e,
                        onClose: () => {}
                    })
                }
                render() {
                    const {
                        showingGdprProcess: e,
                        showingHsBranding: t,
                        renderCookieConsentPrompt: n
                    } = this.props, {
                        renderNewThreadPrompt: r
                    } = this.state;
                    return Object(s.jsxs)(s.Fragment, {
                        children: [Object(s.jsx)(gs.a, {
                            renderError: this.renderError,
                            errorLoggingTitle: "ConnectedThreadHistory",
                            children: Object(s.jsx)(qt, {
                                shouldRenderNewThreadPrompt: r
                            })
                        }), n && Object(s.jsx)(ss, {}), e && !n && Object(s.jsx)(En, {}), this.renderMessageEditor(), t && Object(s.jsx)(ms, {})]
                    })
                }
            }
            js.displayName = "UnifiedThreadView";
            js.propTypes = {
                isThreadStarted: a.a.bool.isRequired,
                renderCookieConsentPrompt: a.a.bool.isRequired,
                requiresExplicitConsentToProcess: a.a.bool.isRequired,
                showingGdprProcess: a.a.bool.isRequired,
                showingHsBranding: a.a.bool.isRequired,
                toggleOnAndOffInputFocus: a.a.func.isRequired
            };
            t.a = js
        },
        XXaZ: function(e, t, n) {
            var s = n("uQvf"),
                r = Object.prototype.hasOwnProperty;

            function a(e) {
                var t = this.__data__;
                return s ? void 0 !== t[e] : r.call(t, e)
            }
            e.exports = a
        },
        XiSY: function(e, t, n) {
            var s = n("3FHW"),
                r = n("bwj0"),
                a = n("kmmH"),
                i = n("QVIP"),
                o = /[\\^$.*+?()[\]{}|]/g,
                c = /^\[object .+?Constructor\]$/,
                d = Function.prototype,
                l = Object.prototype,
                u = d.toString,
                p = l.hasOwnProperty,
                h = RegExp("^" + u.call(p).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

            function b(e) {
                return !(!a(e) || r(e)) && (s(e) ? h : c).test(i(e))
            }
            e.exports = b
        },
        "Xs/R": function(e, t, n) {
            "use strict";
            var s = n("QgEn");
            n("Ktcs");
            const r = e => Object(s.jsxs)("svg", Object.assign({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e, {
                children: [Object(s.jsx)("defs", {
                    children: Object(s.jsx)("path", {
                        d: "M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819",
                        id: "send__a"
                    })
                }), Object(s.jsx)("use", {
                    xlinkHref: "#send__a",
                    fillRule: "evenodd"
                })]
            }));
            r.displayName = "SVGSend";
            t.a = r
        },
        Ydwr: function(e, t, n) {
            "use strict";
            var s = n("mKxs"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("9C7g"),
                o = n.n(i);
            t.a = o.a.mapOf(o.a.recordOf({
                data: Object(s.a)("Sender"),
                status: a.a.string.isRequired
            }), Object(s.a)("SenderLocator"))
        },
        Z6IV: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "isSupportedMessageType", (function() {
                return l
            }));
            var s = n("SmHr"),
                r = n("A5f/"),
                a = n("wL7V"),
                i = n("/rM/"),
                o = n("0IK8"),
                c = n("Mx3c"),
                d = n("x1PU");
            const l = e => {
                if (e instanceof s.a || e instanceof r.a) {
                    e = Object(a.a)(e);
                    if (Object(o.getSenderType)(e) !== c.VISITOR) return !1
                }
                if (Object(i.a)(e)) return !1;
                const t = Object(o.getType)(e);
                return Object.keys(d.a).some(e => e === t)
            }
        },
        ZAuv: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var s = n("2Zef"),
                r = n("BnUr"),
                a = n("QYOI"),
                i = n("nS6h"),
                o = n("+TdC"),
                c = n("BvOu"),
                d = n("cPs9"),
                l = n("v0wH"),
                u = n("CdQ/"),
                p = n("rf4d"),
                h = n("6O34"),
                b = n("0G/n");
            const m = ({
                thread: e
            }) => t => {
                const n = Object(r.getChannelName)(e),
                    m = Object(r.getThreadId)(e),
                    g = s.VISITOR_SENDER,
                    f = Object(d.a)(g),
                    j = Object(u.getMessagesUtk)(),
                    O = {
                        type: b.a,
                        value: j
                    },
                    x = Object(a.List)([{
                        deliveryIdentifier: O
                    }]),
                    y = new o.a({
                        id: Object(c.generateUuid)(),
                        typingState: null,
                        sender: {
                            "@type": g,
                            [f]: j
                        },
                        status: {
                            messageStatus: l.b
                        },
                        genericChannelId: p.d,
                        senders: Object(h.a)(x)
                    });
                t(Object(i.publishMessageToConversation)({
                    channel: n,
                    message: y,
                    threadId: m
                }))
            }
        },
        "b9/n": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            }));
            n.d(t, "a", (function() {
                return r
            }));
            const s = "@type",
                r = "DATE_MESSAGE"
        },
        bOW6: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "wrapFailedMessage", (function() {
                return c
            }));
            var s = n("v0wH"),
                r = n("0IK8"),
                a = n("C3IS"),
                i = n("A5f/"),
                o = n("qjq5");
            const c = Object(o.a)(({
                threadId: e,
                channel: t,
                allowRetry: n = !0
            }, o) => {
                if (Object(a.b)(o) && Object(r.getStatusForCmf)(o) === s.a) {
                    const s = Object(r.getMessageSendFailure)(o),
                        a = !s || s.get("retryable");
                    return Object(i.a)({
                        message: o,
                        threadId: e,
                        channel: t,
                        allowRetry: n && a
                    })
                }
                return o
            })
        },
        bwj0: function(e, t, n) {
            var s, r = n("DOHQ"),
                a = (s = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";

            function i(e) {
                return !!a && a in e
            }
            e.exports = i
        },
        byjC: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var s = n("MBJP"),
                r = n("k8Ub"),
                a = n("C3IS"),
                i = n("V+nC"),
                o = n("J4oD"),
                c = n("kWFB"),
                d = n("iPDb");
            const l = Object(s.a)(o.historyDataForThread, e => {
                if (!e || !Object(c.hasMessages)(e)) return !1;
                const t = Object(d.a)(e).filter(e => Object(a.b)(e) && !Object(a.c)(e) || Object(i.a)(e)).last();
                return Boolean(Object(r.a)(t))
            })
        },
        c89E: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = "data-cv-message-history-id"
        },
        cAkk: function(e, t) {
            e.exports = "//static.hsappstatic.net/salesImages/static-1.446/messages/bot-avatar.svg"
        },
        ccWV: function(e, t, n) {
            var s = n("LPlp"),
                r = Array.prototype.splice;

            function a(e) {
                var t = this.__data__,
                    n = s(t, e);
                if (n < 0) return !1;
                n == t.length - 1 ? t.pop() : r.call(t, n, 1);
                --this.size;
                return !0
            }
            e.exports = a
        },
        d1Q1: function(e, t, n) {
            var s = n("5els"),
                r = n("p1fP"),
                a = n("Vsm7"),
                i = n("wID2"),
                o = n("BB3q");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                this.clear();
                for (; ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }
            c.prototype.clear = s;
            c.prototype.delete = r;
            c.prototype.get = a;
            c.prototype.has = i;
            c.prototype.set = o;
            e.exports = c
        },
        dByS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var s = n("Zulv"),
                r = n("xr6y"),
                a = n("Ktcs"),
                i = n("okxY");

            function o(e, t, n) {
                let {
                    isDisabled: o,
                    trigger: c
                } = e, d = Object(s.o)(), l = Object(a.useRef)(!1), u = Object(a.useRef)(!1), p = () => {
                    (l.current || u.current) && t.open(u.current)
                }, h = e => {
                    l.current || u.current || t.close(e)
                };
                Object(a.useEffect)(() => {
                    let e = e => {
                        n && n.current && "Escape" === e.key && t.close(!0)
                    };
                    if (t.isOpen) {
                        document.addEventListener("keydown", e, !0);
                        return () => {
                            document.removeEventListener("keydown", e, !0)
                        }
                    }
                }, [n, t]);
                let b = () => {
                        if ("focus" !== c) {
                            "pointer" === Object(r.a)() ? l.current = !0 : l.current = !1;
                            p()
                        }
                    },
                    m = () => {
                        if ("focus" !== c) {
                            u.current = !1;
                            l.current = !1;
                            h()
                        }
                    },
                    g = () => {
                        u.current = !1;
                        l.current = !1;
                        h(!0)
                    },
                    f = () => {
                        if (Object(r.b)()) {
                            u.current = !0;
                            p()
                        }
                    },
                    j = () => {
                        u.current = !1;
                        l.current = !1;
                        h(!0)
                    },
                    {
                        hoverProps: O
                    } = Object(r.f)({
                        isDisabled: o,
                        onHoverStart: b,
                        onHoverEnd: m
                    }),
                    {
                        pressProps: x
                    } = Object(r.j)({
                        onPressStart: g
                    }),
                    {
                        focusableProps: y
                    } = Object(i.d)({
                        isDisabled: o,
                        onFocus: f,
                        onBlur: j
                    }, n);
                return {
                    triggerProps: Object.assign({
                        "aria-describedby": t.isOpen ? d : void 0
                    }, Object(s.i)(y, O, x)),
                    tooltipProps: {
                        id: d
                    }
                }
            }
        },
        dJw2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("x32n"),
                r = n("MBJP"),
                a = n("5SRO"),
                i = n("4nf7");
            const o = !1,
                c = Object(r.a)([i.a], e => Object(s.insertDateMessagesWithHistoryConfig)(e, a.a, o))
        },
        dZ2B: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getUserTimezone", (function() {
                return a
            }));
            const s = function(e) {
                    return (e > 0) - (e < 0) || +e
                },
                r = e => e >= 10 ? e : "0" + e,
                a = () => {
                    const e = (new Date).getTimezoneOffset(),
                        t = s(e),
                        n = Math.floor(Math.abs(e / 60)),
                        a = Math.abs(e % 60),
                        i = `${r(n)}:${r(a)}`;
                    return t > 0 ? "-" + i : "+" + i
                }
        },
        "eg+O": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "fileExceedsSizeLimit", (function() {
                return r
            }));
            var s = n("gQ5O");
            const r = e => e.size > s.b
        },
        ejMo: function(e, t, n) {
            "use strict";
            var s = n("QYOI"),
                r = n("6GFX");
            class a extends(Object(s.Record)({
                file: null,
                localId: "",
                fileId: -1,
                uploadProgress: 0
            }, "FileUploadRecord")) {
                constructor(e = {}) {
                    super(Object.assign({}, e, {
                        localId: Object(r.generateIdForFile)({
                            file: e.file || null,
                            timestamp: Date.now()
                        })
                    }))
                }
            }
            t.a = a
        },
        eoCu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var s = n("MJM1");
            const r = e => Object(s.a)(["id"], e) || Object(s.a)(["message", "id"], e) || -1
        },
        evgc: function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("9f1P"),
                o = n.n(i),
                c = n("/mXs"),
                d = n("P7jJ"),
                l = n("3MJX"),
                u = n("ET5w"),
                p = n("Tbmo"),
                h = n("+KD7"),
                b = n("npjq");
            const m = o.a.div.withConfig({
                    displayName: "ChatAreaAlert__Wrapper",
                    componentId: "sc-1se4y26-0"
                })(["width:100%;display:flex;justify-content:center;background-color:transparent;"]),
                g = o.a.div.withConfig({
                    displayName: "ChatAreaAlert__Alert",
                    componentId: "sc-1se4y26-1"
                })(["display:flex;justify-content:flex-end;align-items:center;padding:7px 14px;min-width:85%;background-color:", ";border:1px solid ", ";font-weight:500;font-size:12px;"], h.n, h.o),
                f = o.a.div.withConfig({
                    displayName: "ChatAreaAlert__Title",
                    componentId: "sc-1se4y26-2"
                })(["flex:0 1 100%;"]),
                j = o.a.div.withConfig({
                    displayName: "ChatAreaAlert__LinkWrapper",
                    componentId: "sc-1se4y26-3"
                })(["flex:0 0 auto;"]),
                O = o()(c.a).withConfig({
                    displayName: "ChatAreaAlert__StyledCloseButton",
                    componentId: "sc-1se4y26-4"
                })(["position:static;flex:0 0 36px;margin-left:8px;margin-right:-8px;"]),
                x = ({
                    title: e,
                    link: t,
                    onClose: n
                }) => Object(s.jsx)(m, {
                    "data-test-id": "alert",
                    role: "alert",
                    children: Object(s.jsxs)(g, {
                        children: [Object(s.jsx)(f, {
                            children: e
                        }), t && Object(s.jsx)(j, {
                            children: t
                        }), Object(s.jsx)(O, {
                            use: "transparent-on-background",
                            theme: Object(p.a)(h.q, Object(u.a)()),
                            "aria-label": b.a.text("conversations-visitor-experience-components.visitorExperienceAriaLabels.dismiss"),
                            onClick: n,
                            children: Object(s.jsx)(d.a, {
                                icon: Object(s.jsx)(l.a, {})
                            })
                        })]
                    })
                });
            x.propTypes = {
                link: a.a.node,
                onClose: a.a.func.isRequired,
                title: a.a.node.isRequired
            };
            x.defaultProps = {
                onClose: () => {}
            };
            x.displayName = "ChatAreaAlert";
            t.a = x
        },
        f8gn: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var s = n("MZef"),
                r = n("N7dr"),
                a = n("KXN9"),
                i = n("x1JE"),
                o = n("QYOI"),
                c = n("MBJP"),
                d = n("g4ag"),
                l = n("fl6v"),
                u = n("8FuJ"),
                p = n("BYz9");
            const h = Object(c.a)([l.getResponders], e => Object(i.getEntries)(e).reduce((e, t, n) => {
                const i = Object(a.a)(t);
                return Object(d.a)([Object(p.a)(n)], Object(s.a)({
                    [r.a]: i ? Object(u.a)(i) : null,
                    [r.c]: Object(a.c)(t)
                }), e)
            }, Object(o.Map)()))
        },
        "g/uM": function(e, t, n) {
            "use strict";
            var s = n("Q+dC"),
                r = n("QgEn"),
                a = n("VfuR"),
                i = n.n(a);
            const o = "javascript:void(0)",
                c = /^([^:]+):/,
                d = /[\s\x00-\x1f]/g,
                l = e => {
                    if (e && "string" == typeof e) {
                        const t = e.match(c);
                        if (!t || e === o) return !1;
                        if ("javascript:" === t[0].replace(d, "").toLowerCase()) return !0
                    }
                    return !1
                };
            var u = n("9f1P");
            const p = n.n(u).a.img.withConfig({
                    displayName: "VizExImage__StyledImg",
                    componentId: "sc-1u0aeum-0"
                })(["display:block;height:auto;max-width:100%;"]),
                h = e => {
                    const {
                        src: t
                    } = e, n = Object(s.a)(e, ["src"]), a = l(t);
                    a && console.warn("VizExImage was given an unsafe src, defaulting to empty.");
                    return Object(r.jsx)(p, Object.assign({}, n, {
                        src: a ? void 0 : t
                    }))
                };
            h.propTypes = {
                src: i.a.string.isRequired
            };
            h.displayName = "VizExImage";
            t.a = h
        },
        gD8A: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "updateVisitorContext", (function() {
                return r
            }));
            var s = n("VYoM");

            function r({
                currentUrl: e,
                sessionId: t,
                threadId: n
            }) {
                return s.a.put(`livechat-public/v1/thread/visitor/${n}/currentUrl`, {
                    query: {
                        sessionId: t,
                        threadId: n
                    },
                    data: {
                        currentUrl: e
                    }
                })
            }
        },
        gQ5O: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n.d(t, "b", (function() {
                return r
            }));
            n.d(t, "c", (function() {
                return a
            }));
            const s = "filemanager/api",
                r = 10485760,
                a = 95
        },
        gygH: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "handleAttachmentUploadProgress", (function() {
                return a
            }));
            var s = n("gQ5O"),
                r = n("qgyf");
            const a = ({
                localId: e,
                threadId: t,
                loaded: n,
                total: a
            }) => i => {
                const o = n / a * s.c;
                i(Object(r.attachmentUploadProgress)({
                    localId: e,
                    threadId: t,
                    progress: o
                }))
            }
        },
        iao3: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("9Utk"),
                r = n.n(s),
                a = n("sZZm"),
                i = n("mlLV");
            const o = 1e3;
            n.d(t, "inputStagingEvent", (function() {
                return c
            }));
            n.d(t, "debouncedStagingEvent", (function() {
                return d
            }));
            const c = (e, t = !1) => {
                    Object(a.postExternalApiEvent)({
                        eventType: i.d,
                        payload: {
                            visitorMessageData: e,
                            isEmptyInput: t
                        }
                    })
                },
                d = r()(c, o)
        },
        iu1j: function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("VfuR"),
                a = n.n(r),
                i = n("Ktcs"),
                o = n("npjq"),
                c = n("sl/w"),
                d = n("OI0Z");
            const l = ["PNG", "GIF", "JPEG", "JPG"],
                u = e => {
                    const t = e.name.split("."),
                        n = t[t.length - 1] || "";
                    return -1 !== l.indexOf(n.toUpperCase())
                };
            var p = n("ughT");
            const h = e => {
                const t = Object(p.getFile)(e),
                    n = Object(p.getUploadProgress)(e);
                return t && n ? n / 100 * t.size : 0
            };
            var b = n("n6o2"),
                m = n("4hT6"),
                g = n("l6Ux"),
                f = n("g/uM");
            class j extends i.Component {
                constructor(e) {
                    super(e);
                    this.state = {
                        imageDataUrl: ""
                    }
                }
                componentDidMount() {
                    this.processImageFile(this.props.imageFile)
                }
                componentDidUpdate(e) {
                    this.props.imageFile !== e.imageFile && this.processImageFile(this.props.imageFile)
                }
                shouldComponentUpdate(e, t) {
                    return t.imageDataUrl !== this.state.imageDataUrl
                }
                processImageFile(e) {
                    const t = new FileReader;
                    t.addEventListener("load", () => {
                        this.setState({
                            imageDataUrl: t.result
                        })
                    });
                    t.readAsDataURL(e)
                }
                render() {
                    return Object(s.jsx)(f.a, {
                        src: this.state.imageDataUrl
                    })
                }
            }
            j.displayName = "ImageAttachmentPreview";
            j.propTypes = {
                imageFile: a.a.instanceOf(File).isRequired
            };
            var O = j,
                x = n("mKxs"),
                y = n("Q+dC"),
                v = n("9f1P"),
                C = n.n(v);
            const I = n("57op").h;
            var T = n("CR0J");
            const w = C.a.div.withConfig({
                    displayName: "VizExNanoProgress__Bar",
                    componentId: "thcgw1-0"
                })(["transition:width 0.2s ease-in-out;left:0;position:absolute;top:0;opacity:", ";width:", ";height:3px;z-index:", ";background-color:", ";"], ({
                    value: e
                }) => 0 === e ? 0 : 1, ({
                    value: e
                }) => e + "%", ({
                    zIndex: e
                }) => e, ({
                    theme: e
                }) => I(e)),
                S = {
                    zIndex: 10,
                    value: 0
                },
                k = e => {
                    const {
                        zIndex: t,
                        value: n,
                        theme: r
                    } = e, a = Object(y.a)(e, ["zIndex", "value", "theme"]);
                    return Object(s.jsx)(w, Object.assign({}, a, {
                        "aria-valuemax": 100,
                        "aria-valuemin": 0,
                        "aria-valuenow": n,
                        role: "progressbar",
                        zIndex: t,
                        value: n,
                        theme: r
                    }))
                };
            k.propTypes = {
                theme: T.a,
                value: a.a.number,
                zIndex: a.a.number
            };
            k.defaultProps = S;
            k.displayName = "VizExNanoProgress";
            var R = k,
                A = n("rF4n"),
                P = n("Jr27");
            class M extends i.Component {
                customFilePreview() {
                    const e = this.props.attachment,
                        t = Object(p.getFile)(e);
                    if (u(t)) return Object(s.jsx)(O, {
                        imageFile: t
                    })
                }
                fileInfo() {
                    return Object(g.isUploadCompleted)(this.props.attachment) ? Object(s.jsx)(d.a, {
                        value: Object(m.getFileSize)(this.props.attachment)
                    }) : Object(s.jsx)(c.a, {
                        message: "conversations-visitor-ui.stagedAttachment.uploadProgress",
                        options: {
                            uploadedBytes: o.a.formatSize(h(this.props.attachment), {
                                precision: 2,
                                strip_insignificant_zeroes: !0
                            }),
                            totalBytes: o.a.formatSize(Object(m.getFileSize)(this.props.attachment))
                        }
                    })
                }
                renderProgress() {
                    return Object(g.isUploadCompleted)(this.props.attachment) ? null : Object(s.jsx)(R, {
                        value: Object(p.getUploadProgress)(this.props.attachment)
                    })
                }
                render() {
                    return Object(s.jsxs)(A.default, {
                        processing: !Object(g.isUploadCompleted)(this.props.attachment),
                        fileName: Object(b.getFileName)(this.props.attachment),
                        fileInfo: this.fileInfo(),
                        preview: this.customFilePreview(),
                        style: {
                            minWidth: 220
                        },
                        children: [Object(s.jsx)(P.a, {
                            size: "xs",
                            onClick: this.props.onRemove
                        }), this.renderProgress()]
                    })
                }
            }
            M.displayName = "FileUpload";
            M.propTypes = {
                attachment: Object(x.a)("FileUploadRecord").isRequired,
                onRemove: a.a.func.isRequired
            };
            t.a = M
        },
        jM00: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("QYOI"),
                r = n("MBJP"),
                a = n("JGJA"),
                i = n("eEyY"),
                o = n("OhTC");
            const c = Object(r.a)([o.a, i.getCurrentThreadId], (e, t) => {
                const n = Object(a.a)(t, e);
                return n ? n.toList() : Object(s.List)()
            })
        },
        jVj2: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "removeAttachment", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.g, ({
                localId: e,
                threadId: t
            }) => ({
                localId: e,
                threadId: t
            }))
        },
        k3iI: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "updateSessionId", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("v+ge");
            const a = Object(s.b)(r.b, e => ({
                sessionId: e
            }))
        },
        "kMm/": function(e, t, n) {
            "use strict";
            var s = n("+KD7");
            const r = {
                    width: "auto",
                    minHeight: 36,
                    borderColor: s.h,
                    whitespace: "normal",
                    lineHeight: "1rem",
                    color: s.h
                },
                a = e => Object.assign({}, r, e);
            t.a = a
        },
        l6Ux: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "isUploadCompleted", (function() {
                return r
            }));
            var s = n("ughT");
            const r = e => -1 !== Object(s.getFileId)(e)
        },
        lJFu: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("UxsU"),
                r = n("rf4d"),
                a = n("Xvzl"),
                i = n("DdHT"),
                o = n("nf9S"),
                c = n("Hnia"),
                d = n("021p");
            const l = e => {
                Object(c.threadHistoryInvariant)(e);
                return Object(i.a)(d.d, Object(a.a)(o.isConversationalMessage), e => e && e.last())(e)
            };
            var u = n("nzmY"),
                p = n("0IK8");
            n.d(t, "buildCreatedThread", (function() {
                return h
            }));
            const h = ({
                channelDetails: e,
                messagesPageUri: t,
                threadHistory: n,
                threadId: a
            }) => Object(u.a)({
                channelDetails: e,
                currentUrl: t,
                latestMessageTimestamp: Object(p.getTimestamp)(l(n)),
                originalGenericChannelId: r.d,
                status: s.a.STARTED,
                threadId: a
            })
        },
        lMvc: function(e, t, n) {
            var s = n("uQvf"),
                r = "__lodash_hash_undefined__",
                a = Object.prototype.hasOwnProperty;

            function i(e) {
                var t = this.__data__;
                if (s) {
                    var n = t[e];
                    return n === r ? void 0 : n
                }
                return a.call(t, e) ? t[e] : void 0
            }
            e.exports = i
        },
        lOT2: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("MBJP"),
                r = n("LgEy"),
                a = n("8cLO"),
                i = n("647q"),
                o = n("3gKe");
            const c = Object(s.a)([i.getLatestWidgetData, o.getUserHasGivenConsentToProcess], (e, t) => Object(r.gdprConsentToProcessEnabled)(e) && !t && Object(a.gdprExplicitConsentRequired)(e))
        },
        lRdY: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.f, ({
                threadId: e
            }) => ({
                threadId: e
            }))
        },
        lTxV: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var s = n("JGJA");
            const r = Object(s.a)("currentUrl")
        },
        le4V: function(e, t, n) {
            "use strict";
            var s = n("MBJP"),
                r = n("DdHT"),
                a = n("ZqFO"),
                i = n("VvTX");
            const o = Object(r.a)(a.f, i.getGdprConsentToCommunicateEnabled);
            var c = n("647q");
            n.d(t, "a", (function() {
                return d
            }));
            const d = Object(s.a)([c.getLatestWidgetData], e => o(e))
        },
        lnDz: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "attachmentUploadComplete", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.b, ({
                localId: e,
                threadId: t,
                fileId: n,
                uploadedFile: s
            }) => ({
                localId: e,
                threadId: t,
                fileId: n,
                uploadedFile: s
            }))
        },
        "lw+E": function(e, t, n) {
            "use strict";
            var s = n("npjq"),
                r = n("JGJA"),
                a = n("Mx3c");
            const i = "avatar",
                o = "data",
                c = "email",
                d = "firstName",
                l = "id",
                u = "lastName",
                p = "senderType",
                h = "status";
            n.d(t, "a", (function() {
                return b
            }));
            n.d(t, "d", (function() {
                return m
            }));
            n.d(t, "e", (function() {
                return g
            }));
            n.d(t, "f", (function() {
                return f
            }));
            n.d(t, "g", (function() {
                return j
            }));
            n.d(t, "h", (function() {
                return O
            }));
            n.d(t, "b", (function() {
                return x
            }));
            n.d(t, "i", (function() {
                return y
            }));
            n.d(t, "c", (function() {
                return v
            }));
            const b = Object(r.a)(i),
                m = Object(r.a)(c),
                g = Object(r.a)(d),
                f = Object(r.a)(l),
                j = Object(r.a)(u),
                O = Object(r.a)(p),
                x = Object(r.a)(o),
                y = Object(r.a)(h),
                v = e => {
                    const t = g(e),
                        n = j(e),
                        r = m(e),
                        i = O(e);
                    return t && n ? `${t} ${n}` : t || (r || (i === a.VISITOR ? s.a.text("conversations-message-history.responder.unknownVisitorAvatar") : null))
                }
        },
        mMAp: function(e, t, n) {
            var s = n("LPlp");

            function r(e) {
                return s(this.__data__, e) > -1
            }
            e.exports = r
        },
        mNDY: function(e, t, n) {
            "use strict";
            var s = n("VfuR"),
                r = n.n(s),
                a = n("9C7g"),
                i = n("vIAU");
            const o = r.a.oneOf([i.a, i.b, i.c, i.e, i.d, i.f, i.g]).isRequired;
            t.a = Object(a.setOf)(o)
        },
        mriK: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            }));
            n.d(t, "e", (function() {
                return r
            }));
            n.d(t, "a", (function() {
                return a
            }));
            n.d(t, "d", (function() {
                return i
            }));
            n.d(t, "c", (function() {
                return o
            }));
            const s = "NETWORK_OFFLINE",
                r = "THREAD_HISTORY_FAILED",
                a = "CREATE_NEW_THREAD_FAILED",
                i = "SUBSCRIPTIONS_FAILED",
                o = "PUBSUB_FAILED"
        },
        n6o2: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getFileName", (function() {
                return a
            }));
            var s = n("JGJA"),
                r = n("ughT");
            const a = e => {
                const t = Object(r.getFile)(e);
                return t && Object(s.a)("name", t) || ""
            }
        },
        oLsC: function(e, t, n) {
            "use strict";
            var s = n("QYOI");
            const r = Object(s.Record)({
                avatar: null,
                email: null,
                firstName: null,
                id: null,
                lastName: null,
                senderType: null
            }, "Sender");
            t.a = r
        },
        p1fP: function(e, t, n) {
            var s = n("QhUm");

            function r(e) {
                var t = s(this, e).delete(e);
                this.size -= t ? 1 : 0;
                return t
            }
            e.exports = r
        },
        pDio: function(e, t, n) {
            var s = n("XiSY"),
                r = n("/TWJ");

            function a(e, t) {
                var n = r(e, t);
                return s(n) ? n : void 0
            }
            e.exports = a
        },
        pcz0: function(e, t, n) {
            "use strict";
            var s = n("+KD7"),
                r = n("0srx"),
                a = n("kMm/");
            const i = {
                    alignItems: "flex-start",
                    avatarWidth: "32px",
                    backgroundColor: s.l,
                    borderColor: s.a,
                    borderRadius: "4px",
                    borderWidth: "1px",
                    messageSpacing: "8px",
                    textColor: s.k,
                    fileAttachmentTheme: Object(r.a)(),
                    quickReplyTheme: Object(a.a)(),
                    widgetAccent: s.k,
                    headerBackgroundColor: s.r,
                    headerTextColor: s.q,
                    avatarBackgroundColor: s.a,
                    avatarBorderColor: s.a,
                    avatarTextColor: s.q
                },
                o = e => Object.assign({}, i, e);
            t.a = o
        },
        pdIa: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var s = n("sZZm"),
                r = n("mlLV"),
                a = n("Zui/"),
                i = n("JGJA");
            const o = ({
                    name: e,
                    multiSelect: t,
                    value: n
                }) => {
                    Object(s.postExternalApiEvent)({
                        eventType: r.e,
                        payload: {
                            name: e,
                            multiSelect: t,
                            value: n
                        }
                    })
                },
                c = e => {
                    const t = Object(i.a)("quickReplies", e),
                        n = Object(i.a)("allowMultiSelect", e),
                        s = {
                            name: a.i,
                            multiSelect: n,
                            value: Array.isArray(t) && t.length ? t.map(e => e.value) : []
                        };
                    o(s)
                }
        },
        qKTc: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = ["video/*", "audio/*", "application/json", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/msword", "application/pdf", "application/zip", "application/x-zip", "application/x-zip-compressed", "application/x-7z-compressed", "application/gzip", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.oasis.opendocument.graphics", "application/vnd.oasis.opendocument.presentation", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.text", "application/postscript", "image/gif", "image/jpeg", "image/jpg", "image/png", "image/tiff", "text/calendar", "text/css", "text/csv", "text/plain", "text/xml"]
        },
        qgyf: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "attachmentUploadProgress", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("OIId");
            const a = Object(s.b)(r.c, ({
                localId: e,
                threadId: t,
                progress: n
            }) => ({
                localId: e,
                threadId: t,
                progress: n
            }))
        },
        qwm9: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "createVisitorThread", (function() {
                return i
            }));
            var s = n("nDpY"),
                r = n.n(s),
                a = n("VYoM");

            function i({
                sessionId: e,
                messageId: t,
                hubspotUtk: n,
                messagesPageUri: s,
                visitorThreadInitialHistory: i,
                zoneId: o
            }) {
                return a.a.post("livechat-public/v1/thread/visitor", {
                    query: {
                        sessionId: e,
                        welcomeMessageId: t,
                        hubspotUtk: n,
                        portalId: r.a.get(),
                        expectedResponseType: "WRAPPER_V2",
                        zoneId: o
                    },
                    data: {
                        visitorThreadInitialHistory: i
                    },
                    headers: {
                        "X-HubSpot-Messages-Uri": s
                    }
                })
            }
        },
        r0yA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var s = n("MBJP"),
                r = n("JGJA"),
                a = n("mriK"),
                i = n("Pda3"),
                o = n("KXN9"),
                c = n("Ryja"),
                d = n("BxyF"),
                l = n("ZSXR");
            const u = e => e.clientData.isPubNubClientConnected,
                p = Object(r.a)("subscriptions"),
                h = Object(s.a)([l.a, c.getAsyncStagedThread, p, d.getAsyncPubSubClient, u], (e, t, n, s, r) => {
                    if (Object(i.isFailed)(e)) return a.e;
                    if (Object(i.isFailed)(t)) {
                        const e = Object(o.b)(t),
                            n = e && 418 === e.status;
                        if (!e || !n) return a.a
                    }
                    return Object(i.isFailed)(n) ? a.d : Object(i.isFailed)(s) ? a.c : r ? null : a.b
                })
        },
        rF4n: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("Q+dC"),
                r = n("QgEn"),
                a = n("9f1P"),
                i = n.n(a),
                o = n("57op");
            const c = o.b,
                d = o.a,
                l = o.i,
                u = () => "#f5f8fa",
                p = () => "#eaf0f6";
            var h = n("VfuR"),
                b = n.n(h),
                m = n("CR0J");
            const g = ({
                    theme: e
                }) => Object(a.css)(["color:", ";background-color:", ";"], c(e), d(e)),
                f = i.a.div.withConfig({
                    displayName: "VizExFileAttachment__AttachmentWrapper",
                    componentId: "sc-1m433mg-0"
                })(["display:flex;font-size:12px;padding:12px;padding-right:32px;border-radius:3px;position:relative;max-width:100%;flex-direction:row;background-color:", ";border:1px solid ", ";color:", ";", ";"], () => u(), () => p(), ({
                    theme: e
                }) => l(e), ({
                    theme: e,
                    processing: t
                }) => t && g({
                    theme: e
                })),
                j = i.a.div.withConfig({
                    displayName: "VizExFileAttachment__ContentWrapper",
                    componentId: "sc-1m433mg-1"
                })(["display:flex;position:relative;max-width:100%;> *:nth-child(2){padding-left:12px;}"]),
                O = i.a.div.withConfig({
                    displayName: "VizExFileAttachment__PreviewWrapper",
                    componentId: "sc-1m433mg-2"
                })(["overflow-y:hidden;overflow-x:hidden;align-items:center;display:flex;flex-basis:auto;justify-content:center;flex-shrink:0;font-size:32px;max-height:32px;width:32px;"]),
                x = i.a.div.withConfig({
                    displayName: "VizExFileAttachment__FileInfoWrapper",
                    componentId: "sc-1m433mg-3"
                })(["flex-grow:1;flex-shrink:0;flex-basis:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;@media all and (-ms-high-contrast:none){flex-basis:auto;max-width:100%;padding-right:12px;}"]),
                y = i.a.b.withConfig({
                    displayName: "VizExFileAttachment__FileName",
                    componentId: "sc-1m433mg-4"
                })(["font-weight:600;font-size:12px;line-height:12px;"]),
                v = i.a.div.withConfig({
                    displayName: "VizExFileAttachment__FileInfo",
                    componentId: "sc-1m433mg-5"
                })(["font-size:12px;line-height:12px;"]),
                C = e => {
                    const {
                        processing: t,
                        preview: n,
                        fileName: a,
                        fileInfo: i,
                        children: o,
                        theme: c
                    } = e, d = Object(s.a)(e, ["processing", "preview", "fileName", "fileInfo", "children", "theme"]);
                    return Object(r.jsxs)(f, Object.assign({}, d, {
                        theme: c,
                        processing: t,
                        children: [o, Object(r.jsxs)(j, {
                            children: [n && Object(r.jsx)(O, {
                                children: n
                            }), Object(r.jsxs)(x, {
                                children: [Object(r.jsx)(y, {
                                    children: a
                                }), Object(r.jsx)(v, {
                                    children: i
                                })]
                            })]
                        })]
                    }))
                };
            C.propTypes = {
                children: b.a.node,
                fileInfo: b.a.node,
                fileName: b.a.node,
                preview: b.a.node,
                processing: b.a.bool,
                theme: m.a
            };
            C.displayName = "VizExFileAttachment";
            t.default = C
        },
        sIRh: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "default", (function() {
                return m
            }));
            n.d(t, "publishEmailCaptureResponseMessage", (function() {
                return m
            }));
            var s = n("/fsP"),
                r = n("nS6h"),
                a = n("2Zef"),
                i = n("BvOu"),
                o = n("v0wH"),
                c = n("QYOI"),
                d = n("0U0A"),
                l = n("rf4d"),
                u = n("OxGf"),
                p = n("CdQ/"),
                h = n("6O34"),
                b = n("0G/n");
            const m = ({
                channel: e,
                email: t,
                threadId: n
            }) => (m, g) => {
                const f = a.SYSTEM_SENDER,
                    j = {
                        type: b.a,
                        value: Object(p.getMessagesUtk)() || ""
                    },
                    O = Object(c.List)([{
                        deliveryIdentifier: j
                    }]),
                    x = new s.a({
                        id: Object(i.generateUuid)(),
                        text: t,
                        sender: {
                            "@type": f
                        },
                        status: {
                            messageStatus: o.b
                        },
                        channelInstanceId: Object(d.getChannelInstanceId)(g()),
                        senders: Object(h.a)(O),
                        genericChannelId: l.d,
                        direction: u.a
                    });
                m(Object(r.publishMessageToConversation)({
                    channel: e,
                    message: x,
                    threadId: n
                }))
            }
        },
        sWFM: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getMessageId", (function() {
                return a
            }));
            var s = n("MBJP"),
                r = n("647q");
            const a = Object(s.a)([r.getLatestWidgetData], e => e.message.id)
        },
        tlSg: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "sendConsentToCommunicate", (function() {
                return o
            }));
            var s = n("nDpY"),
                r = n.n(s),
                a = n("VYoM");
            const i = "livechat-public/v1/privacy/consentToCommunicate";

            function o({
                sessionId: e,
                hubspotUtk: t,
                threadId: n
            }) {
                return a.a.put(i, {
                    query: {
                        sessionId: e,
                        hubspotUtk: t,
                        threadId: n,
                        portalId: r.a.get()
                    }
                })
            }
        },
        uIOU: function(e, t, n) {
            var s = n("QG41"),
                r = n("6upE"),
                a = n("lMvc"),
                i = n("XXaZ"),
                o = n("KLi6");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                this.clear();
                for (; ++t < n;) {
                    var s = e[t];
                    this.set(s[0], s[1])
                }
            }
            c.prototype.clear = s;
            c.prototype.delete = r;
            c.prototype.get = a;
            c.prototype.has = i;
            c.prototype.set = o;
            e.exports = c
        },
        uQvf: function(e, t, n) {
            var s = n("pDio")(Object, "create");
            e.exports = s
        },
        "uk/S": function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "sendConsentToProcess", (function() {
                return o
            }));
            var s = n("nDpY"),
                r = n.n(s),
                a = n("VYoM");
            const i = "livechat-public/v1/privacy/consentToProcess";

            function o({
                sessionId: e,
                hubspotUtk: t,
                welcomeMessageId: n
            }) {
                return a.a.put(i, {
                    query: {
                        sessionId: e,
                        hubspotUtk: t,
                        welcomeMessageId: n,
                        portalId: r.a.get()
                    }
                })
            }
        },
        vIAU: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n.d(t, "b", (function() {
                return r
            }));
            n.d(t, "e", (function() {
                return a
            }));
            n.d(t, "c", (function() {
                return i
            }));
            n.d(t, "d", (function() {
                return o
            }));
            n.d(t, "f", (function() {
                return c
            }));
            n.d(t, "g", (function() {
                return d
            }));
            const s = "FIRST",
                r = "FIRST_IN_GROUP",
                a = "LAST_IN_GROUP",
                i = "LAST",
                o = "LAST_COMMON_MESSAGE",
                c = "LAST_NON_FWD_MESSAGE",
                d = "LAST_READ_RECEIPT_MESSAGE"
        },
        vVnP: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            }));
            var s = n("+KD7"),
                r = n("Ktcs"),
                a = n("yCEM"),
                i = n("pcz0");
            const o = {
                    [a.b]: Object(i.a)(),
                    [a.a]: Object(i.a)(),
                    [a.c]: Object(i.a)({
                        backgroundColor: s.c,
                        borderColor: s.d,
                        alignItems: "flex-end"
                    })
                },
                c = Object(r.createContext)(o);
            t.a = c
        },
        vwA6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("Ut5p"),
                r = n("xZ3y");
            const a = Object(s.b)(r.USER_INPUT_ON_FOCUS, e => ({
                widgetInputIsOnFocus: e
            }));

            function i(e) {
                return t => {
                    t(a(e))
                }
            }
        },
        "w/SM": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            const s = 1024
        },
        w1Zi: function(e, t, n) {
            "use strict";
            var s = n("QgEn"),
                r = n("1HZx"),
                a = n("Syy6"),
                i = n.n(a),
                o = n("VfuR"),
                c = n.n(o),
                d = n("Ktcs"),
                l = n("QVu+"),
                u = n("2gT5"),
                p = n("mKxs"),
                h = n("gQ5O"),
                b = n("QYOI"),
                m = n("8f3s"),
                g = n("qKTc"),
                f = n("iao3");
            class j extends d.PureComponent {
                constructor(e) {
                    super(e);
                    this.publishTypingMessage = i()(this.props.publishTypingMessage, l.a, {
                        leading: !0,
                        trailing: !1
                    });
                    this.onChatInputChanged = this.onChatInputChanged.bind(this);
                    this.onPublishMessage = this.onPublishMessage.bind(this);
                    this.onSelectAttachmentFiles = this.onSelectAttachmentFiles.bind(this);
                    this.onRemoveAttachment = this.onRemoveAttachment.bind(this);
                    this.inputStagingEvent = f.debouncedStagingEvent
                }
                onChatInputChanged(e) {
                    const {
                        currentConversation: t,
                        disablePublish: n,
                        shouldSendInputStagingEvent: s,
                        showInitialMessageBubble: r,
                        setMessageEditorStagingText: a
                    } = this.props;
                    a(e);
                    n || "" === e || this.publishTypingMessage({
                        thread: t
                    });
                    s && this.inputStagingEvent(e, !1);
                    r && this.props.closeInitialMessageBubble()
                }
                onPublishMessage({
                    text: e,
                    richText: t,
                    quickReply: n
                }) {
                    const {
                        messagesPageUri: s,
                        publishMessage: r,
                        stagedAttachments: a,
                        removeMessageEditorStagingText: i
                    } = this.props;
                    this.publishTypingMessage.cancel();
                    r({
                        text: e,
                        richText: t,
                        quickReply: n,
                        url: s,
                        fileAttachment: Object(m.a)(a)
                    });
                    i()
                }
                onSelectAttachmentFiles({
                    files: e
                }) {
                    if (!e || !e.length) return;
                    const {
                        onSelectAttachmentFile: t,
                        currentConversation: n
                    } = this.props;
                    t({
                        file: e.item(0),
                        thread: n
                    })
                }
                onRemoveAttachment({
                    attachment: e
                }) {
                    const {
                        currentConversation: t,
                        onRemoveAttachment: n
                    } = this.props;
                    n({
                        attachment: e,
                        thread: t
                    })
                }
                render() {
                    const {
                        coloring: e,
                        currentConversation: t,
                        disablePublish: n,
                        disableTextInput: a,
                        isOnFocus: i,
                        mobile: o,
                        networkOffline: c,
                        shouldDisableInitialInputFocus: d,
                        shouldHideAttachmentButton: l,
                        shouldSendInputStagingEvent: p,
                        showingHsBranding: b,
                        stagedAttachments: m,
                        toggleOnAndOffInputFocus: f,
                        stagedMessage: j,
                        showQuickReplyPlaceholder: O,
                        canUploadAttachments: x
                    } = this.props;
                    return Object(s.jsx)(r.a, {
                        coloring: e,
                        chatInputChanged: this.onChatInputChanged,
                        disabled: a,
                        disablePublish: n,
                        isOnFocus: i,
                        maxAttachmentFileSize: h.b,
                        mobile: o,
                        networkOffline: c,
                        onSelectAttachmentFiles: this.onSelectAttachmentFiles,
                        onRemoveAttachment: this.onRemoveAttachment,
                        publishMessage: this.onPublishMessage,
                        shouldHideAttachmentButton: l,
                        shouldDisableInitialInputFocus: d,
                        showingHsBranding: b,
                        stagedAttachments: m,
                        stagedMessageEditorText: j,
                        supportsAttachments: Object(u.isPersistedThread)(t),
                        toggleOnAndOffInputFocus: f,
                        fileTypes: g.a,
                        showQuickReplyPlaceholder: O,
                        shouldSendInputStagingEvent: p,
                        inputStaging: this.inputStagingEvent,
                        canUploadAttachments: x
                    })
                }
            }
            j.displayName = "MessageEditorWrapper";
            j.propTypes = {
                canUploadAttachments: c.a.bool.isRequired,
                closeInitialMessageBubble: c.a.func.isRequired,
                coloring: Object(p.a)("ColoringRecord").isRequired,
                currentConversation: Object(p.a)("Thread"),
                disablePublish: c.a.bool.isRequired,
                disableTextInput: c.a.bool.isRequired,
                isOnFocus: c.a.bool.isRequired,
                messagesPageUri: c.a.string,
                mobile: c.a.bool,
                networkOffline: c.a.bool.isRequired,
                onRemoveAttachment: c.a.func.isRequired,
                onSelectAttachmentFile: c.a.func.isRequired,
                publishMessage: c.a.func.isRequired,
                publishTypingMessage: c.a.func.isRequired,
                removeMessageEditorStagingText: c.a.func.isRequired,
                setMessageEditorStagingText: c.a.func.isRequired,
                shouldDisableInitialInputFocus: c.a.bool.isRequired,
                shouldHideAttachmentButton: c.a.bool.isRequired,
                shouldSendInputStagingEvent: c.a.bool.isRequired,
                showInitialMessageBubble: c.a.bool.isRequired,
                showQuickReplyPlaceholder: c.a.bool.isRequired,
                showingHsBranding: c.a.bool.isRequired,
                stagedAttachments: c.a.instanceOf(b.List),
                stagedMessage: c.a.string,
                toggleOnAndOffInputFocus: c.a.func
            };
            t.a = j
        },
        wID2: function(e, t, n) {
            var s = n("QhUm");

            function r(e) {
                return s(this, e).has(e)
            }
            e.exports = r
        },
        wn0x: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getMessageId", (function() {
                return i
            }));
            var s = n("MBJP"),
                r = n("JGJA"),
                a = n("OmJX");
            const i = Object(s.a)(a.a, Object(r.a)("id"))
        },
        wy0V: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var s = n("Ut5p"),
                r = n("cXEp");
            const a = Object(s.b)(r.b, ({
                currentUrl: e,
                threadId: t
            }) => ({
                currentUrl: e,
                threadId: t
            }))
        },
        x1PU: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var s = n("b9/n"),
                r = n("0GyJ"),
                a = n("KO+H"),
                i = n("GcWH"),
                o = n("V1/C"),
                c = n("6OYF"),
                d = n("tY0N"),
                l = n("K7Yy"),
                u = n("nguO");
            const p = {
                ACTIVELY_PUBLISHING: u.a,
                COMMON_MESSAGE: r.a,
                DATE_MESSAGE: s.a,
                EMAIL_CAPTURE_PROMPT: a.a,
                FAILED_TO_PUBLISH: u.b,
                INITIAL_MESSAGE: i.a,
                OFFICE_HOURS: o.a,
                TYPICAL_RESPONSE_TIME: c.a,
                TYPING: d.a,
                FEEDBACK_SURVEY: l.a
            }
        },
        x32n: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n("QYOI"),
                r = n("BW+T"),
                a = n.n(r),
                i = n("0IK8"),
                o = n("b9/n");
            var c = Object(s.Record)({
                [o.b]: o.a,
                timestamp: null,
                id: null
            }, "DateMessage");
            const d = (e, t) => {
                    const n = new Date(Object(i.getTimestamp)(e)),
                        s = new Date(Object(i.getTimestamp)(t));
                    return n.getFullYear() !== s.getFullYear() || n.getMonth() !== s.getMonth() || n.getDate() !== s.getDate()
                },
                l = (e, t, n) => !(!t && !n) && Boolean(Object(i.getTimestamp)(e) && (!t || d(t, e)));
            var u = n("eoCu");
            const p = a()(c, ({
                    id: e
                }) => e),
                h = (e, t = !0, n = (() => !0)) => e.reduce((s, r, a) => {
                    const o = a > 0 ? e.get(a - 1) : void 0;
                    l(r, o, t) && n(r) && (s = s.push(p({
                        id: Object(u.a)(r) + "-date",
                        timestamp: Object(i.getTimestamp)(r)
                    })));
                    return s.push(r)
                }, Object(s.List)());
            n.d(t, "insertDateMessagesWithHistoryConfig", (function() {
                return b
            }));
            const b = (e, t = {}, n = !0) => h(e, n, e => {
                const n = Object(i.getType)(e);
                return t[n]
            })
        },
        xAl4: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "uploadAttachmentClient", (function() {
                return r
            }));
            var s = n("0JoJ");
            const r = ({
                formData: e,
                uploadUrl: t,
                onProgress: n = (() => {})
            }) => s.a.post(t, {
                headers: {
                    "content-type": !1
                },
                data: e,
                timeout: 0,
                withXhr: e => {
                    e.upload.addEventListener("progress", n, !1)
                }
            })
        },
        xP7N: function(e, t) {
            function n(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
            e.exports = n
        },
        xePV: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var s = n("JGJA");
            const r = Object(s.a)("fileUploadsErrors")
        },
        yCEM: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            n.d(t, "b", (function() {
                return r
            }));
            n.d(t, "c", (function() {
                return a
            }));
            const s = "agent",
                r = "default",
                a = "visitor"
        },
        yDuE: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "getChannelInstanceIdFromCurrentThreadHistory", (function() {
                return a
            }));
            var s = n("MBJP"),
                r = n("ZSXR");
            const a = Object(s.a)(r.a, e => e.data.messages.results.toList().filter(e => !(null === e.channelInstanceId || void 0 === e.channelInstanceId)).sort((e, t) => e.timeStamp - t.timeStamp).last().channelInstanceId)
        },
        z4Bj: function(e, t, n) {
            "use strict";

            function s() {
                let e = () => {},
                    t = () => {};
                return {
                    promise: new Promise((n, s) => {
                        e = n;
                        t = s
                    }),
                    resolve: e,
                    reject: t
                }
            }
            t.a = s
        },
        z96q: function(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "sendVisitorEmailAddress", (function() {
                return r
            }));
            var s = n("VYoM");

            function r({
                threadId: e,
                email: t,
                sessionId: n,
                hubspotUtk: r
            }) {
                return s.a.post("livechat-public/v1/visitor/public", {
                    query: {
                        threadId: e,
                        email: t,
                        sessionId: n,
                        hubspotUtk: r
                    }
                })
            }
        },
        zB5l: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var s = n("MBJP"),
                r = n("KSjU"),
                a = n("xk3e");
            const i = Object(s.a)([a.getAssignedResponderInWidget], e => Boolean(e && Object(r.a)(e)))
        },
        zs6M: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var s = n("KrP/"),
                r = n("Ut5p"),
                a = n("Ux+X");
            const i = Object(r.b)(s.e);

            function o() {
                return e => {
                    e(Object(a.trackInteraction)("widget-interaction", {
                        action: "close consent to process"
                    }));
                    e(i())
                }
            }
        }
    }
]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-visitor-ui/static-1.17705/threadview-utv.js.map