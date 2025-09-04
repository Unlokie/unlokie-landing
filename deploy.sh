#!/bin/bash

# Unlokie Landing Page Deployment Script
# Deploy to Cloudflare Pages

echo "🚀 Deploying Unlokie Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Cloudflare Pages (if wrangler is installed)
    if command -v wrangler &> /dev/null; then
        echo "🌐 Deploying to Cloudflare Pages..."
        wrangler pages publish out --project-name=unlokie-landing
    else
        echo "📁 Build complete. Upload the 'out' folder to Cloudflare Pages dashboard."
        echo "💡 Or install wrangler CLI: npm install -g wrangler"
    fi
else
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "🎉 Deployment process complete!"
