import { Message } from 'element-ui';

let copyCon = null;

function copyHandler(e) {
  if (copyCon) {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', copyCon);
    } else if (window.clipboardData) {
      window.clipboardData.setData('Text', copyCon);
    }
    copyCon = null;
    // 复制成功的提示信息，若没有用element-ui，可用alert等
    Message.success({
      message: '复制成功',
    });
  }
}

function handleCopy(data) {
  copyCon = data;
  document.execCommand('copy');
}

const listener = {
  mounted() {
    document.addEventListener('copy', copyHandler);
  },
  destroyed() {
    document.removeEventListener('copy', copyHandler);
  },
};

export { listener, handleCopy };
