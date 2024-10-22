// Toggle details section for professionals
function showDetails(detailsId) {
    const detailsSection = document.getElementById(detailsId);
    if (detailsSection.style.display === 'none') {
        detailsSection.style.display = 'block';
    } else {
        detailsSection.style.display = 'none';
    }
}

// Open appointment scheduling form
function openForm(formId) {
    const formSection = document.getElementById(formId);
    if (formSection.style.display === 'none') {
        formSection.style.display = 'block';
    } else {
        formSection.style.display = 'none';
    }
}
