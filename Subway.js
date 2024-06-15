let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let stations1 = ['00','01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,'00-1','00-2','00-3'];

let stations1Sinchang = [42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,'44-1','57-1'];

let stations2 = ['01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,'11-1','11-2','11-3','11-4','34-1','34-2','34-3','34-4'];

let stations3 = ['09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

let stations4 = ['05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];

let stations5 = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];

let stations5Macheon = [49,50,51,52,53,54,55];

let stations6 = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

let stations7 = ['09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61];

let stations8 = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

let stations9 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];

let stationsSuin = ['09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72];

let stationsSeoHae = ['07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];

let stationsGyeongGang = ['09',10,11,12,13,14,15,16,17,18,19,20];

let stationsAirLine = ['01','02','03','04','05','06','07','08','09',10,11];

let stationsUi = [10,11,12,13,14,15,16,17,18,19,20,21,22];

let stationsGyeongChun = [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

let stationsGimpoGold = ['00','01','02','03','04','05','06','07','08','09'];

let stationsJungang = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];

let stationsMunsanHyochang = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];

let stationsIncheon1 = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];

let stationsIncheon2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

let stationsUijeongbu = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

let stationsGTXA = ['08','09',11];

let stationsEverline = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

let stationsSillim = ['01','02','03','04','05','06','07','08','09',10,11];

let stationsSinbundang = ['04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19];

let stationsWolmi = ['01','02','03','04'];

let stationspre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'P1', 'P5', 'K1', 'K2', 'K3', 'K4', 'S', 'A', 'U', 'S1', 'G', 'I1', 'I2', 'X1', 'Y1', 'S4', 'D', 'W', 'P3']

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function ifSame () {
  let stprefix = stationspre[getRandomNumber(0, stationspre.length-1)];
  if (stprefix == '1') {
    return stprefix + stations1[getRandomNumber(0,stations1.length-1)]
  } else if (stprefix == '2') {
    return stprefix + stations2[getRandomNumber(0,stations2.length-1)]
  } else if (stprefix == '3') {
    return stprefix + stations3[getRandomNumber(0,stations3.length-1)]
  } else if (stprefix == '4') {
    return stprefix + stations4[getRandomNumber(0,stations4.length-1)]
  } else if (stprefix == '5') {
    return stprefix + stations5[getRandomNumber(0,stations5.length-1)]
  } else if (stprefix == '6') {
    return stprefix + stations6[getRandomNumber(0,stations6.length-1)]
  } else if (stprefix == '7') {
    return stprefix + stations7[getRandomNumber(0,stations7.length-1)]
  } else if (stprefix == '8') {
    return stprefix + stations8[getRandomNumber(0,stations8.length-1)]
  } else if (stprefix == '9') {
    return stprefix + stations9[getRandomNumber(0,stations9.length-1)]
  } else if (stprefix == 'P1') {
    return stprefix + stations1Sinchang[getRandomNumber(0,stations1Sinchang.length-1)]
  } else if (stprefix == 'P5') {
    return stprefix + stations5Macheon[getRandomNumber(0,stations5Macheon.length-1)]
  } else if (stprefix == 'K1') {
    return stprefix + stationsJungang[getRandomNumber(0,stationsJungang.length-1)]
  } else if (stprefix == 'K2') {
    return stprefix + stationsSuin[getRandomNumber(0,stationsSuin.length-1)]
  } else if (stprefix == 'K3') {
    return stprefix + stationsMunsanHyochang[getRandomNumber(0,stationsMunsanHyochang.length-1)]
  } else if (stprefix == 'K4') {
    return stprefix + stationsGyeongGang[getRandomNumber(0,stationsGyeongGang.length-1)]
  } else if (stprefix == 'S') {
    return stprefix + stationsSeoHae[getRandomNumber(0,stationsSeoHae.length-1)]
  } else if (stprefix == 'A') {
    return stprefix + stationsAirLine[getRandomNumber(0,stationsAirLine.length-1)]
  } else if (stprefix == 'U') {
    return stprefix + stationsUijeongbu[getRandomNumber(0,stationsUijeongbu.length-1)]
  } else if (stprefix == 'S1') {
    return stprefix + stationsUi[getRandomNumber(0,stationsUi.length-1)]
  } else if (stprefix == 'G') {
    return stprefix + stationsGimpoGold[getRandomNumber(0,stationsGimpoGold.length-1)]
  } else if (stprefix == 'I1') {
    return stprefix + stationsIncheon1[getRandomNumber(0,stationsIncheon1.length-1)]
  } else if (stprefix == 'I2') {
    return stprefix + stationsIncheon2[getRandomNumber(0,stationsIncheon2.length-1)]
  } else if (stprefix == 'X1') {
    return stprefix + stationsGTXA[getRandomNumber(0,stationsGTXA.length-1)]
  } else if (stprefix == 'Y1') {
    return stprefix + stationsEverline[getRandomNumber(0,stationsEverline.length-1)]
  } else if (stprefix == 'S4') {
    return stprefix + stationsSillim[getRandomNumber(0,stationsSillim.length-1)]
  } else if (stprefix == 'D') {
    return stprefix + stationsSinbundang[getRandomNumber(0,stationsSinbundang.length-1)]
  } else if (stprefix == 'W') {
    return stprefix + stationsWolmi[getRandomNumber(0,stationsWolmi.length-1)]
  } else if (stprefix == 'P3') {
    return stprefix + stationsGyeongChun[getRandomNumber(0,stationsGyeongChun.length-1)]
  }
}

console.log(stations1Sinchang[76])

btnRandom.addEventListener('click', () => {
    result.innerHTML = (ifSame() + ' 또는 ' + ifSame())
});