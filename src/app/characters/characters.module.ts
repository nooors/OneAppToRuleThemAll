import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersRoutingModule } from "./characters-routing.module";
import { ListComponent } from "./pages/list/list.component";
import { MaterialModule } from "../material/material/material.module";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
})
export class CharactersModule {}
