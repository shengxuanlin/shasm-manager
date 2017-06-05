<template>
    <div class="project">
        <Row>
            <i-col span="4" style="text-align: left">
                <el-tree :data="treeData" :expand-on-click-node="false" highlight-current :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </i-col>
            <i-col span="20">
                <i-form ref="formInline" inline style="margin-left: 10px;text-align: left;">
                    <Form-item prop="user">
                        <Input type="text" placeholder="名称"/>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" icon="search">查询</Button>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="addFormVisible = true" icon="edit">新增</Button>
                    </Form-item>
                </i-form>
                <Table stripe :columns="gridColumns" :data="gridData"></Table>
                <Page show-elevator :total="total1" :page-size="10" :current="page" @on-change="handleChange" style="margin-left: 10px;text-align: center;float: right"></Page>
            </i-col>
        </Row>
        <!--新增界面-->
        <Modal
            v-model="addFormVisible"
            title="新增"
            :width="800">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <Form-item label="姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                </Form-item>
                <Form-item label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                </Form-item>
                <Form-item label="城市" prop="city">
                    <Select v-model="formValidate.city" placeholder="请选择所在地">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </Form-item>
                <Form-item label="选择日期">
                    <Row>
                        <i-col span="11">
                            <Form-item prop="date">
                                <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                            </Form-item>
                        </i-col>
                        <i-col span="2" style="text-align: center">
                            -
                        </i-col>
                        <i-col span="11">
                            <Form-item prop="time">
                                <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                            </Form-item>
                        </i-col>
                    </Row>
                </Form-item>
                <Form-item label="性别" prop="gender">
                    <Radio-group v-model="formValidate.gender">
                        <Radio label="male">男</Radio>
                        <Radio label="female">女</Radio>
                    </Radio-group>
                </Form-item>
                <Form-item label="爱好" prop="interest">
                    <Checkbox-group v-model="formValidate.interest">
                        <Checkbox label="吃饭"></Checkbox>
                        <Checkbox label="睡觉"></Checkbox>
                        <Checkbox label="跑步"></Checkbox>
                        <Checkbox label="看电影"></Checkbox>
                    </Checkbox-group>
                </Form-item>
                <Form-item label="介绍" prop="desc">
                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </Form-item>
            </Form>
            <div slot="footer">
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import { findAll } from 'api/project'

    export default {
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [{
                        required: true,
                        message: '姓名不能为空',
                        trigger: 'blur'
                    }],
                    mail: [{
                        required: true,
                        message: '邮箱不能为空',
                        trigger: 'blur'
                    }, {
                        type: 'email',
                        message: '邮箱格式不正确',
                        trigger: 'blur'
                    }],
                    city: [{
                        required: true,
                        message: '请选择城市',
                        trigger: 'change'
                    }],
                    gender: [
                        {
                            required: true,
                            message: '请选择性别',
                            trigger: 'change'
                        }
                    ],
                    interest: [
                        {
                            required: true,
                            type: 'array',
                            min: 1,
                            message: '至少选择一个爱好',
                            trigger: 'change'
                        },
                        {
                            type: 'array',
                            max: 2,
                            message: '最多选择两个爱好',
                            trigger: 'change'
                        }
                    ],
                    date: [
                        {
                            required: true,
                            type: 'date',
                            message: '请选择日期',
                            trigger: 'change'
                        }
                    ],
                    time: [
                        {
                            required: true,
                            type: 'date',
                            message: '请选择时间',
                            trigger: 'change'
                        }
                    ],
                    desc: [
                        {
                            required: true,
                            message: '请输入个人介绍',
                            trigger: 'blur'
                        },
                        {
                            type: 'string',
                            min: 20,
                            message: '介绍不能少于20字',
                            trigger: 'blur'
                        }
                    ]
                },
                /* 新增界面是否显示 */
                addFormVisible: false,
                filters: {
                    name: ''
                },
                total1: 0,
                page: 1,
                loading: false,
                gridColumns: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
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
                    }, {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render(h) {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'ghost',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log();
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            console.log();
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                gridData: [],
                treeData: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            /* 显示新增界面 */
            handleAdd() {
                this.addFormVisible = true;
            },
            handleChange(index) {
                this.page = index;
                this.getUser();
            },
            handleNodeClick(data) {
                console.log(data);
            },
            getProjects() {
                findAll().then(data => {
                    this.treeData = data;
                });
            }
        },
        mounted() {
            this.getProjects();
        }
    }
</script>
