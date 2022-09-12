// SVG MAZES
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");
const levelFour = document.querySelector('.level-four');
const levelFive = document.querySelector('.level-five');
const levelSix = document.querySelector('.level-six');
const levelSeven = document.querySelector('.level-seven');
const levelEight = document.querySelector('.level-eight');
const levelNine = document.querySelector('.level-nine');
const levelTen = document.querySelector('.level-ten');
const levelEleven = document.querySelector('.level-eleven');
const levelTwelve = document.querySelector('.level-twelve');
const levelThirteen = document.querySelector('.level-thirteen');
const levelFourteen = document.querySelector('.level-fourteen');
const levelFifteen = document.querySelector('.level-fifteen');
const levelSixteen = document.querySelector('.level-sixteen');
const levelSeventeen = document.querySelector('.level-seventeen');
// UI MESSAGES
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
// ADDITIONAL FEATURES
const applause = document.querySelector('.applause');
const bruh = document.querySelector('.bruh');
const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");

// Checking which level user now
// Executing an action after knowing the level
let level = 1;

const levelCheck = () => {
  if (level === 2) {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
    uiLevel.textContent = "Level 2";
    uiMessage.textContent = "Those who learned to collaborate and improvise most effectively have prevailed";
  } 
  else if (level === 3) {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
    uiLevel.textContent = "Level 3";
    uiMessage.textContent = "You don't learn to do something by following rules. You learn by doing and falling over";
  }
  else if (level === 4) {
    levelThree.style.display = "none";
    levelFour.style.display = "block";
    uiLevel.textContent = "Level 4";
    uiMessage.textContent = "Wahai anak saudaraku, belajarlah adab sebelum belajar ilmu";
  } 
  else if (level === 5) {
    levelFour.style.display = "none";
    levelFive.style.display = "block";
    uiLevel.textContent = "Level 5";
    uiMessage.textContent = "Love yourself. It is important to stay positive because beauty comes from the inside out";
  }
  else if (level === 6) {
    levelFive.style.display = "none";
    levelSix.style.display = "block";
    uiLevel.textContent = "Level 6";
    uiMessage.textContent = "Belajarlah mengucap syukur dari hal baik, serta belajarlah menjadi kuat dari hal buruk di hidupmu";
  } 
  else if (level === 7) {
    levelSix.style.display = "none";
    levelSeven.style.display = "block";
    uiLevel.textContent = "Level 7";
    uiMessage.textContent = "Education is the most powerful weapon that we can use to change the world";
  }
  else if (level === 8) {
    levelSeven.style.display = "none";
    levelEight.style.display = "block";
    uiLevel.textContent = "Level 8";
    uiMessage.textContent = "We appreciate yesterday. Nonetheless, we are looking for a better tomorrow";
  } 
  else if (level === 9) {
    levelEight.style.display = "none";
    levelNine.style.display = "block";
    uiLevel.textContent = "Level 9";
    uiMessage.textContent = "The first step is to establish that something is possible then probability will occur";
  }
  else if (level === 10) {
    levelNine.style.display = "none";
    levelTen.style.display = "block";
    uiLevel.textContent = "Level 10";
    uiMessage.textContent = "Sebuah mimpi tidak akan pernah menjadi kenyataan melalui kekuatan sihir, dibutuhkan tekad, keringat, dan kerja keras";
  } 
  else if (level === 11) {
    levelTen.style.display = "none";
    levelEleven.style.display = "block";
    uiLevel.textContent = "Level 11";
    uiMessage.textContent = "Jika kita menyerah pada kegagalan sekarang, maka kita tidak akan berhasil untuk meraih mimpi itu nantinya";
  }
  else if (level === 12) {
    levelEleven.style.display = "none";
    levelTwelve.style.display = "block";
    uiLevel.textContent = "Level 12";
    uiMessage.textContent = "Sukses adalah sebuah perjalanan, bukan sebuah tujuan. Usaha yang berkelanjutan lebih penting daripada hasilnya";
  } 
  else if (level === 13) {
    levelTwelve.style.display = "none";
    levelThirteen.style.display = "block";
    uiLevel.textContent = "Level 13";
    uiMessage.textContent = "Meskipun kamu telah berada di jalur yang benar, kamu akan dilambung jika hanya tinggal duduk diam menunggu";
  }
  else if (level === 14) {
    levelThirteen.style.display = "none";
    levelFourteen.style.display = "block";
    uiLevel.textContent = "Level 14";
    uiMessage.textContent = "Hal hebat tercipta dari rangkaian hal kecil yang disusun bersama sama menjadi satu";
  } 
  else if (level === 15) {
    levelFourteen.style.display = "none";
    levelFifteen.style.display = "block";
    uiLevel.textContent = "Level 15";
    uiMessage.textContent = "Bermimpilah setinggi langit. Jika kau jatuh, engkau akan jatuh di antara bintang bintang";
  }
  else if (level === 16) {
    levelFifteen.style.display = "none";
    levelSixteen.style.display = "block";
    uiLevel.textContent = "Level 16";
    uiMessage.textContent = "Hidup itu seperti bersepeda. Kalau ingin menjaga keseimbangan, kamu harus bergerak maju";
  } 
  else if (level === 17) {
    levelSixteen.style.display = "none";
    levelSeventeen.style.display = "block";
    uiLevel.textContent = "Final Level";
    uiMessage.textContent = "Hidup itu tidak adil kawan, jadi biasakanlah :)";
  }
}

// Checking the value that cursor touch
const collisionCheck = (value) => {
  if (value === "maze-border") {
    bruh.play();
    alert("You hit the border!");
  }
  if (value === "finish") {
    applause.play();
    level += 1;
    levelCheck();
  }
  if (value === "end-game") {
    screamSound.play();
    spookyPicture.style.display = "block";
    document.body.style.background = "black";
  }
};

// Checking the position of cursor and what will happen based on the value
window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});