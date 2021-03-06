var csjs = require('csjs-inject')
var bel = require('bel')
var datauri = require('datauri')

window.addEventListener('keyup', function (event) {
  var left = 37
  var right = 39
  if (event.which === left) {
    previous()
  } else if (event.which === right){
    next()
  }
})

// ASSETS

var menuButton_icon_video = datauri(__dirname + '/assets/video.svg')
var menuButton_icon_chat = datauri(__dirname + '/assets/chat.svg')
var menuButton_icon_task = datauri(__dirname + '/assets/task.svg')

var FONT = 'Pixelade';
var font_url = datauri(__dirname + '/assets/PIXELADE.ttf')
var font = bel`
  <style>
    @font-face {
      font-family: ${FONT};
      src: url('${font_url}');
    }
  </style>
`

document.head.appendChild(font)

// CSS
var css = csjs`
  *, *:before, *:after { box-sizing: inherit; }
  img { box-sizing: content-box; }
  iframe { border: 0; height: 100vh; }
  html {
    box-sizing: border-box;
    display: table;
    min-width: 100%;
    margin: 0;
  }
  body {
    margin: 0;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }
  .content {
    position: relative;
    min-height: 100vh;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    border: 5px solid #d6dbe1;
  }
  button {
    border-radius: 0;
    cursor: pointer;
    width: 100px;
    height: 100%;
    font-size: 50px;
    font-weight: 900;
    font-family: ${FONT};
    background-color: #43409a;
    border: none;
    color: white;
  }
  button:hover {
    background-color: #ffd399;
  }
  .header {
    width: 230px;
  }
  .logo {
    margin-right: 20px;
    width: 50px;
    height: 50px;
  }
  .logo:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  .banner {
    margin: 0 5%;
    display: flex;
    color: black;
    font-size:30px;
    font-family: ${FONT};
    font-weight: 900;
  }
  .stats {
    display: flex;
    align-self: center;
  }
  .container {
    display: flex;
    background-color: #43409a;
    height: 90vh;
  }
  .wide {
    margin: 1% 0;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 85vh;
  }
  .rightPanel {
    margin: 0% 0 0% 3%;
    width: 27%;
    height: 100%;
  }
  .rightPanelMenu {
    border-right: 5px solid #d6dbe1;
    border-left: 5px solid #d6dbe1;
    height: 7vh;
  }
  .menuButtons {
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;
  }
  .menuButton {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d6dbe1;
    border-bottom: 1px solid #d6dbe1;
    border-right: 2.5px solid #d6dbe1;
    border-left: 2.5px solid #d6dbe1;
    background-color: white;
  }
  .menuButton:hover {
    background-color: #ffd399;
    cursor: pointer;
  }
  .menuButtonIcon {
    height: 5vh;
  }
  .video {
    border: 5px solid #d6dbe1;
    width: 50%;
    align-self: center;
    height: 40vh;
  }
  .editor {
    border: 5px solid #d6dbe1;
    margin: 1% 1% 0 1%;
    width: 100%;
    height: 55vh;
  }
  .chat {
    border: 5px solid #d6dbe1;
    width: 100%;
    height: 83vh;
  }
`

