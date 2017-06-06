<template>
    <el-row>
        <el-col :span="5" v-for="item in items" :key="item">
            <Card>
                <div style="text-align:center">
                    <img :src="item.icon">
                    <h3>{{ item.name }}</h3>
                    <el-row>
                        <el-col :span="12">
                            <Button style="width:100%" type="ghost">打开</Button>
                        </el-col>
                        <el-col :span="12">
                            <Button style="width:100%" type="ghost">详情</Button>
                        </el-col>
                    </el-row>
                </div>
            </Card>
        </el-col>
    </el-row>
</template>

<script>
    import { getStandards } from 'api/resource'
    export default {
        data() {
            return {
                items: []
            }
        },
        methods: {
            getStandardData(para) {
                getStandards({
                    name: para
                }).then(response => {
                    console.log(response);
                    this.items = response.data.standards[0].children;
                });
            }
        },
        watch: {
            '$route'(to) {
                this.getStandardData(to.params.name);
            }
        },
        mounted() {
            this.getStandardData(this.$route.params.name);
        }
    }
</script>

<style scoped>
</style>
