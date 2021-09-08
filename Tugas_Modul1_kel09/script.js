const grade = () =>{ // Arrow function
    var a = document.getElementById("nilaiangka").value; //Membuat variabel unutk inputan
    var b = a;
    var c = a;
    var d = a;
    var e = a;
    var f = a;
     // Mengembalikan nilai
     hasil = b >=85 ? "Kalian dapet nilai A, Selamat yaa!": // Pengkondisian dalam bentuk ternary operator
            c >=70 ? "Waahh dapet nilai B, semangat!":
            d >=60 ? "ehem nilai C, tingkatkan lagi ya!":
            e >=50 ? "nilai kalian D!, maaf kalian gagal!":
            f <50 ? "E, kalian niat sekolah ga sih?":
        console.log(hasil); // Menampilkan hasil pada console
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f);
        alert(hasil);
}





