$(document).ready(function () {
  generateCarouselTechnologies();
  generateAboutMe();
  generateTechnologiesBody();
  generateProjectsBody();
  generateFooter();
});

function generateCarouselTechnologies() {
  $('.carousel-inner').append(`
    <div class="carousel-item active">
      <div class="row justify-content-center">
        <div class="mr-4">
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
        <div class="mr-4">
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
        <div>
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
      </div>
    </div>
  `);

  $('.carousel-inner').append(`
    <div class="carousel-item">
      <div class="row justify-content-center">
        <div class="mr-5">
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
        <div class="mr-5">
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
        <div>
          <i
            class="text-secondary fab fa-linkedin-in fa-3x"
            aria-hidden="true"
          ></i>
          <h5 class="carousel-description">TBD</h5>
        </div>
      </div>
    </div>
  `);

  $('.carousel-inner').append(``);

}
function generateAboutMe() {
  $('#about').append(
    `
<div class="container">
<div class="row">
  <div class="col-sm-12 col-md-5 col-lg-5">
    <img
      class="img-fluid"
      src="./images/passBild3.png"
      alt="my photo"
      width="300px"
      height="300px"
    />
  </div>
  <div class="info col-sm-12 col-md-7 col-lg-7">
    <div class="about">
      <h3 class="pb-4">About Me</h3>
      <h4 class="my-name">Mohammad EL-Sahli</h4>
      <p class="profession">TBD</p>
      <p>based in ...</p>
      <p>
        TBD
      </p>
    </div>
    <div class="row">
      <div class="col-12 mb-3">
        <a href="#contact">
          <button class="rounded-1 btn btn-dark pr-4">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
`
  );
}
function generateTechnologiesBody() {
  let technologeis = [
    {
      title: 'TBD',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'tbd.png'
    },
    {
      title: 'TBD',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'tbd.png'
    },
    {
      title: 'TBD',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'tbd.png'
    },
  ];

  let TechnologiesBody = '';
  technologeis.map(tech => {
    TechnologiesBody += `
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                  <div class="card m-auto">
                    <img
                      class="mr-auto ml-auto mt-5"
                      src="./images/${tech.imgUrl}"
                      width="${tech.imgWidth}"
                      height="${tech.imgHeight}"
                      alt=""
                    />
                    <div class="card-body">
                      <h5 class="card-title text-center card-h5">${tech.title}</h5>
                    </div>
                  </div>
                </div>`;
  });

  $('#technologies').append(`
    <div class="container">
    <div class="row">
      <h3 class="col-lg-12 m-2 text-center p-3">Technologies</h3>
      ${TechnologiesBody}
    </div>
  </div>`);
}

function generateProjectsBody() {
  $('#projects').append(`
  <div class="container pt-5 pb-5">
  <div class="row">
    <h3 class="col-lg-12 m-2 text-center ">Projects</h3>

    <div class="col-sm-12 col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            TBD
          </h5>
          <div class="m-3 project-img">
            <img
              src="./images/tbd.png"
              width="100%"
              alt=""
            />
          </div>
          <div class="m-3">
            <a href="#" target="_blank">TBD</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            TBD
          </h5>
          <div class="m-3 project-img">
            <img
              src="./images/tbd.png"
              width="100%"
              alt=""
            />
          </div>
          <div class="m-3">
            <a href="#" target="_blank">TBD</a>
          </div>
        </div>
      </div>
    </div>

     <div class="col-sm-12 col-lg-6">
        <div class="media bg-white pt-4 pb-4">
          <div class="media-body mb-2">
            <h5 class="mt-0 mb-1 service-card-h5 text-center">
              TBD
            </h5>
            <div class="m-3 project-img">
              <img
                src="./images/tbd.png"
                width="100%"
                alt=""
              />
            </div>
            <div class="m-3">
              <a href="#" target="_blank">TBD</a>
            </div>
          </div>
        </div>
      </div>

    <div class="col-sm-12 col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            TBD
          </h5>
          <div class="m-3 project-img">
            <img
              src="./images/tbd.png"
              width="100%"
              alt=""
            />
          </div>
          <div class="m-3">
            <a href="#" target="_blank">TBD</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
  `);
}
function generateFooter() {
  $('.footer').append(`
  <div class="container">
        <div class="social-networks  pt-5 text-center">
          <a
            href="https://www.linkedin.com/"
            class="icon"
            target="_blank"
          >
            <i
              class="text-secondary fab fa-linkedin-in fa-2x"
              aria-hidden="true"
            ></i>
            <span class="sr-only">My linkedin profile</span>
          </a>
          
            <a
            href="https://www.linkedin.com/"
            class="icon"
            target="_blank"
            >
              <i
                class="text-secondary fab fa-linkedin-in fa-2x"
                aria-hidden="true"
              ></i>
              <span class="sr-only">My linkedin profile</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              class="icon"
              target="_blank"
            >
              <i
                class="text-secondary fab fa-linkedin-in fa-2x"
                aria-hidden="true"
              ></i>
              <span class="sr-only">My linkedin profile</span>
            </a>

        </div>
        <p class="text-center text-dark pt-3">&copy; 2024 Mohammad EL-Sahli</p>
      </div>
  `);
}
