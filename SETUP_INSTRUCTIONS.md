# Firebase-GitHub Setup Instructions

## ✅ Completed Steps

1. ✅ Git repository initialized
2. ✅ Connected to GitHub repository: https://github.com/JD-UnderCoder/agliculture.git
3. ✅ Initial commit created and pushed to main branch
4. ✅ Firebase CLI installed and authenticated
5. ✅ Firebase project "agliculter" linked
6. ✅ Firebase configuration files created (firebase.json, .firebaserc)
7. ✅ GitHub Actions workflow files created

## 📋 Remaining Steps

### Step 1: Get Firebase Service Account Key

You need to add a Firebase service account key as a GitHub secret:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "agliculter"
3. Click on the gear icon (⚙️) → Project Settings
4. Go to the "Service accounts" tab
5. Click "Generate new private key"
6. Download the JSON file
7. Copy the entire contents of the JSON file

### Step 2: Add GitHub Secret

1. Go to your GitHub repository: https://github.com/JD-UnderCoder/agliculture
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `FIREBASE_SERVICE_ACCOUNT_AGLICULTER`
5. Value: Paste the entire JSON file contents
6. Click "Add secret"

### Step 3: Configure Firebase Hosting Public Directory

Edit `firebase.json` and update the `public` directory to match your project structure:

- For React apps: `"public": "build"`
- For static sites: `"public": "."` or `"public": "public"`
- For other frameworks: adjust accordingly

### Step 4: Test Deployment

1. Make a small change to your project
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Check GitHub Actions tab to see the deployment progress
4. Your site will be deployed to: `https://agliculter.web.app`

## 🔧 Alternative: Use Firebase CLI to Complete Setup

You can also run the Firebase GitHub setup command which will guide you through the process:

```powershell
firebase hosting:github
```

This command will:
- Generate the service account key automatically
- Guide you through adding it to GitHub
- Set up the workflows properly

## 📝 Manual Deployment

To deploy manually without GitHub Actions:

```powershell
firebase deploy
```

## 🐛 Troubleshooting

### If GitHub Actions fail:
1. Verify the `FIREBASE_SERVICE_ACCOUNT_AGLICULTER` secret is set correctly
2. Check that the service account JSON is valid
3. Ensure the Firebase project ID is correct: "agliculter"

### If deployment fails:
1. Check that the `public` directory in `firebase.json` exists
2. Verify you have files to deploy in that directory
3. Check Firebase Console for error messages

## 📚 Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions for Firebase](https://github.com/FirebaseExtended/action-hosting-deploy)

