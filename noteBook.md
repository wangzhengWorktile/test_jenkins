## worktile 研发版

### Jenkins

#### [Jenkins 官方入门指南](https://jenkins.io/zh/doc/pipeline/tour/getting-started/)

```
物理机安装jenkins
运行环境要求：
java8
Docker

安装地址：https://jenkins.io/zh/doc/book/installing/
```

### docker 直接运行 Jenkins 镜像

```
sudo docker run -u root -d --name myjenkinFile -p 8080:8080 -p 50000:50000 -p 25:25 -p 465:465 -v /home/ubuntu/jenkins_home:/var/jenkins_home jenkins/jenkins

ps：单独使用jenkins可以 研发版配套wtctl对在docker中运行支持不友好  无法使用
```

### jenkins 构建环境执行脚本

安装 jenkins 插件 ssh publisher
用 ssh 的方式操作物理机 docker 不推荐 这个方法有点“睿智”
但是可以用来直接操作生产环境机器 （在不使用 K8s 时候）

```bash
cd jenkins_home/workspace/git
sudo docker stop express || true \
     && sudo docker rm express || true \
     && sudo docker rmi myexpress \
     && sudo docker build -t myexpress . \
     && sudo docker run -d  --name express -p 3000:3000 myexpress
```

### 如何使 docker 中 jenkins 能够运行宿主机 docker

```bash
-v /var/run/.sock:/var/run/docker.sock
-v $(which docker):/usr/bin/docker
-v /usr/share/zoneinfo/Asia/Shanghai:/etc/localtime
-v /etc/timezone:/etc/timezone jenkins/jenkins
```

### jenkins 配合研发版 需要做的操作

安装 jenkins worktile-agent 插件

```
https://cdn.worktile.com/pipeline/worktile-agent.hpi
```

安装 wtctl
代理工具 wtctl 从 CI 平台中收集测试结果并展示在 worktile 平台中, 使用以下方法安装 wtctl:

```bash
curl -s https://cdn.worktile.com/pipeline/install-wtctl.sh | bash

```

### jenkins 设置用户为 root 方便执行 docker 命令

### 开启 github webhooks

jenkins 中 安全配置 勾选匿名用户具有可读权限 关闭 CTRF 拦截

stage('stop the old docker image') {
steps {
sh 'sudo docker stop express || true \
 && sudo docker rm express || true \
 && sudo docker rmi problemrc/aaa \
 '
}
}
