/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).DOMPurify =
        t());
})(this, function () {
  "use strict";
  const {
    entries: e,
    setPrototypeOf: t,
    isFrozen: n,
    getPrototypeOf: o,
    getOwnPropertyDescriptor: r,
  } = Object;
  let { freeze: i, seal: a, create: l } = Object,
    { apply: c, construct: s } = "undefined" != typeof Reflect && Reflect;
  i ||
    (i = function (e) {
      return e;
    }),
    a ||
      (a = function (e) {
        return e;
      }),
    c ||
      (c = function (e, t, n) {
        return e.apply(t, n);
      }),
    s ||
      (s = function (e, t) {
        return new e(...t);
      });
  const u = N(Array.prototype.forEach),
    m = N(Array.prototype.pop),
    f = N(Array.prototype.push),
    p = N(String.prototype.toLowerCase),
    d = N(String.prototype.toString),
    h = N(String.prototype.match),
    g = N(String.prototype.replace),
    T = N(String.prototype.indexOf),
    y = N(String.prototype.trim),
    E = N(RegExp.prototype.test),
    A =
      ((_ = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return s(_, t);
      });
  var _;
  function N(e) {
    return function (t) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        o[r - 1] = arguments[r];
      return c(e, t, o);
    };
  }
  function b(e, o) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
    t && t(e, null);
    let i = o.length;
    for (; i--; ) {
      let t = o[i];
      if ("string" == typeof t) {
        const e = r(t);
        e !== t && (n(o) || (o[i] = e), (t = e));
      }
      e[t] = !0;
    }
    return e;
  }
  function S(t) {
    const n = l(null);
    for (const [o, i] of e(t)) void 0 !== r(t, o) && (n[o] = i);
    return n;
  }
  function R(e, t) {
    for (; null !== e; ) {
      const n = r(e, t);
      if (n) {
        if (n.get) return N(n.get);
        if ("function" == typeof n.value) return N(n.value);
      }
      e = o(e);
    }
    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }
  const w = i([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    D = i([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    L = i([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    v = i([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    x = i([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
      "mprescripts",
    ]),
    k = i([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    C = i(["#text"]),
    O = i([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "xmlns",
      "slot",
    ]),
    I = i([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    M = i([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    U = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    P = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    F = a(/<%[\w\W]*|[\w\W]*%>/gm),
    H = a(/\${[\w\W]*}/gm),
    z = a(/^data-[\-\w.\u00B7-\uFFFF]/),
    B = a(/^aria-[\-\w]+$/),
    W = a(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    G = a(/^(?:\w+script|data):/i),
    Y = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    j = a(/^html$/i);
  var q = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: P,
    ERB_EXPR: F,
    TMPLIT_EXPR: H,
    DATA_ATTR: z,
    ARIA_ATTR: B,
    IS_ALLOWED_URI: W,
    IS_SCRIPT_OR_DATA: G,
    ATTR_WHITESPACE: Y,
    DOCTYPE_NAME: j,
  });
  const X = function () {
      return "undefined" == typeof window ? null : window;
    },
    K = function (e, t) {
      if ("object" != typeof e || "function" != typeof e.createPolicy)
        return null;
      let n = null;
      const o = "data-tt-policy-suffix";
      t && t.hasAttribute(o) && (n = t.getAttribute(o));
      const r = "dompurify" + (n ? "#" + n : "");
      try {
        return e.createPolicy(r, {
          createHTML: (e) => e,
          createScriptURL: (e) => e,
        });
      } catch (e) {
        return (
          console.warn("TrustedTypes policy " + r + " could not be created."),
          null
        );
      }
    };
  var V = (function t() {
    let n =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X();
    const o = (e) => t(e);
    if (
      ((o.version = "3.0.6"),
      (o.removed = []),
      !n || !n.document || 9 !== n.document.nodeType)
    )
      return (o.isSupported = !1), o;
    let { document: r } = n;
    const a = r,
      c = a.currentScript,
      {
        DocumentFragment: s,
        HTMLTemplateElement: _,
        Node: N,
        Element: P,
        NodeFilter: F,
        NamedNodeMap: H = n.NamedNodeMap || n.MozNamedAttrMap,
        HTMLFormElement: z,
        DOMParser: B,
        trustedTypes: G,
      } = n,
      Y = P.prototype,
      V = R(Y, "cloneNode"),
      $ = R(Y, "nextSibling"),
      Z = R(Y, "childNodes"),
      J = R(Y, "parentNode");
    if ("function" == typeof _) {
      const e = r.createElement("template");
      e.content && e.content.ownerDocument && (r = e.content.ownerDocument);
    }
    let Q,
      ee = "";
    const {
        implementation: te,
        createNodeIterator: ne,
        createDocumentFragment: oe,
        getElementsByTagName: re,
      } = r,
      { importNode: ie } = a;
    let ae = {};
    o.isSupported =
      "function" == typeof e &&
      "function" == typeof J &&
      te &&
      void 0 !== te.createHTMLDocument;
    const {
      MUSTACHE_EXPR: le,
      ERB_EXPR: ce,
      TMPLIT_EXPR: se,
      DATA_ATTR: ue,
      ARIA_ATTR: me,
      IS_SCRIPT_OR_DATA: fe,
      ATTR_WHITESPACE: pe,
    } = q;
    let { IS_ALLOWED_URI: de } = q,
      he = null;
    const ge = b({}, [...w, ...D, ...L, ...x, ...C]);
    let Te = null;
    const ye = b({}, [...O, ...I, ...M, ...U]);
    let Ee = Object.seal(
        l(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1,
          },
        })
      ),
      Ae = null,
      _e = null,
      Ne = !0,
      be = !0,
      Se = !1,
      Re = !0,
      we = !1,
      De = !1,
      Le = !1,
      ve = !1,
      xe = !1,
      ke = !1,
      Ce = !1,
      Oe = !0,
      Ie = !1;
    const Me = "user-content-";
    let Ue = !0,
      Pe = !1,
      Fe = {},
      He = null;
    const ze = b({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]);
    let Be = null;
    const We = b({}, ["audio", "video", "img", "source", "image", "track"]);
    let Ge = null;
    const Ye = b({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      je = "http://www.w3.org/1998/Math/MathML",
      qe = "http://www.w3.org/2000/svg",
      Xe = "http://www.w3.org/1999/xhtml";
    let Ke = Xe,
      Ve = !1,
      $e = null;
    const Ze = b({}, [je, qe, Xe], d);
    let Je = null;
    const Qe = ["application/xhtml+xml", "text/html"],
      et = "text/html";
    let tt = null,
      nt = null;
    const ot = r.createElement("form"),
      rt = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      it = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!nt || nt !== e) {
          if (
            ((e && "object" == typeof e) || (e = {}),
            (e = S(e)),
            (Je = Je =
              -1 === Qe.indexOf(e.PARSER_MEDIA_TYPE)
                ? et
                : e.PARSER_MEDIA_TYPE),
            (tt = "application/xhtml+xml" === Je ? d : p),
            (he = "ALLOWED_TAGS" in e ? b({}, e.ALLOWED_TAGS, tt) : ge),
            (Te = "ALLOWED_ATTR" in e ? b({}, e.ALLOWED_ATTR, tt) : ye),
            ($e =
              "ALLOWED_NAMESPACES" in e ? b({}, e.ALLOWED_NAMESPACES, d) : Ze),
            (Ge =
              "ADD_URI_SAFE_ATTR" in e
                ? b(S(Ye), e.ADD_URI_SAFE_ATTR, tt)
                : Ye),
            (Be =
              "ADD_DATA_URI_TAGS" in e
                ? b(S(We), e.ADD_DATA_URI_TAGS, tt)
                : We),
            (He = "FORBID_CONTENTS" in e ? b({}, e.FORBID_CONTENTS, tt) : ze),
            (Ae = "FORBID_TAGS" in e ? b({}, e.FORBID_TAGS, tt) : {}),
            (_e = "FORBID_ATTR" in e ? b({}, e.FORBID_ATTR, tt) : {}),
            (Fe = "USE_PROFILES" in e && e.USE_PROFILES),
            (Ne = !1 !== e.ALLOW_ARIA_ATTR),
            (be = !1 !== e.ALLOW_DATA_ATTR),
            (Se = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (Re = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (we = e.SAFE_FOR_TEMPLATES || !1),
            (De = e.WHOLE_DOCUMENT || !1),
            (xe = e.RETURN_DOM || !1),
            (ke = e.RETURN_DOM_FRAGMENT || !1),
            (Ce = e.RETURN_TRUSTED_TYPE || !1),
            (ve = e.FORCE_BODY || !1),
            (Oe = !1 !== e.SANITIZE_DOM),
            (Ie = e.SANITIZE_NAMED_PROPS || !1),
            (Ue = !1 !== e.KEEP_CONTENT),
            (Pe = e.IN_PLACE || !1),
            (de = e.ALLOWED_URI_REGEXP || W),
            (Ke = e.NAMESPACE || Xe),
            (Ee = e.CUSTOM_ELEMENT_HANDLING || {}),
            e.CUSTOM_ELEMENT_HANDLING &&
              rt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (Ee.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              rt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (Ee.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (Ee.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            we && (be = !1),
            ke && (xe = !0),
            Fe &&
              ((he = b({}, [...C])),
              (Te = []),
              !0 === Fe.html && (b(he, w), b(Te, O)),
              !0 === Fe.svg && (b(he, D), b(Te, I), b(Te, U)),
              !0 === Fe.svgFilters && (b(he, L), b(Te, I), b(Te, U)),
              !0 === Fe.mathMl && (b(he, x), b(Te, M), b(Te, U))),
            e.ADD_TAGS && (he === ge && (he = S(he)), b(he, e.ADD_TAGS, tt)),
            e.ADD_ATTR && (Te === ye && (Te = S(Te)), b(Te, e.ADD_ATTR, tt)),
            e.ADD_URI_SAFE_ATTR && b(Ge, e.ADD_URI_SAFE_ATTR, tt),
            e.FORBID_CONTENTS &&
              (He === ze && (He = S(He)), b(He, e.FORBID_CONTENTS, tt)),
            Ue && (he["#text"] = !0),
            De && b(he, ["html", "head", "body"]),
            he.table && (b(he, ["tbody"]), delete Ae.tbody),
            e.TRUSTED_TYPES_POLICY)
          ) {
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
              throw A(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
              );
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
              throw A(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
              );
            (Q = e.TRUSTED_TYPES_POLICY), (ee = Q.createHTML(""));
          } else
            void 0 === Q && (Q = K(G, c)),
              null !== Q && "string" == typeof ee && (ee = Q.createHTML(""));
          i && i(e), (nt = e);
        }
      },
      at = b({}, ["mi", "mo", "mn", "ms", "mtext"]),
      lt = b({}, ["foreignobject", "desc", "title", "annotation-xml"]),
      ct = b({}, ["title", "style", "font", "a", "script"]),
      st = b({}, D);
    b(st, L), b(st, v);
    const ut = b({}, x);
    b(ut, k);
    const mt = function (e) {
        let t = J(e);
        (t && t.tagName) || (t = { namespaceURI: Ke, tagName: "template" });
        const n = p(e.tagName),
          o = p(t.tagName);
        return (
          !!$e[e.namespaceURI] &&
          (e.namespaceURI === qe
            ? t.namespaceURI === Xe
              ? "svg" === n
              : t.namespaceURI === je
              ? "svg" === n && ("annotation-xml" === o || at[o])
              : Boolean(st[n])
            : e.namespaceURI === je
            ? t.namespaceURI === Xe
              ? "math" === n
              : t.namespaceURI === qe
              ? "math" === n && lt[o]
              : Boolean(ut[n])
            : e.namespaceURI === Xe
            ? !(t.namespaceURI === qe && !lt[o]) &&
              !(t.namespaceURI === je && !at[o]) &&
              !ut[n] &&
              (ct[n] || !st[n])
            : !("application/xhtml+xml" !== Je || !$e[e.namespaceURI]))
        );
      },
      ft = function (e) {
        f(o.removed, { element: e });
        try {
          e.parentNode.removeChild(e);
        } catch (t) {
          e.remove();
        }
      },
      pt = function (e, t) {
        try {
          f(o.removed, { attribute: t.getAttributeNode(e), from: t });
        } catch (e) {
          f(o.removed, { attribute: null, from: t });
        }
        if ((t.removeAttribute(e), "is" === e && !Te[e]))
          if (xe || ke)
            try {
              ft(t);
            } catch (e) {}
          else
            try {
              t.setAttribute(e, "");
            } catch (e) {}
      },
      dt = function (e) {
        let t = null,
          n = null;
        if (ve) e = "<remove></remove>" + e;
        else {
          const t = h(e, /^[\r\n\t ]+/);
          n = t && t[0];
        }
        "application/xhtml+xml" === Je &&
          Ke === Xe &&
          (e =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            e +
            "</body></html>");
        const o = Q ? Q.createHTML(e) : e;
        if (Ke === Xe)
          try {
            t = new B().parseFromString(o, Je);
          } catch (e) {}
        if (!t || !t.documentElement) {
          t = te.createDocument(Ke, "template", null);
          try {
            t.documentElement.innerHTML = Ve ? ee : o;
          } catch (e) {}
        }
        const i = t.body || t.documentElement;
        return (
          e &&
            n &&
            i.insertBefore(r.createTextNode(n), i.childNodes[0] || null),
          Ke === Xe
            ? re.call(t, De ? "html" : "body")[0]
            : De
            ? t.documentElement
            : i
        );
      },
      ht = function (e) {
        return ne.call(
          e.ownerDocument || e,
          e,
          F.SHOW_ELEMENT | F.SHOW_COMMENT | F.SHOW_TEXT,
          null
        );
      },
      gt = function (e) {
        return (
          e instanceof z &&
          ("string" != typeof e.nodeName ||
            "string" != typeof e.textContent ||
            "function" != typeof e.removeChild ||
            !(e.attributes instanceof H) ||
            "function" != typeof e.removeAttribute ||
            "function" != typeof e.setAttribute ||
            "string" != typeof e.namespaceURI ||
            "function" != typeof e.insertBefore ||
            "function" != typeof e.hasChildNodes)
        );
      },
      Tt = function (e) {
        return "function" == typeof N && e instanceof N;
      },
      yt = function (e, t, n) {
        ae[e] &&
          u(ae[e], (e) => {
            e.call(o, t, n, nt);
          });
      },
      Et = function (e) {
        let t = null;
        if ((yt("beforeSanitizeElements", e, null), gt(e))) return ft(e), !0;
        const n = tt(e.nodeName);
        if (
          (yt("uponSanitizeElement", e, { tagName: n, allowedTags: he }),
          e.hasChildNodes() &&
            !Tt(e.firstElementChild) &&
            E(/<[/\w]/g, e.innerHTML) &&
            E(/<[/\w]/g, e.textContent))
        )
          return ft(e), !0;
        if (!he[n] || Ae[n]) {
          if (!Ae[n] && _t(n)) {
            if (Ee.tagNameCheck instanceof RegExp && E(Ee.tagNameCheck, n))
              return !1;
            if (Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n))
              return !1;
          }
          if (Ue && !He[n]) {
            const t = J(e) || e.parentNode,
              n = Z(e) || e.childNodes;
            if (n && t) {
              for (let o = n.length - 1; o >= 0; --o)
                t.insertBefore(V(n[o], !0), $(e));
            }
          }
          return ft(e), !0;
        }
        return e instanceof P && !mt(e)
          ? (ft(e), !0)
          : ("noscript" !== n && "noembed" !== n && "noframes" !== n) ||
            !E(/<\/no(script|embed|frames)/i, e.innerHTML)
          ? (we &&
              3 === e.nodeType &&
              ((t = e.textContent),
              u([le, ce, se], (e) => {
                t = g(t, e, " ");
              }),
              e.textContent !== t &&
                (f(o.removed, { element: e.cloneNode() }),
                (e.textContent = t))),
            yt("afterSanitizeElements", e, null),
            !1)
          : (ft(e), !0);
      },
      At = function (e, t, n) {
        if (Oe && ("id" === t || "name" === t) && (n in r || n in ot))
          return !1;
        if (be && !_e[t] && E(ue, t));
        else if (Ne && E(me, t));
        else if (!Te[t] || _e[t]) {
          if (
            !(
              (_t(e) &&
                ((Ee.tagNameCheck instanceof RegExp && E(Ee.tagNameCheck, e)) ||
                  (Ee.tagNameCheck instanceof Function &&
                    Ee.tagNameCheck(e))) &&
                ((Ee.attributeNameCheck instanceof RegExp &&
                  E(Ee.attributeNameCheck, t)) ||
                  (Ee.attributeNameCheck instanceof Function &&
                    Ee.attributeNameCheck(t)))) ||
              ("is" === t &&
                Ee.allowCustomizedBuiltInElements &&
                ((Ee.tagNameCheck instanceof RegExp && E(Ee.tagNameCheck, n)) ||
                  (Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(n))))
            )
          )
            return !1;
        } else if (Ge[t]);
        else if (E(de, g(n, pe, "")));
        else if (
          ("src" !== t && "xlink:href" !== t && "href" !== t) ||
          "script" === e ||
          0 !== T(n, "data:") ||
          !Be[e]
        ) {
          if (Se && !E(fe, g(n, pe, "")));
          else if (n) return !1;
        } else;
        return !0;
      },
      _t = function (e) {
        return e.indexOf("-") > 0;
      },
      Nt = function (e) {
        yt("beforeSanitizeAttributes", e, null);
        const { attributes: t } = e;
        if (!t) return;
        const n = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: Te,
        };
        let r = t.length;
        for (; r--; ) {
          const i = t[r],
            { name: a, namespaceURI: l, value: c } = i,
            s = tt(a);
          let f = "value" === a ? c : y(c);
          if (
            ((n.attrName = s),
            (n.attrValue = f),
            (n.keepAttr = !0),
            (n.forceKeepAttr = void 0),
            yt("uponSanitizeAttribute", e, n),
            (f = n.attrValue),
            n.forceKeepAttr)
          )
            continue;
          if ((pt(a, e), !n.keepAttr)) continue;
          if (!Re && E(/\/>/i, f)) {
            pt(a, e);
            continue;
          }
          we &&
            u([le, ce, se], (e) => {
              f = g(f, e, " ");
            });
          const p = tt(e.nodeName);
          if (At(p, s, f)) {
            if (
              (!Ie || ("id" !== s && "name" !== s) || (pt(a, e), (f = Me + f)),
              Q &&
                "object" == typeof G &&
                "function" == typeof G.getAttributeType)
            )
              if (l);
              else
                switch (G.getAttributeType(p, s)) {
                  case "TrustedHTML":
                    f = Q.createHTML(f);
                    break;
                  case "TrustedScriptURL":
                    f = Q.createScriptURL(f);
                }
            try {
              l ? e.setAttributeNS(l, a, f) : e.setAttribute(a, f),
                m(o.removed);
            } catch (e) {}
          }
        }
        yt("afterSanitizeAttributes", e, null);
      },
      bt = function e(t) {
        let n = null;
        const o = ht(t);
        for (yt("beforeSanitizeShadowDOM", t, null); (n = o.nextNode()); )
          yt("uponSanitizeShadowNode", n, null),
            Et(n) || (n.content instanceof s && e(n.content), Nt(n));
        yt("afterSanitizeShadowDOM", t, null);
      };
    return (
      (o.sanitize = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = null,
          r = null,
          i = null,
          l = null;
        if (
          ((Ve = !e), Ve && (e = "\x3c!--\x3e"), "string" != typeof e && !Tt(e))
        ) {
          if ("function" != typeof e.toString)
            throw A("toString is not a function");
          if ("string" != typeof (e = e.toString()))
            throw A("dirty is not a string, aborting");
        }
        if (!o.isSupported) return e;
        if (
          (Le || it(t), (o.removed = []), "string" == typeof e && (Pe = !1), Pe)
        ) {
          if (e.nodeName) {
            const t = tt(e.nodeName);
            if (!he[t] || Ae[t])
              throw A(
                "root node is forbidden and cannot be sanitized in-place"
              );
          }
        } else if (e instanceof N)
          (n = dt("\x3c!----\x3e")),
            (r = n.ownerDocument.importNode(e, !0)),
            (1 === r.nodeType && "BODY" === r.nodeName) || "HTML" === r.nodeName
              ? (n = r)
              : n.appendChild(r);
        else {
          if (!xe && !we && !De && -1 === e.indexOf("<"))
            return Q && Ce ? Q.createHTML(e) : e;
          if (((n = dt(e)), !n)) return xe ? null : Ce ? ee : "";
        }
        n && ve && ft(n.firstChild);
        const c = ht(Pe ? e : n);
        for (; (i = c.nextNode()); )
          Et(i) || (i.content instanceof s && bt(i.content), Nt(i));
        if (Pe) return e;
        if (xe) {
          if (ke)
            for (l = oe.call(n.ownerDocument); n.firstChild; )
              l.appendChild(n.firstChild);
          else l = n;
          return (
            (Te.shadowroot || Te.shadowrootmode) && (l = ie.call(a, l, !0)), l
          );
        }
        let m = De ? n.outerHTML : n.innerHTML;
        return (
          De &&
            he["!doctype"] &&
            n.ownerDocument &&
            n.ownerDocument.doctype &&
            n.ownerDocument.doctype.name &&
            E(j, n.ownerDocument.doctype.name) &&
            (m = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + m),
          we &&
            u([le, ce, se], (e) => {
              m = g(m, e, " ");
            }),
          Q && Ce ? Q.createHTML(m) : m
        );
      }),
      (o.setConfig = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        it(e), (Le = !0);
      }),
      (o.clearConfig = function () {
        (nt = null), (Le = !1);
      }),
      (o.isValidAttribute = function (e, t, n) {
        nt || it({});
        const o = tt(e),
          r = tt(t);
        return At(o, r, n);
      }),
      (o.addHook = function (e, t) {
        "function" == typeof t && ((ae[e] = ae[e] || []), f(ae[e], t));
      }),
      (o.removeHook = function (e) {
        if (ae[e]) return m(ae[e]);
      }),
      (o.removeHooks = function (e) {
        ae[e] && (ae[e] = []);
      }),
      (o.removeAllHooks = function () {
        ae = {};
      }),
      o
    );
  })();
  return V;
});
//# sourceMappingURL=purify.min.js.map
