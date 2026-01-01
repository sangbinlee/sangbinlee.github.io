/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()


 
    // let YOUR_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwKgYkpkDJvwsrk75Xks9m9QAribECjNjRmku1PhpEU4JLoimybMww7Da1fXmeuDY6KXA/exec';

// 배포 ID
    // AKfycbzXoeIbETaTNeK4J2j6lT_yB_93RT2aONLeudTCZLAzow0xTzobzs3Eflylsz_J_iVESw

    // https://script.google.com/macros/s/AKfycbwKgYkpkDJvwsrk75Xks9m9QAribECjNjRmku1PhpEU4JLoimybMww7Da1fXmeuDY6KXA/exec
    // https://script.google.com/macros/s/AKfycbzXoeIbETaTNeK4J2j6lT_yB_93RT2aONLeudTCZLAzow0xTzobzs3Eflylsz_J_iVESw/exec


    // 1. 공인 IP 가져오기
async function getPublicIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}

// 2. 구글 앱스 스크립트 Web App에 기록 요청
async function saveIPToGoogleDrive() {
 
  const ip = await getPublicIP();
      console.log('Saving IP to Google Drive:', ip);

        document.getElementById('ip').textContent = ip;

        
        
      let storedIp = () => localStorage.getItem('ip')
      console.log('storedIp:', storedIp);
      if (ip != storedIp()) {
        localStorage.setItem('ip', ip);

        // 구글 앱스 스크립트 Web App URL (배포 후 얻은 URL)
        let YOUR_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxTESMbBcRTdlGn_5Xrz-bzJKZiAYqHJzZCN2NtD4aMqUe-hvDyhKFzonOpORdzXVsX/exec';


        const response = await fetch(YOUR_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ value: ip })
        });

        const result = await response.json();
        console.log("서버 응답:", result);
      }else {
        console.log('IP is already stored. No need to save again.');
      }



}

saveIPToGoogleDrive();








// var YOUR_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxasLflI3_9lhvbGKKot8PJDa9Nogh71grkHCHdcaE7_mFuVXObXmtAiN2LqMvvwI6IOA/exec';
// fetch(YOUR_WEB_APP_URL, {
//   method: "POST",
//   body: JSON.stringify({value: "Hello Google Drive!"}),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
// .then(res => res.json())
// .then(data => console.log(data));


// https://drive.usercontent.google.com/u/0/uc?id=1eQw_LJ6-wiuX-5BN0wwdoBg7h_kyToG4&export=download
// 구글 드라이브 JSON 파일 불러오기
// const fileId = "1eQw_LJ6-wiuX-5BN0wwdoBg7h_kyToG4"; 
// const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log("JSON 데이터:", data);
//     console.log("이름:", data.name);
//     console.log("도시:", data.city);
//   })
//   .catch(error => console.error("에러 발생:", error));

















//   function generateRandomCode(length = 8) {
//   const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// }

// const codes = [];
// for (let i = 0; i < 10; i++) {
//   codes.push(generateRandomCode());
// }

// const data = { codes };

// console.log(JSON.stringify(data, null, 2));



// AKfycbwayIvLuFdEEV73u-uqMTuoioqlP-4SZ4x5IJY-aXl27ZeOrGQkED9yNDFjuhXrqNJB

// https://script.google.com/macros/s/AKfycbzn-aZ7905Gfa047V5Pc0eBRzMDSIwsGoUw8OfONpNyPa_c-Knn9N_7LXPzv2F-Ofjv/exec


// const url2 = "https://script.google.com/macros/s/AKfycbwayIvLuFdEEV73u-uqMTuoioqlP-4SZ4x5IJY-aXl27ZeOrGQkED9yNDFjuhXrqNJB/exec?callback=myFunc";

// fetch(url2)
//   .then(response => response.json())
//   .then(data => {
//     console.log("API 응답:", data);
//     // 예: codes 배열 출력
//     data.codes.forEach(code => console.log(code));
//   })
//   .catch(error => console.error("에러:", error));



  var pwds = [];

    // JSONP 콜백 함수 정의
    function myFunc(data) {
      console.log("API 응답:", data);
      pwds= data.codes
      console.log("API 응답 pwds:", pwds);
      // document.body.innerHTML += "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    }
