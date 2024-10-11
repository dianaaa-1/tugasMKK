{
    let sum = 0;
    
    for (let i = batasAwal; i <= batasAkhir; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    console.log("Jumlah deret bilangan ganjil:", sum);
}