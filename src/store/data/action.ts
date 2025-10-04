import { Attribute, AttributeType } from "@/lib/type";

export type Action = {
  setName: (sec: string, cat: string, val: string) => void;
  appendAttribute: (sec: string, cat: string, attr: Attribute) => void;
  removeAttribute: (sec: string, cat: string, index: number) => void;
  changeAttributeName: (
    sec: string,
    cat: string,
    index: number,
    val: string,
  ) => void;
  changeAttributeValue: (
    sec: string,
    cat: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeUptime: (
    sec: string,
    cat: string,
    index: number,
    val: number,
  ) => void;
  changeAttributeType: (
    sec: string,
    cat: string,
    index: number,
    val: AttributeType,
  ) => void;
  changeAttributeNote: (
    sec: string,
    cat: string,
    index: number,
    val: string,
  ) => void;
};
