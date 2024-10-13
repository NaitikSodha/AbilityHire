const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        location: "New York, NY",
        disability: "Hand injured",
        description: "We are looking for a talented frontend developer proficient in React and JavaScript.",
        salary: "₹80,000 - ₹100,000 per annum",
        logo: "html.png"
    },
    {
        title: "Backend Engineer",
        company: "Innovate Labs",
        location: "San Francisco, CA",
        disability: "Leg injured",
        description: "Backend Engineer with experience in Node.js, MongoDB, and cloud services.",
        salary: "₹100,000 - ₹120,000 per annum",
        logo: "python.png"
    },
    {
        title: "UI/UX Designer",
        company: "Creative Minds",
        location: "Austin, TX",
        disability: "Brain injured",
        description: "Seeking a creative UI/UX Designer to build intuitive and attractive user interfaces.",
        salary: "₹70,000 - ₹90,000 per annum",
        logo: "html.png"
    },
    {
        title: "DevOps Engineer",
        company: "Cloud Corp",
        location: "Remote",
        disability: "Hand injured",
        description: "DevOps Engineer with expertise in AWS, CI/CD pipelines, and infrastructure as code.",
        salary: "₹110,000 - ₹130,000 per annum",
        logo: "python.png"
    },
    {
        title: "Game Developer",
        company: "Creative Minds",
        location: "Austin, TX",
        disability: "Hand injured",
        description: "Seeking a creative UI/UX Designer to build intuitive and attractive user interfaces.",
        salary: "₹70,000 - ₹90,000 per annum",
        logo: "html.png"
    },
    {
        title: "DevOps Engineer",
        company: "Cloud Corp",
        location: "Remote",
        disability: "Leg injured",
        description: "DevOps Engineer with expertise in AWS, CI/CD pipelines, and infrastructure as code.",
        salary: "₹110,000 - ₹130,000 per annum",
        logo: "python.png"
    }
];

let filteredJobs = jobs; // Initialize filteredJobs with all jobs

