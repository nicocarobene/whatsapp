export const Menu = ({
  children,
  navbar,
  right,
  top
}: {
  children: any
  navbar: boolean
  right: string
  top: string
}) => {
  return (
    <div
      style={{ display: navbar ? 'none' : 'block' }}
      className={`absolute z-10 ${top} ${right} [&>ul>li>button]:w-full [&>ul>li>button]:text-left [&>ul>li>button]:py-3 [&>ul>li>button]:px-6 [&>ul>li>button]:text-sm [&>ul>li>button]:text-gray-700 [&>ul>li>button]:font-normal rounded-md bg-white w-52 shadow-md shadow-gray-400 max-h-[22rem] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300`}
    >
      <ul className="flex flex-col mt-1 transition-all">{children}</ul>
    </div>
  )
}
