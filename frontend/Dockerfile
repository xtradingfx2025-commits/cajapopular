FROM node:20-alpine

# Install curl for health checks and Chromium for Playwright
RUN apk add --no-cache curl \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

#**********************

WORKDIR /
RUN chmod -R 777 /src
RUN mkdir -p /src/app/.next  
COPY /src/app/. /src/app

RUN mkdir -p /src/components/.next
COPY /src/components/. /src/components





#**********************

# Configure Playwright to use system Chromium
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 \
    PLAYWRIGHT_BROWSERS_PATH=0 \
    npm_config_update_notifier=false \
    CHROMIUM_PATH=/usr/bin/chromium-browser \
    PW_LAUNCH_ARGS="--no-sandbox --disable-dev-shm-usage"

# Copy package files
COPY package.json package-lock.json* ./
#COPY src/*.js ./src/.

# Install dependencies
RUN npm install

EXPOSE 3000

# Set environment variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start development server
CMD ["npm", "run", "dev"]

