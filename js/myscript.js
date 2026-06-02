// 1. Ürün Detay sayfasındaki "Sepete Ekle" butonuna basınca çalışacak fonksiyon
function sepeteEklendi() {
    // Ekrana basit bir uyarı kutusu (popup) çıkartır
    alert("Harika seçim! Ürün başarıyla sepetinize eklendi.");
}

// 2. İletişim sayfasındaki formu kontrol eden fonksiyon
function formKontrol() {
    // HTML'deki input kutularının içindeki yazıları (değerleri) alır ve değişkenlere aktarır
    let isim = document.getElementById("isim").value;
    let eposta = document.getElementById("eposta").value;
    let mesaj = document.getElementById("mesaj").value;

    // Eğer isim, eposta veya mesaj kutularından BİRİ bile boşsa (== "")
    if (isim == "" || eposta == "" || mesaj == "") {
        // Ekrana hata mesajı ver
        alert("Lütfen tüm alanları eksiksiz doldurunuz!");
    } else {
        // Hepsi doluysa teşekkür mesajı ver ve kişinin adını kullan
        alert("Mesajınız bize ulaştı, teşekkürler " + isim + "!");
    }
}

// 3. Sepet sayfasında "Alışverişi Tamamla" butonuna basınca çalışan Quiz/Oyun (Hocanın 8. Kriteri)
function satinAl() {
    // prompt komutu kullanıcıya soru sorar ve girilen cevabı "cevap" adlı değişkene kaydeder
    let cevap = prompt("Siparişi tamamlamadan önce ufak bir soru! İndirim kazanmak ister misin?\nSoru: 5 x 5 + 10 işleminin sonucu kaçtır?");

    // Kullanıcının girdiği cevap doğruysa (35 ise)
    if (cevap == "35") {
        alert("Tebrikler! Doğru bildin. 'KILIF20' kodunu kullanarak %20 indirim kazandın. Sipariş sayfasına yönlendiriliyorsunuz...");
    } 
    // Kullanıcı hiçbir şey yazmadan "İptal"e basarsa veya boş bırakırsa
    else if (cevap === null || cevap === "") {
        alert("Siparişin standart fiyattan onaylanıyor...");
    } 
    // Kullanıcı yanlış bir sayı girerse
    else {
        alert("Maalesef yanlış cevap. Siparişin standart fiyattan onaylanıyor...");
    }
}