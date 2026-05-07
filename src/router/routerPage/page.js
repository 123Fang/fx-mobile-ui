
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
        component: () => import('../../../CHANGELOG.md')
      },
      {
        path: 'install',
        name: '安装使用',
        component: () => import('@/md/install.md')
      },
       {
        path: 'advanced-usage',
        name: '进阶用法',
        component: () => import('@/md/advanced-usage.md')
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
     },{
       path: 'empty',
       name: 'Empty 空状态',
       meta: { iframe: true },
       component: () => import('/packages/empty/doc/doc.md')
     },{
       path: 'passwordInput',
       name: 'PasswordInput 密码输入框',
       meta: { iframe: true },
       component: () => import('/packages/passwordInput/doc/doc.md')
     },{
       path: 'rate',
       name: 'Rate 评分',
       meta: { iframe: true },
       component: () => import('/packages/rate/doc/doc.md')
     },{
       path: 'search',
       name: 'Search 搜索',
       meta: { iframe: true },
       component: () => import('/packages/search/doc/doc.md')
     },{
       path: 'slider',
       name: 'Slider 滑块',
       meta: { iframe: true },
       component: () => import('/packages/slider/doc/doc.md')
     },{
       path: 'signature',
       name: 'Signature 签名',
       meta: { iframe: true },
       component: () => import('/packages/signature/doc/doc.md')
     },{
       path: 'stepper',
       name: 'Stepper 步进器',
       meta: { iframe: true },
       component: () => import('/packages/stepper/doc/doc.md')
     },{
       path: 'switch',
       name: 'Switch 开关',
       meta: { iframe: true },
       component: () => import('/packages/switch/doc/doc.md')
     },{
       path: 'dialog',
       name: 'Dialog 弹出框',
       meta: { iframe: true },
       component: () => import('/packages/dialog/doc/doc.md')
     },{
       path: 'pullRefresh',
       name: 'PullRefresh 下拉刷新',
       meta: { iframe: true },
       component: () => import('/packages/pullRefresh/doc/doc.md')
     },{
       path: 'uploader',
       name: 'Uploader 文件上传',
       meta: { iframe: true },
       component: () => import('/packages/uploader/doc/doc.md')
     },{
       path: 'area',
       name: 'Area 省市区选择',
       meta: { iframe: true },
       component: () => import('/packages/area/doc/doc.md')
     },{
       path: 'checkboxGroup',
       name: 'CheckboxGroup 复选框组',
       meta: { iframe: true },
       component: () => import('/packages/checkboxGroup/doc/doc.md')
     },{
       path: 'actionSheet',
       name: 'ActionSheet 动作面板',
       meta: { iframe: true },
       component: () => import('/packages/actionSheet/doc/doc.md')
     },{
       path: 'barrage',
       name: 'Barrage 弹幕',
       meta: { iframe: true },
       component: () => import('/packages/barrage/doc/doc.md')
     },{
       path: 'dropdownMenu',
       name: 'DropdownMenu 下拉菜单',
       meta: { iframe: true },
       component: () => import('/packages/dropdownMenu/doc/doc.md')
     },{
       path: 'dropdownItem',
       name: 'DropdownItem 下拉菜单dropdownItem',
       meta: { iframe: true },
       component: () => import('/packages/dropdownItem/doc/doc.md')
     },{
       path: 'floatingPanel',
       name: 'FloatingPanel 浮动面板',
       meta: { iframe: true },
       component: () => import('/packages/floatingPanel/doc/doc.md')
     },{
       path: 'configProvider',
       name: 'ConfigProvider 全局配置',
       meta: { iframe: true },
       component: () => import('/packages/configProvider/doc/doc.md')
     },{
       path: 'floatingBubble',
       name: 'FloatingBubble 浮动气泡',
       meta: { iframe: true },
       component: () => import('/packages/floatingBubble/doc/doc.md')
     },{
       path: 'overlay',
       name: 'Overlay 遮罩层',
       meta: { iframe: true },
       component: () => import('/packages/overlay/doc/doc.md')
     },{
       path: 'shareSheet',
       name: 'ShareSheet 分享面板',
       meta: { iframe: true },
       component: () => import('/packages/shareSheet/doc/doc.md')
     },{
       path: 'swipeCell',
       name: 'SwipeCell 滑动单元格',
       meta: { iframe: true },
       component: () => import('/packages/swipeCell/doc/doc.md')
     },{
       path: 'card',
       name: 'Card 卡片',
       meta: { iframe: true },
       component: () => import('/packages/card/doc/doc.md')
     },{
       path: 'badge',
       name: 'Badge 徽标',
       meta: { iframe: true },
       component: () => import('/packages/badge/doc/doc.md')
     },{
       path: 'circle',
       name: 'Circle 环形进度条',
       meta: { iframe: true },
       component: () => import('/packages/circle/doc/doc.md')
     },{
       path: 'collapse',
       name: 'Collapse 折叠面板',
       meta: { iframe: true },
       component: () => import('/packages/collapse/doc/doc.md')
     },{
       path: 'countDown',
       name: 'CountDown 倒计时',
       meta: { iframe: true },
       component: () => import('/packages/countDown/doc/doc.md')
     },{
       path: 'divider',
       name: 'Divider 分割线',
       meta: { iframe: true },
       component: () => import('/packages/divider/doc/doc.md')
     },{
       path: 'highlight',
       name: 'Highlight 高亮文本',
       meta: { iframe: true },
       component: () => import('/packages/highlight/doc/doc.md')
     },{
       path: 'imagePreview',
       name: 'ImagePreview 图片预览',
       meta: { iframe: true },
       component: () => import('/packages/imagePreview/doc/doc.md')
     },{
       path: 'noticeBar',
       name: 'NoticeBar 通知栏',
       meta: { iframe: true },
       component: () => import('/packages/noticeBar/doc/doc.md')
     },{
       path: 'popover',
       name: 'Popover 气泡弹出框',
       meta: { iframe: true },
       component: () => import('/packages/popover/doc/doc.md')
     },{
       path: 'rollingText',
       name: 'RollingText 翻滚文本',
       meta: { iframe: true },
       component: () => import('/packages/rollingText/doc/doc.md')
     },{
       path: 'skeleton',
       name: 'Skeleton 骨架屏',
       meta: { iframe: true },
       component: () => import('/packages/skeleton/doc/doc.md')
     },{
       path: 'skeletonTitle',
       name: 'SkeletonTitle 骨架屏',
       meta: { iframe: true },
       component: () => import('/packages/skeletonTitle/doc/doc.md')
     },{
       path: 'skeletonImage',
       name: 'SkeletonImage 骨架屏',
       meta: { iframe: true },
       component: () => import('/packages/skeletonImage/doc/doc.md')
     },{
       path: 'skeletonAvatar',
       name: 'SkeletonAvatar 骨架屏',
       meta: { iframe: true },
       component: () => import('/packages/skeletonAvatar/doc/doc.md')
     },{
       path: 'skeletonParagraph',
       name: 'SkeletonParagraph 骨架屏',
       meta: { iframe: true },
       component: () => import('/packages/skeletonParagraph/doc/doc.md')
     },{
       path: 'step',
       name: 'Step 步骤条',
       meta: { iframe: true },
       component: () => import('/packages/step/doc/doc.md')
     },{
       path: 'steps',
       name: 'Steps 步骤条',
       meta: { iframe: true },
       component: () => import('/packages/steps/doc/doc.md')
     },{
       path: 'sticky',
       name: 'Sticky 粘性布局',
       meta: { iframe: true },
       component: () => import('/packages/sticky/doc/doc.md')
     },{
       path: 'textEllipsis',
       name: 'TextEllipsis 文本省略',
       meta: { iframe: true },
       component: () => import('/packages/textEllipsis/doc/doc.md')
     },{
       path: 'watermark',
       name: 'Watermark 水印',
       meta: { iframe: true },
       component: () => import('/packages/watermark/doc/doc.md')
     },{
       path: 'actionBar',
       name: 'ActionBar 动作栏',
       meta: { iframe: true },
       component: () => import('/packages/actionBar/doc/doc.md')
     },{
       path: 'actionBarIcon',
       name: 'ActionBarIcon actionBarIcon动作栏',
       meta: { iframe: true },
       component: () => import('/packages/actionBarIcon/doc/doc.md')
     },{
       path: 'actionBarButton',
       name: 'ActionBarButton actionBarButton动作栏',
       meta: { iframe: true },
       component: () => import('/packages/actionBarButton/doc/doc.md')
     },{
       path: 'backTop',
       name: 'BackTop 回到顶部',
       meta: { iframe: true },
       component: () => import('/packages/backTop/doc/doc.md')
     },{
       path: 'indexBar',
       name: 'IndexBar 索引栏',
       meta: { iframe: true },
       component: () => import('/packages/indexBar/doc/doc.md')
     },{
       path: 'indexAnchor',
       name: 'IndexAnchor indexAnchor索引栏',
       meta: { iframe: true },
       component: () => import('/packages/indexAnchor/doc/doc.md')
     },{
       path: 'navBar',
       name: 'NavBar 导航栏',
       meta: { iframe: true },
       component: () => import('/packages/navBar/doc/doc.md')
     },{
       path: 'pagination',
       name: 'Pagination 分页',
       meta: { iframe: true },
       component: () => import('/packages/pagination/doc/doc.md')
     },{
       path: 'sidebar',
       name: 'Sidebar 侧边导航',
       meta: { iframe: true },
       component: () => import('/packages/sidebar/doc/doc.md')
     },{
       path: 'sidebarItem',
       name: 'SidebarItem sidebarItem侧边导航',
       meta: { iframe: true },
       component: () => import('/packages/sidebarItem/doc/doc.md')
     },{
       path: 'tabbar',
       name: 'Tabbar 标签栏',
       meta: { iframe: true },
       component: () => import('/packages/tabbar/doc/doc.md')
     },{
       path: 'tabbarItem',
       name: 'TabbarItem tabbarItem标签栏',
       meta: { iframe: true },
       component: () => import('/packages/tabbarItem/doc/doc.md')
     },{
       path: 'treeSelect',
       name: 'TreeSelect 分类选择',
       meta: { iframe: true },
       component: () => import('/packages/treeSelect/doc/doc.md')
     },{
       path: 'addressEdit',
       name: 'AddressEdit 地址编辑',
       meta: { iframe: true },
       component: () => import('/packages/addressEdit/doc/doc.md')
     },{
       path: 'addressList',
       name: 'AddressList 地址列表',
       meta: { iframe: true },
       component: () => import('/packages/addressList/doc/doc.md')
     },{
       path: 'contactCard',
       name: 'ContactCard 联系人卡片',
       meta: { iframe: true },
       component: () => import('/packages/contactCard/doc/doc.md')
     },{
       path: 'contactEdit',
       name: 'ContactEdit 联系人编辑',
       meta: { iframe: true },
       component: () => import('/packages/contactEdit/doc/doc.md')
     },{
       path: 'contactList',
       name: 'ContactList 联系人列表',
       meta: { iframe: true },
       component: () => import('/packages/contactList/doc/doc.md')
     },{
       path: 'couponList',
       name: 'CouponList 优惠券选择器',
       meta: { iframe: true },
       component: () => import('/packages/couponList/doc/doc.md')
     },{
       path: 'couponCell',
       name: 'CouponCell couponCell优惠券选择器',
       meta: { iframe: true },
       component: () => import('/packages/couponCell/doc/doc.md')
     },{
       path: 'submitBar',
       name: 'SubmitBar 提交订单栏',
       meta: { iframe: true },
       component: () => import('/packages/submitBar/doc/doc.md')
     },
      /***********************************
      *  @vant/use doc 文档
      * *********************************/
     {
       path: 'use-click-away',
       name: 'use-click-away',
       component: () => import('@/docs/vantUseDoc/markdown/use-click-away.md')
     },
     {
      path: 'useCountDown',
      name: 'useCountDown',
      component: () => import('@/docs/vantUseDoc/markdown/use-count-down.zh-CN.md')
    },
    {
      path: 'useCustomFieldValue',
      name: 'useCustomFieldValue',
      component: () => import('@/docs/vantUseDoc/markdown/use-custom-field-value.zh-CN.md')
    },
   
    {
      path: 'useEventListener',
      name: 'useEventListener',
      component: () => import('@/docs/vantUseDoc/markdown/use-event-listener.zh-CN.md')
    },
    {
      path: 'usePageVisibility',
      name: 'usePageVisibility',
      component: () => import('@/docs/vantUseDoc/markdown/use-page-visibility.zh-CN.md')
    },
    {
      path: 'useRect',
      name: 'useRect',
      component: () => import('@/docs/vantUseDoc/markdown/use-rect.zh-CN.md')
    },
    {
      path: 'useRelation',
      name: 'useRelation',
      component: () => import('@/docs/vantUseDoc/markdown/use-relation.zh-CN.md')
    },
    {
      path: 'useScrollParent',
      name: 'useScrollParent',
      component: () => import('@/docs/vantUseDoc/markdown/use-scroll-parent.zh-CN.md')
    },
    {
      path: 'useToggle',
      name: 'useToggle',
      component: () => import('@/docs/vantUseDoc/markdown/use-toggle.zh-CN.md')
    },
    {
      path: 'useWindowSize',
      name: 'useWindowSize',
      component: () => import('@/docs/vantUseDoc/markdown/use-window-size.zh-CN.md')
    },
    {
      path: 'useRaf',
      name: 'useRaf',
      component: () => import('@/docs/vantUseDoc/markdown/use-raf.zh-CN.md')
    },
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
  },{
    path: '/iframe/ics/empty',
    name: 'iframe-Empty 空状态',
    component: () => import('/packages/empty/doc/iframe.md')
  },{
    path: '/iframe/ics/passwordInput',
    name: 'iframe-PasswordInput 密码输入框',
    component: () => import('/packages/passwordInput/doc/iframe.md')
  },{
    path: '/iframe/ics/rate',
    name: 'iframe-Rate 评分',
    component: () => import('/packages/rate/doc/iframe.md')
  },{
    path: '/iframe/ics/search',
    name: 'iframe-Search 搜索',
    component: () => import('/packages/search/doc/iframe.md')
  },{
    path: '/iframe/ics/slider',
    name: 'iframe-Slider 滑块',
    component: () => import('/packages/slider/doc/iframe.md')
  },{
    path: '/iframe/ics/signature',
    name: 'iframe-Signature 签名',
    component: () => import('/packages/signature/doc/iframe.md')
  },{
    path: '/iframe/ics/stepper',
    name: 'iframe-Stepper 步进器',
    component: () => import('/packages/stepper/doc/iframe.md')
  },{
    path: '/iframe/ics/switch',
    name: 'iframe-Switch 开关',
    component: () => import('/packages/switch/doc/iframe.md')
  },{
    path: '/iframe/ics/dialog',
    name: 'iframe-Dialog 弹出框',
    component: () => import('/packages/dialog/doc/iframe.md')
  },{
    path: '/iframe/ics/pullRefresh',
    name: 'iframe-PullRefresh 下拉刷新',
    component: () => import('/packages/pullRefresh/doc/iframe.md')
  },{
    path: '/iframe/ics/uploader',
    name: 'iframe-Uploader 文件上传',
    component: () => import('/packages/uploader/doc/iframe.md')
  },{
    path: '/iframe/ics/area',
    name: 'iframe-Area 省市区选择',
    component: () => import('/packages/area/doc/iframe.md')
  },{
    path: '/iframe/ics/checkboxGroup',
    name: 'iframe-CheckboxGroup 复选框组',
    component: () => import('/packages/checkboxGroup/doc/iframe.md')
  },{
    path: '/iframe/ics/actionSheet',
    name: 'iframe-ActionSheet 动作面板',
    component: () => import('/packages/actionSheet/doc/iframe.md')
  },{
    path: '/iframe/ics/barrage',
    name: 'iframe-Barrage 弹幕',
    component: () => import('/packages/barrage/doc/iframe.md')
  },{
    path: '/iframe/ics/dropdownMenu',
    name: 'iframe-DropdownMenu 下拉菜单',
    component: () => import('/packages/dropdownMenu/doc/iframe.md')
  },{
    path: '/iframe/ics/dropdownItem',
    name: 'iframe-DropdownItem 下拉菜单dropdownItem',
    component: () => import('/packages/dropdownItem/doc/iframe.md')
  },{
    path: '/iframe/ics/floatingPanel',
    name: 'iframe-FloatingPanel 浮动面板',
    component: () => import('/packages/floatingPanel/doc/iframe.md')
  },{
    path: '/iframe/ics/configProvider',
    name: 'iframe-ConfigProvider 全局配置',
    component: () => import('/packages/configProvider/doc/iframe.md')
  },{
    path: '/iframe/ics/floatingBubble',
    name: 'iframe-FloatingBubble 浮动气泡',
    component: () => import('/packages/floatingBubble/doc/iframe.md')
  },{
    path: '/iframe/ics/overlay',
    name: 'iframe-Overlay 遮罩层',
    component: () => import('/packages/overlay/doc/iframe.md')
  },{
    path: '/iframe/ics/shareSheet',
    name: 'iframe-ShareSheet 分享面板',
    component: () => import('/packages/shareSheet/doc/iframe.md')
  },{
    path: '/iframe/ics/swipeCell',
    name: 'iframe-SwipeCell 滑动单元格',
    component: () => import('/packages/swipeCell/doc/iframe.md')
  },{
    path: '/iframe/ics/card',
    name: 'iframe-Card 卡片',
    component: () => import('/packages/card/doc/iframe.md')
  },{
    path: '/iframe/ics/badge',
    name: 'iframe-Badge 徽标',
    component: () => import('/packages/badge/doc/iframe.md')
  },{
    path: '/iframe/ics/circle',
    name: 'iframe-Circle 环形进度条',
    component: () => import('/packages/circle/doc/iframe.md')
  },{
    path: '/iframe/ics/collapse',
    name: 'iframe-Collapse 折叠面板',
    component: () => import('/packages/collapse/doc/iframe.md')
  },{
    path: '/iframe/ics/countDown',
    name: 'iframe-CountDown 倒计时',
    component: () => import('/packages/countDown/doc/iframe.md')
  },{
    path: '/iframe/ics/divider',
    name: 'iframe-Divider 分割线',
    component: () => import('/packages/divider/doc/iframe.md')
  },{
    path: '/iframe/ics/highlight',
    name: 'iframe-Highlight 高亮文本',
    component: () => import('/packages/highlight/doc/iframe.md')
  },{
    path: '/iframe/ics/imagePreview',
    name: 'iframe-ImagePreview 图片预览',
    component: () => import('/packages/imagePreview/doc/iframe.md')
  },{
    path: '/iframe/ics/noticeBar',
    name: 'iframe-NoticeBar 通知栏',
    component: () => import('/packages/noticeBar/doc/iframe.md')
  },{
    path: '/iframe/ics/popover',
    name: 'iframe-Popover 气泡弹出框',
    component: () => import('/packages/popover/doc/iframe.md')
  },{
    path: '/iframe/ics/rollingText',
    name: 'iframe-RollingText 翻滚文本',
    component: () => import('/packages/rollingText/doc/iframe.md')
  },{
    path: '/iframe/ics/skeleton',
    name: 'iframe-Skeleton 骨架屏',
    component: () => import('/packages/skeleton/doc/iframe.md')
  },{
    path: '/iframe/ics/skeletonTitle',
    name: 'iframe-SkeletonTitle 骨架屏',
    component: () => import('/packages/skeletonTitle/doc/iframe.md')
  },{
    path: '/iframe/ics/skeletonImage',
    name: 'iframe-SkeletonImage 骨架屏',
    component: () => import('/packages/skeletonImage/doc/iframe.md')
  },{
    path: '/iframe/ics/skeletonAvatar',
    name: 'iframe-SkeletonAvatar 骨架屏',
    component: () => import('/packages/skeletonAvatar/doc/iframe.md')
  },{
    path: '/iframe/ics/skeletonParagraph',
    name: 'iframe-SkeletonParagraph 骨架屏',
    component: () => import('/packages/skeletonParagraph/doc/iframe.md')
  },{
    path: '/iframe/ics/step',
    name: 'iframe-Step 步骤条',
    component: () => import('/packages/step/doc/iframe.md')
  },{
    path: '/iframe/ics/steps',
    name: 'iframe-Steps 步骤条',
    component: () => import('/packages/steps/doc/iframe.md')
  },{
    path: '/iframe/ics/sticky',
    name: 'iframe-Sticky 粘性布局',
    component: () => import('/packages/sticky/doc/iframe.md')
  },{
    path: '/iframe/ics/textEllipsis',
    name: 'iframe-TextEllipsis 文本省略',
    component: () => import('/packages/textEllipsis/doc/iframe.md')
  },{
    path: '/iframe/ics/watermark',
    name: 'iframe-Watermark 水印',
    component: () => import('/packages/watermark/doc/iframe.md')
  },{
    path: '/iframe/ics/actionBar',
    name: 'iframe-ActionBar 动作栏',
    component: () => import('/packages/actionBar/doc/iframe.md')
  },{
    path: '/iframe/ics/actionBarIcon',
    name: 'iframe-ActionBarIcon actionBarIcon动作栏',
    component: () => import('/packages/actionBarIcon/doc/iframe.md')
  },{
    path: '/iframe/ics/actionBarButton',
    name: 'iframe-ActionBarButton actionBarButton动作栏',
    component: () => import('/packages/actionBarButton/doc/iframe.md')
  },{
    path: '/iframe/ics/backTop',
    name: 'iframe-BackTop 回到顶部',
    component: () => import('/packages/backTop/doc/iframe.md')
  },{
    path: '/iframe/ics/indexBar',
    name: 'iframe-IndexBar 索引栏',
    component: () => import('/packages/indexBar/doc/iframe.md')
  },{
    path: '/iframe/ics/indexAnchor',
    name: 'iframe-IndexAnchor indexAnchor索引栏',
    component: () => import('/packages/indexAnchor/doc/iframe.md')
  },{
    path: '/iframe/ics/navBar',
    name: 'iframe-NavBar 导航栏',
    component: () => import('/packages/navBar/doc/iframe.md')
  },{
    path: '/iframe/ics/pagination',
    name: 'iframe-Pagination 分页',
    component: () => import('/packages/pagination/doc/iframe.md')
  },{
    path: '/iframe/ics/sidebar',
    name: 'iframe-Sidebar 侧边导航',
    component: () => import('/packages/sidebar/doc/iframe.md')
  },{
    path: '/iframe/ics/sidebarItem',
    name: 'iframe-SidebarItem sidebarItem侧边导航',
    component: () => import('/packages/sidebarItem/doc/iframe.md')
  },{
    path: '/iframe/ics/tabbar',
    name: 'iframe-Tabbar 标签栏',
    component: () => import('/packages/tabbar/doc/iframe.md')
  },{
    path: '/iframe/ics/tabbarItem',
    name: 'iframe-TabbarItem tabbarItem标签栏',
    component: () => import('/packages/tabbarItem/doc/iframe.md')
  },{
    path: '/iframe/ics/treeSelect',
    name: 'iframe-TreeSelect 分类选择',
    component: () => import('/packages/treeSelect/doc/iframe.md')
  },{
    path: '/iframe/ics/addressEdit',
    name: 'iframe-AddressEdit 地址编辑',
    component: () => import('/packages/addressEdit/doc/iframe.md')
  },{
    path: '/iframe/ics/addressList',
    name: 'iframe-AddressList 地址列表',
    component: () => import('/packages/addressList/doc/iframe.md')
  },{
    path: '/iframe/ics/contactCard',
    name: 'iframe-ContactCard 联系人卡片',
    component: () => import('/packages/contactCard/doc/iframe.md')
  },{
    path: '/iframe/ics/contactEdit',
    name: 'iframe-ContactEdit 联系人编辑',
    component: () => import('/packages/contactEdit/doc/iframe.md')
  },{
    path: '/iframe/ics/contactList',
    name: 'iframe-ContactList 联系人列表',
    component: () => import('/packages/contactList/doc/iframe.md')
  },{
    path: '/iframe/ics/couponList',
    name: 'iframe-CouponList 优惠券选择器',
    component: () => import('/packages/couponList/doc/iframe.md')
  },{
    path: '/iframe/ics/couponCell',
    name: 'iframe-CouponCell couponCell优惠券选择器',
    component: () => import('/packages/couponCell/doc/iframe.md')
  },{
    path: '/iframe/ics/submitBar',
    name: 'iframe-SubmitBar 提交订单栏',
    component: () => import('/packages/submitBar/doc/iframe.md')
  },
  /**
   * @vant/use doc 文档
   * **/
  // src\docs\vantUseDoc
]
