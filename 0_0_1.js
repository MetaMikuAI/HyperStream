//==UserScript==
// @name         HyperStream
// @namespace    https://github.com/MetaMikuAI/HyperStream/
// @version      0.0.1
// @description  修改视频播放速度
// @author       MetaMiku
// @match         *://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
  let $rateInput = document.createElement('input'); // 创建输入框
  let $btnChangeRate = document.createElement('div'); // 创建按钮

  // 更改视频速度的函数
  function _changeRatePlay () {
    let rate = parseFloat($rateInput.value); // 获取输入框中的值并转换为浮点数
    if (isNaN(rate) || rate <= 0) {
      alert('请输入有效的播放速度！');
      return;
    }
    let $domList = document.getElementsByTagName('video');
    for (let i = 0, length = $domList.length; i < length; i++) {
      const $dom = $domList[i];
      $dom.playbackRate = rate; // 设置视频播放速度
    }
  }

  // 添加操作的 DOM
  function _appendDom () {
    const baseStyle = `
      position: fixed;
      top: 50px;
      right: 50px;
      height: 40px;
      padding: 0 20px;
      z-index: 9999;
      color: white;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      background-color: #39c5bb;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
    `

    $rateInput.type = 'number'; // 设置输入框为数字类型
    $rateInput.style = baseStyle + `top: 100px; width: 60px;`;
    $rateInput.placeholder = '速度';

    $btnChangeRate.innerHTML = '应用更改';
    $btnChangeRate.style = baseStyle + `top: 150px;`;
    $btnChangeRate.addEventListener('click', _changeRatePlay);

    document.getElementsByTagName('html')[0].insertBefore($rateInput, document.getElementsByTagName('head')[0]);
    document.getElementsByTagName('html')[0].insertBefore($btnChangeRate, document.getElementsByTagName('head')[0]);
  }

  _appendDom();
})();
