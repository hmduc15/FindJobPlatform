<template>
  <transition name="modal">
    <div :class="['m-dynamic-popup', className]">
      <div class="modal-container">
        <div class="modal-content"
         :style="`width: ${width}px; height: ${height}px; `"
        >
          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MPopup",
  props: [
    "className",
    "width",
    "height"
  ],
}
</script>

<style></style>