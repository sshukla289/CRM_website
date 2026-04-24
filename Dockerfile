# syntax=docker/dockerfile:1

FROM node:20-bookworm-slim AS deps
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-bookworm-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

RUN useradd -m --system --uid 1001 nextjs && \
    mkdir -p /app && \
    chown -R nextjs:root /app && \
    mkdir -p /home/nextjs/.npm && \
    chown -R nextjs:root /home/nextjs/.npm

COPY --from=builder --chown=nextjs:root /app/public ./public
COPY --from=builder --chown=nextjs:root /app/.next ./.next
COPY --from=builder --chown=nextjs:root /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:root /app/package.json ./package.json
COPY --from=builder --chown=nextjs:root /app/next.config.mjs ./next.config.mjs

USER nextjs
EXPOSE 3000

CMD ["npm","run","start","--","-H","0.0.0.0","-p","3000"]
