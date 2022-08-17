### 文件介绍
* robots.txt 配置爬虫
* manifest.json 配置PWA的一些如图标之类的东西

### eslint、prettier、commitlint的配置
* eslint：格式检测；
* prettier：用于格式化处理的；
    * 安装prettier npm install --save-dev --save-exact prettier；
    * 创建prettier配置文件 echo {}> .prettierrc.json;
    * 创建prettierignore文件（指定某些文件不需要格式化类似于gitignore）；
    * 代码格式化： 
        *  手动格式化prettier：npx prettier --write .;
        *  自动格式化（在提交代码之前）：通过Pre-commit Hook实现（npx mrm@2 lint-staged）；
            * 安装husky：管理git hook的东西自动生成在git commit之前的命令；
            * lint-staged：指定哪些后缀的文件自动执行prettier；
            * PS: 最新版本的husky安装之后是不会在package.json中出现pre-commit的命令的，会直接在项目中添加.husky文件；
    * eslint和prettier同时工作会出现一些冲突：npm i eslint-config-prettier（cra默认会有eslint的配置）;











### 遇到的问题
* 添加了preitter之后commit无法自动格式化代码并出现乱码？
    * 由于echo创建文件，会自动选择utf-16的编码格式，导致husky读取配置文件异常，需要将vscode底部栏的utf-16改成utf-8；