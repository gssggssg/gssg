# git
git是一个开源的**分布式**版本控制系统 (VCS)，可以有效、高速地处理从很小到非常大的项目版本管理。
用于跟踪源代码更改。它允许多个开发人员一起进行非线性开发。


# git安装
Linux、macOS、Windows都可以在官网下载对应平台安装包，
下载地址：[https://git-scm.com/downloads](https://git-scm.com/downloads)
下面介绍三种平台的其它安装方式：
## Linux上安装
使用 `dnf`：
```
sudo dnf install git-all
```
如果你在基于 Debian 的发行版上，如 Ubuntu，请使用 `apt`：
```
sudo apt install git-all
```
## macOS 上安装
在安装 Xcode Command Line Tools。 Mavericks （10.9） 或更高版本的系统中，在 Terminal 里尝试首次运行 git 命令即可。
```
git --version
```
如果没有安装过命令行开发者工具，将会提示你安装。
## Windows 上安装
去Git 官方网站下载。 下载地址： [https://git-scm.com/download/win](https://git-scm.com/download/win)
国内镜像：[https://npm.taobao.org/mirrors/git-for-windows/](https://npm.taobao.org/mirrors/git-for-windows/)
## 检测安装
检测安装成功可以运行 `git`命令测试是否安装成功
```
git
```
# git配置
当你安装好了git后，在Windows上会有三个内容
- Git Bash，是Git配套的一个控制台
- Git CMD(Deprecated)，是通过CMD使用Git
- Git GUI，是Git的可视化操作工具

下列git操作示例使用GitHub和GitLab举例

## 配置Github用户名和账号

这一步前需要先注册好Github账号，GitLab操作和GitHub一样

```
# 配置账号
git config --global user.name "GitHub账号"
# 配置邮箱
git config --global user.email "GitHub注册邮箱"
```
查看配置
```
# 列出当前配置：
git config --list
# 列出repository配置：
git config --local --list
# 列出全局配置：
git config --global --list
# 列出系统配置：
git config --system --list
```
## 生成ssh密钥
```
# 全局生成密钥
ssh-keygen -t rsa
# 根据邮箱密钥
ssh-keygen -t rsa -C “注册GitHub/GitLab的邮箱”
# 可以自定义生成文件名
ssh-keygen -t rsa -C “注册GitHub/GitLab的邮箱” -f ~/.ssh/id_rsa_gitlab
```
当输入命令后会提示三次需要输入密码，直接敲回车。
运行生成SSH密钥命令会在本地 `.ssh `文件夹生成两个文件
> id_rsa // 密钥
> id_rsa.pub //公钥
## 添加SSH
将生成的ssh公钥 `id_rsa.pub `复制到平台的ssh密钥中，路径：`用户设置->SSH密钥`
- Linux中文件生成位置，可以通过下列命令进入
```
cd ~/.ssh
```
- macOS中文件生成位置，也可以通过下面命令进入或打开，
```
cd ~/.ssh
open ~/.ssh
```
- Windows中文件生成位置，路径如下
```
C:\\Users\\当前用户\\.ssh
```
## 检测配置是否成功
```
ssh -T git@github.com
# 或
ssh -T git@gitlab.com
```
## 多个git
如果一台机器需要连接多个git平台
1.  根据不同平台生成不同SSH密钥
2.  将生成的公钥添加到对应的平台上
3.  在 `.ssh`文件夹中新增 `config`文件并写入一下内容
```
# 一个GitHub配置
Host github.com
HostName github.com
User github用户名
IdentityFile ~/.ssh/id_rsa

# 一个GitLab配置
Host gitlab地址
HostName gitlab.com
User gitlab用户名
IdentityFile ~/.ssh/id_rsa_gitlab

# 配置文件参数
# Host : Host可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和ssh文件
# HostName : 要登录主机的主机名
# User : 登录名
# IdentityFile : 指明上面User对应的identityFile路径
```
4.  添加到本地仓库
```
ssh-add ~/.ssh/id_rsa_gitlab
```

5.  测试连接是否成功
# git使用
## 初始化 本地仓库
```
git init
```

初始化仓库后会在输入命令所处的文件夹生成一个`.git`文件
## 克隆代码
克隆代码，后面跟着的是你想克隆代码的项目地址
```
git clone 项目地址
# 克隆分支代码
git clone -b 分支名 项目地址
```
## 提交代码
提交代码至远程仓库
1.  查看分支
```
git branch -分支名
```
2.  切换分支
切换到你想提交的分支
```
git checkout 分支名
```
3.  添加文件到暂存区
```
# 添加指定目录或者指定文件名到暂存区
git add [文件名1] [文件名2] ...
# 将当前目录下所有文件添加到暂存区
git add .
```
4.  查看文件状态
```
git status
```
5.  添加提交的描述信息
```
git commit -m "提交的描述信息"
```
6.  提交到远程
```
git remote add origin "远程仓库地址"
```
7.  推送代码到远程仓库
```
git push -u origin 分支名
```

## 常用命令
```git
git stash   // 隐藏文件
git stash pop    // 显示文件

git pull origin dev // 去获取远程仓库中develop分支上的commits，
// 然后把origin/dev merge到你目前check out下来的分支中
git pull // 省去了指定分支，默认就是去你之前check out 的分支上去操作，
```

## 命令总结

| 命令 | 解释 |
| :----: | :----: |
| git rm | 删除工作区文件 |
| git mv | 移动或重命名文件 |
| git log | 查看历史提交记录 |

# 问题
实际使用git的过程中，会出先各种各样问题，本文记录下作者出现问题较多的一些问题，后续会更新。

## 权限被拒绝，请重试
___Permission denied, please try again.___
* 问题描述：
> 在 gitlab 仓库已经添加了 ssh key 之后，用 vsCode 或者 sourcetree 操作仓库时，会弹出提示
* 问题分析：
> mac每次重启机器都需要 root 密码获取 ~/.ssh/id_rsa.pub 的 key
* 问题日志：
> Git: Permission denied, please try again.
* 解决办法：
```
ssh-add ~/.ssh/你生成ssh密钥文件名
例：
ssh-add ~/.ssh/id_rsa
```
<em>ssh-add 这个命令不是用来永久性的记住你所使用的私钥的。实际上，它的作用只是把你指定的私钥添加到 ssh-agent 所管理的一个 session 当中,这个方法不是一劳永逸</em>

## 由于电子邮件隐私限制，推送被拒绝
___Your push would publish a private email address.___

* 问题描述：
> 在推送代码的时候出现问题，拉取代码可以拉取
* 问题分析：
> 由于电子邮箱的限制
* 问题日志：
> ! [remote rejected] main -> main (push declined due to email privacy restrictions)
* 解决办法：

`setting`->`emails`->`Keep my email address private` 将这个单选框给去掉，再重新试试