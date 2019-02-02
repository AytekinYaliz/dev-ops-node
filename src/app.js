import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/health-check', (req, res) => {
   res.send('OKK')
})
app.get('/api/homes', (req, res) => {
   res.json([{ id: 1, name: 'home', address: '14 myroad' }, { id: 2, name: 'work', address: '121 high street' }])
})

export default app