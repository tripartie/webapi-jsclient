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
 * The ModelTransactionTemplate model module.
 * @module model/ModelTransactionTemplate
 * @version 1.0
 */
var ModelTransactionTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelTransactionTemplate</code>.
   * @alias module:model/ModelTransactionTemplate
   */
  function ModelTransactionTemplate() {
    _classCallCheck(this, ModelTransactionTemplate);

    ModelTransactionTemplate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelTransactionTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelTransactionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelTransactionTemplate} obj Optional instance to populate.
     * @return {module:model/ModelTransactionTemplate} The populated <code>ModelTransactionTemplate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelTransactionTemplate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('permalink')) {
          obj['permalink'] = _ApiClient["default"].convertToType(data['permalink'], 'String');
        }

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

        if (data.hasOwnProperty('buyerFees')) {
          obj['buyerFees'] = _ApiClient["default"].convertToType(data['buyerFees'], 'Number');
        }

        if (data.hasOwnProperty('buyerTotal')) {
          obj['buyerTotal'] = _ApiClient["default"].convertToType(data['buyerTotal'], 'Number');
        }

        if (data.hasOwnProperty('sellerFees')) {
          obj['sellerFees'] = _ApiClient["default"].convertToType(data['sellerFees'], 'Number');
        }

        if (data.hasOwnProperty('sellerTotal')) {
          obj['sellerTotal'] = _ApiClient["default"].convertToType(data['sellerTotal'], 'Number');
        }

        if (data.hasOwnProperty('adUrl')) {
          obj['adUrl'] = _ApiClient["default"].convertToType(data['adUrl'], 'String');
        }

        if (data.hasOwnProperty('allowPriceChange')) {
          obj['allowPriceChange'] = _ApiClient["default"].convertToType(data['allowPriceChange'], 'Boolean');
        }

        if (data.hasOwnProperty('hasPicture')) {
          obj['hasPicture'] = _ApiClient["default"].convertToType(data['hasPicture'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ModelTransactionTemplate;
}();
/**
 * The Transaction template's Tripartie ID.
 * @member {Number} id
 */


ModelTransactionTemplate.prototype['id'] = undefined;
/**
 * The template permalink. <strong>This is what you need for the Secured Payment button.</strong>
 * @member {String} permalink
 */

ModelTransactionTemplate.prototype['permalink'] = undefined;
/**
 * The title.
 * @member {String} title
 */

ModelTransactionTemplate.prototype['title'] = undefined;
/**
 * The description.
 * @member {String} description
 */

ModelTransactionTemplate.prototype['description'] = undefined;
/**
 * The Transaction template's External ID.
 * @member {String} externalId
 */

ModelTransactionTemplate.prototype['externalId'] = undefined;
/**
 * The Seller's External ID.
 * @member {String} sellerExternalId
 */

ModelTransactionTemplate.prototype['sellerExternalId'] = undefined;
/**
 * The Seller's Tripartie ID.
 * @member {String} sellerTripartieId
 */

ModelTransactionTemplate.prototype['sellerTripartieId'] = undefined;
/**
 * The price, in cents.
 * @member {Number} subTotal
 */

ModelTransactionTemplate.prototype['subTotal'] = undefined;
/**
 * The currency code (ISO 4217).
 * @member {String} currency
 */

ModelTransactionTemplate.prototype['currency'] = undefined;
/**
 * The flow.
 * @member {String} flow
 */

ModelTransactionTemplate.prototype['flow'] = undefined;
/**
 * The buyer's fees, in cents.
 * @member {Number} buyerFees
 */

ModelTransactionTemplate.prototype['buyerFees'] = undefined;
/**
 * The buyer's total, in cents.
 * @member {Number} buyerTotal
 */

ModelTransactionTemplate.prototype['buyerTotal'] = undefined;
/**
 * The seller's fees, in cents.
 * @member {Number} sellerFees
 */

ModelTransactionTemplate.prototype['sellerFees'] = undefined;
/**
 * The seller's total, in cents.
 * @member {Number} sellerTotal
 */

ModelTransactionTemplate.prototype['sellerTotal'] = undefined;
/**
 * The original ad's URL.
 * @member {String} adUrl
 */

ModelTransactionTemplate.prototype['adUrl'] = undefined;
/**
 * Allow price negociation?
 * @member {Boolean} allowPriceChange
 */

ModelTransactionTemplate.prototype['allowPriceChange'] = undefined;
/**
 * Has a picture?
 * @member {Boolean} hasPicture
 */

ModelTransactionTemplate.prototype['hasPicture'] = undefined;
var _default = ModelTransactionTemplate;
exports["default"] = _default;