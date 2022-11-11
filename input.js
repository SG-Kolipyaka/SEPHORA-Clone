let fom=document.querySelector("form").addEventListener("submit",myyfom);
let arr1=JSON.parse(localStorage.getItem("subs"))||[]
function myyfom(event){
    event.preventDefault();
    let tname=document.querySelector("#task1").value
    let tname1=document.querySelector("#task2").value
    let tname2=document.querySelector("#task3").value
    let tname3=document.querySelector("#task4").value
    
   
 
    let obj={
        tname,
        tname1,
        tname2,
        tname3
    }
    arr1.push(obj)
    localStorage.setItem("subs",JSON.stringify(arr1))
    mytable(arr1)
}

function mytable(obj){
obj.forEach(function (ele){
    let r=document.createElement("tr")
    let img=document.createElement("th")
    let task=document.createElement("th")
   
    let pri=document.createElement("th")
 
    let favourite=document.createElement("th")
    img.innerText=ele.tname3
  task.innerText=ele.tname
  pri.innerText=ele.tname1
  favourite.innerText=ele.tname2
  r.append(img,task,pri,favourite)
  document.querySelector("tbody").append(r)
});
} 