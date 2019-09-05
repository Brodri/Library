import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('examplePopup',{static: false}) examplePopup
  @ViewChild('tagselect',{static: false}) tagselect

    constructor() {
      setTimeout(() => {
        this.tagselect.selectOptionFocus('selectOption1')
        this.tagselect.selectOptionFocusOut('selectOption1')
      }, 3000);
     }
    prueba="prueba"
    @ViewChild('prueba',{static: false}) pruebaRequired
    inputFileFormat="image"
    activeColor: string = '#7D0C04';
    inputFileTitle='Upload Image'
    inputFileButton='Upload'
    cardHeight="0px"
    tablePrimaryTrOpen=true

    lenguajes="en_US";
    arrayMenuHeader = [
      {
        "name": "Apps",
        "image": "assets/images/apps.svg"
      },
      {
        "name": "Header.Users",
        "image": "assets/images/users.svg"
      },
      {
        "name": "Administration",
        "image": "assets/images/administration.png"
      },
      {
        "name": "Use Cases",
        "image": "assets/images/global-use-cases.svg"
      },
      {
        "name": "Reports",
        "image": "assets/images/moving-operation.svg"
      }
    ];

    selectOptionList = [
      {
        "name": "Colombia",
        "id": "Colombia",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Argentina",
        "id": "Argentina",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Chile",
        "id": "Chile",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Uruguay",
        "id": "Uruguay",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Francia",
        "id": "Francia",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Ecuador",
        "id": "Ecuador",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Brasil",
        "id": "Brasil",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Mexico",
        "id": "Mexico",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Bolivia",
        "id": "Bolivia",
        "image": "assets/images/colombia.svg"
      }
    ];

    autocompleteList = [
      {
        "name": "Colombia",
        "id": "Colombia",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Argentina",
        "id": "Argentina",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Chile",
        "id": "Chile",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Uruguay",
        "id": "Uruguay",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Francia",
        "id": "Francia",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Ecuador",
        "id": "Ecuador",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Brasil",
        "id": "Brasil",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Mexico",
        "id": "Mexico",
        "image": "assets/images/colombia.svg"
      },
      {
        "name": "Bolivia",
        "id": "Bolivia",
        "image": "assets/images/colombia.svg"
      }
    ];

    cardGridData=[
      {"title":"Apps","image":"assets/images/apps-card-grid.svg","description":"Configure the SMPP Accounts. List, edit and create new Smpp account. Configure traffic control by assigning TP rule independently per day. Review the statistics of each endpoint customize them","sizeImage":"51","sizeBox":198},
      {"title":"Users","image":"assets/images/users-card-grid.svg","description":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
      {"title":"Administration","image":"assets/images/holding-and-operation-card-grid.svg","description":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
      {"title":"Uses Cases","image":"assets/images/global-use-cases-card-grid.svg","description":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
      {"title":"Reports","image":"assets/images/moving-operation-card-grid.svg","description":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198}
    ];
    tablePrimaryBody=[
      [1, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "32", "Chile"],
      [2, "Sandra Ruiz", "sandra.ruiz@dominio.com", "694235", "27", "Argentina"],
      [3, "Astrid Torres", "astrid.torres@dominio.com", "285463", "41", "Colombia"],
      [4, "Fernando Jimenez", "fernando.jimenez@dominio.com", "189345", "25", "Venezuela"],
      [5, "Kevin Gomez", "kevin.gomez@dominio.com", "798258", "33", "Peru"],
      [6, "Danilo Cadena", "danilo.cadena@dominio.com", "103817", "37", "Panama"],
      [7, "Jose Cardenas", "jose.cardenas@dominio.com", "620589", "19", "Bolivia"],
      [8, "Tatiana Lopez", "tatiana.lopez@dominio.com", "434608", "28", "Brasil"],
      [9, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "22", "France"],
      [10, "Sandra Torres", "sandra.ruiz@dominio.com", "694235", "37", "Germany"],
      [11, "Camilo Torres", "armando.torres@dominio.com", "285463", "31", "United State"],
      [12, "Jose Jimenez", "fernando.jimenez@dominio.com", "189345", "35", "Australia"],
      [13, "Julian Gomez", "kevin.gomez@dominio.com", "798258", "23", "Canada"],
      [14, "Daniel Cadena", "danilo.cadena@dominio.com", "103817", "27", "Cuba"],
      [15, "Jose Caro", "jose.cardenas@dominio.com", "620589", "29", "Finland"],
      [16, "Lorena Lopez", "tatiana.lopez@dominio.com", "434608", "38", "Greece"],
      [17, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "32", "Honduras"],
      [18, "Sandra Ruiz", "sandra.ruiz@dominio.com", "694235", "27", "Argentina"],
      [19, "Alex Torres", "torres.alex@dominio.com", "285463", "41", "Colombia"],
      [20, "Fernando Jimenez", "fernando.jimenez@dominio.com", "189345", "25", "Venezuela"],
      [21, "Kevin Gomez", "kevin.gomez@dominio.com", "798258", "33", "Peru"],
      [22, "Danilo Cadena", "danilo.cadena@dominio.com", "103817", "37", "Panama"],
      [23, "Jose Cardenas", "jose.cardenas@dominio.com", "620589", "19", "Bolivia"],
      [24, "Tatiana Lopez", "tatiana.lopez@dominio.com", "434608", "28", "Brasil"],
      [25, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "22", "Chile"],
      [26, "Sandra Torres", "sandra.ruiz@dominio.com", "694235", "37", "Argentina"],
      [27, "Camilo Torres", "armando.torres@dominio.com", "285463", "31", "Colombia"],
      [28, "Jose Jimenez", "fernando.jimenez@dominio.com", "189345", "35", "Venezuela"],
      [29, "Julian Gomez", "kevin.gomez@dominio.com", "798258", "23", "Peru"],
      [30, "Daniel Cadena", "danilo.cadena@dominio.com", "103817", "27", "Panama"],
      [31, "Jose Caro", "jose.cardenas@dominio.com", "620589", "29", "Bolivia"],
      [32, "Lorena Lopez", "tatiana.lopez@dominio.com", "434608", "38", "Brasil"],
      [33, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "32", "Chile"],
      [34, "Sandra Ruiz", "sandra.ruiz@dominio.com", "694235", "27", "Argentina"],
      [35, "Ana Torres", "torres.ana@dominio.com", "285463", "41", "Colombia"],
      [36, "Fernando Jimenez", "fernando.jimenez@dominio.com", "189345", "25", "Venezuela"],
      [37, "Kevin Gomez", "kevin.gomez@dominio.com", "798258", "33", "Peru"],
      [38, "Danilo Cadena", "danilo.cadena@dominio.com", "103817", "37", "Panama"],
      [39, "Jose Cardenas", "jose.cardenas@dominio.com", "620589", "19", "Bolivia"],
      [40, "Tatiana Lopez", "tatiana.lopez@dominio.com", "434608", "28", "Brasil"],
      [41, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "22", "Chile"],
      [42, "Sandra Torres", "sandra.ruiz@dominio.com", "694235", "37", "Indonesia"],
      [43, "Camilo Torres", "armando.torres@dominio.com", "285463", "31", "Colombia"],
      [44, "Jose Jimenez", "fernando.jimenez@dominio.com", "189345", "35", "India"],
      [45, "Julian Gomez", "kevin.gomez@dominio.com", "798258", "23", "Peru"],
      [46, "Daniel Cadena", "danilo.cadena@dominio.com", "103817", "27", "Panama"],
      [47, "Jose Caro", "jose.cardenas@dominio.com", "620589", "29", "Bolivia"],
      [48, "Lorena Lopez", "tatiana.lopez@dominio.com", "434608", "38", "Brasil"],
      [49, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "32", "England"],
      [50, "Sandra Ruiz", "sandra.ruiz@dominio.com", "694235", "27", "Argentina"],
      [51, "Armando Torres", "armando.torres@dominio.com", "285463", "41", "Colombia"],
      [52, "Fernando Jimenez", "fernando.jimenez@dominio.com", "189345", "25", "Venezuela"],
      [53, "Kevin Gomez", "kevin.gomez@dominio.com", "798258", "33", "Peru"],
      [54, "Danilo Cadena", "danilo.cadena@dominio.com", "103817", "37", "Panama"],
      [55, "Jose Cardenas", "jose.cardenas@dominio.com", "620589", "19", "Bolivia"],
      [56, "Tatiana Lopez", "tatiana.lopez@dominio.com", "434608", "28", "Brasil"],
      [57, "Carlos Gutierrez", "carlos.gutierrez@dominio.com", "958263", "22", "Chile"],
      [58, "Sandra Torres", "sandra.ruiz@dominio.com", "694235", "37", "Argentina"],
      [59, "Camilo Torres", "armando.torres@dominio.com", "285463", "31", "Colombia"],
      [60, "Jose Jimenez", "fernando.jimenez@dominio.com", "189345", "35", "Jamaica"],
      [61, "Julian Gomez", "kevin.gomez@dominio.com", "798258", "23", "Peru"],
      [62, "Daniel Cadena", "danilo.cadena@dominio.com", "103817", "27", "Panama"],
      [63, "Jose Caro", "jose.cardenas@dominio.com", "620589", "29", "Bolivia"],
      [64, "Lorena Lopez", "tatiana.lopez@dominio.com", "434608", "38", "Brasil"],
    ]
    tablePrimaryTextAlign = ["center","center","center","center","center","center"]
    tablePrimaryArrayComponents=
    [
      ["normal"],
      ["normal"],
      ["normal"],
      ["normal"],
      [
        ["checkbox"],
        [
          {
            "id": "Colombia",
            "required": false,
            "content": "Colombia",
            "color":"#7D0C04"
          },
          {
            "id": "Argentina",
            "required": false,
            "content": "Argentina",
            "color":"#7D0C04"
          },
        ],
        [
          {
            "width":"",
            "margin":"5px"
          }
        ],
        [
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
          [false,false],
          [true,true],
          [true,false],
        ]
      ],
      [
        ["select-option"],
        [
          {
            "name": "Colombia",
            "id": "Colombia",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Argentina",
            "id": "Argentina",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Chile",
            "id": "Chile",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Uruguay",
            "id": "Uruguay",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Francia",
            "id": "Francia",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Ecuador",
            "id": "Ecuador",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Brasil",
            "id": "Brasil",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Mexico",
            "id": "Mexico",
            "image": "assets/images/colombia.svg"
          },
          {
            "name": "Bolivia",
            "id": "Bolivia",
            "image": "assets/images/colombia.svg"
          }
        ],
        [
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
          ["Prueba","1"],
        ]
      ],
      [
        [
          "state-select"
        ],
        [
          {"title":"Active", "name":"Active", "circleColor":"#79c942", "changeColor":"#ecffdf", "id":"state1"},
          {"title":"Inactive", "name":"Inactive", "circleColor":"#ec2c26", "changeColor":"#ffe4e5", "id":"state2"},
          {"title":"Pending", "name":"Pending","circleColor":"#f19221", "changeColor":"#ffecd8", "id":"state3"}
        ],
        [
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-0"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-1"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-2"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-3"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-4"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-5"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-6"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-7"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-8"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-9"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-10"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-11"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-12"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-13"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-14"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-15"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-16"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-17"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-18"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-19"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-20"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-21"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-22"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-23"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-24"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-25"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-26"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-27"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-28"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-29"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-30"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-31"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-32"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-33"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-34"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-35"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-36"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-37"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-38"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-39"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-40"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-41"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-42"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-43"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-44"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-45"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-46"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-47"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-48"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-49"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-50"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-51"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-52"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-53"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-54"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-55"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-56"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-57"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-58"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-59"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-60"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-61"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-62"},
          {"title": "Active", "name":"Active", "circleColor":"#79c942", "id":"statePrincipal-63"},
        ]
      ]
    ]
    tablePrimaryHead=["Id #", "Nombre Completo", "Correo Electronico", "Telefono", "Edad", "Pais"]

    cardSelectClick($event){
      console.log($event)
    }

    pruebaImagen(){

    }

    tablePrimaryTrSelect($event){
      if(this.tablePrimaryTrOpen){
        document.getElementById("prueba").style.marginTop=$event[1]+"px"
        document.getElementById("prueba").style.display="block"
      }else{
        this.tablePrimaryTrOpen=true
      }
      
    }

    tablePrimaryTrClose($event){
      console.log($event)
      this.tablePrimaryTrOpen=false
    }

    hola(){
      this.pruebaRequired.selectOptionFocus('selectOption2')
      this.pruebaRequired.selectOptionFocusOut('selectOption2')
    }

    activePopup(){
      this.examplePopup.popupCover=true
    }
}
