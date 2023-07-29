const currtag_one = document.getElementById("currency-one");
const currtag_two = document.getElementById("currency-two");
const amttag_one = document.getElementById("amt-one");
const amttag_two = document.getElementById("amt-two");

const ratetag = document.getElementById("rate");
const swapbtn = document.getElementById("swap");

function calculate()
{
    const curr_one = currtag_one.value;
    const curr_two = currtag_two.value;

    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const rate = data.rates[curr_two] / data.rates[curr_one];
        ratetag.innerText = `1 ${curr_one} = ${rate.toFixed(3)} ${curr_two}`;

        amttag_two.value = (amttag_one.value * (rate)).toFixed(2);
    });
}

//Event Listeners
currtag_one.addEventListener('change', calculate);
amttag_one.addEventListener('input', calculate);
currtag_two.addEventListener('change', calculate);
amttag_two.addEventListener('input', calculate);

swapbtn.addEventListener('click', ()=>{
    const temp = currtag_one.value;
    currtag_one.value = currtag_two.value;
    currtag_two.value = temp;
    calculate();
});

calculate();


// https://www.exchangerate-api.com/docs/free