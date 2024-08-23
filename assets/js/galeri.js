let galeriFoto = [
  {
    category: "filter-workshop",
    image: "assets/img/kegiatan/workshop1.png",
    name: "Workshop 2022",
    year: "2022",
  },
  {
    category: "filter-workshop",
    image: "assets/img/kegiatan/workshop-2.jpg",
    name: "Workshop 2022",
    year: "2022",
  },
  {
    category: "filter-workshop",
    image: "assets/img/kegiatan/workshop-3.jpg",
    name: "Workshop 2022",
    year: "2022",
  },
  {
    category: "filter-ldko",
    image: "assets/img/kegiatan/ldko1.jpg",
    name: "LDKO 2022",
    year: "2022",
  },
  {
    category: "filter-ldko",
    image: "assets/img/kegiatan/ldko3.jpg",
    name: "LDKO 2022",
    year: "2022",
  },
  {
    category: "filter-ldko",
    image: "assets/img/kegiatan/ldk.jpg",
    name: "LDKO 2022",
    year: "2022",
  },
];

const card = document.querySelector(".portfolio-container");
for (let i in galeriFoto) {
  card.innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item ${galeriFoto[i].category}">
        <div class="portfolio-wrap">
            <img src="${galeriFoto[i].image}" class="img-fluid" alt="" />
            <div class="portfolio-info">
                <h4>${galeriFoto[i].name}</h4>
                <p>${galeriFoto[i].year}</p>
                <div class="portfolio-links">
                    <a href="${galeriFoto[i].image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="WorkShop 1"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
}
