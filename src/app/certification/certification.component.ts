import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit{
 view: 'database' | 'Introduction' | 'java' ='java';
 

  ngOnInit(): void {
    
  }
}
