let playpausebtn = document.querySelector('.playpausebtn')
let gif = document.querySelector('.gif')
let songindex=0;
let songplay = document.querySelectorAll('.songplay')
let myprogressbar=document.querySelector('.myprogressbar')
let songs = [
 "music/song1.mp3",
  "music/song2.mp3",
"music/song3.mp3",
 "music/song4.mp3",
"music/song65.mp3",
 "music/song6.mp3"
]
let audio=new Audio();


function iconsChange(index){
  songplay.forEach((icon,i)=>{
    icon.classList.remove('fa-circle-pause');
    icon.classList.add('fa-circle-play');
    if(i==index) icon.classList.replace('fa-circle-play','fa-circle-pause')
  });
playpausebtn.classList.replace('fa-circle-play','fa-circle-pause')
gif.style.visibility='visible';
}

function play(index){
songindex=index;
audio.pause()
audio.currentTime=0;
audio.src=songs[index];
audio.load();
audio.play();
iconsChange(index)
}

playpausebtn.addEventListener('click',()=>{
  if(audio.paused){
    audio.play();
    iconsChange(songindex);
  } else{
audio.pause();
playpausebtn.classList.replace('fa-circle-pause','fa-circle-play');
gif.style.visibility='hidden';
songplay[songindex].classList.replace('fa-circle-pause','fa-circle-play') ;
  }
  
})

songplay.forEach((icon,i)=>{
  icon.addEventListener('click',()=>{
    if(songindex==i && !audio.paused){
      audio.pause();
     playpausebtn.classList.replace('fa-circle-pause','fa-circle-play');
gif.style.visibility='hidden';
icon.classList.replace('fa-circle-pause','fa-circle-play');
    }else{
      play(i);
    }
  })
})


audio.addEventListener('timeupdate',()=>{
  if(!isNaN(audio.duration)){
    myprogressbar.value=(audio.currentTime / audio.duration)*100;
  }
})

myprogressbar.addEventListener('input',()=>{
  if(!isNaN(audio.duration)){
    audio.currentTime=(myprogressbar.value / 100)*audio.duration;
  }
})

audio.addEventListener('ended',()=>{
  let next=(songindex+1)%songs.length;
  play(next);
})

document.getElementById('prev').addEventListener('click', () => {
  let prev = (songindex - 1 + songs.length) % songs.length;
  play(prev);
});

document.getElementById('next').addEventListener('click', () => {
  let next = (songindex + 1) % songs.length;
  play(next);
});