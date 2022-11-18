import { Injectable } from '@angular/core';
import { musique } from '../model/musique.model';
import { style } from '../model/style.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { styleWrapper } from '../model/styleWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class musiqueService {
  apiURL: string = 'http://localhost:8080/musiques/api';
  apiURLst: string = 'http://localhost:8080/musiques/st';
  


  musiques !: musique[]; //un tableau de musiques
 // stegories : style[];

  constructor(private http : HttpClient) { 
    /* this.styles = [ {idst : 1, nomst : "PC"},
                        {idst : 2, nomst : "Imprimante"}];  */
/*this.musiques = [
  { idmusique : 1, nommusique : "PC Asus", prixmusique : 3000.600, 
   dateCreation : new Date("01/14/2011"), style : {idst : 1, nomst : "PC"}},
  { idmusique : 2, nommusique : "Imprimante Epson", prixmusique : 450, 
  dateCreation : new Date("12/17/2010"), style : {idst : 2, nomst : "Imprimante"}},
  { idmusique : 3, nommusique :"Tablette Samsung", prixmusique : 900.123, 
  dateCreation : new Date("02/20/2020"),style : {idst : 1, nomst : "PC"}}
  ];*/
  }
  

 
    listemusique(): Observable<musique[]>{

      return this.http.get<musique[]>(this.apiURL);

      }
      
   
      ajoutermusique( musiq: musique):Observable<musique>{
        return this.http.post<musique>(this.apiURL, musiq, httpOptions);
        }
     
        supprimermusique(id : number) {
          const url = `${this.apiURL}/${id}`;
          return this.http.delete(url, httpOptions);
          }
          
          consultermusique(id: number): Observable<musique> {
            const url = `${this.apiURL}/${id}`;
            return this.http.get<musique>(url);
            }
            
            updatemusique(musiq :musique) : Observable<musique>
            {
            return this.http.put<musique>(this.apiURL, musiq, httpOptions);
            }
         
           
              listestyles():Observable<styleWrapper>{
                return this.http.get<styleWrapper>(this.apiURLst);
                }
                rechercherParstyle(idst: number):Observable< musique[]> {
                  const url = `${this.apiURL}/musiqscat/${idst}`;
                  return this.http.get<musique[]>(url);
                  }
                  rechercherParNom(nom: string):Observable< musique[]> {
                    const url = `${this.apiURL}/musiqsByName/${nom}`;
                    return this.http.get<musique[]>(url);
                    }   
            /*consulterstyle(id:number): style{ 
              return this.styles.find(st => st.idst == id)!;
              }*/
              ajouterstyle( st: style):Observable<style>{
                return this.http.post<style>(this.apiURLst, st, httpOptions);
                }
}
