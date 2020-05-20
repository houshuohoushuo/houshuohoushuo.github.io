import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(data){
    console.log(data);
    var mailto_link = 'mailto:hou.shuo@outlook.com' + '?subject=' + data.subject + '&body=' + data.message;

    var win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
  }

}
