// 初始化代码高亮
// 联网实现
function initHighlight() {
    hljs.highlightAll();
}

// 答案显示/隐藏功能
function initAnswerToggle() {
    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', () => {
            var answerContent = button.nextElementSibling;
            answerContent.classList.toggle('show');
            button.textContent = answerContent.classList.contains('show') ? '隐藏答案' : '查看答案';
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initHighlight();
    initAnswerToggle();
});