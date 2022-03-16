var wrapper = document.querySelector(".wrapper");
var title = document.querySelector(".hr");
var carImg = document.querySelector(".img-car");
var btn = document.querySelector(".btn");
var live = document.querySelector(".live");
var list = document.querySelector(".list");
var command = document.querySelector(".command");
var cubic = document.querySelector(".cubic");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");
var box9 = document.querySelector(".box9");

var item = document.createElement("li");
var result = document.createElement("div");
item.classList.add("item");
result.classList.add("result");


btn.addEventListener("click", function () {
    record.start();  
    live.style.display = "block";
})

var record = new webkitSpeechRecognition();
record.lang = "uz-UZ";

record.onend = function(){
  console.log("ovoz yozish to'xtadi");
}

record.onresult = function(evt){
   
    var commands = evt.results[0][0].transcript;

    item.innerHTML = ''

    switch (commands){
        case 'nav':
            command.classList.add('menu');
            break;
        case 'start':
            title.classList.add('border');
            break;
        case 'car':
            carImg.classList.add('run'); 
            break;
        case 'youtube':
            window.open('https://www.youtube.com/watch?v=u_DVXmWl_hU');
            break;
        case 'kubik':
            cubic.classList.add('show');
            break;
        case 'top':
            box1.classList.add('top');
            box2.classList.add('top');
            box3.classList.add('top');
            box4.classList.add('top');
            box5.classList.add('top');
            box6.classList.add('top');
            box7.classList.add('top');
            box8.classList.add('top');
            box9.classList.add('top');

            box1.classList.remove('left');
            box2.classList.remove('left');
            box3.classList.remove('left');
            box4.classList.remove('left');
            box5.classList.remove('left');
            box6.classList.remove('left');
            box7.classList.remove('left');
            box8.classList.remove('left');
            box9.classList.remove('left');
            break;
        case 'left':
            box1.classList.remove('top');
            box2.classList.remove('top');
            box3.classList.remove('top');
            box4.classList.remove('top');
            box5.classList.remove('top');
            box6.classList.remove('top');
            box7.classList.remove('top');
            box8.classList.remove('top');
            box9.classList.remove('top');

            box1.classList.add('left');
            box2.classList.add('left');
            box3.classList.add('left');
            box4.classList.add('left');
            box5.classList.add('left');
            box6.classList.add('left');
            box7.classList.add('left');
            box8.classList.add('left');
            box9.classList.add('left');
            break;
        default:
            item.innerHTML = commands;
            list.appendChild(item);
    }
}


 