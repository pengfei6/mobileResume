/**
 * Created by ji_pe on 2016/6/14.
 */
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(358);
~function () {
    var step = 0, divList = null;
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        onSlidePrevEnd: function () {
            step--;
            change();
            if (step === 0) {
                step = 8;
            }
        },
        onSlideNextEnd: function () {
            step++;
            change();
            if (step === 9) {
                step = 1;
            }
        }
    })
    function change() {
        divList = document.querySelectorAll(".swiper-slide");
        [].forEach.call(divList, function (curDiv, index) {
            curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
        });
    }
}();
~function () {
    var audioBox = document.querySelector(".audio"),
        myAudio = audioBox.getElementsByTagName("audio")[0];

    //->延时播放音频文件,先让其他的内容加载
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            //->当音频可以播放的时候触发这个事件
            audioBox.style.display = "block";
            audioBox.className += " audioMove";
        }, false);
    }, 1000);

    //->点击音乐图标,实现音频的暂停或者播放
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->当前是暂停的,我让其播放
            myAudio.play();
            audioBox.className = "audio audioMove";
            return;
        }
        //->当前是播放的,我让其暂停
        myAudio.pause();
        audioBox.className = "audio";
    }, false);
}();