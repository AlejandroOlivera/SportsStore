import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {StoreComponent} from './store.component';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) {
  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot ):boolean{
      if (this.firstNavigation){
        this.firstNavigation = false;
        if (router.component != StoreComponent){
            this.router.navigateByUrl('/');
            return false;
        }
      }
      return true;
  }
}
