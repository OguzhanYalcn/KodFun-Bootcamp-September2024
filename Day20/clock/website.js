function saatiGoster() {
    const zaman = new Date();
    const divSaat = document.getElementById("clock");
    divSaat.textContent = zaman.toLocaleTimeString("tr");
}

saatiGoster();
// her 1000ms'de bir bu metodu çalıştır.
setInterval(saatiGoster, 1000); // çağırmıyoruz, çağırmasını söylüyoruz
// parametre olarak fonksiyon alıyor, milisaniye türünden çalıştırma aralığı