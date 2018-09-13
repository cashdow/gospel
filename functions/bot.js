const dialogflow = require('dialogflow')
const fs = require('fs')
const dialogConfig = require('./gospel.json')
const dialog = dialogConfig.dialogflow
//const product_id = 'gospel-kakao'
const product_id = dialog.product_id
let sessionClient

const initialize = function(keyFile) {

  const file = JSON.parse(fs.readFileSync(keyFile))

  const privateKey = file['private_key']
  const clientEmail = file['client_email']

  const config = {
    credentials: {
      private_key: privateKey,
      client_email: clientEmail
    }
  }
  sessionClient = new dialogflow.SessionsClient(config)
}

exports.sendToDialogFlow = async function(text, sessionId) {
  sessionClient == null && initialize(dialog.credential)
  sessionId = sessionId == undefined ? dialog.sessionId : sessionId
  console.log('session Id = ' + sessionId + ', project_id = ' + product_id)
  const sessionPath = sessionClient.sessionPath(product_id, sessionId)

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: 'ko'
      }
    }
  }

  return await sessionClient.detectIntent(request)
}


