
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
     },{
       path: 'swipe',
       name: 'Swipe 轮播',
       meta: { iframe: true },
       component: () => import('/packages/swipe/doc/doc.md')
     },{
       path: 'swipeItem',
       name: 'SwipeItem 轮播项',
       meta: { iframe: true },
       component: () => import('/packages/swipeItem/doc/doc.md')
     },{
       path: 'icon',
       name: 'Icon 图标',
       meta: { iframe: true },
       component: () => import('/packages/icon/doc/doc.md')
     },{
       path: 'space',
       name: 'Space 间距',
       meta: { iframe: true },
       component: () => import('/packages/space/doc/doc.md')
     },{
       path: 'radio',
       name: 'Radio 单选框',
       meta: { iframe: true },
       component: () => import('/packages/radio/doc/doc.md')
     },{
       path: 'radioGroup',
       name: 'RadioGroup 单选框组',
       meta: { iframe: true },
       component: () => import('/packages/radioGroup/doc/doc.md')
     },{
       path: 'picker',
       name: 'Picker 选择器',
       meta: { iframe: true },
       component: () => import('/packages/picker/doc/doc.md')
     },{
       path: 'grid',
       name: 'Grid 宫格',
       meta: { iframe: true },
       component: () => import('/packages/grid/doc/doc.md')
     },{
       path: 'gridItem',
       name: 'GridItem 宫格',
       meta: { iframe: true },
       component: () => import('/packages/gridItem/doc/doc.md')
     },{
       path: 'tag',
       name: 'Tag 标签',
       meta: { iframe: true },
       component: () => import('/packages/tag/doc/doc.md')
     },{
       path: 'toast',
       name: 'Toast 轻提示',
       meta: { iframe: true },
       component: () => import('/packages/toast/doc/doc.md')
     },{
       path: 'image',
       name: 'Image 图片',
       meta: { iframe: true },
       component: () => import('/packages/image/doc/doc.md')
     },{
       path: 'loading',
       name: 'Loading 加载',
       meta: { iframe: true },
       component: () => import('/packages/loading/doc/doc.md')
     },{
       path: 'row',
       name: 'Row 布局',
       meta: { iframe: true },
       component: () => import('/packages/row/doc/doc.md')
     },{
       path: 'col',
       name: 'Col 布局',
       meta: { iframe: true },
       component: () => import('/packages/col/doc/doc.md')
     },{
       path: 'tabs',
       name: 'Tabs 标签页',
       meta: { iframe: true },
       component: () => import('/packages/tabs/doc/doc.md')
     },{
       path: 'tab',
       name: 'Tab 标签页',
       meta: { iframe: true },
       component: () => import('/packages/tab/doc/doc.md')
     },{
       path: 'notify',
       name: 'Notify 消息提示',
       meta: { iframe: true },
       component: () => import('/packages/notify/doc/doc.md')
     },{
       path: 'lazyload',
       name: 'Lazyload 懒加载',
       meta: { iframe: true },
       component: () => import('/packages/lazyload/doc/doc.md')
     },{
       path: 'list',
       name: 'List 列表',
       meta: { iframe: true },
       component: () => import('/packages/list/doc/doc.md')
     },{
       path: 'progress',
       name: 'Progress 进度条',
       meta: { iframe: true },
       component: () => import('/packages/progress/doc/doc.md')
     },{
       path: 'form',
       name: 'Form 表单',
       meta: { iframe: true },
       component: () => import('/packages/form/doc/doc.md')
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
  },{
    path: '/iframe/ics/swipe',
    name: 'iframe-Swipe 轮播',
    component: () => import('/packages/swipe/doc/iframe.md')
  },{
    path: '/iframe/ics/swipeItem',
    name: 'iframe-SwipeItem 轮播项',
    component: () => import('/packages/swipeItem/doc/iframe.md')
  },{
    path: '/iframe/ics/icon',
    name: 'iframe-Icon 图标',
    component: () => import('/packages/icon/doc/iframe.md')
  },{
    path: '/iframe/ics/space',
    name: 'iframe-Space 间距',
    component: () => import('/packages/space/doc/iframe.md')
  },{
    path: '/iframe/ics/radio',
    name: 'iframe-Radio 单选框',
    component: () => import('/packages/radio/doc/iframe.md')
  },{
    path: '/iframe/ics/radioGroup',
    name: 'iframe-RadioGroup 单选框组',
    component: () => import('/packages/radioGroup/doc/iframe.md')
  },{
    path: '/iframe/ics/picker',
    name: 'iframe-Picker 选择器',
    component: () => import('/packages/picker/doc/iframe.md')
  },{
    path: '/iframe/ics/grid',
    name: 'iframe-Grid 宫格',
    component: () => import('/packages/grid/doc/iframe.md')
  },{
    path: '/iframe/ics/gridItem',
    name: 'iframe-GridItem 宫格',
    component: () => import('/packages/gridItem/doc/iframe.md')
  },{
    path: '/iframe/ics/tag',
    name: 'iframe-Tag 标签',
    component: () => import('/packages/tag/doc/iframe.md')
  },{
    path: '/iframe/ics/toast',
    name: 'iframe-Toast 轻提示',
    component: () => import('/packages/toast/doc/iframe.md')
  },{
    path: '/iframe/ics/image',
    name: 'iframe-Image 图片',
    component: () => import('/packages/image/doc/iframe.md')
  },{
    path: '/iframe/ics/loading',
    name: 'iframe-Loading 加载',
    component: () => import('/packages/loading/doc/iframe.md')
  },{
    path: '/iframe/ics/row',
    name: 'iframe-Row 布局',
    component: () => import('/packages/row/doc/iframe.md')
  },{
    path: '/iframe/ics/col',
    name: 'iframe-Col 布局',
    component: () => import('/packages/col/doc/iframe.md')
  },{
    path: '/iframe/ics/tabs',
    name: 'iframe-Tabs 标签页',
    component: () => import('/packages/tabs/doc/iframe.md')
  },{
    path: '/iframe/ics/tab',
    name: 'iframe-Tab 标签页',
    component: () => import('/packages/tab/doc/iframe.md')
  },{
    path: '/iframe/ics/notify',
    name: 'iframe-Notify 消息提示',
    component: () => import('/packages/notify/doc/iframe.md')
  },{
    path: '/iframe/ics/lazyload',
    name: 'iframe-Lazyload 懒加载',
    component: () => import('/packages/lazyload/doc/iframe.md')
  },{
    path: '/iframe/ics/list',
    name: 'iframe-List 列表',
    component: () => import('/packages/list/doc/iframe.md')
  },{
    path: '/iframe/ics/progress',
    name: 'iframe-Progress 进度条',
    component: () => import('/packages/progress/doc/iframe.md')
  },{
    path: '/iframe/ics/form',
    name: 'iframe-Form 表单',
    component: () => import('/packages/form/doc/iframe.md')
  }
]
