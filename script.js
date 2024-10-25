
document.addEventListener('DOMContentLoaded', function () {
    // Data objects for each person
    let Person1 = {
        name: "Tamim bin Hamad Al Thani",
        designation: "Emir of Qatar",
        detail: "Tamim bin Hamad Al Thani has been the Emir of Qatar since 2013, focusing on modernization, sports, and diplomacy.",
        image: "Pimage1.png"
    };

    let Person2 = {
        name: "Nawaf Al-Ahmad Al-Jaber Al-Sabah",
        designation: "Emir of Kuwait",
        detail: "Nawaf Al-Ahmad Al-Jaber Al-Sabah became the Emir of Kuwait in 2020, emphasizing regional stability and economic development.",
        image: "Pimage2.png"
    };


    let Person3 = {
        name: "Mohammed bin Zayed Al Nahyan",
        designation: "President of the UAE",
        detail: "Mohammed bin Zayed Al Nahyan, often known as MBZ, has been the President of the UAE since 2022, leading the country toward technological and cultural advancements.",
        image: "Pimage3.jpg" // Replace with the correct image path
    };

    let Person4 = {
        name: "Abdelmadjid Tebboune",
        designation: "President of Algeria",
        detail: "Abdelmadjid Tebboune has been the President of Algeria since 2019, focusing on economic reforms and fighting corruption.",
        image: "Pimage4.jpg" // Replace with the correct image path
    };

    let Person5 = {
        name: "Abdel Fattah el-Sisi",
        designation: "President of Egypt",
        detail: "Abdel Fattah el-Sisi has served as the President of Egypt since 2014, concentrating on security, economic stability, and infrastructure development.",
        image: "Pimage5.png" // Replace with the correct image path
    };


    // Arrays of persons: initial and additional
    const initialPersons = [Person1, Person2];
    const morePersons = [Person3, Person4, Person5];

    // Function to create a person's card
    function createPersonCard(person, container) {
        // Create the main card container
        const personCard = document.createElement('div');
        personCard.classList.add('person-card');

        // Create the image element
        const profilePicture = document.createElement('img');
        profilePicture.src = person.image; // Set the image source
        profilePicture.alt = 'Profile Picture';
        profilePicture.classList.add('profile-picture');
        personCard.appendChild(profilePicture);

        // Create the info container
        const personInfo = document.createElement('div');
        personInfo.classList.add('person-info');

        // Create and append name
        const personName = document.createElement('h2');
        personName.textContent = person.name;
        personName.classList.add('person-name');
        personInfo.appendChild(personName);

        // Create and append designation
        const personDesignation = document.createElement('p');
        personDesignation.textContent = person.designation;
        personDesignation.classList.add('person-designation');
        personInfo.appendChild(personDesignation);

        // Create and append detail
        const personDetail = document.createElement('p');
        personDetail.textContent = person.detail;
        personDetail.classList.add('person-detail');
        personInfo.appendChild(personDetail);

        // Append info to the main card container
        personCard.appendChild(personInfo);

        // Add the person's card to the container in the HTML
        container.appendChild(personCard);
    }

    // Display the initial persons
    const peopleContainer = document.getElementById('people-container');
    initialPersons.forEach(person => createPersonCard(person, peopleContainer));

    // More container for additional persons
    const moreContainer = document.getElementById('more-container');
    morePersons.forEach(person => createPersonCard(person, moreContainer));

    // Handling the "More" button click
    const moreButton = document.getElementById('more-button');
    moreButton.addEventListener('click', function () {
        moreContainer.style.display = 'block'; // Show more content
        moreButton.style.display = 'none'; // Hide the "More" button after click
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle dropdown menu visibility on burger icon click
    burgerIcon.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!burgerIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none'; // Hide the menu if clicked outside
        }
    });
});