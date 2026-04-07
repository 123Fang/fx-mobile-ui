const namespace = 'icsm'


/**
 * 设置主题色
 
 * */
export default function setTheme(props) {
  let theme = props?.theme
  console.log('ics-mobile-ui获取的基座主题色:', theme)
  const parentName = localStorage.getItem('parentName')
  if (parentName === 'franchised') theme = theme || '#A10D1F'
  if (parentName === 'smartPortal') theme = theme || '#911C2D'
  if (parentName === 'ics2plus' || parentName === 'ics2plus-parent-web') theme = theme || '#249556'
  if (!theme) theme = '#249556'


  const pre = `--${namespace}-primary-color`;
  document.documentElement.style.setProperty(pre, theme);
}
