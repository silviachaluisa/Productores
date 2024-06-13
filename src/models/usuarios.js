import bcrypt from "bcrypt"

const usuarios = {
    async registorUsuarioModelo(newUserData){

        const url = 'http://localhost:4000/users'
        const peticion = await fetch(url,{
            method: 'POST', // verbo que quiero ejecutar 
            body: JSON.stringify(newUserData), // informacion
            headers: {'Content-Type':'application/json'} // tipo de contenido
        })
        const data = await peticion.json()

        return data

    }
    ,
    async loginUsuarioModelo(userName,password){

        const url = 'http://localhost:4000/users'
        const peticion = await fetch(url)
        const users = await peticion.json()
        const user = users.find(user => user.username===userName)
        if (!user){
            return{error:"Username or password incorrect"}
            }
            const passwordMatch = await bcrypt.compare(password,user.password)
            if (user && passwordMatch){
                return user
            }else{
                return{error:"Username or password incorrect"}
        }

    }

}

export default usuarios