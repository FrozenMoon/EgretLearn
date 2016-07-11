// How to use SheetSprite

class TestSheet {
    private tex:egret.Texture;
    private img:egret.Bitmap;

    public constructor(){
        this.tex = RES.getRes("sheetCat.psb");
        this.img = new egret.Bitmap(this.tex);
    }

    public Run(main:Main){
        // 必须先把对象添加到列表中，再去改变对象属性才有效！这个设计有点奇怪。
        main.addChild(this.img);
        this.img.width = main.stage.width;
        this.img.height = main.stage.height;
        //imgCat.x = 100;
    }
}