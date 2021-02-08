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
 * The RequestRegisterUser model module.
 * @module model/RequestRegisterUser
 * @version 1.0
 */
var RequestRegisterUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestRegisterUser</code>.
   * @alias module:model/RequestRegisterUser
   * @param email {String} The user's email.
   */
  function RequestRegisterUser(email) {
    _classCallCheck(this, RequestRegisterUser);

    RequestRegisterUser.initialize(this, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestRegisterUser, null, [{
    key: "initialize",
    value: function initialize(obj, email) {
      obj['email'] = email;
    }
    /**
     * Constructs a <code>RequestRegisterUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestRegisterUser} obj Optional instance to populate.
     * @return {module:model/RequestRegisterUser} The populated <code>RequestRegisterUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestRegisterUser();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('externalId')) {
          obj['externalId'] = _ApiClient["default"].convertToType(data['externalId'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestRegisterUser;
}();
/**
 * The user's email.
 * @member {String} email
 */


RequestRegisterUser.prototype['email'] = undefined;
/**
 * The user's External ID.
 * @member {String} externalId
 */

RequestRegisterUser.prototype['externalId'] = undefined;
/**
 * The user's display name.
 * @member {String} displayName
 */

RequestRegisterUser.prototype['displayName'] = undefined;
var _default = RequestRegisterUser;
exports["default"] = _default;