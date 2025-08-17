# Portfolio Website with Google Sheets Integration
This portfolio website showcases my work, skills, and provides a contact form that directly saves messages to Google Sheets. Built with modern HTML5, CSS3, and JavaScript, this responsive website features a clean design and seamless form integration.
   
<img width="1920" height="5332" alt="codemoTeams-PortfolioWebsiteTask-3" src="https://github.com/user-attachments/assets/c06f86c8-014f-4826-bc65-0d0b144b7caa" />

## Key Features
- Responsive Design: Works on all devices (mobile, tablet, desktop)
- Modern UI: Clean, professional interface with smooth animations
- Project Showcase: Dedicated section for portfolio projects
- Google Sheets Integration: Contact form messages saved directly to your spreadsheet
- Dynamic Content: JavaScript-powered interactive elements

## Technologies Used
* Frontend: HTML5, CSS3, JavaScript (ES6)
* Form Handling: Google Apps Script
* Icons: Font Awesome
* Animations: CSS Transitions and Transformations

# Setup Instructions
# 1. Clone the Repository
> git clone https://github.com/Uzmakh/Task-02-Portfolio-Website.git
> 
> cd portfolio-website
# 2. Google Sheets Integration Setup
Create a new Google Sheet

Go to Extensions > Apps Script

Replace the default code with: 
> const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1
    const newRow = headers.map(header => e.parameter[header])

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}

function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', doc.getId())
}

3. Run the setup function once to authorize and save spreadsheet ID
4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
5. Copy the deployed web app URL

# 3. Configure Your Website
1. Open script.js
2. Update the googleFormUrl variable with your Google Apps Script URL:

> const googleFormUrl = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
# 4. Customize Content
Edit the following files to personalize:
- index.html: Update sections, projects, and personal info
- styles.css: Customize colors, fonts, and styling
- assets/: Add your profile image and project screenshots

  # File Structure
  portfolio-website/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── profile.jpg
│   ├── project-1.jpg
│   └── project-2.jpg
├── LICENSE
└── README.md
# Usage
1. Open index.html in any modern browser
2. Navigate through sections using the header menu
3. Submit test message via contact form
4. Verify message appears in your Google Sheet
# Customization Options
- Colors: Edit CSS variables in :root selector
- Fonts: Replace Google Fonts import in CSS file
- Sections: Add/remove portfolio sections in HTML
- Animations: Adjust CSS transition properties
- Form Fields: Modify form fields in HTML and Google Apps Script
 # Credits
- Google Sheets integration via Apps Script
- Font Awesome for icons
- Google Fonts for typography
## Live Demo: https://your-portfolio-website.com
## Contact: your.email@example.com
  

 
