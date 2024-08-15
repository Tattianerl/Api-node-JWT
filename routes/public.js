import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcript from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async (req, res)=> {
    try{

        const user = req.body

        //metodo para encriptar senha
        const salt = await  bcript.genSalt(10)
        const hashPassword = await  bcript.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data:{
                email:user.email,
                name:user.name,
                password:hashPassword,
            },
 })
        res.status(201).json(user)
        }catch(err){
            res.status(500).json({menssage: "Erro no servidor, tentennovamente"})
        }
})

//Login

router.post('/login', async (req, res)=>{
try {
    
    const userInfo =req.body

    //Busca usuário no banco de dados
    const user = await prisma.user.findUnique({where: {email: userInfo.email},
    
    })

    //Verifica see o usuário existe no banco de dados
    if(!user){
        return res.status(404).json({menssage: "Usuário não encontrado"})
    }

    //Compara a senha do banco com a que o usuário digitou
    const isMatch = await bcript.compare(userInfo.password, user.password)

    if(!isMatch){
        return res.status(400).json({menssage: "Senha inválida"})
    }

    //Gerar o Token JWT
    const token = jwt.sign({ id: user.id}, JWT_SECRET, { expiresIn: '7d'})


    res.status(200).json(token)
} catch (error) {
    res.status(500).json({menssage: "Erro no servidor, tente novamente"})

}

})

export default router