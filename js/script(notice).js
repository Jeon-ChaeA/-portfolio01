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



//notice_pagination
// 페이지네이션 관련 변수 설정
let rowsPerPage = 10; // 한 페이지에 표시할 행 수
let rows = document.querySelectorAll('#my-table tbody tr'); // 테이블의 모든 행
let rowsCount = rows.length; // 전체 행 수
let pageCount = Math.ceil(rowsCount / rowsPerPage); // 전체 페이지 수
let numbers = document.querySelector('#numbers'); // 페이지 번호를 표시할 요소

// 페이지네이션 버튼 요소 선택
let prevPageBtn = document.querySelector('.pagination .fa-angles-left'); 
let nextPageBtn = document.querySelector('.pagination .fa-angles-right');
let prevBtn = document.querySelector('.pagination .fa-angle-left'); 
let nextBtn = document.querySelector('.pagination .fa-angle-right'); 

let currentPage = 0; // 현재 페이지 번호
let maxPageNum = 10; // 한 그룹에 표시할 최대 페이지 수

function updateMaxPageNum() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    maxPageNum = 6; // 화면 너비가 768px 이하일 때
  } else {
    maxPageNum = 10; // 화면 너비가 768px 초과일 때
  }
  updatePagination(); // 페이지네이션 업데이트 추가
}

// 윈도우 리사이즈 이벤트에 리스너 추가
window.addEventListener('resize', function() {
  updateMaxPageNum();
});



// 현재 페이지 번호를 표시하는 span 요소 선택
let currentPageSpan = document.querySelector('.entire_left p span:nth-child(2)');

// 페이지 번호 생성
for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="#" class="page-link">${i}</a></li>`;
}
let numberBtn = numbers.querySelectorAll('a'); // 생성된 페이지 번호 버튼들

// 페이지 설정 함수
function setPage(idx) {
  currentPage = idx;
  displayRows();
  updatePagination();
  
  // 모든 페이지 번호에서 active 클래스 제거
  numberBtn.forEach(btn => btn.classList.remove('active'));
  // 현재 페이지 번호에 active 클래스 추가
  numberBtn[idx].classList.add('active');
}

// 행 표시 함수
function displayRows() {
  let start = rowsPerPage * currentPage;
  let end = start + rowsPerPage;
  let paginatedItems = Array.from(rows).slice(start, end);

  rows.forEach(row => row.style.display = 'none');
  paginatedItems.forEach(item => item.style.display = '');

  updateCurrentPage(currentPage + 1);
}

// 페이지 번호 업데이트 함수
function updateCurrentPage(pageNum) {
  currentPageSpan.textContent = pageNum;
}

// 페이지네이션 업데이트 함수
function updatePagination() {
  let pageGroup = Math.floor(currentPage / maxPageNum);
  let lastNumber = (pageGroup + 1) * maxPageNum > pageCount ? pageCount : (pageGroup + 1) * maxPageNum;
  let firstNumber = lastNumber - maxPageNum + 1;

  // 현재 페이지 그룹에 해당하는 페이지 번호만 표시
  for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].parentElement.style.display = (i >= firstNumber - 1 && i < lastNumber) ? 'inline-block' : 'none';
  }

  // 활성 페이지 스타일 적용
  numberBtn.forEach((btn, i) => {
    if (i === currentPage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 페이지 이동 버튼 표시/숨김 설정
  prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = currentPage === pageCount - 1 ? 'none' : 'inline-block';
  prevPageBtn.style.display = pageGroup === 0 ? 'none' : 'inline-block';
  nextPageBtn.style.display = pageGroup === Math.floor((pageCount - 1) / maxPageNum) ? 'none' : 'inline-block';
}

// 페이지 번호 버튼에 클릭 이벤트 추가
numberBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    setPage(idx);
  });
});

// 초기 페이지 표시
setPage(0);

// 이전 페이지 버튼 클릭 이벤트
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    setPage(currentPage - 1);
  }
});

// 다음 페이지 버튼 클릭 이벤트
nextBtn.addEventListener('click', () => {
  if (currentPage < pageCount - 1) {
    setPage(currentPage + 1);
  }
});

// 이전 페이지 그룹 버튼 클릭 이벤트
prevPageBtn.addEventListener('click', () => {
  let pageGroup = Math.floor(currentPage / maxPageNum);
  if (pageGroup > 0) {
    setPage((pageGroup - 1) * maxPageNum);
  }
});

// 다음 페이지 그룹 버튼 클릭 이벤트
nextPageBtn.addEventListener('click', () => {
  let pageGroup = Math.floor(currentPage / maxPageNum);
  if ((pageGroup + 1) * maxPageNum < pageCount) {
    setPage((pageGroup + 1) * maxPageNum);
  }
});