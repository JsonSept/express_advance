import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import friendsRouter from './routes/friends.js'
config();

const PORT = process.env.PORT
const app = express();
app.use(cors()) // cross origin resource sharing , use and accept json data from the user
app.use(express.json())
app.use(express.static('views')) // when page loads it must load the index.html ,lets us use a static file
app.use('/friends',friendsRouter)


    
app.listen(PORT, ()=> {
    console.log('http://localhost:' + PORT);
})
