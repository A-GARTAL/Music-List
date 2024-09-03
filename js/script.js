let $ = document;
let musicsContainer = $.querySelector('.musics_container');
let isPlay = false;
let currentTrack ,idDetect=-1;;
let allAudios = $.getElementsByTagName('audio')
let tracks = [
  {id:0 , trackName:'Him & I ' , audio:'audio/G-Eazy & Halsey - Him & I (Official Video).mp3' ,
     cover:'img/G-Eazy_and_Halsey_Him_&_I.jpg' },
  {id:1 , trackName:'I Hold You' , audio:'audio/CLANN - I Hold You.mp3' ,
     cover:'img/CLANN - I Hold You.jpg' },
  {id:2 , trackName:'Transgender' , audio:'audio/Crystal Castles - Transgender.mp3' ,
     cover:'img/Crystal Castles - Transgender.jpg' },
  {id:3 , trackName:'Ecstacy' , audio:'audio/SUICIDAL-IDOL - ecstacy (slowed).mp3' ,
     cover:'img/SUICIDAL-IDOL - ecstacy (slowed).jpg' },
  {id:4 , trackName:'Another Love' , audio:'audio/Tom Odell - Another Love.mp3' ,
     cover:'img/Tom Odell - Another Love.jpg' }
];

for(let i=0 ; i<tracks.length ; i++){
 
  createNewTrack(tracks[i].id , tracks[i].cover , tracks[i].trackName , tracks[i].audio );
}

function createNewTrack(id , imagSrc , musicName , audioSrc){
  let div = $.createElement('div');
  div.classList.add('track_container');

  let img = $.createElement('img');
  img.classList.add('music_img');
  img.setAttribute('src' , imagSrc);

  let span = $.createElement('span');
  span.classList.add('track_info');
  span.innerHTML = musicName;

  let p = $.createElement('p');
  p.classList.add('fullSize');
  p.addEventListener('click' , playORpause);

  let audio = $.createElement('audio');
  audio.classList.add('audio_elem');
  audio.setAttribute('src' , audioSrc);
  audio.dataset.id = id;
  
  div.append(img,span,p,audio);
  musicsContainer.append(div);
}


function playORpause(event){
  currentTrack = event.target.nextElementSibling;
  currentTrack.volume = 0.25
  if(currentTrack.dataset.id!=idDetect)
  {
    isPlay = false;
  }
  else
  {
    isPlay = true;
    idDetect=-1;
  }
  for(let i=0 ; i<allAudios.length ; i++)
  {
    allAudios[i].pause();
  }
  if(!isPlay)
  {
    currentTrack.play();
    isPlay = true ;
    idDetect=currentTrack.dataset.id;
  }
  else if(isPlay)
  {
    currentTrack.pause();
    isPlay = false ;
  }

}