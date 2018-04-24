import { Injectable } from '@angular/core';

@Injectable()
export class MainServiceService {

getEmpDetails(){
  return [{"name":"lindu", "age":"23"},
              {"name":"tindu", "age":"22"}];

  

}
}
