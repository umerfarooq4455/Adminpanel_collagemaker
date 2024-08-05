import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useMyContext } from '../../contextapi/MyProvider';
import AddCategoryModal from '../Dashboard/AddCategoryModal';
import EditcategoryModal from '../Dashboard/EditcategoryModal';
import { NavLink } from 'react-router-dom';

const Templatedlistmain: React.FC = () => {
  const { instance, setDetailedCategory, setCategoryid } = useMyContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [categories, setCategories] = useState<any | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalEdit = () => {
    setIsModalEdit(true);
  };

  const closeModalEdit = () => {
    setIsModalEdit(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await instance.get('/category_list/');
      setCategories(response.data.results);
    } catch (err) {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const DeleteCategory = async (id: number) => {
    try {
      const response = await instance.delete(`/category/delete/${id}`);
      console.log(response, 'dasdfas');
      toast.success('Category Deleted Successfully');
      fetchCategories();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const CategoryDeti = async (id: number) => {
    try {
      const response = await instance.get(`/category_list/${id}`);
      setDetailedCategory(response?.data?.results[0]);
      setCategoryid(response.data.results[0].cat_id);
      console.log(response.data.results[0].is_active, 'dasdfas');
    } catch (err) {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className=" py-5  sticky top-[85px] bg-[#F1F5F9] dark:bg-[#1A222C] z-10 border-none">
        <NavLink
          className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#4623E9] to-[#EAABF0]  py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
          to="/templates"
        >
          Add Template
        </NavLink>
      </div>

      <div className="rounded-[10px] bg-white px-2 pt-2 pb-2.5  shadow-md dark:border-strokedark dark:bg-boxdark  xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div>
              <h4 className=" md:text-xl px-2 py-4   font-semibold text-black dark:text-white">
                Templates List
              </h4>
            </div>

            <div className="flex">
              <div className="mr-2">
                <form className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-3 ps-10 text-sm text-gray-900 h-[40px] md:w-[216px] dark:bg-meta-4  rounded-[10px] bg-[#F9FBFF]  dark:text-white "
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
              {/* <div className="relative inline-block text-left">
                <button className="inline-flex justify-center items-center w-full px-4 h-[38px]  py-2 text-sm  dark:bg-meta-4 bg-[#F9FBFF]  rounded-[10px]">
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18L16 16M16 6L20 10.125M16 6L12 10.125M16 6L16 13"
                      stroke="#808080"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18L12 13.875M8 18L4 13.875M8 18L8 11M8 6V8"
                      stroke="#808080"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sort
                </button>
              </div> */}
            </div>
          </div>
          {loading ? (
            <div className="flex mx-2 py-3 items-center  bg-white dark:bg-boxdark ">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-[#4623E9] border-t-transparent"></div>
            </div>
          ) : error ? (
            <p className="mx-2 py-3 text-red-500 dark:text-red-500">{error}</p>
          ) : (
            <table className="w-full table-auto">
              <thead className="border-b-[1px] border-[#B5B7C0] ">
                <tr className=" text-left  rounded-lg">
                  <th className="min-w-[71px] md:min-w-[10px] md:w-[10%]  py-4 px-4 font-bold text-[#B5B7C0] dark:text-[#B5B7C0]  rounded-l-lg">
                    Order No
                  </th>
                  <th className="min-w-[126px] md:min-w-[10px] md:w-[14%] py-4 px-4 font-bold text-[#B5B7C0] dark:text-[#B5B7C0]">
                    Title
                  </th>
                  {/* <th className="min-w-[50px] py-4 px-4 font-bold text-[#B5B7C0] dark:text-[#B5B7C0]">
                  Order No
                </th> */}
                  <th className="md:w-[14%] py-4 px-4 font-bold text-[#B5B7C0] dark:text-[#B5B7C0]">
                    Status
                  </th>
                  <th className="py-4 px-4 text-end font-bold text-[#B5B7C0] dark:text-[#B5B7C0] rounded-r-lg">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {categories.map((catItem: any) => (
                  <tr>
                    <td className=" font-semibold  py-5 px-4 dark:border-strokedark">
                      <p className="font-semibold text-[#000000] text-[16px] dark:text-white">
                        {catItem.category_order}
                      </p>
                    </td>
                    <td className="  py-5 px-4  dark:border-strokedark ">
                      <h5 className=" font-semibold text-[#000000] text-[16px]  dark:text-white">
                        {catItem.en}
                      </h5>
                    </td>
                    {/* <td className="  py-5 px-4 dark:border-strokedark">
                    <p className="text-[#000000] font-semibold flex items-center text-[16px] dark:text-white">
                      {catItem.category_order}
                    </p>
                  </td> */}
                    <td className="text-end py-5 px-4 dark:border-strokedark">
                      <p
                        className={`font-semibold flex items-center text-end text-[16px] ${
                          catItem.is_active == 1
                            ? 'text-[#48eb48]'
                            : 'text-[#FF0000] dark:text-[#FF0000]'
                        } dark:text-[#48eb48]`}
                      >
                        {catItem.is_active == 1 ? 'Active' : 'Inactive'}
                      </p>
                    </td>

                    <td className="  py-5 px-4 flex justify-end dark:border-strokedark">
                      <div className="flex items-center ">
                        <EditcategoryModal
                          isOpen={isModalEdit}
                          onClose={closeModalEdit}
                        />
                        {/* edit  list item button using there id */}
                        <button
                          className="hover:text-[#4623E9]"
                          onClick={() => DeleteCategory(catItem.cat_id)}
                        >
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill="red"
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill="red"
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill="red"
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill="red"
                            />
                          </svg>
                        </button>
                        {/* edit  list item button using there id */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Templatedlistmain;
