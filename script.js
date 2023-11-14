document.addEventListener('DOMContentLoaded', function () {
  const rate = document.getElementById('starRating');
  const commentBox = document.getElementById('commentBox');

  rate.addEventListener('change', function () {
    commentBox.style.display = 'block';
  });
});
