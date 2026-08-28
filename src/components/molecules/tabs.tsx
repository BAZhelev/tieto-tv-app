import type { ReactNode } from "react";
import { useId } from "react";

type Tab = {
  id: string;
  label: ReactNode;
  content: ReactNode;
};

type Props = {
  items: Tab[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (id: string) => void;
  className?: string;
  tabListClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  panelClassName?: string;
};

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
  tabListClassName,
  tabClassName,
  activeTabClassName,
  panelClassName,
}: Props) {
  const baseId = useId();
  const activeId = value || defaultValue;

  const activeTab = items.find((tab) => tab.id === activeId);

  return (
    <div className={["flex flex-col", className].filter(Boolean).join(" ")}>
      <div
        role="tablist"
        className={["flex overflow-x-auto", tabListClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {items.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              className={[
                "shrink-0 whitespace-nowrap",
                tabClassName,
                selected && activeTabClassName,
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onValueChange?.(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeId}`}
        aria-labelledby={`${baseId}-tab-${activeId}`}
        className={["flex-1 min-h-0 overflow-y-auto", panelClassName]
          .filter(Boolean)
          .join(" ")}
      >
        {activeTab?.content}
      </div>
    </div>
  );
}
