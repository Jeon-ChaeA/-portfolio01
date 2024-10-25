//hearder 
//검색창
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.getElementById('icon');

  // 검색창의 표시 여부를 토글
  if (searchBar.style.display === "block") {
      searchBar.style.display = "none";
      // 아이콘을 다시 돋보기로 변경
      searchIcon.src = "image/main/01_header/Icon_reading glasses(w).png"; 
  } else {
      searchBar.style.display = "block";
      // 아이콘을 X로 변경
      searchIcon.src = "image/main/01_header/Icon_X(w).png";
  }
}
//검색창 placeholder 지우기
let searchInput = document.querySelector('.search-input','.search_input');
let originalPlaceholder = searchInput.placeholder;

searchInput.addEventListener("focus", () => {
  searchInput.placeholder = "";
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInput.placeholder = originalPlaceholder;
  }
});


//hearder + nav
//색상변환
// 모든 링크 요소를 선택
const nav = document.querySelector('nav');
const menuLinks = document.querySelectorAll('.main-menu ul li a');
const navIcon = document.querySelector('.nav-icon');
const header = document.querySelector('header');
const headerLogo = document.querySelector('.header_logo img');
const headerIconButtonImg = document.querySelector('#icon');
const headerIconButtonItems = document.querySelectorAll('.header_icon_button li');
const dropbtns = document.querySelectorAll('.dropbtn');
// 동적 스타일 시트 생성
const styleElement = document.createElement('style');

document.head.appendChild(styleElement);

// 마우스 오버 이벤트 함수
function handleMouseOver() {
  nav.style.backgroundColor = '#ffffff';
  header.style.backgroundColor = '#ffffff';
  menuLinks.forEach(link => link.style.color = '#777777');
  navIcon.style.color = '#777777';
  headerLogo.src = 'image/main/01_header/header_logo-02.png';
  headerIconButtonImg.src = 'image/main/01_header/Icon_reading glasses.png';
  headerIconButtonItems.forEach(item => item.style.color = '#777777');
  dropbtns.forEach(btn => btn.style.color = '#777777');
  styleElement.textContent = '.header_icon_button li::before { color: #777777 !important; }';
}
// 마우스 아웃 이벤트 함수
function handleMouseOut() {
  nav.style.backgroundColor = '#9c1d0f';
  header.style.backgroundColor = '';
  menuLinks.forEach(link => link.style.color = '#ffffff');
  navIcon.style.color = '#ffffff';
  headerLogo.src = 'image/main/01_header/header_logo-01.png';
  headerIconButtonImg.src = 'image/main/01_header/Icon_reading glasses(w).png';
  headerIconButtonItems.forEach(item => item.style.color = '');
  dropbtns.forEach(btn => btn.style.color = '#ffffff');
  styleElement.textContent = '';
}
// 각 링크에 이벤트 리스너 추가
menuLinks.forEach(link => {
  link.addEventListener('mouseover', handleMouseOver);
  link.addEventListener('mouseout', handleMouseOut);
});


//nav
// main-menu의 li 모두 선택
let menuItems = document.querySelectorAll('.menu-item');
// sub-menu 선택
let subMenus = document.querySelectorAll('.sub-menu');

menuItems.forEach(function(item){
  // 마우스가 들어왔을 때 설정
  item.addEventListener('mouseenter', function(){
    // 모든 서브메뉴 숨기기
    subMenus.forEach(function(sub){
      sub.style.display = "none";
    });

    // 그리고 현재 타겟 서브메뉴만 보여주기
    let target = document.getElementById(item.dataset.target);
    if(target){
      target.style.display = "block";
    }
  });
});

// 서브메뉴에서 마우스 들어오면 유지시킴
subMenus.forEach(function(sub){
  sub.addEventListener('mouseenter', function(){
    sub.style.display = "block";
  });
});

// 마우스 떠나면 안보이게 설정
subMenus.forEach(function(sub){
  sub.addEventListener('mouseleave', function(){
    sub.style.display = "none";
  });
});
// 오른쪽으로 마우스 떠나면 서브메뉴가 안사라짐
// nav 에서 마우스 떠나면 서브메뉴 사라지게 설정
document.querySelector('nav').addEventListener('mouseleave', function(){
  subMenus.forEach(function(sub){
    sub.style.display = 'none';
  })
})

