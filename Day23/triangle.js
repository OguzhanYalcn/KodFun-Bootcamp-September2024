// Birden Yediye Kadar Olan Sayılar
for (let i = 1; i <= 7; i++){
    console.log("*".repeat(i));
}

console.log("------------------------------------------------------------------");

for (let i = 1; i <= 7; i++){
    let yazilacak = "";

    for (let j = 0; j < i; j++) // satırın genişliğini belirler
        yazilacak += "*";

    console.log(yazilacak);
}