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
 * The RequestCreateTransactionTemplate model module.
 * @module model/RequestCreateTransactionTemplate
 * @version 1.0
 */
var RequestCreateTransactionTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestCreateTransactionTemplate</code>.
   * @alias module:model/RequestCreateTransactionTemplate
   * @param title {String} The title.
   * @param subTotal {Number} The price, in cents.
   * @param currency {String} The currency code (ISO 4217).
   * @param flow {String} The desired flow (see <a href=\"#tag/Flows\">Flows</a>).
   */
  function RequestCreateTransactionTemplate(title, subTotal, currency, flow) {
    _classCallCheck(this, RequestCreateTransactionTemplate);

    RequestCreateTransactionTemplate.initialize(this, title, subTotal, currency, flow);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestCreateTransactionTemplate, null, [{
    key: "initialize",
    value: function initialize(obj, title, subTotal, currency, flow) {
      obj['title'] = title;
      obj['subTotal'] = subTotal;
      obj['currency'] = currency;
      obj['flow'] = flow;
    }
    /**
     * Constructs a <code>RequestCreateTransactionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestCreateTransactionTemplate} obj Optional instance to populate.
     * @return {module:model/RequestCreateTransactionTemplate} The populated <code>RequestCreateTransactionTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestCreateTransactionTemplate();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }

        if (data.hasOwnProperty('sellerExternalId')) {
          obj['sellerExternalId'] = _ApiClient["default"].convertToType(data['sellerExternalId'], 'String');
        }

        if (data.hasOwnProperty('sellerTripartieId')) {
          obj['sellerTripartieId'] = _ApiClient["default"].convertToType(data['sellerTripartieId'], 'String');
        }

        if (data.hasOwnProperty('subTotal')) {
          obj['subTotal'] = _ApiClient["default"].convertToType(data['subTotal'], 'Number');
        }

        if (data.hasOwnProperty('currency')) {
          obj['currency'] = _ApiClient["default"].convertToType(data['currency'], 'String');
        }

        if (data.hasOwnProperty('flow')) {
          obj['flow'] = _ApiClient["default"].convertToType(data['flow'], 'String');
        }

        if (data.hasOwnProperty('adUrl')) {
          obj['adUrl'] = _ApiClient["default"].convertToType(data['adUrl'], 'String');
        }

        if (data.hasOwnProperty('allowPriceChange')) {
          obj['allowPriceChange'] = _ApiClient["default"].convertToType(data['allowPriceChange'], 'Boolean');
        }

        if (data.hasOwnProperty('picture')) {
          obj['picture'] = _ApiClient["default"].convertToType(data['picture'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestCreateTransactionTemplate;
}();
/**
 * The title.
 * @member {String} title
 */


RequestCreateTransactionTemplate.prototype['title'] = undefined;
/**
 * The description.
 * @member {String} description
 */

RequestCreateTransactionTemplate.prototype['description'] = undefined;
/**
 * The Transaction template's External ID.
 * @member {String} externalId
 */

RequestCreateTransactionTemplate.prototype['externalId'] = undefined;
/**
 * The Seller's External ID.
 * @member {String} sellerExternalId
 */

RequestCreateTransactionTemplate.prototype['sellerExternalId'] = undefined;
/**
 * The Seller's Tripartie ID.
 * @member {String} sellerTripartieId
 */

RequestCreateTransactionTemplate.prototype['sellerTripartieId'] = undefined;
/**
 * The price, in cents.
 * @member {Number} subTotal
 */

RequestCreateTransactionTemplate.prototype['subTotal'] = undefined;
/**
 * The currency code (ISO 4217).
 * @member {String} currency
 */

RequestCreateTransactionTemplate.prototype['currency'] = undefined;
/**
 * The desired flow (see <a href=\"#tag/Flows\">Flows</a>).
 * @member {String} flow
 */

RequestCreateTransactionTemplate.prototype['flow'] = undefined;
/**
 * The original ad's URL.
 * @member {String} adUrl
 */

RequestCreateTransactionTemplate.prototype['adUrl'] = undefined;
/**
 * Allow price negociation?
 * @member {Boolean} allowPriceChange
 * @default true
 */

RequestCreateTransactionTemplate.prototype['allowPriceChange'] = true;
/**
 * Ad picture, in <strong>base64 format</strong>.<br /> Max initial file size: 2Mo.<br /> <strong>You MUST send only the binary code.</strong> Do not send the first part that some converters add into the binary code which is <code>data:image/png;base64,</code>. 
 * @member {String} picture
 */

RequestCreateTransactionTemplate.prototype['picture'] = undefined;
var _default = RequestCreateTransactionTemplate;
exports["default"] = _default;