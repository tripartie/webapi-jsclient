"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Webhook = _interopRequireDefault(require("../model/Webhook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Validate
   * Check a webhook's authenticity 
   * @param {Object} opts Optional parameters
   * @param {String} opts.uuid The Webhook UUID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Webhook} and HTTP response
   */


  _createClass(WebhooksApi, [{
    key: "validateWithHttpInfo",
    value: function validateWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'uuid': opts['uuid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ClientIdAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Webhook["default"];
      return this.apiClient.callApi('/api/web/webhooks/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Validate
     * Check a webhook's authenticity 
     * @param {Object} opts Optional parameters
     * @param {String} opts.uuid The Webhook UUID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Webhook}
     */

  }, {
    key: "validate",
    value: function validate(opts) {
      return this.validateWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;