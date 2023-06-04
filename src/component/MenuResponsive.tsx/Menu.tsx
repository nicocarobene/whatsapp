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
      className={`absolute z-10 ${top} ${right} [&>ul>li>div]:w-full [&>ul>li>div]:text-left [&>ul>li>div]:py-3 [&>ul>li>div]:px-6 [&>ul>li>div]:text-sm [&>ul>li>div]:text-gray-700 [&>ul>li>div]:font-normal rounded-md bg-white w-52 shadow-md shadow-gray-400 max-h-[22rem] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300`}
    >
      <ul className="flex flex-col mt-1 transition-all">{children}</ul>
    </div>
  )
}
