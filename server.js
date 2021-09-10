// const app = require('express')
// const bodyParser = require('body-parser')
// const logger = require('morgan')
// const { json } = require('body-parser')
// const { response } = require('express')

// const port = process.env.PORT || 3000

// app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended : true}))

// app.get('*', (req, res) => {
//     res.send('Arthub on your kabambe')
// })
// app.post('*', (req, res) => {
//     let { sessionId, serviceCode, phoneNumber, text} = req.body
//     if(text == ''){
//         let response = `what would you like to check?
//         1: My account
//         2: My phone number
//         `
//         res.send(response)  
//     }else if(text === '1'){
//         let response = `Choose what you want to check on your accont
//         1: Account number
//         2: Account balance`
//         res.send(response)
//     }else if(text === '2'){
//         let response = `END your phone number is ${phoneNumber}`
//         res.send(response)
//     }else if(text === '1*1'){
//         let accontNumber = 'ACCOO1'
//         let response = `END account number is ${accontNumber}`
//         res.send(response)
//     }else if(text === '2*1'){
//         let balance = 'KSH 20,000'
//         let response = `END your balance is ${balance}`
//         res.send(response)
//     }else{
//         res.status(400).send('Invalid request!')
//     }
    
// })

// app.listen(port, () =>{
//     console.log(`app running on port ${port}`)
// })
const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON What would you want to check
    1. My Account
    2. My phone number`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose account information you want to view
    1. Account number
    2. Account balance`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `END Your phone number is ${phoneNumber}`
    res.send(response)
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your account number is ${accountNumber}`
    res.send(response)
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance
    let balance = 'NGN 10,000'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your balance is ${balance}`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
