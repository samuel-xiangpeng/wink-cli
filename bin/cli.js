#! /usr/bin/env node
const program = require("commander")
const chalk =require("chalk")
const figlet = require("figlet")
program
    // 定义命令和参数
    .command('create <app-name>')
    .description('create a new project')
    // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
        // 打印执行结果
        // 在 create.js 中执行创建任务
        require('../lib/create.js')(name, options)
    })

program
    // 配置版本号信息
    .version(`v${require('../package.json').version}`, "-v")
    .usage('<command> [option]')
    .showHelpAfterError()


program
    // 监听 --help 执行
    .on('--help', () => {
        // 新增说明信息
        console.log('\r\n' + figlet.textSync('lazy help', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 100,
            whitespaceBreak: true
        }));
        console.log(`\r\nRun ${chalk.cyan(`lazy <command> --help`)} for detailed usage of given command\r\n`)
    })

// 解析用户执行命令传入参数
program.parse(process.argv);
