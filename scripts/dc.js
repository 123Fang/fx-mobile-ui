/* eslint-disable no-undef */
import fs from 'fs'
import inquirer from 'inquirer'
import chalk from 'chalk';
import { red } from 'kolorist'
import path from 'path'
import { fileURLToPath } from "node:url"
import { genDocRoute, genLibEntry } from './actions/jobs/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const args = process.argv.slice(2);


const NAME = args[0]; // 组件名
const FILE_PATH = path.join(path.resolve(__dirname), '..', 'packages');

if (!args.length) {
    console.log('请填写组件名');
    console.log('Usage: button（单个） 或 dropDown（小驼峰式）')
    process.exit(1);
}
if (/-/.test(NAME)) {
    console.log('请重新输入小驼峰式的组件名，如 dropDown')
    process.exit(1);
}

const DIRNAME = path.join(FILE_PATH, NAME); // 组件目录
// const INPUT_NAME = NAME;
const CREATE_TYPES = ['确定', '取消']
// 如果存在，给出提示，然后退出
if (fs.existsSync(DIRNAME)) {
    console.log(`${NAME} 组件已经存在，请更换组件名！`);

    const result = await inquirer.prompt([
        {
            // 用于获取后的属性名
            name: 'type',
            // 交互方式为列表单选
            type: 'list',
            // 提示信息
            message: `确定要删除 ${NAME} 组件？`,
            // 选项列表
            choices: CREATE_TYPES,
            // 默认值，这里是索引下标
            default: 0
        }
    ])

    if (result.type === '确定') {
        fs.rmSync(DIRNAME, { recursive: true, force: true });
        await genLibEntry()
        await genDocRoute({name: NAME},true)
        console.log(chalk.green(`删除成功`));
    } else {
       console.log(chalk.blue(`取消成功`));
    }
    process.exit(1);
} else {
    console.log(chalk.red(`❌ packages目录下'${NAME}'组件不存在`));
    process.exit(1);
}



