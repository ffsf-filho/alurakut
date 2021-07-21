"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  grid-gap: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 500px;\n  padding: 16px;\n  \n  .profileArea{\n    display: none;\n    @media(min-width: 860px){\n      display: block;\n    }  \n  }\n\n  @media(min-width: 860px){\n    max-width: 1110px;\n    display: grid;\n    grid-template-areas: \"profileArea welcomeArea profileRelationsArea\";\n    grid-template-columns: 160px 1fr 312px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainGrid = _styledComponents["default"].main(_templateObject());

var _default = MainGrid;
exports["default"] = _default;