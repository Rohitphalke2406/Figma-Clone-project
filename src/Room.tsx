"use client";

import React from "react";
import { useOthers } from "./liveblocks.config.ts";

export function Room() {
  const others = useOthers();
  const userCount = others.length;

  return <div>
    <h1 className="text-7xl text-center">Figma Clone</h1>
  </div>;
}