# TripartieWebAPI.RequestCreateTransactionTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title. | 
**description** | **String** | The description. | [optional] 
**externalId** | **String** | The Transaction template&#39;s External ID. | [optional] 
**sellerExternalId** | **String** | The Seller&#39;s External ID. | [optional] 
**sellerTripartieId** | **String** | The Seller&#39;s Tripartie ID. | [optional] 
**subTotal** | **Number** | The price, in cents. | 
**currency** | **String** | The currency code (ISO 4217). | 
**flow** | **String** | The desired flow. | 
**productCategory** | **String** | The product category (required for improved anti-fraud protection). | [optional] [default to 'other']
**adUrl** | **String** | The original Ad&#39;s URL. | [optional] 
**allowPriceChange** | **Boolean** | Allow price negociation? | [optional] [default to true]
**picture** | **String** | Ad picture, in **base64 format**.<br /> Max initial file size: 2Mo.<br />**You MUST send only the binary code.** Do not send the first part that some converters add into the binary code which is `data:image/png;base64, `.  | [optional] 


