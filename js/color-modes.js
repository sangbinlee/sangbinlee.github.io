/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

    // console.clear()
  console.log('js loading............', 0)
  console.log('color-modes.js', 0)
  console.log("window.matchMedia('(prefers-color-scheme: dark)').matches =", window.matchMedia('(prefers-color-scheme: dark)').matches  )

  /**
   * 
   * window.matchMedia('(prefers-color-scheme: dark)').matches
   * 
  */
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) { console.log("현재 다크 모드입니다 🌙"); } else { console.log("현재 라이트 모드입니다 ☀️"); }


  const getStoredTheme = () => {
    // console.clear()
      console.log("■■■■■ getStoredTheme ■■■■■■■■■■■■■■■■■■■■■■■ localStorage.getItem('theme') = ", localStorage.getItem('theme'))
    localStorage.getItem('theme')
  }

  const setStoredTheme = theme => {
    // console.clear()
      console.log('■■■■■ getPreferredTheme ■■■■■■■■■■■■■■■■■■■■■■■ theme = ', theme)
    localStorage.setItem('theme', theme)
  }






  /**
   * 
   * @returns theme
   */
  const getPreferredTheme = () => {
    // console.clear()
    const storedTheme = getStoredTheme()
    if (storedTheme) { 
      console.log('■■■■■ getPreferredTheme ■■■■■■■■■■■■■■■■■■■■■■■ storedTheme = ', storedTheme)
      return storedTheme
    }
 
    var test = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log("■■■■■ getPreferredTheme ■■■■■■■■■■■■■■■■■■■■■■■ window.matchMedia('(prefers-color-scheme: dark)').matches =", test)
    console.log("■■■■■ getPreferredTheme ■■■■■■■■■■■■■■■■■■■■■■■ window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' =", window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  /**
   * 
   * @param {*} theme 
   */
  const setTheme = theme => {
    // console.clear()
    
    console.log('■■■■■■■ setTheme ■■■■ theme=', theme)
          
    var test = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log("3 window.matchMedia('(prefers-color-scheme: dark)').matches =", test)
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }



  /**
   * get and set the preferred theme on initial load
   */
  console.log('get getPreferredTheme, ans set setTheme................ ')
  setTheme(getPreferredTheme())

  /**
   * 현재 활성화된 테마를 토글 버튼에 반영
   * @param {*} theme 
   * @param {*} focus 
   * @returns 
   */
  const showActiveTheme = (theme, focus = false) => {
    // console.clear()
    
          console.log('■ theme=', theme)
          const themeSwitcher = document.querySelector('#bd-theme')
          console.log('■ themeSwitcher=', themeSwitcher)

    if (!themeSwitcher) {
          console.log('■ themeSwitcher=', themeSwitcher)
          console.log('■ end=', 999)
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')

    // auto light dark 
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

  /**
   * change event listener for prefers-color-scheme media query
   */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    // console.clear()
    const storedTheme = getStoredTheme()
    console.log('■■■■■■■■■■change ■■■■■■■■■■■ storedTheme=', storedTheme)
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  /**
   * DOMContentLoaded event listener
   */
  window.addEventListener('DOMContentLoaded', () => {
    // console.clear()

    console.log('■■■■ addEventListener DOMContentLoaded')
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          console.clear()

          const theme = toggle.getAttribute('data-bs-theme-value')
          console.log('■ theme=', theme)
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()