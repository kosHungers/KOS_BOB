# 경오밥 - 부평 맛집 검색 사이트 (개발 진행중)
## 0. Introduction
[경인지역 오프라인 스터디](https://likelion.notion.site/e77afef0be414defa34a6b5e8619fcd0)는 멋쟁이사자처럼 Front-End 스쿨 3기를 계기로 결성한 경인지역 프론트엔드 개발자 모임입니다.  
교육기간 중 부평에서 매주 1번씩 정기 모임을 가질 때마다 매 끼니 메뉴를 고민하는 것이 번거로워 
[공공 API](https://www.data.go.kr/data/15103411/fileData.do?recommendDataYn=Y)를 사용한 부평 맛집 검색 사이트를 만들게 되었습니다.

## 1. <span id = "intro"> 프로젝트 소개 </span>
<img src= "https://user-images.githubusercontent.com/85055608/226501448-8004ccf8-cf86-41e4-a016-3a82aa60b508.png" alt="kobob">

<br/>
부평에서 식사하시나요? 부평구 공무원들이 자신있게 추천하는 맛집 리스트에서 오늘의 점심 메뉴를 골라보세요!  

 <details>
 
  <summary>목차</summary>
  1. [프로젝트 소개](#intro)   
  2. [팀원 소개](#members)
  3. [기능 요약](#feature)
  4. [기능 UI](#ui)
  5. [컨벤션](#convention)
  6. [주요 코드](#code)
  7. [트러블 슈팅](#trouble)
  8. [폴더 트리](#tree)
</details>

### 1.1 대표 ID 및 Password
- `ID` : 05280528@test.com
- `PW` : 123123

### 1.2 개발 환경

|구분|설명|
|:------:|---|
|FrontEnd|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">|
|BackEnd|<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">|
|협업 도구|<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white"> |


### 1.3 Version
```
react: ^18.2.0
react-router-dom: ^6.8.0
react-bootstrap: ^2.7.0
react-icons: ^4.7.1
axios: ^1.2.3
firebase: ^9.16.0
prettier: ^2.8.3
```

### 1.4 개발 일정 (2022.11 ~ 진행중)

<br/>

## 2. <span id = "members">팀원 소개</span>

경오밥 팀은 프론트엔드 개발자 4명으로 구성되었습니다.  
팀원 이름은 기여순이 아닌 가나다 순으로 정렬하였습니다.

| FE 김도영| FE 김성진| FE 윤슬기| FE 이석우| 
|:--:|:--:|:--:|:--:|
|<img src= "https://github.com/TeamGaebaljjang/PoRe_PhotoRecipe/blob/develop/src/assets/img/readme/RM%20profile-01.jpg?raw=true" alt="dyFlower" height=180 width=180> | <img src="https://user-images.githubusercontent.com/102042383/210314898-90e66e9f-36e7-4fb6-b821-d60fda7089f8.png" alt="seongjin77"  height=180 width=180>  | <img src="https://user-images.githubusercontent.com/62597615/210387976-caeac61e-367d-4f65-9d4a-13215b7c2dba.png" alt="icstuckyi"  height=180 width=180>  | <img src="https://avatars.githubusercontent.com/u/108033922?v=4" alt="Skylark92"  height=180 width=180>|
| <center>🙋 포트폴리오 </center><br/>🔗 [dyFlower](https://github.com/dyFlower) | 🙋 포트폴리오<br/> 🔗 [seongjin77](https://github.com/seongjin77) | 🙋 포트폴리오<br/> 🔗 [icstuckyi](https://github.com/icstuckyi) | 🙋 포트폴리오<br/>🔗 [Skylark92](https://github.com/Skylark92) |
| - | - | - | - |

<br/>

## 3. <span id = "feature">기능 요약</span>

- **🔎 검색** 
  - 상호명 기준으로 맛집을 검색합니다.

- **🚪 계정**
  - Firebase를 이용한 회원가입/로그인/로그아웃 기능을 제공합니다.
  - 회원가입/로그인/로그아웃 form의 유효성을 평가합니다.

- **👍 좋아요** 
  - 좋아하는 맛집에 추천을 누를 수 있습니다.
  
- **⭐ 별점**
  - 맛집에 별점을 매길 수 있습니다.

- **❤️ 찜 목록**
  - 나의 찜 목록에 맛집을 추가합니다.

- **➕ 맛집 등록**
  - 검색되지 않는 나만의 맛집을 등록합니다.

<br/>

## 4.<span id = "ui">기능 UI</span>
## 5.<span id = "convention"> 컨벤션</span>
## 6. <span id = "code">주요 코드</span>
## 7. <span id = "trouble">트러블 슈팅</span> 
## 8. <span id = "tree">폴더 트리</span>
