// Define empty array named "die Rolls"



let dieRolls = []

let userinputelement = document.querySelector("#input")
let rollbutton= document.querySelector("#Roll")
let totalrolls = document.querySelector("#total")
let ShowAllRolls = document.querySelector("#All Rolls")
let totalElement= document.querySelector("#total")
let counter = 0
//let Rolltotal = 


rollbutton.addEventListener('click',function() 

{
    let userinput= userinputelement.value
    let sumofroll=0
    
    while (counter<userinput)  {
        let RandomNumber = (Math.floor(Math.random()*6)+1)
        //console.log(counter)
        counter=counter+1
       
    dieRolls.push(RandomNumber)

    sumofroll=dieRolls.length
    console.log(dieRolls)
   }
})

ShowAllRolls.addEventListener('click',function()
    while (counter<RandomNumber) {
      let newdieRolls=dieRolls+=1
    }
ShowAllRolls.innerHTML=newdieRolls
