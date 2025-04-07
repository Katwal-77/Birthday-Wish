document.addEventListener('DOMContentLoaded', function() {
    // Make sure all sections except intro are hidden at start
    const sections = document.querySelectorAll('.photos, .gallery, .messages, .reasons, .poem, .final, .apology-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show only the intro section
    document.getElementById('intro').classList.remove('hidden');
    
    // Explicitly ensure apology section is hidden
    const apologySection = document.getElementById('apology-section');
    if (apologySection) {
        apologySection.classList.add('hidden');
        console.log('Apology section hidden at startup');
    }
    
    // Elements
    const intro = document.getElementById('intro');
    const heart = document.getElementById('heart');
    const animatedPhoto = document.getElementById('animated-photo');
    const photoContinue = document.getElementById('photo-continue');
    const mainContent = document.getElementById('main-content');
    const continueBtn = document.getElementById('continue-btn');
    const memoryGallery = document.getElementById('memory-gallery');
    const galleryContinue = document.getElementById('gallery-continue');
    const reasons = document.getElementById('reasons');
    const reasonsList = document.getElementById('reasons-list');
    const reasonsContinue = document.getElementById('reasons-continue');
    const poem = document.getElementById('poem');
    const poemContinue = document.getElementById('poem-continue');
    const final = document.getElementById('final');
    const wishBtn = document.getElementById('wish-btn');
    const confettiContainer = document.getElementById('confetti-container');
    const flowersContainer = document.querySelector('.flowers-container');
    const fireworksContainer = document.getElementById('fireworks-container');
    const rocketsContainer = document.getElementById('rockets-container');
    const cameraShutter = document.getElementById('camera-shutter');
    const cameraFlash = document.getElementById('camera-flash');
    const flashbacksContainer = document.querySelector('.flashbacks-container');
    const flashbackImages = document.querySelectorAll('.flashback-image');
    const floatingImages = document.querySelectorAll('.floating-image');
    const forgiveBtn = document.getElementById('forgive-btn');
    
    // Enhanced list of reasons with more creative content
    const reasonsArray = [
        "Your smile has a magical ability to transform even my worst days into beautiful ones",
        "The way you care for others shows the incredible depth of your compassionate heart",
        "Your laugh is the most enchanting melody I've ever heard - it's my favorite sound",
        "Your intelligence and creativity inspire me to see the world from new perspectives",
        "The way you pursue your passions with unwavering determination is truly admirable",
        "Your eyes hold the most beautiful universe I've ever had the privilege to explore",
        "The gentle touch of your hand feels like coming home after a long journey",
        "Your kindness to strangers shows the pure goodness that radiates from your soul",
        "The way you remember tiny details about people shows how deeply you care",
        "Your strength during difficult times reminds me what true courage looks like",
        "The way you dance like nobody's watching fills my heart with pure joy",
        "Your voice has the power to instantly calm my restless mind and soothe my soul"
    ];
    
    // Image placeholders for each reason (replace with actual image URLs)
    const reasonImages = [
        "https://via.placeholder.com/300x200/ffeeee?text=Her+Smile",
        "https://via.placeholder.com/300x200/eeffee?text=Her+Care",
        "https://via.placeholder.com/300x200/eeeeff?text=Her+Laugh",
        "https://via.placeholder.com/300x200/ffffee?text=Her+Intelligence",
        "https://via.placeholder.com/300x200/ffeeff?text=Her+Passion",
        "https://via.placeholder.com/300x200/eeffff?text=Her+Eyes",
        "https://via.placeholder.com/300x200/ffffee?text=Her+Touch",
        "https://via.placeholder.com/300x200/eeffff?text=Her+Kindness",
        "https://via.placeholder.com/300x200/ffeeee?text=Her+Attention",
        "https://via.placeholder.com/300x200/eeffee?text=Her+Strength",
        "https://via.placeholder.com/300x200/eeeeff?text=Her+Dance",
        "https://via.placeholder.com/300x200/ffffee?text=Her+Voice"
    ];
    
    // Flower colors
    const flowerColors = [
        '#ff9a9e', // Pink
        '#fad0c4', // Light Pink
        '#ffdde1', // Pale Pink
        '#ff6b6b', // Red
        '#ffb6b9', // Coral
        '#ff8fab', // Rose
        '#fbf0f0', // White-Pink
        '#ffc6c6', // Light Red
        '#ff8cba', // Hot Pink
        '#ffbbdc'  // Bubble Gum
    ];
    
    // Firework colors
    const fireworkColors = [
        '#ff4757', // Red
        '#ff6b81', // Pink
        '#ff6348', // Orange
        '#ffa502', // Amber
        '#2ed573', // Green
        '#1e90ff', // Blue
        '#5352ed', // Purple
        '#fffa65', // Yellow
        '#ffffff'  // White
    ];
    
    // Initialize poem lines with animation delay
    const poemLines = document.querySelectorAll('.poem-line');
    poemLines.forEach((line, index) => {
        line.style.setProperty('--i', index);
    });
    
    // Create and add flowers to the container
    function createFlowers() {
        // Clear existing flowers
        flowersContainer.innerHTML = '';
        
        // Create 20 flowers in random positions
        for (let i = 0; i < 20; i++) {
            createFlower(i);
        }
    }
    
    function createFlower(index) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Random position around the circle
        const angle = Math.random() * 360;
        const distance = 150 + Math.random() * 150; // Distance from center
        
        // Calculate position based on angle and distance
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;
        
        // Random color from our palette
        const colorIndex = Math.floor(Math.random() * flowerColors.length);
        const color = flowerColors[colorIndex];
        
        // Set the position and other properties
        flower.style.left = `calc(50% + ${x}px)`;
        flower.style.top = `calc(50% + ${y}px)`;
        flower.style.setProperty('--flower-color', color);
        flower.style.animationDelay = `${index * 0.1}s`;
        
        // Create petals
        for (let p = 0; p < 6; p++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.setProperty('--flower-color', color);
            petal.style.setProperty('--rotate-angle', `${p * 60}deg`);
            petal.style.transformOrigin = 'bottom center';
            petal.style.transform = `rotate(${p * 60}deg)`;
            petal.style.left = '50%';
            petal.style.bottom = '50%';
            petal.style.marginLeft = '-10px'; // Half of petal width
            petal.style.animationDelay = `${index * 0.1 + p * 0.05}s`;
            flower.appendChild(petal);
        }
        
        // Create flower center
        const center = document.createElement('div');
        center.className = 'flower-center';
        center.style.animationDelay = `${index * 0.1 + 0.3}s`;
        flower.appendChild(center);
        
        // Add to container
        flowersContainer.appendChild(flower);
    }
    
    // Create fireworks
    function createFireworks() {
        // First clear any existing fireworks
        fireworksContainer.innerHTML = '';
        
        // Launch sequence of fireworks
        launchSequence();
    }
    
    function launchSequence() {
        // Total duration of the firework show in ms
        const totalDuration = 10000; // Extended to 10 seconds
        const startTime = Date.now();
        
        function launchFirework() {
            const currentTime = Date.now() - startTime;
            
            if (currentTime < totalDuration) {
                // Get random position for the firework
                const x = 10 + Math.random() * 80; // Percentage of the container width
                const y = 10 + Math.random() * 80; // Percentage of the container height
                
                // Random color
                const colorIndex = Math.floor(Math.random() * fireworkColors.length);
                const color = fireworkColors[colorIndex];
                
                // Create firework explosion
                createFireworkExplosion(x, y, color);
                
                // Schedule next firework
                const delay = 300 + Math.random() * 600; // Between 300ms and 900ms
                setTimeout(launchFirework, delay);
            }
        }
        
        // Start the sequence
        launchFirework();
    }
    
    function createFireworkExplosion(x, y, color) {
        // Create main firework point
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}%`;
        firework.style.top = `${y}%`;
        firework.style.setProperty('--color', color);
        
        // Add to container
        fireworksContainer.appendChild(firework);
        
        // Create particles
        const particleCount = 20 + Math.floor(Math.random() * 30); // 20-50 particles
        
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 360;
            const distance = 30 + Math.random() * 50; // pixels
            
            const particle = document.createElement('div');
            particle.className = 'firework';
            
            // Calculate position from center of the explosion
            const px = x + Math.cos(angle * Math.PI / 180) * distance / 100 * 50; // Adjusted for container percentage
            const py = y + Math.sin(angle * Math.PI / 180) * distance / 100 * 50;
            
            // Ensure particles stay within container bounds
            const boundedPx = Math.max(0, Math.min(100, px));
            const boundedPy = Math.max(0, Math.min(100, py));
            
            particle.style.left = `${boundedPx}%`;
            particle.style.top = `${boundedPy}%`;
            particle.style.setProperty('--color', color);
            particle.style.animationDelay = `${Math.random() * 0.2}s`;
            
            fireworksContainer.appendChild(particle);
            
            // Remove particle after animation completes to prevent DOM clutter
            setTimeout(() => {
                if (fireworksContainer.contains(particle)) {
                    fireworksContainer.removeChild(particle);
                }
            }, 2000);
        }
        
        // Remove main firework point after animation
        setTimeout(() => {
            if (fireworksContainer.contains(firework)) {
                fireworksContainer.removeChild(firework);
            }
        }, 2000);
    }
    
    // Enhanced rocket creation with trails
    function createRockets() {
        // Clear existing rockets
        rocketsContainer.innerHTML = '';
        
        // Total duration of the rocket launch sequence in ms
        const totalDuration = 15000;
        const startTime = Date.now();
        
        function launchRocket() {
            const currentTime = Date.now() - startTime;
            
            if (currentTime < totalDuration) {
                // Create a rocket at a random position
                const rocketX = 10 + Math.random() * 80; // Percentage of container width
                
                const rocket = document.createElement('div');
                rocket.className = 'rocket';
                rocket.style.left = `${rocketX}%`;
                rocket.style.animation = `rocketLaunch ${2 + Math.random()}s ease-out forwards`;
                
                // Add rocket body parts
                const rocketBody = document.createElement('div');
                rocketBody.className = 'rocket-body';
                
                const rocketTip = document.createElement('div');
                rocketTip.className = 'rocket-tip';
                
                const rocketFinLeft = document.createElement('div');
                rocketFinLeft.className = 'rocket-fins rocket-fin-left';
                
                const rocketFinRight = document.createElement('div');
                rocketFinRight.className = 'rocket-fins rocket-fin-right';
                
                const rocketFlame = document.createElement('div');
                rocketFlame.className = 'rocket-flame';
                
                // Add trail particles
                for (let i = 0; i < 5; i++) {
                    const trailParticle = document.createElement('div');
                    trailParticle.className = 'rocket-trail-particle';
                    trailParticle.style.animationDelay = `${i * 0.1}s`;
                    rocket.appendChild(trailParticle);
                }
                
                // Add parts to rocket
                rocket.appendChild(rocketBody);
                rocket.appendChild(rocketTip);
                rocket.appendChild(rocketFinLeft);
                rocket.appendChild(rocketFinRight);
                rocket.appendChild(rocketFlame);
                
                // Add to container
                rocketsContainer.appendChild(rocket);
                
                // Add small firework at the top of the rocket's path
                setTimeout(() => {
                    const rocketRect = rocket.getBoundingClientRect();
                    const containerRect = rocketsContainer.getBoundingClientRect();
                    
                    const relativeX = (rocketRect.left - containerRect.left + rocketRect.width/2) / containerRect.width * 100;
                    createSmallFirework(relativeX, 10); // 10% from the top
                }, 2000);
                
                // Remove rocket after animation completes
                setTimeout(() => {
                    if (rocketsContainer.contains(rocket)) {
                        rocketsContainer.removeChild(rocket);
                    }
                }, 4000);
                
                // Schedule next rocket
                const delay = 500 + Math.random() * 1500; // Between 500ms and 2000ms
                setTimeout(launchRocket, delay);
            }
        }
        
        // Start launching rockets
        launchRocket();
    }
    
    // Create a small firework for rocket explosions
    function createSmallFirework(x, y) {
        // Random color for the firework
        const colorIndex = Math.floor(Math.random() * fireworkColors.length);
        const color = fireworkColors[colorIndex];
        
        // Create smaller particles than normal fireworks
        const particleCount = 10 + Math.floor(Math.random() * 15);
        
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 360;
            const distance = 10 + Math.random() * 20; // smaller distance for mini explosion
            
            const particle = document.createElement('div');
            particle.className = 'firework mini-firework';
            
            // Calculate position from center of the explosion
            const px = x + Math.cos(angle * Math.PI / 180) * distance / 100 * 30;
            const py = y + Math.sin(angle * Math.PI / 180) * distance / 100 * 30;
            
            // Ensure particles stay within container bounds
            const boundedPx = Math.max(0, Math.min(100, px));
            const boundedPy = Math.max(0, Math.min(100, py));
            
            particle.style.left = `${boundedPx}%`;
            particle.style.top = `${boundedPy}%`;
            particle.style.setProperty('--color', color);
            particle.style.animationDuration = '1s'; // Faster animation for small fireworks
            
            fireworksContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (fireworksContainer.contains(particle)) {
                    fireworksContainer.removeChild(particle);
                }
            }, 1000);
        }
    }
    
    // Animate flashback memory sequence
    function animateFlashbacks() {
        flashbacksContainer.style.display = 'block';
        const overlay = document.querySelector('.flashback-overlay');
        overlay.style.animation = 'flashbacksAppear 1s forwards';
        
        // Animate each flashback image in sequence
        flashbackImages.forEach((image, index) => {
            setTimeout(() => {
                // Hide all images first
                flashbackImages.forEach(img => {
                    img.style.opacity = '0';
                    img.style.transform = 'scale(0.8)';
                });
                
                // Show current image
                image.style.opacity = '1';
                image.style.transform = 'scale(1)';
                image.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                // Add sound effect for flashback (optional)
                const flashbackSound = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAIlRJVDIAAAASAAAARmxhc2hiYWNrIFNvdW5kVFBFMQAAABIAAABGbGFzaGJhY2sgU291bmQAAAQA=');
                flashbackSound.volume = 0.2;
                flashbackSound.play().catch(() => {});
                
            }, index * 3000); // 3 seconds per memory
        });
        
        // Hide flashbacks after showing all images
        setTimeout(() => {
            overlay.style.animation = 'flashbacksAppear 1s forwards reverse';
            setTimeout(() => {
                flashbacksContainer.style.display = 'none';
            }, 1000);
        }, flashbackImages.length * 3000 + 1000);
    }
    
    // Enhanced floating images interaction
    function enhanceFloatingImages() {
        floatingImages.forEach((image, index) => {
            // Make images interactive with hover effects
            image.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(0deg)';
                this.style.zIndex = '50';
                this.style.transition = 'transform 0.3s ease, z-index 0.3s';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                
                // Pause animation during hover
                this.style.animationPlayState = 'paused';
            });
            
            image.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.zIndex = '';
                this.style.transition = '';
                this.style.boxShadow = '';
                
                // Resume animation
                this.style.animationPlayState = 'running';
            });
            
            // Make images clickable to trigger fireworks/rockets
            image.addEventListener('click', function() {
                // Get position for a firework
                const rect = this.getBoundingClientRect();
                const containerRect = document.querySelector('.floating-images-gallery').getBoundingClientRect();
                
                const relativeX = (rect.left - containerRect.left + rect.width/2) / containerRect.width * 100;
                const relativeY = (rect.top - containerRect.top + rect.height/2) / containerRect.height * 100;
                
                createFireworkExplosion(relativeX, relativeY, fireworkColors[Math.floor(Math.random() * fireworkColors.length)]);
                
                // Add scaling animation
                this.style.animation = 'pulse 0.5s';
                
                // Reset animation after pulse effect
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
    }
    
    // Camera shutter sound effect
    function playShutterSound() {
        const shutterSound = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAIlRJVDIAAAASAAAAU2h1dHRlciBDbGljayAxMTMAVFBFMQAAABIAAABTaHV0dGVyIENsaWNrIDExMwAAADAAA/+EYWxidW0AAAAAAAAAAAAAAAAAAAA=');
        shutterSound.volume = 0.3;
        shutterSound.play().catch(err => {
            // Silent catch for browsers that don't allow autoplay
            console.log('Could not play shutter sound, browser may require user interaction first.');
        });
    }
    
    // Simulate camera focus
    function simulateCameraFocus() {
        const focusRings = document.querySelector('.focus-rings');
        
        // Add focus sound here if desired
        
        // Simulate focusing effect with rapid scale changes
        let focusCounter = 0;
        const focusInterval = setInterval(() => {
            focusRings.style.transform = `scale(${0.95 + Math.random() * 0.1})`;
            
            focusCounter++;
            if (focusCounter > 10) {
                clearInterval(focusInterval);
                focusRings.style.transform = 'scale(1)';
            }
        }, 100);
    }
    
    // Event listeners
    heart.addEventListener('click', function() {
        intro.classList.add('hidden');
        animatedPhoto.classList.remove('hidden');
        
        // Camera effects sequence
        setTimeout(simulateCameraFocus, 300);
        setTimeout(playShutterSound, 1500);
        
        // Launch rockets
        setTimeout(createRockets, 2000);
        
        // Create and animate flowers
        setTimeout(createFlowers, 2500);
        
        // Launch fireworks
        setTimeout(createFireworks, 3000);
        
        // Animate flashbacks after a delay
        setTimeout(animateFlashbacks, 5000);
        
        // Enhance floating images
        setTimeout(enhanceFloatingImages, 1000);
        
        // Make sure the button appears after all animations
        photoContinue.style.opacity = '0';
        setTimeout(() => {
            photoContinue.style.opacity = '1';
        }, 12000); // Increased time to allow for flashbacks to complete
    });
    
    photoContinue.addEventListener('click', function() {
        console.log('Moving from photo section to main content');
        animatedPhoto.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Animate the content appearance
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 100);
    });
    
    continueBtn.addEventListener('click', function() {
        console.log('Moving from main content to memory gallery');
        mainContent.classList.add('hidden');
        memoryGallery.classList.remove('hidden');
        
        // Explicitly show memory gallery
        memoryGallery.style.display = 'flex';
        
        // Add a fade-in effect to ensure visibility
        memoryGallery.style.opacity = 0;
        setTimeout(() => {
            memoryGallery.style.opacity = 1;
        }, 100);
    });
    
    galleryContinue.addEventListener('click', function() {
        console.log('Moving from memory gallery to reasons');
        memoryGallery.classList.add('hidden');
        reasons.classList.remove('hidden');
        
        // Create enhanced reason cards with flip animation
        createEnhancedReasonCards();
    });
    
    reasonsContinue.addEventListener('click', function() {
        console.log('Moving from reasons to poem section');
        // Add fade-out to current section
        reasons.classList.add('fade-out');
        
        setTimeout(function() {
            // Hide reasons section
            reasons.classList.add('hidden');
            reasons.classList.remove('fade-out'); // Reset for next time
            
            // Show poem section - first remove hidden class
            poem.classList.remove('hidden');
            
            // Then after a short delay, add fade-in and initialize animations
            setTimeout(function() {
                poem.classList.add('fade-in');
                initializePoemAnimations();
                
                // Make sure the continue button is visible
                if (poemContinue) {
                    poemContinue.style.opacity = '1';
                    poemContinue.style.pointerEvents = 'auto';
                }
            }, 50);
        }, 1000);
    });
    
    // Make a wish button with confetti
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
            console.log('Wish button clicked');
            
            // Show confetti container
            confettiContainer.classList.remove('hidden');
            
            // Start confetti
            startConfetti();
            
            // Change button text
            wishBtn.textContent = 'Wish Granted! ✨';
            wishBtn.disabled = true;
            
            // Add extra celebration effects
            document.querySelectorAll('.cake, .candle, .flame').forEach(el => {
                el.style.animation = 'pulse 0.5s infinite alternate';
            });
            
            // Wait for 3 seconds, then move to apology section
            setTimeout(() => {
                document.getElementById('final').classList.add('hidden');
                
                // Ensure apology section exists before showing it
                const apologySection = document.getElementById('apology-section');
                if (apologySection) {
                    console.log('Showing apology section');
                    apologySection.classList.remove('hidden');
                    
                    // Create dynamic stars in the background
                    createStars();
                    
                    // Initialize the ripple effect
                    initRippleEffect();
                    
                    // Add interactive raindrops that follow cursor
                    initRainInteraction();
                } else {
                    console.error('Apology section not found');
                }
            }, 3000);
        });
    }
    
    // Confetti function using canvas-confetti library
    function startConfetti() {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        
        (function frame() {
            const timeLeft = animationEnd - Date.now();
            
            if (timeLeft <= 0) {
                return;
            }
            
            const particleCount = 50 * (timeLeft / duration);
            
            // Since they are falling down, start a bit higher than random
            confetti({
                particleCount,
                spread: 70,
                origin: { y: 0 },
                colors: ['#ff6b6b', '#ff8e53', '#ffff8d', '#70d6ff', '#e16868'],
            });
            
            requestAnimationFrame(frame);
        }());
    }
    
    // Add interactivity to memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.memory-card-inner').style.transform = 
                this.querySelector('.memory-card-inner').style.transform === 'rotateY(180deg)' 
                    ? 'rotateY(0deg)' 
                    : 'rotateY(180deg)';
        });
    });
    
    // Add special effect for when multiple elements interact
    setInterval(() => {
        // Occasionally create a special effect (hearts or sparkles)
        if (Math.random() < 0.1 && animatedPhoto.classList.contains('hidden') === false) {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            createHeart(x, y);
        }
    }, 3000);
    
    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${x}%`;
        heart.style.top = `${y}%`;
        heart.style.fontSize = `${20 + Math.random() * 20}px`;
        heart.style.opacity = '0';
        heart.style.animation = 'heartFloat 5s forwards';
        
        animatedPhoto.appendChild(heart);
        
        setTimeout(() => {
            if (animatedPhoto.contains(heart)) {
                animatedPhoto.removeChild(heart);
            }
        }, 5000);
    }
    
    // Add the floating heart animation
    const heartAnimation = document.createElement('style');
    heartAnimation.textContent = `
        .floating-heart {
            position: absolute;
            pointer-events: none;
        }
        @keyframes heartFloat {
            0% { opacity: 0; transform: translateY(0); }
            20% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-100px); }
        }
        .rocket-trail-particle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            bottom: -10px;
            left: 7.5px;
            animation: trailFade 0.8s infinite linear;
        }
        @keyframes trailFade {
            0% { opacity: 0.8; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(20px) scale(0.5); }
        }
        .mini-firework {
            width: 3px;
            height: 3px;
        }
    `;
    document.head.appendChild(heartAnimation);
    
    // Easter egg: Konami Code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Secret surprise activation
                activateSecretSurprise();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateSecretSurprise() {
        // Add a secret message or effect
        const secretMessage = document.createElement('div');
        secretMessage.textContent = 'You found the secret! I love you infinity times infinity! ❤️';
        secretMessage.style.position = 'fixed';
        secretMessage.style.bottom = '20px';
        secretMessage.style.left = '50%';
        secretMessage.style.transform = 'translateX(-50%)';
        secretMessage.style.background = 'rgba(255,255,255,0.9)';
        secretMessage.style.padding = '15px 30px';
        secretMessage.style.borderRadius = '50px';
        secretMessage.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        secretMessage.style.fontWeight = 'bold';
        secretMessage.style.zIndex = '1001';
        secretMessage.style.animation = 'fadeIn 1s';
        
        document.body.appendChild(secretMessage);
        
        // Launch extra fireworks and rockets for secret celebration
        createFireworks();
        createRockets();
        
        // Remove after 5 seconds
        setTimeout(() => {
            secretMessage.style.animation = 'fadeOut 1s';
            setTimeout(() => {
                document.body.removeChild(secretMessage);
            }, 1000);
        }, 5000);
    }
    
    // Create dynamic stars in the background
    function createStars() {
        const starsContainer = document.querySelector('.apology-stars');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.setProperty('--size', Math.random() * 3 + 1 + 'px');
            star.style.setProperty('--left', Math.random() * 100 + '%');
            star.style.setProperty('--top', Math.random() * 100 + '%');
            star.style.setProperty('--animation-delay', Math.random() * 5 + 's');
            starsContainer.appendChild(star);
        }
    }
    
    // Initialize the ripple effect
    function initRippleEffect() {
        const rippleContainer = document.querySelector('.ripple-container');
        setInterval(() => {
            const newRipple = document.createElement('div');
            newRipple.classList.add('ripple-effect');
            rippleContainer.appendChild(newRipple);
            
            // Remove the ripple after animation completes
            setTimeout(() => {
                newRipple.remove();
            }, 4000);
        }, 4000);
    }
    
    // Interactive raindrops that follow cursor
    function initRainInteraction() {
        const apologySection = document.getElementById('apology-section');
        
        apologySection.addEventListener('mousemove', (e) => {
            // Calculate position relative to the window
            const x = e.clientX;
            const y = e.clientY;
            
            // Create a raindrop at cursor position with slight randomization
            const rainDrop = document.createElement('div');
            rainDrop.classList.add('cursor-raindrop');
            rainDrop.style.left = (x + (Math.random() * 40 - 20)) + 'px';
            rainDrop.style.top = y + 'px';
            
            document.querySelector('.rain-container').appendChild(rainDrop);
            
            // Remove the raindrop after animation completes
            setTimeout(() => {
                rainDrop.remove();
            }, 2000);
        }, { passive: true });
    }
    
    // Create sparkles around an element
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const sparklesContainer = document.createElement('div');
        sparklesContainer.classList.add('sparkles-container');
        document.body.appendChild(sparklesContainer);
        
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Position sparkle around the element
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const x = rect.left + rect.width / 2 + Math.cos(angle) * distance;
            const y = rect.top + rect.height / 2 + Math.sin(angle) * distance;
            
            // Set sparkle properties
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.setProperty('--size', Math.random() * 5 + 3 + 'px');
            sparkle.style.setProperty('--animation-delay', Math.random() * 0.5 + 's');
            
            sparklesContainer.appendChild(sparkle);
        }
        
        // Remove sparkles after animation completes
        setTimeout(() => {
            sparklesContainer.remove();
        }, 2000);
    }
    
    // Animate the heart mending
    function animateHeartMending() {
        const leftHalf = document.querySelector('.heart-half.left');
        const rightHalf = document.querySelector('.heart-half.right');
        
        leftHalf.classList.add('mending');
        rightHalf.classList.add('mending');
        
        // After the heart is mended, make it float up
        setTimeout(() => {
            const mendedHeart = document.querySelector('.mended-heart');
            mendedHeart.classList.add('float-away');
            
            // Create heart particles
            for (let i = 0; i < 20; i++) {
                createHeartParticle();
            }
        }, 1500);
    }
    
    // Create a single heart particle
    function createHeartParticle() {
        const heartsContainer = document.querySelector('.floating-hearts-container');
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        
        // Random position around the center
        const x = 50 + (Math.random() * 40 - 20);
        const y = 70 + (Math.random() * 40 - 20);
        heart.style.left = x + '%';
        heart.style.top = y + '%';
        
        // Random size and animation delay
        heart.style.setProperty('--size', Math.random() * 20 + 10 + 'px');
        heart.style.setProperty('--delay', Math.random() * 0.5 + 's');
        
        heartsContainer.appendChild(heart);
        
        // Remove heart particle after animation completes
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
    
    // Show a special message after forgiveness
    function showForgiveMessage() {
        // Create a fullscreen overlay
        const overlay = document.createElement('div');
        overlay.classList.add('forgiveness-overlay');
        
        // Create the message
        const message = document.createElement('div');
        message.classList.add('forgiveness-message');
        message.textContent = 'Thank You For Your Forgiveness';
        
        // Add to the page
        overlay.appendChild(message);
        document.body.appendChild(overlay);
        
        // Remove after display
        setTimeout(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.remove();
            }, 1000);
        }, 3000);
    }
    
    // Add event listener for forgive button
    if (forgiveBtn) {
        forgiveBtn.addEventListener('click', () => {
            // Create sparkling effect around the button
            createSparkles(forgiveBtn);
            
            // Add the mending animation to the heart
            animateHeartMending();
            
            // Show a special message
            showForgiveMessage();
        });
    }
    
    // New function to create enhanced reason cards with flip animation
    function createEnhancedReasonCards() {
        reasonsList.innerHTML = ''; // Clear any existing content
        
        reasonsArray.forEach((reason, index) => {
            // Create card container
            const reasonCard = document.createElement('div');
            reasonCard.className = 'reason-card';
            reasonCard.style.setProperty('--delay', index);
            
            // Create inner container for flip effect
            const cardInner = document.createElement('div');
            cardInner.className = 'reason-card-inner';
            
            // Create front side
            const cardFront = document.createElement('div');
            cardFront.className = 'reason-front';
            
            // Add reason number
            const numberEl = document.createElement('div');
            numberEl.className = 'reason-number';
            numberEl.textContent = index + 1;
            
            // Add reason text
            const textEl = document.createElement('div');
            textEl.className = 'reason-text';
            textEl.textContent = reason;
            
            // Assemble front side
            cardFront.appendChild(numberEl);
            cardFront.appendChild(textEl);
            
            // Create back side with image
            const cardBack = document.createElement('div');
            cardBack.className = 'reason-back';
            
            // Create image element
            const img = document.createElement('div');
            img.className = 'reason-img';
            img.style.backgroundImage = `url('${reasonImages[index]}')`;
            
            // Create overlay for gradient effect
            const overlay = document.createElement('div');
            overlay.className = 'reason-overlay';
            
            // Add image caption
            const caption = document.createElement('div');
            caption.className = 'reason-caption';
            
            // Create captions based on reason themes
            const captions = [
                "Your beautiful smile",
                "Your caring heart",
                "Your enchanting laugh",
                "Your brilliant mind",
                "Your passionate spirit",
                "Your captivating eyes",
                "Your gentle touch",
                "Your kind soul",
                "Your thoughtful nature",
                "Your amazing strength",
                "Your joyful dance",
                "Your soothing voice"
            ];
            
            caption.textContent = captions[index] || `Reason #${index + 1}`;
            
            // Assemble back side
            cardBack.appendChild(img);
            cardBack.appendChild(overlay);
            cardBack.appendChild(caption);
            
            // Assemble the card
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            reasonCard.appendChild(cardInner);
            
            // Add to container
            reasonsList.appendChild(reasonCard);
        });
    }

    // Poem Section Animation Functions
    function initializePoemAnimations() {
        // Get all characters in the poem
        const characters = document.querySelectorAll('.character');
        
        // Set progressive animation delays for each character
        let delay = 0;
        let lineCount = 0;
        let prevLine = null;
        
        characters.forEach((char, index) => {
            const currentLine = char.parentElement;
            
            // Check if we've moved to a new line
            if (prevLine !== currentLine) {
                lineCount++;
                delay = lineCount * 0.5; // Start delay for each line
                prevLine = currentLine;
            }
            
            // Increment delay for each character (smoother writing effect)
            delay += 0.05;
            char.style.animationDelay = `${delay}s`;
        });
        
        // Initialize pen movement to follow character animations
        const penContainer = document.querySelector('.pen-container');
        if (penContainer) {
            // Custom pen movement animation
            setTimeout(() => {
                animatePen();
            }, 300);
        }
        
        // Note: The poem-continue button event listener is now handled separately
        // to avoid duplicate event listeners and ensure proper navigation
    }

    // Function to animate the pen following text
    function animatePen() {
        const pen = document.querySelector('.pen-container');
        const lines = document.querySelectorAll('.poem-line');
        if (!pen || lines.length === 0) return;
        
        let currentPosition = { x: 20, y: 50 };
        pen.style.left = `${currentPosition.x}px`;
        pen.style.top = `${currentPosition.y}px`;
        
        // Animation frames for key positions in the poem
        const keyframes = [
            { x: 20, y: 50, duration: 500 },      // Start position
            { x: 300, y: 70, duration: 3000 },    // End of first line
            { x: 50, y: 120, duration: 1000 },    // Start of second line
            { x: 270, y: 120, duration: 2500 },   // End of second line
            { x: 50, y: 210, duration: 1000 },    // After spacing
            { x: 320, y: 210, duration: 3000 },   // End of third line
            { x: 60, y: 260, duration: 1000 },    // Start of fourth line
            { x: 380, y: 260, duration: 3500 },   // End of fourth line
            { x: 50, y: 350, duration: 1000 },    // After spacing
            { x: 330, y: 350, duration: 3000 },   // End of fifth line
            { x: 60, y: 400, duration: 1000 },    // Start of sixth line
            { x: 400, y: 400, duration: 3500 },   // End of sixth line
            { x: 50, y: 490, duration: 1000 },    // After spacing
            { x: 350, y: 490, duration: 3000 },   // End of seventh line
            { x: 60, y: 540, duration: 1000 },    // Start of eighth line
            { x: 370, y: 540, duration: 3500 },   // End of eighth line
            { x: 50, y: 590, duration: 1000 },    // Start of ninth line
            { x: 420, y: 590, duration: 4000 },   // End of ninth line
            { x: 350, y: 650, duration: 2000 },   // Signature position
            { x: 450, y: 650, duration: 1000 }    // Final position off-screen
        ];
        
        // Function to animate between keyframes
        function animateToNextKeyframe(index) {
            if (index >= keyframes.length) return;
            
            const startPos = index === 0 ? currentPosition : keyframes[index - 1];
            const endPos = keyframes[index];
            const duration = endPos.duration;
            const startTime = Date.now();
            
            function animate() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Calculate current position with easing
                const easeProgress = easeInOutQuad(progress);
                const x = startPos.x + (endPos.x - startPos.x) * easeProgress;
                const y = startPos.y + (endPos.y - startPos.y) * easeProgress;
                
                // Update pen position
                pen.style.left = `${x}px`;
                pen.style.top = `${y}px`;
                
                // Continue animation if not complete
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    currentPosition = { x: endPos.x, y: endPos.y };
                    animateToNextKeyframe(index + 1);
                }
            }
            
            // Start animation for this keyframe
            animate();
        }
        
        // Easing function for smoother animation
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        
        // Start the pen animation sequence
        animateToNextKeyframe(0);
    }

    // Event handler for the poem section
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize poem animations immediately if already visible
        if (document.getElementById('poem') && !document.getElementById('poem').classList.contains('hidden')) {
            initializePoemAnimations();
        }
        
        const reasonsContainer = document.querySelector('.reasons-container');
        const flowersContinueBtn = document.getElementById('flowers-continue');
        
        if (flowersContinueBtn) {
            flowersContinueBtn.addEventListener('click', function() {
                document.getElementById('flowers').classList.add('fade-out');
                setTimeout(() => {
                    document.getElementById('flowers').classList.add('hidden');
                    // Show poem section
                    document.getElementById('poem').classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('poem').classList.add('fade-in');
                        // Initialize poem animations after fade-in
                        initializePoemAnimations();
                    }, 100);
                }, 1000);
            });
        }
    });

    // Set up poem-continue button with proper event listener to ensure navigation works
    if (poemContinue) {
        poemContinue.addEventListener('click', function() {
            console.log('Poem continue button clicked');
            
            // Add fade-out class to current section
            poem.classList.add('fade-out');
            
            // After animation completes, hide current and show next
            setTimeout(function() {
                poem.classList.add('hidden');
                final.classList.remove('hidden');
                
                // Add fade-in to next section
                setTimeout(function() {
                    final.classList.add('fade-in');
                }, 100);
            }, 1000);
        });
    }
}); 