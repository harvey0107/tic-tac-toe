'use strict'
const store = require('../store')
const api = require('./api')

const onSignUpSuccess = function (response) {
  $('#message2').text('Wlecom To Our Family ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}
const onSignUpFailure = function () {
  $('#message').text('Opps, Try again!')
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message2').text('Nice To See You Again ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()

  $('#message2').text('')
}

const gamehistorysuccess = function (response) {
  const x = response.games.length
  $('#message7').text(`You have played ${x} number of games`)
}

const gamehistoryfail = function () {
  console.log('fail to get game history!!!')
}

const onSignInFailure = function () {
  $('#message2').text('Opps, Try again!')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message3').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message3').text('Error on change password')
  $('#change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message4').text('See You Later')
  $('#sign-out-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()

  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-game').hide()
  $('#message7').text('')
  $('#message5').text('')

  $('#board').hide()
}
const onSignOutFailure = function () {
  $('#message4').text('Opps')
  $('#sign-out-form').trigger('reset')
}

const onStartGameSuccess = function (response) {
  store.game = response.game

  console.log('onstartui', response.game)
  store.board = response.game.cells
  console.log('onstartui', store.board)
  console.log('onstartui', store.game.over)
  $('#message6').text('Starting a New Game')

  $('#board').show()
  // authEvents.gameover = false
  $('.box').text('')
  // authEvents.player = 'X'

  store.player = 'X'
  store.gameover = false

  api.gameHistory()
    .then(gamehistorysuccess)
    .catch(gamehistoryfail)
}

const onStartGameFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
}

const onPlayGameSuccess = function (response) {
  console.log('updateui', response)
  store.update = response.game.cells
  console.log('onplayui', store.update)
  console.log('onplayui', store.game.over)
}

const onPlayGameFailure = function () {
  console.log('failure')
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
