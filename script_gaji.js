function hitungGaji() {
    // Ambil input dari user
    let inputGaji = document.getElementById('gajiPokok').value;
    let inputLembur = document.getElementById('jamLembur').value;

    // Validasi agar tidak kosong
    if (inputGaji === "" || inputLembur === "") {
        alert("Silakan masukkan Gaji Pokok dan Jam Lembur terlebih dahulu!");
        return;
    }

    let gajiPokok = parseFloat(inputGaji);
    let jamLembur = parseFloat(inputLembur);

    // 1. Hitung Gaji Lembur (Rp 20.000 per jam)
    let totalLembur = jamLembur * 20000;

    // 2. Hitung Gaji Kotor
    let gajiKotor = gajiPokok + totalLembur;

    // 3. Hitung Pajak
    let persentasePajak = 0;
    if (gajiKotor < 5000000) {
        persentasePajak = 0.05;
    } else if (gajiKotor >= 5000000 && gajiKotor <= 10000000) {
        persentasePajak = 0.10;
    } else {
        persentasePajak = 0.15;
    }

    let pajak = gajiKotor * persentasePajak;

    // 4. Hitung Gaji Bersih
    let gajiBersih = gajiKotor - pajak;

    // Tampilkan hasil ke halaman
    document.getElementById('outGajiPokok').innerText = formatRupiah(gajiPokok);
    document.getElementById('outGajiLembur').innerText = formatRupiah(totalLembur);
    document.getElementById('outGajiKotor').innerText = formatRupiah(gajiKotor);
    document.getElementById('outPajak').innerText = formatRupiah(pajak);
    document.getElementById('outGajiBersih').innerText = formatRupiah(gajiBersih);
}

function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}