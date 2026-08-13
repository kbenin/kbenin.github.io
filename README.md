# kbenin.github.io

Kenn Benin's portfolio site — IT Support Specialist / Systems & Network Administration, with a web infrastructure background.

## Deploy to GitHub Pages (kbenin.github.io)

1. Create a new repository on GitHub named exactly **`kbenin.github.io`** (this exact name is what makes it your root user site).
2. Upload these files to the root of that repository (not inside a subfolder):
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/Kenn-Benin-Resume.pdf`
3. Commit and push (or drag-and-drop upload via the GitHub web UI).
4. In the repo, go to **Settings → Pages**, and under "Build and deployment" set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`. Save.
5. Wait 1–2 minutes, then visit **https://kbenin.github.io** — it should be live.

## Editing content later

- All text lives directly in `index.html` — search for the section you want (`id="about"`, `id="experience"`, etc.) and edit the text between the tags.
- Colors, fonts, and spacing live in `style.css` under the `:root` token list at the top.
- To swap the downloadable resume, replace `assets/Kenn-Benin-Resume.pdf` with a new file of the same name (or update the `href` in `index.html`).

## Notes / things to double check

- The GitHub link in the Contact section points to `https://github.com/kbenin` — update it in `index.html` if your actual GitHub username is different.
- Your résumé lists **XDNA Digital Agency** as *Jul 2022 – Mar 2024* and **CyberOptik** as *Oct 2023 – Jul 2024* — these two ranges overlap by about 9 months. Worth double-checking the real dates before this goes live, since an overlap like that is the kind of thing a recruiter will ask about.
