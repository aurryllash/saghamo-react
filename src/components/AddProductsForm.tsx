import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function Component() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    if (images) images.forEach((image, index) => {
      formData.append(`image_${index}`, image)
    });

      fetch("/api/clothes", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (e: any) => {
    const file = e.target.files;

    if (file) {
      setImages((prevImages: File[]) => [...prevImages, file?.[0]]);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 mb-20 lg:mb-0 h-[100vh] mt-20">
      <h1 className="mb-6 text-3xl font-bold">Add New Product</h1>
      <form
        id="form"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        onSubmit={onSubmit}
      >
        <div className="grid gap-4">
          <div className="flex flex-col">
            <Label htmlFor="title">Title</Label>
            <input
              id="title"
              type="text"
              className="outline-none border-black, p-1"
              style={{ border: "2px solid black" }}
              placeholder="Enter product title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              placeholder="Enter product description"
              style={{ border: "2px solid black" }}
              className="min-h-[120px] outline-none border-black, p-1"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="price">Price</Label>
            <input
              id="price"
              type="number"
              className="outline-none border-black, p-1"
              style={{ border: "2px solid black" }}
              placeholder="Enter product price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Label>Images</Label>
            <div className="grid grid-cols-3 gap-4">
              <label
                htmlFor="file-upload"
                className="flex h-24 w-full items-center justify-center rounded-md border-2 border-dashed border-muted-foreground transition-colors hover:border-primary cursor-pointer"
              >
                <PlusIcon className="h-6 w-6 text-muted-foreground" />
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              {/* {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  width={96}
                  height={96}
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "96/96", objectFit: "cover" }}
                />
              ))} */}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="border-2 border-black py-2 px-4 hover:text-white hover:bg-black transition-all">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
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
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchForm(body: any) {
  fetch("/api/clothes", {
    method: "POST",
    body: body,
  })
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
