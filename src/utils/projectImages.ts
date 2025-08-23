// Project images imported as modules for proper bundling
import DeltaChiWebsite from '../assets/DeltaChiWebsite.png';
import ragChatbot from '../assets/ragChatbot.png';
import websiteChecker from '../assets/websiteChecker.png';
import algovizSortingAlgo from '../assets/algovizSortingAlgo.png';
import recipeSharing_Hub from '../assets/recipeSharing_Hub.png';
import socioeconimic_project from '../assets/socioeconimic_project.png';
import campusFood from '../assets/campus-food.png';
import game2048 from '../assets/2048.png';
import pixelPomodoro from '../assets/pixel-pomodoro.png';
import digiWhiteboard from '../assets/digiWhiteboard.png';
import bookReview from '../assets/Book_review.png';
import huffmanEncoding from '../assets/HuffmanEncodig.png';

// Export all project images
export const projectImages = {
  DeltaChiWebsite,
  ragChatbot,
  websiteChecker,
  algovizSortingAlgo,
  recipeSharing_Hub,
  socioeconimic_project,
  campusFood,
  game2048,
  pixelPomodoro,
  digiWhiteboard,
  bookReview,
  huffmanEncoding,
};

// Helper function to get image by name
export const getProjectImage = (imageName: string): string => {
  return projectImages[imageName as keyof typeof projectImages] || '';
};
