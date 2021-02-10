# TripartieWebAPI.WebhooksApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validate**](WebhooksApi.md#validate) | **GET** /api/web/webhooks/ | Validate



## validate

> ModelWebhook validate(opts)

Validate

Check a webhook&#39;s authenticity 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let webhooksApi = new TripartieWebAPI.WebhooksApi();
let opts = {
  'eventType': proposition_sent, // String | The webhook type.
  'transactionTemplateExternalId': template-87, // String | The Transaction template's External ID.
  'transactionTemplateTripartieId': 24, // Number | The Transaction template's Tripartie ID.
  'eventTimestamp': 1612893903 // Number | The event timestamp.
};
webhooksApi.validate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventType** | **String**| The webhook type. | [optional] 
 **transactionTemplateExternalId** | **String**| The Transaction template&#39;s External ID. | [optional] 
 **transactionTemplateTripartieId** | **Number**| The Transaction template&#39;s Tripartie ID. | [optional] 
 **eventTimestamp** | **Number**| The event timestamp. | [optional] 

### Return type

[**ModelWebhook**](ModelWebhook.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
