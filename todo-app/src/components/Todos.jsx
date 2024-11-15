import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";
import Todo from "./Todo";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function Todos() {
  const { filtered } = useTodo();
  const [items, setItems] = useState(filtered);

  useEffect(() => {
    setItems(filtered);
  }, [filtered]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul className="text-very-dark-grayish-blue dark:text-light-grayish-blue divide-light-grayish-blue dark:divide-dark-grayish-blue divide-y">
          {items.map((item, i) => (
            <Todo item={item} key={i} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

export default Todos;
