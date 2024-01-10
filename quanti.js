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
      "participants of the study": "participants-of-the-study",
      "research instrument": "research-instrument",
      "research procedure": "research-procedure",
      "statistical treatment of data": "statistical-treatment-of-data",
      "identify your research questions": "identify-your-research-questions",
      "define variables you will be collecting and measuring": "define-variables",
      "consider the procedures that will be used to filter out unnecessary data": "consider-procedures",
      "specify the quantitative software data analysis tools that will be used": "specify-software-tools",
      "to describe, analyze, and summarize data, conduct a variety of analyses which are information broken down into smaller pieces": "conduct-variety-of-analyses",
      "discuss the various types of tables that will be used to convey statistical reports.": "discuss-types-of-tables",
      "summary of finding":"summary",
      "conclusion":"conclusion",
      "recommendations":"recommendations"
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
