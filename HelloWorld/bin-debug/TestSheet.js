// How to use SheetSprite
var TestSheet = (function () {
    function TestSheet() {
        this.tex = RES.getRes("sheetCat.psb");
        this.img = new egret.Bitmap(this.tex);
    }
    var d = __define,c=TestSheet,p=c.prototype;
    p.Run = function (main) {
        // 必须先把对象添加到列表中，再去改变对象属性才有效！这个设计有点奇怪。
        main.addChild(this.img);
        this.img.width = main.stage.width;
        this.img.height = main.stage.height;
        //imgCat.x = 100;
    };
    return TestSheet;
}());
egret.registerClass(TestSheet,'TestSheet');
//# sourceMappingURL=TestSheet.js.map