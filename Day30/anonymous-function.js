// İSMİ OLAN FONKSİYON
function gulucukle(str) {
    return str + " :)";
  }

//                    CALLBACK FUNC
function yazdir(metin, donusturucu){
    metin = donusturucu(metin);
    console.log(metin);
}

yazdir("sakin olun", gulucukle);

// ANONİM FONKSİYONU DEĞİŞKENDE SAKLAYARAK
const buyutucu = function (x) {
    return x.toLocaleUpperCase("tr");
};

yazdir("döner", buyutucu);

// ANONİM FONKSİYONLA
yazdir("visa", function (str) {
    return str.split("").join(" ");
});

// ANONİM ARROW FUNCTION İLE
yazdir("Muvaffakiyetsizleştiricileştiriveremeyebileceklerimizdenmişsinizcesine", x => x.length);

// 
function threeTimes(str){
    return str.repeat(3);
}

yazdir("7", threeTimes);

yazdir("Oley! ", x => x.repeat(3));

// Sonraki derste callback fonksiyonlara sık sık rastlayacağız
// Example:

const unluler = ["Travis Scott", "Drake", "Jay Lo", "21 Savage"];

const dizi2 = unluler.map(x => x.toUpperCase());

console.log(unluler);
console.log(dizi2);