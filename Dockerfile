FROM node:10-alpine AS build
WORKDIR /app
COPY package*.json ./

RUN npm install 
COPY . .

FROM node:10-alpine AS backend
WORKDIR /app
COPY --from=build /app .
EXPOSE 8081
RUN npm run build
CMD ["npm","start"]

FROM node:10-alpine AS frontend
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
RUN npm run build
CMD ["npm","run","client"]
