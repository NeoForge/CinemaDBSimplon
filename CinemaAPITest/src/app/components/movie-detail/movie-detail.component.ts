import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';
import { NgbAccordion, NgbPanel, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  
  constructor() { }

  @Input() movie = new Movie;

  ngOnInit(): void {
  }

  /**
   * Modifie l'icône selon le statut ouvert/fermé des panneaux de l'accordéon.
   * Ne fonctionne pas sur [closeOthers="true"]
   * @param $event évènement sur le clic dans le titre d'un panneau de l'accordéon
   * @param acc l'accordéon d'origine
   */
  changeIcon($event: NgbPanelChangeEvent, acc: NgbAccordion) {
    const iconExpanded = "fas fa-chevron-circle-down";
    const iconCollapsed = "fas fa-chevron-circle-up";
    let icon:HTMLElement;

    acc.panels.forEach( (panel:NgbPanel) => {
      icon = document.getElementById(panel.id + "-icon") as HTMLElement;
      if( panel.id != $event.panelId ) {
        //ce panneau cliqué va changer d'état, mais ne l'a pas encore fait
        icon.setAttribute("class", panel.isOpen ? iconExpanded : iconCollapsed);
      } else {
        icon.setAttribute("class", panel.isOpen ? iconCollapsed : iconExpanded)
      }
    });
  }

}
