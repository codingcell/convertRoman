const input = document.getElementById('number');
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const result = document.getElementById('result');

function convertToRoman(number) {
    var firstChr,secondChr,thirdChr,fourthChr,fifthChr;
    var myNum = '';
    myNum += number;
    var romanNumber = [];
    if (myNum.length == 0) {
        romanNumber = [];
    } else if (myNum.length > 0) {
        switch (myNum[myNum.length - 1]) {
            case "1":
                firstChr = "I";
                break;
            case "2":
                firstChr = "II";
                break;
            case "3":
                firstChr = "III";
                break;
            case "4":
                firstChr = "IV";
                break;
            case "5":
                firstChr = "V";
                break;
            case "6":
                firstChr = "VI";
                break;
            case "7":
                firstChr = "VII";
                break;
            case "8":
                firstChr = "VIII";
                break;
            case "9":
                firstChr = "IX";
                break;

        }
        switch (myNum[myNum.length - 2]) {

            case "1":
                secondChr = "X";
                break;
            case "2":
                secondChr = "XX";
                break;
            case "3":
                secondChr = "XXX";
                break;
            case "4":
                secondChr = "XL";
                break;
            case "5":
                secondChr = "L";
                break;
            case "6":
                secondChr = "LX";
                break;
            case "7":
                secondChr = "LXX";
                break;
            case "8":
                secondChr = "LXXX";
                break;
            case "9":
                secondChr = "XC";
                break;
        }
        switch (myNum[myNum.length - 3]) {

            case "1":
                thirdChr = "C";
                break;
            case "2":
                thirdChr = "CC";
                break;
            case "3":
                thirdChr = "CCC";
                break;
            case "4":
                thirdChr = "CD";
                break;
            case "5":
                thirdChr = "D";
                break;
            case "6":
                thirdChr = "DC";
                break;
            case "7":
                thirdChr = "DCC";
                break;
            case "8":
                thirdChr = "DCCC";
                break;
            case "9":
                thirdChr = "CM";
                break;
        }
        switch (myNum[myNum.length - 4]) {
            case "1":
                fourthChr = "M";
                break;
            case "2":
                fourthChr = "MM";
                break;
            case "3":
                fourthChr = "MMM";
                break;
            case "4":
                fourthChr = "MMMM";
                break;
            case "5":
                fourthChr = "V̅";
                break;
            case "6":
                fourthChr = "V̅I̅";
                break;
            case "7":
                fourthChr = "V̅I̅I̅";
                break;
            case "8":
                fourthChr = "V̅I̅I̅I̅";
                break;
            case "9":
                fourthChr = "I̅X̅";
                break;
        }
        switch (myNum[myNum.length - 5]) {
            case "1":
                fifthChr = "X̅";
                break;
        }
    }
    romanNumber.push(fifthChr, fourthChr, thirdChr, secondChr, firstChr);
    console.log(romanNumber.join(""));
    return romanNumber.join("");
}

input.addEventListener('keyup',() =>{
    var val = input.value;
    result.innerText = convertToRoman(val);
})
