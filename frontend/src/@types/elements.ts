import React from "react";

// This file is only an aliases for complex types from React

export type ReactButtonElement = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ReactChildrenElement = React.ReactNode;

export type ReactInputElement = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
