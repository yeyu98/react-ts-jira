### 文件介绍
* robots.txt 配置爬虫
* manifest.json 配置PWA的一些如图标之类的东西

### eslint、prettier、commitlint的配置
* eslint：用于检测格式是否正确的工具；
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
* commitlint：用于检测commit的格式是否正确的工具；
    * 安装husky
    * 安装： npm install --save-dev @commitlint/config-conventional @commitlint/cli （window）
    * 生成配置文件 echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js（需要注意通过echo生成的都是utf-16需要手动更改一次）
    * 安装之后需要在husky下添加指令：#!/bin/sh
                                . "$(dirname "$0")/_/husky.sh"

                                npx --no -- commitlint --edit

### Mock方案
* 代码侵入
* Mock.js：静态随机数据无法模拟增删改查之类的接口；
* 依赖后端的接口工具如apiFox、yapi：强依赖后端；
* node服务（json-server）：后端api修改了无法自动修改，可以模拟增删改查；

* RESTFUL API：一种接口设计的方式 由method以及uri组成，能起到见名之意的效果；
例如Get /tickets 获取列表
    Get：获取
    Post：增加
    Put：替换
    Patch：修改
    Delete：删除
Patch vs Put：区别在于patch是用于更新接口中的某一个字段或者某几个作用于局部，而put则是替换掉整个对象；


### TS 强类型（在写代码的时候就能观察到问题的）而JS则需要在runtime的时候才能知道



































### 遇到的问题
* 添加了preitter之后commit无法自动格式化代码并出现乱码？
    * 由于echo创建文件，会自动选择utf-16的编码格式，导致husky读取配置文件异常，需要将vscode底部栏的utf-16改成utf-8；