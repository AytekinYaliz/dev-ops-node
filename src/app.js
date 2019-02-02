import express from 'express'
import cors from 'cors'

const app = express()
const home =[
   {id: 1, name: 'home', address: '14 myroad' }, 
   { id: 2, name: 'work', address: '121 high street' },
   { id: 3, name: 'mom', address: '121 high street' },
   { id: 4, name: 'club', address: '121 high street' }
]
app.use(cors())

app.get('/health-check', (req, res) => {
   res.send('OKK')
})
app.get('/api/homes', (req, res) => {
   res.json([{ id: 1, name: 'home', address: '14 myroad' }, { id: 2, name: 'work', address: '121 high street' }])
})
app.get('/api/home/', (req, res) => {
   res.json(home)
 })
app.get('/api/homes/:id', (req, res) => {
   const id = req.params.id;
   res.json(home.filter(home=>home.id==id))

 })

export default app