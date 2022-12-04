//icons
import { GrFormAdd } from "react-icons/gr";

//styles
import { Container, AddressesContainer, AddressesBox } from "./Address.styles";
import { ButtonOutline } from "../../../styles/Main.styles";
import { AddButton } from "../../Profile/styles/Address.styles";

//custom-hook
import { useClickOutside } from "../../../custom-hook";

//context
import { useModal, useProfile } from "../../../contexts";

//component
import { SelectAddress, NewAddress } from "../../../components";

const Address = () => {
  const { addresses, selectedAddress } = useProfile();

  const { openAddresses, setOpenAddresses, openNewAddress, setOpenNewAddress } =
    useModal();

  //custom-hook for closing address modal
  const nodeRef = useClickOutside(() => setOpenAddresses(false));

  //selected address
  const address = addresses?.find(({ id }) => id === selectedAddress);

  //change address
  const addressHandler = () => {
    setOpenAddresses(true);
  };

  return (
    <Container>
      <div className="cart__address">
        {address ? (
          <>
            <div className="cart__address-name">
              Delivery to :
              <span>
                {" "}
                {address?.name}, {address?.city}-{address?.pincode}
              </span>
            </div>
            <div>{address?.area}</div>
            <div>{address?.state}</div>
          </>
        ) : (
          <div className="cart__address-empty">Address is not selected</div>
        )}
      </div>
      <ButtonOutline
        className="cart__change-address-btn"
        onClick={addressHandler}
      >
        Change
      </ButtonOutline>

      {openAddresses && (
        <AddressesContainer>
          <AddressesBox ref={nodeRef}>
            <SelectAddress />
            <AddButton onClick={() => setOpenNewAddress(true)}>
              <GrFormAdd /> <span> ADD NEW ADDRESS</span>
            </AddButton>

            {openNewAddress && <NewAddress />}
          </AddressesBox>
        </AddressesContainer>
      )}
    </Container>
  );
};

export default Address;
