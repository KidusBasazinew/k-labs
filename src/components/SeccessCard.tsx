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
        onClose(); // Call the onClose function after 3 seconds
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  // Conditionally render based on the isVisible prop
  if (!isVisible) return null;
  return (
    <div className="max-w-md mx-auto bg-white border border-green-300 rounded-lg shadow-lg p-4">
      <div className="flex items-start">
        {/* Success Icon */}
        <CircleCheckBig className="h-6 w-6 text-green-500" />

        {/* Text content */}
        <div className="ml-4">
          <h3 className="text-lg font-medium text-green-800">Success!</h3>
          <p className="text-sm text-green-600 mt-1">
            Your operation has been completed successfully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
