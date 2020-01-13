
const {ccclass, property} = cc._decorator;

interface NodeAttr {
    /** 缩放 */
    scale: number,
    /** 角度 */
    angle: number,
    /** x 位置 */
    x: number,
    /** y 位置 */
    y: number,
    /** 位置 */
    position: cc.Vec2 | cc.Vec3,
    /** 透明度 */
    opactiy: number,
}

@ccclass
export default class CircleAvatar extends cc.Component {

    private time: number;

    protected onLoad() {
        this.time = 0;
    }

    protected start() {
        // cc.tween(this.node)
        //     .repeatForever(
        //         cc.tween().to(1, { scale: 2, angle: -360 } as NodeAttr)
        //             .call(() => { console.log("tween action callback") })
        //             .to(1, { scale: 1.0, angle: 0 } as NodeAttr)
        //     )
        //     .start()
        // this.scheduleOnce(() => {
        //     console.log("stopAllActions");
        //     this.node.stopAllActions();
        // }, 5);
    }

    protected update(dt: number) {
        this.time += dt;
        const edge = Math.abs(Math.sin(this.time)) / 2;
        const sprite = this.node.getComponent(cc.Sprite);
        const material = sprite.getMaterial(0);
        material.setProperty("edge", edge);
        sprite.setMaterial(0, material);
    }
}
