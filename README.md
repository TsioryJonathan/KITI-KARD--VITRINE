<p align="center">
  <img src="https://iili.io/3QBgaKx.png" alt="KITI-KARD Logo" width="200" />
</p>

<h1 align="center">KITI-KARD</h1>

<p align="center">
  A modern e-commerce site for selling customizable NFC business cards. Built with <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and <strong>ShadCN UI</strong>, this project delivers a fast, responsive, and sleek shopping experience.
</p>





## 🚀 Tech Stack

- **Next.js** – React framework for production-ready apps.
- **TailwindCSS** – Utility-first CSS framework for rapid UI development.
- **ShadCN UI** – Accessible and customizable component library.
- **LocalStorage** – Persist cart data client-side.
- **React Context API** – Global state management for cart.

## ✨ Features

- 🛒 Add, update, and remove items from cart
- 💾 Cart persistence using `localStorage`
- 💳 Price total, quantity tracking, and shipping calculation
- 📱 Responsive design across all devices
- 🧩 Modular, reusable components
- 🌙 Dark mode ready (optional with ShadCN)
- 🚚 Free shipping over 100€

## 📂 Project Structure

```
.
├── app/                  # Next.js app directory
├── components/           # UI components
    ├── ui/               # ShadCN UI components
├── context/              # Cart context logic
├── public/               # Static assets
└── Basic Config File
└── README.md
```

## 🧠 How It Works

- The **cart** is managed globally using the React Context API.
- Items are stored and retrieved from `localStorage` to persist state between sessions.
- A **cart page** displays current products, their quantities, prices, and total.

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/TsioryJonathan/KITI-KARD--VITRINE.git
cd KITI-KARD--VITRINE
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to start browsing!

## 📦 Build for Production

```bash
npm run build
npm start
```


---

> Built with ❤️ using Next.js, TailwindCSS, and ShadCN UI.
