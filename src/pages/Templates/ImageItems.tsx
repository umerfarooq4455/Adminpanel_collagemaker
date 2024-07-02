import React, { useState } from 'react';
import { useMyContext } from '../../contextapi/MyProvider';

interface Item {
  itemWidth: string;
  itemHeight: string;
  itemLeftMargin: string;
  itemTopMargin: string;
  itemRightMargin: string;
  itemBottomMargin: string;
  rotated: string;
  mask: string;
}

const ImageItems: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeItems, setActiveItems] = useState<number | null>(null);
  const { Imagesitems, setImagesitems } = useMyContext();

  console.log('Image Items', Imagesitems);

  const toggleAccordion = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleActiveItems = (index: number): void => {
    setActiveItems((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newItems = [...Imagesitems];
    if (event.target.files && event.target.files.length > 0) {
      newItems[index].mask = event.target.files[0].name;
    } else {
      newItems[index].mask = '';
    }
    setImagesitems(newItems);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Item,
  ) => {
    const newItems = [...Imagesitems];
    newItems[index][field] = event.target.value;
    setImagesitems(newItems);
  };

  const addItem = () => {
    setImagesitems([
      ...Imagesitems,
      {
        itemWidth: '',
        itemHeight: '',
        itemLeftMargin: '',
        itemTopMargin: '',
        itemRightMargin: '',
        itemBottomMargin: '',
        rotated: '',
        mask: '',
      },
    ]);
  };

  const deleteItem = (index: number) => {
    const newItems = Imagesitems.filter((_, i) => i !== index);
    setImagesitems(newItems);
  };

  return (
    <div className="space-y-2">
      <div className="rounded-[10px] border border-[#B8BAC7] border-gray-300 dark:border-meta-4 dark:bg-meta-4 bg-white  px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:text-[#fff]">
        <div
          className="flex h-[45px] cursor-pointer items-center justify-between"
          onClick={() => toggleAccordion(0)}
        >
          <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
            Image Items
          </span>
          <svg
            className={`h-3 w-3 transform ${
              activeIndex === 0 ? 'rotate-180' : 'rotate-90'
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>

        {activeIndex === 0 && (
          <div className="mt-4">
            {Imagesitems.map((item, index) => (
              <div
                key={index}
                className="rounded-[10px] border border-[#B8BAC7] border-gray-300 bg-white dark:border-strokedark dark:bg-boxdark px-5 font-dm text-[16px] font-semibold shadow-sm shadow-[#003EFF1A] dark:text-[#fff] mb-4"
              >
                <div
                  className="flex h-[45px] cursor-pointer items-center justify-between"
                  onClick={() => toggleActiveItems(index)}
                >
                  <span className="text-[16px] font-semibold text-[#1B254B] dark:text-[#fff]">
                    Image Item {index + 1}
                  </span>
                  <svg
                    className={`h-3 w-3 transform ${
                      activeItems === index ? 'rotate-180' : 'rotate-90'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </div>

                {activeItems === index && (
                  <div className="mb-7">
                    <div className="flex flex-wrap -mx-2 md:mt-4">
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemWidth${index}`}
                        >
                          Item Width
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full  resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemWidth${index}`}
                            placeholder="Item Width"
                            value={item.itemWidth}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemWidth')
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemHeight${index}`}
                        >
                          Item Height
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemHeight${index}`}
                            placeholder="Item Height"
                            value={item.itemHeight}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemHeight')
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemLeftMargin${index}`}
                        >
                          Item Left Margin
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemLeftMargin${index}`}
                            placeholder="Item Left Margin"
                            value={item.itemLeftMargin}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemLeftMargin')
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 md:mt-4">
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemTopMargin${index}`}
                        >
                          Item Top Margin
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemTopMargin${index}`}
                            placeholder="Item Top Margin"
                            value={item.itemTopMargin}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemTopMargin')
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemRightMargin${index}`}
                        >
                          Item Right Margin
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemRightMargin${index}`}
                            placeholder="Item Right Margin"
                            value={item.itemRightMargin}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemRightMargin')
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`itemBottomMargin${index}`}
                        >
                          Item Bottom Margin
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`itemBottomMargin${index}`}
                            placeholder="Item Bottom Margin"
                            value={item.itemBottomMargin}
                            onChange={(e) =>
                              handleInputChange(e, index, 'itemBottomMargin')
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-2 md:mt-4">
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`rotated${index}`}
                        >
                          Rotated
                        </label>
                        <div className="relative">
                          <input
                            className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                            type="number"
                            id={`rotated${index}`}
                            placeholder="Rotated"
                            value={item.rotated}
                            onChange={(e) =>
                              handleInputChange(e, index, 'rotated')
                            }
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`mask${index}`}
                        >
                          Upload Image
                        </label>
                        <div className="relative mt-[8px] flex items-center">
                          <input
                            className="hidden"
                            id={`mask${index}`}
                            type="file"
                            onChange={(e) => handleFileChange(e, index)}
                          />
                          <label
                            htmlFor={`mask${index}`}
                            className="custom-file-label w-2/3 text-white bg-gradient-to-r from-[#4623E9] to-[#EAABF0] h-[46px] items-center flex px-2 rounded-[10px]"
                          >
                            Choose File
                          </label>
                          <p className="file-name mt-1 ml-2 text-sm text-gray-900 dark:text-gray-300">
                            {item.mask}
                          </p>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/3 px-2">
                        <label
                          className="block mb-2 text-sm font-bold text-black dark:text-white"
                          htmlFor={`file${index}`}
                        >
                          Delete Item
                        </label>
                        <button
                          className="rounded bg-red-500 text-white px-4 py-2"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex py-4">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4623E9] to-[#EAABF0] py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
                onClick={addItem}
              >
                Add Image Item
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageItems;
