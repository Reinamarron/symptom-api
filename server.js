const express = require('express')
const app = express()
const PORT = 8000

const illness = {
  'stroke': {
    'activityLevel': 'not-active',
    'headache': 'yes',
    'weakness': 'yes',
  },
  'heart-attack': {
    'activityLevel': 'fatigue',
    'nausea': 'yes',
    'shortness of breath': 'yes',
  },
  'dementia': {
    'activityLevel': 'not-active',
    'memory-loss': 'yes',
    'impaired-judgment': 'yes',
  },
}
  

app.get('/', (request, response)=>{
  response.sendFile(__dirname+ '/index.html')
})

app.get('/api/:illnessName', (request, response) => {
  const illnessName = request.params.illnessName
  if (illness[illnessName]) {
    response.json(illness[illnessName])
  } else {
    response.json(illness['dementia'])
  
  }

})


app.listen(PORT, ()=>{
  console.log(`The server is running on port ${PORT})! You better go catch it!`)
})