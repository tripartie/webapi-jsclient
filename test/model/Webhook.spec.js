/**
 * Tripartie Web API
 * This document describes all use cases offered by the Tripartie Web API.<br /><br /> The Tripartie Web API allows you to easily create Transaction templates.<br /> A Transaction template allows a User (the Buyer) to safely initiate a Transaction pre-configured by another User (the Seller).<br /> This allows you to add a Secured Payment button on your website pages.<br /><br /> To facilitate working with the Web API, we built libraries for common development environment:<br/> <ul class=\"bullet\">   <li><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/tripartie/webapi-jsclient\">Javascript</a></li> </ul> <br/> You're reading the documentation for version 1.0 of the Web API.<br/> Go to version <select id=\"version-switcher\"></select> 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@tripartie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TripartieWebAPI);
  }
}(this, function(expect, TripartieWebAPI) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TripartieWebAPI.Webhook();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Webhook', function() {
    it('should create an instance of Webhook', function() {
      // uncomment below and update the code to test Webhook
      //var instane = new TripartieWebAPI.Webhook();
      //expect(instance).to.be.a(TripartieWebAPI.Webhook);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property transactionTemplateExternalId (base name: "transactionTemplateExternalId")', function() {
      // uncomment below and update the code to test the property transactionTemplateExternalId
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property transactionTemplateTripartieId (base name: "transactionTemplateTripartieId")', function() {
      // uncomment below and update the code to test the property transactionTemplateTripartieId
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property buyerExternalId (base name: "buyerExternalId")', function() {
      // uncomment below and update the code to test the property buyerExternalId
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property buyerTripartieId (base name: "buyerTripartieId")', function() {
      // uncomment below and update the code to test the property buyerTripartieId
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

    it('should have the property eventTimestamp (base name: "eventTimestamp")', function() {
      // uncomment below and update the code to test the property eventTimestamp
      //var instance = new TripartieWebAPI.Webhook();
      //expect(instance).to.be();
    });

  });

}));
