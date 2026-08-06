# PILOT: Physical Inference for Latent Optimized Trajectories

> Decoupling Intention from Trajectory: A Representational Deduction Framework for World Action Models

## Project Page

This repository contains the project page for PILOT, deployed via GitHub Pages.

**Live site:** [https://pilot-wam-2026.github.io](https://pilot-wam-2026.github.io)

---

## Deploy to GitHub Pages (Step-by-Step)

### Prerequisites

- A GitHub account (you already have: `pilot-wam-2026`)
- Git installed on your local machine
- This project directory on your local machine

### Step 1: Create a new repository on GitHub

1. Go to [https://github.com/new](https://github.com/new) (log in as `pilot-wam-2026`)
2. Repository name **must be** `pilot-wam-2026.github.io` (this is the special name for a user/organization site)
3. Set visibility to **Public**
4. Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Step 2: Initialize Git and push the code

Open a terminal (CMD, PowerShell, or Git Bash) in the project directory `D:\PythonProjects\PILOT_AAAI2027_demo_my`, then run:

```bash
# Initialize git repository
git init

# Add all files (respecting .gitignore)
git add .

# Create initial commit
git commit -m "Initial commit: PILOT project page"

# Add remote origin (use your actual GitHub token or SSH)
git remote add origin https://github.com/pilot-wam-2026/pilot-wam-2026.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

> **Note:** If you use HTTPS authentication, GitHub no longer accepts passwords.
> You need to use a **Personal Access Token (PAT)**:
> 1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
> 2. Generate new token with `repo` scope
> 3. Use the token as your password when prompted

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/pilot-wam-2026/pilot-wam-2026.github.io`
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: select **Deploy from a branch**
   - Branch: select `main` and `/ (root)`
   - Click **Save**

### Step 4: Wait for deployment

- GitHub Pages will build and deploy your site automatically
- This typically takes 1-5 minutes
- You can check the deployment status under **Actions** tab in your repository
- Once deployed, visit: [https://pilot-wam-2026.github.io](https://pilot-wam-2026.github.io)

### Step 5: Future updates

To update the site after making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

GitHub Pages will automatically redeploy within 1-5 minutes.

---

## Important Notes

- The `.nojekyll` file is essential — it tells GitHub Pages **not** to process the site with Jekyll, which could otherwise ignore files starting with `_` or `.`
- All video and image paths in `index.html` use relative paths, so they work correctly on GitHub Pages
- GitHub Pages has a soft limit of ~1 GB per repository; this project is well within that limit
- If you need a custom domain, configure it under Settings → Pages → Custom domain

## Project Structure

```
├── index.html              # Main page
├── .nojekyll               # Disable Jekyll processing
├── media/
│   ├── figures/            # Paper figures
│   └── videos/             # Demo videos
├── static/
│   ├── css/style.css       # Stylesheet
│   ├── images/             # UI images & icons
│   ├── js/main.js          # JavaScript
│   └── videos/             # Hero & rollout videos
```