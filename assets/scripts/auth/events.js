const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
$('#board').hide()

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
  // Promise
  api.signIn(data)// request
    .then(ui.onSignInSuccess) // respnose 5 mins later
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
store.player = 'X'
// const game = ['', '', '', '', '', '', '', '', '']
store.gameover = false
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
  let win = false
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
    store.gameover = true
  } else if (!game.includes('')) {
    $('#message5').text('Draw!')
    store.gameover = true
  }
}

const onPlay = function (event) {
  if (store.player === '') {
    store.player = 'X'
  }
  const target = event.target
  if ((store.gameover === false) && ($(target).text() === '')) {
    const idNum = $(target).attr('id')
    const idNumInt = parseInt(idNum)

    store.board[idNumInt] = store.player

    $(target).text(store.player)
    winning(whenWin, store.board)
    const data = {
      game: {
        cell: {
          index: idNum,
          value: store.player
        },
        over: store.gameover
      }
    }
    api.playGame(data)
      .then(ui.onPlayGameSuccess)
      .catch(ui.onPlayGameFailure)
    if (store.player === 'X') {
      store.player = 'O'
    } else {
      store.player = 'X'
    }
  }
}

const onGamePlayTime = function () {
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onStartGame: onStartGame,
  onPlay: onPlay,
  // newGameChange: newGameChange,
  onGamePlayTime: onGamePlayTime
}
