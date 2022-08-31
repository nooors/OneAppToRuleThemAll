import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersRoutingModule } from "./characters-routing.module";
import { ListComponent } from "./pages/list/list.component";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
