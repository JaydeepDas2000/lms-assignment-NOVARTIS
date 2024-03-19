const recentCourse = [
    {
        "courseName": "Anatomy and Physiology",
        "categories": "Basic Medical Sciences",
        "description": "Explore the structure and function of the human body, covering topics such as organ systems, tissues, and cellular biology.",
        "course_img": "../assets/course img/mceclip1_1691162811.png"
    },
    {
        "courseName": "Pathology Fundamentals",
        "categories": "Basic Medical Sciences",
        "description": "Learn about the nature and causes of diseases, including cellular pathology, inflammation, and immunopathology.",
        "course_img": "../assets/course img/ImageForArticle_2145_16375579068259097.webp"
    },
];

// Access the JSON data directly from the JavaScript file
const recentCoursesList = document.getElementById('recentCourseList');

// Iterate over the coursesData array and create HTML elements
recentCourse.forEach(course => {
    // Create HTML elements for each course
    const card = document.createElement('div');
    // card.classList.add('col-12', 'col-lg-8', 'col-md-6', 'col-sm-12', 'mb-3');

    // Populate the HTML elements with course data
    card.innerHTML = `
        <div class="card recent-course-card text-bg-dark my-3 mr-2 position-relative">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${course.course_img}" style="height: 200px; width: 100%; object-fit: cover;" class="img-fluid rounded-start" alt="${course.courseName}">
                </div>
                <div class="col-md-8">
                    <div class="card-body py-4">
                        <div class="d-flex-column">
                            <h5 class="card-title">${course.courseName}</h5>
                            <p class="card-text">${course.description}</p>
                            <p class="card-text"><small class="text-body-secondary" style="font-weight: 300; color: #ddd !important">Category: ${course.categories}</small></p>
                            <div class="d-flex flex-row-reverse">
                                <button type="button" class="btn btn-success">Continue Learning</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--progress bar-->
            <div class="progress-bar-container">
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    `;

    // Append the card to the recentCoursesList container
    recentCoursesList.appendChild(card);
});