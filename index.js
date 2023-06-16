let baseUrl = `https://travel-api-template.onrender.com`

let userCreateBtn = document.getElementById("adduser");
let delCreateBtn = document.getElementById("deluser");
let updateuser = document.getElementById("updateuser");
let asbtn = document.getElementById("btnasc");
let dsbtn = document.getElementById("btndsc");
let filbtn = document.getElementById("filterBYname")


fetchData(`${baseUrl}/users`)
async function fetchData(url){
    try {
       let res = await fetch(url)
       let data= await res.json() 
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}


userCreateBtn.addEventListener('click', adduser);
let uname = document.getElementById("name")
let email = document.getElementById("email")
let age = document.getElementById("age")

async function adduser(){
    try {
        let res = await fetch(`${baseUrl}/users`,{
            method:"POST",
            body: JSON.stringify({
                name: uname.value,
                email: email.value,
                age: age.value
            }),
            headers:{
                "Content-type":"application/json"
              }
        })
        fetchData(`${baseUrl}/users`)
    } catch (error) {
        console.log(error)
    }
}

delCreateBtn.addEventListener('click',delUser)
let user_id = document.getElementById("user_id")

async function delUser(){
    try {
      let res = await fetch(`${baseUrl}/users/${user_id.value}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json"
        }
      })
      fetchData(`${baseUrl}/users`)
    } catch (error) {
      console.log(error)
    }
}

updateuser.addEventListener('click', updateUser);
let updateid = document.getElementById("updateid")
let updatename = document.getElementById("updatename")
let updateemail = document.getElementById("updateemail")
let updateage = document.getElementById("updateage")

async function updateUser(){
    try {
        let res = await fetch(`${baseUrl}/users/${updateid.value}`,{
            method:"PATCH",
            body: JSON.stringify({
                name: updatename.value,
                email: updateemail.value,
                age: updateage.value
            }),
            headers:{
                "Content-type":"application/json"
              }
        })
        fetchData(`${baseUrl}/users`)
    } catch (error) {
        console.log(error)
    }
}

asbtn.addEventListener('click',()=>{
    fetchData(`${baseUrl}/users?_sort=age&_order=asc`)
})

dsbtn.addEventListener('click',()=>{
    fetchData(`${baseUrl}/users?_sort=age&_order=desc`)
})
let filname = document.getElementById("byname")
filbtn.addEventListener('click',()=>{
    fetchData(`${baseUrl}/users?name=${filname.value}`)
})