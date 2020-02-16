import { BrowserModule } from "@angular/platform-browser";
import { DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ReportsComponent } from "./reports/reports.component";
import { LanderComponent } from "./lander/lander.component";
import { NgbdSortableHeader } from "./directive/sortable.directive";
import { ReportService } from "./service/report.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    LanderComponent,
    NgbdSortableHeader
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ReportService, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
