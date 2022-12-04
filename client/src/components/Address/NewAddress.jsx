//icon
import { BiErrorCircle } from "react-icons/bi";

import { v4 } from "uuid";

//styles
import { FormContainer, StyledForm } from "./styles/NewAddress.styles";
import { ButtonFill, ButtonOutline } from "../../styles/Main.styles";

//form-hook
import { useForm } from "react-hook-form";

//custom-hook
import { useClickOutside } from "../../custom-hook";

//context
import { useAuth, useProfile, useModal } from "../../contexts";

//firebase
import { ref, set } from "firebase/database";
import { db } from "../../config/firebaseConfig";

const NewAddress = () => {
  // consume context
  const { user } = useAuth();
  const { addresses, editedAddress, setEditedAddress } = useProfile();
  const { setOpenNewAddress } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onchange",
    defaultValues: {
      address: editedAddress || {
        name: "",
        country: "",
        state: "",
        city: "",
        area: "",
        pincode: "",
        mobileNo: "",
      },
    },
  });

  //custom-hook for closing the address form modal
  const nodeRef = useClickOutside(() => {
    setOpenNewAddress(false);
    setEditedAddress(null);
  });

  //submitting the address data in the firebase db
  const onSubmit = async (data) => {
    let allAddresses;
    if (editedAddress) {
      allAddresses = addresses.map((address) =>
        address.id === editedAddress.id
          ? { ...address, ...data.address }
          : address
      );
    } else {
      allAddresses = [...addresses, { ...data.address, id: v4() }];
    }

    const databaseRef = ref(db, `${user.uid}/addresses`);

    try {
      await set(databaseRef, allAddresses);
    } catch (err) {
      console.log(err);
    }

    setOpenNewAddress(false);
    reset();
  };

  const errorStyles = {
    boxShadow: "0px 0px 0px 1px red",
  };

  const getErrorMessage = (validity) => {
    return (
      <div className="address__input-error">
        <BiErrorCircle />
        <span>
          {validity
            ? `Please enter valid ${validity}`
            : `This field is required.`}
        </span>
      </div>
    );
  };

  console.log(errors.address);

  return (
    <div>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)} ref={nodeRef}>
          <div className="address__input">
            <input
              style={errors.address?.name && errorStyles}
              type="text"
              {...register("address.name", { required: true })}
              placeholder="Full name"
            />
            {errors.address?.name && getErrorMessage()}
          </div>
          <div className="address__input">
            <input
              type="text"
              style={errors.address?.country && errorStyles}
              {...register("address.country", { required: true })}
              placeholder="Country"
            />
            {errors.address?.country && getErrorMessage()}
          </div>
          <div className="address__input">
            <input
              type="text"
              style={errors.address?.state && errorStyles}
              {...register("address.state", { required: true })}
              placeholder="State"
            />
            {errors.address?.state && getErrorMessage()}
          </div>
          <div className="address__input">
            <input
              type="text"
              style={errors.address?.city && errorStyles}
              {...register("address.city", { required: true })}
              placeholder="City"
            />
            {errors.address?.city && getErrorMessage()}
          </div>
          <div className="address__input">
            <input
              type="text"
              style={errors.address?.area && errorStyles}
              {...register("address.area", { required: true })}
              placeholder="Flat, House no, Area, Street"
            />
            {errors.address?.area && getErrorMessage()}
          </div>
          <div className="address__input">
            <input
              type="number"
              style={errors.address?.pincode && errorStyles}
              {...register("address.pincode", {
                required: true,
                minLength: 6,
                maxLength: 6,
              })}
              placeholder="Pincode"
            />
            {(errors?.address?.pincode?.type === "required" &&
              getErrorMessage()) ||
              (errors.address?.pincode && getErrorMessage("pin code"))}
          </div>

          <div className="address__input">
            <input
              type="number"
              style={errors?.address?.mobileNo && errorStyles}
              {...register("address.mobileNo", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              placeholder="Mobile number"
            />
            {(errors?.address?.mobileNo?.type === "required" &&
              getErrorMessage()) ||
              (errors.address?.mobileNo && getErrorMessage("mobile no"))}
          </div>

          <ButtonFill className="address__form-btn">Save</ButtonFill>
          <ButtonOutline
            className="address__form-btn"
            onClick={() => {
              setValue("address.name", "Kiran Debnath");
              setValue("address.country", "India");
              setValue("address.state", "Assam");
              setValue("address.city", "Guwahati");
              setValue(
                "address.area",
                "#100ft Ring Road, Jp Nagar - 4 Phase, Chatribari"
              );
              setValue("address.pincode", "781003");
              setValue("address.mobileNo", "9120995324");
            }}
          >
            Save with Dummy
          </ButtonOutline>
        </StyledForm>

        <div></div>
      </FormContainer>
    </div>
  );
};

export default NewAddress;
