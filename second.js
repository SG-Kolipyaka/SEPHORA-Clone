document.querySelector(".prodit>a").addEventListener("click",myfun)
let arr1=JSON.parse(localStorage.getItem("subs"))||[]


function mytable(obj){
    document.querySelector("#prods").innerHTML = "";
        // console.log(output);
    
        // document.querySelector("#prods").innerHTML = "";
    
        obj.forEach(function(elem){
            let aa=document.createElement("a")
            aa.setAttribute("href","product.html")
            let div=document.createElement("div")
            div.setAttribute("class","prodit")
    
    
            br=document.createElement("br")
    br1=document.createElement("br")
    br2=document.createElement("br")
    br3=document.createElement("br")
    br4=document.createElement("br")
    br5=document.createElement("br")
    br6=document.createElement("br")
    btn=document.createElement("button")
    btn.innerText="Add To Bag"
            let imageprod=document.createElement("img")
            imageprod.setAttribute("src",elem.tname3)
    
    let h4=document.createElement("h3").innerText=elem.tname
    let p=document.createElement("p").innerText=elem.tname1
    let h5=document.createElement("h5").innerText=elem.tname2
    
    aa.append(imageprod)
    
        
    
        div.append(aa,br,btn,br6,br3,h4,br4,br1,p,br5,br2,h5);
         document.querySelector("#prods").append(div)
        });
    
    }

    mytable(arr1)

// ==============================================================
let arr2=[]
function myfun(){
    img1=document.querySelector(".prodit>a>img").src
    a=document.querySelector(".prodit>h4").innerText 
  b=  document.querySelector(".prodit>p").innerText 
  c=  document.querySelector(".prodit>h5").innerText

obj1={
   img1, a,b,c

}
arr2.push(obj)
console.log(arr2)

    localStorage.setItem("subss",JSON.stringify(obj1))
// document.querySelector(".prodit").innerText=b

}


// ======================================================

data=JSON.parse(localStorage.getItem("subs"))||[]

// img1=document.querySelector(".prodit>a>img").src
// a=document.querySelector(".prodit>h4").innerText 
// b=  document.querySelector(".prodit>p").innerText 
// c=  document.querySelector(".prodit>h5").innerText
// obj={
//     img1, a,b,c
 
//  }
// //  console.log(obj)sortprod
//  data.push(obj)
//  localStorage.setItem("sortprod",JSON.stringify(data))



function Regions(){
    let selected = document.querySelector("#sell").value;
    console.log(selected);
    
    let filtered = data.filter(function(elem){
        
        return elem.tname == selected;
       
    });
    // data.forEach(function (ele){
    //     if(ele.a==selected){
    //         console.log(ele)
    //         display(filtered);
    //     }
    // })
    console.log(filtered);
    display(filtered);
}


function display(output){
    // console.log(output);

    document.querySelector("#prods").innerHTML = "";

    output.forEach(function(elem){
        let aa=document.createElement("a")
        aa.setAttribute("href","product.html")
        let div=document.createElement("div")
        div.setAttribute("class","prodit")


        br=document.createElement("br")
br1=document.createElement("br")
br2=document.createElement("br")
br3=document.createElement("br")
br4=document.createElement("br")
br5=document.createElement("br")
br6=document.createElement("br")
btn=document.createElement("button")
btn.innerText="Add To Bag"
        let imageprod=document.createElement("img")
        imageprod.setAttribute("src",elem.tname3)

let h4=document.createElement("h3").innerText=elem.tname
let p=document.createElement("p").innerText=elem.tname1
let h5=document.createElement("h5").innerText=elem.tname2

aa.append(imageprod)

    

    div.append(aa,br,btn,br6,br3,h4,br4,br1,p,br5,br2,h5);
     document.querySelector("#prods").append(div)
    });

}