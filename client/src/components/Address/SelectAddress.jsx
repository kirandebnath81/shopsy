//styles
import { InputContainer } from "./styles/SelectAddress.styles";
import { ButtonFill, ButtonOutline } from "../../styles/Main.styles";

//context
import { useAuth, useProfile, useModal } from "../../contexts";

//firebase
import { ref, set } from "firebase/database";
import { db } from "../../config/firebaseConfig";

const SelectAddress = () => {
  const { addresses, selectedAddress, setEditedAddress } = useProfile();
  const { user } = useAuth();
  const { setOpenAddresses, setOpenNewAddress } = useModal();

  //setting the selected address to the db
  const setAddress = async (value) => {
    const databaseRef = ref(db, `${user.uid}/selectedAddress`);
    try {
      await set(databaseRef, value);
    } catch (err) {
      console.log(err);
    }

    setOpenAddresses(false);
  };

  //Edit address
  const editHandler = (e, address) => {
    e.preventDefault();
    setEditedAddress(address);
    setOpenNewAddress(true);
  };

  //removing the selected address from the db
  const removeHandler = async (e, id) => {
    e.preventDefault();
    const newAddresses = addresses.filter((address) => address.id !== id);
    const databaseRef = ref(db, `${user.uid}/addresses`);
    try {
      await set(databaseRef, newAddresses);
    } catch (err) {
      console.log(err);
    }

    if (addresses.length === 1) {
      const databaseRef = ref(db, `${user.uid}/selectedAddress`);
      try {
        await set(databaseRef, "");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form>
      {addresses.map((address) => (
        <InputContainer key={address.id}>
          <input
            type="radio"
            name="address"
            value={address.id}
            checked={address.id === selectedAddress}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="selectedAddress__input-text">
            <div>{address.name}</div>
            <div>{address.area}</div>
            <div>
              {address.city}, {address.state}, {address.country}{" "}
              {address.pincode}
            </div>

            <div>Phone No : {address.mobileNo}</div>

            <ButtonFill
              className="selectedAddress__btn"
              onClick={(e) => editHandler(e, address)}
            >
              Edit
            </ButtonFill>
            <ButtonOutline
              className="selectedAddress__btn"
              onClick={(e) => removeHandler(e, address.id)}
            >
              Remove
            </ButtonOutline>
          </div>
        </InputContainer>
      ))}
    </form>
  );
};

export default SelectAddress;
