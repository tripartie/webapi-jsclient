# TripartieWebAPI.UsersApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**unregister**](UsersApi.md#unregister) | **DELETE** /api/web/users/ | Unregister
[**fetch**](UsersApi.md#fetch) | **GET** /api/web/users/ | Fetch
[**register**](UsersApi.md#register) | **POST** /api/web/users/ | Register



## unregister

> unregister(opts)

Unregister

Unregister a User using its External ID or Tripartie ID.&lt;br /&gt; You MUST provide either &lt;code&gt;external-id&lt;/code&gt; or &lt;code&gt;tripartie-id&lt;/code&gt;, but not both.&lt;br /&gt; This wont delete the User&#39;s Tripartie account. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let apiInstance = new TripartieWebAPI.UsersApi();
let opts = {
  'externalId': "externalId_example", // String | The resource's External ID.
  'tripartieId': 56 // Number | The resource's Tripartie ID.
};
apiInstance.unregister(opts).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetch

> ModelUser fetch(opts)

Fetch

Fetch a User by its External ID or Tripartie ID.&lt;br /&gt; You MUST provide either &lt;code&gt;external-id&lt;/code&gt; or &lt;code&gt;tripartie-id&lt;/code&gt;, but not both. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let apiInstance = new TripartieWebAPI.UsersApi();
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

[**ModelUser**](ModelUser.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## register

> ModelUser register(requestRegisterUser)

Register

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let apiInstance = new TripartieWebAPI.UsersApi();
let requestRegisterUser = new TripartieWebAPI.RequestRegisterUser(); // RequestRegisterUser | 
apiInstance.register(requestRegisterUser).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestRegisterUser** | [**RequestRegisterUser**](RequestRegisterUser.md)|  | 

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

