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
 * The ModelWebhook model module.
 * @module model/ModelWebhook
 * @version 1.0
 */
var ModelWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelWebhook</code>.
   * @alias module:model/ModelWebhook
   */
  function ModelWebhook() {
    _classCallCheck(this, ModelWebhook);

    ModelWebhook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelWebhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModelWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelWebhook} obj Optional instance to populate.
     * @return {module:model/ModelWebhook} The populated <code>ModelWebhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelWebhook();

        if (data.hasOwnProperty('eventType')) {
          obj['eventType'] = _ApiClient["default"].convertToType(data['eventType'], 'String');
        }

        if (data.hasOwnProperty('transactionTemplateExternalId')) {
          obj['transactionTemplateExternalId'] = _ApiClient["default"].convertToType(data['transactionTemplateExternalId'], 'String');
        }

        if (data.hasOwnProperty('transactionTemplateTripartieId')) {
          obj['transactionTemplateTripartieId'] = _ApiClient["default"].convertToType(data['transactionTemplateTripartieId'], 'Number');
        }

        if (data.hasOwnProperty('eventTimestamp')) {
          obj['eventTimestamp'] = _ApiClient["default"].convertToType(data['eventTimestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ModelWebhook;
}();
/**
 * The webhook type.
 * @member {module:model/ModelWebhook.EventTypeEnum} eventType
 */


ModelWebhook.prototype['eventType'] = undefined;
/**
 * The Transaction template's External ID.
 * @member {String} transactionTemplateExternalId
 */

ModelWebhook.prototype['transactionTemplateExternalId'] = undefined;
/**
 * The Transaction template's Tripartie ID.
 * @member {Number} transactionTemplateTripartieId
 */

ModelWebhook.prototype['transactionTemplateTripartieId'] = undefined;
/**
 * The event timestamp.
 * @member {Number} eventTimestamp
 */

ModelWebhook.prototype['eventTimestamp'] = undefined;
/**
 * Allowed values for the <code>eventType</code> property.
 * @enum {String}
 * @readonly
 */

ModelWebhook['EventTypeEnum'] = {
  /**
   * value: "proposition_sent"
   * @const
   */
  "proposition_sent": "proposition_sent",

  /**
   * value: "proposition_accepted"
   * @const
   */
  "proposition_accepted": "proposition_accepted",

  /**
   * value: "proposition_rejected"
   * @const
   */
  "proposition_rejected": "proposition_rejected",

  /**
   * value: "transaction_completed"
   * @const
   */
  "transaction_completed": "transaction_completed",

  /**
   * value: "transaction_canceled"
   * @const
   */
  "transaction_canceled": "transaction_canceled"
};
var _default = ModelWebhook;
exports["default"] = _default;