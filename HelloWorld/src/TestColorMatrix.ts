// How to use ColorMatrixFilter
// R = R*m00 + G*m01 + B*m02 + A*m03
// G = R*m10 + G*m11 + B*m12 + A*m13
// B = R*m20 + G*m21 + B*m22 + A*m23
// A = R*m30 + G*m31 + B*m32 + A*m33

class TestColorMatrix {
    private tex:egret.Texture;
    private img:egret.Bitmap;

    private colorMatrixGray:number[]; // 灰色
    private colorMatrixLight:number[]; // 增加亮度
    private colorMatrixOld:number[]; // 怀旧效果
    private blurX:number = 5; // x方向模糊
    private blurY:number = 5; // y方向模糊

    public constructor(){
        this.tex = RES.getRes("sheetCat.psb");
        this.img = new egret.Bitmap(this.tex);
        this.colorMatrixGray = new Array(
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0,0,0,1,0
        );

        this.colorMatrixLight = new Array(
            1,0,0,0,100,
            0,1,0,0,100,
            0,0,1,0,100,
            0,0,0,1,0
        );

        this.colorMatrixOld = new Array(
            0.393,0.769,0.189,0,0,  
            0.349,0.686,0.168,0,0,  
            0.272,0.534,0.131,0,0,  
            0,0,0,1,0
        );
    }

    public Run(main:Main){
        main.addChild(this.img);
        
        // 普通滤镜
        let colorFlilter = new egret.ColorMatrixFilter(this.colorMatrixOld);
        this.img.filters = [colorFlilter];

        // 模糊滤镜
        let blurFliter = new egret.BlurFilter(this.blurX, this.blurY);
        this.img.filters.push(blurFliter);
    }
}