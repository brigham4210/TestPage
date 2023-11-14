document.addEventListener('DOMContentLoaded', function () {
  const feedbackBox = document.querySelector('.feedback-box');
  const rate = document.getElementById('starRating');
  const commentBox = document.getElementById('commentBox');

  // Hide the comment box and stars initially
  commentBox.style.display = 'none';
  rate.style.display = 'none';

  feedbackBox.addEventListener('mouseenter', function () {
    rate.style.display = 'block';
  });

  feedbackBox.addEventListener('mouseleave', function () {
    if (!rate.contains(document.activeElement)) {
      rate.style.display = 'none';
    }
  });

  rate.addEventListener('change', function () {
    // Display the comment box when a star is clicked
    commentBox.style.display = 'block';

    // Hide the stars after a star is clicked
    rate.style.display = 'none';
  });

  rate.addEventListener('mouseenter', function () {
    // Show the stars when the user hovers over the rating area
    rate.style.display = 'block';
  });

  rate.addEventListener('mouseleave', function () {
    if (!rate.contains(document.activeElement)) {
      // Hide the stars when the user leaves the rating area, but not if a star is clicked
      rate.style.display = 'none';
    }
  });
});
