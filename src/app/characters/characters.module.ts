import { HeaderInterceptorService } from "./../interceptors/header-interceptor.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharactersRoutingModule } from "./characters-routing.module";
import { ListComponent } from "./pages/list/list.component";
import { MaterialModule } from "../material/material/material.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, CharactersRoutingModule, MaterialModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true,
    },
  ],
})
export class CharactersModule {}
