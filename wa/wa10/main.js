const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['img1.jpg', `img2.jpg`,`img3.jpg`,`img4.jpg`,`img5.jpg`];
/* Declaring the alternative text for each image file */
const alts = { 'pic1.jpg' : 'blue eyeball closeup','pic2.jpg' : 'volcanic looking rock, very wavy', 'pic3.jpg' : 'purple flowers', 'pic4.jpg' : 'eygiptian artwork', 'pic5.jpg' : 'moth on a leaf' }
/* Looping through images */

for (const image of images){

    const newImage = document.createElement('img');

    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', point => {
        displayedImage.src = point.target.src;
        displayedImage.alt = point.target.alt;
      });
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  