// aliases to complex types

export type ReactState<T> = React.Dispatch<React.SetStateAction<T>>;

export type VoidCallback = () => void;

export type ButtonCallback = React.MouseEventHandler<HTMLButtonElement>;
