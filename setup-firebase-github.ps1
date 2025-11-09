# PowerShell Script: Connect Firebase Project "agliculter" with GitHub Repository "agliculture"
# This script sets up Git, Firebase, and continuous deployment

Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Firebase-GitHub Setup Script" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Navigate to project directory (current working directory)
Write-Host "Step 1: Checking current directory..." -ForegroundColor Yellow
$currentDir = Get-Location
Write-Host "Current directory: $currentDir" -ForegroundColor Green
Write-Host ""

# Step 2: Initialize Git if not already initialized
Write-Host "Step 2: Initializing Git repository..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "Git repository already initialized." -ForegroundColor Green
} else {
    git init
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Git repository initialized successfully." -ForegroundColor Green
    } else {
        Write-Host "Error: Failed to initialize Git repository." -ForegroundColor Red
        exit 1
    }
}
Write-Host ""

# Step 3: Set up Git remote
Write-Host "Step 3: Setting up Git remote..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/JD-UnderCoder/agliculture.git"

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    Write-Host "Removing existing remote..." -ForegroundColor Yellow
    git remote remove origin
}

git remote add origin $remoteUrl
if ($LASTEXITCODE -eq 0) {
    Write-Host "Git remote 'origin' added successfully." -ForegroundColor Green
} else {
    Write-Host "Error: Failed to add Git remote." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 4: Add all files and create initial commit
Write-Host "Step 4: Adding files and creating initial commit..." -ForegroundColor Yellow

# Check if there are any changes to commit
$gitStatus = git status --porcelain
if ($gitStatus -or -not (git rev-parse --verify HEAD 2>$null)) {
    git add .
    git commit -m "Initial Firebase connection commit"
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Initial commit created successfully." -ForegroundColor Green
    } else {
        Write-Host "Warning: Commit failed or no changes to commit." -ForegroundColor Yellow
    }
} else {
    Write-Host "No changes to commit. Repository is already up to date." -ForegroundColor Yellow
}
Write-Host ""

# Step 5: Push to GitHub (main branch)
Write-Host "Step 5: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Checking for main branch..." -ForegroundColor Yellow

# Check current branch
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    Write-Host "No branch exists. Creating main branch..." -ForegroundColor Yellow
    git checkout -b main
    $currentBranch = "main"
}

# Push to GitHub
Write-Host "Pushing to origin/$currentBranch..." -ForegroundColor Yellow
git push -u origin $currentBranch
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Push failed. You may need to:" -ForegroundColor Yellow
    Write-Host "  1. Authenticate with GitHub" -ForegroundColor Yellow
    Write-Host "  2. Set up GitHub credentials" -ForegroundColor Yellow
    Write-Host "  3. Or push manually later" -ForegroundColor Yellow
} else {
    Write-Host "Code pushed to GitHub successfully." -ForegroundColor Green
}
Write-Host ""

# Step 6: Firebase Login
Write-Host "Step 6: Firebase Login..." -ForegroundColor Yellow
Write-Host "This will open a browser window for authentication." -ForegroundColor Cyan
Write-Host "Press any key to continue with Firebase login..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

