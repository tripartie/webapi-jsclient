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
**flow** | **String** | The desired flow (see &lt;a href&#x3D;\&quot;#tag/Flows\&quot;&gt;Flows&lt;/a&gt;). | 
**adUrl** | **String** | The original ad&#39;s URL. | [optional] 
**allowPriceChange** | **Boolean** | Allow price negociation? | [optional] [default to true]
**picture** | **String** | Ad picture, in &lt;strong&gt;base64 format&lt;/strong&gt;.&lt;br /&gt; Max initial file size: 2Mo.&lt;br /&gt; &lt;strong&gt;You MUST send only the binary code.&lt;/strong&gt; Do not send the first part that some converters add into the binary code which is &lt;code&gt;data:image/png;base64,&lt;/code&gt;.  | [optional] 


