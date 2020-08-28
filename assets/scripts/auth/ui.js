'use strict'
const onSignUpSuccess = function (response) {
  $('#message').text('Wlecom To Our Family ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Opps, Try again!')
}

const onSignInSuccess = function (response) {
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
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
