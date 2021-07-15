# Webpage Metadata Crawler

## :bulb: Summary 
- 
---
## :bulb: How to Run
:heavy_check_mark: docker 및 docker-compose 사전 설치
```bash
$ docker-compose up -d
```
--- 
## :bulb: Curl Test
- `curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://daum.net" }'`
```
{
  "_id":"60efafa051ff2700147cd923",
  "url":"https://www.daum.net/",
  "title":"Daum",
  "image":{"url":"//i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001"},
  "description":"나의 관심 콘텐츠를 가장 즐겁게 볼 수 있는 Daum",
  "__v":0
}
```

- `curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://naver.com" }'`
```
{
  "_id":"60efb15c51ff2700147cd92f",
  "title":"네이버",
  "url":"https://www.naver.com/",
  "image":{"url":"https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"},
  "description":"네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
  "__v":0
}
```

- `curl -X GET -H 'Accept: application/json' "http://[IP address]:8000/metadatas"`
```
[{
  "image":{"url":"//i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001"},
  "_id":"60efafa051ff2700147cd923",
  "url":"https://www.daum.net/",
  "title":"Daum",
  "description":"나의 관심 콘텐츠를 가장 즐겁게 볼 수 있는 Daum",
  "__v":0
},
{
  "image":{"url":"https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"},
  "_id":"60efb15c51ff2700147cd92f",
  "title":"네이버",
  "url":"https://www.naver.com/",
  "description":"네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
  "__v":0
}]
```
---
## :bulb: Structure

![그림3](https://user-images.githubusercontent.com/42771578/123518823-b2769180-d6e2-11eb-8234-508a1a0b414b.png)
