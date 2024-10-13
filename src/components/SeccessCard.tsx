import { CircleCheckBig } from "lucide-react";
import { useEffect } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const SuccessCard = ({ isVisible, onClose }: Props) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;
  return (
    <div className="z-[1000] sticky top-0 max-w-md mx-auto bg-white border border-green-300 rounded-lg shadow-lg p-4">
      <div className="flex items-start">
        <CircleCheckBig className="h-6 w-6 text-green-500" />

        <div className="ml-4">
          <h3 className="text-lg font-medium text-green-800">Success!</h3>
          <p className="text-sm text-green-600 mt-1">
            Your message has been sent successfully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
