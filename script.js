document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const downloadVisibleBtn = document.getElementById('download-visible-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const shareTwitter = document.getElementById('share-twitter');
    const shareFacebook = document.getElementById('share-facebook');
    const sharePinterest = document.getElementById('share-pinterest');

    let images = [];
    let currentImages = [];
    let currentIndex = 0;

    // Image data
    const imageData = [
        { src: 'https://picsum.photos/id/10/800/600', title: 'Nature Landscape', category: 'nature', filename: 'nature-landscape.jpg' },
        { src: 'https://picsum.photos/id/25/800/600', title: 'Architecture Building', category: 'architecture', filename: 'architecture-building.jpg' },
        { src: 'https://picsum.photos/id/45/800/600', title: 'Person in City', category: 'people', filename: 'person-in-city.jpg' },
        { src: 'https://picsum.photos/id/55/800/600', title: 'Mountain Range', category: 'nature', filename: 'mountain-range.jpg' },
        { src: 'https://picsum.photos/id/65/800/600', title: 'Modern Architecture', category: 'architecture', filename: 'modern-architecture.jpg' },
        { src: 'https://picsum.photos/id/75/800/600', title: 'Woman Portrait', category: 'people', filename: 'woman-portrait.jpg' },
        { src: 'https://picsum.photos/id/85/800/600', title: 'Forest Path', category: 'nature', filename: 'forest-path.jpg' },
        { src: 'https://picsum.photos/id/95/800/600', title: 'Skyscraper', category: 'architecture', filename: 'skyscraper.jpg' },
        { src: 'https://picsum.photos/id/105/800/600', title: 'Man Hiking', category: 'people', filename: 'man-hiking.jpg' },
        { src: 'https://picsum.photos/id/115/800/600', title: 'Ocean Waves', category: 'nature', filename: 'ocean-waves.jpg' },
        { src: 'https://picsum.photos/id/125/800/600', title: 'Old Castle', category: 'architecture', filename: 'old-castle.jpg' },
        { src: 'https://picsum.photos/id/135/800/600', title: 'Family Photo', category: 'people', filename: 'family-photo.jpg' },
    ];

    // Populate gallery
    function populateGallery(filter = 'all') {
        galleryGrid.innerHTML = '';
        currentImages = imageData.filter(img => filter === 'all' || img.category === filter);

        currentImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.classList.add('gallery-item', 'fade-in');
            item.dataset.index = index;
            item.dataset.category = img.category;

            const image = document.createElement('img');
            image.src = img.src;
            image.alt = img.title;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.textContent = img.title;

            item.appendChild(image);
            item.appendChild(overlay);
            galleryGrid.appendChild(item);
        });

        observeImages();
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            populateGallery(button.dataset.filter);
        });
    });

    // Lightbox functionality
    galleryGrid.addEventListener('click', e => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            currentIndex = parseInt(item.dataset.index);
            openLightbox();
        }
    });

    function openLightbox() {
        if (currentImages.length > 0) {
            updateLightboxContent();
            lightbox.classList.add('active');
        }
    }

    function closeLightbox() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        lightbox.classList.remove('active');
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxContent();
    }

    function updateLightboxContent() {
        const image = currentImages[currentIndex];
        lightboxImg.src = image.src;
        updateShareLinks(image);
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    document.addEventListener('keydown', e => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            lightboxImg.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Social share functionality
    function updateShareLinks(image) {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(image.title);
        const imageUrl = encodeURIComponent(image.src);

        shareTwitter.href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        sharePinterest.href = `https://pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${text}`;
    }

    // Scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll animations
    function observeImages() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        galleryItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Download visible images as zip
    downloadVisibleBtn.addEventListener('click', () => {
        const zip = new JSZip();
        const promises = [];

        downloadVisibleBtn.textContent = 'Zipping...';
        downloadVisibleBtn.disabled = true;

        currentImages.forEach(image => {
            const promise = fetch(image.src)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.blob();
                })
                .then(blob => {
                    zip.file(image.filename, blob);
                })
                .catch(err => console.error(`Failed to fetch ${image.src}: ${err}`));
            promises.push(promise);
        });

        Promise.all(promises).then(() => {
            zip.generateAsync({ type: 'blob' }).then(content => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = 'gallery.zip';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                downloadVisibleBtn.textContent = 'Download Visible';
                downloadVisibleBtn.disabled = false;
            });
        });
    });

    // Initial population
    populateGallery();
});