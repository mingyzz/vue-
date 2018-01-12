import Vue from 'vue'
// 引入App.vue组件
import App from './component/App.vue'


new Vue({
  el: "#app",
    render: function (createElement, context) {
        return createElement(App)
    }
})
