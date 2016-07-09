// How to use RenderTexture And Apply on a ScreenShot

class TestScreenShot {
    public constructor(){

    }

    public Run(Main:Main){
        var renderTexture:egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(Main);

        // 转成base64数据 这样的写法有问题，待解决
        var rectScreen: egret.Rectangle = new egret.Rectangle(0, 0, 100, 100);
        var imgData:string = renderTexture.toDataURL("image/png", rectScreen);
        console.log(renderTexture.textureWidth, renderTexture.textureHeight, Main.stage.width, Main.stage.height);

        // 保存截图到文件
        renderTexture.saveToFile("image/png", "screenshot.png", rectScreen);
    }
}