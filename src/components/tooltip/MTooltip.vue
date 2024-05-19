
<template>
    <v-tooltip>
       <slot name="child"></slot>
        <template #popper>{{ tooltip }}</template>
    </v-tooltip>
</template>

<script>
import {VTooltip} from 'floating-vue';

export default {
    name:"MTooltip",
    components:{
        "v-tooltip": VTooltip
    },
    props:["tooltip"]
}
</script>

<style>

</style>