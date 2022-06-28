/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
  step: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const [step, setStep] = useState(props.step);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  const number = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200 w-24 flex-basis-4 flex-grow-0`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <input
        type="number"
        class={number}
        onInput={e => {
          const {value} = e.target;
          setStep(value);
        }}
        value={step}
        disabled={!IS_BROWSER}
      >
      </input>
      <button
        class={btn}
        onClick={() => setCount(count - step)}
        disabled={!IS_BROWSER}
      >
        -{step}
      </button>
      <button
        class={btn}
        onClick={() => setCount(count + step)}
        disabled={!IS_BROWSER}
      >
        +{step}
      </button>
    </div>
  );
}
