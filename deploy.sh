echo "Switching to branch master"
git checkout main

echo "Building App..."
npm run Building

echo "Deploying files to server..."
scp -r build/* james@178.79.182.193:/var/www/178.79.182.193/

echo "Done!"