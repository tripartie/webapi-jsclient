# TripartieWebAPI.TransactionTemplatesApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch**](TransactionTemplatesApi.md#fetch) | **GET** /api/web/transaction-templates/ | Fetch
[**create**](TransactionTemplatesApi.md#create) | **POST** /api/web/transaction-templates/ | Create



## fetch

> ModelTransactionTemplate fetch(opts)

Fetch

Fetch a Transaction template by its External ID or Tripartie ID.&lt;br /&gt; You MUST provide either &lt;code&gt;external-id&lt;/code&gt; or &lt;code&gt;tripartie-id&lt;/code&gt;, but not both. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let apiInstance = new TripartieWebAPI.TransactionTemplatesApi();
let opts = {
  'externalId': "externalId_example", // String | The resource's External ID.
  'tripartieId': 56 // Number | The resource's Tripartie ID.
};
apiInstance.fetch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | **String**| The resource&#39;s External ID. | [optional] 
 **tripartieId** | **Number**| The resource&#39;s Tripartie ID. | [optional] 

### Return type

[**ModelTransactionTemplate**](ModelTransactionTemplate.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## create

> ModelTransactionTemplate create(requestCreateTransactionTemplate)

Create

Create a Transaction template.&lt;br /&gt; You MUST provide either sellerExternalId or sellerTripartieId but not both 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let apiInstance = new TripartieWebAPI.TransactionTemplatesApi();
let requestCreateTransactionTemplate = new TripartieWebAPI.RequestCreateTransactionTemplate(); // RequestCreateTransactionTemplate | 
apiInstance.create(requestCreateTransactionTemplate).then((data) => {
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

