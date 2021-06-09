# Docker_Nginx_Express_MongoDB

### Usage

```bash
$ docker-compose up -d
```

### Curl test

```
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://daum.net" }' | jq
curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' "http://[IP address]:8000/metadata" -d '{ "url": "https://naver.com" }' | jq
curl -X GET -H 'Accept: application/json' "http://[IP address]:8000/metadatas" | jq
```

### Structure

![pic](https://user-images.githubusercontent.com/42771578/121209144-9044dd00-c8b5-11eb-85a5-227fbaf68a50.png)
