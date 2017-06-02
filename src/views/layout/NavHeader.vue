<template>
    <div class="header">
        <div style="float: left">
            <Menu mode="horizontal" width="auto" @on-select="onSelect" style="position: absolute;width: 100%;">
                <img src="../../assets/logo.png" class="layout-logo">
                <div class="layout-assistant">
                    <Menu-item name="/layout/project">
                        项目管理
                    </Menu-item>
                    <Menu-item name="/layout/user">
                        用户管理
                    </Menu-item>
                </div>
            </Menu>
        </div>
        <div style="float: right">
            <Menu mode="horizontal" @on-select="onSelect">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        注销
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">新增和启动</Menu-item>
                        <Menu-item name="3-2">活跃分析</Menu-item>
                        <Menu-item name="3-3">时段分析</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">用户留存</Menu-item>
                        <Menu-item name="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavHeader',
        methods: {
            onSelect (name) {
                this.$router.push(name);
            }
        }
    }
</script>

<style>
    .header {
        border-width: 1px;
        background: #ffffff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .layout-assistant {
        margin-left: 200px;
        height: inherit;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
</style>
