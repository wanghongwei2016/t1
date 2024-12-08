function getCookieByName(name) {
  var nameEQ = name + "="
  var cookieArray = document.cookie.split("; ")
  for (var i = 0; i < cookieArray.length; i++) {
    if (cookieArray[i].indexOf(nameEQ) === 0) {
      return cookieArray[i].substring(nameEQ.length)
    }
  }
  return null
}
console.log("ttt navigator.language", navigator.language)
console.log("ttt NEXT_LOCALE", getCookieByName("NEXT_LOCALE"))

var map = {
  ar: "ar",
  de: "de-DE",
  es: "es-ES",
  fil: "fil",
  fr: "fr-FR",
  hi: "hi-IN",
  id: "id-ID",
  it: "it-IT",
  ja: "ja-JP",
  ko: "ko-KR",
  pl: "pl-PL",
  pt: "pt-PT",
  ru: "ru-RU",
  zh: "zh-TW",
  "zh-CN": "zh-TW",
  "zh-TW": "zh-TW",
  "zh-HK": "zh-TW",
}

if (
  location.pathname == "/" &&
  !location.search &&
  !getCookieByName("NEXT_LOCALE") &&
  navigator.language &&
  map[navigator.language]
) {
  location.assign("/" + map[navigator.language] + "/")
}

window.sm = window.innerWidth <= 750