window.onload = function() {
    const jobTemplate = document.querySelector('.job-listing-template');
    const jobContainer = document.querySelector('.job-listings-container');

    // Function to display jobs
    function displayJobs(jobsToDisplay) {
        jobContainer.innerHTML = ''; // Clear the container
        jobsToDisplay.forEach(job => {
            // Clone the template
            const jobClone = jobTemplate.cloneNode(true);

            // Populate the template with job data
            jobClone.querySelector('.job-title').textContent = job.title;
            jobClone.querySelector('.company-name').textContent = job.company;
            jobClone.querySelector('.job-location').textContent = job.location;
            jobClone.querySelector('.job-disability').textContent = job.disability;
            jobClone.querySelector('.job-description').textContent = job.description;
            jobClone.querySelector('.job-salary').textContent = job.salary;
            jobClone.querySelector('.c-logo').src = job.logo;
            const applyButton = jobClone.querySelector('.apply-now');
            applyButton.href = `apply.html?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}&location=${encodeURIComponent(job.location)}&disability=${encodeURIComponent(job.disability)}`;
            
            // Append the populated template to the container
            jobContainer.appendChild(jobClone);
        });

        // Remove the original template
        jobTemplate.remove();
    }

    
    // Initial display of jobs
    displayJobs(jobs);


    // Dropdown functionality for sorting
    const sortButton = document.getElementById('sort-button');
    const sortOptions = document.getElementById('sort-options');
    sortButton.addEventListener('click', function() {
        // Toggle the dropdown display
        sortOptions.style.display = sortOptions.style.display === 'none' ? 'block' : 'none';
    });

    // Sort options functionality
    const sortOptionElements = document.querySelectorAll('.sort-option');
    sortOptionElements.forEach(option => {
        option.addEventListener('click', function() {
            const sortOrder = this.getAttribute('data-order');
            let sortedJobs;

            // Determine sorting or no sorting based on sortOrder
            if (sortOrder === 'none') {
                sortedJobs = filteredJobs; // Show filtered jobs without sorting
            } else {
                sortedJobs = filteredJobs.slice().sort((a, b) => {
                    const salaryA = parseInt(a.salary.split(' - ')[0].replace(/\₹|,/g, ''));
                    const salaryB = parseInt(b.salary.split(' - ')[0].replace(/\₹|,/g, ''));

                    return sortOrder === 'asc' ? salaryA - salaryB : salaryB - salaryA; // Ascending or descending sort
                });
            }

            displayJobs(sortedJobs); // Display the sorted jobs
            sortOptions.style.display = 'none'; // Hide dropdown after selection
        });
    });
    // Hide dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!sortButton.contains(event.target) && !sortOptions.contains(event.target)) {
            sortOptions.style.display = 'none';
        }
    });


    // Dropdown functionality for filtering
    const filterButton = document.getElementById('filter-button');
    const filterOptions = document.getElementById('filter-options');
    const jobSearchInput = document.getElementById('jobSearch');
    filterButton.addEventListener('click', function() {
        // Toggle the dropdown display
        filterOptions.style.display = filterOptions.style.display === 'none' ? 'block' : 'none';
    });
    // Filter options functionality
    const filterOptionElements = document.querySelectorAll('.filter-option');
    filterOptionElements.forEach(option => {
        option.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Filter jobs based on selected filter
            if (filterValue === 'all') {
                filteredJobs = jobs; // Show all jobs
            } else {
                filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(filterValue.toLowerCase()));
            }

            displayJobs(filteredJobs); // Display the filtered jobs
            filterOptions.style.display = 'none'; // Hide dropdown after selection
        });
    });
    // Hide filter dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!filterButton.contains(event.target) && !filterOptions.contains(event.target)) {
            filterOptions.style.display = 'none';
        }
    });


    //Dropdown functionality for disabilities
    const abilityButton = document.getElementById('ability-button');
    const abilityOptions = document.getElementById('ability-options');
    abilityButton.addEventListener('click', function() {
        // Toggle the dropdown display
        abilityOptions.style.display = abilityOptions.style.display === 'none' ? 'block' : 'none';
    });
    // Disability Filter options functionality
    const abilityOptionElements = document.querySelectorAll('.ability-option');
    abilityOptionElements.forEach(option => {
        option.addEventListener('click', function() {
            const filterValue2 = this.getAttribute('data-filter');

            // Filter jobs based on selected filter
            if (filterValue2 === 'all') {
                filteredJobs = jobs; // Show all jobs
            } else {
                filteredJobs = jobs.filter(job => job.disability.toLowerCase().includes(filterValue2.toLowerCase()));
            }

            displayJobs(filteredJobs); // Display the filtered jobs
            abilityOptions.style.display = 'none'; // Hide dropdown after selection
        });
    });
    // Hide filter dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!abilityButton.contains(event.target) && !abilityOptions.contains(event.target)) {
            abilityOptions.style.display = 'none';
        }
    });

    // Search functionality
    jobSearchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission if inside a form
            const searchValue = this.value.toLowerCase();
    
            // Filter jobs based on search input
            filteredJobs = jobs.filter(job => {
            return (
                job.title.toLowerCase().includes(searchValue) ||
                job.company.toLowerCase().includes(searchValue) ||
                job.location.toLowerCase().includes(searchValue) ||
                job.description.toLowerCase().includes(searchValue)
            );
        });
    
            displayJobs(filteredJobs); // Display the filtered jobs
        }
    });
    const clearSearchIcon = document.getElementById('clearSearch');
    const searchIcon = document.getElementById('searchIcon');
    // Function to reset the search and filters
    clearSearchIcon.addEventListener('click', function() {
    jobSearchInput.value = ''; // Clear the search input
    clearSearchIcon.style.display = 'none'; // Hide the clear icon
    searchIcon.style.display = 'block'; 
    filteredJobs = jobs; // Reset to show all jobs
    displayJobs(filteredJobs); // Display all jobs
});

// Show the clear icon when typing
jobSearchInput.addEventListener('input', function() {
    if (this.value) {
        clearSearchIcon.style.display = 'block'; // Show the clear icon
        searchIcon.style.display = 'none';
    } else {
        clearSearchIcon.style.display = 'none'; // Hide the clear icon
        searchIcon.style.display = 'block';
    }
});
};
