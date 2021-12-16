const person = [
  {
    id: 1,
    name: "Shahzodbek",
    job: "Web Dev",
    img: "./image/as.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores  ",
  },
  {
    id: 2,
    name: "Anvar",
    img: "./image/a.png",
    job: "Programmer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores  ",
  },
  {
    id: 3,
    name: "Ali",
    img: "./image/a.png",
    job: "Teacher",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores Modi atque provident aperiam! Maiores exercitationem eum est, aperiam asperiores  ",
  },
];


const author=document.getElementById("name");
const job=document.getElementById("job");
const image=document.getElementById("pimage")
const info=document.getElementById("info");

const prevbtn=document.querySelector(".prev-btn"); 
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let current=0;
window.addEventListener("DOMContentLoaded",function(){
   showperson();
});

function showperson(){
   const item=person[current];
   author.textContent=item.name;
   job.textContent=item.job;
   image.src=item.img;
   info.textContent=item.text;
}

nextbtn.addEventListener("click",function(){
    current++;
    if(current>person.length-1){
        current=0;
    }
    showperson();
});
prevbtn.addEventListener("click",function(){
    current--;
    if (current <0) {
      current = person.length-1;
    }
    showperson();
});

randombtn.addEventListener("click",function(){
    current=Math.floor(Math.random()*person.length) ;
    showperson();
});
