# Bento The Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/2d3c8f6b-59ea-40fb-93ab-66deba2badfe/deploy-status)](https://app.netlify.com/sites/marvelous-sopapillas-b3ff10/deploys)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This website is for [Bento 🍱](https://github.com/thebentobot/dotBento) a Discord bot with server moderation tools and various entertaining commands.

The Bento 🍱 website is written in TypeScript and powered by the [React](https://reactjs.org/) Framework [Next.js](https://nextjs.org/), with CSS from [tailwindcss](https://tailwindcss.com/), and a [PostgreSQL](https://www.postgresql.org/) database used with the ORM [Prisma](https://www.prisma.io/)

## Getting Started

### Dependencies

* Obviously the npm dependencies.

* A [PostgreSQL](https://www.postgresql.org/) Database, or any database where you can store total user count, total server count, and global leaderboard data (perhaps per server too if you want to support dynamic routing). It may be possible to connect to other SQL databases with Prisma, but PostgreSQL is recommended in case of unique PostgreSQL features.

### Installing Bento 🍱 web

* ```git clone https://github.com/thebentobot/bento-the-website.git``` or download ZIP.
* ```npm install``` assuming you have installed [node.js](https://nodejs.org/en/)
* Create a [dotenv](https://www.npmjs.com/package/dotenv) file with the environment variables: ```DATABASE_URL=[your database, written with the following syntax "postgresql://username:password@127.0.0.1:5432/database"]```

### Running Bento 🍱 web

* ```npm run dev```

## Development

This website is mainly developed by [Christian](https://github.com/banner4422).

Pull requests are very welcome if the features/changes makes sense and are up to par in quality.

## License

This project is licensed under the [AGPL-3.0 License](https://github.com/thebentobot/bento-web/blob/1.0/LICENSE)

The avatar illustration is done by [Dan](https://twitter.com/dannalanart).