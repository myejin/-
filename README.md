# Docker_Nginx_Express_MongoDB

### 1. How to RUn

```bash
$ docker-compose up -d
```

### 2. Curl Test

```
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://daum.net" }' | jq
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://naver.com" }' | jq
curl -X GET -H 'Accept: application/json' "http://[IP address]:8000/metadatas" | jq
```

### 3. Structure

![그림3](https://user-images.githubusercontent.com/42771578/123518823-b2769180-d6e2-11eb-8234-508a1a0b414b.png)
