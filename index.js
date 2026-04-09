const prompt = require("prompt-sync")();

console.log("=== APLIKASI KASIR SEDERHANA ===")

//Data menu
const menu = [
    { nama: "Nasi goreng", harga: 15000 },
    { nama: "Mie ayam", harga: 12000 },
    { nama: "Es teh", harga: 5000 },
    { nama: "Air mineral", harga: 3000 }
];

let total = 0;

while (true) {
    console.log("\n=== MENU ===")

    // tampilkan menu
    for (let i = 0; i < menu.length; i++) {
        console.log(`${i + 1}. ${menu[i].nama} - Rp${menu[i].harga}`);
    }

    console.log("0. Selesai")
    
    const pilih = prompt("Pilih menu: ");

    if (pilih === "0") {
        console.log("Sampai jumpa!!")
        break;
    }

    const index = Number(pilih) -1;

    if (index < 0 || index >= menu.length) {
        console.log("Menu tidak valid!")
        continue;
    }

    const jumlah = Number(prompt("Jumlah beli: "))

    if (isNaN(jumlah)  ||  jumlah <= 0) {
        console.log("Jumlah tidak valid!")
        continue;
    }

    const subtotal = menu[index].harga * jumlah;
    total += subtotal

    console.log(`Ditambahkan: ${menu[index].nama} x${jumlah}`)
    console.log(`Subtotal: Rp${subtotal}`
    )
}

// output total
console.log("\n=== STRUK ===")
console.log("Total bayar: Rp" + total)
console.log("Terimakasih!")