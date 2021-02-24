import { Type } from './../_models/master-type';
import { TypeService } from './../_services/master-type.service';
import { NotificationService } from '../_services/notification.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TypeDetails } from '../_models/master-type-details';

@Injectable({
    providedIn: 'root' 
})
export class MasterTypeResolver implements Resolve<Type> {

    constructor(private typeService:TypeService,private router:Router,
        private notification:NotificationService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Type> {
        return this.typeService.getMasterType().pipe((
            catchError(err =>{
                this.notification.showNotification("Problem on retriving data!","danger");
                this.router.navigate(['/dashboard']);
                return of(null);
            })
        ));
    }
}