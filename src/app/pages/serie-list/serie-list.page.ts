import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.page.html',
  styleUrls: ['./serie-list.page.scss'],
})
export class SerieListPage implements OnInit {
  
  public serieId: string;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {

  }

  async ngOnInit() {
    const queryParams = await this.activatedRoute.queryParams.pipe(take(1)).toPromise();
    this.serieId = queryParams.serieId;
    console.log(this.serieId);
  }

  goBack(){
    this.navCtrl.back();
  }

}
