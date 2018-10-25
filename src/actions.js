/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
async function yourCustomAction(state, event, params) {
  return state
}



const config = {
  botName: 'Superbot',
  botConvoDescription: "Tell me something!",
  backgroundColor: '#ffffff'
}

// Visiting "http://bot_url/s/chat" will display the webchat in fullscreen
bp.createShortlink('chat', '/lite', {
  m: 'channel-web',
  v: 'fullscreen',
  options: JSON.stringify({ config: config })
})

module.exports = { yourCustomAction }
