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
let arr1=JSON.parse(localStorage.getItem("subsb"))||[]


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
      localStorage.setItem("subsb",JSON.stringify(arr1))

}
// function myfunbut(arr2){
// //    for(i=0;i<arr2.length;i++){
// // arr1.push(element)
// // localStorage.setItem("subs",JSON.stringify(arr1))
// console.log(arr2)
   
// }
// totalprice=arr2.reduce((acc,el)=>acc+el.price,0)
// console.log(totalprice)

// let pr=document.querySelector("h2").innerText="Total="+totalprice


{/* <div class="submenu1">
<br>
<ul>
<li><a href=""><b>Clothing</b></a> </li>

<li><a href="">Women's</a> </li>
<li><a href="">MEN's</a> </li>

</ul>
</div> */}

brand=document.querySelector("#brand").addEventListener("click",myfunbrand)

function myfunbrand(){
  let hei= document.querySelector(".menubar")
  hei.style.height="150px"
    div=document.createElement("div")
    ul11=document.createElement("ul")
    li1=document.createElement("li")
    li2=document.createElement("li")
    li3=document.createElement("li")
    bol=document.createElement("b")
    bol.innerText="Clothing"
    li1.append(bol)
    br=document.createElement("br")
    br2=document.createElement("br")

    a1=document.createElement("a")
    a1.innerText="WOMEN's"
    a1.setAttribute("href","womens.html")
    a1.style.color="brown"
    a2=document.createElement("a")
    a2.innerText="MEN's"

    li2.append(a1)
    li3.append(a2)
    ul11.append(br2,li1,br,li2,li3)
    div.append(ul11)
    div.setAttribute("class","submenu1")
    document.querySelector("#brand").append(div)

}

// document.querySelector(".prodit>button").addEventListener("click",myfun)
// // function myfun(){
//     h1=document.createElement("h1")
//     h1.innerText="hiiiiiiii"
//    document.querySelector("#proid122").append(h1)
// }