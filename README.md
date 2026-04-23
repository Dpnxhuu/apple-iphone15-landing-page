# Apple iPhone 15 Pro — Landing Page Clone

A visually stunning Apple iPhone 15 Pro product landing page clone built with React, Three.js, GSAP, and Tailwind CSS. Inspired by Apple's official product page, this project focuses on smooth animations, 3D model rendering, and a premium user experience.

**🔗 Live Demo:** [applei5pro.vercel.app](https://applei15pro.vercel.app/)

---

## 📸 Preview

![Apple iPhone 15 Pro Landing Page](https://applei15pro.vercel.app/og-image.png)

---

## ✨ Features

- 🎥 **GSAP Animations** — Smooth scroll-triggered animations and transitions throughout the page
- 🧊 **Three.js 3D Model** — Interactive iPhone 3D model with color variants and real-time rendering
- ⚡ **React + Vite** — Fast, component-based architecture with lightning-quick dev server
- 🎨 **Tailwind CSS** — Utility-first styling for a clean, responsive layout
- 📱 **Fully Responsive** — Optimized for all screen sizes
- 🎬 **Video Sections** — Smooth video transitions mimicking Apple's carousel-style highlights

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI components & state management |
| **Vite** | Build tool & dev server |
| **Three.js** | 3D iPhone model rendering |
| **GSAP** | Scroll animations & timeline effects |
| **Tailwind CSS** | Styling & responsive layout |
| **Vercel** | Deployment |

---

## 📁 Project Structure

```
applei5pro/
├── public/
│   └── assets/          # 3D models, videos, images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   ├── Model.jsx
│   │   ├── Features.jsx
│   │   └── Footer.jsx
│   ├── utils/           # GSAP animation helpers
│   ├── constants/       # Data & config
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Dpnxhuu/applei5pro.git

# 2. Navigate into the project folder
cd applei5pro

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🎯 Key Learnings

- Integrating **Three.js** inside a React component using `useEffect` and `useRef`
- Using **GSAP ScrollTrigger** to animate elements on scroll
- Managing **3D model color switching** with `@react-three/fiber` and `@react-three/drei`
- Building pixel-perfect UI inspired by Apple's design language

---

## 🙌 Credits & Inspiration

- Inspired by [Apple's official iPhone 15 Pro page](https://www.apple.com/iphone-15-pro/)
- Built for learning purposes — not affiliated with Apple Inc.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Deepanshu](https://github.com/Dpnxhuu)
