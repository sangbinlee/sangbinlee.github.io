# 성경구절 관리 가이드

## 📖 개요
웹사이트 네비게이션 위에 성경구절을 표시하는 기능입니다. JSON 파일을 통해 구절을 관리합니다.

## 🔧 구절 추가/수정 방법

### 1. 파일 위치
```
/json/bible-verses.json
```

### 2. JSON 형식
```json
{
  "verses": [
    {
      "book": "고린도후서",
      "chapter": "6",
      "verse": "10",
      "scripture": "우리가 슬픈 자 같으나 항상 기뻐하고...",
      "isActive": true
    }
  ]
}
```

### 3. 필드 설명
- **book**: 성경 책 이름 (예: 고린도후서, 잠언, 빌립보서)
- **chapter**: 장 번호 (숫자)
- **verse**: 절 번호 (숫자, 범위는 "5-6" 형식)
- **scripture**: 성경구절 전문
- **isActive**: 활성화 여부 (true/false 또는 TRUE/FALSE)

### 4. 예시 데이터

#### 고린도후서 6장 10절
```json
{
  "book": "고린도후서",
  "chapter": "6",
  "verse": "10",
  "scripture": "우리가 슬픈 자 같으나 항상 기뻐하고 가난한 자 같으나 많은 사람을 부요하게 하고 아무 것도 없는 자 같으나 모든 것을 가진 자로다",
  "isActive": true
}
```

#### 잠언 3장 5-6절
```json
{
  "book": "잠언",
  "chapter": "3",
  "verse": "5-6",
  "scripture": "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라 너는 모든 일에 그를 인정하라 그리하면 네 길을 지도하시리라",
  "isActive": true
}
```

#### 빌립보서 4장 13절
```json
{
  "book": "빌립보서",
  "chapter": "4",
  "verse": "13",
  "scripture": "내게 능력 주시는 자 안에서 내게 모든 것을 할 수 있느니라",
  "isActive": true
}
```

## 📝 구절 추가 절차

1. `/json/bible-verses.json` 파일 열기
2. `verses` 배열에 새 객체 추가
3. 필수 필드 입력 (book, chapter, verse, scripture, isActive)
4. 파일 저장
5. 웹페이지 새로고침 (캐시 제거)

## 🎯 구절 관리 팁

### 활성화/비활성화
특정 구절을 표시하지 않으려면:
```json
"isActive": false
```

### 여러 구절 관리
활성화된 구절이 여러 개일 경우, 현재는 **첫 번째 활성화된 구절**을 표시합니다.
향후 다음과 같이 개선할 수 있습니다:
- 날마다 다른 구절 표시 (로테이션)
- 랜덤 구절 선택
- 사용자 선택 기능

### 장절 범위
여러 절을 포함할 때:
```json
{
  "verse": "5-6",
  "scripture": "내용..."
}
```

## 🔌 Google Sheets 연동 (선택사항)

Google Sheets 데이터를 자동으로 동기화하려면:

1. **Google Sheet 생성** (이름: `BibleVerses`)
   - 컬럼: Book, Chapter, Verse, Scripture, IsActive

2. **Google Apps Script 웹 앱 생성**
   ```javascript
   // 코드.gs
   function doGet() {
     const sheet = SpreadsheetApp.getActiveSheet();
     const data = sheet.getDataRange().getValues();
     const verses = [];
     
     for (let i = 1; i < data.length; i++) {
       verses.push({
         book: data[i][0],
         chapter: data[i][1].toString(),
         verse: data[i][2].toString(),
         scripture: data[i][3],
         isActive: data[i][4]
       });
     }
     
     return ContentService.createTextOutput(JSON.stringify({verses}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **웹앱 배포**
   - Apps Script → "배포" → "새 배포"
   - 유형: 웹 앱
   - 다음 사용자로 실행: 본인
   - 액세스 권한: 모든 사람

4. **웹사이트에서 사용**
   - `profile/index.html`의 `GOOGLE_APPS_SCRIPT_URL` 변수 업데이트
   - JavaScript를 Google Apps Script URL로 요청하도록 수정

## 📱 표시 위치

### profile/index.html
- 네비게이션 바 위에 표시
- 배경: 그라데이션 (보라색 → 파란색)
- 텍스트 색상: 흰색

### index.html (메인 페이지)
- 동일한 위치에 표시
- 동일한 스타일 적용

## 🎨 스타일 커스터마이징

배너 스타일 변경:
```css
.verse-banner {
  background: linear-gradient(135deg, #6610f2 0%, #0d6efd 100%);
  color: #fff;
  padding: 12px 0;
  font-size: 14px;
}
```

## ❓ 트러블슈팅

### 구절이 표시되지 않음
1. 브라우저 캐시 제거
2. 개발자 도구 → Network 탭에서 `bible-verses.json` 로드 확인
3. Console 탭에서 오류 메시지 확인

### JSON 파일 오류
- JSON 문법 검증: jsonlint.com 사용
- 따옴표와 쉼표 확인

### 문자 인코딩 문제
- UTF-8 인코딩으로 파일 저장 확인
- BOM 없음 설정

---

**마지막 업데이트**: 2026년 1월 18일
