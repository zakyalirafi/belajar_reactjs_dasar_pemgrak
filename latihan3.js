const daftarSiswa = ["andi", "budi", "royan"];

//map akan melakukan perulangan dan mengubah setiap item

const sapaSemua = daftarSiswa.map ((nama) =>{
    return `selamat pagi, ${nama}!`;
});

console.log (sapaSemua);