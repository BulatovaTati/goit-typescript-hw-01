// ! Створіть змінну, яка може містити або рядок, або число(union type)
let unionType: string | number;
unionType = "str";
unionType = 1;
// unionType = {};

// ? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

type literalType = "enable" | "disable";

let statusValue: literalType;

statusValue = "enable";
statusValue = "disable";
// statusValue = "1";
