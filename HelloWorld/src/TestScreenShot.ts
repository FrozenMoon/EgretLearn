// How to use RenderTexture And Apply on a ScreenShot

class TestScreenShot {
    private tex:egret.Texture;
    private img:egret.Bitmap;

    public constructor(){
        this.tex = RES.getRes("sheetCat.psb");
        this.img = new egret.Bitmap(this.tex);
    }

    public Run(main:Main){
        // TODO 用RenderTexture的方式截图有问题 不能跨域？
       // var renderTexture:egret.RenderTexture = new egret.RenderTexture();
       // renderTexture.drawToTexture(imgCat);

        var rectScreen:egret.Rectangle = new egret.Rectangle(0, 0, this.tex._bitmapWidth, this.tex._bitmapHeight);
        var imgData:string = this.tex.toDataURL("image/png", rectScreen);
        // 保存截图到文件
        this.tex.saveToFile("image/png", "screenshot.png", rectScreen);
    }
}