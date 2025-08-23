// Image assets - ensures proper bundling for production
// This approach imports images as modules to guarantee they're included in the build

// Project images
import deltaChi from '/DeltaChiWebsite.png';
import ragChatbot from '/ragChatbot.png';
import websiteChecker from '/websiteChecker.png';
import algoviz from '/algovizSortingAlgo.png';
import recipeHub from '/recipeSharing_Hub.png';
import socioeconomic from '/socioeconimic_project.png';
import campusFood from '/campus-food.png';
import game2048 from '/2048.png';
import pomodoro from '/pixel-pomodoro.png';
import whiteboard from '/digiWhiteboard.png';
import bookReview from '/Book_review.png';
import huffman from '/HuffmanEncodig.png';

// Profile images
import profileJpeg from '/apurbo.jpeg';
import profilePng from '/apurbo.png';

// Journal images
import raStaff2025 from '/RAStaff2025.JPG';
import raIntro from '/RAintroduction.PNG';
import lastWingMeeting from '/last_wing_meeting.JPG';
import rechartering from '/rechartering.jpg';
import raBanquet from '/RAbanquetBestStaff.jpg';
import spring2025Banquet from '/Spring2025AcademicBanquet.JPG';
import microsoftShadow from '/MicrosoftShadow.jpg';
import fall2024Banquet from '/Fall2024AcademicBanquet.JPG';
import bangladesh from '/Summer24Bangladesh.jpg';
import ra2024 from '/RA2024.JPG';
import spring2024Banquet from '/Spring2024Banquet.png';
import becomingMember from '/BecomingMember.jpg';
import sanFrancisco from '/SanFransisco.png';

// Logos
import logo from '/logo.svg';
import logoLarge from '/logo-large.svg';

export const projectImages = {
  deltaChi,
  ragChatbot,
  websiteChecker,
  algoviz,
  recipeHub,
  socioeconomic,
  campusFood,
  game2048,
  pomodoro,
  whiteboard,
  bookReview,
  huffman
};

export const profileImages = {
  jpeg: profileJpeg,
  png: profilePng
};

export const journalImages = {
  raStaff2025,
  raIntro,
  lastWingMeeting,
  rechartering,
  raBanquet,
  spring2025Banquet,
  microsoftShadow,
  fall2024Banquet,
  bangladesh,
  ra2024,
  spring2024Banquet,
  becomingMember,
  sanFrancisco
};

export const logos = {
  logo,
  logoLarge
};

// Helper function to get image URL with fallback
export const getImageUrl = (imagePath: string, fallbackEmoji = '🖼️') => {
  try {
    // If it's already a full URL or data URL, return as-is
    if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
      return imagePath;
    }
    
    // For local images, ensure they start with /
    const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return cleanPath;
  } catch (error) {
    console.warn(`Failed to load image: ${imagePath}`, error);
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1a1a1a"/>
        <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="48" fill="#666" text-anchor="middle">${fallbackEmoji}</text>
        <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="14" fill="#999" text-anchor="middle">Image not found</text>
      </svg>
    `)}`;
  }
};
