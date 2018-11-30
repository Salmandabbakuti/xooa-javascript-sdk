# XooaBlockchainApis.InvokeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoke**](InvokeApi.md#invoke) | **POST** /invoke/{fcn} | Submit blockchain transaction


<a name="invoke"></a>
# **invoke**
> invoke(fcn, opts)

Submit blockchain transaction

The Invoke API End Point is used for submitting transaction for processing by the blockchain Smart Contract app. The end point must call a function already defined in your Smart Contract app which will process the Invoke request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. For example, if testing the sample get-set Smart Contract app, use ‘set’ (without quotes)  as the value for fcn.   The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is also responsible for arguments validation and exception management. The payload object of Invoke Transaction Response in case of Final Response is determined by the Smart Contract app.   A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls Required permission: write (\&quot;Access\&quot;:\&quot;rw\&quot;)

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.InvokeApi();

var fcn = "fcn_example"; // String | The blockchain Smart Contract app function name to invoke

var opts = { 
  'async': "async_example", // String | Call this request asynchronously without waiting for response
  'timeout': "timeout_example" // String | Request timeout in millisecond
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.invoke(fcn, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fcn** | **String**| The blockchain Smart Contract app function name to invoke | 
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout in millisecond | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

