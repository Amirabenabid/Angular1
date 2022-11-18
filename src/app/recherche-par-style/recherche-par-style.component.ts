import { Component, OnInit } from '@angular/core';
import { style } from '../model/style.model';
import { musique } from '../model/musique.model';
import { musiqueService } from '../services/musique.service';

@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html',
  styles: [
  ]
})
export class RechercheParstyleComponent implements OnInit {
  musiques! : musique[];
  Idstyle! : number;
  styles! : style[];

  constructor(private musiqueService:musiqueService) { }

  ngOnInit(): void {
    
      this.musiqueService.listestyles().
      subscribe(sts => {this.styles = sts._embedded.styles;
      console.log(sts);
      });
      }
      onChange() {
        this.musiqueService.rechercherParstyle(this.Idstyle).
        subscribe(musiqs =>{this.musiques=musiqs});
        }
        
  }


