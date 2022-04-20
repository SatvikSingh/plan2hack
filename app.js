//let x = document.querySelector(".right-contents")
//// let content = document.querySelector(".answer")


//x.addEventListener("click",hideShow)
//function hideShow(e)
//{
 
//  if(e.target.classList == "imgs")
  
//  //console.log('E: ', e.target)
//  //var content = e.target.lastChild.previousElementSibling
//  //let header = e.target.firstElementChild
  
//  var content = e.path[2].lastChild.previousElementSibling
//  let header = e.target.parentElement.firstElementChild
  
//  //console.log(e.path[2].lastChild.previousElementSibling)
//  {
//    if(content.classList == "answer")
//    {
//      content.classList.add("show")
//      content.classList.remove ("answer")

//      e.target.style.transform = 'rotate(180deg)'
  
//      header.style.fontWeight = "700"
    
//    }
//    else 
//    {
//      e.target.style.transform = 'rotate(0deg)'

//      content.classList.remove ("show")
//      content.classList.add("answer")
      
//      header.style.fontWeight = "400"
    
//    }
//   } 
//}





function manualSwitch(e){
  console.log('E IS: ', e)

  var content = e.lastChild.previousElementSibling
  let header = e.firstElementChild

  if(content.classList == "answer")
  {
    console.log('IF PART')
    //console.log(e.firstElementChild.lastChild.previousElementSibling)
    content.classList.add("show")
    content.classList.remove ("answer")

    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(180deg)'

    header.style.fontWeight = "700"

    console.log('RAN IF PART')
  
  }
  else 
  {
    console.log('ELSE PART')
    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(0deg)'

    content.classList.remove ("show")
    content.classList.add("answer")
    
    header.style.fontWeight = "400"

    console.log('RAN ELSE PART')
  
  }
}


