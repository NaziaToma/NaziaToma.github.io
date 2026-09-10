/**
 * GALLERY PHOTO MANAGEMENT GUIDE
 * 
 * How to add new photos to your gallery:
 * 
 * 1. Place your new photo in the "img/gallery" folder.
 *    - For example, save it as: img/gallery/my_new_trip.jpg
 * 
 * 2. Open this file (gallery-data.js).
 * 
 * 3. Add a new item block inside the "galleryPhotos" array below.
 *    Follow this format:
 *    {
 *      url: "img/gallery/my_new_trip.jpg",
 *      caption: "A beautiful description of your photo",
 *      category: "Travel"
 *    },
 * 
 * 4. Save this file, commit, and push your changes to GitHub!
 * 
 * Note: You can add as many photos as you want. They will automatically load 
 * in the gallery grid and open correctly in the fullscreen lightbox.
 */

const galleryPhotos = [
  {
    url: "img/gallery/chicago_skyline.png",
    caption: "Looking out at the stunning Chicago skyline across the Chicago River.",
    category: "Travel"
  },
  {
    url: "img/gallery/lake_meadow.png",
    caption: "A serene lake and green meadow stretching under a clear blue sky.",
    category: "Nature"
  },
  {
    url: "img/gallery/field_houses.png",
    caption: "Lush green grass fields leading up to vibrant, colorful houses.",
    category: "Travel"
  },
  {
    url: "img/gallery/ancient_ruins.png",
    caption: "Exploring historic stone ruins standing tall against the mountain backdrop.",
    category: "History"
  },
  {
    url: "img/gallery/castle_sunset.png",
    caption: "A beautiful sunset painting pink and orange clouds over a grand university hall.",
    category: "Architecture"
  },
  {
    url: "img/gallery/golden_gate.png",
    caption: "A spectacular view of the Golden Gate Bridge stretching across the bay on a bright day.",
    category: "Travel"
  },
  {
    url: "img/gallery/palace_interior.png",
    caption: "Inside a breathtaking palace adorned with golden columns, balconies, and high frescoed ceilings.",
    category: "Architecture"
  },
  {
    url: "img/gallery/lake_dock.png",
    caption: "A peaceful wooden dock leading out into clear, calm lake waters.",
    category: "Nature"
  }
];

// Exporting to window so it is accessible in index.js across different scripts
window.galleryPhotos = galleryPhotos;
