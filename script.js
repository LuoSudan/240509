function displayImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            var imageDisplay = document.getElementById('imageDisplay');
            imageDisplay.src = e.target.result; // 设置图片的src为读取到的结果，从而显示图片
        };
        
        reader.readAsDataURL(input.files[0]); // 读取文件内容
    }
}
