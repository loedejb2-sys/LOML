// Generate Floating Background Hearts Dynamically
function createFloatingHearts() {
    const heartCount = 18;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(heart);
    }
}

// User Action: Clicks "Yes"
function selectYes() {
    const emoji = document.getElementById('emoji');
    const heading = document.getElementById('heading');
    const buttons = document.getElementById('buttons');
    const message = document.getElementById('message');

    emoji.innerHTML = '💖';
    heading.innerHTML = 'You make my world complete!';
    buttons.style.display = 'none';

    message.classList.add('success');
    message.style.display = 'block';
    message.innerHTML = `You are, without a doubt, the most incredible person to ever come into my life. Every single moment with you—even the simplest ones—feels magical. You bring so much light, comfort, and warmth into my world just by being yourself. I love the way you make me smile, how easy it is to talk to you, and how every distance feels smaller when I'm connected to you. Thank you for being my favorite person, my safest space, and my absolute everything. Here is to us, forever and always. ✨🥰`;
}

// User Action: Clicks "No"
function selectNo() {
    const emoji = document.getElementById('emoji');
    const heading = document.getElementById('heading');
    const buttons = document.getElementById('buttons');
    const message = document.getElementById('message');

    emoji.innerHTML = '🥺';
    heading.innerHTML = 'I understand...';
    buttons.style.display = 'none';

    message.classList.add('sad');
    message.style.display = 'block';
    message.innerHTML = `I respect how you feel. Thank you for being honest with me. You'll always be special to me no matter what. 💔`;
}

// Initialize floating hearts on page load
document.addEventListener('DOMContentLoaded', createFloatingHearts);
