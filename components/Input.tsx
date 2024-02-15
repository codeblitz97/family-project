import React, { ChangeEvent } from 'react';

interface FancyInputProps {
  id: string;
  className?: string;
  name: string;
  placeholder?: string;
  type: string;
  value?: string; // Add value prop for controlled component
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
  onSubmit?: Function;
}

const FormInput: React.FC<FancyInputProps> = ({
  id,
  className,
  name,
  placeholder,
  type,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      <input
        onSubmit={(e) => (onSubmit ? onSubmit(e) : console.log('On submit'))}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value} // Set the value prop for controlled component
        onChange={onChange} // Pass the onChange prop
        className="bg-gray-200 border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200 duration-300"
      />
    </div>
  );
};

export default FormInput;
