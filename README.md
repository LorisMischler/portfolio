#  Portfolio - Loris Mischler

Modern portfolio website built with Nuxt.js, showcasing my projects, skills, and experience as a Computer Science student at Epitech.

##  Technologies

- **Nuxt.js 3** - Vue.js framework
- **Vue 3** - Composition API
- **CSS3** - Custom styling with animations
- **Formspree** - Contact form handling

##  Features

-  Responsive design (mobile, tablet, desktop)
-  Modern gradient animations
-  Working contact form with Formspree
-  Project showcase with filters
-  Mobile-friendly navigation
-  Fast and optimized

##  Installation
```bash
# Clone the repository

git clone https://github.com/LorisMischler/portfolio.git

# Navigate to the project

cd portfolio

# Install dependencies

npm install

# Run development server

npm run dev

```

The site will be available at `http://localhost:3000`


##  Project Structure
```
portfolio/
├── assets/
│   ├── css/
│   │   └── main.css          # Global styles
│   └── images/               # Images and logos
├── components/
│   ├── Navbar.vue            # Navigation bar
│   ├── Hero.vue              # Hero section
│   ├── About.vue             # About me section
│   ├── Education.vue         # Education timeline
│   ├── Services.vue          # Services offered
│   ├── Projects.vue          # Projects showcase
│   ├── Contact.vue           # Contact form
│   └── Footer.vue            # Footer
├── pages/
│   └── index.vue             # Main page
├── public/
│   └── assets/               # Static files (CV, images)
└── nuxt.config.ts            # Nuxt configuration
```

##  Customization

### Colors

Edit CSS variables in `assets/css/main.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  /* ... */
}
```

### Contact Form

Update Formspree URL in `components/Contact.vue`:
```vue
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Personal Info

Update information in each component:
- `Hero.vue` - Name, title, social links
- `About.vue` - Skills, bio, stats
- `Education.vue` - Schools, certifications
- `Projects.vue` - Your projects

##  To-Do

- [ ] Add blog section
- [ ] Add dark/light mode toggle
- [ ] Add more projects
- [ ] Integrate CMS for easy content updates

##  Contact

- **Email**: mischler.loris@gmail.com
- **GitHub**: [@LorisMischler](https://github.com/LorisMischler)
- **LinkedIn**: [Loris Mischler](https://www.linkedin.com/in/loris-mischler-8b113525b/)

##  License

This project is open source.

---

by Loris Mischler