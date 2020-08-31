'use strict'
const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Wlecom To Our Family ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Opps, Try again!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message2').text('Nice To See You Again ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignInFailure = function () {
  $('#message2').text('Opps, Try again!')
}

const onChangePasswordSuccess = function () {
  $('#message3').text('Changed password successfully')
}
const onChangePasswordFailure = function () {
  $('#message3').text('Error on change password')
}

const onSignOutSuccess = function () {
  $('#message4').text('See You Later')
}
const onSignOutFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  console.log(response.game)
  $('#message4').text('Starting a New Game')
}

const onStartGameFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
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
  onStartGameFailure
}
