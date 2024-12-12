let products = document.querySelector("#products");

let data = [
  {
    img: "https://cdn.monetnik.ru/storage/market-lot/09/12/370809/1319920_mainViewLot_2x.jpg",
    title: "Uzbekistan Sum",
    projected: "Projected since 1997",
    price: "200 uzs ",
  },
  {
    img: "https://cdn.monetnik.ru/storage/market-lot/73/64/413573/1480524_mainViewLot_2x.jpg",
    title: "Uzbekistan Sum",
    projected: "Projected since 1999",
    price: "500 uzs ",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=ce317a198300751f7b1dcfa530c4a2a7_l-9181527-images-thumbs&n=13",
    title: "Uzbekistan Sum",
    projected: "Projected since 2001",
    price: "1000 uzs ",
  },
  {
    img: "https://avatars.mds.yandex.net/get-mpic/5146425/2a0000018eae6bb0c66102a2ae08648b5eec/orig",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021 ",
    price: "2000 uzs",
  },
  {
    img: "https://cdn.monetnik.ru/storage/market-lot/54/38/429854/1528658_mainViewLot_2x.jpg",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021",
    price: "5000 uzs",
  },
  {
    img: "https://static.insales-cdn.com/images/products/1/5829/715003589/B05UZ13.webp",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021",
    price: "10 000 uzs",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=b0b038eeb514d07d38738ca801948373_l-5661278-images-thumbs&n=13",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021",
    price: "20 000 uzs",
  },
  {
    img: "https://avatars.mds.yandex.net/get-mpic/4984138/img_id3041733184637764037.jpeg/orig",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021",
    price: "50 000 uzs",
  },
  {
    img: "https://cdn.monetnik.ru/storage/market-lot/56/45/388156/1389325_mainViewLot_2x.jpg",
    title: "Uzbekistan Sum",
    projected: "Projected since 2021",
    price: "100 000 uzs",
  },
  {
    img: "https://static.auction.ru/offer_images/rd48/2022/07/27/02/big/3/3y24gT4oX1l/novinka_uzbekistan_200000_sum_2022_god_press_serija_bz_unc.jpg",
    title: "Uzbekistan Sum",
    projected: "Projected since 2022",
    price: "200 000 uzs",
  },
];

for (const element of data) {
  products.innerHTML += `        <article class="border rounded-lg bg-gray-300 overflow-hidden">
          <img src="${element.img}" alt="" class="w-full h-56 object-cover" />
          <div class="p-2">
            <h1 class="text-lg font-medium text-gray-900">${element.title}</h1>
            <h2 class="  font-bold text-xl my-1">${element.price}</h2>
                        <h3 class=" font-bold text-xl my-1">${element.projected}</h3>
            <button class="bg-black text-white p-1 w-full rounded mt-2 active:scale-95 duration-300" >Show Uzbekistan</button>
          </div>
        </article>
`;
}
