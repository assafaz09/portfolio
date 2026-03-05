import React from "react";

export default function HeroBg() {
  return (
    <div>
      <div className="code-element">{`const controller = new AbortController()`}</div>
      <div className="code-element">{`const timeout = setTimeout(() => controller.abort(), 5000)`}</div>
      <div className="code-element">{`async function loadItems() {`}</div>
      <div className="code-element">{`  const res = await fetch('/api/items', { signal: controller.signal })`}</div>
      <div className="code-element">{`  if (!res.ok) throw new Error('Request failed')`}</div>
      <div className="code-element">{`  const data = await res.json(); clearTimeout(timeout)`}</div>
      <div className="code-element">{`  console.log(data)`}</div>
      <div className="code-element">{`}`}</div>
      <div className="code-element">{`loadItems()`}</div>

      <div className="glowing-shape"></div>
      <div className="glowing-shape"></div>
      <div className="glowing-shape"></div>

      <div className="circuit-line"></div>
      <div className="circuit-line"></div>
    </div>
  );
}
