'use strict'
const store = require('../store')
const api = require('./api')

const onSignUpSuccess = function (response) {
  $('#message2').show()
  $('#message2').text('Welcom my friden' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}
const onSignUpFailure = function () {
  $('#message').show()
  $('#message').text('Failed!')
  $('#sign-up-form').trigger('reset')
  $('#message').hide(9000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message2').show()
  $('#message2').text('Nice to see you again ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#message2').hide(6000)
}

const gamehistorysuccess = function (response) {
  const x = response.games.length
  $('#message7').show()
  $('#message7').text(`You have played ${x} number of games`)
  $('#message7').hide(5000)
}

const gamehistoryfail = function () {
  $('#message7').text('fail to get game history!!!')
}

const onSignInFailure = function () {
  $('#message2').show()
  $('#message2').text('Oops, Try again!')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message3').show()
  $('#message3').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
  $('#message3').hide(6000)
}
const onChangePasswordFailure = function () {
  $('#message3').show()
  $('#message3').text('Error')
  $('#change-password-form').trigger('reset')
  $('#message3').hide(6000)
}

const onSignOutSuccess = function () {
  $('#message7').show()
  $('#sign-out-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-game').hide()
  $('#message7').text('See you later')
  $('#message5').text('')
  $('#board').hide()
  $('#message7').hide(4000)
}
const onSignOutFailure = function () {
  $('#message4').text('Oops')
  $('#sign-out-form').trigger('reset')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  store.board = response.game.cells
  $('#message6').text('Starting a New Game')
  $('#board').show()
  $('.box').text('')

  store.player = 'X'
  store.gameover = false

  api.gameHistory()
    .then(gamehistorysuccess)
    .catch(gamehistoryfail)
}

const onStartGameFailure = function () {
  $('#message4').text('Oops Somthing Wrong')
}

const onPlayGameSuccess = function (response) {
  store.update = response.game.cells
}

const onPlayGameFailure = function () {
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onStartGameSuccess,
  onStartGameFailure,
  onPlayGameSuccess,
  onPlayGameFailure
}
