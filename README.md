# Vasanth Kumar — Portfolio (React + Vite)

## Run locally (VS Code)
1. Install Node.js LTS from https://nodejs.org (accept defaults), then restart VS Code.
2. Unzip the project. In VS Code: File > Open Folder > select `vasanth-portfolio`.
3. Open a terminal (Terminal > New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the address it prints (usually http://localhost:5173).

Other commands: `npm run build` (production build into `dist/`), `npm run preview` (test that build).

## Edit your content
- All text, skills, jobs, certifications: `src/data.js`
- Colors: variables at the top of `src/index.css`
- Photo and project images: replace files in `public/images/` (keep the same names)
- Resume: replace `public/resume.pdf`
- Social links: add `{ label: 'LinkedIn', href: 'https://...' }` to `socialLinks` in `src/data.js`

## Common errors
- `npm is not recognized`: install Node.js, then close and reopen VS Code.
- `EACCES` / permission errors: run the terminal as a normal user, not with sudo; or delete `node_modules` and retry.
- Port in use: Vite picks the next port automatically; use the address it prints.
- Broken install: delete `node_modules` and `package-lock.json`, then run `npm install` again.

## Deploy free (GitHub + Vercel)
1. Create a GitHub account and a new empty repository named `vasanth-portfolio`.
2. In the project terminal:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vasanth-portfolio.git
   git push -u origin main
   ```
   (Or use GitHub's "uploading an existing file" page; do not upload `node_modules`.)
3. Sign in at https://vercel.com with GitHub > Add New > Project > import the repository.
4. Vercel detects Vite automatically: Build Command `npm run build`, Output Directory `dist`. Click Deploy.
5. Every later `git push` redeploys automatically.
6. Custom domain: Vercel project > Settings > Domains > add your domain, then add the DNS records Vercel shows at your domain registrar. Free-tier limits and terms change, so check Vercel's current pricing page.

## Contact form
There is intentionally no contact form: a form needs a backend. Visitors reach you through the working email and phone links. If you want a form later, use a free form service such as Formspree or Web3Forms and point a form's `action` at the endpoint they give you.
