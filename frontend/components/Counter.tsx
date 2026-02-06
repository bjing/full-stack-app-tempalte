'use client';

import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/StoreContext';

const Counter = observer(() => {
  const { counterStore } = useStore();

  return (
    <div className="flex flex-col items-center gap-4 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold">MobX Counter</h2>
      <div className="text-4xl font-mono">{counterStore.count}</div>
      <div className="flex gap-2">
        <button
          onClick={() => counterStore.decrement()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => counterStore.increment()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
});

Counter.displayName = 'Counter';

export default Counter;
