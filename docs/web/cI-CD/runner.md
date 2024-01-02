# Runner

runner的安装环境有以下几个

- Windows
- macOS
- Linux
- Doker
- Kubernetes

我这里介绍的是在 Linux 系统下使用 arm64架构 安装的 runner。

```shell
# Download the binary for your system
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# Give it permission to execute
sudo chmod +x /usr/local/bin/gitlab-runner

# Create a GitLab Runner user
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash

# Install and run as a service
sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
sudo gitlab-runner start

```

注册命令如下

```shell
sudo gitlab-runner register --url https://git.xxxxxx.org/ --registration-token $REGISTRATION_TOKEN
```

然后按照提示提供以下信息：

Coordinator URL: 输入 GitLab 的地址，例如 <https://gitlab.com/。>
Token: 粘贴在步骤 5 中复制的注册令牌。
Description: 输入一个描述性的名称，以标识这个 Runner。
Tags: 可选，你可以为 Runner 指定标签，以便在 CI/CD 中选择特定的 Runner。
Executor: 选择 Runner 运行任务时使用的执行器。常见的选项包括 "shell" 和 "docker"。
注册成功后，你的 Runner 就与项目关联并可以开始执行 CI/CD 任务了。

请注意，上述步骤是基于 GitLab Runner 的新注册工作流程，确保你的 GitLab Runner 版本符合这个工作流程。如果你仍然遇到问题，请检查注册命令的输出，以查看详细的错误信息。
