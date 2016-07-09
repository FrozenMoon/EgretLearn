// How to use RenderTexture And Apply on a ScreenShot
var TestScreenShot = (function () {
    function TestScreenShot() {
    }
    var d = __define,c=TestScreenShot,p=c.prototype;
    p.Run = function (Main) {
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(Main);
        // 转成base64数据
        var rectScreen = new egret.Rectangle(0, 0, 100, 100);
        var imgData = renderTexture.toDataURL("image/png", rectScreen);
        console.log(renderTexture.textureWidth, renderTexture.textureHeight, Main.stage.width, Main.stage.height);
        // 保存截图到文件
        //renderTexture.saveToFile("image/png", "screenshot.png", rectScreen);
    };
    return TestScreenShot;
}());
egret.registerClass(TestScreenShot,'TestScreenShot');
//# sourceMappingURL=TestScreenShot.js.map