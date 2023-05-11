import React from "react";
import { Templates as _Templates } from "@utils/constants";
import clsx from "clsx";
import { useStore } from "@utils/store";

const Templates = () => {
  const { setTemplate, activeTemplate } = useStore();

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {_Templates.map((Component, index) => {
        const compName = `template-${index + 1}`;

        return (
          <button
            key={compName}
            className={clsx(
              "border-2 rounded-md",
              activeTemplate === compName && "!border-blue-500"
            )}
            onClick={() => setTemplate(Component, compName)}
          >
            <img
              className="rounded-md"
              src={`/templates/${compName}.png`}
              alt={`Template ${index + 1}`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Templates;
