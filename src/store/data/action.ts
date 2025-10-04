import { Attribute, AttributeType } from "@/lib/type";

export type Action = {
  setName: (sec: string, item: string, val: string) => void;
  appendAttribute: (sec: string, item: string, attr: Attribute) => void;
  removeAttribute: (sec: string, item: string, index: number) => void;
  changeAttributeName: (
    sec: string,
    item: string,
    index: number,
    val: string,
  ) => void;
  changeAttributeValue: (
    sec: string,
    item: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeUptime: (
    sec: string,
    item: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeType: (
    sec: string,
    item: string,
    index: number,
    val: AttributeType,
  ) => void;
  changeAttributeNote: (
    sec: string,
    item: string,
    index: number,
    val: string,
  ) => void;
};
