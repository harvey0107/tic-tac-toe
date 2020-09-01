'use strict'
const store = require('../store')

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
  $('#message4').text('Starting a New Game')
  $('#board').show()
}

const onStartGameFailure = function () {
  $('#message4').text('Opps Somthing Wrong')
}
// const gameBoard
// const playerOne = 'X'
// const playerTwo = 'O'
// const whenWin =[
//     [0, 1, 2],
//   	[3, 4, 5],
//   	[6, 7, 8],
//   	[0, 3, 6],
//   	[1, 4, 7],
//   	[2, 5, 8],
//   	[0, 4, 8],
//   	[6, 4, 2]
// ]
//
// const cells =
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
