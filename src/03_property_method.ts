class Manusia03 {
    nama: string = '';

    usia: number = 0;

    jenisKelamin: string = '';

    hobi = (namaHobi: string) => {
        console.log(`${this.nama} memiliki hobi ${namaHobi}`);
    }
}

const Contoh1 = new Manusia03();
Contoh1.nama = 'Agil';
Contoh1.usia = 20;
Contoh1.jenisKelamin = 'Laki-laki';
console.info(Contoh1);

Contoh1.hobi('Bermain Api');
