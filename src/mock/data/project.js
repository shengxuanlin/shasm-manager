/**
 * Created by miaoj on 2017/6/2.
 */
import Mock from 'mockjs';
const Projects = [];

for (let i = 0; i < 3; i++) {
    Projects.push(Mock.mock({
        id: Mock.Random.increment(),
        name: Mock.Random.ctitle(),
        createTime: Mock.Random.date(),
        description: '',
        type: 'project',
        "children|1-5": [{
            id: Mock.Random.guid(),
            name: Mock.Random.ctitle(),
            createTime: Mock.Random.date(),
            type: 'folder'
        }]
    }));
}

export {Projects};
