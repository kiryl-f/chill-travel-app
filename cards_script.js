document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
      { text: "CHILL helped me discover the hidden spots in my own city!", author: "John Doe" },
      { text: "As a tourist, I found the best guides and tips thanks to CHILL!", author: "Jane Smith" },
      { text: "I love how easy it is to connect with locals and find the best experiences.", author: "Alex Johnson" },
      { text: "Amazing platform! It made my trip so much easier and more enjoyable!", author: "Maria Lee" },
      { text: "A great resource for both locals and tourists. Highly recommend it!", author: "Chris Evans" },
      { text: "I was able to find some amazing off-the-beaten-path places to visit, thanks to CHILL.", author: "Linda Scott" },
    ];
  
    const container = document.getElementById('testimonial-cards');
  
    function createTestimonialCard(testimonial) {
      const card = document.createElement('div');
      card.classList.add('testimonial-card');

      const textDiv = document.createElement('div');
      textDiv.className="testimonial-text-container";
      const h1 = document.createElement('h1');
      h1.textContent = `${testimonial.author}`;  

      const p = document.createElement('p');
      p.textContent = `"${testimonial.text}"`;

      h1.style.marginBottom = '2vh';

      textDiv.appendChild(h1);
      textDiv.appendChild(p);

      const nameSplit = testimonial.author.split(" ");
      console.log(typeof nameSplit);
      const img = document.createElement('img');
      img.src="https://avatar.iran.liara.run/username?username=" + nameSplit[0] + '+' + nameSplit[1];
      img.className="testimonial-profile-pic";
      img.style.alignSelf = 'center';

      card.appendChild(img);
      card.append(textDiv);
      return card;
    }
  
    testimonials.forEach(testimonial => {
      const card = createTestimonialCard(testimonial);
      container.appendChild(card);
    });
  
    testimonials.forEach(testimonial => {
      const card = createTestimonialCard(testimonial);
      container?.appendChild(card);  
    });
  });
  