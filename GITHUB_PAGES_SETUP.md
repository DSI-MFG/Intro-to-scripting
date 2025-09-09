# GitHub Pages Setup Guide

This guide shows how to deploy the "Scripting for Machinists" learning platform to GitHub Pages.

## 🚀 **Why GitHub Pages?**

### **Benefits**

- **Free Hosting**: No cost for static sites
- **Easy Setup**: Simple configuration
- **Custom Domain**: Use your own domain name
- **HTTPS**: Automatic SSL certificates
- **CDN**: Fast global delivery
- **Version Control**: Easy updates via Git

### **Limitations**

- **Static Only**: No server-side processing
- **Client-Side Execution**: JavaScript runs in browser
- **File Size Limits**: 1GB repository limit
- **Bandwidth**: 100GB/month limit

## 📁 **File Structure for GitHub Pages**

```
├── index.html                    # Main page (rename from index-github-pages.html)
├── nc-parser-simple.js          # User's NC parser code
├── probe-analyzer-simple.js     # User's probe analyzer code
├── sample_part.nc               # Sample NC file
├── sample_probe_data.csv        # Sample probe data
└── README.md                    # Project documentation
```

## 🛠 **Setup Instructions**

### **1. Prepare Files**

```bash
# Rename the GitHub Pages version to index.html
mv index-github-pages.html index.html

# Remove server files (not needed for GitHub Pages)
rm main.go go.mod Dockerfile server.js package-htmx.json
rm -rf templates/
```

### **2. Create GitHub Repository**

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `scripting-for-machinists` (or your choice)
3. **Description**: "Learning platform for machinists to learn JavaScript scripting"
4. **Visibility**: Public (required for free GitHub Pages)
5. **Initialize**: Don't initialize with README (we have one)

### **3. Upload Files**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Scripting for Machinists learning platform"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/scripting-for-machinists.git

# Push to GitHub
git push -u origin main
```

### **4. Enable GitHub Pages**

1. **Go to repository**: https://github.com/YOUR_USERNAME/scripting-for-machinists
2. **Click Settings**: Repository settings tab
3. **Scroll to Pages**: Left sidebar, under "Code and automation"
4. **Source**: Deploy from a branch
5. **Branch**: Select "main" branch
6. **Folder**: Select "/ (root)" folder
7. **Save**: Click "Save" button

### **5. Access Your Site**

- **URL**: `https://YOUR_USERNAME.github.io/scripting-for-machinists`
- **Custom Domain**: Add in Pages settings if desired
- **HTTPS**: Automatically enabled

## 🔧 **Configuration Options**

### **Custom Domain**

1. **Add CNAME file**:

   ```bash
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A record: `@` → GitHub IP addresses

### **Custom 404 Page**

```bash
# Create custom 404 page
echo '<!DOCTYPE html>
<html>
<head>
    <title>Page Not Found</title>
    <meta http-equiv="refresh" content="0; url=/">
</head>
<body>
    <p>Redirecting to <a href="/">home page</a>...</p>
</body>
</html>' > 404.html
```

## 📊 **Performance Considerations**

### **File Optimization**

```bash
# Minify HTML (optional)
# Install html-minifier
npm install -g html-minifier

# Minify the HTML file
html-minifier --collapse-whitespace --remove-comments --minify-css --minify-js index.html -o index.html
```

### **CDN Benefits**

- **Global Delivery**: Files served from nearest location
- **Caching**: Static files cached for performance
- **HTTPS**: Automatic SSL certificates
- **Compression**: Automatic gzip compression

## 🔒 **Security Considerations**

### **Client-Side Execution**

- **JavaScript Security**: Code runs in user's browser
- **File Access**: Limited to uploaded files
- **No Server Access**: Can't access server resources
- **Sandboxed**: Browser security model applies

### **Best Practices**

- **Input Validation**: Validate file types and sizes
- **Error Handling**: Graceful error messages
- **Code Sanitization**: Basic input cleaning
- **HTTPS Only**: Force HTTPS in production

## 🚀 **Deployment Workflow**

### **Automatic Deployment**

```bash
# Make changes to files
# Commit changes
git add .
git commit -m "Update learning platform"

# Push to GitHub
git push origin main

# GitHub Pages automatically rebuilds
# Changes live in ~1-2 minutes
```

### **Manual Deployment**

1. **Edit files** in GitHub web interface
2. **Commit changes** directly
3. **Pages rebuilds** automatically
4. **Check status** in Pages settings

## 📈 **Analytics and Monitoring**

### **GitHub Insights**

- **Traffic**: View page views and referrers
- **Clones**: Track repository clones
- **Forks**: Monitor community interest

### **Google Analytics**

```html
<!-- Add to index.html head section -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## 🔄 **Updates and Maintenance**

### **Regular Updates**

```bash
# Pull latest changes
git pull origin main

# Make updates
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: [description]"
git push origin main
```

### **Version Control**

- **Tags**: Create releases for major versions
- **Branches**: Use feature branches for development
- **Issues**: Track bugs and feature requests
- **Wiki**: Document advanced usage

## 🎯 **Advanced Features**

### **Jekyll Integration**

```yaml
# _config.yml
title: Scripting for Machinists
description: Learning platform for machinists
baseurl: /scripting-for-machinists
url: https://YOUR_USERNAME.github.io
```

### **Custom Build Process**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📚 **Troubleshooting**

### **Common Issues**

**Pages not updating**:

- Check GitHub Pages settings
- Verify branch and folder selection
- Wait 5-10 minutes for propagation

**404 errors**:

- Ensure index.html exists in root
- Check file permissions
- Verify repository is public

**JavaScript errors**:

- Check browser console
- Verify file paths
- Test locally first

### **Debugging**

```bash
# Test locally
python -m http.server 8000
# Open http://localhost:8000

# Check GitHub Pages logs
# Go to repository → Actions → Pages
```

## 🎉 **Success!**

Your "Scripting for Machinists" learning platform is now live on GitHub Pages!

- **URL**: `https://YOUR_USERNAME.github.io/scripting-for-machinists`
- **Updates**: Push to main branch for automatic deployment
- **Custom Domain**: Add in Pages settings if desired
- **Analytics**: Monitor usage in repository insights

The platform is now accessible worldwide with fast CDN delivery and automatic HTTPS!
