document.addEventListener('DOMContentLoaded', function() {

    const navInit = () => {
      const nav = document.querySelector('.nav') // ищем блок навигации
      const links = document.querySelectorAll('.nav__li') // ищем все навигационные ссылки
      const sections = document.querySelectorAll('.section') // ищем все секции
      sections.forEach(section => { // для каждой секции
        if (window.pageYOffset >= section.offsetTop) { // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
          links.forEach(link => { // для каждой ссылки
            link.classList.remove('nav__li_active') // удаляем активный класс
            if (link.dataset.section === section.dataset.section) { // проверяем, если data-атрибуты ссылки и секции совпадают
              link.classList.add('nav__li_active') // добавляем ссылке активный класс
            }
  
          })
        }
  
      })
    }
    navInit() // запускаем функцию при загрузке страницы
    window.addEventListener('scroll', () => {
      navInit() // запускаем функцию при скролле страницы
    })
    window.addEventListener('resize', () => {
      navInit() // запускаем функцию при ресайзе страницы
    })
  
  })

  document.addEventListener('DOMContentLoaded', function() {

    const navInit = () => {
      const nav = document.querySelector('.nav') // ищем блок навигации
      const links = document.querySelectorAll('.nav__li') // ищем все навигационные ссылки
      const sections = document.querySelectorAll('.section') // ищем все секции
      sections.forEach(section => { // для каждой секции
        if (window.pageYOffset >= section.offsetTop) { // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
          links.forEach(link => { // для каждой ссылки
            link.classList.remove('nav__li_active') // удаляем активный класс
            if (link.dataset.section === section.dataset.section) { // проверяем, если data-атрибуты ссылки и секции совпадают
              link.classList.add('nav__li_active') // добавляем ссылке активный класс
  
              if (section.classList.contains('section_dark')) { // если активная секция имеет класс section_dark, то есть у нее темный фон
                nav.classList.add('nav_light') // меняем цвет ссылок на светлый, добавляя класс nav_light
              } else { // иначе
                nav.classList.remove('nav_light') // удаляем класс nav_light
              }
  
            }
  
          })
        }
  
      })
    }
    navInit() // запускаем функцию при загрузке страницы
    window.addEventListener('scroll', () => {
      navInit() // запускаем функцию при скролле страницы
    })
    window.addEventListener('resize', () => {
      navInit() // запускаем функцию при ресайзе страницы
    })
  
  })


