# XooaBlockchainApis.QueryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query**](QueryApi.md#query) | **GET** /query/{fcn} | Query Blockchain data


<a name="query"></a>
# **query**
> query(fcn, opts)

Query Blockchain data

The query API End Point is used for querying blockchain state. The end point must call a function already defined in your Smart Contract app which will process the query request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is responsible for validation and exception management. For example, if testing the sample get-set Smart Contract app, enter ‘get’ (without quotes) as the value for fcn.   The response body is also determined by the Smart Contract app, and that’s also the reason why a consistent response sample is unavailable for this end point. A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls. In contrast to Invoke, the Query end point will often return fast even when called in Synchronous mode  Required permission: read (\&quot;Access\&quot;:\&quot;rw\&quot; or \&quot;Access\&quot;:\&quot;r\&quot;)

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.QueryApi();

var fcn = "fcn_example"; // String | The blockchain Smart Contract app function name to call

var opts = { 
  'args': "args_example", // String | Argument(s) to pass to the blockchain Smart Contract app function. example - [\"arg1\",\"arg2\"]
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
apiInstance.query(fcn, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fcn** | **String**| The blockchain Smart Contract app function name to call | 
 **args** | **String**| Argument(s) to pass to the blockchain Smart Contract app function. example - [\&quot;arg1\&quot;,\&quot;arg2\&quot;] | [optional] 
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout in millisecond | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

