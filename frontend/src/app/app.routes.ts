import { Routes } from "@angular/router";
import { ExpenseHistoryComponent } from "./expense/components/expense-history/expense-history.component";

export const routes: Routes = [
  { path: "", redirectTo: "gastos", pathMatch: "full" },
  { path: "gastos", component: ExpenseHistoryComponent },
];
