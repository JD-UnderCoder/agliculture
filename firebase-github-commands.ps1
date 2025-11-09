# Quick Reference: Firebase-GitHub Setup Commands
# Run these commands in PowerShell, one by one or as a script

# Step 1: Navigate to your project directory (if needed)
# cd "C:\path\to\your\project"

# Step 2: Initialize Git
git init

# Step 3: Add GitHub remote
git remote add origin https://github.com/JD-UnderCoder/agliculture.git
# If remote already exists, remove it first:
# git remote remove origin
# git remote add origin https://github.com/JD-UnderCoder/agliculture.git

# Step 4: Add files and commit
git add .
git commit -m "Initial Firebase connection commit"

# Step 5: Push to GitHub
git branch -M main
git push -u origin main

# Step 6: Login to Firebase (interactive - opens browser)
firebase login

# Step 7: Initialize Firebase (interactive - select project "agliculter")
firebase init
# During init:
# - Select "agliculter" project
# - Choose "Hosting"
# - Configure public directory
# - Configure as single-page app (if applicable)

# Alternative: If Firebase is already initialized, just link the project
firebase use agliculter

# Step 8: Set up GitHub Actions for Firebase Hosting (interactive)
firebase hosting:github
# This will:
# - Generate a Firebase token
# - Create GitHub Actions workflow
# - Guide you to add the token as a GitHub secret

# Step 9: Verify setup
# Check GitHub Actions workflow
Get-ChildItem -Path ".github\workflows" -ErrorAction SilentlyContinue

# Check Firebase project
firebase use

# Check Git remote
git remote -v

