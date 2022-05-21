var header_index = document.getElementsByClassName("header-content")[0] ;
var header_menu = document.getElementsByClassName("header-menu")[0] ;
var folder = document.getElementsByClassName("header-menu")[0] ;
var card_notes_head = document.getElementsByClassName("chead-notes")[0];
var card_notes_para = document.getElementsByClassName("cpara-notes")[0];
var card_prac_head = document.getElementsByClassName("chead-prac")[0];
var card_prac_para = document.getElementsByClassName("cpara-prac")[0];
var card_tut_head = document.getElementsByClassName("chead-tut")[0];
var card_tut_para = document.getElementsByClassName("cpara-tut")[0];
var sidebar = document.getElementsByClassName("sidebar-index")[0];
var closebtn = document.getElementById("closebtn-index");





card_notes_head.innerHTML = "Microprocessor Notes" ;
card_notes_para.innerHTML = `Here you get, <br><br> Imprtant Notes Regarding Microprocessor chapter to have a good grab over this subject`;
header_menu.innerText = "📂"
header_index.innerText = "Microprocessor"
card_prac_head.innerHTML = "Practicals"
card_prac_para.innerHTML = "A wide range of practical, <br><br> performed by best professor of india and, <br> their copies are available here "
card_tut_head.innerHTML = "Tutorials "
card_tut_para.innerHTML = "Here,You will get  <br><br>Hundreds of youtube tutorial video from where you can learn and make out something productive but try to make something inovative"


function showSidebar(){
 //    var sidebar = document.getElementsByClassName("sidebar-index");
     sidebar.style.left = "0px" ;
 //  var sidebar = document.getElementsByClassName("sidebar-index")
}

function closeSidebar(){
  sidebar.style.left ="-350px";
}

