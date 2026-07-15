# Kenn Benin — Portfolio Site

A static site — no build step, no dependencies. Just HTML, CSS, and JS.

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Preview it locally

Just double-click `index.html`, or from a terminal:

```bash
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

## Make it live (pick one)

### Option A — Netlify Drop (easiest, ~1 minute)
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder onto the page.
3. Netlify gives you a live URL immediately. You can add a custom domain later in Site settings.

### Option B — GitHub Pages (free, good if you want version control)
1. Create a new GitHub repo, e.g. `kenn-portfolio`.
2. Push these files to the repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/kenn-portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site will be live at `https://<your-username>.github.io/kenn-portfolio/`.

### Option C — Vercel
1. Go to https://vercel.com/new and import the folder/repo.
2. Leave build settings blank (it's a static site) and deploy.

## Custom domain
Whichever host you pick, all three (Netlify, GitHub Pages, Vercel) let you attach a custom
domain for free under Site/Project Settings → Domains — you just point your domain's DNS
(usually a CNAME or A record) at the host as instructed there.

## Editing content later
- Text and section content: edit `index.html` directly (it's plain, readable HTML).
- Colors, fonts, spacing: edit the `:root` variables at the top of `css/style.css`.
- The cursor HUD, scroll marker, and reveal animations: `js/script.js`.

No WordPress, no npm install — just edit and re-upload/push.
