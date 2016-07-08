//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;
    private textfield:egret.TextField;
    private img:egret.Bitmap;
    private mySprite:egret.Sprite;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {
    //     var sky:egret.Bitmap = this.createBitmapByName("bgImage");
    //     this.addChild(sky);
    //     var stageW:number = this.stage.stageWidth;
    //     var stageH:number = this.stage.stageHeight;
    //     sky.width = stageW;
    //     sky.height = stageH;

    //     var myGrid:MyGrid = new MyGrid();
    //     this.addChild(myGrid);
    //     myGrid.x = 100;
    //     myGrid.y = 100;

    //     var topMask = new egret.Shape();
    //     topMask.graphics.beginFill(0x000000, 0.5);
    //     topMask.graphics.drawRect(0, 0, stageW, 172);
    //     topMask.graphics.endFill();
    //     topMask.y = 33;
    //     this.addChild(topMask);

    //     var icon:egret.Bitmap = this.createBitmapByName("egretIcon");
    //     this.addChild(icon);
    //     icon.x = 26;
    //     icon.y = 33;

    //     var line = new egret.Shape();
    //     line.graphics.lineStyle(2,0xffffff);
    //     line.graphics.moveTo(0,0);
    //     line.graphics.lineTo(0,117);
    //     line.graphics.endFill();
    //     line.x = 172;
    //     line.y = 61;
    //     this.addChild(line);


    //     var colorLabel = new egret.TextField();
    //     colorLabel.textColor = 0xffffff;
    //     colorLabel.width = stageW - 172;
    //     colorLabel.textAlign = "center";
    //     colorLabel.text = "你好 白鹭";
    //     colorLabel.size = 24;
    //     colorLabel.x = 172;
    //     colorLabel.y = 80;
    //     this.addChild(colorLabel);

    //     var textfield = new egret.TextField();
    //     this.addChild(textfield);
    //     textfield.alpha = 0;
    //     textfield.width = stageW - 172;
    //     textfield.textAlign = egret.HorizontalAlign.CENTER;
    //     textfield.size = 24;
    //     textfield.textColor = 0xffffff;
    //     textfield.x = 172;
    //     textfield.y = 135;
    //     this.textfield = textfield;

    //     // //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
    //     // // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
    //     RES.getResAsync("description", this.startAnimation, this)
    //     //RES.getResAsync("psb_png", this.changeBg, this)

    //    //创建一个空的 Sprite，把它的 x 和 y 坐标都改为
    //     var mySprite: egret.Sprite = new egret.Sprite();
    //     mySprite.x = 200;
    //     mySprite.y = 200;
    //     this.addChild(mySprite);
    //     this.mySprite =  mySprite;

    //     //画一个红色的圆，添加到 mySprite 中
    //     var circle: egret.Shape = new egret.Shape();
    //     circle.graphics.beginFill(0xff0000);
    //     circle.graphics.drawCircle(25,25,25);
    //     circle.graphics.endFill();
    //     mySprite.addChild(circle);
    //     //给圆增加点击事件
    //     circle.touchEnabled = true;
    //     circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick,this);

    //     function onClick():void{
    //         //把舞台左上角的坐标(0,0)转换为 mySprite 内部的坐标
    //         var targetPoint: egret.Point = mySprite.globalToLocal(0,0);
    //         //重新定位圆，可以看到圆形移到了屏幕的左上角
    //         circle.x = targetPoint.x;
    //         circle.y = targetPoint.y;
    //     }

    //         //要拖拽的对象
    // var draggedObject:egret.Shape;
    // var offsetX:number;
    // var offsetY:number;
    // //画一个红色的圆
    // var circle: egret.Shape = new egret.Shape();
    // circle.graphics.beginFill(0xff0000);
    // circle.graphics.drawCircle(25,25,25);
    // circle.graphics.endFill();
    // this.addChild(circle);
    // //画一个蓝色的正方形
    // var square:egret.Shape = new egret.Shape();
    // square.graphics.beginFill(0x0000ff);
    // square.graphics.drawRect(0,0,100,100);
    // square.graphics.endFill();
    // this.addChild(square);
    // //增加圆形的触摸监听
    // circle.touchEnabled = true;
    // circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
    // circle.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
    // //增加正方形的触摸监听
    // square.touchEnabled = true;
    // square.addEventListener(egret.TouchEvent.TOUCH_BEGIN,startMove,this);
    // square.addEventListener(egret.TouchEvent.TOUCH_END,stopMove,this);
    // function startMove(e:egret.TouchEvent):void{
    // //把手指按到的对象记录下来
    // draggedObject = e.currentTarget;
    // //计算手指和要拖动的对象的距离
    // offsetX = e.stageX - draggedObject.x;
    // offsetY = e.stageY - draggedObject.y;
    // //把触摸的对象放在显示列表的顶层
    // this.addChild(draggedObject);
    // //手指在屏幕上移动，会触发 onMove 方法
    // this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
    // }
    // function stopMove(e:egret.TouchEvent) {console.log(22);
    // //手指离开屏幕，移除手指移动的监听
    // this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,onMove,this);
    // }
    // function onMove(e:egret.TouchEvent):void{
    // //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
    // draggedObject.x = e.stageX - offsetX;
    // draggedObject.y = e.stageY - offsetY;
    // }

     //创建一个文本框,设定一个scrollRect限制显示范围
    var bigText: egret.TextField = new egret.TextField();
    bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
    bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
    bigText.cacheAsBitmap = true;
    this.addChild(bigText);
    this.addChildAt
    //创建一个按钮,点击后控制文本内容向左移动
    var btnLeft: egret.Shape = new egret.Shape();
    btnLeft.graphics.beginFill(0xcccc01);
    btnLeft.graphics.drawRect(0, 0, 50, 50);
    btnLeft.graphics.endFill();
    btnLeft.x = 50;
    btnLeft.y = 100;
    this.addChild(btnLeft);
    btnLeft.touchEnabled = true;
    btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
    //创建一个按钮,点击后控制文本内容向右移动
    var btnRight: egret.Shape = new egret.Shape();
    btnRight.graphics.beginFill(0x01cccc);
    btnRight.graphics.drawRect(0,0,50,50);
    btnRight.graphics.endFill();
    btnRight.x = 150;
    btnRight.y = 100;
    this.addChild(btnRight);
    btnRight.touchEnabled = true;
    btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
    //点击按钮后,控制文本向左右移动的方法
    function onScroll(e: egret.TouchEvent): void {
    var rect: egret.Rectangle = bigText.scrollRect;
    switch (e.currentTarget) {
        case btnLeft:
        rect.x += 20;
        break;
        case btnRight:
        rect.x -= 20;
        break;
    }
    bigText.scrollRect = rect;
}
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name:string):egret.Bitmap {
        var result = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);       
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result:Array<any>):void {
        var self:any = this;

        var parser = new egret.HtmlTextParser();
        var textflowArr:Array<Array<egret.ITextElement>> = [];
        for (var i:number = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }

        var textfield = self.textfield;
        var count = -1;
        var change:Function = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];

            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({"alpha": 1}, 200);
            tw.wait(2000);
            tw.to({"alpha": 0}, 200);
            tw.call(change, self);
        };

        change();
    }

    /**
     * 切换描述内容
     * Switch to described content
     */
    private changeDescription(textfield:egret.TextField, textFlow:Array<egret.ITextElement>):void {
        textfield.textFlow = textFlow;
    }

    private changeBg(result:Array<any>):void{
        var sky:egret.Bitmap = this.createBitmapByName("psb_png");
        this.addChild(sky);
        var stageW:number = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
    }
}


