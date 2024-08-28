// Fetch data dari datagaleri.json

const card = document.querySelector(".portfolio-container");

async function loadGallery() {
  try {
    const response = await fetch("assets/js/datagaleri.json");
    const data = await response.json();
    const imageGallery = data.imageGallery;
    console.log(imageGallery)

    imageGallery.forEach((image) => {
      const { category, pict, name, title } = image;

      card.innerHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item ${category}">
            <div class="portfolio-wrap">
                <img src="${pict}" class="img-fluid" alt="${name}" />
                <div class="portfolio-info">
                    <h4>${name}</h4>
                    <div class="portfolio-links">
                        <a href="${pict}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}">
                            <i class="bx bx-plus"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      `;
    });

    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
loadGallery();
