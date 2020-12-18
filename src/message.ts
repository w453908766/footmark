import React, { useState, useEffect, useReducer } from "react";
import { CommentMsg, fetch_comments } from "./mock";

export const EmptyMsg: CommentMsg = { comments: [] };

export function fetchMessage(setState, setMessage) {
  async function send(msg?: string) {
    setState("loading");

    try {
      const result = await fetch_comments(msg);
      setMessage(result);
      setState("finish");
    } catch (error) {
      setState("error");
      console.log(error);
    }
  }
  return send;
}
