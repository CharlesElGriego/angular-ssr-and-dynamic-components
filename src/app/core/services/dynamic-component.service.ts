import { CommonModule } from '@angular/common';
import { Compiler, ComponentFactory, Inject, Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  //#region   Constructor
  constructor(@Inject(Compiler) private compiler: Compiler) { }
  //#endregion

  //#region   Public Methods
  async generateDynamic(component: any): Promise<ComponentFactory<any>> {
    this.compiler.clearCache();

    const type = component;
    const module = this.generateNewModule(type);

    return new Promise(
      (resolve, reject) => {
        this.compiler.compileModuleAndAllComponentsAsync(module)
          .then((factories) => {
            const componentFactory = factories.componentFactories[0];
            resolve(componentFactory);
          },
            (error) => reject(error));
      });

  }
  //#endregion

  //#region   Private Methods
  private generateNewModule(componentType: any): any {
    // Define the module using NgModule decorator.
    const module = NgModule({
      declarations: [componentType],
      imports: [CommonModule],
    })(class { });

    return module;
  }
  //#endregion
}
