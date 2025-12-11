import {ref} from 'vue'
export function getData(type: 'banner'){
    console.log(type)
    // TODO: 从网络获取
    return ref({
        title: '文档还在持续完善中',
        action: '遇到问题 ?',
        link: '/reward/me',
        blank: false
    })
}
