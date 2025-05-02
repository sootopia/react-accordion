import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionItemProps = {
  id: string;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onClick: (id: string) => void;
};

const AccordionItem = ({ id, title, content, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border border-gray-300 rounded-xl mb-2 overflow-hidden shadow">
      <button
        className="w-full text-gray-800 text-left px-4 py-3 font-semibold flex justify-between items-center cursor-pointer outline-none"
        onClick={() => onClick(id)}
      >
        {title}
        <span>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-2 text-gray-700 text-sm border-t border-gray-200 bg-gray-50">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type AccordionGroupProps = {
  items: { id: string; title: string; content: ReactNode }[];
};

const AccordionGroup = ({ items }: AccordionGroupProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
