# BEB-05-Joyful Maplestory NFT

## 프로젝트 소개

메이플스토리 에셋을 활용한 수집형 NFT 웹 게임

## 폰트 설치

https://maplestory.nexon.com/Media/Font

## 환경 설정

- npm install 명령어로 모듈 설치 
`client`, `contract`, `server` 폴더 하위

```
npm install
```
- 환경 변수 설정
`client`, `contract`, `server` 폴더 하위에 `.env.example`을 참고하여 `.env`로 생성하고, 환경 변수들을 넣어준다.

- 도커로 MySQL 서버 실행

```
docker pull mysql:8
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
```

- DDL/쿼리를 위한 접근
```
docker exec -it mysql-container bash
mysql -u root -p
{패스워드 입력}
```

- MYSQL Sequelize 사용법
mysql에 `jmt` 데이터베이스 생성 후 진행한다.
```
npx sequelize db:migrate
//npx sequelize db:migrate:undo
```


- DB/컨트랙트 재설정
```
# db
docker stop mysql-container
docker rm mysql-container
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8
docker exec -it mysql-container bash
mysql -u root -p
{패스워드 입력}
create database jmt

# server 폴더에서
npx sequelize db:migrate

# contract (from truffle)
compile --all
migrate --reset

# 필요시 abi 파일 변경
# .env 파일의 컨트랙트 주소 변경
```

## REST API

### 엔드포인트
- 개발: http://localhost:4000
- 라이브: TBD

### 회원가입 API

```
POST /user/signup
```

- Request
```
{
    "username": "유저 이름",
    "address": "지갑 주소"
}
```


- Response
```
201 SUCCESS
{
    "message": "회원가입이 완료되었습니다.",
    "data": {
        "username": "유저 이름",
        "address": "지갑 주소"
    }
}

409 FAIL
"이미 가입된 유저 이름입니다."
```

### 유저 이름 조회 API
```
GET /user/check/${userAddr}
```
- Response
```
200 SUCCESS
{
    message: "true",
            username: user.username,
            address: user.address
}

200 FAIL
{
    message: "false"
}
```
