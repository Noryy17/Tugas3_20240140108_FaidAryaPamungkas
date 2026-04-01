
function tampil() {
  let nama = document.getElementById("nama").value;
  let nim = document.getElementById("nim").value;
  let angkatan = document.getElementById("angkatan").value;
  let tanggalInput = document.getElementById("tanggalInput").value;
  let alamat = document.getElementById("alamat").value;
  let peminatan = document.querySelector('input[name="peminatan"]:checked');
  //Logika Pengecekan (If - Else)
  if (nama === "" || nim === "" || angkatan === "" || tanggalInput === "" || alamat === "" || peminatan === null) {
    // Jika ada salah satu saja yang kosong, munculkan peringatan
    alert("Semua data wajib diisi, jangan sampai ada yang terlewat.");
  } else {
    alert("Mantap! Data pendaftaran atas nama " + nama + " berhasil disubmit.");
  }
}
