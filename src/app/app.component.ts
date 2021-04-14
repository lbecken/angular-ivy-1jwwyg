import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  stateCallPatient = true;
  stateBringPatient = false;
  stateCannotBringPatient = false;
  stateCanBringPatient = false;

  clickSurgery() {
    if (this.stateCallPatient) {
      this.stateCallPatient = false;
      this.stateBringPatient = true;
    } else if (this.stateBringPatient) {
      this.stateCallPatient = true;
      this.stateBringPatient = false;
    }
  }

  clickNurse() {
    if (this.stateCanBringPatient) {
      const cancelPatientAccompaniement = window.confirm("Cancel the patient accompaniement?")

      if (cancelPatientAccompaniement) {
        this.stateCanBringPatient = false;
        this.stateCannotBringPatient = true;
      } else {
        this.stateCanBringPatient = true;
      }
    }

    if (this.stateBringPatient) {
      const canBringPatient = window.confirm("Can bring the patient?")
      if (canBringPatient) {
        this.stateCanBringPatient = true;
      } else {
        this.stateCannotBringPatient = true;
      }
      this.stateBringPatient = false;
    }


  }
}
