const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
$('#board').hide()
// const box0 = $('#0')
// const box1 = $('#1')
// const box2 = $('#2')
// const box3 = $('#3')
// const box4 = $('#4')
// const box5 = $('#5')
// const box6 = $('#6')
// const box7 = $('#7')
// const box8 = $('#8')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onStartGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}
let player = 'X'

// const game = ['', '', '', '', '', '', '', '', '']

let gameover = false
const whenWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const winning = function (whenWin, game) {
  console.log(game)
  let win = false
  console.log(whenWin)
  for (let i = 0; i < whenWin.length; i++) {
    const winRow = whenWin[i]
    const p1 = game[winRow[0]]
    const p2 = game[winRow[1]]
    const p3 = game[winRow[2]]
    if (p1 === '' || p2 === '' || p3 === '') {
      continue
    }
    if (p1 === p2 && p2 === p3) {
      win = true
    }
  }
  if (win) {
    $('#message5').text('Great win!')
    gameover = true
  } else if (!game.includes('')) {
    $('#message5').text('Draw!')
    gameover = true
  }
}

const newGameChange = function () {
  player = 'X'
  gameover = false
}

const onPlay = function (event) {
  console.log(store.update)
  console.log(event.target)
  if (player === '') {
    player = 'X'
  }
  console.log(gameover)
  const target = event.target
  if ((gameover === false) && ($(target).text() === '')) {
    const idNum = $(target).attr('id')
    const idNumInt = parseInt(idNum)

    store.board[idNumInt] = player

    $(target).text(player)
    winning(whenWin, store.board)
    const data = {
      game: {
        cell: {
          index: idNum,
          value: player
        },
        over: gameover
      }
    }
    api.playGame(data)
      .then(ui.onPlayGameSuccess)
      .catch(ui.onPlayGameFailure)
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  }
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onStartGame: onStartGame,
  onPlay: onPlay,
  gameover: gameover,
  newGameChange: newGameChange
}
