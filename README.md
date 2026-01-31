# Jayamurugan Packing Industry Website

A professional, secure MERN stack website for the packing industry.

## 📸 1. Where to Upload Photos
You must manually add your images to the project before deploying.

1.  Navigate to the `public/images/` folder.
2.  Paste your image files there.
3.  **Crucial:** Rename your images to match these filenames exactly:
    *   `cherry-shoppe.jpg`
    *   `find-to-fit.jpg`
    *   `go-green.jpg`
    *   `wedding-ganesh.jpg`
    *   `myharvest.jpg`
    *   `nior-burger.jpg`
    *   `bhoopathy-bakery.jpg`
    *   `grand-estancia.jpg`
    *   `quarterly-meeting.jpg`
    *   `oho-corea.jpg`

---

## 🚀 2. How to Deploy (Free Method via Render.com)

Since this app has both a Backend (Express) and Frontend (React), the easiest way to deploy is using **Render**.

### Step A: Push to GitHub
1. Create a repository on GitHub.
2. Push this entire project code to that repository.

### Step B: Deploy on Render
1. Go to [dashboard.render.com](https://dashboard.render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. Use the following settings exactly:

| Setting | Value |
| :--- | :--- |
| **Name** | `jayamurugan-packing` (or your choice) |
| **Region** | Singapore (or closest to you) |
| **Branch** | `main` |
| **Runtime** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |

5. Click **Create Web Service**.
6. Wait 2-3 minutes. Render will build the React app and start the Express server.
7. Your site will be live at `https://your-app-name.onrender.com`.

---

## 🛠 Local Development

### Prerequisites
- Node.js (v16+)
- MongoDB (optional, for storing enquiries)

### Install & Run
```bash
# 1. Install dependencies
npm install

# 2. Run in development mode (React only)
npm run dev

# 3. To test the Full Stack Production Build locally
npm run build
npm start
```

---

## 🔒 Security Features (Built-in)
- **Helmet JS**: Adds secure HTTP headers.
- **Rate Limiting**: Protects contact form from spam.
- **Compression**: Makes the site load faster.
- **XSS Protection**: Inputs are sanitized.
