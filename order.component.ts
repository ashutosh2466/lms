import { Component } from '@angular/core';
import { Order } from '../models/models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
listOfOrders: Order[] = []
columns: string[] = ['id','name','bookid','book','date','returned']
/**
 *
 */
constructor( private api :ApiService) {

  
}
ngOnInit():void{

}
}
