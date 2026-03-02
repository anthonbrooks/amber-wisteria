import { useState } from 'react';
import IngredientOrRestrictionPill from './IngredientOrRestrictionPill';

export default function SingleMealView({
  mealTitle = '',
  mealDesc = '',
  mealDate = '',
  mealType = '',
  preparedBy = '',
  deliveryMethod = '',
  ingredients = []
}) {
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  return (
    <div className="w-full bg-white border-2 border-gray-400 rounded-lg p-2 mx-auto">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-left text-lg font-bold mb-1">{mealTitle}</h1>
        <p className="text-md text-gray-400 font-medium">{new Date(mealDate).toDateString()}</p>
      </div>

      <p className="text-md text-gray-500 font-medium text-left mb-2 -mt-1">{mealType}</p>

      <div className="flex flex-wrap gap-3 mb-2">
        {ingredients.map((item) => (
          <IngredientOrRestrictionPill key={item} className="bg-[#F68300]">
            {item}
          </IngredientOrRestrictionPill>
        ))}
      </div>

      {isShowMoreClicked && (
        <div className="flex flex-col items-start gap-2">
          <p className="text-gray-600">{mealDesc}</p>

          <p>
            <b>Delivery Method:</b> <span className="text-gray-600">{deliveryMethod}</span>
          </p>

          <p className="-mt-3">
            <b>Prepared By:</b> <span className="text-gray-600">{preparedBy}</span>
          </p>
        </div>
      )}

      <div className="flex items-center justify-end">
        {isShowMoreClicked ? (
          <button
            onClick={() => setIsShowMoreClicked(false)}
            className="flex gap-1 text-[#F68300] items-center"
          >
            Show Less
            <svg width={15} viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setIsShowMoreClicked(true)}
            className="flex items-center gap-1 text-[#F68300]"
          >
            Show More
            <svg width={15} viewBox="0 0 1024 1024" fill="currentColor">
              <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
