import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir a home por defecto
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop-cart', component: ShopCartComponent },
  { path: 'shop-details', component: ShopDetailsComponent },
  { path: 'shop-list', component: ShopListComponent },
  { path: 'wishlist', component: WishlistComponent },
  // Más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
