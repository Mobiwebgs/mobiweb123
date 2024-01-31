(window.webpackJsonp = window.webpackJsonp || []).push([
    ["CurrentView-ThreadView"], {
        "/kPb": function(e, t, n) {
            "use strict";
            var i = n("Q+dC"),
                s = n("QgEn"),
                a = n("9f1P"),
                r = n.n(a),
                c = n("VfuR"),
                d = n.n(c),
                o = n("NdCN"),
                l = n("JxxT"),
                p = n("38AR");
            const u = r.a.div.withConfig({
                    displayName: "DragAndDropUploadOverlay__Container",
                    componentId: "sc-86ys52-0"
                })(["position:absolute;width:100%;", ";transition:background 0.2s;z-index:99;border-bottom-left-radius:", "px;border-bottom-right-radius:", "px;height:calc(100% - ", "px);display:flex;justify-content:center;align-items:center;pointer-events:none;"], ({
                    isOver: e
                }) => e && "background-color: rgba(45, 62, 80, 0.3);\n  backdrop-filter: blur(2px);", p.a, p.a, l.d),
                b = e => {
                    let {
                        isOver: t
                    } = e, n = Object(i.a)(e, ["isOver"]);
                    return Object(s.jsx)(u, Object.assign({
                        isOver: t
                    }, n))
                };
            b.displayName = "DragAndDropUploadOverlay";
            b.propTypes = {
                isOver: d.a.bool.isRequired
            };
            var h = b,
                g = n("Ktcs");
            const j = r.a.div.withConfig({
                    displayName: "UnifiedThreadViewWrapperWithDragUpload__UnifiedThreadViewWrapper",
                    componentId: "s4ctvh-0"
                })(["display:flex;flex-direction:column;height:100%;"]),
                f = ({
                    children: e,
                    onDropFiles: t,
                    disabled: n
                }) => {
                    const a = Object(g.useCallback)(t => {
                        let {
                            isOver: n
                        } = t, a = Object(i.a)(t, ["isOver"]);
                        return Object(s.jsxs)(j, Object.assign({
                            "data-test-id": "UnifiedThreadViewWrapper-testid"
                        }, a, {
                            children: [e, Object(s.jsx)(h, {
                                isOver: n
                            })]
                        }))
                    }, [e]);
                    return Object(s.jsx)(o.a, {
                        onDropFiles: t,
                        disabled: n,
                        children: a
                    })
                };
            f.displayName = "UnifiedThreadViewWrapperWithDragUpload";
            f.propTypes = {
                children: d.a.node.isRequired,
                disabled: d.a.bool.isRequired,
                onDropFiles: d.a.func.isRequired
            };
            t.a = f
        },
        NdCN: function(e, t, n) {
            "use strict";
            var i = n("Ktcs"),
                s = n("VfuR"),
                a = n.n(s);
            const r = e => {
                    e.preventDefault();
                    e.stopPropagation()
                },
                c = e => e.dataTransfer && Array.isArray(e.dataTransfer.types) && e.dataTransfer.types.length && e.dataTransfer.types.includes("Files"),
                d = ({
                    children: e,
                    disabled: t,
                    ignoreDropWhenDefaultPrevented: n,
                    onDropFiles: s
                }) => {
                    const [a, d] = Object(i.useState)(!1), o = Object(i.useRef)(null), l = Object(i.useCallback)(e => {
                        e.preventDefault();
                        o.current = e.target;
                        c(e) && d(!0)
                    }, []), p = Object(i.useCallback)(e => {
                        e.preventDefault();
                        !c(e) && e.dataTransfer && (e.dataTransfer.effectAllowed = "none")
                    }, []), u = Object(i.useCallback)(r, []), b = Object(i.useCallback)(e => {
                        if (o.current === e.target) {
                            o.current = null;
                            d(!1)
                        }
                    }, []), h = Object(i.useCallback)(e => {
                        d(!1);
                        if (n && e.isDefaultPrevented()) return;
                        const t = e.dataTransfer ? e.dataTransfer.files : [];
                        if (t && t.length) {
                            e.preventDefault();
                            s(t)
                        }
                    }, [s, n]);
                    return e(t ? {
                        isOver: !1,
                        onDragOver: r,
                        onDrop: r
                    } : {
                        isOver: a,
                        onDrop: h,
                        onDragEnter: l,
                        onDragOver: u,
                        onDragLeave: b,
                        onDragStart: p
                    })
                };
            d.displayName = "AttachmentUploadDragAndDropWrapper";
            d.propTypes = {
                children: a.a.func.isRequired,
                disabled: a.a.bool.isRequired,
                ignoreDropWhenDefaultPrevented: a.a.bool.isRequired,
                onDropFiles: a.a.func.isRequired
            };
            d.defaultProps = {
                disabled: !1,
                ignoreDropWhenDefaultPrevented: !0
            };
            t.a = d
        },
        twxQ: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("QgEn"),
                s = n("19qb"),
                a = n("JWgK"),
                r = n("647q"),
                c = n("xk3e"),
                d = n("Ut5p"),
                o = n("xZ3y"),
                l = n("Ux+X");
            const p = Object(d.b)(o.CLICKED_MEETINGS_LINK);

            function u() {
                return e => {
                    e(p());
                    e(Object(l.trackInteraction)("widget-interaction", {
                        action: "clicked meeting link"
                    }))
                }
            }
            var b = n("sl/w"),
                h = n("VfuR"),
                g = n.n(h),
                j = n("Ktcs"),
                f = n("9f1P"),
                O = n.n(f),
                v = n("P7jJ"),
                x = n("KSjU"),
                k = n("mKxs");
            const w = e => Object(i.jsxs)("svg", Object.assign({
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e, {
                children: [Object(i.jsx)("defs", {
                    children: Object(i.jsx)("path", {
                        d: "M3.4 22c-.22 0-.4-.192-.4-.429V9h18v6.898l-.097.103h-4.299c-.884 0-1.6.768-1.6 1.715v4.18l-.097.104H3.4zM17.923 3.31V1.241c0-.686-.569-1.241-1.27-1.241-.7 0-1.268.555-1.268 1.241v2.07h-6.77V1.24C8.615.555 8.047 0 7.346 0c-.7 0-1.27.555-1.27 1.241v2.07H3.963C2.328 3.31 1 4.61 1 6.206v14.896C1 22.701 2.328 24 3.962 24h11.846c.336 0 .659-.13.897-.363l5.924-5.793c.237-.234.371-.55.371-.878V6.206c0-1.596-1.328-2.896-2.962-2.896h-2.115zM8 11H6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1m3 0c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1h-2zm5 4h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1m-8 1H6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1m5 0h-2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1",
                        id: "date__a"
                    })
                }), Object(i.jsx)("use", {
                    xlinkHref: "#date__a",
                    fillRule: "evenodd"
                })]
            }));
            w.displayName = "SVGDate";
            var D = w,
                m = n("PY2H");
            const y = {
                    assignedResponder: Object(k.a)("Responder"),
                    clickedMeetingsLink: g.a.func.isRequired,
                    shouldShowMeetingsLink: g.a.bool.isRequired
                },
                C = O.a.div.withConfig({
                    displayName: "MeetingsLinkButton__WidgetMeetingsLinkButtonWrapper",
                    componentId: "sc-5lid1l-0"
                })(["padding-left:16px;padding-right:16px;display:flex;flex-direction:column;flex-shrink:0;height:44px;align-items:center;justify-content:center;"]);
            class T extends j.Component {
                constructor(e) {
                    super(e);
                    this.handleOnClick = this.handleOnClick.bind(this)
                }
                handleOnClick() {
                    const {
                        clickedMeetingsLink: e,
                        assignedResponder: t
                    } = this.props, n = Object(x.a)(t);
                    window.open(n + "?fromMessages=true", "_blank");
                    e()
                }
                render() {
                    const {
                        shouldShowMeetingsLink: e
                    } = this.props;
                    return e ? Object(i.jsx)(C, {
                        children: Object(i.jsxs)(m.a, {
                            className: "align-center justify-center",
                            onClick: this.handleOnClick,
                            children: [Object(i.jsx)(v.a, {
                                icon: Object(i.jsx)(D, {}),
                                className: "m-right-1"
                            }), Object(i.jsx)(b.a, {
                                message: "conversations-visitor-ui.default.meetingsLinkText"
                            })]
                        })
                    }) : null
                }
            }
            T.displayName = "MeetingsLinkButton";
            T.propTypes = y;
            var R = T,
                N = n("zB5l"),
                V = Object(s.connect)(e => ({
                    assignedResponder: Object(c.getAssignedResponderInWidget)(e),
                    shouldShowMeetingsLink: Object(N.a)(e),
                    widgetData: Object(r.getLatestWidgetData)(e)
                }), {
                    clickedMeetingsLink: u
                })(R),
                W = n("k09d"),
                L = n("/kPb"),
                M = n("Apky"),
                P = n("2gT5"),
                _ = n("S055"),
                q = n("V2EP");
            const U = () => {
                const e = Object(s.useSelector)(e => !Object(P.isPersistedThread)(Object(W.a)(e)) || Object(_.a)(e) || !Object(a.a)(e, {
                        thread: Object(W.a)(e)
                    })),
                    t = Object(s.useSelector)(e => Object(W.a)(e)),
                    n = Object(s.useDispatch)(),
                    r = e => {
                        if (!e || !e.length) return;
                        const i = e[0];
                        n(Object(q.a)({
                            file: i,
                            thread: t
                        }))
                    };
                return Object(i.jsxs)(L.a, {
                    onDropFiles: r,
                    disabled: e,
                    children: [Object(i.jsx)(V, {}), Object(i.jsx)(M.default, {})]
                })
            };
            U.displayName = "ThreadView";
            t.default = U
        }
    }
]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-visitor-ui/static-1.17679/CurrentView-ThreadView.js.map