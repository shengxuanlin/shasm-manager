<template>
    <section class="app-main" style="margin-top: 80px">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain'
    }

</script>
