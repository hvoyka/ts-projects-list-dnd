/// <reference path="model/drag-drop.ts" />
/// <reference path="model/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />

/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  // Init

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
