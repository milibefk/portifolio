document.addEventListener('DOMContentLoaded', function () {
    // Your experience data
    const experienceData = [
        { title: 'Web Developer', company: 'ABC Company', year: '2022-2023' },
        { title: 'Front-end Developer', company: 'XYZ Agency', year: '2021-2022' },
        // Add more experiences as needed
    ];

    // Function to populate the experience section
    function populateExperience() {
        const experienceList = document.getElementById('experience-list');

        experienceData.forEach((experience) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${experience.title}</strong> at ${experience.company}, ${experience.year}`;
            experienceList.appendChild(listItem);
        });
    }

    // Call the function to populate experience on page load
    populateExperience();
});
