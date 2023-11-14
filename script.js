document.addEventListener('DOMContentLoaded', function () {
  const feedbackBox = document.querySelector('.feedback-box');
  const rate = document.getElementById('starRating');
  const commentBox = document.getElementById('commentBox');

  feedbackBox.addEventListener('mouseenter', function () {
    rate.style.display = 'block';
    commentBox.style.display = 'block';
  });

  feedbackBox.addEventListener('mouseleave', function () {
    rate.style.display = 'none';
    commentBox.style.display = 'none';
  });

  rate.addEventListener('change', function () {
    commentBox.style.display = 'block';
  });
});
