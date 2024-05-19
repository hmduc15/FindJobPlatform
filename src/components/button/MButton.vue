<template>
  <button :class="[className]">
    <slot name="icon"></slot>
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: ["className", "type", "content", "icon"],
};
</script>

<style language="scss" scoped>
.icon {
  padding-right: 5px;
}
</style>