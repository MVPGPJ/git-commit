<template>
    <div>
        <layout />
        <router-view />
        <footers />
    </div>
</template>
<script>
import layout from '@/components/layout'
import footers from '@/components/footer'
export default {
    components: { layout, footers },
    data () {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
</style>
