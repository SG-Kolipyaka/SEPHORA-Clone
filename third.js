
    // h1=document.createElement("h1")  
    // h1.innerText="hiiiiiiii"
  

   let arr2=JSON.parse(localStorage.getItem("subbb"))||[]
   let cartitems=JSON.parse(localStorage.getItem("cartproducts"))||[]

//    document.querySelector("#proid122").append(arr1.img1)
//   imm= document.querySelector("#proid122>img").src=arr1.img
arr2.forEach(function (ele){
    div=document.createElement("div")
let imageprod=document.createElement("img")
imageprod.setAttribute("src",ele.tname3)
br=document.createElement("br")
br1=document.createElement("br")
br2=document.createElement("br")
br3=document.createElement("br")
br4=document.createElement("br")
br5=document.createElement("br")
br6=document.createElement("br")
let h4=document.createElement("h3").innerText=ele.tname
let p=document.createElement("p").innerText=ele.tname1
let h5=document.createElement("h5").innerText=ele.tname2

let hw=document.createElement("h3").innerText="COLOR : No Color"

btn=document.querySelector("#but20>button")




btn.addEventListener("click",function(){
    cartitems.push(ele)
    localStorage.setItem("cartproducts",JSON.stringify(cartitems))
})


h3=document.createElement("h3").innerText="IMPORTANT"
pp=document.createElement("p").innerText="All products that will be shipped will have a shelf-life more than 8 months to 3 years."
div.append(h3,br2,pp)
document.querySelector("#div1").append(imageprod)
document.querySelector("#div2").append(h4,br1,p,br,h5,br3,br4,br5,div,br6,hw)
})
//    document.querySelector("#proid122").append(div)
