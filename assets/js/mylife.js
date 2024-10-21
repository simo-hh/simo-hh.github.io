// 获取模态窗口元素
var modal = document.getElementById("myModal");

// 获取所有图片并为每个图片添加点击事件
var images = document.querySelectorAll('.item img');
images.forEach(function (img) {
    img.onclick = function () {
        // 获取图片上 data-iframe 属性的值
        var iframeSrc = this.getAttribute('data-iframe');
        if (iframeSrc) {
            // 如果 data-iframe 存在，显示模态窗口
            modal.style.display = "block";
            document.getElementById('modalIframe').src = iframeSrc;
        }
    }
});

// 当用户点击模态窗口外部时，关闭模态窗口
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // 清空 iframe 的 src
        document.getElementById('modalIframe').src = "";
    }
}
