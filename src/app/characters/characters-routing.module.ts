import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";

const routes: Routes = [
  { path: "characters", component: ListComponent },
  { path: "**", redirectTo: "characters" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CharactersRoutingModule {}
