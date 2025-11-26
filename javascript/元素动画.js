// 欢迎语打字效果
var text = "花径不曾缘客扫🌸蓬门今始为君开🌿欢迎来到我的博客！🤗";
var typewriterContainer = document.querySelector('.typewriter-container');
var index = 0;
var speed = 150;
var isTyping = true;

function typeWriter() {
    if (isTyping) {
        if (index < text.length) {
            typewriterContainer.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            isTyping = false;
            setTimeout(typeWriter, 3000);
        }
    } else {
        if (index > 0) {
            typewriterContainer.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, speed);
        } else {
            isTyping = true;
            setTimeout(typeWriter, 500);
        }
    }
}
// 导航激活状态逻辑
var sections = document.querySelectorAll('div[id]'); // 获取所有带id的div
var navItems = document.querySelectorAll('.content-bar li');

function highlightNavItem() {
    var scrollPosition = window.scrollY + 100; // 加100px偏移量，让激活更提前

    sections.forEach(section => {
        var sectionTop = section.offsetTop - 70; // 减去标题栏高度
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        // 检查当前滚动位置是否在当前区域内
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // 移除所有激活状态
            navItems.forEach(item => item.classList.remove('active'));

            // 给对应导航项添加激活状态
            var correspondingNav = document.querySelector(`.content-bar li a[href="#${sectionId}"]`).parentElement;
            correspondingNav.classList.add('active');
        }
    });
}

// 初始加载时触发一次
highlightNavItem();

// 滚动时触发
window.addEventListener('scroll', highlightNavItem);
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

