"use client";

import React from "react";
import { RoomProvider } from "./liveblocks.config.ts";
import { Room } from "./Room.tsx";
import { ClientSideSuspense } from "@liveblocks/react";

export default function App() {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}