# XooaBlockchainApis.BlockchainApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockData**](BlockchainApi.md#blockData) | **GET** /block/{BlockNumber} | Get block data (block #)
[**blockHeight**](BlockchainApi.md#blockHeight) | **GET** /block/current | Get current blocks


<a name="blockData"></a>
# **blockData**
> blockData(blockNumber, opts)

Get block data (block #)

Get specific block information such as hash, # of transactions

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.BlockchainApi();

var blockNumber = "blockNumber_example"; // String | Block number to fetch data

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
apiInstance.blockData(blockNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| Block number to fetch data | 
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout in millisecond | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="blockHeight"></a>
# **blockHeight**
> blockHeight(opts)

Get current blocks

Get current blocks in the network

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.BlockchainApi();

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
apiInstance.blockHeight(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout in millisecond | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

