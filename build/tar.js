import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import * as tar from 'tar';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取命令行参数（版本号）
const version = process.argv[2];
if (!version) {
  console.error('请提供版本号，例如：npm run build 2.1.8');
  process.exit(1);
}

const sourceDir = path.join(__dirname, '../ctf-ics-mobile-ui-dist');
const outputFile = path.join(__dirname, '../ctf-ics-mobile-ui-dist.tgz');

// 如果本地存在.tar文件，先删除旧的
if (fs.existsSync(outputFile)) {
  try {
    fs.unlinkSync(outputFile);
    console.log(`✅ 已删除旧的打包文件: ${outputFile}`);
  } catch (err) {
    console.error(`❌ 删除旧文件失败: ${err.message}`);
    process.exit(1);
  }
}

// 确保目标目录存在
fs.mkdirSync(sourceDir, { recursive: true });

// 生成 package.json 内容
const packageJson = {
  name: "ctf-ics-mobile-ui",
  version: version,
  description: "1组件及样式前缀统一为ics作为样式隔离;2自动适配基座主题色;3内置按需引入element-plus@2.6.3",
  type: "module",
  module: "./dist/ctf-ics-mobile-ui.js",
  exports: {
    ".": {
      "import": "./dist/ctf-ics-mobile-ui.js",
      "require": "./dist/ctf-ics-mobile-ui.umd.js"
    },
    "./*": "./*"
  },
  engines: {
    "node": ">=18.0.0"
  }
};

// 写入 package.json 到源目录
const pkgPath = path.join(sourceDir, 'package.json');
fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, 2));
console.log(`✅ 已生成 package.json，版本号: ${version}`);

// 执行打包
tar.c(
  {
    gzip: true,
    file: outputFile,
    cwd: path.dirname(sourceDir), // 工作目录设为 sourceDir 的父级
  },
  [path.basename(sourceDir)]      // 只打包该目录本身
).then(() => {
  console.log('📦 打包完成！');
}).catch(err => {
  console.error('❌ 打包失败:', err);
  process.exit(1);
});