'use strict'
const store = require('../store')
const authEvents = require('./events')

const onSignUpSuccess = function (response) {
  $('#message').text('Wlecom To Our Family ' + response.user.email)
  $('#sign-up-form').trigger('reset')
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
}
const onSignOutFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
  $('#sign-out-form').trigger('reset')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  console.log(response.game)
  store.board = response.game.cells
  console.log(store.board)
  $('#message4').text('Starting a New Game')
  $('#board').show()
  // authEvents.gameover = false
  $('.box').text('')
  // authEvents.player = 'X'
  authEvents.newGameChange()
}

const onStartGameFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
}

const onPlayGameSuccess = function (response) {
  console.log(response)
  store.update = response.game.cells
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
