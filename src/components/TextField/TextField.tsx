
type TextFieldProps = {
  lable: string;
  placeholder: string;
  autoComplete:string;
  id:string;
  name:string;
  type:string;
};

export const TextField = ({
    lable,
    placeholder,
    autoComplete,
    id,
    name,
    type

}: TextFieldProps): JSX.Element => {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {lable}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
             <input
              type={type}
              name={name}
              id={id}
              autoComplete={autoComplete}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </>
  );
};
