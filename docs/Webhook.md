# TripartieWebAPI.Webhook

## Properties

Name | Type | Description
------------ | ------------- | -------------
**uuid** | **String** | The Webhook UUID.
**eventType** | **String** | The webhook type.
**transactionTemplateExternalId** | **String** | The Transaction template&#39;s External ID.
**transactionTemplateTripartieId** | **Number** | The Transaction template&#39;s Tripartie ID.
**buyerExternalId** | **String** | The Buyer&#39;s External ID.
**buyerTripartieId** | **Number** | The Buyer&#39;s Tripartie ID.
**eventTimestamp** | **Number** | The event timestamp.



## Enum: EventTypeEnum


* `proposition_sent`

* `proposition_accepted`

* `proposition_rejected`

* `transaction_completed`

* `transaction_canceled`




