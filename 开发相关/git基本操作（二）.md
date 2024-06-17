## 分支（git branch）

git branch 命令用于列出，创建或删除分支。

```git
git branch -a

git branch

git branch -v # 查看每一个分支上的最后一次commit

git branch 分支名  # 创建分支

git checkout 分支名 # 切换分支

git checkout -b 分支名 # 创建并切换分支
```

## 代码合并（git push）

`git push` 命令用于从将本地的分支版本上传到远程并合并。

```git
# 仓库名称默认为 origin  
git push git仓库名 本地分支名:远程分支名

# 本地分支名与远程分支名相同的话，直接写一个就行
git push git仓库名 本地分支名

git push origin # 本地的 master 分支推送到 origin 主机的 master 分支

git push  # 默认只推送当前分支

git push --no-verify   # 推送忽略 Git 的预推送钩子
```

## 管理仓库（git remote）

```git
git remote # 列出当前仓库中已配置的远程仓库

git remote -v # 列出当前仓库中已配置的远程仓库，并显示它们的 URL

git remote add 远程仓库的名称 远程仓库地址 # 添加一个新的远程仓库。指定一个远程仓库的名称和 URL，将其添加到当前仓库中

git remote rename <old_name> <new_name> # 将已配置的远程仓库重命名

git remote remove <remote_name> # 从当前仓库中删除指定的远程仓库

git remote set-url <remote_name> <new_url> # 修改指定远程仓库的 URL

git remote show <remote_name> # 显示指定远程仓库的详细信息，包括 URL 和跟踪分支
```
