document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const itemsPerPage = 4;
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;

        // Hide all items
        galleryItems.forEach(item => {
            item.style.display = "none";
        });

        // Display the current page items
        for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
            if (i < galleryItems.length) {
                galleryItems[i].style.display = "block";
            }
        }
    }

    function showNextPage() {
        currentPage++;
        showPage(currentPage);
    }

    function showPreviousPage() {
        currentPage = Math.max(1, currentPage - 1);
        showPage(currentPage);
    }

    document.getElementById("nextBtn").addEventListener("click", showNextPage);
    document.getElementById("prevBtn").addEventListener("click", showPreviousPage);

    // Show the first page initially
    showPage(currentPage);
});
