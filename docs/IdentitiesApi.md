# XooaBlockchainApis.IdentitiesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticatedIdentityInformation**](IdentitiesApi.md#authenticatedIdentityInformation) | **GET** /identities/me/ | Authenticated Identity Information
[**deleteIdentity**](IdentitiesApi.md#deleteIdentity) | **DELETE** /identities/{Id} | Delete Identity
[**enrollment**](IdentitiesApi.md#enrollment) | **POST** /identities/ | Enroll Identity
[**identitiesGetAllIdentities**](IdentitiesApi.md#identitiesGetAllIdentities) | **GET** /identities/ | Get All Identities
[**identityInformation**](IdentitiesApi.md#identityInformation) | **GET** /identities/{Id} | Identity Information
[**regenerateToken**](IdentitiesApi.md#regenerateToken) | **POST** /identities/{Id}/regeneratetoken | Regenerate Identity API Token


<a name="authenticatedIdentityInformation"></a>
# **authenticatedIdentityInformation**
> authenticatedIdentityInformation()

Authenticated Identity Information

This End Point Returns Information about the Authenticated Identity

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.authenticatedIdentityInformation(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIdentity"></a>
# **deleteIdentity**
> deleteIdentity(id, opts)

Delete Identity

Delete Identity.

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var id = "id_example"; // String | Identity Id

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
apiInstance.deleteIdentity(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identity Id | 
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout in millisecond | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="enrollment"></a>
# **enrollment**
> enrollment(opts)

Enroll Identity

The Enroll Identity end point is used to  enroll new identities for the Smart Contract app.  A success response includes the API Key generated for the identity. This API Key can be used to call API End points on behalf of the enrolled identity. This End Point provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this end point will appear, and can be managed, using Xooa console under the identities tab of the Smart Contract app Required permission: manage identities (canManageIdentities&#x3D;true)

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var opts = { 
  'async': "async_example", // String | Call this request asynchronously without waiting for response
  'timeout': "timeout_example" // String | Request timeout
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.enrollment(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **async** | **String**| Call this request asynchronously without waiting for response | [optional] 
 **timeout** | **String**| Request timeout | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="identitiesGetAllIdentities"></a>
# **identitiesGetAllIdentities**
> identitiesGetAllIdentities()

Get All Identities

Get all identities from the identity registry

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.identitiesGetAllIdentities(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="identityInformation"></a>
# **identityInformation**
> identityInformation(id)

Identity Information

Get the specified identity from the identity registry

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var id = "id_example"; // String | Identity Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.identityInformation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identity Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="regenerateToken"></a>
# **regenerateToken**
> regenerateToken(id)

Regenerate Identity API Token

Regenerate Identity API Token

### Example
```javascript
var XooaBlockchainApis = require('xooa_blockchain_apis');

var apiInstance = new XooaBlockchainApis.IdentitiesApi();

var id = "id_example"; // String | Identity Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.regenerateToken(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identity Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

