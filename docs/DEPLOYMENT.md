# 自动部署

GitHub Actions 的 **Deploy ximatai** 工作流会在 `master` 收到 push 后构建并部署，也可以在 Actions 页面选择 master 手动运行。

流程使用 Node.js 22 和 `npm ci` 安装锁定依赖，构建成功后同步到 ali 的 `/var/www/ximatai.net/`，最后通过 HTTPS 核对提交标记、首页、资源清单和 JS/CSS 入口文件。失败时可在 Actions 中查看日志并重新运行。

## 凭证与服务器

仓库 Secrets：

- `XIMATAI_DEPLOY_KEY`：仅用于此站点的 SSH 私钥。
- `XIMATAI_KNOWN_HOSTS`：经现有可信 SSH 连接核实的服务器主机公钥。

仓库 Variables：`XIMATAI_DEPLOY_HOST`、`XIMATAI_DEPLOY_PORT`、`XIMATAI_DEPLOY_USER`。

服务器专用用户 `ximatai-deploy` 的密钥通过 `rrsync -wo` 限制为向站点目录写入，禁止交互命令和端口转发，不具备 sudo 权限。GitHub runner 直接连接服务器，不依赖本机 ali 别名或 Clash。

密钥轮换时，先生成新密钥，将公钥加入服务器该用户的 authorized_keys，保留相同的受限命令和 restrict 选项；更新 GitHub Secret 并成功部署后，再移除旧公钥。私钥不要提交到仓库。

## 发布与恢复

部署串行执行，传输阶段使用 `--delay-updates --delete-delay`，减少上传过程中混用新旧文件的时间；同步并非整个目录的原子切换。失败不会自动回滚，需查看验证结果。

恢复旧版本时，将需要回退的改动通过 `git revert` 提交到 master，自动触发重新构建部署。手动运行也仅允许 master，避免从其他分支发布。

首次接入前的服务器站点备份位于 `/var/backups/ximatai-before-actions.tar.gz`。

原有 `npm run deploy` 仍可通过本机 `ali` SSH 配置手动发布；它不触发 Actions，也不更新自动部署提交标记。
