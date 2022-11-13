
let arr1=JSON.parse(localStorage.getItem("subs"))||[]
let cartitems=JSON.parse(localStorage.getItem("cartproducts"))||[]

arr3=[]

function mytable(obj){
    document.querySelector("#prods").innerHTML = "";
        // console.log(output);
    
        // document.querySelector("#prods").innerHTML = "";
    
        obj.forEach(function(elem){
            let aa=document.createElement("a")
            aa.setAttribute("href","product.html")

            aa.addEventListener("click",function(){
                arr3.push(elem)
                localStorage.setItem("subbb",JSON.stringify(arr3))
            })
              




            let div=document.createElement("div")
            div.setAttribute("class","prodit")
    
    
            br=document.createElement("br")
    br1=document.createElement("br")
    br2=document.createElement("br")
    br3=document.createElement("br")
    br4=document.createElement("br")
    br5=document.createElement("br")
    br6=document.createElement("br")
    br7=document.createElement("br")
br8=document.createElement("br")
    btn=document.createElement("button")
    btn.innerText="Add To Bag"
    btn.addEventListener("click",function(){
        cartitems.push(elem)
        localStorage.setItem("cartproducts",JSON.stringify(cartitems))
    })
            let imageprod=document.createElement("img")
            imageprod.setAttribute("src",elem.tname3)
    
    let h4=document.createElement("h3").innerText=elem.tname
    let p=document.createElement("p").innerText=elem.tname1
    let h5=document.createElement("h5").innerText=elem.tname2
    let p1=document.createElement("p").innerText=elem.tname4
    
    aa.append(imageprod)
    
        
    
        div.append(aa,br,btn,br6,br3,h4,br4,br1,p,br5,br2,h5,br7,p1);
         document.querySelector("#prods").append(div)
        });
    
    }

    mytable(arr1)

// ==============================================================
// let arr3=JSON.parse(localStorage.getItem("subb"))||[]
// arr3=[]
// document.querySelector(".prodit>a").addEventListener("click",myfunu)
// function myfunu(arr1){
//  arr1.forEach(function(ele){
//     img1=document.querySelector(".prodit>a>img").src
//     a=document.querySelector(".prodit>h4").innerText 
//   b=  document.querySelector(".prodit>p").innerText 
//   c=  document.querySelector(".prodit>h5").innerText
// img1=ele.tname3
// a=ele.tname
// b=ele.tname2
// c=ele.tname4
// obj1={
//    img1, a,b,c

// }
// arr3.push(obj)
// console.log(arr3)

//     localStorage.setItem("subb",JSON.stringify(arr3))
// document.querySelector(".prodit").innerText=b
//  })

// }
// myfunu(arr1)

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

function  price(){
    let sort=document.querySelector("#seld").value;
    if(sort=="Price Low to High"){
      data.sort((aa,bb)=>aa.tname2 -bb.tname2);
    }
    if(sort=="Price High to Low"){
      data.sort((aa,bb)=>bb.tname2 -aa.tname2);
    }
    console.log(data)
    display(data)
  }


function Regions(){
    let selected = document.querySelector("#sell").value;
    // if(selected=="Popularaty"){
    //     se=document.createElement("a")
    //     se.setAttribute("href","C:\Users\Sumit\Desktop\inquisitive-toy-7122\womens.html")
    //     document.querySelector("#sell").append(se)
    // }
    console.log(selected);
    
    let filtered = data.filter(function(elem){
        av=elem.tname == selected;
        
        
        return av;
       
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
// function Regions(){
//     let selected = document.querySelector("#sell").value;
//     console.log(selected);
    
//     let filtered = data.filter(function(elem){
        
//         return elem.tname4 == selected;
       
//     });

//     // data.forEach(function (ele){
//     //     if(ele.a==selected){
//     //         console.log(ele)
//     //         display(filtered);
//     //     }
//     // })
//     console.log(filtered);
//     display(filtered);
// }



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
br7=document.createElement("br")
br8=document.createElement("br")
btn=document.createElement("button")
btn.innerText="Add To Bag"
btn.addEventListener("click",function(){
    cartitems.push(elem)
    localStorage.setItem("cartproducts",JSON.stringify(cartitems))
})
        let imageprod=document.createElement("img")
        imageprod.setAttribute("src",elem.tname3)

let h4=document.createElement("h3").innerText=elem.tname
let p=document.createElement("p").innerText=elem.tname1
let h5=document.createElement("h5").innerText=elem.tname2
let p1=document.createElement("p").innerText=elem.tname4
aa.append(imageprod)

    

    div.append(aa,br,btn,br6,br3,h4,br4,br1,p,br5,br2,h5,br7,p1);
     document.querySelector("#prods").append(div)
    });

}