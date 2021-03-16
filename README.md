# [NestJS](https://nestjs.com/) + [NextJS](https://nextjs.org/) + [next-auth](https://next-auth.js.org/)

![demo](demo.gif)

## Install

```
yarn
```

## Features

- clean architecture
- dependency injection using interfaces
- JWT authentication
- local dev credentials provider

## Run

```sh
export JWT_SECRET=blabla
export NEXTAUTH_URL=http://localhost:3000
 
cd packages/backend && yarn dev
cd packages/frontend && yarn dev
```
