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
      commentBox.style.display = 'none';
    }
  });

  rate.addEventListener('change', function () {
    if (rate.querySelector(':checked')) {
      commentBox.style.display = 'block';
    }
  });
});
