# TripartieWebAPI.UsersApi

All URIs are relative to *https://platform.preprod.tripartie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**register**](UsersApi.md#register) | **POST** /api/web/users/ | Register
[**fetch**](UsersApi.md#fetch) | **GET** /api/web/users/ | Fetch
[**unregister**](UsersApi.md#unregister) | **DELETE** /api/web/users/ | Unregister


## register

> ModelUser register(requestRegisterUser)

Register

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let usersApi = new TripartieWebAPI.UsersApi();
let requestRegisterUser = {
    email: "john.doe@gmail.com",
    externalId: "user-96",
    displayName: "John D."
};
usersApi.register(requestRegisterUser).then((data) => {
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


## fetch

> ModelUser fetch(opts)

Fetch

Fetch a User by its External ID or Tripartie ID.<br /> You MUST provide either `external-id` or `tripartie-id`, but not both. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let usersApi = new TripartieWebAPI.UsersApi();
let opts = {
  'externalId': 'user-96', // String | The User's External ID.
};
usersApi.fetch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | **String**| The User&#39;s External ID. | [optional] 
 **tripartieId** | **Number**| The User&#39;s Tripartie ID. | [optional] 

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json



## unregister

> unregister(opts)

Unregister

Unregister a User using its External ID or Tripartie ID.<br /> You MUST provide either `external-id` or `tripartie-id`, but not both.<br /> This wont delete the User&#39;s Tripartie account. 

### Example

```javascript
import TripartieWebAPI from 'TripartieWebAPI-JSClient';
let defaultClient = TripartieWebAPI.ApiClient.instance;
// Configure API key authorization: ClientIdAuth
let ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = 'YOUR CLIENT ID';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ClientIdAuth.apiKeyPrefix = 'Token';

let usersApi = new TripartieWebAPI.UsersApi();
let opts = {
  'externalId': 'user-96', // String | The User's External ID.
};
usersApi.unregister(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | **String**| The User&#39;s External ID. | [optional] 
 **tripartieId** | **Number**| The User&#39;s Tripartie ID. | [optional] 

### Return type

null (empty response body)

### Authorization

[ClientIdAuth](../README.md#ClientIdAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

