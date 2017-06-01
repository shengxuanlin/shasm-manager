<template>
    <div class="layout">
        <NavHeader/>
        <AppMain/>
    </div>
</template>
<script>
    import NavHeader from './NavHeader.vue';
    import AppMain from './AppMain.vue';
    export default {
        components: {
            NavHeader,
            AppMain
        },
        methods: {
            onSelect (name) {
                this.$router.push(name);
            }
        }
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #eeeeee;
    }

    .layout-copy {
        margin-bottom: 10px;
        text-align: center;
        padding: 10px 0 20px;
        background: #f5f5f5;
        z-index: 1000;
    }


</style>
