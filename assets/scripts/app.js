'use strict'
const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#start-game').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#start-game').on('submit', authEvents.onStartGame)
  $('.box').on('click', authEvents.onPlay)
  $('#game-playtime').on('click', authEvents.onGamePlayTime)
})
