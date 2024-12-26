import { useDispatch, useSelector } from "react-redux";
import { getAddOns } from "../formSlice";

function AddOn({ add, register }) {
  const dispatch = useDispatch();
  const { pricingMonthly, addOns } = useSelector((store) => store.form);
  const { addOn, content, monthly, yearly } = add;

  const isCheck = (option) => addOns.some((item) => item.id === option.id);

  return (
    <li>
      <label className="flex cursor-pointer items-center gap-3 rounded-lg border-[1px] p-3 hover:border-purplish-blue has-[:checked]:border-purplish-blue has-[:checked]:bg-magnolia lg:gap-5 lg:p-4">
        <input
          type="checkbox"
          value={addOn}
          className="h-6 w-6 cursor-pointer"
          {...register("addOn", {
            required: "Select at least one plan",
          })}
          checked={isCheck(add)}
          onChange={() => dispatch(getAddOns(add))}
        />
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="font-medium text-marine-blue">{addOn}</p>
            <p className="text-xs text-cool-gray lg:text-sm">{content}</p>
          </div>
          <p className="text-sm text-purplish-blue lg:text-base">
            {pricingMonthly ? `+$${monthly}/mo` : `+$${yearly}/yr`}
          </p>
        </div>
      </label>
    </li>
  );
}

{
  /*  <div className="flex h-5 w-5 items-center justify-center rounded-sm border-[1px] border-light-gray bg-white peer-checked:border-purplish-blue peer-checked:bg-purplish-blue">
          <img
            src="/images/icon-checkmark.svg"
            alt="icon"
            className="hidden peer-checked:block"
          />
        </div> */
}

export default AddOn;
