<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Template Company Website</h3>

  <p align="center">
    A template website built with Astro and Sanity, to make building a website easy.
    <br />
    <a href="https://brendokht-company-template.netlify.app">View Demo</a>
    &middot;
    <a href="https://github.com/brendokht/template-company-website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/brendokht/template-company-website/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Template Company Website Screen Shot][product-screenshot]](https://github.com/user-attachments/assets/1f062e21-8cb7-4083-8476-d75d8c96d822)

A versatile and free template website built with Astro, designed for a wide range of uses, from company websites to personal projects and more. It features a seamlessly integrated Sanity.io blog, providing a robust content management solution out-of-the-box. This template prioritizes accessibility and responsiveness, ensuring an optimal user experience for all visitors, regardless of device or ability.

### Key Features

- Built with Astro: Modern, fast, and flexible web development.
- Integrated Sanity.io Blog: Easy content management with a powerful headless CMS.
- Fully Responsive: Optimized for all screen sizes and devices.
- Highly Accessible: Designed with best practices for inclusivity.
- Free for Any Use: Deploy, customize, and extend without restrictions."

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Astro][Astro]][Astro-url]
* [![Sanity][Sanity]][Sanity-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Bun][Bun]][Bun-url]
* [![Netlify][Netlify]][Netlify-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![ESLint][ESLint]][ESLint-url]
* [![Prettier][Prettier]][Prettier-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project uses `bun` as its package manager. Ensure you have `bun` installed.
* Windows
  ```sh
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```
  or on Linux
  ```sh
  curl -fsSL https://bun.sh/install | bash
  ```
  (See [bun.sh](https://bun.sh/) for more installation options, or just change to your preferred package manager for your own usage.)

This project uses Sanity as a headless CMS for its blog.

  To set up the _Sanity_ blog, follow these steps.

  1. Sign up for Sanity at [sanity.io](https://www.sanity.io/)
  2. Go to the dashboard and create a new project.
  3. Make note of the Project ID, Dataset, Sanity API Read Token (for Visual Editing), and a true/false value for usage of Visual Editing
     - This project by default has visual editing enabled. If you choose to use visual editing for your project, it is recommended to disallow Visual Editing in
       the production environment. Read more about Visual Editing [here](https://www.sanity.io/guides/sanity-astro-blog#e6fc3f4816ca).

This project includes a _Netlify_ adapter, as that is where the demo is hosted.

  You can keep this if you plan on using Netlify, or you can either remove it or change it to your own platform's adapter. See [here](https://docs.astro.build/en/guides/integrations-guide/) for more options with the adapters. If you choose to remove it, feel free to check out [this](https://docs.astro.build/en/guides/deploy/) page for official deployment guides for Astro. 
  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/brendokht/template-company-website.git
   ```
2. Install dependencies
   ```sh
   bun install
   ```
3. Set up Environment Variables: Create a `.env` file in the root of your project and add the values from earlier:
   ```
   PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
   PUBLIC_SANITY_DATASET="your_sanity_dataset"
   SANITY_API_READ_TOKEN="your_sanity_read_token"
   PUBLIC_SANITY_VISUAL_EDITING_ENABLED="true" # or "false"
   ```
   *Note: Variables prefixed with `PUBLIC_` are exposed to the client-side, however, all public values included in the project were recommended to be public*
4. Change git remote URL to avoid accidental pushes to the base project
   ```sh
   git remote set-url origin [YOUR_REPOSITORY_URL]
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

After installation, you can run the following scripts:

* To start the development server:
  ```sh
  bun run dev
  ```
* To build the project for production:
  ```sh
  bun run build
  ```
* To preview the production build locally:
  ```sh
  bun run preview
  ```
* To format code with Prettier:
  ```sh
  bun run format
  ```
* To run ESLint checks:
  ```sh
  bun run lint
  ```
* To check TypeScript types:
  ```sh
  bun run check-types
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/brendokht/template-company-website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=brendokht/template-company-website" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

[@brendokht](https://twitter.com/brendokht)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

N/A

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/brendokht/template-company-website.svg?style=for-the-badge
[contributors-url]: https://github.com/brendokht/template-company-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brendokht/template-company-website.svg?style=for-the-badge
[forks-url]: https://github.com/brendokht/template-company-website/network/members
[stars-shield]: https://img.shields.io/github/stars/brendokht/template-company-website.svg?style=for-the-badge
[stars-url]: https://github.com/brendokht/template-company-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/brendokht/template-company-website.svg?style=for-the-badge
[issues-url]: https://github.com/brendokht/template-company-website/issues
[license-shield]: https://img.shields.io/github/license/brendokht/template-company-website.svg?style=for-the-badge
[license-url]: https://github.com/brendokht/template-company-website/blob/main/LICENSE
[product-screenshot]: https://github.com/user-attachments/assets/1f062e21-8cb7-4083-8476-d75d8c96d822
[Astro]: https://img.shields.io/badge/Astro-ff5d01?style=for-the-badge&logo=astro&logoColor=ff5d0100&labelColor=191919
[Astro-url]: https://astro.build/
[Sanity]: https://img.shields.io/badge/sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white
[Sanity-url]: https://sanity.io
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Bun]: https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df
[Bun-url]: https://bun.sh/
[Netlify]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://netlify.com
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[ESLint]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://www.eslint.org/
[Prettier]: https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E
[Prettier-url]: https://www.prettier.io/
