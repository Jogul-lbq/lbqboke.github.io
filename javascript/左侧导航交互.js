// 滚动时触发
window.addEventListener('scroll', highlightNavItem);
document.querySelectorAll('.language-card').forEach((card, index) => {
    var titles = [
        'java', 'python', 'javascript', 'c', 'cpp', 'mysql',
        'wzry', 'hpjy', 'study', 'insight', 'random-thoughts'
    ];
    if (titles[index]) {
        card.id = titles[index];
    }
});

// 导航交互逻辑
document.addEventListener('DOMContentLoaded', function () {
    var mainNavItems = document.querySelectorAll('.main-nav-item');
    var subNavItems = document.querySelectorAll('.sub-nav-item');
    var subNavs = document.querySelectorAll('.sub-nav');

    // 主导航点击事件
    mainNavItems.forEach(item => {
        item.addEventListener('click', function () {
            var target = this.getAttribute('data-target');
            var subNav = document.querySelector(`.sub-nav[data-for="${target}"]`);

            // 切换子导航显示状态
            subNavs.forEach(nav => {
                if (nav !== subNav) nav.classList.remove('show');
            });
            subNav.classList.toggle('show');

            // 平滑滚动到对应区域
            document.getElementById(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 子导航点击事件
    subNavItems.forEach(item => {
        item.addEventListener('click', function () {
            var target = this.getAttribute('data-target');
            document.getElementById(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 滚动监听，高亮当前区域
    window.addEventListener('scroll', function () {
        var sections = document.querySelectorAll('div[id]');
        var currentSection = '';

        sections.forEach(section => {
            var sectionTop = section.offsetTop - 100;
            var sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // 更新主导航高亮
        mainNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('active');
                // 显示对应子导航
                var subNav = document.querySelector(`.sub-nav[data-for="${currentSection}"]`);
                if (subNav) subNav.classList.add('show');
            }
        });

        // 更新子导航高亮
        subNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('active');
                // 显示父导航
                var parentTarget = item.closest('.sub-nav').getAttribute('data-for');
                mainNavItems.forEach(mainItem => {
                    if (mainItem.getAttribute('data-target') === parentTarget) {
                        mainItem.classList.add('active');
                        document.querySelector(`.sub-nav[data-for="${parentTarget}"]`).classList.add('show');
                    }
                });
            }
        });
    });
});