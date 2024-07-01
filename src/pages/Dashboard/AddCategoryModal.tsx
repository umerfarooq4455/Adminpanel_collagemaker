import React, { useState } from 'react';
import ukflag from './falgicon/united-kingdom.png';
import German from './falgicon/circle.png';
import china from './falgicon/china.png';
import Bangali from './falgicon/bangladesh.png';
import franch from './falgicon/france.png';
import indonesia from './falgicon/indonesia-flag.png';
import iran from './falgicon/iran.png';
import italy from './falgicon/italy (1).png';
import japan from './falgicon/japan.png';
import korea from './falgicon/south-korea.png';
import portugal from './falgicon/portugal.png';
import russia from './falgicon/russia.png';
import saudi from './falgicon/saudi-arabia.png';
import turkey from './falgicon/turkey.png';
import danmark from './falgicon/flag.png';
import malyshian from './falgicon/flag (1).png';
import netherland from './falgicon/flag (3).png';
import thialand from './falgicon/flag (4).png';
import spain from './falgicon/spain.png';
import hindi from './falgicon/flag (6).png';
import sv from './falgicon/sweden-flag.png';
import ku from './falgicon/flag (2).png';
import iw from './falgicon/flag (7).png';
import ur from './falgicon/pakistan.png';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const options = [
    { value: 'en', label: <img src={ukflag} width="24" alt="UK Flag" /> },
    {
      value: 'de',
      label: <img src={German} width="24" alt="German Flag" />,
    },
    {
      value: 'zh',
      label: <img src={china} width="24" alt="China Flag" />,
    },
    {
      value: 'bn',
      label: <img src={Bangali} width="24" alt="Bengali Flag" />,
    },
    {
      value: 'fr',
      label: <img src={franch} width="24" alt="French Flag" />,
    },
    {
      value: 'in',
      label: <img src={indonesia} width="24" alt="Indonesian Flag" />,
    },
    { value: 'fa', label: <img src={iran} width="24" alt="Iran Flag" /> },
    {
      value: 'it',
      label: <img src={italy} width="24" alt="Italy Flag" />,
    },
    {
      value: 'ja',
      label: <img src={japan} width="24" alt="Japan Flag" />,
    },
    { value: 'ko', label: <img src={korea} width="24" alt="Korea Flag" /> },
    {
      value: 'pt',
      label: <img src={portugal} width="24" alt="Portugal Flag" />,
    },
    {
      value: 'ru',
      label: <img src={russia} width="24" alt="Russia Flag" />,
    },
    {
      value: 'ar',
      label: <img src={saudi} width="24" alt="Saudi Arabia Flag" />,
    },
    {
      value: 'tr',
      label: <img src={turkey} width="24" alt="Turkey Flag" />,
    },
    {
      value: 'da',
      label: <img src={danmark} width="24" alt="Denmark Flag" />,
    },
    {
      value: 'ur',
      label: <img src={ur} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'ms',
      label: <img src={malyshian} width="24" alt="Malaysia Flag" />,
    },
    {
      value: 'nl',
      label: <img src={netherland} width="24" alt="Netherlands Flag" />,
    },
    {
      value: 'th',
      label: <img src={thialand} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'es',
      label: <img src={spain} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'hi',
      label: <img src={hindi} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'sv',
      label: <img src={sv} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'ku',
      label: <img src={ku} width="24" alt="Thailand Flag" />,
    },
    {
      value: 'iw',
      label: <img src={iw} width="24" alt="Thailand Flag" />,
    },
  ];

  const [inputs, setInputs] = useState(
    options.map((option) => ({ lang: option.value, langLabel: option.label })),
  );

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex`}
    >
      <div className="relative py-4 px-2 bg-white dark:bg-boxdark w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="flex justify-between px-2 mb-3">
          <div className="flex items-center ">
            <h1 className="text-[16px] text-[#000] dark:text-white font-bold mb-4">
              Add New Category
            </h1>
          </div>
          <div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-2">
          <div className="flex items-center justify-between ">
            <h1 className="text-[14px] text-[#000] dark:text-white font-bold ">
              Titles
            </h1>
            <h1 className="text-[14px] text-[#000] dark:text-white font-bold mr-[20px]">
              Languages
            </h1>
          </div>
          <div className="max-h-[494px] overflow-y-scroll ">
            {inputs.map((input, index) => (
              <div key={index} className="mt-[10px] flex items-center mr-2">
                <div className="w-4/5 flex  flex-col">
                  <input
                    type="text"
                    placeholder="Add Title"
                    className="block w-full resize-none rounded-[10px] border border-[#B8BAC7] bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]"
                  />
                </div>
                <div className="w-1/5 flex items-center justify-center ml-[10px]">
                  <span className=" w-full flex resize-none rounded-[10px] border border-[#B8BAC7]  bg-white p-2.5 text-[16px] font-normal text-[#1B254B] dark:border-meta-4 dark:bg-meta-4 dark:text-white dark:placeholder-[#fff]">
                    {' '}
                    {input.langLabel} <span className="ml-3">{input.lang}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center mb-2 mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4623E9] to-[#EAABF0]   py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
