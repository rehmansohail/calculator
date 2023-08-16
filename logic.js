const add =(n1,n2)=>n1+n2
const subtract =(n1,n2)=>n1-n2
const multiply =(n1,n2)=>n1*n2
const divide =(n1,n2)=>n1/n2

function operate(n1,n2,op){
  if(op=='+')return add(n1,n2)
  else if(op=='-')return subtract(n1,n2)
  else if(op=='*')return multiply(n1,n2)
  else if(op=='/')return divide (n1,n2)
}

//clear button working
const allclear =document.querySelector('#all-clear')
const temp = document.querySelector('#tmp')
const input = document.querySelector('#input')
allclear.addEventListener('click',()=>{
    temp.innerText=''
    input.innerText=''
})
//get numbers
let n1=''
const numbers =document.querySelectorAll('.number')
const numsarr = Array.prototype.slice.call(numbers);
numsarr.forEach(number=>{
  number.addEventListener('click',e=>{
    let text=e.target.innerText
    n1+=text
    input.innerHTML=n1
  })
})

operation=""
const ops = document.querySelectorAll('.amt')
const opsarr = Array.prototype.slice.call(ops)
opsarr.forEach(op=>{
  op.addEventListener('click',e=>{
    operation=e.target.innerText
    console.log(operation)
    temp.innerHTML=n1
    input.innerHTML=operation
  })
})

n2=""
numsarr.forEach(number=>{
  number.addEventListener('click',e=>{
    if(operation !=""){
    let text=e.target.innerText
    n2+=text
    temp.innerText=`${n1} ${operation}`
    input.innerText=n2
    }
  })
})


