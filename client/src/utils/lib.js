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

export function formatCategoryName(categoryName) {
  if (!categoryName) return categoryName;
  
  // Check if the category name matches the pattern "YYYY-MM" (e.g., "2026-01")
  const yearMonthPattern = /^(\d{4})-(\d{2})$/;
  const match = categoryName.match(yearMonthPattern);
  
  if (match) {
    const year = match[1];
    const monthNum = parseInt(match[2], 10);
    
    // Array of month abbreviations
    const monthAbbr = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    
    // Validate month number (1-12)
    if (monthNum >= 1 && monthNum <= 12) {
      return `${year} ${monthAbbr[monthNum - 1]}`;
    }
  }
  
  // If it doesn't match the pattern, return the original name
  return categoryName;
}