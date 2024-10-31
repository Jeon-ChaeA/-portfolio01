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
let searchInput = document.querySelector('.search-input');
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
  nav.style.backgroundColor = '#9c1d0f85';
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

//Sestion_main_visual
//Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 4800,
    disableOnInteraction: false,
  },
});

//Sestion_main_visual(moble) 반응형
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mobSwiper', {
    navigation: {
      nextEl: '.swiper-button-next_mob',
      prevEl: '.swiper-button-prev_mob',
    },
    pagination: {
      el: '.swiper-pagination_mob',
      type: "progressbar",
    },
    autoplay: {
      delay: 4800,
      disableOnInteraction: false,
    },
  });
});
// 네비게이션 버튼 요소 선택
const nextButton = document.querySelector('.swiper-button-next_mob');
const prevButton = document.querySelector('.swiper-button-prev_mob');

// 클릭 이벤트 리스너 추가
nextButton.addEventListener('click', function() {
  this.style.backgroundColor = '#FFCDC7'; //색상 변경
  setTimeout(() => {
    this.style.backgroundColor = ''; // 일정 시간 후 원래 색상으로 복귀
  }, 300); //원래 색상으로
});
prevButton.addEventListener('click', function() {
  this.style.backgroundColor = '#FFCDC7'; //색상 변경
  setTimeout(() => {
    this.style.backgroundColor = '';
  }, 300);
});



//Sestion_news
// Initialize Swiper(news_letter)
var swiper = new Swiper(".Swiper_letter", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

document.addEventListener('DOMContentLoaded', function() {
  // 뉴스 섹션 탭
  let newsTabButtons = document.querySelectorAll('.tab_btn');
  let newsTabContents = document.querySelectorAll('.tab_content');

  newsTabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      let targetTab = this.getAttribute('data-tab');

      newsTabButtons.forEach(function(btn) {
        btn.classList.remove('active');
        btn.style.color = '';
        btn.style.fontWeight = '';
      });

      this.classList.add('active');
      this.style.color = '#B60217';
      this.style.fontWeight = "bold";

      newsTabContents.forEach(function(content) {
        content.style.display = 'none';
      });

      document.getElementById(targetTab).style.display = 'block';
    });
  });

  // 첫 번째 뉴스 탭을 기본으로 활성화
  newsTabButtons[0].click();
}); 


//Sestion_news(moble) 반응형
var swiper = new Swiper(".mobnewsSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slideToClickedSlide: true,
  navigation: {
    nextEl: ".swiper-button-next_mobnews",
    prevEl: ".swiper-button-prev_mobnews",
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
    }
  },
  on: {
    init: function () {
      updatePrevButton(this);// 초기화 시 이전 버튼 상태 업데이트
    },
    slideChange: function () {
      updatePrevButton(this);// 슬라이드 변경 시 이전 버튼 상태 업데이트
    }
  }
});

// 이전 버튼 상태를 업데이트하는 함수
function updatePrevButton(swiper) {
  // 이전 버튼 선택
  const prevButton = document.querySelector('.swiper-button-prev_mobnews');

    // info5 슬라이드의 인덱스를 찾습니다
  const info5Index = Array.from(swiper.slides).findIndex(slide => slide.classList.contains('info5'));
  
  // info5 슬라이드가 보이는지 확인
  const info5Visible = swiper.activeIndex + swiper.params.slidesPerView > info5Index;
  
  if (info5Visible) {
    prevButton.style.display = 'block';// info5 슬라이드가 보이면 이전 버튼 표시
  } else {
    prevButton.style.display = 'none';// 아니면 이전 버튼 숨김
  }
}

//Sestion_news(moble) 반응형
document.addEventListener('DOMContentLoaded', function() {
  const tabContainer = document.querySelector('.moble_tidings_link');
  const tabButtons = tabContainer.querySelectorAll('.tab_btn');
  const tabContents = document.querySelectorAll('.moble_news_tidings_item');

  function activateTab(tabId) {
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
        btn.style.color = '#B60217';
        btn.style.fontWeight = 'bold';
      } else {
        btn.classList.remove('active');
        btn.style.color = '';
        btn.style.fontWeight = '';
      }
    });

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.classList.add('active');
        content.style.display = 'block';
      } else {
        content.classList.remove('active');
        content.style.display = 'none';
      }
    });
  }

  tabContainer.addEventListener('click', function(e) {
    const clickedTab = e.target.closest('.tab_btn');
    if (clickedTab) {
      const tabId = clickedTab.getAttribute('data-tab');
      activateTab(tabId);
    }
  });

  // 첫 번째 탭을 기본으로 활성화
  activateTab('tab1');
});

//Sestion_activity
const tabs = document.querySelectorAll('.tab_menu li');
const links = document.querySelectorAll('.tab_menu a');
const tabContent = document.querySelectorAll('.activity_wrap > div');
const cards = document.querySelectorAll('.card');

links.forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // a의 기본 속성 없애기, 페이지 이동 방지

    // 탭 사이에서 스타일 전환
    tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.style.fontWeight = isActive ? '900' : '500';
      tab.style.color = isActive ? '#B60217' : '#999999';
    });
    
    // 이미지 클릭 시 전환
    links.forEach((link, i) => {
      const isActive = i === index;
      link.classList.toggle('active', isActive);
      const img = link.querySelector('img');
      img.src = `image/main/05_sestion.activity/Icon_arrow04(${isActive ? 'y' : 'g'}).png`;
    });

    // 해당 탭 내용 표시
    tabContent.forEach(content => content.style.display = 'none');
    document.getElementById(this.getAttribute('href').substring(1)).style.display = 'block';
  });
});

