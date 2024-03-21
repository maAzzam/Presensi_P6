let judul;
let nama;
let tombol;
let hello;

let jumlahBola = 5; // Jumlah bola yang akan ditampilkan
let jumlahPartikel = 50; // Jumlah partikel putih
let bola = []; // Array untuk menyimpan informasi tentang setiap bola
let partikel = []; // Array untuk menyimpan informasi tentang setiap partikel putih
let gerak = false; // Status bola (bergerak atau berhenti)

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(135, 206, 235); // Mengatur warna kanvas menjadi biru langit

  judul = createElement('h2', 'Simulasi Hukum Newton');
  judul.position(width / 2 - 100, 15); // Mengatur posisi judul ke tengah
  judul.style('font-size', '24px'); // Mengatur ukuran font judul
  nama = createElement('h2', 'Muhammad Azzam_122160080');
  nama.position(30, 50);
  nama.style('font-size', '18px'); // Mengatur ukuran font nama

  tombol = createButton('Jalankan'); // Membuat tombol untuk mengawali atau menghentikan gerakan bola
  tombol.position(30, 90);
  tombol.mousePressed(jalankanAtauPause); // Mengatur fungsi mousePressed untuk tombol
  tombol.style('font-size', '18px'); // Mengatur ukuran font tombol

  // Menginisialisasi setiap bola
  for (let i = 0; i < jumlahBola; i++) {
    bola[i] = {
      x: random(width), // Koordinat X bola secara acak
      y: random(height), // Koordinat Y bola secara acak
      kecepatanX: random(-2, 2), // Kecepatan awal bola secara horizontal
      kecepatanY: random(-2, 2), // Kecepatan awal bola secara vertikal
      percepatan: 0.1, // Percepatan bertambah setiap saat
      gayaGesekUdara: 0.01, // Percepatan gaya gesek udara
      gravitasi: 0.05, // Percepatan gravitasi (menarik bola ke bawah)
      warna: color(random(255), random(255), random(255)) // Warna bola secara acak
    };
  }

  // Menginisialisasi setiap partikel putih
  for (let i = 0; i < jumlahPartikel; i++) {
    partikel[i] = {
      x: random(width), // Koordinat X partikel secara acak
      y: random(height), // Koordinat Y partikel secara acak
      kecepatanX: random(-2, 2), // Kecepatan awal partikel secara horizontal
      kecepatanY: random(-2, 2), // Kecepatan awal partikel secara vertikal
    };
  }
}

function draw() {
  background(135, 206, 235); // Membersihkan area gambar kanvas dengan warna latar belakang

  // Menggambar setiap bola
  for (let i = 0; i < jumlahBola; i++) {
    let b = bola[i];
    fill(b.warna);
    ellipse(b.x, b.y, 30, 30); // Mengurangi ukuran bola menjadi 30px

    // Menggerakkan setiap bola jika status bola bergerak
    if (gerak) {
      // Menambahkan percepatan dan gaya gesek udara ke kecepatan bola secara horizontal
      b.kecepatanX += b.percepatan - b.kecepatanX * b.gayaGesekUdara;
      b.kecepatanY += b.gravitasi; // Menambahkan percepatan gravitasi ke kecepatan bola secara vertikal
      b.x += b.kecepatanX; // Menambahkan kecepatan ke posisi bola secara horizontal
      b.y += b.kecepatanY; // Menambahkan kecepatan ke posisi bola secara vertikal

      // Membuat bola bergerak secara looping horizontal
      if (b.x > width) {
        b.x = 0;
      }
      // Membuat bola bergerak secara looping vertikal
      if (b.y > height) {
        b.y = 0;
      }
    }
  }

  // Menggambar setiap partikel putih
  for (let i = 0; i < jumlahPartikel; i++) {
    let p = partikel[i];
    fill(255); // Warna putih untuk partikel
    ellipse(p.x, p.y, 5, 5); // Mengurangi ukuran partikel menjadi 5px

    // Menggerakkan setiap partikel
    if (gerak) {
      // Menambahkan percepatan ke kecepatan partikel secara horizontal
      p.kecepatanX += 0.01; // Contoh percepatan partikel
      p.x += p.kecepatanX; // Menambahkan kecepatan ke posisi partikel secara horizontal

      // Membuat partikel bergerak secara looping horizontal
      if (p.x > width) {
        p.x = 0;
      }
    }
  }
}

function jalankanAtauPause() {
  gerak = !gerak; // Memantulkan status gerak
}
