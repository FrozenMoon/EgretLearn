// How to use RenderTexture And Apply on a ScreenShot
var TestScreenShot = (function () {
    function TestScreenShot() {
        this.tex = RES.getRes("sheetCat.psb");
        this.img = new egret.Bitmap(this.tex);
    }
    var d = __define,c=TestScreenShot,p=c.prototype;
    p.Run = function (main) {
        // TODO 用RenderTexture的方式截图有问题 不能跨域？
        // var renderTexture:egret.RenderTexture = new egret.RenderTexture();
        // renderTexture.drawToTexture(imgCat);
        var rectScreen = new egret.Rectangle(0, 0, this.tex._bitmapWidth, this.tex._bitmapHeight);
        var imgData = this.tex.toDataURL("image/png", rectScreen);
        // 保存截图到文件
        this.tex.saveToFile("image/png", "screenshot.png", rectScreen);
    };
    return TestScreenShot;
}());
egret.registerClass(TestScreenShot,'TestScreenShot');
//# sourceMappingURL=TestScreenShot.js.map