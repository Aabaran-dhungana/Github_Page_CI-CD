# Next.js GitHub Pages Deployment

This is a Next.js application configured for automated deployment to GitHub Pages using GitHub Actions.

## Running Locally

To run this application locally on your machine, follow these steps:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **View the app**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Local Development Notes
- The `next.config.mjs` has been specially configured so that the `basePath` is only applied during the GitHub Actions build. This ensures that you can test locally at the root URL (`/`) without encountering 404 errors.
- External images (e.g., from `images.unsplash.com`) are explicitly allowed in `next.config.mjs` using `remotePatterns` so they render properly both locally and in production.

## Deployment

This project uses GitHub Actions to automatically build and deploy the Next.js static export to GitHub Pages.

### How it works:
1. When changes are pushed to the `main` branch, the `.github/workflows/deploy.yml` workflow is triggered automatically.
2. The workflow installs dependencies, runs `next build` (which creates a static HTML/CSS/JS export in the `out` directory), and applies the correct `basePath` for your repository (`/Github_Page_CI-CD`).
3. It then uploads this built artifact and deploys it directly to GitHub Pages.

### Requirements for GitHub Pages:
Ensure your GitHub repository is configured to deploy from GitHub Actions:
1. Go to your repository **Settings**.
2. Navigate to **Pages** on the left sidebar.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

Once configured, pushing code to the `main` branch will seamlessly update your live website!

## How to Fork and Host Your Own Version

If you want to create your own copy of this project and host it on your personal GitHub Pages, follow these steps from scratch:

1. **Fork the Repository**: 
   Click the **Fork** button at the top right corner of this repository's page to create a copy in your own GitHub account.

2. **Clone the Repository**:
   Clone your newly forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Github_Page_CI-CD.git
   cd Github_Page_CI-CD
   ```

3. **Enable GitHub Actions (if prompted)**:
   Go to the **Actions** tab in your newly forked repository and click **"I understand my workflows, go ahead and enable them"** if prompted.

4. **Configure GitHub Pages**:
   - Go to your repository **Settings**.
   - Navigate to **Pages** on the left sidebar.
   - Under **Build and deployment**, set the **Source** dropdown to **GitHub Actions**.

5. **Make Local Changes and Push**:
   Open the cloned repository in VSCode (or your favorite editor) and make your changes:
   ```bash
   code .
   ```
   When you're ready to deploy your changes, commit and push them to the `main` branch. This push will automatically trigger the GitHub Action to build and deploy your site!
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push -u origin main
   ```

6. **View Your Live Site**:
   Wait a couple of minutes for the GitHub Action workflow to complete. Once finished, you can find your live URL at the top of the **Settings > Pages** screen, or right there in the Actions summary!

### Manual Deployment (Optional)
If you don't want to make local changes right away but still want to see the live site, you can trigger the deployment manually:
- Go to the **Actions** tab.
- Click on the **Deploy to GitHub Pages** workflow on the left.
- Click the **Run workflow** button on the right, and then click the green **Run workflow** button.
