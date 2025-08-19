#!/bin/bash

# HYPIQ Waitlist Deployment Script
# Deploy hypiq-waitlist to production on hypiq.finance

echo "🚀 Starting HYPIQ Waitlist deployment..."

# 1. Stop existing application
echo "⏹️  Stopping existing application..."
pm2 stop hypiq-waitlist 2>/dev/null || echo "No existing app to stop"

# 2. Build the application
echo "🔨 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Aborting deployment."
    exit 1
fi

# 3. Install production dependencies
echo "📦 Installing production dependencies..."
npm ci --only=production

# 4. Start with PM2
echo "🎯 Starting application with PM2..."
pm2 start ecosystem.config.js

# 5. Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# 6. Show status
echo "📊 Current PM2 status:"
pm2 list

echo "✅ Deployment completed!"
echo "🌐 Site should be available at: https://hypiq.finance"
echo ""
echo "Useful commands:"
echo "  pm2 logs hypiq-waitlist    # View logs"
echo "  pm2 restart hypiq-waitlist # Restart app"
echo "  pm2 stop hypiq-waitlist    # Stop app"
