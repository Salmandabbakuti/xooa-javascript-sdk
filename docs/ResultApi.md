# XooaBlockchainApis.ResultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**result**](ResultApi.md#result) | **GET** /results/{ResultId} | Fetch result of previously submitted transaction


<a name="result"></a>
# **result**
> result(resultId)

Fetch result of previously submitted transaction

API Returns result of previously submitted transaction

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.ResultApi();

var resultId = "resultId_example"; // String | Returned in previous Query/Invoke/Participant Operation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.result(resultId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resultId** | **String**| Returned in previous Query/Invoke/Participant Operation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

