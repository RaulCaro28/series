import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent implements OnInit {

  lista_series: any[] = [
    {
      titulo: "Vikingos",
      img: "/assets/images/vikings.jpg",
      img_alt: "Imagen Vikingos",
      sinopsis: "Narra las aventuras del héroe Ragnar Lothbrok, de sus hermanos vikingos y su familia, cuando él se subleva para convertirse en el rey de las tribus vikingas. Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses. Según la leyenda era descendiente directo del dios Odín."
    },
    {
      titulo: "Peaky Blinders",
      img: "/assets/images/peaky.jpg",
      img_alt: "Imagen Peaky blinders",
      sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas y se rigen mediante extorsiones."    
    },
    {
      titulo: "Frontier",
      img: "/assets/images/frontier.jpg",
      img_alt: "Imagen Frontier",
      sinopsis: "Serie de aventuras que narra la caótica y violenta lucha por el control y las riquezas del comercio de pieles en la Norteamérica del siglo XVIII. Relatada desde diferentes perspectivas, la serie está ambientada en un mundo en el que las negociaciones se pueden resolver con una pelea de hachas en espacios cerrados y en el que la complicada relación entre las tribus nativas y los europeos puede generar conflictos sangrientos"
    },
    {
      titulo: "See",
      img: "/assets/images/see.jpg",
      img_alt: "Imagen See",
      sinopsis: "See es un drama ambientado en un futuro distópico en el que los humanos han perdido uno de los sentidos más importantes: la vista. Ahora, las personas intentan adaptarse a un nuevo mundo con otras formas de interacción y construcción social, pero también de caza y supervivencia."
    },
    {
      titulo: "La ley de los audaces",
      img: "/assets/images/suits.jpg",
      img_alt: "Imagen la ley de los audaces",
      sinopsis: "Michael Ross se gana la vida bordeando los límites de la legalidad. Es un joven muy inteligente, pero las malas compañías de la universidad lo llevaron a creer que para triunfar en la vida hay que saltarse las reglas. Así, por ejemplo, vive de presentarse en nombre de otros a los exámenes de Derecho. Por azar conoce a Harvey Specter, uno de los abogados más jóvenes y brillantes de Manhattan. La inteligencia y las dotes de Michael lo deslumbrarán tanto que lo contrata a pesar de que aún no ha terminado la carrera."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
