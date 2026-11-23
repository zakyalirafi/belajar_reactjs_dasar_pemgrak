const produk = [
    {
        nama: "Sepatu",
        harga: 150000
    },
    {
        nama: "Buku",
        harga: 35000
    },
    {
        nama: "Tas",
        harga: 120000
    }
];

const promosi = produk.map((item) => {
    let keterangan = "";

    // 3. Mengecek harga produk
    if (item.harga > 100000) {
        keterangan = " - Barang mewah";
    }

    return `Dapatkan ${item.nama} hanya dengan harga Rp${item.harga}${keterangan}!`;
});

promosi.forEach((kalimat) => {
    console.log(kalimat);
});