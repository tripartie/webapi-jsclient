/**
 * Tripartie Web API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@tripartie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ModelTransactionTemplate model module.
 * @module model/ModelTransactionTemplate
 * @version 1.0
 */
class ModelTransactionTemplate {
    /**
     * Constructs a new <code>ModelTransactionTemplate</code>.
     * @alias module:model/ModelTransactionTemplate
     */
    constructor() { 
        
        ModelTransactionTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelTransactionTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelTransactionTemplate} obj Optional instance to populate.
     * @return {module:model/ModelTransactionTemplate} The populated <code>ModelTransactionTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelTransactionTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('permalink')) {
                obj['permalink'] = ApiClient.convertToType(data['permalink'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('sellerExternalId')) {
                obj['sellerExternalId'] = ApiClient.convertToType(data['sellerExternalId'], 'String');
            }
            if (data.hasOwnProperty('sellerTripartieId')) {
                obj['sellerTripartieId'] = ApiClient.convertToType(data['sellerTripartieId'], 'String');
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = ApiClient.convertToType(data['subTotal'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('flow')) {
                obj['flow'] = ApiClient.convertToType(data['flow'], 'String');
            }
            if (data.hasOwnProperty('buyerFees')) {
                obj['buyerFees'] = ApiClient.convertToType(data['buyerFees'], 'Number');
            }
            if (data.hasOwnProperty('buyerTotal')) {
                obj['buyerTotal'] = ApiClient.convertToType(data['buyerTotal'], 'Number');
            }
            if (data.hasOwnProperty('sellerFees')) {
                obj['sellerFees'] = ApiClient.convertToType(data['sellerFees'], 'Number');
            }
            if (data.hasOwnProperty('sellerTotal')) {
                obj['sellerTotal'] = ApiClient.convertToType(data['sellerTotal'], 'Number');
            }
            if (data.hasOwnProperty('adUrl')) {
                obj['adUrl'] = ApiClient.convertToType(data['adUrl'], 'String');
            }
            if (data.hasOwnProperty('allowPriceChange')) {
                obj['allowPriceChange'] = ApiClient.convertToType(data['allowPriceChange'], 'Boolean');
            }
            if (data.hasOwnProperty('hasPicture')) {
                obj['hasPicture'] = ApiClient.convertToType(data['hasPicture'], 'Boolean');
            }
        }
        return obj;
    }


}

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
 * The original Ad's URL.
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






export default ModelTransactionTemplate;

