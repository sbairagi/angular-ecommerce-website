import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductviewComponent } from './productview/productview.component';
import { TrackerComponent } from './tracker/tracker.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:'',
    redirectTo:'Home',
    pathMatch:'full'
  },
  {path: 'Home',
   component:HomeComponent
  },
  {path: 'AboutUs',
   component:AboutusComponent
  },
  {path: 'ContactUs',
   component:ContactusComponent
  },
  {path: 'Product-View',
   component:ProductviewComponent
  },
  {path: 'Tracker',
   component:TrackerComponent
  },
  {path: '**',
   component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
