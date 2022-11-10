// let bag=[]
// let cartitem=JSON.parse(localStorage.getItem("cart"))||[]
let url ="https://636c99f691576e19e30fb69c.mockapi.io/Products"
fetch(url)
.then((res) => res.json())
.then((data) => {
bag=data
console.log(data);
displaycard(data)
});



function displaycard(data){
    // document.querySelector("#product-container").innerHTML="";
      data.forEach(function(element){
      //for(i=0;i<data.length;i++) { 
        let div=document.createElement("div")
     
        let imageprod=document.createElement("img")
        imageprod.setAttribute("src",element.avatar)

        let idd=document.createElement("h2")
        idd.innerText=element.id

        let title=document.createElement("h2")
        title.innerText=element.name


        let desc=document.createElement("p")
        desc.innerText=element.Description

        let prod=document.createElement("h3")
        prod.innerText=element.Category
      
      
       
        div.append(imageprod,idd,title,desc,prod)
        
        document.querySelector("#prod50").append(div)
     } )
    
    //}
    
      
    }



// but1=document.querySelector("#button1").addEventListener("click",myfunbut)

// function myfunbut(){
//     a=document.createElement("a")
//     a.setAttribute("href","https://sephora.nnnow.com/")  
//     a.addEventListener("click",myaa)
//     function myaa(){
   
//     }
//     document.querySelector("body").append(a)
// }




but1=document.querySelector("#but").addEventListener("click",myfunbut)
let arr1=JSON.parse(localStorage.getItem("subs"))||[]


arr2=[]
function myfunbut(){
    impu=document.querySelector("#imp1").value
    obj={
        email:impu
    }

    
        
        // myfunbut(arr2)
        // console.log(arr2)
    //   console.log(arr1)
   arr1.forEach(function (i){
        if(impu==i.email){
            alert("already suscribed Successful")

        }
      })
      arr1.push(obj)
      alert("Suscribe Successful \n latest products will be sent on your email:"+impu)
      localStorage.setItem("subs",JSON.stringify(arr1))

}
// function myfunbut(arr2){
// //    for(i=0;i<arr2.length;i++){
// // arr1.push(element)
// // localStorage.setItem("subs",JSON.stringify(arr1))
// console.log(arr2)
   
// }