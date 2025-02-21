const jobs = [
    {
        title: "Customer service (via phone)",
        company: "Amazon",
        location: "Hyderabad,India",
        disability: "Vision Impairment or Blindness" ,
        description: "We are looking for Customer service representatives to help clients by answering questions, resolving issues, or providing information about services over the phone. ",
        salary: "₹2,00,000 to ₹4,50,000 per annum",
        logo: "logos/amazon.png"
    },
{
        title: "Voice-over Artist",
        company: "VOX Studios",
        location: "Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Voice-over artists to lend their voices to narrate scripts for TV commercials, animated films, instructional videos, radio ads, or e-learning courses.",
        salary: "₹3,60,000 to ₹18,00,000 per annum.",
        logo: "logos/vox.png"
    },
{
        title: "Podcast Host",
        company: "Spotify India",
        location: "BKC,Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Podcast hosts who can create, produce, and manage podcast shows where they discuss topics of interest, interview guests, or narrate stories.",
        salary: "₹3,00,000 to ₹10,00,000 per annum",
        logo: "logos/spotify.png"
    },
{
        title: "Audio Book Narrator",
        company: "National Institute for the Empowerment of Persons with Visual Disabilities (NIEPVD)",
        location: "Rajpur Road,Dehradun",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Audio book narrators to read and record books to be made available in audio format. ",
        salary: "₹2,40,000 to ₹9,60,000 per annum",
        logo: "logos/niepvd.png"
    },
{
        title: "Teaching or Tutoring (with Assistive Technology)",
        company: "BYJU’s",
        location: "Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Teachers or tutors with vision impairments who can use assistive technologies to provide lessons, either online or in person.",
        salary: "₹2,00,000 to ₹6,00,000 per annum",
        logo: "logos/byjus.png"
    },
{
        title: "Customer service (via phone)",
        company: "Wipro",
        location: "Bengaluru,India",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Customer service representatives to help clients by answering questions, resolving issues, or providing information about services over the phone. ",
        salary: "₹2,00,000 to ₹3,00,000 per annum",
        logo: "logos/wipro.png"
    },
{
        title: "Audio Book Narrator",
        company: "Audible India",
        location: "One Washington park, Newark",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Audio book narrators to read and record books to be made available in audio format. ",
        salary: "₹2,40,000 to ₹9,60,000 per annum",
        logo: "logos/audible.png"
    },
{
        title: "Podcast Host",
        company: "Audible Suno (Amazon’s podcast service)",
        location: "BKC,Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Podcast hosts who can create, produce, and manage podcast shows where they discuss topics of interest, interview guests, or narrate stories.",
        salary: "₹3,00,000 to ₹10,00,000 per annum",
        logo: "logos/suno.png"
    },
{
        title: "Teaching or Tutoring (with Assistive Technology)",
        company: "Vedantu (for online tutoring)",
        location: "Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Teachers or tutors with vision impairments who can use assistive technologies to provide lessons, either online or in person.",
        salary: "₹2,00,000 to ₹4,00,000 per annum",
        logo: "logos/vedantu.png"
    },
{
        title: "Voice-over Artist",
        company: "Zee Media",
        location: "Mumbai,Maharashtra",
        disability: "Vision Impairment or Blindness",
        description: "We are looking for Voice-over artists to lend their voices to narrate scripts for TV commercials, animated films, instructional videos, radio ads, or e-learning courses.",
        salary: "₹3,40,000 to ₹11,00,000 per annum.",
        logo: "logos/zeemedia.png"
    },
{
        title: "Customer Service Representative",
        company: "Swiggy",
        location: "Bangalore, India",
        disability: "Mobility Impairment",
        description: "We are seeking customer service representatives to assist clients with order-related queries via phone.",
        salary: "₹2,00,000 to ₹4,50,000 per annum",
        logo: "logos/swiggy.png"
    },
{
        title: "Data Analyst",
        company: "Paytm",
        location: "Noida, India",
        disability: "Mobility Impairment",
        description: "Looking for a data analyst to analyze data sets and create reports for decision making. Proficiency in Excel and SQL required.",
        salary: "₹4,00,000 to ₹7,00,000 per annum",
        logo: "logos/paytm.png"
    },
{
        title: "Remote Technical Support",
        company: "Tech Mahindra",
        location: "Pune, India (Remote)",
        disability: "Mobility Impairment",
        description: "We need technical support specialists to troubleshoot hardware and software issues for clients remotely.",
        salary: "₹3,00,000 to ₹6,00,000 per annum",
        logo: "logos/techmahindra.png"
    },
{
        title: "Content Writer",
        company: "OYO",
        location: "Gurgaon, India (Remote)",
        disability: "Mobility Impairment",
        description: "Hiring content writers to create engaging content for OYO’s website and app. Excellent writing and editing skills required.",
        salary: "₹2,50,000 to ₹5,00,000 per annum",
        logo: "logos/oyo.png"
    },
{
        title: "Social Media Manager",
        company: "Snapdeal",
        location: "Delhi, India",
        disability: "Mobility Impairment",
        description: "We are looking for a social media manager to handle our brand’s presence across social platforms. Experience in running campaigns is a plus.",
        salary: "₹3,50,000 to ₹7,00,000 per annum",
        logo: "logos/snapdeal.png"
    },
{
        title: "UI/UX Designer",
        company: "MakeMyTrip",
        location: "Gurgaon, India",
        disability: "Mobility Impairment",
        description: "Seeking a UI/UX designer to create intuitive user interfaces for our web and mobile platforms.",
        salary: "₹4,00,000 to ₹8,00,000 per annum",
        logo: "logos/makemytrip.png"
    },
{
        title: "Customer Support Executive",
        company: "Airtel",
        location: "Gurgaon, India",
        disability: "Mobility Impairment",
        description: "Provide customer support for Airtel services through phone and email. Good communication and problem-solving skills required.",
        salary: "₹2,00,000 to ₹4,00,000 per annum",
        logo: "logos/airtel.png"
    },
{
        title: "Remote IT Help desk Support",
        company: "Reliance Jio",
        location: "Mumbai, India (Remote)",
        disability: "Mobility Impairment",
        description: "We are looking for IT helpdesk specialists to assist with technical issues via email or chat.",
        salary: "₹3,00,000 to ₹6,00,000 per annum",
        logo: "logos/jio.png"
    },
{
        title: "Operations Executive",
        company: "Hindustan Unilever",
        location: "Mumbai, India",
        disability: "Mobility Impairment",
        description: "We need an operations executive to assist in day-to-day processes and ensure smooth coordination between teams.",
        salary: "₹4,00,000 to ₹7,00,000 per annum",
        logo: "logos/hul.jpeg"
    },
{
        title: "Remote Customer Support",
        company: "Uber",
        location: "Remote",
        disability: "Mobility Impairment",
        description: "Hiring customer support specialists to handle ride and delivery-related queries from clients via phone or email.",
        salary: "₹3,00,000 to ₹5,00,000 per annum",
        logo: "logos/uber.png"
    },
{
        title: "Android Developer",
        company: "Paytm",
        location: "Noida, India",
        disability: "Neurological (ADHD)",
        description: "Develop and maintain Android applications for Paytm's ecosystem. Strong focus on structure and task management will be beneficial.",
        salary: "₹6,00,000 to ₹9,00,000 per annum",
        logo: "logos/paytm.png"
    },
{
        title: "Business Analyst",
        company: "HDFC Bank",
        location: "Mumbai, India",
        disability: "Neurological (Autism Spectrum Disorder)",
        description: "Analyze business data and provide actionable insights. This role fits individuals with excellent analytical skills and attention to detail.",
        salary: "₹5,00,000 to ₹8,00,000 per annum",
        logo: "logos/hdfc.png"
    },
{
        title: "DevOps Engineer",
        company: "Zomato",
        location: "Gurugram, India",
        disability: "Neurological (Dyslexia)",
        description: "Implement CI/CD pipelines and automate infrastructure. Visual-based learning and workflows help in the role.",
        salary: "₹10,00,000 to ₹14,00,000 per annum",
        logo: "logos/zomato.png"
    },
{
        title: "Digital Marketing Manager",
        company: "OYO Rooms",
        location: "Bangalore, India",
        disability: "Neurological (ADHD)",
        description: "Develop and execute digital marketing campaigns. Fast-paced tasks and creative freedom are offered to enhance productivity.",
        salary: "₹6,00,000 to ₹8,00,000 per annum",
        logo: "logos/oyo.png"
    },
{
        title: "UI/UX Designer",
        company: "Byju's",
        location: "Bangalore, India",
        disability: "Neurological (Autism Spectrum Disorder)",
        description: "Design engaging and intuitive user interfaces. Individuals with a strong focus on design details will thrive in this role.",
        salary: "₹5,00,000 to ₹7,00,000 per annum",
        logo: "logos/byjus.png"
    },
{
        title : "Sales Executive",
        company: "Reliance Jio",
        location: "Mumbai, India",
        disability: "Neurological (ADHD)",
        description: "Engage with customers and promote sales targets. The role offers continuous interaction and a dynamic work environment.",
        salary: "₹3,00,000 to ₹5,00,000 per annum",
        logo: "logos/jio.png"
    },
{
        title: "Network Engineer",
        company: "Cisco",
        location: "Bangalore, India",
        disability: "Neurological (Dyslexia)",
        description: "Manage and troubleshoot network infrastructure. Structured workflows and visual aids will support success.",
        salary: "₹7,00,000 to ₹10,00,000 per annum",
        logo: "logos/cisco.jpeg"
    },
{
        title: "Content Writer",
        company: "Times Internet",
        location: "Gurugram, India",
        disability: "Neurological (ADHD)",
        description: "Write engaging content for websites and social media platforms. Flexible schedules support creative productivity.",
        salary: "₹3,50,000 to ₹5,50,000 per annum",
        logo: "logos/times.png"
    },
{
        title: "Machine Learning Engineer",
        company: "Google",
        location: "Hyderabad, India",
        disability: "Neurological (ADHD)",
        description: "Develop and deploy machine learning models. Independent work and structured goals will enhance focus and performance.",
        salary: "₹12,00,000 to ₹15,00,000 per annum",
        logo: "logos/google.png"
    },
{
        title: "Human Resources Manager",
        company: "Deloitte",
        location: "Mumbai, India",
        disability: "Neurological (Autism Spectrum Disorder)",
        description: "Oversee recruitment and employee engagement processes. A structured, people-centric approach ensures productivity.",
        salary: "₹8,00,000 to ₹12,00,000 per annum",
        logo: "logos/deloitte.png"
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
            applyButton.href = `apply.html?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}&location=${encodeURIComponent(job.location)}&disability=${encodeURIComponent(job.disability)}&salary=${encodeURIComponent(job.salary)}`;
            
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
                job.description.toLowerCase().includes(searchValue) ||
                job.disability.toLowerCase().includes(searchValue)
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
