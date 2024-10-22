// Resources Page Script
if (window.location.pathname.includes('resources.html')) {
    // Get filter dropdown and resource items
    const filter = document.getElementById('resource-filter');
    const resourceItems = document.querySelectorAll('.resource-item');

    // Filter resources based on dropdown selection
    filter.addEventListener('change', function() {
        const selectedType = filter.value;

        resourceItems.forEach(item => {
            const itemType = item.getAttribute('data-type');

            if (selectedType === 'all' || selectedType === itemType) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}
