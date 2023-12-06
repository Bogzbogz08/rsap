function search() {
    var input = document.getElementById("searchInput").value.toLowerCase().trim();
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
  
    var keywords = {
      "case study": "case",
      "ethnography": "ethnography",
      "historical study": "historical",
      "phenomology": "phenomology",
      "grounded theory": "grounded",
      "quota sampling": "quota",
      "voluntary sampling": "voluntary",
      "purposive or judgemental sampling": "purposive",
      "snowball sampling": "snowball",
  };
  
    if (input !== "") {
      for (var keyword in keywords) {
        if (keyword.includes(input)) {
          var sectionId = keywords[keyword];
          var link = document.createElement("a");
          link.href = "javascript:scrollToSection('" + sectionId + "')";
          link.textContent = keyword;
          resultsContainer.appendChild(link);
        }
      }
    }
  }
  
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      var scrollPosition = section.offsetTop - 70;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var animateElements = document.querySelectorAll('h1, h2, h3, p');

    animateElements.forEach(function (element) {
        element.classList.add('animation-complete');
    });
});
  