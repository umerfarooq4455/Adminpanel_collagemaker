import React, { useState } from 'react';
import ImageItems from './ImageItems';
import TextItems from './TextItems';
import StickerItems from './StickerItems';
// import axios from 'axios';

const Templatesmain: React.FC = () => {
  const [fileName, setFileName] = useState('');
  const handleFileChange = (event: any) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const [formData, setFormData] = useState({
    tag: '',
    status: '',
    order: '',
    isPro: '',
    isNew: '',
    imagesCount: '',
    templateBaseURL: '',
    templateFrameURL: '',
    templateThumbnailURL: '',
    templateID: '',
    templateSize: '',
    thumbnailWidth: '',
    thumbnailHeight: '',
    templateWidth: '',
    templateHeight: '',
  });

  console.log('fordata', formData);

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('key1', formData);
  //   formData.append('key2', status);

  //   try {
  //     const response = await axios.post(
  //       'https://d05bc05dd139489ca8254ba52ebb4964.api.mockbin.io/',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       },
  //     );

  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="mb-3 mt-8">
        <span className=" md:text-[20px] px-2 py-4   font-semibold text-black dark:text-white">
          Templates
        </span>
      </div>

      <div className="rounded-[10px] border border-stroke bg-white px-2 pt-2 pb-2.5  shadow-default dark:border-strokedark dark:bg-boxdark  xl:pb-1">
        <div className="flex flex-col px-2">
          <form className="w-full ">
            <div className="w-full py-4">
              <div>
                <span className="text-lg md:text-[18px] font-semibold text-black dark:text-white">
                  Add New Templates
                </span>
                <div className="w-full mt-4 sm:w-2/5">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="tag"
                  >
                    Category Name
                  </label>
                  <div className="relative">
                    <select
                      id="tag"
                      required
                      value={formData.tag}
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                    >
                      <option selected>Choose a category</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 md:mt-4">
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="Status"
                  >
                    Status
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="Status"
                      id="Status"
                      placeholder="Status"
                      value={formData.status}
                      onChange={(event) => handleInputChange(event)}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="order"
                  >
                    Order
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="Order"
                      value={formData.order}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="imagesCount"
                  >
                    ImagesCount
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="imagesCount"
                      value={formData.imagesCount}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 md:mt-4">
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="templateBaseURL"
                  >
                    Template URL
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="url"
                      name="fullName"
                      id="fullName"
                      placeholder="BaseURL"
                      value={formData.templateBaseURL}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="TemplateWidth"
                  >
                    TemplateWidth
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="TemplateWidth"
                      value={formData.templateWidth}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="TemplateHeight"
                  >
                    TemplateHeight
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="TemplateWidth"
                      value={formData.templateHeight}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 md:mt-4">
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="TemplateID"
                  >
                    TemplateID
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="TemplateID"
                      value={formData.templateID}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="templateSize"
                  >
                    TemplateSize
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="templateSize"
                      value={formData.templateSize}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="TemplateWidth"
                  >
                    TemplateWidth
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="TemplateWidth"
                      value={formData.templateWidth}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 md:mt-4">
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="ThumbnailHeight"
                  >
                    ThumbnailHeight
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                      type="number"
                      name="fullName"
                      id="fullName"
                      placeholder="ThumbnailHeight"
                      value={formData.thumbnailHeight}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="templateFrameURL"
                  >
                    Template Frame image
                  </label>
                  <div className="relative mt-[8px]">
                    <div className="file-input-wrapper">
                      <div className="flex items-center">
                        <input
                          className="hidden "
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="file_input"
                          className="custom-file-label w-2/3 text-white bg-gradient-to-r from-[#4623E9] to-[#EAABF0] h-[46px] items-center flex px-2 rounded-[10px]"
                        >
                          Choose File
                        </label>
                        {fileName && (
                          <p className="file-name mt-1 ml-2 text-sm text-gray-900 dark:text-gray-300">
                            {fileName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 px-2 mt-4">
                  <label
                    className="block mb-2 text-sm font-bold text-black dark:text-white"
                    htmlFor="templateFrameURL"
                  >
                    Template Frame image
                  </label>
                  <div className="relative mt-[8px]">
                    <div className="file-input-wrapper">
                      <div className="flex items-center">
                        <input
                          className="hidden "
                          aria-describedby="file_input_help"
                          id="file_input1"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="file_input1"
                         className="custom-file-label w-2/3 text-white bg-gradient-to-r from-[#4623E9] to-[#EAABF0] h-[46px] items-center flex px-2 rounded-[10px]"
                        >
                          Choose File
                        </label>
                        {fileName && (
                          <p className="file-name mt-1 ml-2 text-sm text-gray-900 dark:text-gray-300">
                            {fileName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center sm:w-1/3 ">
                <div className="mb-[0.125rem] mt-7 block min-h-[1.5rem] ps-[1.5rem]">
                  <input
                    className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label className="inline-block ps-[0.15rem] hover:cursor-pointer">
                    isPro
                  </label>
                </div>
                <div className="mb-[0.125rem] mt-7  ml-6 block min-h-[1.5rem] ps-[1.5rem]">
                  <input
                    className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label className="inline-block ps-[0.15rem] hover:cursor-pointer">
                    isNew
                  </label>
                </div>
              </div>

              <div className="mt-6 ">
                <ImageItems />
              </div>
              <div className="mt-3 ">
                <TextItems />
              </div>
              <div className="mt-3 ">
                <StickerItems />
              </div>
            </div>

            <div className="flex py-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4623E9] to-[#EAABF0] py-2 px-6 text-center font-medium text-white hover:bg-opacity-90">
                Add Template
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Templatesmain;
