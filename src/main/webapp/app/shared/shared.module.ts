import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MoneyRiceCambiosSharedLibsModule, MoneyRiceCambiosSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MoneyRiceCambiosSharedLibsModule, MoneyRiceCambiosSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MoneyRiceCambiosSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoneyRiceCambiosSharedModule {
  static forRoot() {
    return {
      ngModule: MoneyRiceCambiosSharedModule
    };
  }
}
