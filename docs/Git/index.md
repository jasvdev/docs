<!-- assets -->
<!-- Nota: los assets usados, deben estar en una carpeta al nivel del doc 'assets/*' -->

<!-- Index link's -->
<!-- Espacio para indexar los links externos usados en el archivo -->

[🔙 Doc]: ../index.md
[NodeJs]: https://nodejs.org/es "NodeJs Org"

<!-- Index Imagen -->
<!-- Espacio para indexar las imagenes usadas en el archivo -->

[img_0]: ./assets/icon-doc.svg.png

# Tabla de contenido
<sup>[🔙 Doc]</sup>
- [Tabla de contenido](#tabla-de-contenido)
- [Git](#git)
  - [Table alias](#table-alias)
  - [Alias for .gitconfig](#alias-for-gitconfig)

# Git
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>

## Table alias
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>
|     | Comando         | Descripcion                                                                                                                   |
| --- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ⭐   | `git ga`        | git add                                                                                                                       |
| ⭐   | `git gaa`       | git add --all                                                                                                                 |
|     | `git gapa`      | git add --patch                                                                                                               |
|     | `git gau`       | git add --update                                                                                                              |
|     | `git gav`       | git add --verbose                                                                                                             |
|     | `git gwip`      | git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign --message "--wip-- [skip ci]" |
|     | `git gam`       | git am                                                                                                                        |
|     | `git gama`      | git am --abort                                                                                                                |
|     | `git gamc`      | git am --continue                                                                                                             |
|     | `git gamscp`    | git am --show-current-patch                                                                                                   |
|     | `git gams`      | git am --skip                                                                                                                 |
|     | `git gap`       | git apply                                                                                                                     |
|     | `git gapt`      | git apply --3way                                                                                                              |
|     | `git gbs`       | git bisect                                                                                                                    |
|     | `git gbsb`      | git bisect bad                                                                                                                |
|     | `git gbsg`      | git bisect good                                                                                                               |
|     | `git gbsn`      | git bisect new                                                                                                                |
|     | `git gbso`      | git bisect old                                                                                                                |
|     | `git gbsr`      | git bisect reset                                                                                                              |
|     | `git gbss`      | git bisect start                                                                                                              |
|     | `git gbl`       | git blame -w                                                                                                                  |
| ⭐   | `git gb`        | git branch                                                                                                                    |
|     | `git gba`       | git branch --all                                                                                                              |
|     | `git gbd`       | git branch --delete                                                                                                           |
|     | `git gbD`       | git branch --delete --force                                                                                                   |
|     | `git gbm`       | git branch --move                                                                                                             |
|     | `git gbnm`      | git branch --no-merged                                                                                                        |
|     | `git gbr`       | git branch --remote                                                                                                           |
|     | `git ggsup`     | git branch --set-upstream-to=origin/$(git_current_branch)                                                                     |
| ⭐   | `git gco`       | git checkout                                                                                                                  |
|     | `git gcor`      | git checkout --recurse-submodules                                                                                             |
|     | `git gcb`       | git checkout -b                                                                                                               |
|     | `git gcd`       | git checkout $(git_develop_branch)                                                                                            |
|     | `git gcm`       | git checkout $(git_main_branch)                                                                                               |
|     | `git gcp`       | git cherry-pick                                                                                                               |
|     | `git gcpa`      | git cherry-pick --abort                                                                                                       |
|     | `git gcpc`      | git cherry-pick --continue                                                                                                    |
|     | `git gclean`    | git clean --interactive -d                                                                                                    |
|     | `git gcl`       | git clone --recurse-submodules                                                                                                |
|     | `git gcam`      | git commit --all --message                                                                                                    |
|     | `git gcas`      | git commit --all --signoff                                                                                                    |
|     | `git gcasm`     | git commit --all --signoff --message                                                                                          |
|     | `git gcmsg`     | git commit --message                                                                                                          |
|     | `git gcsm`      | git commit --signoff --message                                                                                                |
|     | `git gc`        | git commit --verbose                                                                                                          |
|     | `git gca`       | git commit --verbose --all                                                                                                    |
|     | `git gca`       | git commit --verbose --all --amend                                                                                            |
|     | `git gcan`      | git commit --verbose --all --no-edit --amend                                                                                  |
|     | `git gcans`     | git commit --verbose --all --signoff --no-edit --amend                                                                        |
|     | `git gc`        | git commit --verbose --amend                                                                                                  |
|     | `git gcn`       | git commit --verbose --no-edit --amend                                                                                        |
|     | `git gcs`       | git commit -S                                                                                                                 |
|     | `git gcss`      | git commit -S -s                                                                                                              |
|     | `git gcssm`     | git commit -S -s -m                                                                                                           |
|     | `git gcf`       | git config --list                                                                                                             |
|     | `git gdct`      | git describe --tags $(git rev-list --tags --max-count=1)                                                                      |
|     | `git gd`        | git diff                                                                                                                      |
|     | `git gdca`      | git diff --cached                                                                                                             |
|     | `git gdcw`      | git diff --cached --word-diff                                                                                                 |
|     | `git gds`       | git diff --staged                                                                                                             |
|     | `git gdw`       | git diff --word-diff                                                                                                          |
|     | `git gdv`       | git diff -w "$@"  view -                                                                                                      |
|     | `git gdup`      | git diff @{upstream}                                                                                                          |
|     | `git gdt`       | git diff-tree --no-commit-id --name-only -r                                                                                   |
|     | `git gf`        | git fetch                                                                                                                     |
|     | `git gfa`       | git fetch --all --prune                                                                                                       |
|     | `git gfo`       | git fetch origin                                                                                                              |
|     | `git gg`        | git gui citool                                                                                                                |
|     | `git gga`       | git gui citool --amend                                                                                                        |
|     | `git ghh`       | git help                                                                                                                      |
|     | `git glgg`      | git log --graph                                                                                                               |
|     | `git glgga`     | git log --graph --decorate --all                                                                                              |
|     | `git glgm`      | git log --graph --max-count=10                                                                                                |
|     | `git glod`      | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'                        |
|     | `git glods`     | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short           |
|     | `git glol`      | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'                        |
|     | `git glola`     | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all                  |
|     | `git glols`     | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --stat                 |
|     | `git glo`       | git log --oneline --decorate                                                                                                  |
|     | `git glog`      | git log --oneline --decorate --graph                                                                                          |
|     | `git gloga`     | git log --oneline --decorate --graph --all                                                                                    |
|     | `git glp`       | git log --pretty=<format>                                                                                                     |
|     | `git glg`       | git log --stat                                                                                                                |
|     | `git glgp`      | git log --stat --patch                                                                                                        |
|     | `git gignored`  | git ls-files -v grep "^[[:lower:]]"                                                                                           |
|     | `git gfg`       | git ls-files grep                                                                                                             |
|     | `git gm`        | git merge                                                                                                                     |
|     | `git gma`       | git merge --abort                                                                                                             |
|     | `git gms`       | git merge --squash                                                                                                            |
|     | `git gmom`      | git merge origin/$(git_main_branch)                                                                                           |
|     | `git gmum`      | git merge upstream/$(git_main_branch)                                                                                         |
|     | `git gmtl`      | git mergetool --no-prompt                                                                                                     |
|     | `git gmtlvim`   | git mergetool --no-prompt --tool=vimdiff                                                                                      |
|     | `git gl`        | git pull                                                                                                                      |
|     | `git gpr`       | git pull --rebase                                                                                                             |
|     | `git gup`       | git pull --rebase                                                                                                             |
|     | `git gupa`      | git pull --rebase --autostash                                                                                                 |
|     | `git gupav`     | git pull --rebase --autostash --verbose                                                                                       |
|     | `git gupv`      | git pull --rebase --verbose                                                                                                   |
|     | `git ggu`       | git pull --rebase origin $(current_branch)                                                                                    |
|     | `git gupom`     | git pull --rebase origin $(git_main_branch)                                                                                   |
|     | `git gupomi`    | git pull --rebase=interactive origin $(git_main_branch)                                                                       |
|     | `git ggpull`    | git pull origin "$(git_current_branch)"                                                                                       |
|     | `git ggl`       | git pull origin $(current_branch)                                                                                             |
|     | `git gluc`      | git pull upstream $(git_current_branch)                                                                                       |
|     | `git glum`      | git pull upstream $(git_main_branch)                                                                                          |
|     | `git gp`        | git push                                                                                                                      |
|     | `git gpd`       | git push --dry-run                                                                                                            |
|     | `git gpf`       | git push --force                                                                                                              |
|     | `git ggf`       | git push --force origin $(current_branch)                                                                                     |
|     | `git gpf`       | git push --force-with-lease --force-if-includes                                                                               |
|     | `git gpf`       | git push --force-with-lease                                                                                                   |
|     | `git ggfl`      | git push --force-with-lease origin $(current_branch)                                                                          |
|     | `git gpsup`     | git push --set-upstream origin $(git_current_branch)                                                                          |
|     | `git gpsupf`    | git push --set-upstream origin $(git_current_branch) --force-with-lease --force-if-includes                                   |
|     | `git gpsupf`    | git push --set-upstream origin $(git_current_branch) --force-with-lease                                                       |
|     | `git gpv`       | git push --verbose                                                                                                            |
|     | `git gpoat`     | git push origin --all && git push origin --tags                                                                               |
|     | `git gpod`      | git push origin --delete                                                                                                      |
|     | `git ggpush`    | git push origin "$(git_current_branch)"                                                                                       |
|     | `git ggp`       | git push origin $(current_branch)                                                                                             |
|     | `git gpu`       | git push upstream                                                                                                             |
|     | `git grb`       | git rebase                                                                                                                    |
|     | `git grba`      | git rebase --abort                                                                                                            |
|     | `git grbc`      | git rebase --continue                                                                                                         |
|     | `git grbi`      | git rebase --interactive                                                                                                      |
|     | `git grbo`      | git rebase --onto                                                                                                             |
|     | `git grbs`      | git rebase --skip                                                                                                             |
|     | `git grbd`      | git rebase $(git_develop_branch)                                                                                              |
|     | `git grbm`      | git rebase $(git_main_branch)                                                                                                 |
|     | `git grbom`     | git rebase origin/$(git_main_branch)                                                                                          |
|     | `git gr`        | git remote                                                                                                                    |
|     | `git grv`       | git remote --verbose                                                                                                          |
|     | `git gra`       | git remote add                                                                                                                |
|     | `git grrm`      | git remote remove                                                                                                             |
|     | `git grmv`      | git remote rename                                                                                                             |
|     | `git grset`     | git remote set-url                                                                                                            |
|     | `git grup`      | git remote update                                                                                                             |
|     | `git grh`       | git reset                                                                                                                     |
|     | `git gru`       | git reset --                                                                                                                  |
|     | `git grhh`      | git reset --hard                                                                                                              |
|     | `git grhk`      | git reset --keep                                                                                                              |
|     | `git grhs`      | git reset --soft                                                                                                              |
|     | `git gpristine` | git reset --hard && git clean -dffx                                                                                           |
|     | `git groh`      | git reset origin/$(git_current_branch) --hard                                                                                 |
|     | `git grs`       | git restore                                                                                                                   |
|     | `git grss`      | git restore --source                                                                                                          |
|     | `git grst`      | git restore --staged                                                                                                          |
|     | `git gunwip`    | git rev-list --max-count=1 --format="%s" HEAD grep -q "--wip--" && git reset HEAD~1                                           |
|     | `git grev`      | git revert                                                                                                                    |
|     | `git grm`       | git rm                                                                                                                        |
|     | `git grmc`      | git rm --cached                                                                                                               |
|     | `git gcount`    | git shortlog --summary -n                                                                                                     |
|     | `git gsh`       | git show                                                                                                                      |
|     | `git gsps`      | git show --pretty=short --show-signature                                                                                      |
|     | `git gstall`    | git stash --all                                                                                                               |
|     | `git gstu`      | git stash --include-untracked                                                                                                 |
|     | `git gstaa`     | git stash apply                                                                                                               |
|     | `git gstc`      | git stash clear                                                                                                               |
|     | `git gstd`      | git stash drop                                                                                                                |
|     | `git gstl`      | git stash list                                                                                                                |
|     | `git gstp`      | git stash pop                                                                                                                 |
|     | `git gsta`      | git stash push                                                                                                                |
|     | `git gsta`      | git stash save                                                                                                                |
|     | `git gsts`      | git stash show --patch                                                                                                        |
|     | `git gst`       | git status                                                                                                                    |
|     | `git gss`       | git status --short                                                                                                            |
|     | `git gsb`       | git status --short -b                                                                                                         |
|     | `git gsi`       | git submodule init                                                                                                            |
|     | `git gsu`       | git submodule update                                                                                                          |
|     | `git gsw`       | git switch                                                                                                                    |
|     | `git gswc`      | git switch -c                                                                                                                 |
|     | `git gswd`      | git switch $(git_develop_branch)                                                                                              |
|     | `git gswm`      | git switch $(git_main_branch)                                                                                                 |
|     | `git gta`       | git tag --annotate                                                                                                            |
|     | `git gts`       | git tag -s                                                                                                                    |
|     | `git gtv`       | git tag sort -V                                                                                                               |
|     | `git gignore`   | git update-index --assume-unchanged                                                                                           |
|     | `git gunignore` | git update-index --no-assume-unchanged                                                                                        |
|     | `git gwch`      | git whatchanged -p --abbrev-commit --pretty=medium                                                                            |
|     | `git gwt`       | git worktree                                                                                                                  |
|     | `git gwtls`     | git worktree list                                                                                                             |
|     | `git gwtmv`     | git worktree move                                                                                                             |
|     | `git gwtrm`     | git worktree remove                                                                                                           |

## Alias for .gitconfig
<sup>[🏠 Inicio](#tabla-de-contenido)</sup>
```
  ga = add 
  gaa = add --all 
  gapa = add --patch 
  gau = add --update 
  gav = add --verbose 
  gwip = add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign --message "--wip-- [skip ci]" 
  gam = am 
  gama = am --abort 
  gamc = am --continue 
  gamscp = am --show-current-patch 
  gams = am --skip 
  gap = apply 
  gapt = apply --3way 
  gbs = bisect 
  gbsb = bisect bad 
  gbsg = bisect good 
  gbsn = bisect new 
  gbso = bisect old 
  gbsr = bisect reset 
  gbss = bisect start 
  gbl = blame -w 
  gb = branch 
  gba = branch --all 
  gbd = branch --delete 
  gbD = branch --delete --force 
  gbm = branch --move 
  gbnm = branch --no-merged 
  gbr = branch --remote 
  ggsup = branch --set-upstream-to=origin/$(git_current_branch)
  gco = checkout 
  gcor = checkout --recurse-submodules 
  gcb = checkout -b 
  gcd = checkout $(git_develop_branch)
  gcm = checkout $(git_main_branch)
  gcp = cherry-pick 
  gcpa = cherry-pick --abort 
  gcpc = cherry-pick --continue 
  gclean = clean --interactive -d 
  gcl = clone --recurse-submodules 
  gcam = commit --all --message 
  gcas = commit --all --signoff 
  gcasm = commit --all --signoff --message 
  gcmsg = commit --message 
  gcsm = commit --signoff --message 
  gc = commit --verbose 
  gca = commit --verbose --all 
  gca = commit --verbose --all --amend 
  gcan = commit --verbose --all --no-edit --amend 
  gcans = commit --verbose --all --signoff --no-edit --amend 
  gc = commit --verbose --amend 
  gcn = commit --verbose --no-edit --amend 
  gcs = commit -S 
  gcss = commit -S -s 
  gcssm = commit -S -s -m 
  gcf = config --list 
  gdct = describe --tags $(git rev-list --tags --max-count=1)
  gd = diff 
  gdca = diff --cached 
  gdcw = diff --cached --word-diff 
  gds = diff --staged 
  gdw = diff --word-diff 
  gdv = diff -w "$@"  view - 
  gdup = diff @{upstream}
  gdt = diff-tree --no-commit-id --name-only -r 
  gf = fetch 
  gfa = fetch --all --prune 
  gfo = fetch origin 
  gg = gui citool 
  gga = gui citool --amend 
  ghh = help 
  glgg = log --graph 
  glgga = log --graph --decorate --all 
  glgm = log --graph --max-count=10 
  glod = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'
  glods = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short 
  glol = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'
  glola = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --all 
  glols = log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset' --stat 
  glo = log --oneline --decorate 
  glog = log --oneline --decorate --graph 
  gloga = log --oneline --decorate --graph --all 
  glp = log --pretty=<format>
  glg = log --stat 
  glgp = log --stat --patch 
  gignored = ls-files -v grep "^[[:lower:]]" 
  gfg = ls-files grep 
  gm = merge 
  gma = merge --abort 
  gms = merge --squash 
  gmom = merge origin/$(git_main_branch)
  gmum = merge upstream/$(git_main_branch)
  gmtl = mergetool --no-prompt 
  gmtlvim = mergetool --no-prompt --tool=vimdiff 
  gl = pull 
  gpr = pull --rebase 
  gup = pull --rebase 
  gupa = pull --rebase --autostash 
  gupav = pull --rebase --autostash --verbose 
  gupv = pull --rebase --verbose 
  ggu = pull --rebase origin $(current_branch)
  gupom = pull --rebase origin $(git_main_branch)
  gupomi = pull --rebase=interactive origin $(git_main_branch)
  ggpull = pull origin "$(git_current_branch)" 
  ggl = pull origin $(current_branch)
  gluc = pull upstream $(git_current_branch)
  glum = pull upstream $(git_main_branch)
  gp = push 
  gpd = push --dry-run 
  gpf = push --force 
  ggf = push --force origin $(current_branch)
  gpf = push --force-with-lease --force-if-includes 
  gpf = push --force-with-lease 
  ggfl = push --force-with-lease origin $(current_branch)
  gpsup = push --set-upstream origin $(git_current_branch)
  gpsupf = push --set-upstream origin $(git_current_branch) --force-with-lease --force-if-includes 
  gpsupf = push --set-upstream origin $(git_current_branch) --force-with-lease 
  gpv = push --verbose 
  gpoat = push origin --all && git push origin --tags 
  gpod = push origin --delete 
  ggpush = push origin "$(git_current_branch)" 
  ggp = push origin $(current_branch)
  gpu = push upstream 
  grb = rebase 
  grba = rebase --abort 
  grbc = rebase --continue 
  grbi = rebase --interactive 
  grbo = rebase --onto 
  grbs = rebase --skip 
  grbd = rebase $(git_develop_branch)
  grbm = rebase $(git_main_branch)
  grbom = rebase origin/$(git_main_branch)
  gr = remote 
  grv = remote --verbose 
  gra = remote add 
  grrm = remote remove 
  grmv = remote rename 
  grset = remote set-url 
  grup = remote update 
  grh = reset 
  gru = reset -- 
  grhh = reset --hard 
  grhk = reset --keep 
  grhs = reset --soft 
  gpristine = reset --hard && git clean -dffx 
  groh = reset origin/$(git_current_branch) --hard 
  grs = restore 
  grss = restore --source 
  grst = restore --staged 
  gunwip = rev-list --max-count=1 --format="%s" HEAD grep -q "--wip--" && git reset HEAD~1 
  grev = revert 
  grm = rm 
  grmc = rm --cached 
  gcount = shortlog --summary -n 
  gsh = show 
  gsps = show --pretty=short --show-signature 
  gstall = stash --all 
  gstu = stash --include-untracked 
  gstaa = stash apply 
  gstc = stash clear 
  gstd = stash drop 
  gstl = stash list 
  gstp = stash pop 
  gsta = stash push 
  gsta = stash save 
  gsts = stash show --patch 
  gst = status 
  gss = status --short 
  gsb = status --short -b 
  gsi = submodule init 
  gsu = submodule update 
  gsw = switch 
  gswc = switch -c 
  gswd = switch $(git_develop_branch)
  gswm = switch $(git_main_branch)
  gta = tag --annotate 
  gts = tag -s 
  gtv = tag sort -V 
  gignore = update-index --assume-unchanged 
  gunignore = update-index --no-assume-unchanged 
  gwch = whatchanged -p --abbrev-commit --pretty=medium 
  gwt = worktree 
  gwtls = worktree list 
  gwtmv = worktree move 
  gwtrm = worktree remove 
  ```