//반응형 내비게이션
document.addEventListener('DOMContentLoaded', function() {
  const openAccordionMenu = document.getElementById('openAccordionMenu');
  const accordionMenu = document.getElementById('accordion-menu');
  const menuIcon = openAccordionMenu.querySelector('i');

  // 메뉴 아이콘 클릭 이벤트
  openAccordionMenu.addEventListener('click', function() {
    // 아코디언 메뉴 토글
    accordionMenu.style.display = accordionMenu.style.display === 'block' ? 'none' : 'block';
    
    // 아이콘 전환
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
  });

  // 아코디언 아이템 이벤트 설정
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const icon = title.querySelector('.accordion_icon i');

    title.addEventListener('click', function() {
      // 콘텐츠 토글
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      
      // 활성화 상태 토글
      this.classList.toggle('active');
      
      // 아이콘 회전 및 색상 변경
      if (this.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
        icon.style.color = 'var(--PrimaryColor3)';
      } else {
        icon.style.transform = 'rotate(0deg)';
        icon.style.color = '#777777';
      }
    });
  });
});

//햄버거 누르면 전체 검색창 뜨기
document.addEventListener('DOMContentLoaded', function() {
  const openFullMenu = document.getElementById('openFullMenu');
  
  openFullMenu.addEventListener('click', function() {
    window.location.href = 'index(fullMenu).html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs ul li');
  const img = document.getElementById('main-img');
  const textOverlay = document.querySelector('.image-area h3');
  const contents = document.querySelectorAll('.content-area > div');
  const contentArea = document.querySelector('.content-area'); 
  const paragraphs = contentArea.querySelectorAll('p');

  const imageUrls = [
      'image/suvPage/우체국쇼핑_Section02_img-01.jpg',
      'image/suvPage/우체국쇼핑_Section02_img-02.jpg',
      'image/suvPage/우체국쇼핑_Section02_img-03.jpg',
      'image/suvPage/우체국쇼핑_Section02_img-04.jpg'
  ];
  const texts = [
      'NOW - 2020',
      '2019 - 2015',
      '2014 - 2007',
      '2006 - 1986'
  ];

  tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          img.src = imageUrls[index];
          textOverlay.textContent = texts[index];

          contents.forEach(c => c.classList.remove('active'));

          const selectedContent = document.getElementById(`content${index + 1}`);
          selectedContent.classList.add('active');
          selectedContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          paragraphs.forEach(p => {
            p.style.fontSize = '';
            p.style.fontWeight = '';
            p.style.lineHeight = '';
          });
      });
  });

  function updateStyles() {
    const areaRect = contentArea.getBoundingClientRect();
    const centerY = areaRect.top + areaRect.height / 2;

    let closestP = null;
    let closestDist = Infinity;

    paragraphs.forEach(p => {
      const pRect = p.getBoundingClientRect();
      const pCenterY = pRect.top + pRect.height / 2;
      const dist = Math.abs(centerY - pCenterY);

      if (dist < closestDist) {
        closestDist = dist;
        closestP = p;
      }
    });

    paragraphs.forEach(p => {
      p.style.fontSize = '';
      p.style.fontWeight = '';
      p.style.lineHeight = '';
    });

    if (closestP) {
      closestP.style.fontSize = '27px';
      closestP.style.fontWeight = 'bold';
      closestP.style.lineHeight = '1.5';
    }
  }

  let timeoutId;
  contentArea.addEventListener('scroll', () => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        updateStyles();
        timeoutId = null;
      }, 100);
    }
  });

  updateStyles();
});


var swiper = new Swiper(".shoSwiper", {
  slidesPerView: 3,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//footer
let btn = document.getElementById('gototop');
let doc = document.documentElement;
let scrollAmount; //스크롤의 양
// console.log("btn:", btn, "doc:", doc, "scrollAmounts:", scrollAmount)
window.addEventListener('scroll',function(){
  scrollAmount = doc.scrollTop;
  if(scrollAmount > 600){
    btn.classList.add('visible');
  }else{
    btn.classList.remove('visible');
  }
})
//클릭했을 때 맨 위로 스크롤
btn.addEventListener('click', function(event){
  event.preventDefault(); // a태그의 기본 속성없애기
  window.scroll({
    top:0,
    behavior:'smooth'
  });
})

//전체 스크롤 이벤트 (ScrollReveal)
const sr = ScrollReveal({
  origin: 'bottom', // 모든 요소가 아래에서 위로 나타남
  distance: '30px', // 이동 거리
  duration: 1000, // 애니메이션 시간
  easing: 'ease-out',
  interval: 100, // 요소들 사이의 나타나는 간격
  reset: false // 스크롤 올렸다 내릴 때 효과 재적용하지 않음
});

// 모든 요소에 동일한 효과 적용
sr.reveal('.shopping_main, .shopping_characteristic, .shopping_history, .shopping_store');


