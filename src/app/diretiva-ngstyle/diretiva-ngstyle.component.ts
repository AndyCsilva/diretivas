import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 8;

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
