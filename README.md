# TripartieWebAPI - JSClient

The Tripartie Web API allows you to easily create Transaction templates.<br />
Those templates allows a User (the Buyer) to quickly initiate a Transaction pre-configured by another User (the Seller).<br />
This allows you to add a Secured Payment button on your website pages.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### Using npm

```shell
npm install @tripartie/webapi-jsclient --save
```

### In `<script>` HTML tag

```html
<script src="https://cdn.jsdelivr.net/npm/@tripartie/webapi-jsclient/dist/tripartiewebapi-jsclient.min.js"></script>
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
// Only if using with npm. This is not required with `<script>` tag.
const TripartieWebAPI = require('@tripartie/webapi-jsclient');

const defaultClient = TripartieWebAPI.ApiClient.instance;
const ClientIdAuth = defaultClient.authentications['ClientIdAuth'];
ClientIdAuth.apiKey = "YOUR CLIENT ID"

const usersApi = new TripartieWebApi.UsersApi();
const user = {
    email: "john.doe@gmail.com",
    externalId: "johndoe42",
};
usersApi.register(user)
    .then((user) => {
        console.log('User registered', user);
    })
    .catch((err) => {
        console.error('Could not register user', err);
    });

const transactionTemplatesApi = new TripartieWebAPI.TransactionTemplatesApi()
const template = {
    title: "Playstation 5",
    description: "Brand new",
    subTotal: 50000,
    externalId: "playstation5-436",
    sellerExternalId: "johndoe42",
    currency: "EUR",
    flow: "hand_delivery",
    adUrl: "https://my-website.com/ads/playstation5-436",
};
transactionTemplatesApi.create(template)
    .then((transactionTemplate) => {
        console.log('Transaction template created', transactionTemplate);
    })
    .catch((err) => {
        console.error('Could not create transaction template', err);
    });


```

## Documentation for API Endpoints

All URIs are relative to *https://platform.preprod.tripartie.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TripartieWebAPI.TransactionTemplatesApi* | [**fetch**](docs/TransactionTemplatesApi.md#fetch) | **GET** /api/web/transaction-templates/ | Fetch
*TripartieWebAPI.TransactionTemplatesApi* | [**create**](docs/TransactionTemplatesApi.md#create) | **POST** /api/web/transaction-templates/ | Create
*TripartieWebAPI.UsersApi* | [**unregister**](docs/UsersApi.md#unregister) | **DELETE** /api/web/users/ | Unregister
*TripartieWebAPI.UsersApi* | [**fetch**](docs/UsersApi.md#fetch) | **GET** /api/web/users/ | Fetch
*TripartieWebAPI.UsersApi* | [**register**](docs/UsersApi.md#register) | **POST** /api/web/users/ | Register
*TripartieWebAPI.WebhooksApi* | [**validate**](docs/WebhooksApi.md#validate) | **GET** /api/web/webhooks/ | Validate


## Documentation for Models

 - [TripartieWebAPI.Error](docs/Error.md)
 - [TripartieWebAPI.ModelTransactionTemplate](docs/ModelTransactionTemplate.md)
 - [TripartieWebAPI.ModelUser](docs/ModelUser.md)
 - [TripartieWebAPI.ModelWebhook](docs/ModelWebhook.md)
 - [TripartieWebAPI.RequestCreateTransactionTemplate](docs/RequestCreateTransactionTemplate.md)
 - [TripartieWebAPI.RequestRegisterUser](docs/RequestRegisterUser.md)


## Documentation for Authorization



### ClientIdAuth


- **Type**: API key
- **API key parameter name**: client-id
- **Location**: URL query string


## Troubleshooting

### Webpack

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```
