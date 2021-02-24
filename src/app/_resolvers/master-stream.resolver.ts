import { StreamsService } from './../_services/master-streams.service';
import { Streams } from './../_models/master-streams';
import { NotificationService } from '../_services/notification.service';
import { LocationService } from '../_services/master-location.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '../_models/master-location';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' 
})
export class MasterStreamsResolver implements Resolve<Streams> {

    constructor(private streamsService:StreamsService,private router:Router,
        private notification:NotificationService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Streams> {
        return this.streamsService.getMasterStreams().pipe((
            catchError(err =>{
                this.notification.showNotification("Problem on retriving data!","danger");
                this.router.navigate(['/dashboard']);
                return of(null);
            })
        ));
    }
}