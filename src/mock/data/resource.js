import Mock from 'mockjs'

const data = Mock.mock({
    'data|8': [
        {
            id: Mock.Random.guid(),
            'name|+1': [
                '智能底图',
                '三维场景',
                '矢量数据服务',
                '影像数据服务',
                '三维数据服务',
                '时态数据服务',
                'OGC',
                '其他'
            ]
        }
    ]
})
const StandardData = data.data
export { StandardData }
