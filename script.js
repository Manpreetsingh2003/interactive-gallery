const galleryData = [
    { 
        src: 'image 1.jpg', 
        title: 'Image 1', 
        description: 'Nature is home to a vast range of organisms, including plants, animals, fungi, and microorganisms.' 
    },
    { 
        src: 'image 2.jpg', 
        title: 'Image 2', 
        description: 'Nature consists of ecosystems like forests, oceans, wetlands, and deserts. These systems support life by providing necessary resources like water, air, and food..' 
    },
    { 
        src: 'image 3.jpg', 
        title: 'Image 3', 
        description: 'Plants play a critical role in nature through photosynthesis, where they use sunlight, water, and carbon dioxide to produce oxygen and glucose, which sustain life..' 
    },
    {
        src: 'image 4.jpg',
        title:'Image 4',
        description: 'Insects, birds, and other animals help pollinate plants, a key process in plant reproduction..'
    },
    { 
        src: 'image 5.jpg',
        title:'Image 5',
        description:'Nature involves processes like the water cycle, which includes evaporation, condensation, precipitation, and runoff..'
    },
    {
        src: 'images 6.jpg',
        title:'Image 6',
        description:' Nature provides essential resources such as water, minerals, timber, and fossil fuels..'
    },
    { 
        src: 'images 7.webp',
        title:'Image 7',
        description:' Natures food webs describe the interdependence of organisms. Producers (plants) are consumed by herbivores.'
    },
    { 
        src: 'image 8.jpg',
        title: 'Image 8',
        description:'Nature provides both renewable resources (like solar energy and wind) and non-renewable resources.'
    },
    { 
        src:'image 9.jpg',
        title:'Image 9',
        description: ': Nature is the basis for evolutionary processes, where species adapt to their environments over time through natural selection.'
    },
    { 
        src:'image 10.jpg',
        title: 'Image 10',
        description: 'As human activities threaten ecosystems and species, conservation efforts are vital.'
    },
    { 
        src:'image 11.jpg',
        title:'Image 11',
        description:'Protecting natural habitats and species helps maintain ecological balance and biodiversity.'
    },
    { 
        src:'image 12.jpg',
        title:'Image 12',
        description:' It supports plant growth and is essential for food production.'
    }
];

const galleryContainer = document.getElementById('gallery');

galleryData.forEach((image) => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = `<h2>${image.title}</h2><p>${image.description}</p>`;

    imageItem.appendChild(img);
    imageItem.appendChild(info);
    galleryContainer.appendChild(imageItem);
});