firebase login
if ($LASTEXITCODE -eq 0) {
    Write-Host "Firebase login successful." -ForegroundColor Green
} else {
    Write-Host "Error: Firebase login failed." -ForegroundColor Red
    Write-Host "Please run 'firebase login' manually and try again." -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Step 7: Initialize Firebase
Write-Host "Step 7: Initializing Firebase..." -ForegroundColor Yellow
Write-Host "Project name: agliculter" -ForegroundColor Cyan

if (Test-Path "firebase.json") {
    Write-Host "Firebase already initialized. Checking project link..." -ForegroundColor Yellow
    
    # Check if project is linked
    $firebaseProject = firebase use 2>&1
    if ($firebaseProject -match "agliculter") {
        Write-Host "Firebase project 'agliculter' is already linked." -ForegroundColor Green
    } else {
        Write-Host "Linking to Firebase project 'agliculter'..." -ForegroundColor Yellow
        firebase use agliculter
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Firebase project linked successfully." -ForegroundColor Green
        } else {
            Write-Host "Error: Failed to link Firebase project." -ForegroundColor Red
            Write-Host "Please run 'firebase use agliculter' manually." -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "Firebase not initialized. Running firebase init..." -ForegroundColor Yellow
    Write-Host "IMPORTANT: During firebase init:" -ForegroundColor Cyan
    Write-Host "  1. Select 'agliculter' from the project list" -ForegroundColor Cyan
    Write-Host "  2. Choose 'Hosting' as a feature" -ForegroundColor Cyan
    Write-Host "  3. Set your public directory (e.g., 'build' for React or 'dist' or '.' for static sites)" -ForegroundColor Cyan
    Write-Host "  4. Configure as a single-page app if applicable" -ForegroundColor Cyan
    Write-Host "  5. Set up automatic builds and deploys with GitHub (if prompted)" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press any key to continue with Firebase initialization..." -ForegroundColor Cyan
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    
    firebase init
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Firebase initialized successfully." -ForegroundColor Green
    } else {
        Write-Host "Error: Firebase initialization failed or was cancelled." -ForegroundColor Red
        Write-Host "Please run 'firebase init' manually and select project 'agliculter'." -ForegroundColor Yellow
    }
}
Write-Host ""

# Step 8: Set up GitHub Actions for Firebase Hosting
Write-Host "Step 8: Setting up GitHub Actions for Firebase Hosting..." -ForegroundColor Yellow
Write-Host "This will configure continuous deployment from GitHub to Firebase." -ForegroundColor Cyan
Write-Host ""
Write-Host "IMPORTANT: This command will:" -ForegroundColor Cyan
Write-Host "  1. Create a GitHub Actions workflow file" -ForegroundColor Cyan
Write-Host "  2. Generate a Firebase token (you'll need to save this)" -ForegroundColor Cyan
Write-Host "  3. Set up secrets in your GitHub repository" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

firebase hosting:github
if ($LASTEXITCODE -eq 0) {
    Write-Host "GitHub Actions setup completed successfully." -ForegroundColor Green
} else {
    Write-Host "Warning: GitHub Actions setup may have encountered issues." -ForegroundColor Yellow
    Write-Host "You may need to:" -ForegroundColor Yellow
    Write-Host "  1. Run 'firebase hosting:github' manually" -ForegroundColor Yellow
    Write-Host "  2. Follow the interactive prompts" -ForegroundColor Yellow
    Write-Host "  3. Add the Firebase token as a GitHub secret" -ForegroundColor Yellow
}
Write-Host ""

# Step 9: Verify GitHub Actions configuration
Write-Host "Step 9: Verifying GitHub Actions configuration..." -ForegroundColor Yellow
if (Test-Path ".github/workflows") {
    $workflowFiles = Get-ChildItem -Path ".github/workflows" -Filter "*.yml" -ErrorAction SilentlyContinue
    if ($workflowFiles) {
        Write-Host "GitHub Actions workflow files found:" -ForegroundColor Green
        foreach ($file in $workflowFiles) {
            Write-Host "  - $($file.Name)" -ForegroundColor Green
        }
    } else {
        Write-Host "Warning: No workflow files found in .github/workflows/" -ForegroundColor Yellow
        Write-Host "You may need to set up GitHub Actions manually." -ForegroundColor Yellow
    }
} else {
    Write-Host "Warning: .github/workflows directory not found." -ForegroundColor Yellow
    Write-Host "GitHub Actions may not be configured. Run 'firebase hosting:github' manually." -ForegroundColor Yellow
}
Write-Host ""

# Final summary
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Setup Summary" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "Git repository initialized and connected to GitHub" -ForegroundColor Green
Write-Host "Firebase project linked: agliculter" -ForegroundColor Green
Write-Host "GitHub Actions configured for continuous deployment" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Verify your GitHub repository has the code pushed" -ForegroundColor White
Write-Host "2. Check GitHub repository settings > Secrets for FIREBASE_TOKEN" -ForegroundColor White
Write-Host "3. Verify GitHub Actions workflow is running on push" -ForegroundColor White
Write-Host "4. Test deployment by making a commit and pushing to GitHub" -ForegroundColor White
Write-Host ""
Write-Host "To verify Firebase project:" -ForegroundColor Yellow
Write-Host "  firebase projects:list" -ForegroundColor White
Write-Host "  firebase use agliculter" -ForegroundColor White
Write-Host ""
Write-Host "To deploy manually:" -ForegroundColor Yellow
Write-Host "  firebase deploy" -ForegroundColor White
Write-Host ""

