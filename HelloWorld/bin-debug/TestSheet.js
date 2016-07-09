// How to use SheetSprite
var TestSheet = (function () {
    function TestSheet() {
    }
    var d = __define,c=TestSheet,p=c.prototype;
    p.Run = function (Main) {
        var texCat = RES.getRes("sheetCat.psb");
        var imgCat = new egret.Bitmap(texCat);
        // 必须先把对象添加到列表中，再去改变对象属性才有效！这个设计有点奇怪。
        Main.addChild(imgCat);
        imgCat.width = Main.stage.width;
        imgCat.height = Main.stage.height;
        imgCat.x = 100;
    };
    return TestSheet;
}());
egret.registerClass(TestSheet,'TestSheet');
//# sourceMappingURL=TestSheet.js.map