
set -e

npm run build

# перейти в каталог вывода сборки
cd dist


git init
git checkout -b main
git add -A
git commit -m 'deploy'

# если вы развертываете на https: // <USERNAME> .github.io
# git push -f git@github.com: <ИМЯ ПОЛЬЗОВАТЕЛЯ> / <ИМЯ ПОЛЬЗОВАТЕЛЯ> .github.io.git main

# если вы развертываете на https: // <USERNAME> .github.io / <REPO>
# git push -f git@github.com: <ИМЯ ПОЛЬЗОВАТЕЛЯ> / <REPO> .git main: gh-pages

cd -