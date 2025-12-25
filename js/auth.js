
    // 예시용: 허용되는 인증 코드 목록(실운영에서는 서버 검증)
    const VALID_CODES = new Set([
      "123456",
      "102938",
      "716253",
      "716253",
      "000999"
    ]);

    // 선택: 코드 형식(숫자 6자리) 검사용 정규식
    const CODE_PATTERN = /^[0-9]{6}$/;

    document.getElementById("authForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("code");
      const input2 = document.getElementById("code2");
      const msg = document.getElementById("msg");
      const code = input.value.trim();

      // 1) 형식 검사
      if (
        !CODE_PATTERN.test(code) 
    ) {
        msg.textContent = "코드는 숫자 6자리여야 합니다.";
        input.focus();
        return;
      }

      // 2) 유효성 검사
      if (!VALID_CODES.has(code)) {
        msg.textContent = "인증 코드가 올바르지 않습니다.";
        input.focus();
        return;
      }

      // 3) 입력값 동일 검사
      if (  code !== input2.value.trim()    ) {
        msg.textContent = "입력한 코드값은 동일해야 합니다.";
        input2.focus();
        return;
      }

      // 3) 성공 시 a.html로 이동
      msg.textContent = "";
      // 필요 시 쿼리스트링으로 전달: a.html?code=...
      window.location.href = "/test/";
    });