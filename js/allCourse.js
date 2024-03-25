const allCourse = [
    {
      "name": "Anatomy and Physiology",
      "category": "Basic Medical Sciences",
      "description": "Explore the structure and function of the human body, covering topics such as organ systems, tissues, and cellular biology.",
      "image": "./assets/allCourse img/1.webp"
    },
    {
      "name": "Pathology Fundamentals",
      "category": "Basic Medical Sciences",
      "description": "Learn about the nature and causes of diseases, including cellular pathology, inflammation, and immunopathology.",
      "image": "./assets/allCourse img/2.webp"
    },
    {
      "name": "Medical Ethics and Professionalism",
      "category": "Medical Ethics and Humanities",
      "description": "Examine ethical principles and dilemmas in healthcare practice, focusing on patient autonomy, confidentiality, and informed consent.",
      "image": "./assets/allCourse img/3.webp"
    },
    {
      "name": "Medical Imaging Techniques",
      "category": "Diagnostic Imaging",
      "description": "Gain insights into various medical imaging modalities such as X-ray, MRI, CT, and ultrasound, and their clinical applications.",
      "image": "./assets/allCourse img/4.webp"
    },
    {
      "name": "Pediatric Care and Development",
      "category": "Pediatrics",
      "description": "Explore the unique healthcare needs of children, covering growth and development, common pediatric diseases, and preventive care.",
      "image": "./assets/allCourse img/5.webp"
    },
    {
      "name": "Emergency Medicine Essentials",
      "category": "Emergency Medicine",
      "description": "Acquire essential skills for managing acute medical emergencies, including triage, resuscitation, and trauma care.",
      "image": "./assets/allCourse img/6.webp"
    },
]

const courseList = document.getElementById("allCourseList");

allCourse.forEach(courses => {
    const card = document.createElement('div');
    card.classList.add('card-body-wrapper')
    card.innerHTML = `
                <div class="card text-bg-dark my-3 position-relative all-course-card" style="">
                    <img src="${courses.image}" style="height: 200px; width: 100%; object-fit: cover;" class="card-img-top">
                    <div class="card-body d-flex">
                        <div class="d-flex flex-column justify-content-between">
                            <h5 class="card-title">${courses.name}</h5>
                            <div style="overflow-y: auto; height: 100px;">
                                <p class="card-text">${courses.description}</p>
                            </div>
                            <p class="card-text"><small class="text-body-secondary" style="font-weight: 300; color: #ddd !important">Category: ${courses.category}</small></p>
                            <div class="d-flex flex-row-reverse">
                                <a href="#" class="btn btn-warning t-auto">Start Learning</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
    
    courseList.appendChild(card);
})
  

// const courseList = document.getElementById("allCourseList");
// function displayCourses(courseArray) {
//     courseList.innerHTML = "";
//     courseArray.forEach(course => {
//         const card = `
//         <div class="card" style="min-width: 300px; width:100%">
//             <img src="${course.image}" class="card-img-top">
//             <div class="card-body">
//                 <h5 class="card-title">${course.name}</h5>
//                 <p class="card-text">${course.description}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `
//     })
// }
