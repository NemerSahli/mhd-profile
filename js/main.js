$(document).ready(function () {
  generateCarouselTechnologies();
  generateAboutMe();
  generateTechnologiesBody();
  generateProjectsBody();
  generateFooter();
  $('#send-id').click(() => {
    let newMessage = {
      name: $('#name').val(),
      email: $('#email').val(),
      subject: $('#subject').val(),
      content: $('#message').val()
    };
    if (
      newMessage.name === '' ||
      newMessage.email === '' ||
      newMessage.subject === '' ||
      newMessage.content === ''
    ) {
      return;
    }

    $.ajax({
      url: 'https://fuburo.de/nemer/message/send',
      type: 'POST',
      data: JSON.stringify(newMessage),
      dataType: 'json',
      contentType: 'application/json',
      success: function (response) {
        console.log('response', response);
      },
      error: function (xhr, status, error) {
        console.log(`
         error:${error},
         status:${status},
         xhr:${JSON.stringify(xhr)}
         `);
      }
    });
  });
});

function generateCarouselTechnologies() {
  $('.carousel-inner').append(`
  <div class="carousel-item active">
  <div class="row justify-content-center">
    <div class="mr-4">
      <i
        class="text-secondary fab fa-js-square fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">JavaScript</h5>
    </div>
    <div class="mr-4">
      <i
        class="text-secondary fab fa-node-js fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">NodeJs</h5>
    </div>
    <div>
      <i
        class="text-secondary fab fa-react fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">React</h5>
    </div>
  </div>
</div>
  `);
  $('.carousel-inner').append(`
  <div class="carousel-item">
  <div class="row justify-content-center">
    <div class="mr-5">
      <i
        class="text-secondary fab fa-html5 fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">Html</h5>
    </div>
    <div class="mr-5">
      <i
        class="text-secondary fab fa-css3 fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">CSS</h5>
    </div>
    <div>
      <i
        class="text-secondary fab fa-sass fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">SASS</h5>
    </div>
  </div>
</div>
  `);
  $('.carousel-inner').append(`
  <div class="carousel-item">
  <div class="row justify-content-center">
    <div class="mr-5">
      <img
        src="./images/graphql.png"
        width="45px"
        style="opacity:0.6"
        alt=""
      />
      <h5 class="carousel-description">GraphQL</h5>
    </div>
    <div class="mr-5">
      <img
        src="./images/jquery.png"
        width="45px"
        style="opacity:0.6"
        alt="jquery"
      />
      <h5 class="carousel-description">JQuery</h5>
    </div>
    <div>
      <img
        src="./images/bootstrap.png"
        width="47px"
        style="opacity:0.6"
        alt=""
      />
      <h5 class="carousel-description">Bootstrap</h5>
    </div>
  </div>
</div>
  `);
  $('.carousel-inner').append(`
  <div class="carousel-item">
  <div class="row justify-content-center">
    <div class="mr-4">
      <i
        class="text-secondary fab fa-envira fa-3x"
        aria-hidden="true"
      ></i>
      <h5 class="carousel-description">MongoDB</h5>
    </div>
    <div>
      <img
        src="./images/mysql.png"
        width="50px"
        style="opacity:0.9"
        alt=""
      />
      <h5 class="carousel-description">MySQL</h5>
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
      src="./images/passBild2.png"
      alt=""
      width="300px"
      height="300px"
    />
  </div>
  <div class="info col-sm-12 col-md-7 col-lg-7">
    <div class="about">
      <h3 class="pb-4">About Me</h3>
      <h4 class="my-name">I'm Nemer EL-Sahli</h4>
      <p class="profession">FULL-STACK WEB DEVELOPER</p>
      <p>based in Berlin, Germany.</p>
      <p>
        •I have some experience with embedded programming and I
        graduated from a full-time 1-year course in Web Development at
        the Digital Career Institute.
      </p>
      <p>
        • Result oriented, Enthusiastic nature, Positive attitude,
        Self-confident.
      </p>
      <p>
        • Willing to learn new things and Solution-driven, knowledge and
        want to become expert in various technologies.
      </p>
      <p>
        • Projects management through the complex processes of
        technology development.
      </p>
      <p>
        • Strategic thinking, Problem-solving and analytical skills,
        astute judgment and decision making capability.
      </p>
    </div>
    <div class="row">
      <div class="col-12 mb-3">
        <a href="#contact">
          <button class="rounded-1 btn btn-dark pr-4">
            Contact Me
          </button>
        </a>
      </div>` +
    // <div class="col-12">
    //   <a href="./data/Nemer_EL-Sahli_CV.pdf" download>
    //     <button class="rounded-1 btn btn-dark">Download CV</button>
    //   </a>
    // </div>
    `</div>
  </div>
</div>
</div>
`
  );
}
function generateTechnologiesBody() {
  let technologeis = [
    {
      title: 'JavaScript',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'js.png'
    },
    {
      title: 'ReactJS',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'react.png'
    },
    {
      title: 'Redux',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'redux2.png'
    },
    {
      title: 'NodeJS',
      imgWidth: 'auto',
      imgHeight: '100px',
      imgUrl: 'nodeJs.png'
    },
    {
      title: 'GraphQL',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'graphql2.png'
    },
    {
      title: 'HTML5',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'HTML5.png'
    },
    { title: 'CSS3', imgWidth: '100px', imgHeight: 'auto', imgUrl: 'css3.png' },
    { title: 'SASS', imgWidth: '100px', imgHeight: 'auto', imgUrl: 'sass.png' },
    {
      title: 'JQuery',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'jquery2.png'
    },
    {
      title: 'Bootstrap',
      imgWidth: '120px',
      imgHeight: 'auto',
      imgUrl: 'bootstrap2.png'
    },
    {
      title: 'MongoDB',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'mongodb2.png'
    },
    {
      title: 'MySQL',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'mysql2.png'
    },
    {
      title: 'Ubuntu',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'ubuntu.png'
    },
    { title: 'Git', imgWidth: '110px', imgHeight: 'auto', imgUrl: 'git.png' },
    {
      title: 'GitHub',
      imgWidth: '100px',
      imgHeight: 'auto',
      imgUrl: 'github.png'
    }
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
            Fuburo: lost and found online office
          </h5>
          <div class="m-3 project-img">
            <img
              src="./images/fuburo-screen-shot.png"
              width="100%"
              alt=""
            />
          </div>
          <div class="m-3">
            <a href="https://github.com/NemerSahli/lost-and-found" target="_blank">github.com/.../lost-and-found</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            Registick
          </h5>
          <div class="m-3">
            <img src="./images/registick.png" width="100%" alt="" />
          </div>
          <div class="ml-3 mb-0">
            <a
              href="https://nemersahli.github.io/Registick-/"
              target="_blank"
              >github.io/Registick</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">Digidry</h5>
          <div class="m-3">
            <img src="./images/digidry.png" width="100%" alt="" />
          </div>
          <div class="ml-3 mb-0">
            <a
              href="https://github.com/NemerSahli/Digidry"
              target="_blank"
              >github.com/.../Digidry</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            Users Lists
          </h5>
          <div class="m-3">
            <img src="./images/users-list.png" width="100%" alt="" />
          </div>
          <div class="mt-4 ml-3 pt-2 ">
            <a
              href="https://github.com/NemerSahli/users_list"
              target="_blank"
              >github.com/.../users_list</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            Little Quiz
          </h5>
          <div class="m-3">
            <img src="./images/little-quiz.png" width="100%" alt="" />
          </div>
          <div class="ml-3 mb-0">
            <a
              href="https://github.com/NemerSahli/little_quiz"
              target="_blank"
              >github.com/.../little_quiz</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-sm-12 col-lg-6">
      <div class="media bg-white pt-4 pb-4">
        <div class="media-body mb-2">
          <h5 class="mt-0 mb-1 service-card-h5 text-center">
            Online Shopping
          </h5>
          <div class="m-3 project-img">
            <img src="./images/online-shopping.png" width="100%" alt="" />
          </div>
          <div class="m-3">
            <a
              href="https://github.com/NemerSahli/online_shopping"
              target="_blank"
              >github.com/.../online_shopping</a
            >
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
            href="https://www.linkedin.com/in/NemerSahli/"
            class="icon"
            target="_blank"
          >
            <i
              class="text-secondary fab fa-linkedin-in fa-2x"
              aria-hidden="true"
            ></i>
            <span class="sr-only">My linkedin profile</span>
          </a>
          <a href="https://github.com/NemerSahli" class="icon" target="_blank">
            <i
              class="text-secondary fab fa-github fa-2x "
              aria-hidden="true"
            ></i>
            <span class="sr-only">My github profile</span>
          </a>
          <a
            href="https://stackoverflow.com/users/10749443/nemer"
            class="icon"
            target="_blank"
          >
            <i class="text-secondary fab fa-stack-overflow fa-2x"></i>
            <span class="sr-only">My stackoverflow profile</span>
          </a>
          <a
            href=" https://codepen.io/NemerSahli/"
            class="icon"
            target="_blank"
          >
            <i class="text-secondary fab fa-codepen fa-2x"></i>
            <span class="sr-only">My codepen profile</span>
          </a>
        </div>
        <p class="text-center text-dark pt-3">&copy; 2019 Nemer EL-Sahli</p>
      </div>
  `);
}
