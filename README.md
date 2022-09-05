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


### TS 
* 为什么要用ts？
    * 强类型（在写代码的时候就能观察到问题的）而JS则需要在runtime的时候才能知道；
* unknown 类型：类型天花板，可以给unknown赋值任何类型，但unknown声明的变量只能赋值给 unknown或any类型，如需赋值给其他类型的变量需要确定类型之后才可以赋值；
* 类型别名 本质上是对类型的抽离；
* interface和type的区别；
    * 相同点：1 都可以声明对象或函数；
             2 都可以通过extends对类型进行扩展；
                // 声明函数
                type fn = (age: number, age1: number) => number
                interface fn1 {
                (age: number, age1: number): number
                }

                // 扩展extends
                interface Person {
                name: string
                }
                interface SuperPerson extends Person {
                age: number
                }

                type Person1 = {
                name: string
                }
                type SuperPerson1 = Person1 & {age: number}
    * 不同点：1 联合类型、utility types使用interface就无法定义；
             2 interface可以对相同名字的类型自动合并但type不行；
                interface Person {
                name: string,
                age: number
                }

                interface Person {
                function: string
                }

                let p: Person = {}

                type PersonOne = {name:string}
                type PersonOne = {age:number}

                let p1: PersonOne = {}

* utility types集合
    * Parameters<typeof fn | fn>：提取函数中的所有类型（如果是函数则需要通过typeof，如果是个类型别名则直接传入fn）；
    * Partial<T>: 将接口中的属性全都变成可选；
    * Omit<T, 'name' | 'age'>：删除接口中的某些属性;
* ts操作符集合
    * typeof：静态代码检测类型功能比js中的强大；
    * keyof：提取接口中的所有属性并返回联合类型（类似于遍历）比如 p keyof Person；




































### 遇到的问题
* 添加了preitter之后commit无法自动格式化代码并出现乱码？
    * 由于echo创建文件，会自动选择utf-16的编码格式，导致husky读取配置文件异常，需要将vscode底部栏的utf-16改成utf-8；
* npm并行执行多条指令？
    * 可以通过&来连接执行多条指令，通过&&则是串行，但在windows下两者都是串行；
    * window并行执行方案 通过 concurrently（支持跨终端） 实现；
* 安装jira-dev-tools之后请求失败的原因在dev环境中需要将apiUrl和当前项目的链接保持一致；
* 安装jira-dev-tools之后请求一直404且工具未生效，需要根目录下执行下npx msw init ./public;