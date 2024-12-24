# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install required dependencies including OpenSSL
RUN apk add --no-cache openssl libc6-compat

# Install pnpm
RUN npm install -g pnpm

# Copy only package files first (for better cache utilization)
COPY package.json ./
COPY prisma ./prisma/

# Install dependencies with no frozen lockfile first time
RUN pnpm install --no-frozen-lockfile

# Copy source files
COPY . .

# Generate Prisma Client
RUN pnpx prisma generate

# Build the application (without db push in Docker)
RUN pnpx contentlayer build && pnpm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Install required dependencies including OpenSSL
RUN apk add --no-cache openssl libc6-compat

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json ./
COPY prisma ./prisma/

# Install only production dependencies
RUN pnpm install --prod --no-frozen-lockfile

# Copy built assets from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.contentlayer ./.contentlayer

# Add runtime env vars
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]