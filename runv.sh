mkdir version
cd version
git init
git remote add origin https://gitlab.com/287207951/version.git
git pull origin master
cnpm i
npm run start