import  express  from "express";
import {getFriends, getFriend, addFriend ,deleteFriend ,editFriend} from '../database.js'
const router = express.Router()

router
    .route('/')
        .get(async(req,res)=>{
            res.send(await getFriends())
            })
        .post(async(req,res)=>{
            const {name,age} = req.body //creating 1 variable for name and age
            const post = await addFriend(name,age)
            res.send(await getFriends())
            // const name = required.bode.anme
            // const age = required.bode.age
            })// no need for await coz we're not calling a function

router
        .route('/:id')
            .get(async(req,res)=> {
                res.send(await getFriend(+req.params.id))
                }) // to parse data for a single user
            .delete(async(req,res)=>{ 
                res.send(await deleteFriend(+req.params.id))
                })
            // router.delete('/friends/delete/:id',async(req,res)=>{
            //     await deleteFriend(+req.params.id)
            //     res.json(await getFriends())
            // })
            .patch(async(req,res)=>{ 
                const [friend] = await getFriend(+req.params.id)
                let {name,age} = req.body
                name? name=name: {name}= friend
                age? age=age: {age}=friend
                console.log(friend);
                await editFriend(name,age,+req.params.id)
                res.json(await getFriends()) //if you want to use just json data thn you have to res.json ,if not stick to res.send
                })

export default router