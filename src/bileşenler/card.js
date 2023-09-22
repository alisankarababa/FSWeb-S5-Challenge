const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

    function func(tag)
    {
        return document.createElement(tag);
    }
    const {anabaslik, yazarFoto, yazarAdi} = makale;
    const divCard = document.createElement("div");
    divCard.classList.add("card");

        const divHeadLine = func("div");
        divHeadLine.classList.add("headline");
        divHeadLine.textContent = anabaslik;
        divCard.append(divHeadLine);

        const divAuthor = func("div");
        divAuthor.classList.add("author");
        divCard.append(divAuthor);

            const divImg = func("div");
            divImg.classList.add("img-container");
            divAuthor.append(divImg);

                const img = func("img");
                img.setAttribute("src", yazarFoto);
                divImg.append(img);

            const spanYazarAdi = func("span");
            spanYazarAdi.textContent = `${ yazarAdi } tarafından`
            divAuthor.append(spanYazarAdi);


    return divCard;
}

import axios from "axios";

let articles = null;

async function getArticles() 
{
    await axios({
        method: "get",
        url: "http://localhost:5001/api/makaleler"
    })
    .then(function (response) {
        
        articles = response.data.makaleler;
  
    })
    .catch(function (error) {
        console.log(error);
    })
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
    
    async function placeCards()
    {
        await getArticles();
        if (articles)
        {
            articles = Object.values(articles).flat(Infinity);
            const articlesContainer = document.querySelector(secici);
            articles.forEach(function (article) {
                const div = Card(article);
                articlesContainer.append(div);
            })
        }
    }

    placeCards();
}

export { Card, cardEkleyici }
