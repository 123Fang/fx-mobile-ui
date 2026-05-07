import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import * as tar from 'tar';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const packagePath = path.join(__dirname,'../package.json');
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
const version = pkg.version // 发布的npm版本号，取根目录下 package.json 的版本号


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

/**
 * 让 ctf-ics-mobile-ui 的 npm 包透传如下内容：
 * 
 *   1 @vant/use
 *   2 @vant/area-data
 *   3 vant 组件库的所有ts类型 
 * 
 *  （这三块只做传递，不打包）
 * **/
const destDirPath = path.join(sourceDir, 'dist');

const rootVantUsePath= path.join(__dirname, '../template/@vant/use/index.js');
const npmVantUsePath = path.join(destDirPath, '@vant/use/index.js');
const dir_npmVantUse = path.dirname(npmVantUsePath);
fs.mkdirSync(dir_npmVantUse, { recursive: true });

if (fs.existsSync(rootVantUsePath)) {
  fs.copyFileSync(rootVantUsePath, npmVantUsePath);
   console.log(`✅ @vant/use 已生成`);
} else {
  console.warn(`⚠️ 警告: 根目录下的 @vant/use 不存在`);
}

const rootVantAreaDataPath= path.join(__dirname, '../template/@vant/area-data/index.js');
const npmVantAreaDataPath = path.join(destDirPath, '@vant/area-data/index.js');
const dir_npmVantAreaDataPath = path.dirname(npmVantAreaDataPath);
fs.mkdirSync(dir_npmVantAreaDataPath, { recursive: true });
if (fs.existsSync(rootVantAreaDataPath)) {
  fs.copyFileSync(rootVantAreaDataPath, npmVantAreaDataPath);
   console.log(`✅ @vant/area-data 已生成`);
} else {
  console.warn(`⚠️ 警告: 根目录下的 @vant/area-data 不存在`);
}

const rootVantTypePath= path.join(__dirname, '../template/vant-type/index.ts');
const npmVantTypePath = path.join(destDirPath, 'vant-type/global.d.ts');
const dir_npmVantTypePath = path.dirname(npmVantTypePath);
fs.mkdirSync(dir_npmVantTypePath, { recursive: true });
if (fs.existsSync(rootVantTypePath)) {
  fs.copyFileSync(rootVantTypePath, npmVantTypePath);
   console.log(`✅ vant 类型声明文件已生成`);
} else {
  console.warn(`⚠️ 警告: 根目录下的 vant-type 不存在`);
}



// 生成 package.json 内容
const packageJson = {
  name: "ctf-ics-mobile-ui",
  version: version,
  description: "1组件及样式前缀统一为ics作为样式隔离;2自动适配基座主题色;3内置按需引入element-plus@2.6.3",
  type: "module",
  module: "./dist/ctf-ics-mobile-ui.js",
  "types": "./dist/vant-type/global.d.ts",
  exports: {
    ".": {
      "import": "./dist/ctf-ics-mobile-ui.js",
      "require": "./dist/ctf-ics-mobile-ui.umd.js"
    },
    "./*": "./*",
    "./use": {
      "import": "./dist/@vant/use/index.js",
    },
    "./area-data": {
      "import": "./dist/@vant/area-data/index.js",
    },
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