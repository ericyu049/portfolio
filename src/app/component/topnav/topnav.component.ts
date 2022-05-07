import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopNavComponent implements OnInit {
    ngOnInit(): void {
        console.log('topnav');
    }
}