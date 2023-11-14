document.addEventListener('DOMContentLoaded', function () {
  const feedbackBox = document.querySelector('.feedback-box');
  const rate = document.getElementById('starRating');
  const commentBox = document.getElementById('commentBox');

  feedbackBox.addEventListener('mouseenter', function () {
    rate.style.display = 'block';
  });

  feedbackBox.addEventListener('mouseleave', function () {
    if (!rate.contains(document.activeElement)) {
      rate.style.display = 'none';
      // Comment out the line below so that the comment box doesn't hide on mouseleave
      // commentBox.style.display = 'none';
    }
  });

  rate.addEventListener('change', function () {
    // Instead of displaying the comment box on every change event, 
    // check if a star is selected (assuming a value greater than 0 means a star is selected)
    if (parseInt(rate.value) > 0) {
      commentBox.style.display = 'block';
    }
  });
});
