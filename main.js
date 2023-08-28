const body = document.querySelector("body");
body.style.backgroundColor = "#D9D9D9"
const button = document.querySelector("button");
const firstNum = [14883210, 18976543, 16777215, 16711680, 13369344, 16738754, 65280, 51914, 43519, 33555, 15291770, 16776960, 65535, 16711935, 16764033, 11593169, 10025880, 21045, 35109, 2441671, 16766720, 32768, 16744272, 16416882];
const pNames = {
  nameOne: document.querySelector(".heyOne"),
  nameTwo: document.querySelector(".heyTwo"),
  nameThree: document.querySelector(".heyThree"),
  nameFour: document.querySelector(".heyFour"),
  nameFive: document.querySelector(".heyFive"),
  nameSix: document.querySelector(".heySix"),
  nameSeven: document.querySelector(".heySeven"),
  nameEight: document.querySelector(".heyEight"),
  nameNine: document.querySelector(".heyNine"),
  nameTen: document.querySelector(".heyTen"),
  nameEleven: document.querySelector(".heyEleven"),
  nameTwelve: document.querySelector(".heyTwelve"),
  nameThirteen: document.querySelector(".heyThirteen"),
  nameFourteen: document.querySelector(".heyFourteen"),
  nameFifteen: document.querySelector(".heyFifteen"),
  nameSixteen: document.querySelector(".heySixteen"),
  nameSeventeen: document.querySelector(".heySeventeen"),
  nameEighteen: document.querySelector(".heyEighteen"),
  nameNineteen: document.querySelector(".heyNineteen"),
  nameTwenty: document.querySelector(".heyTwenty"),
}
class ColorPallete {
  constructor(color) {
    this.color = color;
  }
  generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16744272).toString(16);
  }
}
const detectColorOne = new ColorPallete(firstNum[0]);
const detectColorTwo = new ColorPallete(firstNum[1]);
const detectColorThree = new ColorPallete(firstNum[2]);
const detectColorFour = new ColorPallete(firstNum[3]);
const detectColorFive = new ColorPallete(firstNum[4]);
const detectColorSix = new ColorPallete(firstNum[5]);
const detectColorSeven = new ColorPallete(firstNum[6]);
const detectColorEight = new ColorPallete(firstNum[7]);
const detectColorNine = new ColorPallete(firstNum[8]);
const detectColorTen = new ColorPallete(firstNum[9]);
const detectColorEleven = new ColorPallete(firstNum[10]);
const detectColorTwelve = new ColorPallete(firstNum[11]);
const detectColorThirteen = new ColorPallete(firstNum[12]);
const detectColorFourteen = new ColorPallete(firstNum[13]);
const detectColorFifteen = new ColorPallete(firstNum[14]);
const detectColorSixteen = new ColorPallete(firstNum[15]);
const detectColorSeventeen = new ColorPallete(firstNum[16]);
const detectColorEighteen = new ColorPallete(firstNum[17]);
const detectColorNineteen = new ColorPallete(firstNum[18]);
const detectColorTwenty = new ColorPallete(firstNum[19]);
(function changeBg() {
  const randomColorOne = detectColorOne.generateRandomColor();
  const randomColorTwo = detectColorTwo.generateRandomColor();
  const randomColorThree = detectColorThree.generateRandomColor();
  const randomColorFour = detectColorFour.generateRandomColor();
  const randomColorFive = detectColorFive.generateRandomColor();
  const randomColorSix = detectColorSix.generateRandomColor();
  const randomColorSeven = detectColorSeven.generateRandomColor();
  const randomColorEight = detectColorEight.generateRandomColor();
  const randomColorNine = detectColorNine.generateRandomColor();
  const randomColorTen = detectColorTen.generateRandomColor();
  const randomColorEleven = detectColorEleven.generateRandomColor();
  const randomColorTwelve = detectColorTwelve.generateRandomColor();
  const randomColorThirteen = detectColorThirteen.generateRandomColor();
  const randomColorFourteen = detectColorFourteen.generateRandomColor();
  const randomColorFifteen = detectColorFifteen.generateRandomColor();
  const randomColorSixteen = detectColorSixteen.generateRandomColor();
  const randomColorSeventeen = detectColorSeventeen.generateRandomColor();
  const randomColorEighteen = detectColorEighteen.generateRandomColor();
  const randomColorNineteen = detectColorNineteen.generateRandomColor();
  const randomColorTwenty = detectColorTwenty.generateRandomColor();
  document.querySelector(".textOne").innerText = randomColorOne;
  document.querySelector(".textTwo").innerText = randomColorTwo;
  document.querySelector(".textThree").innerText = randomColorThree;
  document.querySelector(".textFour").innerText = randomColorFour;
  document.querySelector(".textFive").innerText = randomColorFive;
  document.querySelector(".textSix").innerText = randomColorSix;
  document.querySelector(".textSeven").innerText = randomColorSeven;
  document.querySelector(".textEight").innerText = randomColorEight;
  document.querySelector(".textNine").innerText = randomColorNine;
  document.querySelector(".textTen").innerText = randomColorTen;
  document.querySelector(".textEleven").innerText = randomColorEleven;
  document.querySelector(".textTwelve").innerText = randomColorTwelve;
  document.querySelector(".textThirteen").innerText = randomColorThirteen;
  document.querySelector(".textFourteen").innerText = randomColorFourteen;
  document.querySelector(".textFifteen").innerText = randomColorFifteen;
  document.querySelector(".textSixteen").innerText = randomColorSixteen;
  document.querySelector(".textSeventeen").innerText = randomColorSeventeen;
  document.querySelector(".textEighteen").innerText = randomColorEighteen;
  document.querySelector(".textNineteen").innerText = randomColorNineteen;
  document.querySelector(".textTwenty").innerText = randomColorTwenty;
  pNames.nameOne.style.backgroundColor = randomColorOne;
  pNames.nameTwo.style.backgroundColor = randomColorTwo;
  pNames.nameThree.style.backgroundColor = randomColorThree;
  pNames.nameFour.style.backgroundColor = randomColorFour;
  pNames.nameFive.style.backgroundColor = randomColorFive;
  pNames.nameSix.style.backgroundColor = randomColorSix;
  pNames.nameSeven.style.backgroundColor = randomColorSeven;
  pNames.nameEight.style.backgroundColor = randomColorEight;
  pNames.nameNine.style.backgroundColor = randomColorNine;
  pNames.nameTen.style.backgroundColor = randomColorTen;
  pNames.nameEleven.style.backgroundColor = randomColorEleven;
  pNames.nameTwelve.style.backgroundColor = randomColorTwelve;
  pNames.nameThirteen.style.backgroundColor = randomColorThirteen;
  pNames.nameFourteen.style.backgroundColor = randomColorFourteen;
  pNames.nameFifteen.style.backgroundColor = randomColorFifteen;
  pNames.nameSixteen.style.backgroundColor = randomColorSixteen;
  pNames.nameSeventeen.style.backgroundColor = randomColorSeventeen;
  pNames.nameEighteen.style.backgroundColor = randomColorEighteen;
  pNames.nameNineteen.style.backgroundColor = randomColorNineteen;
  pNames.nameTwenty.style.backgroundColor = randomColorTwenty;
  button.innerHTML = 'Regenerate <i class="fas fa-sync-alt fa-spin"></i>';
}());
function pageReload() {
  window.location.reload()
}
function helpReload() {
  pageReload();
}
