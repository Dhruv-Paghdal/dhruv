let mybutton = document.querySelector('.topButton');
let callbutton = document.querySelector('.callButton');
let myNav = document.querySelector('#navBar');
let home=document.querySelector("#home");
home.style.backgroundColor="#02D2D2";
let about=document.querySelector("#about");
let skill=document.querySelector("#skills");
let project=document.querySelector("#project");

function moveTop() {
  let scrolly=((document.body.scrollY)/(document.body.clientHeight))*100;
  let scrolltop=((document.documentElement.scrollTop)/(document.body.clientHeight))*100;

  if ((scrolly >= 5 ||scrolltop >= 5) && (scrolly <= 20 ||scrolltop <= 20)) {
    mybutton.style.visibility="visible";
    myNav.style.backgroundColor="rgb(54, 69, 79)";
  } 

  else if((scrolly >= 20 || scrolltop >= 20) && (scrolly <= 40 || scrolltop <= 40)){
    mybutton.style.visibility="visible";
    myNav.style.backgroundColor="rgb(54, 69, 79)";
    about.style.backgroundColor="#02D2D2";
    home.style.backgroundColor="transparent";
    skill.style.backgroundColor="transparent";
    project.style.backgroundColor="transparent";
  }

  else if((scrolly >= 40 || scrolltop >= 40) && (scrolly <= 60 || scrolltop <= 60)){
    mybutton.style.visibility="visible";
    myNav.style.backgroundColor="rgb( 54, 69, 79)";
    skill.style.backgroundColor="#02D2D2";
    home.style.backgroundColor="transparent";
    about.style.backgroundColor="transparent";
    project.style.backgroundColor="transparent";
  }

  else if((scrolly >= 60 || scrolltop >= 60) && (scrolly <= 90 || scrolltop <= 90)){
    mybutton.style.visibility="visible";
    myNav.style.backgroundColor="rgb(54, 69, 79)";
    project.style.backgroundColor="#02D2D2";
    home.style.backgroundColor="transparent";
    skill.style.backgroundColor="transparent";
    about.style.backgroundColor="transparent";
  }

  else{
    mybutton.style.visibility="hidden";
    myNav.style.backgroundColor="transparent";
    home.style.backgroundColor="#02D2D2";
    about.style.backgroundColor="transparent";
    skill.style.backgroundColor="transparent";
    project.style.backgroundColor="transparent";
  }

}
window.onscroll = function() {moveTop()};

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
      strings: typed_strings.split(", "),
      typeSpeed: 70,
      loop: true,
      backDelay: 900,
      backSpeed: 40,
  });
}

$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

let activeCarousel=()=>{
  let carousel=document.querySelectorAll(".carousel-item");
  let a=carousel[0].classList.contains("active");
  let b=carousel[1].classList.contains("active");
  let c=carousel[2].classList.contains("active");
  let d=carousel[3].classList.contains("active");
  if(a){
    document.querySelector("#projectDetail").innerHTML=`<div>
                                                          <h3 style="font-size: 2rem; font-weight: 450;">iWeather</h3>
                                                          <p style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753); padding-top:0.5rem">
                                                            A real time weather app, developed using JAVASCRIPT.
                                                            <br> 
                                                            An app containg functionality like:-
                                                            <ul>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);">Wind Direction & Speed.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);">Humidity, Pressure & AQI Detail.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);">Feels Like Temperature.</li>
                                                            </ul>
                                                            <div style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753);">
                                                              Also the app can use, system location to determine current location. 
                                                            </div>
                                                          </p>
                                                          <div style="display:flex; flex-direction: row; align-items:center; justify-content:space-between; width:70%">
                                                            <a href="https://dhruv-paghdal.github.io/iweather" target="_blank">
                                                              <button>Experience</button>
                                                            </a>
                                                            <a href="https://github.com/Dhruv-Paghdal/iweather" target="_blank">
                                                              <button>Code</button>
                                                            </a>
                                                          </div>
                                                        </div>`;
  }
  else if(b){
    document.querySelector("#projectDetail").innerHTML=`<div>
                                                          <h3 style="font-size: 2rem; font-weight: 450;">To-DO List App</h3>
                                                          <p style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753); padding-top:0.5rem">
                                                            A real time ToDo app, developed using JAVASCRIPT and PHP.
                                                            <br> 
                                                            An app containg functionality like:-
                                                            <ul>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Create Task.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Modify or Delete Task.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Clear entire List</li>
                                                            </ul>
                                                          </p>
                                                          <a href="https://github.com/Dhruv-Paghdal/TODO" target="_blank">
                                                            <button>Code</button>
                                                          </a>
                                                        </div>`;
  }
  else if(c){
    document.querySelector("#projectDetail").innerHTML=`<div>
                                                          <h3 style="font-size: 2rem; font-weight: 450;">Speech To Text</h3>
                                                          <p style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753); padding-top:0.5rem">
                                                            A real time speech-text converter programm, written in Python.
                                                            <br> 
                                                            An menu driven program containg functionality like:-
                                                            <ul>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Speak to convert.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Save the converted data into file.</li>
                                                            </ul>
                                                          </p>
                                                          <a href="https://github.com/Dhruv-Paghdal/Pyhton-Projects/blob/main/Speech_To_Text.py" target="_blank">
                                                            <button>Code</button>
                                                          </a>
                                                        </div>`;
  }
  else if(d){
    document.querySelector("#projectDetail").innerHTML=`<div>
                                                          <h3 style="font-size: 2rem; font-weight: 450;">OTP Sender App</h3>
                                                          <p style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753); padding-top:0.5rem">
                                                            A real time OTP app, written in Python.
                                                            <br> 
                                                            An gui application containg functionality like:-
                                                            <ul>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Ask's for mobile number conformation.</li>
                                                              <li style="padding: 0.2rem; font-size: 1.2rem; font-weight: 400; color: rgba(71, 70, 70, 0.735);" >Check's OTP entered is valid or not.</li>
                                                            </ul>
                                                          </p>
                                                          <a href="https://github.com/Dhruv-Paghdal/Pyhton-Projects/blob/main/OTP-App.py" target="_blank">
                                                            <button>Code</button>
                                                          </a>
                                                        </div>`;
  }
  else{
    document.querySelector("#projectDetail").innerHTML=`<div>
                                                          <h3 style="font-size: 2rem; font-weight: 450;">Debit Card Mock-Up</h3>
                                                          <p style="font-size: 1.3rem; font-weight:400; color: rgba(71, 70, 70, 0.753); padding-top:0.5rem" >
                                                            An static web page containing, design of debit card.
                                                            It can be used in any payment related application or website.
                                                            <br>
                                                            Designed using pure HTML and CSS.
                                                          </p>
                                                          <div style="display:flex; flex-direction: row; align-items:center; justify-content:space-between; width:70%">
                                                            <a href="https://dhruv-paghdal.github.io/debitcard" target="_blank">
                                                              <button>Experience</button>
                                                            </a>
                                                            <a href="https://github.com/Dhruv-Paghdal/debitcard" target="_blank">
                                                              <button>Code</button>
                                                            </a>
                                                          </div>
                                                        </div>`;  
  }
}

setInterval(activeCarousel,350);
