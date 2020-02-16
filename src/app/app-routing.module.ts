
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportsComponent } from "./reports/reports.component";
import { LanderComponent } from "./lander/lander.component";

const routes: Routes = [
  { path: "", component: ReportsComponent },
  { path: "lander", component: LanderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
