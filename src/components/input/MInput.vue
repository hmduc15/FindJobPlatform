<template>
    <label for="input" class="label-input" v-if="label" >
        {{ label }}
    </label>
    <input id="input" :class="`${className}`" :maxlength="maxlength" :minlength="minlength" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
    name: "MInput",
    props: [
        "className",
        "placeholder",
        "max-length",
        "min-length",
        "type",
        "label"
    ],
}
</script>

<style></style>