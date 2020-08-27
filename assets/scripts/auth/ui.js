'use strict'
const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
