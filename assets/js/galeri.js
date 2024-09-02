let imageGallery = [
  // ================ KEGIATAN 2022 ======================
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan/workshop1.png",
    name: "Workshop 2022",
    title: "Kegiatan Workshop 2022",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan/workshop2.jpg",
    name: "Workshop 2022",
    title: "Kegiatan Workshop 2022",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan/workshop3.jpg",
    name: "Workshop 2022",
    title: "Kegiatan Workshop 2022",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan/ldko1.jpg",
    name: "LDKO 2022",
    title: "Kegiatan LDKO 2022",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan/ldko3.jpg",
    name: "LDKO 2022",
    title: "Kegiatan LDKO 2022",
  },
  {
    category: "filter-web",
    pict: "assets/img/kegiatan/webinar-online1.jpeg",
    name: "Webinar 2022",
    title: "Kegiatan Webinar 2022",
  },
  {
    category: "filter-web",
    pict: "assets/img/kegiatan/webinar-online2.jpeg",
    name: "Webinar 2022",
    title: "Kegiatan Webinar 2022",
  },
  {
    category: "filter-web",
    pict: "assets/img/kegiatan/webinar-online3.jpeg",
    name: "Webinar 2022",
    title: "Kegiatan Webinar 2022",
  },
  // ================ END KEGIATAN 2022 ======================
  // ================ KEGIATAN 2024 ======================
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-1.jpeg",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-2.jpeg",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-3.jpeg",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-4.jpeg",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-5.jpeg",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-6.JPG",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-7.JPG",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-8.JPG",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  {
    category: "filter-ldko",
    pict: "assets/img/kegiatan-2024/ldko-9.JPG",
    name: "LDKO 2024",
    title: "Kegiatan LDKO 2024",
  },
  // {
  //   category: "filter-ldko",
  //   pict: "assets/img/kegiatan-2024/ldko-11.jpeg",
  //   name: "LDKO 2024",
  //   title: "Kegiatan LDKO 2024",
  // },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-1.jpg",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-2.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-3.jpeg",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-4.jpeg",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-5.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-6.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-7.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-8.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-9.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  {
    category: "filter-workshop",
    pict: "assets/img/kegiatan-2024/workshop-10.JPG",
    name: "Workshop 2024",
    title: "Kegiatan Workshop 2024",
  },
  // ================ END KEGIATAN 2024 ======================
];

const card = document.querySelector(".portfolio-container");

async function loadImages(imageGallery) {
  for (const item of imageGallery) {
    const { category, pict, name, title } = item;

    // Fetch the image asynchronously
    await new Promise((resolve) => {
      const img = new Image();
      img.src = pict;
      img.onload = resolve;
      img.onerror = resolve;
    });

    card.innerHTML += `
      <div class="col-lg-4 col-md-6 portfolio-item ${category}">
          <div class="portfolio-wrap">
              <img src="${pict}" class="img-fluid" alt="" />
              <div class="portfolio-info">
                  <h4>${name}</h4>
                  <div class="portfolio-links">
                      <a href="${pict}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}"><i class="bx bx-plus"></i></a>
                  </div>
              </div>
          </div>
      </div>
    `;
  }
}

// Call the function to load images
loadImages(imageGallery);


const lightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

// Fetch data dari datagaleri.json
// const card = document.querySelector(".portfolio-container");

// async function loadGallery() {
//   try {
//     const response = await fetch("assets/js/datagaleri.json");
//     const data = await response.json();
//     console.log(data)
//     const imageGallery = data.imageGallery;

//     imageGallery.forEach((image) => {
//       const { category, pict, name, title } = image;

//       card.innerHTML += `
//         <div class="col-lg-4 col-md-6 portfolio-item ${category}">
//             <div class="portfolio-wrap">
//                 <img src="${pict}" class="img-fluid" alt="${name}" />
//                 <div class="portfolio-info">
//                     <h4>${name}</h4>
//                     <div class="portfolio-links">
//                         <a href="${pict}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}">
//                             <i class="bx bx-plus"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       `;
//     });

//     const lightbox = GLightbox({
//       selector: ".portfolio-lightbox",
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// loadGallery();
