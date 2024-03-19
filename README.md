# Jawaban Soal Praktikum 2
Fungsi Tombol_2 memiliki 2 parameter yaitu isiPesan dan namaTombol, pada bagian <b>page.tsx </b> pemanggilan <i>Tombol_2</i> diikuti dengan isi untuk kedua parameter, yaitu "Ini Pesanku" untuk parameter isiPesan dan nama tombol "Pesan" untuk parameter namaTombol

# Jawaban Soal Praktikum 4
 1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?

 - maka akan terjadi error karena artikel yang ada hanya sebanyak 5 dan jika diklik lagi maka index akan melebihi jumlah banyak dari artikel

 2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.

        function handleClick() {
            setIndex(index + 1);
            if ((index + 1)== sculptureList.length){
                setIndex(index);
            }
        }
    dengan menambahkan if dalam fungsi maka jika jumlah index+1 = panjang artikel, maka setIndex akan tetap sehingga tidak akan bertambah dan tidak terjadi error karena melebihi panjang artikel

3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.

        function downClick() {
                setIndex(index - 1);
                if ((index) == 0){
                    setIndex(index);
                }
            }
    menambahkan fungsi down click untuk tombol artikel sebelumnya dimana jika index = 0/ poisi di halaman pertama maka setIndex akan tetap sehingga nilai index tidak minus, kurang dari jumlah artikel, dan tidak error jika diklik artikel sebelumnya pada halaman pertama
![round](assets\01.png)