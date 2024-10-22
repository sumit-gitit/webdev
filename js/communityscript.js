
// Community Page Script
if (window.location.pathname.includes('community.html')) {
    // Toggle comments visibility when the "View Comments" button is clicked
    const viewCommentsButtons = document.querySelectorAll('.view-comments-btn');

    viewCommentsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commentsSection = button.nextElementSibling;
            if (commentsSection.style.display === 'none') {
                commentsSection.style.display = 'block';
                button.textContent = 'Hide Comments';
            } else {
                commentsSection.style.display = 'none';
                button.textContent = 'View Comments';
            }
        });
    });

    // Handle new discussion submission
    document.getElementById('discussion-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the values from the form
        const topic = document.getElementById('topic').value;
        const discussionText = document.getElementById('discussion-text').value;

        // Create a new discussion element
        const newDiscussion = document.createElement('div');
        newDiscussion.classList.add('discussion');

        newDiscussion.innerHTML = `
            <h3>${topic}</h3>
            <p>${discussionText}</p>
            <button class="view-comments-btn">View Comments</button>
            <div class="comments-section" style="display: none;">
                <p>No comments yet.</p>
            </div>
        `;

        // Append the new discussion to the discussions section
        document.getElementById('discussions').appendChild(newDiscussion);

        // Reset the form
        document.getElementById('discussion-form').reset();

        // Re-add event listener for the new "View Comments" button
        newDiscussion.querySelector('.view-comments-btn').addEventListener('click', function() {
            const commentsSection = this.nextElementSibling;
            if (commentsSection.style.display === 'none') {
                commentsSection.style.display = 'block';
                this.textContent = 'Hide Comments';
            } else {
                commentsSection.style.display = 'none';
                this.textContent = 'View Comments';
            }
        });
    });
}
