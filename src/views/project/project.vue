<template>
    <div class="project">
        <Row>
            <i-col span="4" style="text-align: left">
                <el-tree :data="data" highlight-current :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </i-col>
            <i-col span="20" style="text-align: left;">

                <i-form ref="formInline" inline>
                    <Form-item prop="user">
                        <Input type="text" placeholder="Username"></Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">查询</Button>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">登录</Button>
                    </Form-item>
                </i-form>
                <Table stripe :columns="columns1" :data="data1"></Table>
            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                data: [{
                    label: '一级 1',
                    name: '123',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    };
</script>

<style>
    .button {
        position: absolute;
        left: 20px;
    }

    .ivu-tree ul {
        font-size: 14px;
    }
</style>
