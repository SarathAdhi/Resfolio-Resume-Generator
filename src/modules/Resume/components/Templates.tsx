import React from "react";
import { Templates as _Templates } from "@utils/constants";
import Image from "next/image";
import clsx from "clsx";
import { useStore } from "@utils/store";

const Templates = () => {
  const { setTemplate, activeTemplate } = useStore();

  return (
    <div className="grid grid-cols-2 gap-4">
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
            <Image
              className="rounded-md"
              width={500}
              height={500}
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
