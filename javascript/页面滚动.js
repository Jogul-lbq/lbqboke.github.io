// 平滑滚动到锚点位置 - 修改版
document.querySelectorAll('.content-bar li').forEach(li => {
    li.addEventListener('click', function (e) {
        // 获取li中的a标签
        var anchor = this.querySelector('a');
        if (!anchor) return;

        e.preventDefault();

        var targetId = anchor.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 计算目标位置，减去标题栏高度避免被遮挡
            var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;

            // 平滑滚动到目标位置
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// 向下滚动功能
document.querySelector('.down-arrow-container').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});