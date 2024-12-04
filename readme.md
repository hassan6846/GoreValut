# Goresee API Endpoints

A comprehensive list of endpoints available in the Goresee API.

---
## Disclaimer🔴

I do not own this API, and I am not responsible for any kind of loss. The API is hosted by [goresee.com](https://goresee.com) on PeerTube. We are not storing anything in a professional or official way. I am just providing the resource to use.  
I am writing this just to make this resource available for people who want to integrate data into their apps or for those who might not have any idea about PeerTube and want to start quickly with its functionality.


---
## API Reference

#### Get all Videos
###### the default has ***count*** 15 and  ***start*** (pagination) 1
```http
  GET https://goresee.com/api/v1/videos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `count` | `number` | **Optional**.  Optional. The number of videos to retrieve. The default is 15(e.g it will return 15 object/documents of json), and the value must be between **1** and **100** (inclusive)|
| `start` | `number` | **optional**. Think of `start` as a pagination index. It allows you to paginate to the next page and skip previous items, starting from the given index.|
| `id` | `string` | **optional**. Allows to get single document.|



#### Get Single Document By Id

```http
  GET https://goresee.com/api/v1/videos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. uuId of item to fetch  |

#### Search Video

```http
  GET https://goresee.com/api/v1/videos?search=${string}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `string`      | `string` | **Required**.Keyword to fetch  |


#### Get All Available Categories.
```http
  GET https://goresee.com/api/v1/videos/categories
```


#### List available video languages
```
 https://goresee.com/api/v1/videos/languages
 ```

#### List available video privacy policies
```
https://goresee.com/api/v1/videos/privacies
```
#### Download a Specific Video
```
https://goresee.com/download/streaming-playlists/hls/videos/217acdbf-c4c2-4aca-b203-42d40486d264-576-fragmented.mp4
```


#### Like/ Unlike a Video.
###### 
```http
  GET https://goresee.com/videos/embed/${id}
```


