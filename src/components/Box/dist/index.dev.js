"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #FFFFFF;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 10px;\n  overflow-y: auto;\n\n  .boxLink {\n    font-size: 14px;\n    color: #2E7BB4;\n    text-decoration: none;\n    font-weight: 800;\n  }\n\n  .title {\n    font-size: 32px;\n    font-weight: 400;\n    margin-bottom: 20px;\n  }\n\n  .subTitle {\n    font-size: 18px;\n    font-weight: 400;\n    margin-bottom: 20px;\n  }\n\n  .smallTitle {\n    margin-bottom: 20px;\n    font-size: 16px;\n    font-weight: 700;\n    color: #333333;\n    margin-bottom: 20px;\n  }\n\n  hr {\n    margin-top: 12px;\n    margin-bottom: 8px;\n    border-color: transparent;\n    border-bottom-color: #ECF2FA;\n  }\n\n  input {\n    width: 100%;\n    background-color: #F4F4F4;\n    color: #333333;\n    border: 0;\n    padding: 14px 16px;\n    margin-bottom: 14px;\n    border-radius: 10000px;\n    ::placeholder {\n      color: #333333;\n      opacity: 1;\n    }\n  }\n  \n  button {\n    border: 0;\n    padding: 8px 12px;\n    color: #FFFFFF;\n    border-radius: 10000px;\n    background-color: #6F92BB;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents["default"].div(_templateObject());

var _default = Box;
exports["default"] = _default;