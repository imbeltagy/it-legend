import { useState, useContext, createContext } from 'react';

interface AccordionContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  id?: string;
}

const AccordionContext = createContext<AccordionContextType>({
  open: false,
  setOpen: () => {},
  id: '',
});

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within a AccordionContext');
  }
  return context;
};

export const AccordionProvider = ({
  children,
  defaultOpen = false,
  id,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <AccordionContext.Provider value={{ open, setOpen, id }}>{children}</AccordionContext.Provider>
  );
};