var videos = [
  'le-URjBhevE',
  'nBEBraDJkFg',
  'Vd_Z1bYGrCM',
  'sPmRfjJdg5Y',
  'VRz0nbax0uI',
  'R8SjM4DKK80',
  'C1PZh_ea-7I',
  '808eYu9B9Yw',
  '7WkfzokHGqo',
  'kVOmc7NK1M0',
  'VwaqJy_clnc',
  'r7v6EIiHfVA',
  's4sB1hm73tw',
  'fM5qnyasUYI',
  'QEZXbRiaY1I',
  'MeZVVxLn26E',
  'EeZBKv34mm4',
  '-xAJKmjKCUE',
  '24Wpg6njlYI',
  'a3KHBqH7njs',
  'Urwzk6ILvPQ',
  'Gp5nnerXETg',
  'r6SnMjsLrBk',
  'tHRNuBf_8xg',
  'B-k76DMOj2k',
  '1JsJx1x35c0',
  'eOI9GzMfd24',
  'OMXtJ0USM8s',
  '3cbiZV4H22c',
  'dpTFcPUe2oo',
  'kOcFZV3c75I',
  'zwBMp1U6FII',
  'KhQkErkEips',
  'ZJMO-zmErA8',
  'YmaFAKUFmp0',
  'DHRntxAVxa0',
  'c9j0avG5L4c',
  'MKJHuub6UJI',
  'VzUBHDQf5Rg',
  'jEx9V4uUcg0',
  'TpRYLEFu4Mc',
  'qMO-LTOrJaE',
  'WJWkqf_N3Sg',
  'CozSF5abcTA',
  'xHneyv38Jro',
  'GxyFlXbhdsY',
  'BMUiFMZr7vk',
  'bCqtb-Z5YGQ',
  'Wl98eZpkp-c',
  '1DMolJ2FrNY',
  'CQqwU2Ixu-U',
  'iZLP4qOwY8I',
  'k7-N8R0-KY4'
]

var logo_url = datauri(__dirname + '/assets/wizard.png')
var logo = bel`
  <img class="${css.logo}" onclick=${home} title = "made with love by Wizard Amigos" src="${logo_url}">
`
var lesson = 0
var series = 'JS workshop:'
var video = iframe(`https://www.youtube.com/embed/${videos[0]}`, css.video)
var editor = iframe("https://codesandbox.io/embed/m38n0vrm98", css.editor)
var chat = iframe("https://gitter.im/wizardamigosinstitute/program/~embed", css.chat)

var rightPanelMenu = bel`
  <div class=${css.rightPanelMenu}>
    <div class=${css.menuButtons}>
      <div class=${css.menuButton} onclick=${appendSelectedPanel}><img class=${css.menuButtonIcon} src="${menuButton_icon_video}"></div>
      <div class=${css.menuButton}><img class=${css.menuButtonIcon} src="${menuButton_icon_task}"></div>
      <div class=${css.menuButton}><img class=${css.menuButtonIcon} src="${menuButton_icon_chat}"></div>
    </div>
  </div>`

var rightPanel = bel`
  <div class=${css.rightPanel}>
    ${rightPanelMenu}
    ${chat}
  </div>
`
function appendSelectedPanel (e) {
  console.log(e.target)
  var selectedPanel = bel`
    <div>Change panel</div>
  `
  rightPanel.removeChild(rightPanel.children[1])
  rightPanel.appendChild(selectedPanel)
}

var stats = bel`<span class=${css.stats}>${series} Lesson ${lesson + 1}/${videos.length}</span>`

var app = bel`
  <div class="${css.content}">
    <div class=${css.menu}>
      <button onclick=${previous}> ${'<'} </button>
      <span class=${css.banner}>${logo} ${stats}</span>
      <button onclick=${next}> ${'>'} </button>
    </div>
    <div class=${css.container}>
      <div class=${css.wide}>
        ${video}
        ${editor}
      </div>
      ${rightPanel}
    </div>
  </div>
`
document.body.appendChild(app)

function previous (event) {
  if (lesson <= 0) return
  lesson--
  var old = video
  video = iframe(`https://www.youtube.com/embed/${videos[lesson]}`, css.video)
  old.parentElement.replaceChild(video, old)
  stats.innerText = `Lesson ${lesson + 1}/${videos.length}`
}
function next (event) {
  if (lesson >= videos.length - 1) return
  lesson++
  var old = video
  video = iframe(`https://www.youtube.com/embed/${videos[lesson]}`, css.video)
  old.parentElement.replaceChild(video, old)
  stats.innerText = `Lesson ${lesson + 1}/${videos.length}`
}
function iframe (src, classname) {
  return bel`
    <iframe
      class=${classname}
      src="${src}"
      frameborder="0"
      allowfullscreen
    ></iframe>
  `
}

function home () {
  window.open('http://wizardamigos.com/', '_blank');
}
