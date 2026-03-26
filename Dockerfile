FROM node:22-bookworm-slim

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
