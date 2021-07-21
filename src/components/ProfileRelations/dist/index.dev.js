"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileRelationsBoxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ul {\n    display: grid;\n    grid-gap: 8px;\n    grid-template-columns: 1fr 1fr 1fr; \n    max-height: 220px;\n    list-style: none;\n  }\n  img {\n    object-fit: cover;\n    background-position: center center;\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n  ul li a {\n    display: inline-block;\n    height: 102px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 8px;\n    span {\n      color: #FFFFFF;\n      font-size: 10px;\n      position: absolute;\n      left: 0;\n      bottom: 10px;\n      z-index: 2;\n      padding: 0 4px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      width: 100%;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n    }\n    &:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      z-indeX: 1;\n      background-image: linear-gradient(0deg,#00000073,transparent);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProfileRelationsBoxWrapper = (0, _styledComponents["default"])(_Box["default"])(_templateObject());
exports.ProfileRelationsBoxWrapper = ProfileRelationsBoxWrapper;