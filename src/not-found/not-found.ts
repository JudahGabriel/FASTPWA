import {
  customElement,
  FASTElement,
} from "@microsoft/fast-element";
import { notFoundStyles } from "./not-found.styles";
import { html, ViewTemplate } from "@microsoft/fast-element";

/**
 * Generates a template
 *
 * @public
 */
 export const notFoundTemplate: ViewTemplate<NotFound> = html<NotFound>`
        <div>
          <h1>Can't find that :(-</h1>
        </div>
`;

@customElement({
  name: "not-found",
  template: notFoundTemplate,
  styles: notFoundStyles,
})
export class NotFound extends FASTElement {
}
