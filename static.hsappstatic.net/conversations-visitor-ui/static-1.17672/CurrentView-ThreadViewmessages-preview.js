(window.webpackJsonp = window.webpackJsonp || []).push([
    ["CurrentView-ThreadView~messages-preview"], {
        "5C1Q": function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s("F+zP");
            const n = () => {
                window.hubspot || (window.hubspot = {});
                const e = window.hubspot;
                e.deviceId || (e.deviceId = Object(r.m)());
                return e.deviceId
            };
            var a = s("LSdF"),
                i = s("LZPL"),
                o = s.n(i);
            s.d(t, "getTrackedSignupUrl", (function() {
                return u
            }));
            s.d(t, "getTrackedIntermediateUrl", (function() {
                return c
            }));

            function u({
                flow: e,
                viralLinkType: t,
                environment: s = o.a.getShort(),
                additionalParams: r
            }) {
                return Object(a.b)(e, t, n(), "qa" === s, r)
            }

            function c({
                viralLinkType: e,
                additionalParams: t,
                portalId: s,
                environment: r,
                redirectPage: i
            }) {
                const o = n();
                return Object(a.a)({
                    viralLinkType: e,
                    portalId: s,
                    deviceId: o,
                    environment: r,
                    redirectPage: Object(a.c)(i, e, o, t)
                })
            }
        },
        "6gho": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));
            s.d(t, "b", (function() {
                return n
            }));
            const r = "/embedded-viral-link/",
                n = {
                    SET_IFRAME_HEIGHT: "SET_IFRAME_HEIGHT"
                }
        },
        LSdF: function(e, t, s) {
            "use strict";
            var r = s("LZPL"),
                n = s.n(r),
                a = s("stwP");
            let i;
            ! function(e) {
                e.Wordpress = "wordpress";
                e.Wpforms = "wpforms";
                e.Shopify = "shopify";
                e.Typeform = "typeform"
            }(i || (i = {}));
            class o {
                static create(e, t) {
                    return new o(e, t)
                }
                constructor(e, t) {
                    this.anchor = e;
                    this.generator = t;
                    this.process()
                }
                getSignupType() {
                    const e = this.anchor.dataset.signupType;
                    if (!e || !this.generator.isValidSignupType(e)) {
                        this.generator.log("Anchor %o contains an invalid signup type %s. Default to " + a.a.Crm, this.anchor, e);
                        return a.a.Crm
                    }
                    return e
                }
                getSignupQuery() {
                    const e = this.anchor.dataset.signupQuery;
                    return e ? e.split("&").reduce((e, t) => {
                        const s = t.split("=");
                        e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
                        return e
                    }, {}) : {}
                }
                process() {
                    if (!this.anchor.dataset.processed) {
                        this.anchor.setAttribute("href", this.generator.getSignupUrl(this.getSignupType(), this.getSignupQuery()));
                        this.anchor.dataset.processed = ""
                    }
                }
            }
            const u = {
                    url: () => "signup-hubspot/academy",
                    query: () => ({})
                },
                c = {
                    url: () => "signup-hubspot/academy-embedded",
                    query: () => ({})
                },
                p = {
                    url: () => "signup-hubspot/asset-provider",
                    query: () => ({})
                },
                l = {
                    url: () => "signup-hubspot/classroom-training",
                    query: () => ({})
                },
                d = {
                    url: () => "signup-hubspot/cms-developers",
                    query: () => ({})
                },
                g = {
                    url: () => "signup-hubspot/cms-free",
                    query: () => ({})
                },
                h = {
                    url: () => "signup-hubspot/connect",
                    query: () => ({})
                },
                m = {
                    url: () => "signup-hubspot/chatspot",
                    query: () => ({})
                },
                b = {
                    url: () => "signup-hubspot/crm",
                    query: () => ({})
                },
                y = {
                    url: () => "signup-hubspot/developers",
                    query: () => ({})
                },
                f = {
                    url: () => "signup-hubspot/directory-listing",
                    query: () => ({})
                },
                v = {
                    url: () => "signup/fb-crm",
                    query: () => ({})
                },
                S = {
                    url: () => "signup-hubspot/hubspot-for-startups",
                    query: () => ({})
                },
                C = {
                    url: () => "signup-hubspot/hubspot-partners",
                    query: () => ({})
                },
                k = {
                    url: () => "signup-hubspot/integrations",
                    query: () => ({})
                },
                w = {
                    url: () => "signup-hubspot/marketing",
                    query: () => ({})
                },
                q = {
                    url: () => "signup-hubspot/purchase",
                    query: () => ({})
                },
                I = {
                    url: () => "signup-hubspot/sales",
                    query: () => ({})
                },
                P = {
                    url: () => "signup-hubspot/service",
                    query: () => ({})
                },
                T = {
                    url: () => "signup-hubspot/integrations",
                    query: () => ({
                        integration: "shopify"
                    })
                },
                A = {
                    url: () => "signup-hubspot/solutions-provider",
                    query: () => ({})
                },
                O = {
                    url: () => "signup/standalone-cms-partner",
                    query: () => ({})
                },
                L = {
                    url: () => "signup-hubspot/trial",
                    query: () => ({})
                },
                F = {
                    url: () => "signup-hubspot/integrations",
                    query: () => ({
                        integration: "typeform"
                    })
                },
                E = {
                    url: () => "signup-hubspot/integrations",
                    query: () => ({
                        integration: "wordpress"
                    })
                },
                _ = {
                    url: () => "signup-hubspot/integrations",
                    query: () => ({
                        integration: "wpforms"
                    })
                };
            class U {
                constructor(e) {
                    this.searchParams = Object.entries(e)
                }
                toString() {
                    return this.searchParams.map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`).join("&")
                }
            }
            const $ = () => URLSearchParams || U,
                j = {
                    debug: !1
                };
            class M {
                static setConfig(e) {
                    M.config = Object.assign({}, j, {}, e)
                }
                static getInstance() {
                    if (!M.instance) {
                        M.instance = new M;
                        M.instance.bootstrap()
                    }
                    return M.instance
                }
                constructor(e = a.a.Crm, t = {
                    query: {},
                    env: "prod"
                }) {
                    this.decorators = {
                        [a.a.Academy]: u,
                        [a.a.AcademyEmbedded]: c,
                        [a.a.AssetProvider]: p,
                        [a.a.ClassroomTraining]: l,
                        [a.a.CmsDevelopers]: d,
                        [a.a.CmsFree]: g,
                        [a.a.Connect]: h,
                        [a.a.ChatSpot]: m,
                        [a.a.Crm]: b,
                        [a.a.Developers]: y,
                        [a.a.DirectoryListing]: f,
                        [a.a.HubspotForStartups]: S,
                        [a.a.HubSpotPartners]: C,
                        [a.a.Integrations]: k,
                        [a.a.Marketing]: w,
                        [a.a.Purchase]: q,
                        [a.a.Sales]: I,
                        [a.a.Service]: P,
                        [a.a.StandaloneCmsPartner]: O,
                        [a.a.FbCrm]: v,
                        [a.a.SolutionsProvider]: A,
                        [a.a.Trial]: L,
                        [i.Wordpress]: E,
                        [i.Wpforms]: _,
                        [i.Shopify]: T,
                        [i.Typeform]: F
                    };
                    this.processed = !1;
                    this.validSignupTypes = [...Object.values(a.a), ...Object.values(i)];
                    this.flowOrIntegration = e;
                    this.options = t
                }
                isValidSignupType(e) {
                    return this.validSignupTypes.includes(e)
                }
                getSignupUrl(e = this.flowOrIntegration, t = this.options.query) {
                    const s = `https://${this.options.isLocal?"local":"app"}.${"qa"===this.options.env?"hubspotqa":"hubspot"}.com`;
                    let r = s + "/signup-hubspot";
                    if (e && this.isValidSignupType(e)) {
                        r = `${s}/signup/${e}`;
                        if (e in this.decorators) {
                            const n = this.decorators[e];
                            r = `${s}/${n.url()}`;
                            t = Object.assign({}, t, {}, n.query())
                        }
                    }
                    const n = new($())(t).toString();
                    return `${r}${n&&"?"+n||""}`
                }
                log(e, ...t) {
                    M.config.debug && console.info("[SignupUrlGenerator] " + e, ...t)
                }
                createAnchor(e) {
                    return o.create(e, this)
                }
                getAnchors() {
                    return document.querySelectorAll(M.ANCHOR_SELECTOR)
                }
                processAnchors() {
                    this.processed || this.getAnchors().forEach(e => {
                        this.createAnchor(e)
                    });
                    this.processed = !0
                }
                getUrl() {
                    return this.getSignupUrl()
                }
                bootstrap() {
                    window.addEventListener("DOMContentLoaded", () => {
                        this.processAnchors()
                    })
                }
            }
            M.ANCHOR_SELECTOR = "a[data-signup-type]";
            M.instance = null;
            M.config = j;
            var R = s("6gho");
            const D = () => window.location.href || null,
                H = () => {
                    const e = window.hubspot;
                    return e && e.utils && e.utils.isQA && e.utils.isQA()
                };
            s.d(t, "b", (function() {
                return z
            }));
            s.d(t, "c", (function() {
                return B
            }));
            s.d(t, "a", (function() {
                return N
            }));
            s.d(t, "d", (function() {
                return Y
            }));
            const Q = () => {
                    const e = D();
                    if (!e) return !1;
                    const t = new URL(e).hostname;
                    return /hsformsqa\.com/.test(t)
                },
                V = () => {
                    const e = H();
                    return Q() || e
                },
                W = () => n.a.isQa() || V();

            function G(e = W()) {
                return `https://api.hubspot${e?"qa":""}.com`
            }

            function x(e = W(), t = !1) {
                return `https://${t?"local":"app"}.hubspot${e?"qa":""}.com`
            }

            function J(e, t) {
                const s = new URL(e);
                Object.keys(t).forEach(e => {
                    s.searchParams.set(e, t[e])
                });
                return s.toString()
            }

            function z(e, t, s, r = n.a.isQa(), a) {
                const i = Object.assign({
                    uuid: s,
                    utm_medium: "virality",
                    utm_campaign: `hubspot-${t}-virality`
                }, a);
                return new M(e, {
                    query: i,
                    env: r ? "qa" : "prod"
                }).getUrl()
            }

            function B(e, t, s, r) {
                return J(e, Object.assign({
                    uuid: s,
                    utm_medium: "virality",
                    utm_campaign: `hubspot-${t}-virality`
                }, r))
            }

            function N({
                viralLinkType: e,
                deviceId: t,
                portalId: s,
                environment: r = n.a.getShort(),
                redirectPage: a
            }) {
                const i = {
                    u: a,
                    deviceId: t,
                    viralLinkType: e
                };
                s && (i.hubId = s.toString());
                return J(G("qa" === r) + "/viral-links/v1/click-tracking", i)
            }
            const Y = (e, t) => {
                const s = new URL(`${x()}${R.a}${e}`);
                Object.keys(t).forEach(e => {
                    const r = "" + t[e];
                    s.searchParams.append(e, r)
                });
                return s.toString()
            }
        },
        sYgu: function(e, t, s) {
            "use strict";
            var r = s("MBJP"),
                n = s("nDpY"),
                a = s.n(n),
                i = s("5C1Q"),
                o = s("stwP");
            let u, c, p;
            ! function(e) {
                e.Id = "hubs_id";
                e.Content = "hubs_content";
                e.ContentCta = "hubs_content-cta";
                e.Medium = "hubs_medium";
                e.Source = "hubs_source";
                e.Campaign = "hubs_campaign";
                e.Cta = "hubs_cta";
                e.Post = "hubs_post";
                e.PostCta = "hubs_post-cta";
                e.SignupUrl = "hubs_signup-url";
                e.SignupCta = "hubs_signup-cta"
            }(u || (u = {}));
            ! function(e) {
                e.Intent = "intent";
                e.OptSidebar = "opt_sidebar";
                e.ViralSourcePortalId = "viralSourcePortalId";
                e.SignupMode = "signupMode"
            }(c || (c = {}));
            ! function(e) {
                e.academyLesson = "learningCenter";
                e.academyTrack = "academyTrack";
                e.community = "community";
                e.communityStaging = "communityStaging";
                e.companygrader = "companygrader";
                e.connectIntegration = "connectIntegration";
                e.conversations = "conversations";
                e.crmDeals = "crmDeals";
                e.crmLeadManagement = "crmLeadManagement";
                e.fbCrm = "fbCrm";
                e.hubspotnetwork = "hubspotnetwork";
                e.landingpages = "landingpages";
                e.leadAds = "leadAds";
                e.learningCenter = "learningCenter";
                e.marketingAds = "marketingAds";
                e.marketingFreeLeadFlows = "marketingFreeLeadFlows";
                e.marketingFreeForms = "marketingFreeForms";
                e.marketingFreeEmail = "marketingFreeEmail";
                e.marketingFreeAnalytics = "marketingFreeAnalytics";
                e.marketplaceTheme = "marketplaceTheme";
                e.oauthAuthorization = "oauthAuthorization";
                e.purchase = "purchase";
                e.salesCalling = "salesCalling";
                e.salesContactProfile = "salesContactProfile";
                e.salesDocuments = "salesDocuments";
                e.salesEmailScheduling = "salesEmailScheduling";
                e.salesEmailTracking = "salesEmailTracking";
                e.salesFree = "salesFree";
                e.salesExtension = "salesExtension";
                e.salesMeetings = "salesMeetings";
                e.salesOutlook = "salesOutlook";
                e.salesO365 = "salesO365";
                e.salesPro = "salesPro";
                e.salesProspects = "salesProspects";
                e.salesSequences = "salesSequences";
                e.salesTemplates = "salesTemplates";
                e.salesVsto = "salesVsto";
                e.salesInboxProfiles = "salesInboxProfiles";
                e.service = "service";
                e.slides = "slides";
                e.trial = "trial";
                e.blackAtInbound = "blackAtInbound";
                e.campaignAssistant = "campaignAssistant";
                e.walkthrough = "walkthrough";
                e.blogIdeasGenerator = "blogIdeasGenerator";
                e.clipCreator = "clipCreator";
                e.aiWebsiteBuilder = "AIWebsiteBuilder"
            }(p || (p = {}));
            var l = s("OmJX");
            s.d(t, "a", (function() {
                return d
            }));
            const d = Object(r.a)([l.a], (e = {}) => {
                const t = 53 === e.portalId,
                    s = e.portalId || a.a.get(),
                    r = {
                        [u.Campaign]: "hubspot-livechat-virality",
                        [u.Content]: "hubspot.com",
                        [u.Medium]: "virality",
                        [c.Intent]: p.conversations,
                        [c.OptSidebar]: "livechat-signup",
                        [c.ViralSourcePortalId]: s
                    };
                t || delete r[u.Content];
                return Object(i.getTrackedSignupUrl)({
                    flow: o.a.Crm,
                    viralLinkType: "livechat",
                    additionalParams: r
                })
            })
        },
        stwP: function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return r
            }));
            let r;
            ! function(e) {
                e.Crm = "crm";
                e.FbCrm = "fb-crm";
                e.Marketing = "marketing";
                e.Integrations = "integrations";
                e.Academy = "academy";
                e.Sales = "sales";
                e.Service = "service";
                e.ClassroomTraining = "classroom-training";
                e.Purchase = "purchase";
                e.AssetProvider = "asset-provider";
                e.Developers = "developers";
                e.CmsDevelopers = "cms-developers";
                e.HubspotForStartups = "hubspot-for-startups";
                e.SolutionsProvider = "solutions-provider";
                e.DirectoryListing = "directory-listing";
                e.HubSpotPartners = "hubspot-partners";
                e.Trial = "trial";
                e.StandaloneCmsPartner = "standalone-cms-partner";
                e.CmsFree = "cms-free";
                e.Connect = "connect";
                e.AcademyEmbedded = "academy-embedded";
                e.ChatSpot = "chatspot"
            }(r || (r = {}))
        }
    }
]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-visitor-ui/static-1.17672/CurrentView-ThreadView~messages-preview.js.map