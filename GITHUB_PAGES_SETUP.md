# GitHub Pages Setup

This project is ready to be deployed on GitHub Pages. Here's how to set it up:

## 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it `intro-to-scripting` (or any name you prefer)
3. Make it public (required for free GitHub Pages)

## 2. Upload Files

Upload all the files from this project to your repository:

- `index.html` (main page)
- `nc-parser-simple.js` (NC file parser)
- `probe-analyzer-simple.js` (probe data analyzer)
- `example-usage.js` (complete example)
- `sample_part.nc` (sample NC file)
- `sample_probe_data.csv` (sample probe data)
- `README.md` (project documentation)

## 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

## 4. Access Your Site

GitHub will provide a URL like:
`https://yourusername.github.io/intro-to-scripting`

The site will be available in a few minutes.

## 5. Custom Domain (Optional)

If you have a custom domain, you can:

1. Add a `CNAME` file to your repository with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the custom domain in repository settings

## File Structure

```
intro-to-scripting/
├── index.html              # Main page
├── nc-parser-simple.js     # NC file parser
├── probe-analyzer-simple.js # Probe data analyzer
├── example-usage.js        # Complete example
├── sample_part.nc          # Sample NC file
├── sample_probe_data.csv   # Sample probe data
├── README.md               # Documentation
└── .gitignore              # Git ignore file
```

## Features

- **No build process required** - pure HTML/CSS/JavaScript
- **Works offline** - all dependencies are loaded from CDN
- **Mobile friendly** - responsive design
- **Easy to modify** - simple file structure

## Troubleshooting

- If the site doesn't load, check that all files are uploaded
- Make sure the repository is public
- Wait a few minutes for GitHub Pages to deploy
- Check the repository's Pages settings for any errors
