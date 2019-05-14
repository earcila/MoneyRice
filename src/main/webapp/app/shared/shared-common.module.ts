import { NgModule } from '@angular/core';

import { MoneyRiceCambiosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MoneyRiceCambiosSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MoneyRiceCambiosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MoneyRiceCambiosSharedCommonModule {}
