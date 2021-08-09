/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />

namespace App {
  // Init

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
