//hearder 
//검색창
function toggleSearch() {
  const searchBar = document.getElementById('searchBar');
  const searchIcon = document.getElementById('icon');

  // 검색창의 표시 여부를 토글
  if (searchBar.style.display === "block") {
      searchBar.style.display = "none";
      // 아이콘을 다시 돋보기로 변경
      searchIcon.src = "image/main/01_header/Icon_reading glasses.png"; 
  } else {
      searchBar.style.display = "block";
      // 아이콘을 X로 변경
      searchIcon.src = "image/main/01_header/Icon_X.png";
  }
}

//main
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu_main');
  
  menuItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      const categoryId = `category0${index + 1}`;
      const targetCategory = document.getElementById(categoryId);
      
      if (targetCategory) {
        const rect = targetCategory.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - 10; // 10px 위로 조정

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

//창 닫기
document.addEventListener('DOMContentLoaded', function() {
  const closeFullMenu = document.getElementById('closeFullMenu');
  
  closeFullMenu.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
});