// 첫 번째 탭 콘텐츠를 기본적으로 보이게 설정
document.getElementById('tabs_2').style.display = 'none';

// 카드 확장 기능
cards.forEach(card => {
  card.addEventListener('click', function() {
    cards.forEach(c => {
      c.classList.remove('expanded');
      c.querySelector('.new_textBox').style.opacity = '0';
      c.querySelector('.new_text').style.opacity = '0';
    });
    this.classList.add('expanded');
    setTimeout(() => {
      this.querySelector('.new_textBox').style.opacity = '1';
      this.querySelector('.new_text').style.opacity = '1';
    }, 250); // 카드 확장 애니메이션의 중간 지점에서 시작
  });
});


//Sestion_activity(moble) 반응형
// Sestion_activity(moble)
const mobileTabs = document.querySelectorAll('.activity_tab_menu li');
const mobileLinks = document.querySelectorAll('.activity_tab_menu a');
const mobileTabContent = document.querySelectorAll('.moble_active_tab_content');

mobileLinks.forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // 탭 스타일 전환
    mobileTabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.style.fontWeight = isActive ? '900' : '500';
      tab.style.color = isActive ? '#B60217' : '#999999';
    });
    
    // 이미지 전환
    mobileLinks.forEach((link, i) => {
      const isActive = i === index;
      link.classList.toggle('active', isActive);
      const img = link.querySelector('img');
      img.src = `image/main/05_sestion.activity/Icon_arrow04(${isActive ? 'y' : 'g'}).png`;
    });

    // 탭 내용 표시
    mobileTabContent.forEach(content => content.style.display = 'none');
    mobileTabContent[index].style.display = 'block';
  });
});

// 첫 번째 탭 콘텐츠를 기본적으로 보이게 설정
mobileTabContent[0].style.display = 'block';
mobileTabContent[1].style.display = 'none';


//Sestion.video
//Initialize Swiper
var swiper = new Swiper(".vidSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//Sestion.sns_letter
// 클릭시 이벤트 처리
// 탭 클릭 시 이벤트 처리
// SNS 레터 포스트 탭
let letterTabs = document.querySelectorAll('.post_tab');
let letterContents = document.querySelectorAll('.tab-content');

letterTabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    letterTabs.forEach(function(t) {
      t.classList.remove('active');
    });
    
    this.classList.add('active');
    
    letterContents.forEach(function(content) {
      content.classList.remove('active');
    });
    
    let tabId = this.getAttribute('data-tab');
    let targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) {
      targetContent.classList.add('active');
    }
    
    // 해당 탭의 swiper 슬라이드 항상 0번째가 먼저 보이게
    let swiper = window[`swiper${tabId}`];
    if (swiper && typeof swiper.slideTo === 'function') {
      swiper.slideTo(0, 0);
      swiper.update();
    }
  });
});

// 첫 번째 SNS 레터 포스트 탭을 기본으로 활성화
letterTabs[0].click();

/* sns_letter_post controls */
//재생 정지버튼 이벤트
document.querySelector('.pause').addEventListener('click', function(){
  swiper1.autoplay.stop();
  swiper2.autoplay.stop();
  swiper3.autoplay.stop();
  swiper4.autoplay.stop();
});
document.querySelector('.play').addEventListener('click', function(){
  swiper1.autoplay.start();
  swiper2.autoplay.start();
  swiper3.autoplay.start();
  swiper4.autoplay.start();
});
/* sns_letter_post tab-content*/
//각각의 swiper 인스턴스 생성
var swiper1 = new Swiper(".swiper-tab-1", {
  slidesPerView : 3,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,},
});
var swiper2 = new Swiper(".swiper-tab-2", {
  slidesPerView : 3,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,},
});
var swiper3 = new Swiper(".swiper-tab-3", {
  slidesPerView : 3,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,},
});
var swiper4 = new Swiper(".swiper-tab-4", {
  slidesPerView : 3,
  spaceBetween: 10, 
  loop : true,  
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false,},
});
/* sns_letter_banner */
document.addEventListener('DOMContentLoaded', function() {
  var banswiper = new Swiper('.banSwiper', {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: '.next1',
          prevEl: '.prev1',
      },
  });

  // 이전 버튼 기능
  document.querySelector('.prev1').addEventListener('click', function() {
    banswiper.slidePrev();
  });

  // 다음 버튼 기능
  document.querySelector('.next1').addEventListener('click', function() {
    banswiper.slideNext();
  });

  // 재생 버튼 기능
  document.querySelector('.play1').addEventListener('click', function() {
    banswiper.autoplay.start();
  });

  // 정지 버튼 기능
  document.querySelector('.pause1').addEventListener('click', function() {
    banswiper.autoplay.stop();
  });
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
  reset: false // 스크롤 올렸다 내릴 때 효과 재적용
});

// 모든 요소에 동일한 효과 적용
sr.reveal('.news_category, .news_tidings, .tidings_link, .news_tab_cont, .news_letter, .tab_menu, .activity_wrap, .video_text, .video_play, .sns_letter_left, .sns_letter_right, .moble_visual, .moble_news, .moble_activity');  

//햄버거 누르면 전체 검색창 뜨기
document.addEventListener('DOMContentLoaded', function() {
  const openFullMenu = document.getElementById('openFullMenu');
  
  openFullMenu.addEventListener('click', function() {
    window.location.href = 'index(fullMenu).html';
  });
});

