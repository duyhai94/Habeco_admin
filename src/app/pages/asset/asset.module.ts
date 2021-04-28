import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessoriesModule } from './accessories/accessories.component';
import { AssetComponent } from './asset.component';
import { assetRouter } from './asset.router';
import { DeviceModule } from './device/device.component';
import { GoodsModule } from './goods/goods.component';
@NgModule({
    declarations: [AssetComponent],
    imports: [
        AccessoriesModule,
        GoodsModule,
        DeviceModule,
        RouterModule.forChild(assetRouter)
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})
export class AssetHomeModule { }
