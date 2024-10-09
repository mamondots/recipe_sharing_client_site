"use client";

import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface RichtextEditorProps {
  name: string;
  label: string;
}

const FXTextEditor: React.FC<RichtextEditorProps> = ({ name, label }) => {
  const { control } = useFormContext();

  useEffect(() => {
    // Perform any client-side initialization if needed
  }, []);

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <JoditEditor {...field} />}
      />
    </div>
  );
};

export default FXTextEditor;
