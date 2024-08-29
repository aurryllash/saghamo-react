import { Label } from '@radix-ui/react-label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

export default function Component() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 h-[100vh] mt-20">
      <h1 className="mb-6 text-3xl font-bold">Add New Product</h1>
      <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="grid gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <input id="title" type="text" className='outline-none border-black, p-1' style={{ border: '2px solid black'}} placeholder="Enter product title" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <textarea id="description" placeholder="Enter product description" className="min-h-[120px]" />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <input id="price" type="number" placeholder="Enter product price" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="draft">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Images</Label>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex h-24 w-full items-center justify-center rounded-md border-2 border-dashed border-muted-foreground transition-colors hover:border-primary">
                <PlusIcon className="h-6 w-6 text-muted-foreground" />
              </button>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={96}
                height={96}
                className="rounded-md object-cover"
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={96}
                height={96}
                className="rounded-md object-cover"
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-8 flex justify-end">
        <button>Save Product</button>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}