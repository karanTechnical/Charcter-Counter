const charVal  = document.getElementById('textarea');
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("Reming-counter");

let char = 0;

const updateCounter= ()=>{
userChar = charVal.value.length;

totalCount.innerText = userChar;
remainingCount.innerText = 150 - userChar;

}

charVal.addEventListener('keyup', ()=> updateCounter());

// copy text areaf

const copyText =()=>{
    charVal.select();
    charVal.setSelectionRange(0, 9999); // mobile version for
    navigator.clipboard.writeText(charVal.value);
}

