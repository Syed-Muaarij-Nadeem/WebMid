document.addEventListener("DOMContentLoaded", () => {
    const innovators = [
        {
            name: "Ahmed Al Jaber",
            title: "Sustainable Architect",
            description: "Pioneer in eco-friendly urban development.",
            image: "images/ahmed.jpg"
        },
        {
            name: "Fatima Al Mulla",
            title: "Technology Innovator",
            description: "Leading expert in AI-driven solutions.",
            image: "images/fatima.jpg"
        }
    ];

    const speakersList = document.querySelector('.speakers-list');
    innovators.forEach(innovator => {
        const innovatorDiv = document.createElement('div');
        innovatorDiv.classList.add('speaker');
        innovatorDiv.innerHTML = `
        <img src="${innovator.image}" alt="${innovator.name}">
        <h3>${innovator.name}</h3>
        <p>${innovator.title}</p>
        <p>${innovator.description}</p>
      `;
        speakersList.appendChild(innovatorDiv);
    });

    // Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});
