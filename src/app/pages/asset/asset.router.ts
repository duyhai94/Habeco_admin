import { Routes } from "@angular/router";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { AssetComponent } from "./asset.component";
import { GoodsComponent } from "./goods/goods.component";

export const assetRouter: Routes = [
    {
        path: '',
        component: AssetComponent,
        children: [
            {
                path: 'accessories',
                component: AccessoriesComponent
            },
            {
                path: 'goods',
                component: GoodsComponent
            },
            {
                path: '',
                redirectTo: 'accessories',
                pathMatch: 'full',
            },
        ]
    }
];