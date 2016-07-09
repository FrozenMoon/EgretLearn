// How to use SheetSprite

class TestSheet {
    public constructor(){

    }

    public Run(Main:Main){
        var texCat:egret.Texture = RES.getRes("sheetCat.psb");
        var imgCat:egret.Bitmap = new egret.Bitmap(texCat);
        // 必须先把对象添加到列表中，再去改变对象属性才有效！这个设计有点奇怪。
        Main.addChild(imgCat);
        imgCat.width = Main.stage.width;
        imgCat.height = Main.stage.height;
        imgCat.x = 100;
    }
}