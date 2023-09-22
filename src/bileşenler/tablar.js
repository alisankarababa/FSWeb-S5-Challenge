const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

    const divTopics = document.createElement("div");
    divTopics.classList.add("topics");
        konu.forEach(konuItem => {
            const div = document.createElement("div");
            div.classList.add("tab");
            div.textContent = konuItem;
            divTopics.append(div);            
        });
    
    return divTopics;
}

import axios from "axios";

let subjects = null;

async function getTabs()
{
    await axios({
        method: "get",
        url: "http://localhost:5001/api/konular"
    })
    .then(function(response)
    {
        subjects = response.data.konular;
    })
    .catch(function (error) {
        console.log("getTabs:", error);
    })
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

   

    async function placeTabs()
    {
        await getTabs();
        if (subjects)
        {
            const div = Tablar(subjects);
            document.querySelector(secici).append(div);
        }
    }

    placeTabs();
}

export { Tablar, tabEkleyici }
