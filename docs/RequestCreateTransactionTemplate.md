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
**shippingCosts** | **Number** | The shipping costs, in cents.<br />If provided, the Seller will have to handle shipping by himself.<code>packageFormat</code> and <code>shippingProviders</code> will be ignored, and automatic shipping costs calculation and shipping label generation will be disabled.  | [optional] 
**packageFormat** | [**RequestCreateTransactionTemplatePackageFormat**](RequestCreateTransactionTemplatePackageFormat.md) |  | [optional] 
**shippingProviders** | **[String]** | Allowed shipping providers.<br /><strong>Required for automatic shipping costs and shipping label generation.</strong> | [optional] 
**currency** | **String** | The currency code (ISO 4217). | 
**flow** | **String** | The desired flow. | 
**productCategory** | **String** | The product category (required for improved anti-fraud protection). | [optional] [default to 'other']
**adUrl** | **String** | The original Ad&#39;s URL. | [optional] 
**allowPriceChange** | **Boolean** | Allow price negociation? | [optional] [default to true]
**allowInPerson** | **Boolean** | Allow hand-over? | [optional] [default to true]
**allowDelivery** | **Boolean** | Allow delivery? | [optional] [default to true]
**picture** | **String** | Ad picture, in **base64 format**.<br /> Max initial file size: 2Mo.<br />**You MUST send only the binary code.** Do not send the first part that some converters add into the binary code which is `data:image/pn ;base64, `.  | [optional]



## Enum: [ShippingProvidersEnum]


* `colissimo` (value: `"colissimo"`)

* `tnt` (value: `"tnt"`)

* `chronopost` (value: `"chronopost"`)

* `dpd` (value: `"dpd"`)

* `ups` (value: `"ups"`)

* `dhl` (value: `"dhl"`)

* `fedex` (value: `"fedex"`)

* `swiss-post` (value: `"swiss-post"`)





## Enum: ProductCategoryEnum


* `auto_moto` (value: `"auto_moto"`)

* `fashion` (value: `"fashion"`)

* `house_garden` (value: `"house_garden"`)

* `service` (value: `"service"`)

* `sport` (value: `"sport"`)

* `telecom` (value: `"telecom"`)

* `other` (value: `"other"`)




