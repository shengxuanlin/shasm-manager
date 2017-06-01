<template>
    <div class="project">
        <Row>
            <i-col span="4">
                <Tree :data="baseData" show-checkbox></Tree>
            </i-col>
            <i-col span="20">

            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                baseData: [{
                    expand: true,
                    title: 'parent 1',
                    children: [{
                        title: 'parent 1-0',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: 'leaf',
                            disableCheckbox: true
                        }, {
                            title: 'leaf',
                        }]
                    }, {
                        title: 'parent 1-1',
                        expand: true,
                        checked: true,
                        children: [{
                            title: '<span style="color: red">leaf</span>',
                        }]
                    }]
                }]
            }
        }
    }
</script>

<style>
</style>
