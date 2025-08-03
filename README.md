Multi-Theme-switcher-App

# 🛒 MyCart – React Shopping Cart App

A modern and responsive shopping cart application frontend built with **React**, **Redux Toolkit**, and **Tailwind CSS**, offering a smooth and dynamic e-commerce experience.

## 🚀 Features

- 🛍️ Add/remove products from cart
- 📦 View cart items with product details
- 💵 Dynamic subtotal calculation
- 🌗 Theme-aware styling (light/dark mode)
- 🔄 Real-time updates using Redux
- 🎉 Toast notifications on successful actions

## 🧱 Tech Stack

- **React** – Frontend framework
- **Redux Toolkit** – State management
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first CSS framework
- **React Hot Toast** – Beautiful toast notifications

## 📦 Getting Started

- git clone https://github.com/SushantBandhani/Multi-Theme-Switcher-App.git
- cd your-repo-name
- npm install
- npm run dev

## Folder Structure
```text
└── Multi-theme-switcher-app/
    ├── src/
    │   ├── App.css
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   ├── vite-env.d.ts
    │   ├── utils/
    │   │   └── themSetting.ts
    │   ├── redux/
    │   │   ├── store.ts
    │   │   ├── theme/
    │   │   │   └── themeSlice.ts
    │   │   ├── products/
    │   │   │   └── productsSlice.ts
    │   │   └── cart/
    │   │       └── cartSlice.ts
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Cart.tsx
    │   │   ├── Main.tsx
    │   │   └── NotFound.tsx
    │   ├── layout/
    │   │   ├── DashBoardLayout.tsx
    │   │   └── SideBarLayout.tsx
    │   ├── hooks/
    │   │   ├── usePersistentCart.tsx
    │   │   └── useSettingsToggle.ts
    │   ├── components/
    │   │   ├── CartItem.tsx
    │   │   ├── Modal.tsx
    │   │   ├── Navbar.tsx
    │   │   └── ProductCard.tsx
    │   └── assets/
    │       └── react.svg
    ├── public/
    │   ├── vite.svg
    │   └── _redirects
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts

You can view the live project Multi-Theme-Switcher-App deployed on Netlify: https://multitheme-switcher-app.netlify.app/
