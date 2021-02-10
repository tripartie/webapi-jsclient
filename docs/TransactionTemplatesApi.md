# TripartieWebAPI.TransactionTemplatesApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch**](TransactionTemplatesApi.md#fetch) | **GET** /api/web/transaction-templates/ | Fetch
[**create**](TransactionTemplatesApi.md#create) | **POST** /api/web/transaction-templates/ | Create


## create

> ModelTransactionTemplate create(requestCreateTransactionTemplate)

Create

Create a Transaction template.<br /> You MUST provide either sellerExternalId or sellerTripartieId but not both 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let transactionTemplatesApi = new TripartieWebAPI.TransactionTemplatesApi();
let requestCreateTransactionTemplate = {
    title: "Playstation 5 brand new",
    description: "A brand new PS5 in its box, left unoppened",
    externalId: "template-87",
    sellerExternalId: "user-96",
    sellerTripartieId: 5,
    subTotal: 30000,
    currency: "EUR",
    flow: "hand",
    adUrl: "https://occasions.com/ads/87",
    allowPriceChange: false,
    picture: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
};
transactionTemplatesApi.create(requestCreateTransactionTemplate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestCreateTransactionTemplate** | [**RequestCreateTransactionTemplate**](RequestCreateTransactionTemplate.md)|  | 

### Return type

[**ModelTransactionTemplate**](ModelTransactionTemplate.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json



## fetch

> ModelTransactionTemplate fetch(opts)

Fetch

Fetch a Transaction template by its External ID or Tripartie ID.<br /> You MUST provide either `external-id` or `tripartie-id`, but not both. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let transactionTemplatesApi = new TripartieWebAPI.TransactionTemplatesApi();
let opts = {
  'externalId': 'template-87', // String | The Transaction template's External ID.
};
transactionTemplatesApi.fetch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | **String**| The Transaction template&#39;s External ID. | [optional] 
 **tripartieId** | **Number**| The Transaction template&#39;s Tripartie ID. | [optional] 

### Return type

[**ModelTransactionTemplate**](ModelTransactionTemplate.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

