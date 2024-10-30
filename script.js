// Inisialisasi elemen elemen yang mau di manipulasi
const boxNama = document.querySelector('.box-nama');
const boxNamabutton = document.querySelector('.box-nama button');
const boxCek = document.querySelector('.box-cek');
const boxUtama = document.querySelector('.box-gender');

// penyimpanan semenara pake localstorage
const nama = localStorage.getItem('nama')
const gender = localStorage.getItem('gender')

const FetchingData = async (nama) => {
    try {
        const response = await fetch(`https://api.genderize.io/?name=${nama}`); // btw bisa ganti API nya 
        const data = await response.json();
        
        if (data.gender) {
            localStorage.setItem('gender', data.gender)
            setTimeout(() => {
                if (data.gender === 'female') {
                    boxCek.innerHTML = `
                    <div class="kata-perempuan">
                    <h1>Kamu Perempuan!</h1>
                    <div class="typewriter">
                    <p id="typing-text"></p>
                    </div> 
                    `;
                    typeText(); 
                } else {
                    boxCek.innerHTML = `
                      <div class="kata-perempuan">
                            <h1>Kamu Laki-Laki</h1>
                            <div class="typewriter">
                                <p id="ketik"></p>
                            </div>
                    `;
                    KetikKataAcak(); 
                }
            }, 1000);
        } else {
            boxCek.innerHTML = '<p>Terdeteksi Transgender !! 🏳️‍🌈</p>'; // ini kalau emang data nya enggak ada atau ada masalah sama API nanti outputnya kaya gini wkwkw
        }

    } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data: ', error);
        boxCek.innerHTML = '<p>Terjadi kesalahan saat mengambil data....</p>';
    }
};


const MunculinAlert = () => {
    Swal.fire({
        title: 'Masukan Nama',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Kirim',
        showLoaderOnConfirm: true,
        preConfirm: (nama) => {
          if (nama === '') {
            Swal.showValidationMessage('Nama tidak boleh kosong');
          } else {

            localStorage.setItem('nama', nama);
            location.reload();
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
    });
};


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('nama')) {
        const nama = localStorage.getItem('nama');
        boxNama.style.display = 'none';
        FetchingData(nama);
        document.title = `${gender === 'female' ? `Ciee ${nama}` : `Hay ${nama}`}`
    } else {
        MunculinAlert();
        document.title = 'Masukan Nama Eyy';
        boxUtama.style.display = 'none';
    }
});


boxNamabutton.addEventListener('click', () => {
    MunculinAlert();
});

// kalimat lebay

let kalimat = [
    {
        kata : `Cara kamu tersenyum bikin aku sadar kalau semua hal indah yang pernah aku lihat gak ada apa-apanya dibanding senyum kamu <strong>${nama}</strong>❤️, Mau gak kita bikin hari-hari lebih indah bareng-bareng sama kamu <strong>${nama}?😌❤️</strong>`
    },
    {
        kata : `Cara kamu tersenyum bikin aku sadar kalau semua hal indah yang pernah aku lihat gak ada apa-apanya dibanding senyum kamu <strong>${nama}</strong>❤️, Mau gak kita bikin hari-hari lebih indah bareng-bareng sama kamu  <strong>${nama}?😌❤️</strong>`
    },
    {
        kata : `Oke, aku udah mikir ini lama banget, tapi aku harus bilang. Setiap kali kita ketemu, aku ngerasa dunia jadi beda—kayak lebih cerah, lebih hidup, dan semuanya lebih berarti. Kalau aku harus jujur, nggak ada yang bisa bikin aku senyaman ini selain kamu. Jadi, gimana kalau kamu kasih aku kesempatan buat jadi alasan di balik senyum kamu tiap hari? Mau gak kita mulai cerita ini bareng bersama mu <strong>${nama}? ❤️✨</strong>`
    },
    {
        kata : `Oke, aku udah mikir ini lama banget, tapi aku harus bilang. Setiap kali kita ketemu, aku ngerasa dunia jadi beda—kayak lebih cerah, lebih hidup, dan semuanya lebih berarti. Kalau aku harus jujur, nggak ada yang bisa bikin aku senyaman ini selain kamu. Jadi, gimana kalau kamu kasih aku kesempatan buat jadi alasan di balik senyum kamu tiap hari? Mau gak kita mulai cerita ini bareng bersama mu <strong>${nama}? ❤️✨</strong>`
    },
    {
        kata : `Jujur aja, aku udah nyoba segala cara buat ngerem perasaan ini, tapi tiap kali lihat kamu, rasanya kaya liat sunrise—bikin tenang tapi sekaligus bikin deg-degan. Aku gak tau masa depan bakal gimana, tapi aku tau pasti kalau aku pengen kamu yang bernama <strong>${nama}</strong> di sana, di samping aku. Jadi, mau gak kita mulai langkah pertama ini bareng-bareng?🌅❤️`
    },
    {
        kata : `Jujur aja, aku udah nyoba segala cara buat ngerem perasaan ini, tapi tiap kali lihat kamu, rasanya kaya liat sunrise—bikin tenang tapi sekaligus bikin deg-degan. Aku gak tau masa depan bakal gimana, tapi aku tau pasti kalau aku pengen kamu yang bernama <strong>${nama}</strong> di sana, di samping aku. Jadi, mau gak kita mulai langkah pertama ini bareng-bareng?🌅❤️`
    },
]

// kalimat membara!

let kalimatLaki = [ 
    {
        kata:`Hay ${nama} saya tahu kamu Laki-Laki karena aku melihat namamu sebagai seorang jantan yang sedang berjuang dalam kerasnya hidup ini dari mulai ketidak adilan, pembulian, rasa tidak di hargai dan lainnya itu pasti kamu pernah mengalaminya mungkin dalam waktu dekat kamu bisa memecahkan masalah itu semangat untuk bang ${nama} aku percaya kamu bisa!!🔥`
    },
    {
        kata : `kamu ${nama} ya? aku ferdi, sistem ku membaca kamu laki-laki jadi kita sama kamu laki saya juga laki, gini bro kalau lu ada rasa sama lawan jenis kamu tembak saja dia jangan menuggu dia menembakmu itu pecundang namanya, jika kamu takut bawalah teman atau sahabat buat menemani, dari pada kamu sakit karena dia bersama dengan yang lain itu lebih sakit, jadi ayo bisa, APA?? saya ? nembak cewe ? tidak saya(ferdi) itu hanya sistem yang dimana pelatih tidak ikut bermain...`
    }
]

const AcakKalimatDalamIndex = Math.floor(Math.random() * kalimatLaki.length);
const HasilAcakDalamIndex = kalimatLaki[AcakKalimatDalamIndex].kata;
let AcakIndex = 0;

const KetikKataAcak = () =>{
    const ElementKalimat = document.getElementById('ketik');
    if(AcakIndex < HasilAcakDalamIndex.length) {
        ElementKalimat.innerHTML = HasilAcakDalamIndex.slice(0, AcakIndex + 1);
        AcakIndex++;
        setTimeout(KetikKataAcak, 10);
    } 
}

const randomIndex = Math.floor(Math.random() * kalimat.length);
const textToType = kalimat[randomIndex].kata;
let index = 0;

function typeText() {
    const typingText = document.getElementById("typing-text");
    if (index < textToType.length) {
        typingText.innerHTML = textToType.slice(0, index + 1);
        index++;
        setTimeout(typeText, 10); 
    }
}