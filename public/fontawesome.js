(function () {
  "use strict";

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== "undefined") _WINDOW = window;
    if (typeof document !== "undefined") _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM =
    !!DOCUMENT.documentElement &&
    !!DOCUMENT.head &&
    typeof DOCUMENT.addEventListener === "function" &&
    typeof DOCUMENT.createElement === "function";
  var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
      iter["@@iterator"] != null
    )
      return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

  var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
  var PRODUCTION = (function () {
    try {
      return "production" === "production";
    } catch (e) {
      return false;
    }
  })();
  var FAMILY_CLASSIC = "classic";
  var FAMILY_SHARP = "sharp";
  var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[FAMILY_CLASSIC];
      },
    });
  }
  var PREFIX_TO_STYLE = familyProxy(
    ((_familyProxy = {}),
    _defineProperty(_familyProxy, FAMILY_CLASSIC, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    _defineProperty(_familyProxy, FAMILY_SHARP, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    _familyProxy)
  );
  var STYLE_TO_PREFIX = familyProxy(
    ((_familyProxy2 = {}),
    _defineProperty(_familyProxy2, FAMILY_CLASSIC, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    _defineProperty(_familyProxy2, FAMILY_SHARP, {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
    }),
    _familyProxy2)
  );
  var PREFIX_TO_LONG_STYLE = familyProxy(
    ((_familyProxy3 = {}),
    _defineProperty(_familyProxy3, FAMILY_CLASSIC, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    _defineProperty(_familyProxy3, FAMILY_SHARP, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
    }),
    _familyProxy3)
  );
  var LONG_STYLE_TO_PREFIX = familyProxy(
    ((_familyProxy4 = {}),
    _defineProperty(_familyProxy4, FAMILY_CLASSIC, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    _defineProperty(_familyProxy4, FAMILY_SHARP, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
    }),
    _familyProxy4)
  );
  var FONT_WEIGHT_TO_PREFIX = familyProxy(
    ((_familyProxy5 = {}),
    _defineProperty(_familyProxy5, FAMILY_CLASSIC, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    _defineProperty(_familyProxy5, FAMILY_SHARP, {
      900: "fass",
      400: "fasr",
      300: "fasl",
    }),
    _familyProxy5)
  );
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var DUOTONE_CLASSES = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  };
  var prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
  var RESERVED_CLASSES = []
    .concat(FAMILIES, _toConsumableArray(prefixes), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      DUOTONE_CLASSES.GROUP,
      DUOTONE_CLASSES.SWAP_OPACITY,
      DUOTONE_CLASSES.PRIMARY,
      DUOTONE_CLASSES.SECONDARY,
    ])
    .concat(
      oneToTen.map(function (n) {
        return "".concat(n, "x");
      })
    )
    .concat(
      oneToTwenty.map(function (n) {
        return "w-".concat(n);
      })
    );

  function bunker(fn) {
    try {
      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(
        _objectSpread2({}, namespace.styles[prefix] || {}),
        normalized
      );
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */

    if (prefix === "fas") {
      defineIcons("fa", icons);
    }
  }

  var icons = {
    "circle-play": [
      512,
      512,
      [61469, "play-circle"],
      "f144",
      [
        "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z",
        "M212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5s-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88z",
      ],
    ],
    "circle-stop": [
      512,
      512,
      [62094, "stop-circle"],
      "f28d",
      [
        "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z",
        "",
      ],
    ],
    "caret-down": [
      320,
      512,
      [],
      "f0d7",
      [
        "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z",
        "",
      ],
    ],
    "caret-up": [
      320,
      512,
      [],
      "f0d8",
      [
        "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z",
        "",
      ],
    ],
    "lightbulb-gear": [
      576,
      512,
      [],
      "e5fd",
      [
        "M240.6 384c2.3-13.3 10.5-24.9 21.4-31.8c-16.6-10.6-26.7-31.7-20-53.3c4-12.9 9.4-25.5 16.4-37.6s15.2-23.1 24.4-33c15.7-16.9 39.6-18.5 57.2-8.7v-.9c0-17.8 10.2-35.6 28-43.3C367.6 78.4 289 0 192 0C94.8 0 16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H240.6zm5 32H112v16c0 44.2 35.8 80 80 80c35.2 0 65.1-22.8 75.8-54.4c-3.3-4.7-6.4-9.5-9.4-14.6c-5.1-8.8-9.3-17.8-12.8-27zM192 96c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16z",
        "M383.3 203.4c-6.8 1.5-11.3 7.8-11.3 14.8v17.4c0 7.9-4.9 15-11.7 18.9c-6.8 3.9-15.2 4.5-22 .6l-13.6-7.8c-6.1-3.5-13.7-2.7-18.5 2.4c-7.5 8.1-14.3 17.2-20.1 27.2s-10.3 20.4-13.5 31c-2.1 6.7 1.1 13.7 7.2 17.2l14 8.1c6.5 3.8 10.1 11 10.1 18.6s-3.5 14.8-10.1 18.6l-14 8.1c-6.1 3.5-9.2 10.5-7.2 17.2c3.3 10.6 7.8 21 13.5 31s12.5 19.1 20.1 27.2c4.8 5.1 12.5 5.9 18.5 2.4l13.5-7.8c6.8-3.9 15.2-3.3 22 .6c6.9 3.9 11.7 11 11.7 18.9l0 17.4c0 7 4.5 13.3 11.3 14.8c10.5 2.4 21.5 3.7 32.7 3.7s22.2-1.3 32.7-3.7c6.8-1.5 11.3-7.8 11.3-14.8l0-17.7c0-7.8 4.8-14.8 11.6-18.7c6.7-3.9 15.1-4.5 21.8-.6l13.8 7.9c6.1 3.5 13.7 2.7 18.5-2.4c7.6-8.1 14.3-17.2 20.1-27.2s10.3-20.4 13.5-31c2.1-6.7-1.1-13.7-7.2-17.2l-14.4-8.3c-6.5-3.7-10-10.9-10-18.4s3.5-14.7 10-18.4l14.4-8.3c6.1-3.5 9.2-10.5 7.2-17.2c-3.3-10.6-7.8-21-13.5-31s-12.5-19.1-20.1-27.2c-4.8-5.1-12.5-5.9-18.5-2.4l-13.8 7.9c-6.7 3.9-15.1 3.3-21.8-.6c-6.8-3.9-11.6-10.9-11.6-18.7V218.2c0-7-4.5-13.3-11.3-14.8c-10.5-2.4-21.5-3.7-32.7-3.7s-22.2 1.3-32.7 3.7zM416 303.7a48 48 0 1 1 0 96 48 48 0 1 1 0-96z",
      ],
    ],
    "paintbrush-pencil": [
      576,
      512,
      [],
      "e206",
      [
        "M164.7 19.3L298.5 153.1 194.4 257.2c-6-.8-12.2-1.2-18.4-1.2c-.8 0-1.7 0-2.5 0L50.7 133.3c-25-25-25-65.5 0-90.5L74.2 19.3c25-25 65.5-25 90.5 0zM384.6 467.1L320 402.5c0-.8 0-1.7 0-2.5c0-6.2-.4-12.4-1.2-18.4L422.9 277.5l75.6 75.6c6.7 6.7 11.6 15.1 14.2 24.2l29.7 104c2.4 8.4 .1 17.4-6.1 23.6s-15.2 8.5-23.6 6.1l-104-29.7c-9.1-2.6-17.5-7.5-24.2-14.2z",
        "M559.6 16.4c21.9 21.9 21.9 57.3 0 79.2L306.9 348.3l-79.2-79.2L480.4 16.4c21.9-21.9 57.3-21.9 79.2 0zM205.1 291.7l79.2 79.2-.1 .1c2.5 9.3 3.8 19 3.8 29c0 61.9-50.1 112-112 112H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4.8c17.6 0 29.6-18.9 27.8-36.4c-.4-3.8-.6-7.7-.6-11.6c0-61.9 50.1-112 112-112c10 0 19.8 1.3 29 3.8l.1-.1z",
      ],
    ],
    "handshake-simple": [
      640,
      512,
      [129309, "handshake-alt"],
      "f4c6",
      [
        "M576 128h16c26.5 0 48 21.5 48 48V304c0 26.5-21.5 48-48 48H509.3c-2.5-7.2-6.8-13.9-12.8-19.4L341.1 190.2l-57.2 40.8c-21.6 15.4-51.6 10.4-67-11.2s-10.4-51.6 11.2-67l98.6-70.4c16.9-12 37-18.5 57.7-18.5c19.6 0 38.8 5.8 55.1 16.7l71 47.3H576z",
        "M48 352H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c7.4-8.1 11.5-18 12.4-28.2l7.8 7.1c19.5 17.9 49.9 16.6 67.8-2.9c12.9-14 15.8-33.7 9.2-50.3c-2.6-6.5-6.6-12.5-12.1-17.5L354.2 202.3l-13.1-12-57.2 40.8c-21.6 15.4-51.6 10.4-67-11.2s-10.4-51.6 11.2-67l89.3-63.8-2.7-2.3C297.5 72.1 275.5 64 252.8 64C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48z",
      ],
    ],
    "paper-plane": [
      512,
      512,
      [61913],
      "f1d8",
      [
        "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L224 402.7V389.4L380.7 185.8c5.2-6.7 4.2-16.4-2.3-21.9s-16.1-5.1-22 1.1L178.8 350.6l-14.1 14.1c-3 3-4.7 7.1-4.7 11.3l-28.3-11.8-112-46.7C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z",
        "M380.7 185.8c5.1-6.7 4.2-16.2-2.1-21.8s-15.9-5.3-21.9 .7l-179 179-13 13c-3 3-4.7 7.1-4.7 11.3v8 56 48c0 13.2 8.1 25 20.3 29.8s26.2 1.6 35.2-8.1L284 427.7l-60-25V389.4L380.7 185.8z",
      ],
    ],
    "earth-americas": [
      512,
      512,
      [127758, "earth", "earth-america", "globe-americas"],
      "f57d",
      [
        "M23.9 147.8L67 212.4c8.4 12.6 21.1 21.9 35.7 26L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l16.1-18.8c8.6-10 10.2-24.3 3.9-36L241.4 .4c4.8-.3 9.7-.4 14.6-.4c97.3 0 182 54.3 225.3 134.3l-70.2 30.1c-15.3 6.6-23 23.7-17.8 39.5l17.6 52.9c3.2 9.6 10.7 17.1 20.2 20.2l76.6 25.5C485.9 421.7 381.5 512 256 512C114.6 512 0 397.4 0 256c0-38.6 8.6-75.3 23.9-108.2z",
        "M241.5 .4C145 5.8 62.7 64.7 23.9 147.8L67 212.4c8.4 12.6 21.1 21.9 35.7 26L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l16.1-18.8c8.6-10 10.2-24.3 3.9-36L241.5 .4zM481.3 134.3l-70.2 30.1c-15.3 6.6-23 23.7-17.8 39.5l17.6 52.9c3.2 9.6 10.7 17.1 20.2 20.2l76.6 25.5c2.8-15.1 4.2-30.7 4.2-46.6c0-44-11.1-85.5-30.7-121.7z",
      ],
    ],
    instagram: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
    whatsapp: [
      448,
      512,
      [],
      "f232",
      "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
    ],
    exclamation: [
      64,
      512,
      [10069, 10071, 61738],
      "21",
      [
        "M-8 440a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z",
        "M32 32c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32z",
      ],
    ],
    ellipsis: [
      448,
      512,
      ["ellipsis-h"],
      "f141",
      [
        "M168 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z",
        "M64 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm320 0a56 56 0 1 0 0-112 56 56 0 1 0 0 112z",
      ],
    ],
  };

  bunker(function () {
    defineIcons("fad", icons);
    defineIcons("fa-duotone", icons);
  });
})();
