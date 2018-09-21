<template>
  <div>
    <el-button
      type="primary"
      @click="doCopy(value)">
      复制
    </el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui';
import { listener, handleCopy } from './copyCommand.js';

export default {
  name: 'CopyToClipboard',
  components: {
    elButton: Button,
  },
  mixins: [listener],
  props: {
    value: {
      type: String,
      default: null,
    }
  },
  methods: {
    doCopy(data) {
      handleCopy(data);
    }
  },
};
</script>

<style>

</style>
