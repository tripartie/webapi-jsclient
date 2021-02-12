# TripartieWebAPI.WebhooksApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validate**](WebhooksApi.md#validate) | **GET** /api/web/webhooks/ | Validate



## validate

> Webhook validate(opts)

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
  'uuid': '123e4567-e89b-12d3-a456-426614174000' // String | The Webhook UUID.
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
 **uuid** | **String**| The Webhook UUID. | [optional] 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
