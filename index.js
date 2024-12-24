const express = require('express')

const app = express()
const port = 3000

//to receive json data from frontend
app.use(express.json())

//array to store frontend data
let TeaData =[]
let nextId=1

//To add a new tea data
app.post('/tea',(req,res)=>{
    const {name,price}=req.body
    const newTea = {id:nextId++, name, price}
    TeaData.push(newTea)
    res.status(201).send(newTea)
})

//To get all the tea data
app.get('/tea',(req,res)=>{
    res.status(200).send(TeaData)
})

//To get single tea data based on id
app.get('/tea/:id',(req,res)=>{
    const tea = TeaData.find(t=>t.id === parseInt(req.params.id))
    if(!tea){
       return res.status(404).send('Tea not found!')
    }
    else{
        res.status(200).send(tea)
    }
})

//To update the tea data
app.put('/tea/:id',(req,res)=>{
    const tea = TeaData.find(t=>t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('Tea not found!')
    }
    const {name,price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)

})

//delete tea data
app.delete('/tea/:id',(req,res)=>{
    const index = TeaData.findIndex(t=> t.id === parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('Tea not found')
    }
    else{
        TeaData.splice(index,1)
        return res.status(204).send('Deleted')
    }
})


app.listen(port,()=>{
    console.log(`Server is running at ${port}...!`)
})