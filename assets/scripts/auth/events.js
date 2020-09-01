const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
$('#board').hide()
const box0 = $('#0')
const box1 = $('#1')
const box2 = $('#2')
const box3 = $('#3')
const box4 = $('#4')
const box5 = $('#5')
const box6 = $('#6')
const box7 = $('#7')
const box8 = $('#8')


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

const game = ['', '', '', '', '', '', '', '', '']

const gameover = false

const onPlay = function (event) {
  console.log(event.target)
  const target = event.target
  if ((gameover === false) && ($(target).text() === '')) {
    const idNum = $(target).attr('id')

    game[idNum] = player

    $(target).text(player)

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
  onPlay: onPlay

}
