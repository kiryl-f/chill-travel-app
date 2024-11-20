document.addEventListener('DOMContentLoaded', function () {
    const tagContainer = document.getElementsByClassName('tags-container')[0];
    const promptInput = document.getElementById('user-prompt');

    const tags = [
        { text: 'Adventure', color: '#FFD580' },
        { text: 'Thrilling', color: '#FFEE93' },
        { text: 'Hiking', color: '#9FD9A7' },
        { text: 'Wildlife', color: '#D2B48C' },
        { text: 'Cool', color: '#87CEEB' },
        { text: 'Sunny', color: '#FFD700' },
        { text: 'Snowy', color: '#B0E0E6' },
        { text: 'Rainy', color: '#6A5ACD' },
        { text: 'Luxury', color: '#FFD700' },
        { text: 'Affordable', color: '#98FB98' },
        { text: 'Free', color: '#FFFFF0' },
        { text: 'Relaxing', color: '#E6E6FA' },
        { text: 'Historic', color: '#FAEBD7' },
        { text: 'Nightlife', color: '#FF69B4' },
        { text: 'Shopping', color: '#FF6347' },
        { text: 'Street Food', color: '#FFDAB9' },
        { text: 'Gourmet', color: '#FFE4B5' },
    ];

    function addTagToPrompt(tagText) {
        promptInput.value += ` ${tagText}`;
    }

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag.text;
        tagElement.style.backgroundColor = tag.color;
        tagElement.classList.add('tag');
        tagElement.addEventListener('click', () => addTagToPrompt(tag.text));
        tagContainer.appendChild(tagElement);
    });
});
