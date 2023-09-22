const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

    const divHeader = document.createElement("div");
    divHeader.classList.add("header");
        
        const spanDate = document.createElement("span");
        spanDate.classList.add("date");
        spanDate.textContent = tarih;
        divHeader.append(spanDate);

        const h1 = document.createElement("h1");
        h1.textContent = baslik;
        divHeader.append(h1);

        const spanText = document.createElement("span");
        spanText.classList.add("temp");
        spanText.textContent = yazi;
        divHeader.append(spanText);

    return divHeader;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
    const divHeader = Header("Title", "22/09/2023","Expedita totam maxime neque, rem fugit assumenda laboriosam! Officia corporis dolor corrupti impedit alias?");

    document.querySelector(secici).append(divHeader);
}


export { Header, headerEkleyici }
