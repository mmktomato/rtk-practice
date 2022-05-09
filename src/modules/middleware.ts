import { Middleware } from "@reduxjs/toolkit";

export const myMiddleware: Middleware = store => next => action => {
  if (action.error) {
    console.error(action);
  }
  next(action);
};
