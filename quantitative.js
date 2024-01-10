function updateProgress() {
  const introCheckbox = document.getElementById("introduction");
  const conceptualCheckbox = document.getElementById("conceptual-frame");
  const problemStatementCheckbox = document.getElementById("problem-statement");
  const significanceCheckbox = document.getElementById("significance-prob");
  const scopeCheckbox = document.getElementById("scope-limit");
  const definitionCheckbox = document.getElementById("definition-terms");
  const reviewCheckbox = document.getElementById("rev-rela-liter");
  const synthesisCheckbox = document.getElementById("synthesis");
  const designCheckbox = document.getElementById("design");
  const participantsCheckbox = document.getElementById("participants");
  const instrumentCheckbox = document.getElementById("instrument");
  const procedureCheckbox = document.getElementById("procedure");
  const dataanalCheckbox = document.getElementById("data-anal");
  const researchQuestionsCheckbox = document.getElementById("research-questions");
  const defineVariablesCheckbox = document.getElementById("define-variables");
  const filterProceduresCheckbox = document.getElementById("filter-procedures");
  const dataAnalysisToolsCheckbox = document.getElementById("data-analysis-tools");
  const varietyAnalysesCheckbox = document.getElementById("variety-analyses");
  const typesTablesCheckbox = document.getElementById("types-tables");
  const summaryCheckbox = document.getElementById("summary");
  const conclusionCheckbox = document.getElementById("conclusion");
  const recommendationsCheckbox = document.getElementById("recommendations");

  const introProgress = introCheckbox.checked ? 6 : 0;
  const conceptualProgress = conceptualCheckbox.checked ? 4 : 0;
  const problemStatementProgress = problemStatementCheckbox.checked ? 6 : 0;
  const significanceProgress = significanceCheckbox.checked ? 3 : 0;
  const scopeProgress = scopeCheckbox.checked ? 5 : 0;
  const definitionProgress = definitionCheckbox.checked ? 6 : 0;
  const reviewProgress = reviewCheckbox.checked ? 5 : 0;
  const synthesisProgress = synthesisCheckbox.checked ? 5 : 0;
  const designProgress = designCheckbox.checked ? 2 : 0;
  const participantsProgress = participantsCheckbox.checked ? 4 : 0;
  const instrumentProgress = instrumentCheckbox.checked ? 5 : 0;
  const procedureProgress = procedureCheckbox.checked ? 6 : 0;
  const dataanalProgress = dataanalCheckbox.checked ? 5 : 0;
  const researchQuestionsProgress = researchQuestionsCheckbox.checked ? 2 : 0;
  const defineVariablesProgress = defineVariablesCheckbox.checked ? 3 : 0;
  const filterProceduresProgress = filterProceduresCheckbox.checked ? 4 : 0;
  const dataAnalysisToolsProgress = dataAnalysisToolsCheckbox.checked ? 3 : 0;
  const varietyAnalysesProgress = varietyAnalysesCheckbox.checked ? 3 : 0;
  const typesTablesProgress = typesTablesCheckbox.checked ? 5 : 0;
  const summaryProgress = summaryCheckbox.checked ? 5 : 0;
  const conclusionProgress = conclusionCheckbox.checked ? 6 : 0;
  const recommendationsProgress = recommendationsCheckbox.checked ? 5 : 0;

  const totalProgress = introProgress + conceptualProgress + problemStatementProgress +
      significanceProgress + scopeProgress + definitionProgress + reviewProgress +
      synthesisProgress + designProgress + participantsProgress + instrumentProgress +
      procedureProgress + dataanalProgress + researchQuestionsProgress +
      defineVariablesProgress + filterProceduresProgress + dataAnalysisToolsProgress +
      varietyAnalysesProgress + typesTablesProgress + summaryProgress + conclusionProgress + recommendationsProgress ;

  const overallProgressPercentage = (totalProgress / 98) * 100;

  document.getElementById("progress-introduction").value = introProgress;
  document.getElementById("progress-conceptual").value = conceptualProgress;
  document.getElementById("progress-problem-statement").value = problemStatementProgress;
  document.getElementById("progress-significance").value = significanceProgress;
  document.getElementById("progress-scope").value = scopeProgress;
  document.getElementById("progress-definition").value = definitionProgress;
  document.getElementById("progress-review").value = reviewProgress;
  document.getElementById("progress-synthesis").value = synthesisProgress;
  document.getElementById("progress-design").value = designProgress;
  document.getElementById("progress-participants").value = participantsProgress;
  document.getElementById("progress-instrument").value = instrumentProgress;
  document.getElementById("progress-procedure").value = procedureProgress;
  document.getElementById("progress-data-anal").value = dataanalProgress;

  document.getElementById("progress-research-questions").value = researchQuestionsProgress;
  document.getElementById("progress-define-variables").value = defineVariablesProgress;
  document.getElementById("progress-filter-procedures").value = filterProceduresProgress;
  document.getElementById("progress-data-analysis-tools").value = dataAnalysisToolsProgress;
  document.getElementById("progress-variety-analyses").value = varietyAnalysesProgress;
  document.getElementById("progress-types-tables").value = typesTablesProgress;
  document.getElementById("progress-summary").value = summaryProgress;
  document.getElementById("progress-conclusion").value = conclusionProgress;
  document.getElementById("progress-recommendations").value = recommendationsProgress;


  const overallProgressBar = document.getElementById("overall-progress");
  overallProgressBar.value = overallProgressPercentage;

  const progressText = document.getElementById("progress-text");
  progressText.textContent = overallProgressPercentage.toFixed(2) + "%";

  localStorage.setItem("introCheckbox", introCheckbox.checked);
  localStorage.setItem("conceptualCheckbox", conceptualCheckbox.checked);
  localStorage.setItem("problemStatementCheckbox", problemStatementCheckbox.checked);
  localStorage.setItem("significanceCheckbox", significanceCheckbox.checked);
  localStorage.setItem("scopeCheckbox", scopeCheckbox.checked);
  localStorage.setItem("definitionCheckbox", definitionCheckbox.checked);
  localStorage.setItem("reviewCheckbox", reviewCheckbox.checked);
  localStorage.setItem("synthesisCheckbox", synthesisCheckbox.checked);
  localStorage.setItem("designCheckbox", designCheckbox.checked);
  localStorage.setItem("participantsCheckbox", participantsCheckbox.checked);
  localStorage.setItem("instrumentCheckbox", instrumentCheckbox.checked);
  localStorage.setItem("procedureCheckbox", procedureCheckbox.checked);
  localStorage.setItem("dataanalCheckbox", dataanalCheckbox.checked);

  localStorage.setItem("researchQuestionsCheckbox", researchQuestionsCheckbox.checked);
  localStorage.setItem("defineVariablesCheckbox", defineVariablesCheckbox.checked);
  localStorage.setItem("filterProceduresCheckbox", filterProceduresCheckbox.checked);
  localStorage.setItem("dataAnalysisToolsCheckbox", dataAnalysisToolsCheckbox.checked);
  localStorage.setItem("varietyAnalysesCheckbox", varietyAnalysesCheckbox.checked);
  localStorage.setItem("typesTablesCheckbox", typesTablesCheckbox.checked);
  localStorage.setItem("summaryCheckbox", summaryCheckbox.checked);
  localStorage.setItem("conclusionCheckbox", conclusionCheckbox.checked);
  localStorage.setItem("recommendationsCheckbox", recommendationsCheckbox.checked);
}

