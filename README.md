
<img src="https://user-images.githubusercontent.com/108816777/197122672-123669e9-134a-49d9-8d9f-b4517d8b0899.png" width="200px"/>


### 일일일차(一日一茶_팀의 **`공차`** 모바일웹 Clone 코딩 프로젝트입니다.

👉[공차](https://www.gong-cha.co.kr)

---

<br>

## **프로젝트 소개**

```
카페 공차 모바일 웹 사이트를 클론하여 전반적인 UI를 구성하였고 어플을 참고하여 스마트 오더 기능을 추가로 구현했습니다.
로그인 시 현재 위치 정보를 받아서 가장 가까운 공차 매장을 보여주고 선택할 수 있게 했습니다. 이후 스마트오더 기능을 해당 매장에 음료 주문하는 기능입니다.
```
<br>

### **프로젝트 구현 영상**

[![공차 모바일 웹 클론프로젝트 유튜브 동영상](http://img.youtube.com/vi/pkfz51tCebQ/0.jpg)](https://youtu.be/pkfz51tCebQ?t=0s) 


<br>

### **개발 인원 및 기간**

- 개발기간 : 2022/9/19 ~ 2022/9/29
- 개발 인원 : 4명
- 프론트 엔드 : 박찬영, 이고운, 이다익
- 백 엔드 : 전준영
- [프론트엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team1-front)
- [백엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team1-back)

<br>

## 역할 분담

- 박찬영
  - 회원가입 - UI, API 통신, 유효성 검사
  - 로그인 -UI, API 통신
  - 카카오톡 로그인 - 카카오톡 인가, API 통신
  - 제품 검색 - UI, 검색로직
  
- 이고운
  - 메인페이지 및 footer
  - 매장 검색 메뉴 필터링 및 지도 API로 삽입 
  - 상세페이지내 리뷰 
  - 기타 서브 페이지 UI 구현 - 브랜드 소개글 등

- 이다익
  - 초기세팅 및 전역 상태 관리
  - Nav
  - 제품 카테고리 페이지 및 상세 페이지 
  - 장바구니 페이지
  - 바로주문 및 장바구니 주문 페이지 
  - 공지사항 페이지
  - 로그인 후 유저의 가게 매칭 팝업 
  - 전체적인 에러 모달 팝업
  - 주문 내역 페이지 및 주문 취소

- 전준영
  - 상세페이지 API 
  - 장바구니 CRUD 
  - 주문관련 API 
  - 리뷰 CRD
  - 검색 API 
  - 회원가입 API 
  - 로그인 API
  - kakao 로그인 API 
  - 주문내역 API 
  - 매장관련 API

<br>

### **프로젝트 선정이유**

- 모바일 웹 수요증가에 따른 모바일웹 개발 경험 필요성이 대두되어, 공차 모바일웹 + 어플기능 및 기타 필요 기능 추가 구현함.
<br> 

## **적용 기술 및 구현 기능**

### **적용 기술**

> **Front-End** : vite, react.js, Typescript, zustand, axios, styled-components

> **Back-End** : express, axios, jsonwebtoken, typeorm, mySql, bcryptjs

<br>

### **구현 기능**

📌[API 명세서 ](https://documenter.getpostman.com/view/22723440/2s7Z7WpafH)

**회원가입**
- 약관동의 페이지에 필수 체크 사항 체크 후 다음단계로 진행
- 이메일 중복 확인 가능
- 이메일 및 비밀번호에 유효성 검사
- 회원가입 완료 후 포인트 3만 포인트 지급


**로그인**
- 자체 회원가입을 통한 로그인 가능
- 카카오톡 로그인 API 이용으로 소셜 로그인 구현


**메인 화면**
- 메인페이지 상단에 슬라이드 구현
- 매장 검색 input창에서 검색하면 매장검색 메뉴로 이동하여 검색 결과 출력
- 로그인 후 메인화면 넘어오면 현재 위치 정보 동의 메세지 뜸.
- 위치 동의하면 제일 가까운 매장이 팝업으로 생성되어 매장 선택가능 (매장 선택 필수)
- 매장 선택하면 메인화면 상단에 해당 매장 명 출력

**매장 검색**
- 시/도 검색으로 1차 필터, 매장명 검색으로 2차 필터링 진행
- 매장 클릭 시 매장 위치 출력
- 매장 위치는 네이버 지도 API 이용하여 위도, 경도로 받아와 위치 출력됨.


**음료 검색**
- 음료 카테고리별로 필터
- 음료 리스트 클릭시 해당 음료의 상세페이지로 이동
- 상단에 돋보기 모양 클릭 후 검색하여 음료 이름 필터링

**음료 상세페이지**
- 음료 주문을 위한 상세페이지
- 수량, 테이크아웃, 사이즈, 당도, 얼음, 추가옵션 등의 퍼스널 옵션 선택 기능
- 추가옵션의 토핑은 최대 2개 선택 가능
- 장바구니/ 바로주문 기능
- 하단에는 음료 리뷰 작성 기능, 리뷰는 해당 메뉴 구매한 사람만 작성 가능
- 별점 구현으로 점수 및 한줄평 작성
- 본인일 시 리뷰 삭제 가능


**음료 장바구니페이지**
- 음료 상세페이지에서 장바구니 버튼 클릭 시 장바구니에 담김
- 장바구니에 담은 음료 종류 및 옵션 확인 가능
- 음료 전체/일부 선택 후 삭제/주문 가능
- 음료 수량 수정 가능


**음료 주문페이지**
- 선택한 메장과 이용자, 선택 메뉴 및 옵션 상세 내용 출력됨.
- 현재 잔여 포인트 확인 가능
- 결제 및 주문 버튼 클릭 시 주문됨.
- 주문 완료되면 기존 지급했던 3만 포인트에서 해당 금액 만큼 차감
- 잔여포인트 이상으로 주문 시도할 시 에러 메세지


**공지사항 페이지**
- 공지사항/ 보도자료 navbar
- 날짜 및 내용 select box에 따라 검색 가능


**주문내역 페이지**
- 주문한 내용 확인 가능 (음료, 옵션, 금액)
- 주문 취소 버튼으로 주문 취소 가능
- 결제완료/결제취소 여부 확인 가능


<br>

## **팀 노션**

📝[일일일차](https://www.notion.so/wecode/1-1fddf5f2f4d244799041fa0129519fe3)
