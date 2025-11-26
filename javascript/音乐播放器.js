document.addEventListener('DOMContentLoaded', function () {
    // 示例播放列表
    var playlist = [
        { title: "迷失幻境", url: "music\\迷失幻境.mp3" },
        { title: "第57次取消发送", url: "music\\第57次取消发送.mp3" },
        { title: "我期待的不是雪", url: "music\\我期待的不是雪.mp3" }
    ];

    var currentTrack = 0;
    var audioPlayer = document.getElementById('audio-player');
    var playBtn = document.querySelector('.play-btn');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var progress = document.querySelector('.progress');
    var progressBar = document.querySelector('.progress-bar');
    var currentTimeDisplay = document.querySelector('.time-display .current-time');
    var totalTimeDisplay = document.querySelector('.time-display .total-time');
    var nowPlayingDisplay = document.querySelector('.now-playing span');

    // 更新正在播放信息
    function updateNowPlaying() {
        nowPlayingDisplay.textContent = `正在播放：${playlist[currentTrack].title}`;
        if (playlist[currentTrack].url) {
            audioPlayer.src = playlist[currentTrack].url;
        }
    }

    // 初始化
    updateNowPlaying();

    // 播放/暂停功能 - 修改这里适配本地SVG
    playBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            // 替换为暂停图标SVG
            playBtn.innerHTML = '<img src="图标文件/pause.svg" alt="暂停" class="icon" width="24" height="24">';
        } else {
            audioPlayer.pause();
            // 替换为播放图标SVG
            playBtn.innerHTML = '<img src="图标文件/play.svg" alt="播放" class="icon" width="24" height="24">';
        }
    });

    // 上一首（保持不变）
    prevBtn.addEventListener('click', function () {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        updateNowPlaying();
        audioPlayer.play();
        // 切换到暂停图标
        playBtn.innerHTML = '<img src="图标文件/pause.svg" alt="暂停" class="icon" width="24" height="24">';
    });

    // 下一首（保持不变）
    nextBtn.addEventListener('click', function () {
        currentTrack = (currentTrack + 1) % playlist.length;
        updateNowPlaying();
        audioPlayer.play();
        // 切换到暂停图标
        playBtn.innerHTML = '<img src="图标文件/pause.svg" alt="暂停" class="icon" width="24" height="24">';
    });

    // 更新进度条（保持不变）
    audioPlayer.addEventListener('timeupdate', function () {
        var percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = percent + '%';

        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        if (!isNaN(audioPlayer.duration)) {
            totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
        }
    });

    // 点击进度条跳转（保持不变）
    progressBar.addEventListener('click', function (e) {
        var progressBarRect = progressBar.getBoundingClientRect();
        var clickPosition = (e.clientX - progressBarRect.left) / progressBarRect.width;
        audioPlayer.currentTime = clickPosition * audioPlayer.duration;
    });

    // 时间格式化（保持不变）
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // 播放结束自动下一首（保持不变）
    audioPlayer.addEventListener('ended', function () {
        currentTrack = (currentTrack + 1) % playlist.length;
        updateNowPlaying();
        audioPlayer.play();
        // 切换到暂停图标
        playBtn.innerHTML = '<img src="图标文件/pause.svg" alt="暂停" class="icon" width="24" height="24">';
    });
});