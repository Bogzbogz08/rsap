function search() {
    var input = document.getElementById("searchInput").value.toLowerCase().trim();
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
  
    var keywords = {
      "introduction": "introduction",
      "conceptual framework": "conceptual-framework",
      "statement of the problem": "statement-of-the-problem",
      "significance of the study": "significance-of-the-study",
      "scope and limitations": "scope-and-limitations",
      "definition of terms": "definition-of-terms",
      "citations": "citations",
      "synthesis": "synthesis",
      "research design": "research-design",
      "sampling technique": "sampling",
      "participants of the study":"participants",
      "research instrument": "research-instrument",
      "research procedure": "procedure",
      "data analysis":"data",
      "ethical consideration":"ethical"
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
  
