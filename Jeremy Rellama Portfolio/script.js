let section=document.querySelectorAll('section')
let navlink=document.querySelectorAll('header nav a')

window.onscroll=()=>{
  section.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>offset && top<offset + height){
      navlink.forEach(links=>{
        links.classList.remove('active')
        document.querySelector('header nav a[href*='+id+']'). classList.add('active')
      })
    }
  })
}

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  console.log(scrolled);

  if (scrolled >= 1290.4000244140625 && scrolled < 2526.39990234375) {
      changeColor(true);
  } else {
      changeColor(false);
  }
});

function changeColor(shouldChange) {
  var aboutLink = document.querySelector("#aboutList li:nth-child(3) a");
  var otherLinks = document.querySelectorAll("#aboutList li:not(:nth-child(3)) a");

  if (shouldChange) {
      aboutLink.style.color = "#FC6736";
      otherLinks.forEach(link => {
          link.style.color = "white";
      });
  } else {
      aboutLink.style.color = ""; // Revert to default color
      otherLinks.forEach(link => {
          link.style.color = ""; // Revert to default color
      });
  }
}

