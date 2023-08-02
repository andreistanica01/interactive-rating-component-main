// 'use strict';
const container = document.querySelector('.container');

const pt1 = document.getElementById('1pt');
const pt2 = document.getElementById('2pt');
const pt3 = document.getElementById('3pt');
const pt4 = document.getElementById('4pt');
const pt5 = document.getElementById('5pt');

const submitButton = document.querySelector('.submit-btn');


const submittedContainer = document.querySelector('.submitted-container');

const selectionParagraph = document.querySelector('.selection-p');




pt1.addEventListener("click", ptSelect1);
function ptSelect1() {
  pt1.classList.add('review-button-selected');
  pt2.classList.remove('review-button-selected');
  pt3.classList.remove('review-button-selected');
  pt4.classList.remove('review-button-selected');
  pt5.classList.remove('review-button-selected');
};

pt2.addEventListener('click', ptSelect2);
function ptSelect2() {
  pt2.classList.add('review-button-selected');
  pt1.classList.remove('review-button-selected');
  pt3.classList.remove('review-button-selected');
  pt4.classList.remove('review-button-selected');
  pt5.classList.remove('review-button-selected');
};

pt3.addEventListener('click', ptSelect3);
function ptSelect3() {
  pt3.classList.add('review-button-selected');
  pt1.classList.remove('review-button-selected');
  pt2.classList.remove('review-button-selected');
  pt4.classList.remove('review-button-selected');
  pt5.classList.remove('review-button-selected');
};

pt4.addEventListener('click', ptSelect4);
function ptSelect4() {
  pt4.classList.add('review-button-selected');
  pt1.classList.remove('review-button-selected');
  pt2.classList.remove('review-button-selected');
  pt3.classList.remove('review-button-selected');
  pt5.classList.remove('review-button-selected');
};

pt5.addEventListener('click', ptSelect5);
function ptSelect5() {
  pt5.classList.add('review-button-selected');
  pt1.classList.remove('review-button-selected');
  pt2.classList.remove('review-button-selected');
  pt3.classList.remove('review-button-selected');
  pt4.classList.remove('review-button-selected');
};

submitButton.addEventListener('click', submitPts);
function submitPts() {
  if (pt1.classList == "review-button-selected" || pt2.classList == "review-button-selected"
    || pt3.classList == "review-button-selected" || pt4.classList == "review-button-selected" || pt5.classList == "review-button-selected") {
    container.classList.add('display-none');
    submittedContainer.classList.remove('display-none');
  }
  if (pt1.classList == "review-button-selected") {
    selectionParagraph.innerHTML = "You selected 1 out of 5";
  } else if (pt2.classList == "review-button-selected") {
    selectionParagraph.innerHTML = "You selected 2 out of 5";
  } else if (pt3.classList == "review-button-selected") {
    selectionParagraph.innerHTML = "You selected 3 out of 5";
  } else if (pt4.classList == "review-button-selected") {
    selectionParagraph.innerHTML = "You selected 4 out of 5";
  } else if (pt5.classList == "review-button-selected") {
    selectionParagraph.innerHTML = "You selected 5 out of 5";
  }

};
