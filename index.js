 let saveEl = document.getElementById("save-element")
 let countEl = document.getElementById("count-element")
 let count = 0  

 function increment(){
 count+=1   
 countEl.innerText = count 
}

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = "0"
    count = 0
         
    
    console.log(count)
}
