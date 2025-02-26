document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let searchQuery = document.getElementById('search').value;
  if (searchQuery) {
      alert('Поиск: ' + searchQuery);
  }
});

document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('modalText').textContent = this.dataset.news;
      document.getElementById('newsModal').style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('newsModal').style.display = 'none';
});

document.getElementById('menuToggle').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Меню открыто!');
});



 function showModal() {
    document.getElementById('registrationModal').style.display = 'block';
}


function closeModal() {
    document.getElementById('registrationModal').style.display = 'none';
}


window.onclick = function(event) {
    var modal = document.getElementById('registrationModal');
    if (event.target == modal) {
        closeModal();
    }
}

const news = [
  {
    title: "Громкий бой UFC",
    content: "В предстоящем турнире UFC топовые бойцы сразятся за титул.",
    imageUrl: "https://backend.runasport.com/storage/app/uploads/public/678/0da/cc7/thumb_10392_1200_0_0_0_landscape.jpg"
  },
  {
    title: "Чемпионский бой по боксу",
    content: "Не пропустите главное боксерское событие этого года!",
    imageUrl: "https://cdn.sovsport.prod.plat.agency/Getty_Images_1595535389_copy_65769bc934.webp",
  },
  {
    title: "Футбольные трансферы",
    content: "Топовые клубы Европы готовятся к зимнему трансферному окну.",
    imageUrl: "https://www.idman.biz/media/2024/04/01/1920x1280/gettyimages-1458491605.jpg?v=1711976973",
  },
  {
    title: "NBA: Лучшие матчи недели",
    content: "Обзор самых захватывающих игр НБА на этой неделе.",
    imageUrl: "https://img.championat.com/s/732x488/news/big/z/g/stiven-karri_15172220551265558391.jpg",
  },
  {
    title: "Бой Рахмонов против Мухаммад",
    content: "«Отстойный боец». Мухаммад ответил на критику после срыва боя с Рахмоновым",
    imageUrl: "https://www.sports.kz/upload/2025-02/249_67bce6183c481.jpg.webp",
  },
  {
    title: "Месси",
    content: "Судья попросил автограф у Месси и лишился работы",
    imageUrl: "https://www.sports.kz/upload/2025-02/249_67bd460179087.jpg.webp",
  },
  {
    title: "Бивол и Бетербиев",
    content: "Бивола и Бетербиева призвали не повторять ошибку Головкина и «Канело»",
    imageUrl: "https://www.sports.kz/upload/2025-02/388_67bd3c3fa9011.jpg.webp",
  },
  {
    title: "Леброн Джеймс",
    content: "Леброн Джеймс сделал заявление о завершении карьеры",
    imageUrl: "https://www.sports.kz/upload/2024-11/249_6732502d86875.jpg.webp",
  }
];

function setupReadMoreButtons() {
  document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('newsModal').style.display = 'flex'.
      document.getElementById('modalText').textContent = this.dataset.news;
      document.getElementById('newsModal').style.display = 'flex';
    });
  });
}


document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredNews = news.filter(n => n.title.toLowerCase().includes(searchQuery));

  const newsContainer = document.querySelector(".news-container");
  newsContainer.innerHTML = '';

  filteredNews.forEach(n => {
    const newsArticle = `
      <article class="news-card">
        <img src="${n.imageUrl}" alt="${n.title}">
        <h3>${n.title}</h3>
        <p>${n.content}</p>
        <a href="#" class="read-more" data-news="${n.content}">Читать далее</a>
      </article>
    `;
    newsContainer.innerHTML += newsArticle;
  });

  setupReadMoreButtons(); 

  if (filteredNews.length === 0) {
    newsContainer.innerHTML = '<p>Ничего не найдено.</p>';
  }
});


document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('newsModal').style.display = 'none';
});


setupReadMoreButtons();