var header_index = document.getElementsByClassName("header-content")[0] ;
var header_menu = document.getElementsByClassName("header-menu")[0] ;
var folder = document.getElementsByClassName("header-menu")[0] ;
var card_notes_head = document.getElementsByClassName("chead-notes")[0];
var card_notes_para = document.getElementsByClassName("cpara-notes")[0];








card_notes_head.innerHTML = "Microprocessor Notes" ;
card_notes_para.innerHTML = `Here you get, <br><br> Imprtant Notes Regarding Microprocessor chapter to have a good grab over this subject`;
header_menu.innerText = "📂"
header_index.innerText = "Microprocessor"






folder.addEventListener(
  "click",
  ()=>{
    let msg = "folder is clicked"
    console.log(msg)
  //function ends here
  })
