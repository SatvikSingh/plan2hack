function faqSwitch(e){

  var content = e.lastChild.previousElementSibling
  let header = e.firstElementChild

  if(content.classList == "answer")
  {
    content.classList.add("show")
    content.classList.remove ("answer")

    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(180deg)'

    header.style.fontWeight = "700"
  
  }
  else 
  {
    e.firstElementChild.lastChild.previousElementSibling.style.transform = 'rotate(0deg)'

    content.classList.remove ("show")
    content.classList.add("answer")
    
    header.style.fontWeight = "400"
  
  }
}


