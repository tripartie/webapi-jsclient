"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestCreateTransactionTemplatePackageFormat model module.
 * @module model/RequestCreateTransactionTemplatePackageFormat
 * @version 1.0
 */
var RequestCreateTransactionTemplatePackageFormat = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestCreateTransactionTemplatePackageFormat</code>.
   * The package format&lt;br /&gt;&lt;strong&gt;Required for automatic shipping costs and shipping label generation.&lt;/strong&gt;
   * @alias module:model/RequestCreateTransactionTemplatePackageFormat
   */
  function RequestCreateTransactionTemplatePackageFormat() {
    _classCallCheck(this, RequestCreateTransactionTemplatePackageFormat);

    RequestCreateTransactionTemplatePackageFormat.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestCreateTransactionTemplatePackageFormat, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestCreateTransactionTemplatePackageFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestCreateTransactionTemplatePackageFormat} obj Optional instance to populate.
     * @return {module:model/RequestCreateTransactionTemplatePackageFormat} The populated <code>RequestCreateTransactionTemplatePackageFormat</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestCreateTransactionTemplatePackageFormat();

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }

        if (data.hasOwnProperty('length')) {
          obj['length'] = _ApiClient["default"].convertToType(data['length'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RequestCreateTransactionTemplatePackageFormat;
}();
/**
 * The package weight, in grams.
 * @member {Number} weight
 */


RequestCreateTransactionTemplatePackageFormat.prototype['weight'] = undefined;
/**
 * The package length, in centimeters.
 * @member {Number} length
 */

RequestCreateTransactionTemplatePackageFormat.prototype['length'] = undefined;
/**
 * The package height, in centimeters.
 * @member {Number} height
 */

RequestCreateTransactionTemplatePackageFormat.prototype['height'] = undefined;
/**
 * The package width, in centimeters.
 * @member {Number} width
 */

RequestCreateTransactionTemplatePackageFormat.prototype['width'] = undefined;
var _default = RequestCreateTransactionTemplatePackageFormat;
exports["default"] = _default;