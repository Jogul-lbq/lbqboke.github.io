
// 更新当前时间的函数
function updateCurrentTime() {
    var now = new Date();
    // 格式化时间为 年-月-日 时:分:秒
    var timeString = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(',', '');

    document.getElementById('current-time').textContent = timeString;
}

// 初始调用一次
updateCurrentTime();
// 每秒更新一次
setInterval(updateCurrentTime, 1000);
