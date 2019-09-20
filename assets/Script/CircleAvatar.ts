
const {ccclass, property} = cc._decorator;

@ccclass
export default class CircleAvatar extends cc.Component {

    private time: number;

    protected onLoad() {
        // 关闭动态和图, 否则浏览器显示不正确
        cc.dynamicAtlasManager.enabled = false;
        this.time = 0;
    }

    protected update(dt: number) {
        this.time += dt;
        const edge = Math.abs(Math.sin(this.time)) / 2;
        const sprite = this.node.getComponent(cc.Sprite);
        const material = sprite.getMaterial(0);
        if (material) {
            material.setProperty("u_edge", edge);
            sprite.setMaterial(0, material);
        }
    }
}
