import { Button } from "./ui/button";

type PageNavigationProps = {
  currentPage: number;
  totalPages: number | undefined;
  handlePageChange: (direction: string) => void;
};

const PageNavigation = ({
  currentPage,
  totalPages,
  handlePageChange,
}: PageNavigationProps) => {
  return (
    <div className="flex gap-2 justify-center items-center p-5">
      <Button
        className="bg-blue-600 rounded-lg p-4"
        onClick={() => handlePageChange("prev")}
        disabled={currentPage < 2}
      >
        prev
      </Button>
      <p className="p-1 border border-black rounded-lg">
        {currentPage} / {totalPages}
      </p>
      <Button
        className="bg-blue-600 rounded-lg p-4"
        onClick={() => handlePageChange("next")}
        disabled={currentPage === totalPages}
      >
        next
      </Button>
    </div>
  );
};

export default PageNavigation;
