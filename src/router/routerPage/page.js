
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
      {
       path: 'calendar',
       name: 'calendar',
       meta: { iframe: true },
       component: () => import('/packages/calendar/doc/doc.md')
     },{
       path: 'pickerGroup',
       name: 'pickerGroup',
       meta: { iframe: true },
       component: () => import('/packages/pickerGroup/doc/doc.md')
     },{
       path: 'checkbox',
       name: 'Checkbox 复选框',
       meta: { iframe: true },
       component: () => import('/packages/checkbox/doc/doc.md')
     },{
       path: 'datePicker',
       name: 'DatePicker 日期选择',
       meta: { iframe: true },
       component: () => import('/packages/datePicker/doc/doc.md')
     },{
       path: 'timePicker',
       name: 'TimePicker 时间选择',
       meta: { iframe: true },
       component: () => import('/packages/timePicker/doc/doc.md')
     },{
       path: 'cascader',
       name: 'Cascader 级联选择',
       meta: { iframe: true },
       component: () => import('/packages/cascader/doc/doc.md')
     },{
       path: 'popup',
       name: 'Popup 弹出层',
       meta: { iframe: true },
       component: () => import('/packages/popup/doc/doc.md')
     },{
       path: 'cell',
       name: 'Cell 单元格',
       meta: { iframe: true },
       component: () => import('/packages/cell/doc/doc.md')
     },{
       path: 'cellGroup',
       name: 'CellGroup 单元格组',
       meta: { iframe: true },
       component: () => import('/packages/cellGroup/doc/doc.md')
     },{
       path: 'numberKeyboard',
       name: 'NumberKeyboard 数字键盘',
       meta: { iframe: true },
       component: () => import('/packages/numberKeyboard/doc/doc.md')
     },{
       path: 'field',
       name: 'Field 输入框',
       meta: { iframe: true },
       component: () => import('/packages/field/doc/doc.md')
     },{
       path: 'button',
       name: 'Button 按钮',
       meta: { iframe: true },
       component: () => import('/packages/button/doc/doc.md')
     }
    ]
  },
  {
    path: '/iframe/ics/calendar',
    name: 'iframe-calendar',
    component: () => import('/packages/calendar/doc/iframe.md')
  },{
    path: '/iframe/ics/pickerGroup',
    name: 'iframe-pickerGroup',
    component: () => import('/packages/pickerGroup/doc/iframe.md')
  },{
    path: '/iframe/ics/checkbox',
    name: 'iframe-Checkbox 复选框',
    component: () => import('/packages/checkbox/doc/iframe.md')
  },{
    path: '/iframe/ics/datePicker',
    name: 'iframe-DatePicker 日期选择',
    component: () => import('/packages/datePicker/doc/iframe.md')
  },{
    path: '/iframe/ics/timePicker',
    name: 'iframe-TimePicker 时间选择',
    component: () => import('/packages/timePicker/doc/iframe.md')
  },{
    path: '/iframe/ics/cascader',
    name: 'iframe-Cascader 级联选择',
    component: () => import('/packages/cascader/doc/iframe.md')
  },{
    path: '/iframe/ics/popup',
    name: 'iframe-Popup 弹出层',
    component: () => import('/packages/popup/doc/iframe.md')
  },{
    path: '/iframe/ics/cell',
    name: 'iframe-Cell 单元格',
    component: () => import('/packages/cell/doc/iframe.md')
  },{
    path: '/iframe/ics/cellGroup',
    name: 'iframe-CellGroup 单元格组',
    component: () => import('/packages/cellGroup/doc/iframe.md')
  },{
    path: '/iframe/ics/numberKeyboard',
    name: 'iframe-NumberKeyboard 数字键盘',
    component: () => import('/packages/numberKeyboard/doc/iframe.md')
  },{
    path: '/iframe/ics/field',
    name: 'iframe-Field 输入框',
    component: () => import('/packages/field/doc/iframe.md')
  },{
    path: '/iframe/ics/button',
    name: 'iframe-Button 按钮',
    component: () => import('/packages/button/doc/iframe.md')
  }
]
