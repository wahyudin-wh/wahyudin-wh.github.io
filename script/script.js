const angka = document.querySelector('p');
const button = document.querySelector('button');
const buttonreset = document.getElementById('ulang');
let tambah = 0;

button.addEventListener('click', function() {
    angka.innerHTML = tambah += 1;
    return tambah;
});
reset.addEventListener('click', function() {
    angka.innerHTML = tambah = 0;
    return angka;
});