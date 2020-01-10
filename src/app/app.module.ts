import { HttpClientModule } from '@angular/common/http';
import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PipesModule } from './shared/pipes';
import { SafeurlPipe } from './shared/pipes/safeurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule,
    CoreModule,
    PipesModule
  ],
  providers: [SafeurlPipe,
    // Compiler is not included in AOT-compiled bundle.
    // Must explicitly provide compiler to be able to compile templates at runtime.
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}
