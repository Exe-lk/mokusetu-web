'use client';
export function decodeHTMLEntities(text) {
  const textArea = document?.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export function stripHtmlTags(text) {
  if (!text) return '';
  
  // Create a temporary div element to parse HTML
  const temp = document?.createElement('div');
  temp.innerHTML = text;
  
  // Get text content and decode HTML entities
  const cleanText = temp.textContent || temp.innerText || '';
  
  // Decode any remaining HTML entities
  return decodeHTMLEntities(cleanText);
}

export function formatDate(dateString) {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Create an array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the month name
  const month = months[date.getMonth()];

  // Get the day of the month
  const day = date.getDate();

  // Get the full year
  const year = date.getFullYear();

  // Format the date string
  return `${month} ${day}, ${year}`;
}
