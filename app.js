const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkDob = document.querySelector("#check-dob");
const outputBox = document.querySelector("#output-box");



function compareValues(sum,luckyNumber){
    if(sum % luckyNumber===0){
        outputBox.innerText = "Your birthday is lucky";
    }else{
        outputBox.innerText = "Your birthday is not lucky";
    }
}

function checkingLuckyDob(){
    const dob = dateOfBirth.value;
    const sum = addingDigits(dob);
    if(sum&&dob){
        compareValues(sum,luckyNumber.value)
    }else{
        outputBox.innerText = " Enter both the values!!"
    }
}


function addingDigits(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkDob.addEventListener("click",checkingLuckyDob)