FROM node:20-alpine
WORKDIR /app

# Copy manifests first for better layer caching
COPY package.json package-lock.json* ./

# Use npm ci if lockfile exists, otherwise fall back to install
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

# Copy source
COPY src ./src

ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "src/index.js"]
