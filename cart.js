
    // h1=document.createElement("h1")
    // h1.innerText="hiiiiiiii"
  

    let arr2=JSON.parse(localStorage.getItem("cartproducts"))||[]
    display(arr2)

    // total=arr2.reduce((ac,el)=> ac+el.tname3,0)
    // console.log(total)
    let total=Number(0)
    arr2.forEach(function(ele){
        p=Number(ele.tname2)
        total=total+p
    })
    document.querySelector("#hh22").innerText="Total price is: "+total
    console.log(total)

    //    document.querySelector("#proid122").append(arr1.img1)
    //   imm= document.querySelector("#proid122>img").src=arr1.img
function display(arr2){
    document.querySelector("#proid122").innerHTML = "";
    arr2.forEach(function (ele,i){
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
    br7=document.createElement("br")
    br8=document.createElement("br")
    br9=document.createElement("br")
    br10=document.createElement("br")
    br11=document.createElement("br")
    bt=document.createElement("button")
    bt.innerText="DELETE"
    bt.addEventListener("click",function(){
        deletfav(ele,i)
        
       })

    let h4=document.createElement("h3").innerText=ele.tname
    let p=document.createElement("p").innerText=ele.tname1
    let h5=document.createElement("h5").innerText=ele.tname2
    
    let hw=document.createElement("h3").innerText="COLOR : No Color"
    
    
    h3=document.createElement("h3").innerText="IMPORTANT"
    pp=document.createElement("p").innerText="All products that will be shipped will have a shelf-life more than 8 months to 3 years."
    div.append(h3,br2,pp)
div1=document.createElement("div")
div1.setAttribute("id","div1")
div2=document.createElement("div")
div2.setAttribute("id","div2")


    div1.append(imageprod)
    document.querySelector("#proid122").append(div1,div2)
   div2.append(h4,br1,p,br,h5,br3,br4,br5,div,br6,br7,br8,br9,br10,br6,hw,br11,bt)
    
    })
}

function deletfav(ele,i){
    arr2.splice(ele,1)
    console.log(arr2)
    localStorage.setItem("cartproducts",JSON.stringify(arr2))
    display(arr2)
    }
    //    document.querySelector("#proid122").append(div)
    