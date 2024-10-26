// bir nesne
const kisi = {ad: "Ali", yas: 33};

// json hali
const jsonKisi = JSON.stringify(kisi);
console.log("JSON Hali: " + jsonKisi); // {"ad":"Ali","yas":33}

// tekrardan json'dan nesneye dönüştürelim ve bir property'sine erişelim
let insan = JSON.parse(jsonKisi);
console.log(`${insan.ad} adlı insan ${insan.yas} yaşındadır.`);