function restoreProgress() {
  const introCheckbox = document.getElementById("introduction");
  const conceptualCheckbox = document.getElementById("conceptual-frame");
  const problemStatementCheckbox = document.getElementById("problem-statement");
  const significanceCheckbox = document.getElementById("significance-prob");
  const scopeCheckbox = document.getElementById("scope-limit");
  const definitionCheckbox = document.getElementById("definition-terms");
  const reviewCheckbox = document.getElementById("rev-rela-liter");
  const synthesisCheckbox = document.getElementById("synthesis");
  const designCheckbox = document.getElementById("design");
  const participantsCheckbox = document.getElementById("participants");
  const instrumentCheckbox = document.getElementById("instrument");
  const procedureCheckbox = document.getElementById("procedure");
  const dataanalCheckbox = document.getElementById("data-anal");
  const researchQuestionsCheckbox = document.getElementById("research-questions");
  const defineVariablesCheckbox = document.getElementById("define-variables");
  const filterProceduresCheckbox = document.getElementById("filter-procedures");
  const dataAnalysisToolsCheckbox = document.getElementById("data-analysis-tools");
  const varietyAnalysesCheckbox = document.getElementById("variety-analyses");
  const typesTablesCheckbox = document.getElementById("types-tables");
  const summaryCheckbox = document.getElementById("summary");
  const conclusionCheckbox = document.getElementById("conclusion");
  const recommendationsCheckbox = document.getElementById("recommendations");

  const introCheckboxState = localStorage.getItem("introCheckbox");
  const conceptualCheckboxState = localStorage.getItem("conceptualCheckbox");
  const problemStatementCheckboxState = localStorage.getItem("problemStatementCheckbox");
  const significanceCheckboxState = localStorage.getItem("significanceCheckbox");
  const scopeCheckboxState = localStorage.getItem("scopeCheckbox");
  const definitionCheckboxState = localStorage.getItem("definitionCheckbox");
  const reviewCheckboxState = localStorage.getItem("reviewCheckbox");
  const synthesisCheckboxState = localStorage.getItem("synthesisCheckbox");
  const designCheckboxState = localStorage.getItem("designCheckbox");
  const participantsCheckboxState = localStorage.getItem("participantsCheckbox");
  const instrumentCheckboxState = localStorage.getItem("instrumentCheckbox");
  const procedureCheckboxState = localStorage.getItem("procedureCheckbox");
  const dataanalCheckboxState = localStorage.getItem("dataanalCheckbox");
  const researchQuestionsCheckboxState = localStorage.getItem("researchQuestionsCheckbox");
  const defineVariablesCheckboxState = localStorage.getItem("defineVariablesCheckbox");
  const filterProceduresCheckboxState = localStorage.getItem("filterProceduresCheckbox");
  const dataAnalysisToolsCheckboxState = localStorage.getItem("dataAnalysisToolsCheckbox");
  const varietyAnalysesCheckboxState = localStorage.getItem("varietyAnalysesCheckbox");
  const typesTablesCheckboxState = localStorage.getItem("typesTablesCheckbox");
  const summaryCheckboxState = localStorage.getItem("summaryCheckbox");
  const conclusionCheckboxState = localStorage.getItem("conclusionCheckbox");
  const recommendationsCheckboxState = localStorage.getItem("recommendationsCheckbox");

  if (introCheckboxState !== null) {
      introCheckbox.checked = introCheckboxState === "true";
  }

  if (conceptualCheckboxState !== null) {
    conceptualCheckbox.checked = conceptualCheckboxState === "true";
  }

  if (problemStatementCheckboxState !== null) {
      problemStatementCheckbox.checked = problemStatementCheckboxState === "true";
  }

  if (significanceCheckboxState !== null) {
    significanceCheckbox.checked = significanceCheckboxState === "true";
  }

  if (scopeCheckboxState !== null) {
    scopeCheckbox.checked = scopeCheckboxState === "true";
  }

  if (definitionCheckboxState !== null) {
    definitionCheckbox.checked = definitionCheckboxState === "true";
  }

  if (reviewCheckboxState !== null) {
    reviewCheckbox.checked = reviewCheckboxState === "true";
  }

  if (synthesisCheckboxState !== null) {
    synthesisCheckbox.checked = synthesisCheckboxState === "true";
  }

  if (designCheckboxState !== null) {
    designCheckbox.checked = designCheckboxState === "true";
  }

  if (participantsCheckboxState !== null) {
    participantsCheckbox.checked = participantsCheckboxState === "true";
  }

  if (instrumentCheckboxState !== null) {
    instrumentCheckbox.checked = instrumentCheckboxState === "true";
  }

  if (procedureCheckboxState !== null) {
    procedureCheckbox.checked = procedureCheckboxState === "true";
  }

  if (dataanalCheckboxState !== null) {
    dataanalCheckbox.checked = dataanalCheckboxState === "true";
  }

  if (researchQuestionsCheckboxState !== null) {
    researchQuestionsCheckbox.checked = researchQuestionsCheckboxState === "true";
  }

  if (defineVariablesCheckboxState !== null) {
    defineVariablesCheckbox.checked = defineVariablesCheckboxState === "true";
  }

  if (filterProceduresCheckboxState !== null) {
    filterProceduresCheckbox.checked = filterProceduresCheckboxState === "true";
  }

  if (dataAnalysisToolsCheckboxState !== null) {
    dataAnalysisToolsCheckbox.checked = dataAnalysisToolsCheckboxState === "true";
  }

  if (varietyAnalysesCheckboxState !== null) {
    varietyAnalysesCheckbox.checked = varietyAnalysesCheckboxState === "true";
  }

  if (typesTablesCheckboxState !== null) {
    typesTablesCheckbox.checked = typesTablesCheckboxState === "true";
  }

  if (summaryCheckboxState !== null) {
    summaryCheckbox.checked = summaryCheckboxState === "true";
  }

  if (conclusionCheckboxState !== null) {
    conclusionCheckbox.checked = conclusionCheckboxState === "true";
  }

  if (recommendationsCheckboxState !== null) {
    recommendationsCheckbox.checked = recommendationsCheckboxState === "true";
  }

  updateProgress();
}

document.addEventListener("DOMContentLoaded", restoreProgress);

function search() {
var input = document.getElementById("searchInput").value.toLowerCase().trim();
var resultsContainer = document.getElementById("searchResults");
resultsContainer.innerHTML = "";

var keywords = {
  "introduction": "introduction",
  "conceptual framework": "conceptual-frame",
  "statement of the problem": "problem-statement",
  "significance of the study": "significance-prob",
  "scope and limitations": "scope-limit",
  "definition of terms": "definition-terms",
  "citations": "rev-rela-liter",
  "synthesis": "synthesis",
  "research design": "design",
  "participants of the study": "participants",
  "research instrument": "instrument",
  "statistical treatment of data": "data-anal",
  "identify your research questions": "research-questions",
  "define variables you will be collecting and measuring": "define-variables",
  "consider the procedures that will be used to filter out unnecessary data": "filter-procedures",
  "specify the quantitative software data analysis tools that will be used": "data-analysis-tools",
  "to describe, analyze, and summarize data, conduct a variety of analyses which are information broken down into smaller pieces": "variety-analyses",
  "discuss the various types of tables that will be used to convey statistical reports": "types-tables",
  "summary of findings":"summary",
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
    behavior: "smooth",
  });
}
}
