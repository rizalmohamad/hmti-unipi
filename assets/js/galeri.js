// Fetch data from datagaleri.json

fetch("assets/js/datagaleri.json")
  .then((response) => response.json())
  .then((data) => {
    const card = document.querySelector(".portfolio-container");
    const imageGallery = data.imageGallery;

    imageGallery.forEach((image) => {
      const { category, pict, name, title } = image;

      card.innerHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item ${category}">
            <div class="portfolio-wrap">
                <img src="${pict}" class="img-fluid" alt="${name}" />
                <div class="portfolio-info">
                    <h4>${name}</h4>
                    <div class="portfolio-links">
                        <a href="${pict}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}"><i class="bx bx-plus"></i></a>
                    </div>
                </div>
            </div>
        </div>
      `;
    });
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
