import { Id } from "./Base";

export interface DataElement {
    id: Id;
    name: string;
    domain: "AGGREGATE" | "TRACKER";
}
