import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu"

export default function Filter() {
  return (
    <div className="bg-background border-b pb-[40px] z-10" style={{backgroundColor: 'background: 0 0% 85%;'}}>
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-start lg:items-center gap-4 flex-col sm:flex-col md:flex-col lg:flex-row">
          <h2 className="text-lg font-semibold">Filter Products</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button  className="flex items-center gap-2 outline-none">
                <FilterIcon className="w-4 h-4" />
                Category
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white  z-10">
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Shirts</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Pants</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Dresses</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Accessories</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2  outline-none">
                <DollarSignIcon className="w-4 h-4" />
                Price Range
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white  z-10">
              <DropdownMenuLabel>Select Price Range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>$0 - $50</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>$50 - $100</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>$100 - $200</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>$200+</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center gap-2  outline-none">
                <ListOrderedIcon className="w-4 h-4" />
                Sort By
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white z-10">
              <DropdownMenuLabel>Sort Products</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="featured">
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button  className="flex items-center gap-2  outline-none">
          <TimerResetIcon className="w-4 h-4" />
          Reset Filters
        </button>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListOrderedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TimerResetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
      <path d="M9 17H4v5" />
    </svg>
  )
}