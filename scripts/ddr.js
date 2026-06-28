import render from "json-templater/string.js";
import fs from 'fs'
import routerPages from '../src/router/routerPage/page.js'
import menuList from '../src/const/menuList.js'
import path from 'path'
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const [, , name_En, name_Zh, category] = process.argv
const name_En_Up = name_En.slice(0, 1).toUpperCase() + name_En.slice(1)

// 删除文档菜单项
function delMenuList(name) {
    const menuItemForm = menuList.find((item) => {
        return item['title-cn'] === '表单组件'
    })
    const menuItemOther = menuList.find((item) => {
        return item['title-cn'] === '其他'
    })

    const indexForm = menuItemForm.list.findIndex((item) => {
        return name?.toLowerCase() === item['title-en']?.toLowerCase()
    })
    if (indexForm > -1) menuItemForm.list.splice(indexForm, 1)
    const indexOther = menuItemOther.list.findIndex((item) => {
        return name?.toLowerCase() === item['title-en']?.toLowerCase()
    })
    if (indexOther > -1) menuItemForm.list.splice(indexOther, 1)
}
delMenuList(name_En_Up)

const menuListTemplate = `export default ${JSON.stringify(menuList, null, 2)}`
fs.writeFileSync(path.join(__dirname, '../src/const/menuList.js'), menuListTemplate)



// 删除文档路由项
const children = routerPages[1].children.filter((item) => {
    return ['贡献指南', '更新日志', '安装使用'].indexOf(item.name) === -1
})
function delRouterlist(name) {
    const indexRoute = children.findIndex((item) => {
        return name?.toLowerCase() === item.path?.toLowerCase()
    })
    if (indexRoute > -1) children.splice(indexRoute, 1)
}
delRouterlist(name_En)



const routeTemplateList = []
const routeIframeTemplateList = []
const ROUTE_TEMPLATE =
    `{
       path: '{{path}}',
       name: '{{name}}',
       meta: { iframe: true },
       component: () => import('/packages/{{path}}/doc/doc.md')
     }`
const ROUTE_IFRAME_TEMPLATE =
    `{
    path: '/iframe/ics/{{path}}',
    name: '{{name}}',
    component: () => import('/packages/{{path}}/doc/iframe.md')
  }`

children.forEach((item) => {
    routeTemplateList.push(render(ROUTE_TEMPLATE, {
        // path: item.path.toLowerCase(),
        path: item.path,
        name: item.name
    }))
    routeIframeTemplateList.push(render(ROUTE_IFRAME_TEMPLATE, {
        // path: item.path.toLowerCase(),
        path: item.path,
        name: item.name
    }))
})



const TEMPLATE = `
export default [
  {
    path: '/',
    name: '主页',
    // component: () => import('@/views/index.vue')
    redirect : '/ics/install'
  },
  {
    path: '/ics',
    name: '组件页面',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '',
        name: '贡献指南',
        component: () => import('@/md/participation.md')
      },
      {
        path: 'updatelog',
        name: '更新日志',
        component: () => import('@/md/updatelog.md')
      },
      {
        path: 'install',
        name: '安装使用',
        component: () => import('@/md/install.md')
      },
      {{routesPage}}
    ]
  },
  {{routesPageIframe}}
]
`
const pageRouteContext = render(TEMPLATE, {
    routesPage: routeTemplateList.join(','),
    routesPageIframe: routeIframeTemplateList.join(','),
})
fs.writeFileSync(path.join(__dirname, '../src/router/routerPage/page.js'), pageRouteContext)
console.log('生成组件文档路由配置成功')