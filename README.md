# 📰 Bangla News 24

### A Modern Bengali Digital News Portal

<p align="center">
  A responsive digital news platform designed to make news discovery simple, accessible, and engaging.
</p>

<p align="center">
  <a href="https://bangla-news24-two.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-16A34A?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/mdsakibdev/Bangla-News-24">
    <img src="https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
  </a>
</p>

---

## 🖥️ Project Preview

<p align="center">
  <a href="https://bangla-news24-two.vercel.app/">
    <img
      src="./public/screenshots/bangla-news24-homepage.png"
      alt="Bangla News 24 Homepage Preview"
      width="100%"
    />
  </a>
</p>

<p align="center">
  <em>A preview of the Bangla News 24 digital news portal.</em>
</p>

<p align="center">
  <a href="https://bangla-news24-two.vercel.app/">
    <strong>🌐 Explore the Live Website →</strong>
  </a>
</p>

---

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [News Categories](#-news-categories)
- [User Experience](#-user-experience)
- [Technology Stack](#-technology-stack)
- [Authentication and Database](#-authentication-and-database)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Security Considerations](#-security-considerations)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 📖 Project Overview

**Bangla News 24** is a Bengali-language digital news portal built to provide readers with an organized and accessible way to explore news and current affairs.

The platform presents news through categorized sections, featured stories, and the latest headlines. Its interface is designed to help readers discover articles across different topics through a straightforward browsing experience.

The project also includes sign-in and sign-up interfaces, bringing authentication into the overall news-reading experience.

The application is built with modern web technologies, with an emphasis on responsive UI, component-based development, and maintainable code.

### 🎯 Project Goals

- Organize news content into clearly defined categories.
- Make important and recent stories easy to discover.
- Provide a clean, readable news-browsing experience.
- Build a responsive interface for different screen sizes.
- Integrate user authentication into the platform.
- Practice modern full-stack web development concepts.

## 🌐 Live Demo

Explore the deployed application:

**Website:** [https://bangla-news24-two.vercel.app/](https://bangla-news24-two.vercel.app/)

**GitHub Repository:** [https://github.com/mdsakibdev/Bangla-News-24](https://github.com/mdsakibdev/Bangla-News-24)

## ✨ Key Features

### 📰 News Discovery

- Browse news from the homepage.
- Explore featured and selected stories.
- Discover recent headlines through the latest-news section.
- Navigate between different news categories.
- Open individual news stories from the available article links.

### 🗂️ Category-Based Navigation

News is organized into sections so readers can focus on the topics they are interested in.

### 🔐 User Authentication

The application includes sign-in and sign-up interfaces. The project uses Better Auth and MongoDB-related dependencies for its authentication infrastructure.

Actual authentication behavior depends on the configured application and database environment.

### 📱 Responsive Interface

The website is designed to provide a usable browsing experience across desktop, tablet, and mobile devices.

### 📄 Informational Pages

The website includes links to its Privacy Policy and Terms pages to help users find relevant information about using the platform.

### 🎨 Modern UI

- Structured news sections.
- Clear visual hierarchy.
- Consistent navigation.
- Reusable React components.
- Icons and UI enhancements using the project's installed libraries.

## 🗞️ News Categories

The website's navigation includes the following categories:

| Category   | Description                              |
| ---------- | ---------------------------------------- |
| Home       | Browse the main news feed                |
| Politics   | Political news and developments          |
| World      | International news and global affairs    |
| Economy    | Economic news and financial developments |
| Health     | Health-related news and information      |
| Sports     | Sports news and updates                  |
| Technology | Technology and digital-world news        |
| Video      | Video-related news content               |

*The available articles and content depend on the deployed application's data.*

## 👤 User Experience

Bangla News 24 is designed around a simple news-browsing workflow:

1. Open the homepage.
2. Explore featured stories and recent headlines.
3. Select a category to browse related news.
4. Open an article to read its available content.
5. Use the authentication pages where account access is provided.

The interface prioritizes discoverability and straightforward navigation.

## 🧰 Technology Stack

The following technologies and libraries are listed in the project's package configuration.

### Frontend

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| Next.js 16         | Application framework and routing |
| React 19           | Component-based user interfaces   |
| TypeScript         | Type-safe development             |
| Tailwind CSS 4     | Utility-first styling             |
| DaisyUI 5          | Prebuilt UI styling components    |
| React Icons        | Icon library                      |
| React Hot Toast    | Toast notifications               |
| React Marquee Text | Scrolling text effects            |

### Authentication and Data

| Technology                      | Purpose                             |
| ------------------------------- | ----------------------------------- |
| Better Auth                     | Authentication framework            |
| MongoDB                         | Document database                   |
| MongoDB Adapter for Better Auth | Authentication database integration |

### Development and Deployment

| Technology | Purpose                  |
| ---------- | ------------------------ |
| Node.js    | JavaScript runtime       |
| npm        | Dependency management    |
| ESLint     | Code linting             |
| Vercel     | Live deployment platform |

## 🔐 Authentication and Database

The project includes Better Auth and MongoDB dependencies.

For local development, configure the authentication and database settings required by the application's existing implementation.

Important considerations:

- Keep database credentials in environment variables.
- Never expose database connection strings or authentication secrets in client-side code.
- Use the environment variable names expected by the existing authentication configuration.
- Verify database connectivity and authentication callbacks before deploying changes.

Refer to the actual authentication configuration in the source code for the exact setup requirements.

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following tools:

- Node.js compatible with the project's Next.js version.
- npm.
- Git.
- Access to a MongoDB database if required by the authentication configuration.

### 1. Clone the Repository

```bash
git clone https://github.com/mdsakibdev/Bangla-News-24.git
```

### 2. Navigate to the Project

```bash
cd Bangla-News-24
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and add the environment variables required by the existing application.

See the [Environment Variables](#-environment-variables) section below.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit:

[http://localhost:3000](http://localhost:3000)

The development server will run locally, allowing you to explore and modify the application.

## 🔑 Environment Variables

The exact environment variables depend on the current source-code configuration.

Before running the project, inspect the authentication setup and database connection code to identify the required variable names.

Common examples for a Next.js application using Better Auth and MongoDB may include:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secure_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

**Important:** These names are examples, not a verified list of every variable required by this repository. Use the exact names expected by your source code.

Never commit real credentials, private API keys, database passwords, or production secrets to GitHub.

## 📜 Available Scripts

The project currently defines the following npm scripts:

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint                           |

Run the production build before deploying significant changes.

## 📁 Project Structure

The repository currently includes a `public` directory and a `src` directory, along with the Next.js configuration, TypeScript configuration, package files, and related development configuration.

A simplified overview:

```text
Bangla-News-24/
├── public/             # Public static assets
├── src/                # Application source code
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

*This is a high-level overview. The internal contents of `src/` and `public/` may change as the project evolves.*

## 🚀 Deployment

The live version of Bangla News 24 is hosted on Vercel.

To deploy your own updated version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the environment variables required by the application.
4. Confirm that the production database and authentication configuration are valid.
5. Deploy the project.
6. Verify the live website and authentication flow.

For additional information, visit the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🔒 Security Considerations

When maintaining or extending the project:

- Keep secrets on the server.
- Validate untrusted input.
- Protect authenticated routes and sensitive operations.
- Configure production environment variables securely.
- Avoid committing `.env.local` or other files containing credentials.
- Verify authentication and database permissions before production deployment.

## 🛣️ Future Improvements

Potential improvements for future versions include:

- Advanced article search.
- More refined news filtering.
- Improved loading and error states.
- Enhanced accessibility.
- Additional personalization options.
- Performance and SEO improvements.
- Automated testing for critical user flows.

These are potential enhancements, not claims about features currently implemented.

## &#x20;Author

**Abdur Razzak Sakib**

Full-Stack Web Developer

- **GitHub:** [@mdsakibdev](https://github.com/mdsakibdev)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/abdurrazzak1)
- **Email:** [abdurrazzaqsakib@gmail.com](mailto\:abdurrazzaqsakib@gmail.com)

## 📄 License

No specific open-source license is currently documented in this README.

Before publishing the project for public reuse, add an appropriate `LICENSE` file and update this section to reflect your chosen license.

---

\<p align="center">
&#x20; Built with ❤️ by \<a href="[https://github.com/mdsakibdev](https://github.com/mdsakibdev)">Abdur Razzak Sakib\</a>
\</p>

\<p align="center">
&#x20; \<a href="[https://bangla-news24-two.vercel.app/](https://bangla-news24-two.vercel.app/)">Visit Bangla News 24\</a>
\</p>
