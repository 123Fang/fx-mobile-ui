// userAgent 不能区分是PC还是pad, 用最大触摸点数判断，PC是0，模拟器和pad均>1;
let platform = "";
export function getPlatform() {
    platform = sessionStorage.getItem("franchised-platform") || 'PC'

    return platform
}


export const ics = {
    parentName: '',

    isIcs(props) {
        return props?.parentType === 'ics-parent' 
            ||
            localStorage.getItem('icsui-parentName') === 'ics2plus'
            ||
            ics.parentName === 'ics2plus'
    },
    /***
     *  ics做样式组件样式隔离，基于  body[platform-app="ics2plus"] { ics组件的样式 } 来实现
     * ***/
    setIcsCssScopedToBody() {
        document.body.setAttribute('platform-app', 'ics2plus')
    }
}

// 参数 props 为 main.ts 文件中基座的传参
export const parentPlatform = {
    setParentName(props) {
        if (props) {
            /**
             * 默认是后勤
             * **/
            let pedestalName = 'ics2plus-parent-web'
            let parentName = 'ics2plus'

            pedestalName = props?.pedestalName
            switch (pedestalName) {
                case "franchised-parent-web":
                    parentName = "franchised";
                    break;
                case "smart-portal-parent-web":
                    parentName = "smartPortal";
                    break;
                case 'ics2plus-parent-web':
                    parentName = "ics2plus";
                    ics.parentName = "ics2plus"
                    break;
                default:
                    parentName = 'ics2plus';
                    break;
            }

            // console.log('本地 parentName 和 icsui-parentName 的值：', parentName)
            localStorage.setItem('icsui-parentName', parentName) // 避免其他子应用修改，多增加一个带前缀的标识

        }
    },
}
