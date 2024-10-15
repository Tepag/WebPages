# WebPages

#这个代码库将用于存放PassionLabPolimi的网页代码



# For code developers
The structure of the code is:

/project-root
- /assets            # All media files like images, videos, fonts, etc.
  - /images        # Images (JPEG, PNG, SVG, etc.)
    - /videos        # Video files
    - /fonts         # Custom fonts used in the site
    - /icons         # Favicon and other icons
  - /css               # Stylesheets
    - /vendor        # Third-party or external CSS files
    - main.css       # Main stylesheet
  - /js                # JavaScript files
    - /vendor        # Third-party or external JS libraries
    - main.js        # Main JavaScript file
  - /partials          # Reusable HTML snippets (header, footer, etc.)
  - /pages             # HTML files for individual pages
    - about.html     # About page
    - contact.html   # Contact page
  - /index.html        # Home page
  - /data              # JSON or other data files (if needed)
  - /dist              # Compiled files (if using build tools like Webpack)
  - README.md          # Project documentation or instructions
