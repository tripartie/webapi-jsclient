"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _ModelTransactionTemplate = _interopRequireDefault(require("../model/ModelTransactionTemplate"));

var _RequestCreateTransactionTemplate = _interopRequireDefault(require("../model/RequestCreateTransactionTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TransactionTemplates service.
* @module api/TransactionTemplatesApi
* @version 1.0
*/
var TransactionTemplatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionTemplatesApi. 
  * @alias module:api/TransactionTemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionTemplatesApi(apiClient) {
    _classCallCheck(this, TransactionTemplatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Fetch
   * Fetch a Transaction template by its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both. 
   * @param {Object} opts Optional parameters
   * @param {String} opts.externalId The resource's External ID.
   * @param {Number} opts.tripartieId The resource's Tripartie ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelTransactionTemplate} and HTTP response
   */


  _createClass(TransactionTemplatesApi, [{
    key: "fetchWithHttpInfo",
    value: function fetchWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'external-id': opts['externalId'],
        'tripartie-id': opts['tripartieId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ClientIdAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ModelTransactionTemplate["default"];
      return this.apiClient.callApi('/api/web/transaction-templates/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetch
     * Fetch a Transaction template by its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalId The resource's External ID.
     * @param {Number} opts.tripartieId The resource's Tripartie ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelTransactionTemplate}
     */

  }, {
    key: "fetch",
    value: function fetch(opts) {
      return this.fetchWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create
     * Create a Transaction template.<br /> You MUST provide either sellerExternalId or sellerTripartieId but not both 
     * @param {module:model/RequestCreateTransactionTemplate} requestCreateTransactionTemplate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelTransactionTemplate} and HTTP response
     */

  }, {
    key: "createWithHttpInfo",
    value: function createWithHttpInfo(requestCreateTransactionTemplate) {
      var postBody = requestCreateTransactionTemplate; // verify the required parameter 'requestCreateTransactionTemplate' is set

      if (requestCreateTransactionTemplate === undefined || requestCreateTransactionTemplate === null) {
        throw new _Error["default"]("Missing the required parameter 'requestCreateTransactionTemplate' when calling create");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ClientIdAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelTransactionTemplate["default"];
      return this.apiClient.callApi('/api/web/transaction-templates/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create
     * Create a Transaction template.<br /> You MUST provide either sellerExternalId or sellerTripartieId but not both 
     * @param {module:model/RequestCreateTransactionTemplate} requestCreateTransactionTemplate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelTransactionTemplate}
     */

  }, {
    key: "create",
    value: function create(requestCreateTransactionTemplate) {
      return this.createWithHttpInfo(requestCreateTransactionTemplate).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TransactionTemplatesApi;
}();

exports["default"] = TransactionTemplatesApi;