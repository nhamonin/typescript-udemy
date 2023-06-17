export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  insertPosition: InsertPosition;

  constructor(
    templateId: string,
    hostElementId: string,
    insertPosition: InsertPosition,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    this.insertPosition = insertPosition;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement(this.insertPosition, this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
