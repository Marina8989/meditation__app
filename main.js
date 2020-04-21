const video = document.querySelector('.vid-container video');
const song = document.querySelector('.song');
const play = document.querySelector('.play');
const replay = document.querySelector('.replay');
const outline = document.querySelector('.moving-outline circle');

//Sounds
const sounds = document.querySelectorAll('.sound-picker button');
//Time Display
const timeDisplay = document.querySelector('.time-display');
const outlineLength = outline.getTotalLength();

//Duration 
const timeSelect = document.querySelectorAll('.time-select button');
let fakeDuration = 600;