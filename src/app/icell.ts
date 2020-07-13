export interface ICell {
  neighborCount: number;
  revealed: boolean;
  bee: boolean;
  x(): number;
  y(): number;
}
