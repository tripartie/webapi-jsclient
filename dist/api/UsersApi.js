"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _ModelUser = _interopRequireDefault(require("../model/ModelUser"));

var _RequestRegisterUser = _interopRequireDefault(require("../model/RequestRegisterUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Unregister
   * Unregister a User using its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both.<br /> This wont delete the User's Tripartie account. 
   * @param {Object} opts Optional parameters
   * @param {String} opts.externalId The resource's External ID.
   * @param {Number} opts.tripartieId The resource's Tripartie ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(UsersApi, [{
    key: "unregisterWithHttpInfo",
    value: function unregisterWithHttpInfo(opts) {
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
      var returnType = null;
      return this.apiClient.callApi('/api/web/users/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unregister
     * Unregister a User using its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both.<br /> This wont delete the User's Tripartie account. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalId The resource's External ID.
     * @param {Number} opts.tripartieId The resource's Tripartie ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "unregister",
    value: function unregister(opts) {
      return this.unregisterWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Fetch
     * Fetch a User by its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalId The resource's External ID.
     * @param {Number} opts.tripartieId The resource's Tripartie ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelUser} and HTTP response
     */

  }, {
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
      var returnType = _ModelUser["default"];
      return this.apiClient.callApi('/api/web/users/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Fetch
     * Fetch a User by its External ID or Tripartie ID.<br /> You MUST provide either <code>external-id</code> or <code>tripartie-id</code>, but not both. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.externalId The resource's External ID.
     * @param {Number} opts.tripartieId The resource's Tripartie ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelUser}
     */

  }, {
    key: "fetch",
    value: function fetch(opts) {
      return this.fetchWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register
     * @param {module:model/RequestRegisterUser} requestRegisterUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModelUser} and HTTP response
     */

  }, {
    key: "registerWithHttpInfo",
    value: function registerWithHttpInfo(requestRegisterUser) {
      var postBody = requestRegisterUser; // verify the required parameter 'requestRegisterUser' is set

      if (requestRegisterUser === undefined || requestRegisterUser === null) {
        throw new _Error["default"]("Missing the required parameter 'requestRegisterUser' when calling register");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ClientIdAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ModelUser["default"];
      return this.apiClient.callApi('/api/web/users/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Register
     * @param {module:model/RequestRegisterUser} requestRegisterUser 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModelUser}
     */

  }, {
    key: "register",
    value: function register(requestRegisterUser) {
      return this.registerWithHttpInfo(requestRegisterUser).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;