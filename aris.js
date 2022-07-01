console.log("Welcome to spotify");

let songsIndex =0;
let masterPlay = document.getElementById('masterPlay');
let mover =document.getElementById('mover')
let audioElement = new Audio("C:/Users/abcd/Desktop/aria/1.mp3");
// let songitem = Array.from(document.getElementByClassName('songName'));

let songs = [
	{songName :"tum hi ho", filePath :"C:/Users/abcd/Desktop/aria/1.mp3",coverPath:"covers/1.jpg"},
	{songName :"Ae dil hai mushkil", filePath :"C:/Users/abcd/Desktop/aria/2.mp3",coverPath:"covers/2.jpg"},
	{songName :"Agar tum sath ho", filePath :"C:/Users/abcd/Desktop/aria/3.mp3",coverPath:"covers/3.jpg"},
	{songName :"kahariyat", filePath :"C:/Users/abcd/Desktop/aria/4.mp3",coverPath:"covers/4.jpg"},
	{songName :"soch na sake", filePath :"C:/Users/abcd/Desktop/aria/5.mp3",coverPath:"covers/5.jpg"},
]

// songitem.forEach((element,i)=>{
// 	console.log(element,i);
// 	element.getElementByClassName("songName")[0].innerText = song[i].songName
// })





masterPlay.addEventListener('click', ()=>{
	if (audioElement.paused || audioElement.currentTime<=0) {
		audioElement.play();
	}
	else{
		audioElement.pause();
	}
})

audioElement.addEventListener('timeupdate', ()=>{
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	mover.value = progress;
})

mover.addEventListener('change',()=>{
	audioElement.currentTime = (mover.value * audioElement.duration)/100;
})