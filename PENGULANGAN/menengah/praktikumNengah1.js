function countOddNumbersInRange(batasAwal, batasAkhir) {
    let count = 0;
    
    for (let i = batasAwal; i <= batasAkhir; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }

    console.log("Banyaknya bilangan ganjil:", count);
}
