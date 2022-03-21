import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// 注册了一个全局svg-icon的组件
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 以上两行代码是将所有 的svg目录下的所有的.svg后缀的文件全部引入到项目中
